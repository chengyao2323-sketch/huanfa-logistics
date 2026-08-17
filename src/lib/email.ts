import { sendMail } from "cloudflare-smtp";

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
}): Promise<boolean> {
  const env = (globalThis as any).process?.env ?? {};
  const apiKey = env.RESEND_API_KEY;
  const notifyTo = env.NOTIFY_EMAIL;
  const subject = "New Inquiry - " + data.companyName;
  const body = [
    "Company: " + data.companyName,
    "Contact: " + data.contactPerson,
    "Email: " + data.email,
    "Phone: " + data.phone,
    "Origin: " + data.origin,
    "Destination: " + data.destination,
    "Cargo: " + data.cargoType,
    "Weight/Volume: " + data.weightVolume,
    "Remarks: " + data.remarks,
    "",
    "--- Sent via Huanfa Logistics Website ---",
  ].join("\n");

  const smtpHost = env.SMTP_HOST;
  const smtpUser = env.SMTP_USER;
  const smtpPass = env.SMTP_PASS;
  if (smtpHost && smtpUser && smtpPass && notifyTo) {
    await sendMail(
      {
        host: smtpHost,
        port: Number(env.SMTP_PORT || 465),
        username: smtpUser,
        password: smtpPass.replace(/\s+/g, ""),
        from: env.SMTP_FROM || smtpUser,
        to: notifyTo,
        secureTransport: Number(env.SMTP_PORT || 465) === 587 ? "starttls" : "tls",
      },
      {
        subject,
        replyTo: data.email,
        text: body,
      }
    );
    console.log("Inquiry email sent to", notifyTo);
    return true;
  }

  if (!apiKey || !notifyTo) {
    console.log("Email not configured. Inquiry data:", JSON.stringify(data, null, 2));
    console.log("To enable: set SMTP_HOST/SMTP_USER/SMTP_PASS or RESEND_API_KEY, plus NOTIFY_EMAIL in Cloudflare Pages");
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({ from: "Huanfa Logistics <onboarding@resend.dev>", to: [notifyTo], subject, text: body }),
  });
  if (!response.ok) throw new Error("Email API error (" + response.status + "): " + (await response.text()));
  console.log("Inquiry email sent to", notifyTo);
  return true;
}
