import { getRequestContext } from "@cloudflare/next-on-pages";

type Conversion = "whatsapp_click" | "inquiry_submitted";
type Dataset = { writeDataPoint: (point: { blobs: string[]; doubles: number[] }) => void };

// Aggregate actions only: no contact details, identifiers, IPs or query strings.
export function recordConversion(event: Conversion, path: string): boolean {
  try {
    const env = getRequestContext().env as unknown as { CONVERSIONS?: Dataset };
    if (!env.CONVERSIONS) return false;
    env.CONVERSIONS.writeDataPoint({ blobs: [event, path], doubles: [1] });
    return true;
  } catch {
    // Analytics must never interrupt an inquiry or outbound contact link.
    return false;
  }
}
