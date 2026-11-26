import { OfferingsIndexPage } from "@/shared/components/OfferingPage";
import { serviceDetails } from "../data/service-details";

// /services — overview of every service.
export default function ServicesIndexPage() {
  return (
    <OfferingsIndexPage
      title="Our Services"
      subtitle="Trust the experts with years of experience at WCSS Construction"
      image="https://picsum.photos/seed/wcss-services-index/1600/600"
      section={{ label: "Services", href: "/services" }}
      items={serviceDetails}
    />
  );
}
