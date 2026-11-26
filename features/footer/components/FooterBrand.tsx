import Link from "next/link";
import Reveal from "@/shared/components/Reveal";
import { FacebookIcon, HouzzIcon } from "@/shared/components/icons";
import { site } from "@/shared/config/site";

export default function FooterBrand() {
  return (
    <Reveal className="footer-card">
      <Link
        href="/"
        className="inline-block rounded bg-white p-2 shadow-lg shadow-black/40 transition hover:-translate-y-0.5"
        aria-label={`${site.name} home`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt={site.name} width={350} height={424} loading="lazy" className="h-auto w-24" />
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
