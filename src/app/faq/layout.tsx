import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "China Freight Forwarding FAQ",
  description: "Answers about freight quotes, customs clearance, DDP shipping, transit times, cargo insurance, and delivery from China.",
  path: "/faq",
});

export default function FaqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
