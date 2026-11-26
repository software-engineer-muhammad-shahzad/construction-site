import Link from "next/link";
import type { ReactNode } from "react";
import "../styles/cta-button.css";
import { ArrowRightIcon } from "./icons";

// Pill call-to-action link with a shine sweep and an arrow badge.
export default function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="cta-btn">
      <span>{children}</span>
      <ArrowRightIcon size={20} />
    </Link>
  );
}
