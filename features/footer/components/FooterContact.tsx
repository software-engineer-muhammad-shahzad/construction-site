import type { ReactNode } from "react";
import Reveal from "@/shared/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/shared/components/icons";
import { site } from "@/shared/config/site";
import FooterCaption from "./FooterCaption";

function RoundIcon({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#fbb713]/40 bg-[#fbb713]/10 text-[#fbb713] transition group-hover:bg-[#fbb713] group-hover:text-[#111]">
      {children}
    </span>
  );
}

export default function FooterContact() {
  return (
    <Reveal delay={0.2} className="footer-card">
      <FooterCaption>Contact Us</FooterCaption>
      <ul className="space-y-4 text-gray-300">
        <li>
          <a href={site.phone.href} className="group flex items-center gap-3">
            <RoundIcon>
              <PhoneIcon size={17} />
            </RoundIcon>
            <span>
              Tel: <span className="font-semibold text-white">{site.phone.label}</span>
              <br />
              <span className="text-gray-500">Toll Free:</span>
            </span>
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`} className="group flex items-center gap-3">
            <RoundIcon>
              <MailIcon size={17} />
            </RoundIcon>
            <span>
              Email: <span className="font-semibold text-white">{site.email}</span>
            </span>
          </a>
        </li>
        <li>
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
            <RoundIcon>
              <PinIcon size={17} />
            </RoundIcon>
            <address className="leading-6 not-italic">
              <span className="font-semibold text-white">{site.address.street}</span>
              <br />
              {site.address.city}
            </address>
          </a>
        </li>
      </ul>
    </Reveal>
  );
}
