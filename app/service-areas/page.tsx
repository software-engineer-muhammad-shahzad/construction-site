import type { Metadata } from "next";
import { ServiceAreasPage } from "@/features/service-areas";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Service Areas | ${site.name}`,
  description: `${site.name} serves ${site.serviceAreas.join(", ")} and nearby areas.`,
};

export default function Page() {
  return <ServiceAreasPage />;
}
