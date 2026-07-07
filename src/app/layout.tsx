import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/i18n";
import LangUpdater from "@/components/LangUpdater";

export const metadata: Metadata = {
  metadataBase: new URL("https://huanfa-logistics.com"),
  title: {
    default: "China Freight Forwarder | International Logistics Company | Huanfa Logistics",
    template: "%s | Huanfa Logistics - China Freight Forwarder",
  },
  description: "Professional China freight forwarder offering air freight from China, sea freight from China to USA & Europe, and door-to-door shipping. International logistics company with 8+ years serving 200+ countries.",
  keywords: [
    "China freight forwarder", "international logistics company China",
    "shipping from China", "China sea freight", "China air freight",
    "door to door shipping from China", "shipping from China to Europe",
    "China freight forwarding services", "air freight from China",
    "sea freight from China to USA", "FBA freight forwarder",
  ],
  authors: [{ name: "Huanfa International Logistics" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website", locale: "en_US", alternateLocale: "zh_CN",
    siteName: "Huanfa International Logistics",
    title: "China Freight Forwarder | International Logistics Company | Huanfa Logistics",
    description: "Professional China freight forwarder offering air freight from China, sea freight from China to USA & Europe, and door-to-door shipping.",
    url: "https://huanfa-logistics.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Huanfa International Logistics - China Freight Forwarder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Freight Forwarder | International Logistics Company | Huanfa Logistics",
    description: "Professional China freight forwarder offering air freight, sea freight, and door-to-door shipping from China to worldwide.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://huanfa-logistics.com", languages: { en: "https://huanfa-logistics.com", zh: "https://huanfa-logistics.com/zh" } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Huanfa International Logistics",
            url: "https://huanfa-logistics.com",
            logo: "https://huanfa-logistics.com/logo.png",
            description: "Professional China freight forwarder.",
            address: { "@type": "PostalAddress", streetAddress: "Room 803, No.15 Fude Road, Baoan", addressLocality: "Shenzhen", addressCountry: "CN" },
            contactPoint: { "@type": "ContactPoint", telephone: "+86-15207122341", contactType: "sales", availableLanguage: ["English", "Chinese"] },
          }),
        }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <I18nProvider>
          <LangUpdater />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
