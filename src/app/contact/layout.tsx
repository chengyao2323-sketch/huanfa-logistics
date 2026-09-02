import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Request a Freight Quote from China",
  description: "Contact Huanfa Logistics for an ocean, air, express, or door-to-door freight quote from China.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
