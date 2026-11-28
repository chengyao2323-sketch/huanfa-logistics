const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

// Isolate the route: no SMTP module, credentials or network calls are loaded.
const source = fs.readFileSync(path.join(__dirname, '../src/app/api/inquiry/route.ts'), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const sourceExports = {};
vm.runInNewContext(ts.transpileModule(fs.readFileSync(path.join(__dirname, '../src/lib/inquiry-source.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: sourceExports });
function harness(sendResult = true) {
  const calls = [];
  const logs = [];
  const exports = {};
  vm.runInNewContext(js, {
    exports,
    console: { error: (...args) => logs.push(args) },
    require: id => {
      if (id === '@/lib/inquiry-source') return sourceExports;
      if (id === 'next/server') return { NextResponse: { json: (body, options) => Response.json(body, options) } };
      if (id === '@/lib/conversions') return { recordConversion: () => true };
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

test('includes available attribution without trusting arbitrary URLs or injected lines', async () => {
  const app = harness();
  await app.POST(request({ contactPerson: 'Test', phone: '+1 555 123 4567', attribution: { referrerHost: 'www.google.com', landingPage: '/shipment-cases', campaignSource: 'newsletter', campaignMedium: 'email', submissionPage: '/fake' } }));
  assert.equal(app.calls[0].attribution.referrerHost, 'www.google.com');
  assert.equal(app.calls[0].attribution.landingPage, '/shipment-cases');
  assert.equal(app.calls[0].attribution.submissionPage, '/contact');
  const cleaned = sourceExports.sanitizeInquirySource({ referrerHost: 'google.com\nForged: yes', landingPage: '/contact?email=private', campaignSource: 'private@example.com', campaignMedium: 'x'.repeat(81) });
  assert.equal(cleaned.referrerHost, '');
  assert.equal(cleaned.landingPage, 'Unknown');
  assert.equal(cleaned.campaignSource, '');
  assert.equal(cleaned.campaignMedium, '');
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
