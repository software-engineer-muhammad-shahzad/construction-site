import { team } from "../data/content";
import SplitSection from "./SplitSection";

export default function TeamSection() {
  return (
    <SplitSection
      image={team.image}
      alt={team.imageAlt}
      caption={team.caption}
      kicker={team.kicker}
      flip
      title={
        <>
          Small General Contracting Team, <span className="text-[#c98a00]">Big Skillset!</span>
        </>
      }
    >
      {team.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </SplitSection>
  );
}
