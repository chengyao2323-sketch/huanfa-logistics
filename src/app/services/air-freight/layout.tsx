import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Air Freight from China",
  description: "Air freight coordination from China for time-sensitive commercial cargo, including pickup, export handling, and final delivery options.",
  path: "/services/air-freight",
});

export default function AirFreightLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
