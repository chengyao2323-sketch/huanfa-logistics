import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "E-commerce and Amazon FBA Logistics from China",
  description: "China freight support for e-commerce sellers and Amazon FBA shipments, including pickup, labeling coordination, consolidation, and delivery.",
  path: "/services/ecommerce-logistics",
});

export default function EcommerceLogisticsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
