import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Huanfa International Logistics collects, uses, and protects your information.",
};

const sections = [
  {
    heading: "Who We Are",
    body: [
      "Huanfa International Logistics is a freight forwarding company based in Shenzhen, China. We help businesses ship goods from China to the USA and Europe.",
      "This policy explains how we collect and use information when you visit our website or contact us for freight services.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "When you submit an inquiry, we may collect your company name, contact person, email, phone or WhatsApp number, origin and destination details, cargo type, weight and volume, and other information you provide about your shipment.",
      "We may also collect limited technical data such as browser type and pages visited to keep the website secure and improve its performance.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use your information to respond to quote requests, provide freight services, prepare shipping documentation, coordinate customs clearance, and communicate shipment updates.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    heading: "Information Sharing",
    body: [
      "We share shipment-related information only when necessary with carriers, customs authorities, overseas agents, delivery companies, and other service providers involved in fulfilling your shipment.",
      "We require these parties to use the information only for the purpose of providing the requested logistics service.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "We keep inquiry and shipment records for as long as needed to provide our services, comply with legal obligations, and resolve claims or disputes.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us with a written request.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy, contact us at sales@huanfalogistics.com or +86 15207122341.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="August 2026" sections={sections} />;
}
