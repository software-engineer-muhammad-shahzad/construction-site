import { OfferingPage } from "@/shared/components/OfferingPage";
import { serviceDetails, type ServiceDetail } from "../data/service-details";

// Detail page for one service.
export default function ServicePage({ service }: { service: ServiceDetail }) {
  return <OfferingPage item={service} all={serviceDetails} section={{ label: "Services", href: "/services" }} />;
}
