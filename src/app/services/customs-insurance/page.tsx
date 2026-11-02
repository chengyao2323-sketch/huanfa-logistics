import ServiceDetail from "@/components/ServiceDetail";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Customs Coordination & Cargo Insurance",
  description: "Coordinate customs documents and request cargo insurance before shipping from China. Confirm clearance responsibilities, charges and insurance cover.",
  path: "/services/customs-insurance",
});

export default function CustomsInsurancePage() {
  return <ServiceDetail service="customsInsurance" />;
}
