import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our China Freight Forwarding Team",
  description: "Learn about Huanfa International Logistics, our Shenzhen operations, company registration, and freight coordination experience.",
  path: "/about",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
