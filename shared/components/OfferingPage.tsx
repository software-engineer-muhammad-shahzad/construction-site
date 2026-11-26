import Link from "next/link";
import CtaButton from "./CtaButton";
import { CheckIcon } from "./icons";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import { site } from "@/shared/config/site";

// A thing the company offers (a service, a remodeling type, ...) with its page copy.
export type Offering = {
  slug: string;
  title: string;
  summary: string;
  intro: string[];
  highlights: string[];
  image: string;
};

export type OfferingSection = {
  /** e.g. "Services" */
  label: string;
  /** e.g. "/services" */
  href: string;
};

// Detail page for one offering: banner, copy, checklist, photo and links to the others.
export function OfferingPage({
  item,
  all,
  section,
}: {
  item: Offering;
  all: Offering[];
  section: OfferingSection;
}) {
  const related = all.filter((o) => o.slug !== item.slug);

  return (
    <>
      <PageHero
        title={item.title}
        image={item.image}
        subtitle={item.summary}
        crumbs={[{ label: "Home", href: "/" }, { label: section.label, href: section.href }, { label: item.title }]}
      />

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.3em] text-[#c98a00] uppercase">What we offer</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#1b1b1b]">{item.title}</h2>
          <span className="mt-4 block h-1 w-14 rounded bg-[#fbb713]" />
          <div className="mt-6 space-y-4 leading-7 text-gray-700">
            {item.intro.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 font-semibold text-gray-800">
                <CheckIcon size={18} className="text-[#fbb713]" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <CtaButton href="/contact">Get a free quote</CtaButton>
            <a href={site.phone.href} className="mt-9 font-bold text-[#1b1b1b] hover:text-[#c98a00]">
              or call {site.phone.label}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-lg border-b-4 border-[#fbb713] shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="border-t-4 border-[#fbb713] bg-gray-50 px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-extrabold text-[#1b1b1b]">Other {section.label}</h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {related.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`${section.href}/${o.slug}`}
                    className="inline-block rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#fbb713] hover:bg-[#fbb713] hover:text-[#111]"
                  >
                    {o.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

// Overview page listing every offering in a section.
export function OfferingsIndexPage({
  title,
  subtitle,
  image,
  section,
  items,
}: {
  title: string;
  subtitle: string;
  image: string;
  section: OfferingSection;
  items: Offering[];
}) {
  return (
    <>
      <PageHero
        title={title}
        image={image}
        subtitle={subtitle}
        crumbs={[{ label: "Home", href: "/" }, { label: section.label }]}
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item.slug}>
              <Reveal delay={(i % 3) * 0.1}>
                <Link
                  href={`${section.href}/${item.slug}`}
                  className="group block h-full overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="block overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image.replace("/1200/800", "/600/400")}
                      alt={item.title}
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block border-b-4 border-transparent p-6 transition-colors group-hover:border-[#fbb713]">
                    <span className="block text-lg font-extrabold tracking-wide text-[#1b1b1b] uppercase">{item.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-gray-600">{item.summary}</span>
                    <span className="mt-4 inline-block text-sm font-bold text-[#c98a00]">Learn more →</span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
