import Reveal from "@/shared/components/Reveal";
import { site } from "@/shared/config/site";
import { disclaimer } from "../data/footer";

// Yellow bar: Google Review badge, legal disclaimer and the site builder's credit link.
export default function ReviewBar() {
  return (
    <div className="bg-[#fbb713] px-6 py-3 text-black">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <div className="shrink-0 rounded bg-white px-3 py-2 text-2xl font-medium text-gray-700 shadow-md">
          <span className="font-bold text-blue-600">G</span>
          <span className="font-bold text-red-500">o</span>
          <span className="font-bold text-yellow-500">o</span>
          <span className="font-bold text-blue-600">g</span>
          <span className="font-bold text-green-600">l</span>
          <span className="font-bold text-red-500">e</span>{" "}
          <span className="text-sm tracking-wide text-gray-500">REVIEW</span>
        </div>
        <p className="max-w-3xl text-[10px] leading-snug uppercase">{disclaimer}</p>
        <a
          href={site.credits.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.credits.label} (opens in a new tab)`}
          className="shrink-0 text-center transition-opacity hover:opacity-70"
        >
          <p className="font-serif text-3xl tracking-wide">
            {site.credits.label}
            <sup className="text-xs">®</sup>
          </p>
          <p className="border-t border-black/40 text-[8px] tracking-wider uppercase">The web is waiting for you.</p>
        </a>
      </Reveal>
    </div>
  );
}
