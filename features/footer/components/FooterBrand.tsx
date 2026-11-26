import Link from "next/link";
import Reveal from "@/shared/components/Reveal";
import { FacebookIcon, HouzzIcon } from "@/shared/components/icons";
import { site } from "@/shared/config/site";

export default function FooterBrand() {
  return (
    <Reveal className="footer-card">
      <Link href="/" className="inline-flex items-center gap-3" aria-label={`${site.name} home`}>
        <svg viewBox="0 0 100 70" width="56" height="39" className="footer-logo" aria-hidden="true">
          <path d="M8 62 L60 8 L60 40 Z" fill="#fbb713" />
          <path d="M8 62 L60 22 L60 52 Z" fill="#ffd45e" opacity=".8" />
          <path d="M62 10 Q88 24 82 60 L70 60 Q76 28 62 20 Z" fill="#fff" />
        </svg>
        <span className="leading-tight">
          <strong className="block text-xl tracking-[0.2em]">WCSS</strong>
          <span className="text-[11px] tracking-[0.25em] text-gray-400 uppercase">Construction</span>
        </span>
      </Link>
      <p className="mt-5 max-w-xs leading-6 text-gray-400">
        Quality remodeling and construction you can trust, serving {site.serviceAreas[0]}, {site.serviceAreas[1]} and{" "}
        {site.serviceAreas[2]}.
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Service areas">
        {site.serviceAreas.map((area) => (
          <li key={area} className="footer-chip">
            {area}
          </li>
        ))}
      </ul>
      <div className="mt-5 flex gap-3">
        <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-circle">
          <FacebookIcon size={15} />
        </a>
        <a href={site.socials.houzz} target="_blank" rel="noopener noreferrer" aria-label="Houzz" className="social-circle">
          <HouzzIcon size={15} />
        </a>
      </div>
    </Reveal>
  );
}
