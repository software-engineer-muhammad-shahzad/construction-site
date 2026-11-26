import type { Metadata } from "next";
import { ContractingSection, PromiseSection, SpecialtiesSection, StatsStrip, TeamSection } from "@/features/about";
import PageHero from "@/shared/components/PageHero";
import { site } from "@/shared/config/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description: `Learn about ${site.name}: a small, experienced general contracting team with big skills.`,
};

export default function Page() {
  return (
    <>
      <PageHero
        title="About Us"
        image="https://picsum.photos/seed/wcss-about/1600/600"
        subtitle="A small general contracting team with a big skillset"
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <ContractingSection />
      <SpecialtiesSection />
      <TeamSection />
      <PromiseSection />
      <StatsStrip />
    </>
  );
}
