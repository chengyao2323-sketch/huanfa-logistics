import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Huanfa International Logistics uses cookies on its website.",
  alternates: { canonical: "/cookies" },
};

const sections = [
  {
    heading: "What Are Cookies",
    body: [
      "Cookies are small text files stored on your device when you visit a website. They help websites remember preferences and understand how pages are used.",
    ],
  },
  {
    heading: "Preferences and Website Analytics",
    body: [
      "We use browser local storage to remember your language choice and session storage to remember when you dismiss the WhatsApp contact button for the current browser session. These preferences are stored on your device; they are not analytics cookies.",
      "The production website uses Cloudflare's performance analytics beacon. Cloudflare documents this analytics service as operating without analytics cookies or browser storage. Cloudflare hosting and security services may separately use security cookies when required.",
      "We do not currently run advertising tracking cookies on this website. Clicking WhatsApp opens a third-party service governed by its own privacy and storage practices.",
    ],
  },
  {
    heading: "Managing Cookies",
    body: [
      "You can clear cookies and site storage in your browser settings. Clearing site storage resets your saved language and contact-button preferences. Blocking storage may prevent these preferences from being remembered.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "For questions about this Cookie Policy, contact us at sales@huanfalogistics.com.",
    ],
  },
];

export default function CookiesPage() {
  return <LegalPage title="Cookie Policy" updated="September 2026" sections={sections} />;
}
