import Link from "next/link";
import { promise } from "../data/content";
import SplitSection from "./SplitSection";

export default function PromiseSection() {
  return (
    <SplitSection
      image={promise.image}
      alt={promise.imageAlt}
      caption={promise.caption}
      kicker={promise.kicker}
      title={
        <>
          Experienced <span className="text-[#c98a00]">&amp; Affordable</span>
        </>
      }
    >
      {promise.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <Link href={promise.cta.href} className="split-link">
        {promise.cta.label} <span aria-hidden="true">→</span>
      </Link>
    </SplitSection>
  );
}
