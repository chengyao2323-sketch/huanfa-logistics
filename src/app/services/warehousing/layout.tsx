import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Shenzhen Cargo Consolidation and Warehousing",
  description: "Supplier pickup, cargo receiving, consolidation, inspection coordination, repacking, labeling, and export preparation in Shenzhen.",
  path: "/services/warehousing",
});

export default function WarehousingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
