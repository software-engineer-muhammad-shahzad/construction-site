import type { Offering } from "@/shared/components/OfferingPage";
import { constructionCatalog } from "@/shared/config/construction-catalog";

// PLACEHOLDER COPY — replace each entry with the client's real descriptions.
const copy: Record<string, Pick<Offering, "summary" | "intro" | "highlights">> = {
  commercial: {
    summary: "Ground-up and build-out construction for offices, retail and multi-level business complexes.",
    intro: [
      "WCSS Construction builds commercial spaces that are functional, code-compliant and ready for business on schedule.",
      "We coordinate permits, trades and inspections, so you have one point of contact from planning to handover.",
    ],
    highlights: ["Office & retail construction", "Multi-level business complexes", "Permits & inspections", "Clear schedules & budgets"],
  },
  residential: {
    summary: "New homes and major residential builds, from first plan to final walkthrough.",
    intro: [
      "We build homes with careful planning, quality materials and skilled crews, so the finished result matches your vision.",
      "You get clear estimates, regular updates and a single team accountable for the whole project.",
    ],
    highlights: ["New home construction", "Custom residential builds", "Quality materials & craftsmanship", "Regular progress updates"],
  },
  deck: {
    summary: "Custom decks built to handle weather, weight and years of use.",
    intro: [
      "A great deck extends your living space outdoors. We design and build decks with solid framing, proper footings and a clean finish.",
      "We’ll help you choose materials and a layout that suit your yard and your budget.",
    ],
    highlights: ["Wood & composite decking", "Railings & stairs", "Proper footings & framing", "Repairs & rebuilds"],
  },
  patio: {
    summary: "Patios that give you a durable, good-looking outdoor space.",
    intro: [
      "From concrete and pavers to stone, we prepare the base carefully so your patio stays level and drains properly.",
      "We build patios sized and shaped for the way you entertain and relax.",
    ],
    highlights: ["Concrete, pavers & stone", "Base preparation & drainage", "Steps & walkways", "Borders & seating walls"],
  },
  "home-additions": {
    summary: "Add the space you need without leaving the home you love.",
    intro: [
      "A home addition can add a bedroom, a bigger kitchen or a whole new living area. We design it to blend with your existing house.",
      "We handle plans, permits, structure and finishes, and tie the new space into your home seamlessly.",
    ],
    highlights: ["Room & second-story additions", "Plans & permits", "Structural work & tie-ins", "Matching finishes"],
  },
  siding: {
    summary: "Siding that protects your home and refreshes its look.",
    intro: [
      "New siding improves curb appeal, insulation and protection against the weather.",
      "We remove damaged siding, repair the surface underneath and install new siding with clean, tight lines.",
    ],
    highlights: ["Siding installation & replacement", "Repair of damaged areas", "Weatherproofing", "Trim & finishing"],
  },
  framing: {
    summary: "Accurate, solid framing that the whole project is built on.",
    intro: [
      "Good framing makes everything that follows easier and stronger. We frame walls, floors and roofs to plan and to code.",
      "Our crews work carefully and keep the site organised, from new builds to additions and remodels.",
    ],
    highlights: ["Walls, floors & roofs", "Additions & remodels", "Structural repairs", "Built to plan & code"],
  },
};

export const constructionDetails: Offering[] = constructionCatalog.map(({ slug, title }) => ({
  slug,
  title,
  image: `https://picsum.photos/seed/wcss-build-${slug}/1200/800`,
  ...copy[slug],
}));

export const getConstructionDetail = (slug: string) => constructionDetails.find((c) => c.slug === slug);
