export type InquirySource = {
  referrerHost: string;
  landingPage: string;
  submissionPage: string;
  campaignSource: string;
  campaignMedium: string;
};

const pages = new Set(["/", "/contact", "/about", "/faq", "/shipment-cases", "/personal-shipping-from-china", "/shipping-from-china-to-usa", "/services", "/services/sea-freight", "/services/air-freight", "/services/door-to-door", "/services/warehousing", "/services/ecommerce-logistics", "/services/customs-insurance", "/privacy", "/terms", "/cookies", "/shipping-terms"]);
const pagePath = (value: unknown) => typeof value === "string" && pages.has(value) ? value : "Unknown";
const campaign = (value: unknown) => typeof value === "string" && /^[a-zA-Z0-9_-]{1,80}$/.test(value) ? value : "";

// Treat browser attribution as a hint, never as verified identity or location.
export function sanitizeInquirySource(raw: unknown): InquirySource {
  const data = raw && typeof raw === "object" && !Array.isArray(raw) ? raw as Record<string, unknown> : {};
  const host = typeof data.referrerHost === "string" && data.referrerHost.length <= 253 && /^[a-zA-Z0-9.-]+$/.test(data.referrerHost) ? data.referrerHost.toLowerCase() : "";
  return { referrerHost: host, landingPage: pagePath(data.landingPage), submissionPage: "/contact", campaignSource: campaign(data.campaignSource), campaignMedium: campaign(data.campaignMedium) };
}

const key = "huanfa-inquiry-source-v1";
let currentVisit: InquirySource | undefined;
export function captureInquirySource(): InquirySource | undefined {
  if (typeof window === "undefined") return;
  if (currentVisit) return currentVisit;
  try {
    const saved = sessionStorage.getItem(key);
    if (saved) return currentVisit = sanitizeInquirySource(JSON.parse(saved));
  } catch { /* Storage is optional; inquiries must still work. */ }
  let referrerHost = "";
  try {
    const referrer = new URL(document.referrer);
    if (referrer.hostname !== location.hostname && !["huanfalogistics.com", "www.huanfalogistics.com"].includes(referrer.hostname)) referrerHost = referrer.hostname;
  } catch { /* Direct or unavailable referrer. */ }
  const params = new URLSearchParams(location.search);
  currentVisit = sanitizeInquirySource({ referrerHost, landingPage: location.pathname, campaignSource: params.get("utm_source"), campaignMedium: params.get("utm_medium") });
  try { sessionStorage.setItem(key, JSON.stringify(currentVisit)); } catch { /* Keep an in-memory fallback. */ }
  return currentVisit;
}
