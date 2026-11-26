import Link from "next/link";
import { site } from "@/shared/config/site";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 100 70" width="100" height="70" aria-hidden="true">
        <path d="M8 62 L60 8 L60 40 Z" fill="#fbb713" />
        <path d="M8 62 L60 22 L60 52 Z" fill="#ffd45e" opacity=".8" />
        <path d="M62 10 Q88 24 82 60 L70 60 Q76 28 62 20 Z" fill="#111" />
      </svg>
      <strong>WCSS</strong>
      <span>Construction</span>
    </Link>
  );
}
