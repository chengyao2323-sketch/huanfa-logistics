import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://huanfalogistics.com";

  return [
    { url: baseUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/air-freight`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/sea-freight`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/door-to-door`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/ecommerce-logistics`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/warehousing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/customs-insurance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/personal-shipping-from-china`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/shipment-cases`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/shipping-terms`, changeFrequency: "yearly", priority: 0.4 },
  ];
}
