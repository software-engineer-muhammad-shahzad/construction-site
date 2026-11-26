import { audiences } from "../data/audience";
import AudienceTabs from "./AudienceTabs";

// Residential / Commercial chooser shown under the home banner.
export default function AudienceSection() {
  return <AudienceTabs items={audiences} />;
}
