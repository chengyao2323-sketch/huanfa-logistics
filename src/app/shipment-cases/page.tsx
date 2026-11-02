import CustomerStories from "@/components/CustomerStories";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"DDP & Ocean Shipping Cases from China",description:"See a Shenzhen-to-Hawaii DDP shipment: 20 kg by UPS, delivered in 3 days. View original customer feedback, packing photos and a completed FCL shipment.",path:"/shipment-cases"});
export default function ShipmentCasesPage() { return <CustomerStories />; }
