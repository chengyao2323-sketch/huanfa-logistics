import { createPageMetadata } from "@/lib/seo";
import PersonalShippingClient from "./PersonalShippingClient";

export const metadata = createPageMetadata({
  title: "Furniture & Personal Shipping from China",
  description: "Ship furniture and home goods from China with supplier pickup, Shenzhen consolidation and door delivery planning. Review packing, costs and residential delivery needs.",
  path: "/personal-shipping-from-china",
});

export default function PersonalShippingPage() {
  return <PersonalShippingClient />;
}
