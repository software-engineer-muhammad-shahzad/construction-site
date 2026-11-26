import CtaButton from "@/shared/components/CtaButton";
import { PinIcon } from "@/shared/components/icons";
import PageHero from "@/shared/components/PageHero";
import Reveal from "@/shared/components/Reveal";
import { site } from "@/shared/config/site";
import { areaDescriptions } from "../data/areas";

// /service-areas — where we work.
export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        title="Service Areas"
        image="https://picsum.photos/seed/wcss-areas/1600/600"
        subtitle={`Located in ${site.serviceAreas[0]}, serving ${site.serviceAreas.join(", ")} and nearby areas`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <ul className="grid gap-8 md:grid-cols-3">
          {site.serviceAreas.map((area, i) => (
            <li key={area}>
              <Reveal delay={i * 0.12} className="h-full rounded-xl border-t-4 border-[#fbb713] bg-white p-8 text-center shadow-lg ring-1 ring-black/5">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fbb713]/15 text-[#c98a00]">
                  <PinIcon size={26} />
                </span>
                <h2 className="text-xl font-extrabold tracking-wide text-[#1b1b1b] uppercase">{area}</h2>
                <p className="mt-3 leading-7 text-gray-600">{areaDescriptions[area]}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <p className="text-gray-700">Not sure if we cover your location? Just ask.</p>
          <CtaButton href="/contact">Get in touch</CtaButton>
        </div>
      </section>
    </>
  );
}
