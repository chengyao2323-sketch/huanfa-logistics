import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our China Freight Forwarding Team",
  description: "Meet Huanfa Logistics, your Shenzhen freight team for shipping from China to the USA, Canada and Europe. View our operations and company registration.",
  path: "/about",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
