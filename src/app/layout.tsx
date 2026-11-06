import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/i18n";
import LangUpdater from "@/components/LangUpdater";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://huanfalogistics.com"),
  verification: { other: { "msvalidate.01": "43C54FF6395B9CA203582FA0CB7FE263" }, google: "8CFqvqWNehk_Mni3pPTw3AdMCqYkKGdBoVb3sp4gEHk" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: {
    default: "DDP Shipping from China | Huanfa Logistics",
    template: "%s | Huanfa Logistics",
  },
  description: "DDP shipping from China to the USA, Canada and Europe, with Australia also available. Customs clearance, import duties and taxes, and delivery. Request a quote.",
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
    siteName: "Huanfa Logistics",
    title: "DDP Shipping from China | Huanfa Logistics",
    description: "DDP shipping from China to the USA, Canada and Europe, with Australia also available. Customs clearance, import duties and taxes, and delivery. Request a quote.",
    url: "https://huanfalogistics.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Huanfa International Logistics - China Freight Forwarder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DDP Shipping from China | Huanfa Logistics",
    description: "DDP shipping from China to the USA, Canada and Europe, with Australia also available. Customs clearance, import duties and taxes, and delivery. Request a quote.",
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
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://huanfalogistics.com/#organization",
                name: "Huanfa Logistics",
                legalName: "深圳市焕发国际物流有限公司",
                alternateName: ["Shenzhen Huanfa International Logistics Co., Ltd.", "Huanfa International Logistics", "焕发国际物流"],
                url: "https://huanfalogistics.com/",
                logo: "https://huanfalogistics.com/logo-256.png",
                description: "China freight forwarder focused on DDP shipping to the USA, Canada and Europe, with Australia also available. Customs clearance, import duties and taxes, and delivery for businesses and personal buyers.",
                identifier: { "@type": "PropertyValue", propertyID: "Unified Social Credit Code", value: "91440300MAD5FXY54G" },
                address: { "@type": "PostalAddress", streetAddress: "Heng'an Business Building, Bao'an District", addressLocality: "Shenzhen", addressRegion: "Guangdong", addressCountry: "CN" },
                sameAs: ["https://www.facebook.com/people/Huanfa-logistic/61590352722071/", "https://www.instagram.com/huanfa_logistics/"],
                knowsAbout: ["DDP shipping from China", "customs clearance", "sea freight", "air freight", "Shenzhen cargo consolidation", "Amazon FBA logistics"],
                email: "sales@huanfalogistics.com",
                telephone: "+86-15207122341",
                contactPoint: { "@type": "ContactPoint", telephone: "+86-15207122341", email: "sales@huanfalogistics.com", contactType: "sales", availableLanguage: ["English", "French", "Chinese"] },
              },
              {
                "@type": "WebSite",
                "@id": "https://huanfalogistics.com/#website",
                url: "https://huanfalogistics.com/",
                name: "Huanfa Logistics",
                alternateName: ["Huanfa International Logistics", "焕发国际物流"],
                publisher: { "@id": "https://huanfalogistics.com/#organization" },
                inLanguage: "en",
              },
            ],
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
