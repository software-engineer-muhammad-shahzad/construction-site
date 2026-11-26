import type { Metadata } from "next";
import { ContactPage } from "@/features/contact";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description: `Call ${site.phone.label} or request a free quote from ${site.name}.`,
};

export default function Page() {
  return <ContactPage />;
}
