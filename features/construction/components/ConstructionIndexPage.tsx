import { OfferingsIndexPage } from "@/shared/components/OfferingPage";
import { constructionDetails } from "../data/construction-details";

// /construction — overview of every construction type.
export default function ConstructionIndexPage() {
  return (
    <OfferingsIndexPage
      title="Construction"
      subtitle="New builds, additions, decks, patios, siding and framing — done right"
      image="https://picsum.photos/seed/wcss-construction-index/1600/600"
      section={{ label: "Construction", href: "/construction" }}
      items={constructionDetails}
    />
  );
}
