import CtaButton from "@/shared/components/CtaButton";
import Reveal from "@/shared/components/Reveal";
import { contracting } from "../data/content";
import "../styles/about.css";

// General-contracting message over a full-width background photo.
export default function ContractingSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={contracting.image}
        alt=""
        width={1920}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/70" aria-hidden="true" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">{contracting.title}</h2>
        <span className="mx-auto mt-4 block h-1 w-16 rounded bg-[#fbb713]" />
        {contracting.paragraphs.map((text, i) => (
          <p key={i} className={`${i === 0 ? "mt-8" : "mt-5"} leading-7 font-medium md:text-justify`}>
            {text}
          </p>
        ))}
        <CtaButton href={contracting.cta.href}>{contracting.cta.label}</CtaButton>
      </Reveal>
    </section>
  );
}
