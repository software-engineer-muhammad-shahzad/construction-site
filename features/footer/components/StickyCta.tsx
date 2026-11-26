import Link from "next/link";
import { site } from "@/shared/config/site";

// Mobile-only bar pinned to the bottom: one-tap call and estimate.
export default function StickyCta() {
  return (
    <div className="sticky-cta" role="region" aria-label="Quick contact">
      <a href={site.phone.href} className="sticky-call">
        Call Now
      </a>
      <Link href="/contact" className="sticky-estimate">
        Free Estimate
      </Link>
    </div>
  );
}
