import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sea Freight from China to the USA and Europe",
  description: "FCL and LCL ocean freight from China to the USA and Europe with pickup, consolidation, customs coordination, and delivery options.",
  path: "/services/sea-freight",
});

export default function SeaFreightLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
