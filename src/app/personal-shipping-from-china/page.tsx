import type { Metadata } from "next";
import PersonalShippingClient from "./PersonalShippingClient";

export const metadata: Metadata = {
  title: "Personal Shipping from China to Your Home",
  description: "Door-to-door shipping support for individuals buying furniture, home goods, building materials, and other products from suppliers in China.",
  alternates: { canonical: "/personal-shipping-from-china" },
};

export default function PersonalShippingPage() {
  return <PersonalShippingClient />;
}
