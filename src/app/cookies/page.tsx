import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Huanfa International Logistics uses cookies on its website.",
};

const sections = [
  {
    heading: "What Are Cookies",
    body: [
      "Cookies are small text files stored on your device when you visit a website. They help websites remember preferences and understand how pages are used.",
    ],
  },
  {
    heading: "How We Use Cookies",
    body: [
      "We use essential cookies to keep the website working correctly and limited analytics cookies to understand which pages are useful to visitors.",
      "We do not use advertising cookies that track you across other websites.",
    ],
  },
  {
    heading: "Managing Cookies",
    body: [
      "You can delete or block cookies through your browser settings. Blocking essential cookies may affect how the website functions.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "For questions about this Cookie Policy, contact us at chengyao2323@gmail.com.",
    ],
  },
];

export default function CookiesPage() {
  return <LegalPage title="Cookie Policy" updated="August 2026" sections={sections} />;
}
