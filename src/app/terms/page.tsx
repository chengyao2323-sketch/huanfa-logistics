import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Huanfa International Logistics website and services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By using this website or requesting our freight services, you agree to these Terms & Conditions.",
    ],
  },
  {
    heading: "Services",
    body: [
      "Huanfa International Logistics provides freight forwarding services including factory pickup, consolidation, export customs, ocean and air freight, import clearance, and final-mile delivery.",
      "Specific services, prices, and transit times are confirmed in writing before shipment.",
    ],
  },
  {
    heading: "Quotes and Acceptance",
    body: [
      "Quotes are based on the information provided and may change if cargo details, dimensions, weight, destination, or service requirements change.",
      "A quotation becomes binding only when both parties confirm the booking in writing.",
    ],
  },
  {
    heading: "Customer Responsibilities",
    body: [
      "Customers are responsible for providing accurate cargo descriptions, commercial invoices, packing lists, and any documents required for customs clearance.",
      "Customers must ensure their goods are legal to export from China and legal to import into the destination country.",
    ],
  },
  {
    heading: "Prohibited and Restricted Goods",
    body: [
      "Illegal, counterfeit, dangerous, or undeclared goods are not accepted. Restricted goods such as batteries and oversized cargo are handled only when declared in advance and compliant with applicable regulations.",
    ],
  },
  {
    heading: "Liability and Claims",
    body: [
      "Our liability is limited to the terms stated in the booking confirmation and applicable law. Claims for damage, loss, or delay must be reported in accordance with our claims procedure and supported by photos or proof of delivery.",
      "Cargo insurance is available on request and covers risks only where expressly agreed.",
    ],
  },
  {
    heading: "Governing Law",
    body: [
      "These terms are governed by the laws of the People's Republic of China, unless otherwise agreed in writing for a specific shipment.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" updated="August 2026" sections={sections} />;
}
