const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Isolate the route: no SMTP module, credentials or network calls are loaded.
const source = fs.readFileSync(path.join(__dirname, '../src/app/api/inquiry/route.ts'), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
function harness(sendResult = true) {
  const calls = [];
  const logs = [];
  const exports = {};
  vm.runInNewContext(js, {
    exports,
    console: { error: (...args) => logs.push(args) },
    require: id => {
      if (id === 'next/server') return { NextResponse: { json: (body, options) => Response.json(body, options) } };
      if (id === '@/lib/email') return { sendInquiryEmail: async body => {
        calls.push(body);
        if (sendResult instanceof Error) throw sendResult;
        return sendResult;
      } };
      throw new Error('Unexpected module: ' + id);
    },
  });
  return { ...exports, calls, logs };
}
function request(body) { return { json: async () => body }; }

test('trims fields and permits personal inquiry without a company', async () => {
  const app = harness();
  const res = await app.POST(request({ contactPerson: ' Test Buyer ', email: ' buyer@example.test ', remarks: ' Customer type: Personal purchase ' }));
  assert.equal(res.status, 200);
  assert.equal((await res.json()).success, true);
  assert.equal(app.calls.length, 1);
  assert.equal(app.calls[0].email, 'buyer@example.test');
  assert.equal(app.calls[0].companyName, '');
  assert.equal(app.calls[0].remarks, 'Customer type: Personal purchase');
});
test('accepts phone-only inquiry', async () => {
  const app = harness();
  assert.equal((await app.POST(request({ contactPerson: 'Test Buyer', phone: '+1 555 123 4567' }))).status, 200);
  assert.equal(app.calls[0].email, '');
});
test('rejects malformed JSON without sending', async () => {
  const app = harness();
  assert.equal((await app.POST({ json: async () => { throw new SyntaxError(); } })).status, 400);
  assert.equal(app.calls.length, 0);
});
test('rejects arrays, null and non-string fields without sending', async () => {
  const app = harness();
  for (const body of [null, [], 'bad', { contactPerson: 1 }, { contactPerson: 'Test', phone: {} }]) {
    assert.equal((await app.POST(request(body))).status, 400);
  }
  assert.equal(app.calls.length, 0);
});
test('rejects empty name, missing contact or invalid email', async () => {
  const app = harness();
  for (const body of [{ contactPerson: ' ', email: 'buyer@example.test' }, { contactPerson: 'Test', phone: ' ' }, { contactPerson: 'Test', email: 'invalid' }]) {
    assert.equal((await app.POST(request(body))).status, 400);
  }
  assert.equal(app.calls.length, 0);
});
test('unconfigured delivery never returns false success', async () => {
  const app = harness(false);
  const res = await app.POST(request({ contactPerson: 'Test', email: 'buyer@example.test' }));
  assert.equal(res.status, 503);
  assert.equal((await res.json()).success, undefined);
});
test('delivery exceptions do not disclose customer or provider details', async () => {
  const app = harness(new Error('sensitive provider detail'));
  const res = await app.POST(request({ contactPerson: 'Test', email: 'buyer@example.test' }));
  assert.equal(res.status, 500);
  assert.ok(!JSON.stringify(await res.json()).includes('sensitive'));
  assert.ok(!JSON.stringify(app.logs).includes('buyer@example.test'));
  assert.ok(!JSON.stringify(app.logs).includes('sensitive'));
});
