import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ["companyName", "contactPerson", "email"];
    for (const field of requiredFields) {
      if (!body[field] || !body[field].trim()) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email notification
    await sendInquiryEmail(body);

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Allow OPTIONS for CORS preflight if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
