import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Terms",
  description: "Shipping terms, DDP/DDU details, charges, and claims information for Huanfa Logistics.",
  alternates: { canonical: "/shipping-terms" },
};

const sections = [
  {
    heading: "What Is Included",
    body: [
      "For door-to-door shipments, our service may include factory pickup, consolidation at our Shenzhen warehouse, export declaration, ocean or air freight, import clearance, and final-mile delivery.",
      "The exact scope is confirmed in your written quotation before shipment.",
    ],
  },
  {
    heading: "DDP and DDU",
    body: [
      "DDP (Delivered Duty Paid) means duties, taxes, and import clearance are included in the total price.",
      "DDU (Delivered Duty Unpaid) means destination duties and taxes are paid separately by the consignee.",
    ],
  },
  {
    heading: "Charging Basis",
    body: [
      "Freight charges may be based on actual weight, volumetric weight, or cubic meters, whichever applies to the selected service and carrier.",
      "Oversized cargo, batteries, residential delivery, liftgate, and special handling may carry additional charges confirmed in advance.",
    ],
  },
  {
    heading: "Delivery Requirements",
    body: [
      "Please provide accurate delivery addresses, contact information, and any access restrictions before shipment.",
      "Re-delivery fees may apply when delivery cannot be completed because of incorrect information or absence at the delivery location.",
    ],
  },
  {
    heading: "Insurance and Claims",
    body: [
      "Cargo insurance is available on request. If cargo is damaged or lost, notify us within the agreed timeframe and provide photos or proof of delivery.",
      "A dedicated claim specialist will document the issue and manage the claim process with you.",
    ],
  },
];

export default function ShippingTermsPage() {
  return <LegalPage title="Shipping Terms" updated="August 2026" sections={sections} />;
}
