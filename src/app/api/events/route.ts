import { NextRequest, NextResponse } from "next/server";
import { recordConversion } from "@/lib/conversions";

export const runtime = "edge";
const paths = new Set(["/", "/about", "/contact", "/faq", "/shipment-cases", "/personal-shipping-from-china", "/shipping-from-china-to-usa", "/services", "/services/air-freight", "/services/sea-freight", "/services/door-to-door", "/services/ecommerce-logistics", "/services/warehousing", "/services/customs-insurance", "/privacy", "/terms", "/cookies", "/shipping-terms"]);

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) {
    return new NextResponse(null, { status: 403 });
  }
  const text = await request.text();
  if (text.length > 256) return new NextResponse(null, { status: 400 });
  try {
    const body = JSON.parse(text);
    // Completed inquiries are recorded by the inquiry backend, never by clients.
    if (body.event !== "whatsapp_click" || !paths.has(body.path)) {
      return new NextResponse(null, { status: 400 });
    }
    const recorded = recordConversion("whatsapp_click", body.path);
    return new NextResponse(null, { status: recorded ? 204 : 503 });
  } catch {
    return new NextResponse(null, { status: 400 });
  }
}
