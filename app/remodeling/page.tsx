import type { Metadata } from "next";
import { RemodelingIndexPage } from "@/features/remodeling";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Remodeling | ${site.name}`,
  description: `Basement, bathroom, kitchen, commercial and residential remodeling from ${site.name}.`,
};

export default function Page() {
  return <RemodelingIndexPage />;
}
