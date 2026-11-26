import Reveal from "@/shared/components/Reveal";
import { site } from "@/shared/config/site";
import { credentials } from "../data/footer";
import { CheckIcon } from "@/shared/components/icons";

export default function FooterCopyright() {
  return (
    <Reveal className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 md:flex-row">
      <p className="text-gray-400">Copyright © 2026, {site.name}. All rights reserved.</p>
      <ul className="flex flex-wrap items-center justify-center gap-2" aria-label="Credentials">
        {credentials.map((item) => (
          <li key={item} className="footer-badge">
            <CheckIcon size={12} strokeWidth={4} />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
