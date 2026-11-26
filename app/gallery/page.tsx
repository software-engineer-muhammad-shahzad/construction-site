import type { Metadata } from "next";
import { GalleryPage } from "@/features/gallery";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Gallery | ${site.name}`,
  description: `Photos of remodeling, construction and service projects by ${site.name}.`,
};

export default function Page() {
  return <GalleryPage />;
}
