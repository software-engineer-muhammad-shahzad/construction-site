import PageHero from "@/shared/components/PageHero";
import { MailIcon, PhoneIcon, PinIcon } from "@/shared/components/icons";
import Reveal from "@/shared/components/Reveal";
import { site } from "@/shared/config/site";
import type { ReactNode } from "react";
import ContactForm from "./ContactForm";

function InfoRow({ icon, label, children, href, external }: { icon: ReactNode; label: string; children: ReactNode; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-lg border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#fbb713] hover:shadow-lg"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fbb713]/15 text-[#c98a00] transition group-hover:bg-[#fbb713] group-hover:text-[#111]">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">{label}</span>
        <span className="block font-semibold text-[#1b1b1b]">{children}</span>
      </span>
    </a>
  );
}

// /contact — contact details and a quote request form.
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        image="https://picsum.photos/seed/wcss-contact/1600/600"
        subtitle="Get in touch for a free quote on your project"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-4">
          <p className="text-xs font-bold tracking-[0.3em] text-[#c98a00] uppercase">Reach us</p>
          <h2 className="text-3xl font-extrabold text-[#1b1b1b]">Let’s talk about your project</h2>
          <span className="block h-1 w-14 rounded bg-[#fbb713]" />
          <p className="pb-2 leading-7 text-gray-700">
            Call, email or send us a message. We’ll get back to you with a clear, no-obligation quote.
          </p>

          <InfoRow icon={<PhoneIcon size={22} />} label="Call us" href={site.phone.href}>
            {site.phone.label}
          </InfoRow>
          <InfoRow icon={<MailIcon size={22} />} label="Email" href={`mailto:${site.email}`}>
            {site.email}
          </InfoRow>
          <InfoRow icon={<PinIcon size={22} />} label="Visit" href={site.mapsUrl} external>
            {site.address.street}, {site.address.city}
          </InfoRow>

          <p className="pt-2 text-sm text-gray-600">
            Serving {site.serviceAreas.join(", ")} and nearby areas.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="rounded-xl border-t-4 border-[#fbb713] bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
          <h2 className="mb-5 text-xl font-extrabold text-[#1b1b1b]">Request a free quote</h2>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
