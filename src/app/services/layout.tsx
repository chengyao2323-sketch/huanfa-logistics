import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Freight Forwarding Services from China",
  description: "Ocean freight, air freight, door-to-door delivery, e-commerce logistics, and cargo handling services from China.",
  path: "/services",
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
