import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/email";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const requiredFields = ["companyName", "contactPerson", "email"];
    for (const field of requiredFields) {
      if (!body[field] || !body[field].trim()) {
        return NextResponse.json(
          { error: "Missing required field: " + field },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const sent = await sendInquiryEmail(body);
    if (!sent) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }
    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
