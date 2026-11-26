import Reveal from "@/shared/components/Reveal";
import { services } from "../data/services";
import "../styles/services.css";
import ServiceTile from "./ServiceTile";

// "Our Services" section with hoverable cards and photo galleries.
export default function ServicesSection() {
  return (
    <section id="services" className="services-section border-b-2 border-[#fbb713] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-[#c98a00] uppercase">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1b1b1b] md:text-4xl">Our Services</h2>
          <div className="mx-auto mt-5 flex max-w-xs items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#fbb713]" />
            <span className="h-2.5 w-2.5 rotate-45 bg-[#fbb713]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#fbb713]" />
          </div>
          <p className="mx-auto mt-5 max-w-md text-sm text-gray-600">
            Trust the experts with years of experience at WCSS Construction
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.12}>
              <ServiceTile service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
