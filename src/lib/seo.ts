import type { Metadata } from "next";

export const siteUrl = "https://huanfalogistics.com";
export const socialImage = {
  url: `${siteUrl}/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Huanfa International Logistics - China Freight Forwarder",
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const pageTitle = `${title} | Huanfa Logistics`;
  const url = new URL(path, siteUrl).href;
  return {
    title: { absolute: pageTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Huanfa Logistics",
      title: pageTitle,
      description,
      url,
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title: pageTitle, description, images: [socialImage.url] },
  };
}
