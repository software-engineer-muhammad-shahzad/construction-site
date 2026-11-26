import { OfferingPage, type Offering } from "@/shared/components/OfferingPage";
import { remodelingDetails } from "../data/remodeling-details";

// Detail page for one remodeling type.
export default function RemodelingPage({ item }: { item: Offering }) {
  return <OfferingPage item={item} all={remodelingDetails} section={{ label: "Remodeling", href: "/remodeling" }} />;
}
