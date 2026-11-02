import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "China Shipping Services: DDP, Air & Sea",
  description: "Explore DDP shipping, air and sea freight, supplier consolidation and e-commerce logistics from China. Get a quote for your goods and destination.",
  path: "/services",
});

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
