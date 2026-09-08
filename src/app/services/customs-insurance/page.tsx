import ServiceDetail from "@/components/ServiceDetail";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Customs Coordination & Cargo Insurance",
  description: "Coordinate import and export documents and request cargo insurance before shipping from China. Confirm responsibilities, charges and cover with Huanfa Logistics.",
  path: "/services/customs-insurance",
});

export default function CustomsInsurancePage() {
  return <ServiceDetail service="customsInsurance" />;
}
