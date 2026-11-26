import { OfferingsIndexPage } from "@/shared/components/OfferingPage";
import { remodelingDetails } from "../data/remodeling-details";

// /remodeling — overview of every remodeling type.
export default function RemodelingIndexPage() {
  return (
    <OfferingsIndexPage
      title="Remodeling"
      subtitle="Kitchens, bathrooms, basements and more — for homes and businesses"
      image="https://picsum.photos/seed/wcss-remodeling-index/1600/600"
      section={{ label: "Remodeling", href: "/remodeling" }}
      items={remodelingDetails}
    />
  );
}
