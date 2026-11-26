import { PinIcon } from "@/shared/components/icons";
import { site } from "@/shared/config/site";
import "../styles/hero.css";

// Yellow strip under the banner listing the areas served.
export default function AreaStrip() {
  const [home, ...rest] = site.serviceAreas;
  return (
    <div className="area-strip">
      <PinIcon size={18} />
      <p>
        Located in <strong>{home}</strong>, proudly serving <strong>{home}</strong>, <strong>{rest[0]}</strong> and{" "}
        <strong>{rest[1]}</strong> areas
      </p>
    </div>
  );
}
