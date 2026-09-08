import CustomerStories from "@/components/CustomerStories";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Real Shipping Cases & Customer Feedback",description:"See completed Shenzhen-to-USA shipments, original customer messages, cargo packing and container loading photos.",path:"/shipment-cases"});
export default function ShipmentCasesPage() { return <CustomerStories />; }
