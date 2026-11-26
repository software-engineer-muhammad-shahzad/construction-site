import { OfferingPage, type Offering } from "@/shared/components/OfferingPage";
import { constructionDetails } from "../data/construction-details";

// Detail page for one construction type.
export default function ConstructionPage({ item }: { item: Offering }) {
  return <OfferingPage item={item} all={constructionDetails} section={{ label: "Construction", href: "/construction" }} />;
}
