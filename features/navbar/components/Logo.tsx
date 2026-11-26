import Link from "next/link";
import { site } from "@/shared/config/site";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/logo.png" alt={site.name} width={350} height={424} className="logo-img" fetchPriority="high" />
    </Link>
  );
}
