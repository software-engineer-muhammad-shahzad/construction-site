import { Suspense } from "react";
import { ContractingSection, PromiseSection, SpecialtiesSection, StatsStrip, TeamSection } from "@/features/about";
import { AudienceSection } from "@/features/audience";
import { AreaStrip, HeroFallback, HeroSlider } from "@/features/hero";
import { ServicesSection } from "@/features/services";

// Home page: composes sections from the feature modules.
export default function Home() {
  return (
    <>
      <Suspense fallback={<HeroFallback />}>
        <HeroSlider />
      </Suspense>
      <AreaStrip />
      <AudienceSection />
      <ServicesSection />
      <ContractingSection />
      <SpecialtiesSection />
      <TeamSection />
      <PromiseSection />
      <StatsStrip />
    </>
  );
}
