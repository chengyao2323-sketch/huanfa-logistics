import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "E-commerce and Amazon FBA Logistics from China",
  description: "E-commerce and Amazon FBA shipping from China to the USA, Canada and Europe, with supplier pickup, labeling coordination, consolidation and delivery.",
  path: "/services/ecommerce-logistics",
});

export default function EcommerceLogisticsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
