import Link from "next/link";
import Reveal from "@/shared/components/Reveal";
import { quickLinks } from "../data/footer";
import FooterCaption from "./FooterCaption";

export default function FooterLinks() {
  return (
    <Reveal delay={0.1} className="footer-card">
      <FooterCaption>Quick Links</FooterCaption>
      <ul className="space-y-3">
        {quickLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
