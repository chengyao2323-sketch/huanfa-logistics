import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Request a Freight Quote from China",
  description: "Request a China freight quote from Huanfa Logistics. Share cargo details, supplier locations and destination for sea, air or door delivery options.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
