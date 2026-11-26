import type { Offering } from "@/shared/components/OfferingPage";
import { remodelingCatalog } from "@/shared/config/remodeling-catalog";

// PLACEHOLDER COPY — replace each entry with the client's real descriptions.
const copy: Record<string, Pick<Offering, "summary" | "intro" | "highlights">> = {
  basement: {
    summary: "Turn unused basement space into a bright, dry, comfortable part of your home.",
    intro: [
      "A basement remodel adds living space without adding to your footprint. We plan around moisture, headroom, lighting and code so the result feels like the rest of your home.",
      "From a family room to an in-law suite or home office, we handle the project from design to final walkthrough.",
    ],
    highlights: ["Moisture control & waterproofing", "Framing, insulation & drywall", "Egress, lighting & electrical", "Flooring & finishes"],
  },
  bathroom: {
    summary: "Bathroom remodels that look great, work well and are built to last.",
    intro: [
      "Bathrooms take a lot of wear. We build them right: waterproofing, solid framing, quality fixtures and careful tile work.",
      "Whether it’s a quick refresh or a complete redesign, we keep the schedule clear and the work area tidy.",
    ],
    highlights: ["Showers, tubs & vanities", "Tile & waterproofing", "Plumbing & lighting updates", "Accessible & walk-in designs"],
  },
  kitchen: {
    summary: "Kitchens designed around the way you cook, gather and live.",
    intro: [
      "The kitchen is the heart of the home. We help you plan the layout, storage and finishes, then build it cleanly and on schedule.",
      "From cabinets and countertops to lighting and flooring, one team manages the whole remodel.",
    ],
    highlights: ["Layout & design planning", "Cabinets & countertops", "Appliances, lighting & plumbing", "Flooring & backsplash"],
  },
  commercial: {
    summary: "Commercial remodeling that keeps your business moving.",
    intro: [
      "Offices, shops and restaurants need to look professional and work smoothly. We plan commercial remodels around your schedule to limit downtime.",
      "Our team handles permits, demolition, build-out and finishes, with one point of contact from start to handover.",
    ],
    highlights: ["Office & retail build-outs", "Tenant improvements", "Code & accessibility updates", "Phased work to limit downtime"],
  },
  residential: {
    summary: "Whole-home and room-by-room remodeling for houses and condos.",
    intro: [
      "We update homes of every size, from a single room to a top-to-bottom renovation, with careful planning and quality workmanship.",
      "We keep you informed with clear estimates and schedules, so there are no surprises.",
    ],
    highlights: ["Whole-home renovations", "Room additions & reconfiguring", "Interior & exterior updates", "Single point of contact"],
  },
};

export const remodelingDetails: Offering[] = remodelingCatalog.map(({ slug, title }) => ({
  slug,
  title,
  image: `https://picsum.photos/seed/wcss-remodel-${slug}/1200/800`,
  ...copy[slug],
}));

export const getRemodelingDetail = (slug: string) => remodelingDetails.find((r) => r.slug === slug);
