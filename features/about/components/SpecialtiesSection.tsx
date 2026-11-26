import { CheckIcon } from "@/shared/components/icons";
import { specialties } from "../data/content";
import SplitSection from "./SplitSection";

export default function SpecialtiesSection() {
  const { badge } = specialties;
  return (
    <SplitSection
      image={specialties.image}
      alt={specialties.imageAlt}
      caption={specialties.caption}
      kicker={specialties.kicker}
      center
      top={
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={badge.src}
            alt={badge.alt}
            width={229}
            height={73}
            loading="lazy"
            decoding="async"
            className="mb-1 h-auto w-[229px] max-w-full"
          />
          <p className="mb-10 text-xs text-gray-600">{badge.note}</p>
        </>
      }
      title={
        <>
          We specialize <span className="text-[#c98a00]">in:</span>
        </>
      }
    >
      <ul className="space-y-3 text-lg text-gray-800">
        {specialties.list.map((item) => (
          <li key={item} className="flex items-center justify-center gap-3">
            <CheckIcon size={18} className="text-[#fbb713]" />
            {item}
          </li>
        ))}
      </ul>
    </SplitSection>
  );
}
