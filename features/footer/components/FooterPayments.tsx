import Link from "next/link";
import Reveal from "@/shared/components/Reveal";
import { paymentMethods } from "../data/footer";
import FooterCaption from "./FooterCaption";

export default function FooterPayments() {
  return (
    <Reveal delay={0.3} className="footer-card">
      <FooterCaption>We Accept</FooterCaption>
      <p className="text-gray-300">Methods of Payment | Financing Available</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {paymentMethods.map((p) => (
          <li
            key={p.name}
            title={p.name}
            className={`flex h-7 w-10 items-center justify-center rounded text-[9px] font-bold shadow-md shadow-black/40 transition-transform hover:-translate-y-0.5 ${p.bg}`}
          >
            {p.text}
          </li>
        ))}
      </ul>
      <Link href="/contact" className="footer-cta">
        Get a Free Estimate <span aria-hidden="true">→</span>
      </Link>
    </Reveal>
  );
}
