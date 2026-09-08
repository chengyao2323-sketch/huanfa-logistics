import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/email";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid inquiry format" }, { status: 400 });
  }

  if (!rawBody || typeof rawBody !== "object" || Array.isArray(rawBody)) {
    return NextResponse.json({ error: "Invalid inquiry format" }, { status: 400 });
  }

  const fields = ["companyName", "contactPerson", "email", "phone", "origin", "destination", "cargoType", "weightVolume", "remarks"] as const;
  const source = rawBody as Record<string, unknown>;
  const body = {} as Record<(typeof fields)[number], string>;
  for (const field of fields) {
    const value = source[field];
    if (value !== undefined && typeof value !== "string") {
      return NextResponse.json({ error: "Invalid inquiry field: " + field }, { status: 400 });
    }
    body[field] = typeof value === "string" ? value.trim() : "";
  }

  try {
    if (!body.contactPerson) {
      return NextResponse.json(
        { error: "Missing required field: contactPerson" },
        { status: 400 }
      );
    }

    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: "Email or WhatsApp is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (body.email && !emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sent = await sendInquiryEmail(body);
    if (!sent) {
      return NextResponse.json(
        { error: "Inquiry service is temporarily unavailable. Please contact us by email or WhatsApp." },
        { status: 503 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Inquiry submission failed:", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json(
      { error: "We could not confirm your inquiry. Please contact us by email or WhatsApp." },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
