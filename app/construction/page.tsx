import type { Metadata } from "next";
import { ConstructionIndexPage } from "@/features/construction";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Construction | ${site.name}`,
  description: `Commercial and residential construction, decks, patios, home additions, siding and framing from ${site.name}.`,
};

export default function Page() {
  return <ConstructionIndexPage />;
}
