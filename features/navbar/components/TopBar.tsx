import Link from "next/link";
import { SearchBox } from "@/features/search";
import { FacebookIcon, HouzzIcon, PhoneIcon, PinIcon } from "@/shared/components/icons";
import { site } from "@/shared/config/site";

// Strip above the menu: phone call-to-action, in-page search and social links.
export default function TopBar() {
  return (
    <div className="topbar">
      <p className="topbar-text">
        <PhoneIcon size={15} />
        Interested in our services? Call us at{" "}
        <a href={site.phone.href}>
          <strong>{site.phone.label}</strong>
        </a>{" "}
        | <strong>Toll Free</strong>
      </p>
      <div className="social">
        <SearchBox />
        <a href={site.socials.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <FacebookIcon size={14} />
        </a>
        <a href={site.socials.houzz} aria-label="Houzz" target="_blank" rel="noopener noreferrer">
          <HouzzIcon size={14} />
        </a>
        <Link href="/service-areas" aria-label="Service areas">
          <PinIcon size={14} />
        </Link>
      </div>
    </div>
  );
}
