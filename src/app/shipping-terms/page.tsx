import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Terms",
  description: "Shipping scope, customs responsibilities, charges and claims information for Huanfa Logistics.",
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
    heading: "Duties and Customs Responsibilities",
    body: [
      "Door-to-door shipping does not automatically include all duties, taxes or destination charges. DDP options are reviewed against the cargo and destination before booking.",
      "The written quotation must identify included charges, exclusions, the responsible importer, required documentation and who pays duties and taxes. A freight service quotation does not replace the sales contract between buyer and seller.",
    ],
  },
  {
    heading: "Charging Basis",
    body: [
      "Freight charges may be based on actual weight, volumetric weight, or cubic meters, whichever applies to the selected service and carrier.",
      "Oversized cargo, batteries, residential delivery, liftgate, and special handling may carry additional charges confirmed in advance. Inspection, storage, re-delivery or changes to declared cargo details may also result in additional costs under the applicable terms.",
    ],
  },
  {
    heading: "Delivery Requirements",
    body: [
      "Please provide accurate delivery addresses, contact information, and any access restrictions before shipment.",
      "Unloading, liftgate, upstairs or indoor delivery, assembly and installation are not automatically included. Availability and pricing must be confirmed in writing.",
      "Re-delivery fees may apply when delivery cannot be completed because of incorrect information or absence at the delivery location.",
    ],
  },
  {
    heading: "Insurance and Claims",
    body: [
      "Cargo insurance is available on request before shipment. Confirm the policy, insured value, exclusions, deductible and applicable claim deadlines before purchasing cover.",
      "If you notice damage or loss, contact us promptly, preferably within 24 hours, and retain the packaging, photos and delivery records. This notification request does not replace the deadlines in the applicable policy or transport terms.",
      "We assist with claim documentation and follow-up. Claim acceptance and compensation are determined under the applicable insurance policy or transport terms and are not guaranteed.",
    ],
  },
];

export default function ShippingTermsPage() {
  return <LegalPage title="Shipping Terms" updated="September 2026" sections={sections} />;
}
