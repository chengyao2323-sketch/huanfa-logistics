import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Door-to-Door Shipping from China",
  description: "Door-to-door freight from China with pickup, consolidation, customs coordination, ocean or air transport, and final delivery.",
  path: "/services/door-to-door",
});

export default function DoorToDoorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
