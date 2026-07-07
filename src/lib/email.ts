import net from "net";
import tls from "tls";

export async function sendInquiryEmail(data: {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  cargoType: string;
  weightVolume: string;
  remarks: string;
}): Promise<void> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 0;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    console.log("SMTP not configured. Inquiry data:", JSON.stringify(data, null, 2));
    console.log("To enable email, set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local");
    return;
  }

  const notifyTo = process.env.NOTIFY_EMAIL || user;
  const subject = `\u65B0\u8BE2\u76D8 - ${data.companyName}`;
  const body = [
    `\u516C\u53F8\u540D\u79F0: ${data.companyName}`,
    `\u8054\u7CFB\u4EBA: ${data.contactPerson}`,
    `\u90AE\u7BB1: ${data.email}`,
    `\u7535\u8BDD: ${data.phone}`,
    `\u8D77\u8FD0\u5730: ${data.origin}`,
    `\u76EE\u7684\u5730: ${data.destination}`,
    `\u8D27\u7269\u7C7B\u578B: ${data.cargoType}`,
    `\u91CD\u91CF/\u4F53\u79EF: ${data.weightVolume}`,
    `\u5907\u6CE8: ${data.remarks}`,
    "",
    "--- \u6765\u81EA\u7115\u53D1\u56FD\u9645\u7269\u6D41\u5B98\u7F51\u8BE2\u76D8 ---",
  ].join("\r\n");

  return new Promise((resolve, reject) => {
    let rawSocket = net.createConnection(port, host, () => {
      readResponse(rawSocket)
        .then(() => sendCmd(rawSocket, `EHLO ${host}`))
        .then(() => sendCmd(rawSocket, "STARTTLS", 220))
        .then(() => {
          const tlsSocket = tls.connect({ socket: rawSocket as any, host: host!, rejectUnauthorized: false }, () => {
            const s = tlsSocket as any;
            sendCmd(s, `EHLO ${host}`, 250)
              .then(() => {
                const login = Buffer.from(user).toString("base64");
                const pwd = Buffer.from(pass).toString("base64");
                return sendCmd(s, "AUTH LOGIN", 334)
                  .then(() => sendCmd(s, login, 334))
                  .then(() => sendCmd(s, pwd, 235));
              })
              .then(() => sendCmd(s, `MAIL FROM:<${user}>`, 250))
              .then(() => sendCmd(s, `RCPT TO:<${notifyTo}>`, 250))
              .then(() => sendCmd(s, "DATA", 354))
              .then(() => {
                const msg = [
                  `From: ${user}`,
                  `To: ${notifyTo}`,
                  `Subject: ${subject}`,
                  "MIME-Version: 1.0",
                  "Content-Type: text/plain; charset=UTF-8",
                  "",
                  body,
                ].join("\r\n");
                return sendCmd(s, msg + "\r\n.", 250);
              })
              .then(() => sendCmd(s, "QUIT", 221))
              .then(() => resolve())
              .catch(reject);
          });
          tlsSocket.on("error", reject);
        })
        .catch(reject);
    });

    rawSocket.setTimeout(30000, () => {
      try { rawSocket.destroy(); } catch (e) {}
      reject(new Error("SMTP timeout"));
    });
    rawSocket.on("error", reject);
  });
}

function readResponse(socket: net.Socket): Promise<string> {
  return new Promise((resolve, reject) => {
    let buf = "";
    const onData = (chunk: Buffer) => {
      buf += chunk.toString();
      if (buf.endsWith("\r\n") && /^\d{3}\s/.test(buf.trim().split("\r\n").pop()!)) {
        socket.removeListener("data", onData);
        resolve(buf);
      }
    };
    socket.on("data", onData);
    setTimeout(() => { socket.removeListener("data", onData); reject(new Error("Timeout")); }, 15000);
  });
}

function sendCmd(socket: any, cmd: string, expect?: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const onData = (chunk: Buffer) => {
      const resp = chunk.toString();
      const code = parseInt(resp.substring(0, 3), 10);
      if (expect !== undefined && code !== expect) {
        reject(new Error(`SMTP ${code}: ${resp}`));
      }
      resolve(resp);
    };
    socket.once("data", onData);
    socket.write(cmd + "\r\n");
    setTimeout(() => { socket.removeListener("data", onData); reject(new Error("Cmd timeout")); }, 10000);
  });
}
