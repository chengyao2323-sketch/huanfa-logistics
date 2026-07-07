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
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.NOTIFY_EMAIL;
  if (!apiKey || !notifyTo) {
    console.log('Email not configured. Inquiry data:', JSON.stringify(data, null, 2));
    console.log('To enable: set RESEND_API_KEY and NOTIFY_EMAIL in Cloudflare Pages');
    return;
  }
  const subject = 'New Inquiry - ' + data.companyName;
  const body = [
    'Company: ' + data.companyName,
    'Contact: ' + data.contactPerson,
    'Email: ' + data.email,
    'Phone: ' + data.phone,
    'Origin: ' + data.origin,
    'Destination: ' + data.destination,
    'Cargo: ' + data.cargoType,
    'Weight/Volume: ' + data.weightVolume,
    'Remarks: ' + data.remarks,
    '',
    '--- Sent via Huanfa Logistics Website ---',
  ].join('\n');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: 'Huanfa Logistics <onboarding@resend.dev>', to: [notifyTo], subject, text: body }),
  });
  if (!response.ok) throw new Error('Email API error (' + response.status + '): ' + (await response.text()));
  console.log('Inquiry email sent to', notifyTo);
}
