import { createPageMetadata } from "@/lib/seo";
import PersonalShippingClient from "./PersonalShippingClient";

export const metadata = createPageMetadata({
  title: "Personal Shipping from China to Your Home",
  description: "Door-to-door shipping support for individuals buying furniture, home goods, building materials, and other products from suppliers in China.",
  path: "/personal-shipping-from-china",
});

export default function PersonalShippingPage() {
  return <PersonalShippingClient />;
}
