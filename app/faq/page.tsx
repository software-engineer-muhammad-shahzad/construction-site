import type { Metadata } from "next";
import { FaqPage } from "@/features/faq";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `F.A.Q. | ${site.name}`,
  description: `Answers to common questions about estimates, licensing, service areas and projects with ${site.name}.`,
};

export default function Page() {
  return <FaqPage />;
}
