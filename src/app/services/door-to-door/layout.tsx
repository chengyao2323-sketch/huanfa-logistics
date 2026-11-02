import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "DDP Shipping from China: Air & Sea",
  description: "DDP air and sea shipping from China to the USA, Canada and Europe; Australia also available. Clearance, import duties, taxes and agreed-address delivery.",
  path: "/services/door-to-door",
});

export default function DoorToDoorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
