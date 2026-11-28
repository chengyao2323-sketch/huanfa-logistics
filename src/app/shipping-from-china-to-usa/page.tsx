import { createPageMetadata } from "@/lib/seo";
import UsaShipping from "./UsaShipping";

export const metadata = createPageMetadata({
  title: "Shipping from China to USA: DDP, Sea & Air",
  description: "Shipping goods from China to the USA? Compare sea and air freight, supplier pickup and DDP door delivery. Send your cargo details to get a tailored quote.",
  path: "/shipping-from-china-to-usa",
});

export default function Page() {
  const url = "https://huanfalogistics.com/shipping-from-china-to-usa";
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "Service", "@id": `${url}#service`, name: "Shipping from China to the USA", url,
          serviceType: "Freight forwarding", areaServed: { "@type": "Country", name: "United States" },
          description: "Supplier pickup, Shenzhen consolidation, ocean or air freight, customs coordination and final delivery under the agreed shipment scope.",
          provider: { "@id": "https://huanfalogistics.com/#organization" } },
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://huanfalogistics.com/" },
          { "@type": "ListItem", position: 2, name: "Shipping from China to USA", item: url },
        ] },
      ],
    }) }} />
    <UsaShipping />
  </>;
}
