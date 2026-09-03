import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/i18n";
import LangUpdater from "@/components/LangUpdater";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://huanfalogistics.com"),
  title: {
    default: "China Freight Forwarder | International Logistics Company | Huanfa Logistics",
    template: "%s | Huanfa Logistics - China Freight Forwarder",
  },
  description: "China freight coordination for ocean freight, air freight, and door-to-door shipping from China to the USA and Europe.",
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
    url: "https://huanfalogistics.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Huanfa International Logistics - China Freight Forwarder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Freight Forwarder | International Logistics Company | Huanfa Logistics",
    description: "China freight coordination for air, sea, and door-to-door shipping to the USA and Europe.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
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
            url: "https://huanfalogistics.com",
            logo: "https://huanfalogistics.com/logo.png",
            description: "Professional China freight forwarder.",
            email: "sales@huanfalogistics.com",
            contactPoint: { "@type": "ContactPoint", telephone: "+86-15207122341", email: "sales@huanfalogistics.com", contactType: "sales", availableLanguage: ["English", "French", "Chinese"] },
          }),
        }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <I18nProvider>
          <LangUpdater />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </I18nProvider>
      </body>
    </html>
  );
}
