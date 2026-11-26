import type { Metadata } from "next";
import { ServicesIndexPage } from "@/features/services";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Our Services | ${site.name}`,
  description: `Carpentry, concrete, cabinets, electrical, plumbing, flooring and more from ${site.name}.`,
};

export default function Page() {
  return <ServicesIndexPage />;
}
