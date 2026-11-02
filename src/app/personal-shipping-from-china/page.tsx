import { createPageMetadata } from "@/lib/seo";
import PersonalShippingClient from "./PersonalShippingClient";

export const metadata = createPageMetadata({
  title: "Furniture & Personal Shipping from China",
  description: "Ship furniture and home goods from China with supplier pickup and Shenzhen consolidation. Review packing, costs and residential delivery requirements.",
  path: "/personal-shipping-from-china",
});

export default function PersonalShippingPage() {
  return <PersonalShippingClient />;
}
