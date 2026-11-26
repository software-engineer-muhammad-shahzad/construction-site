// Content for the Residential / Commercial tabs on the home page.
// PLACEHOLDER TEXT — replace with the client's messages.

export type Audience = {
  id: "residential" | "commercial";
  tab: string;
  title: string;
  intro: string[];
  points: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
};

export const audiences: Audience[] = [
  {
    id: "residential",
    tab: "Residential",
    title: "Residential Construction",
    intro: [
      "From a single room refresh to a complete home renovation, WCSS Construction brings careful planning and quality craftsmanship to every residential project.",
      "We handle the whole job from start to finish, so your home stays on schedule, on budget and stress-free.",
    ],
    points: ["Kitchen & bathroom remodeling", "Room additions & basements", "Roofing, siding & windows", "Decks, patios & outdoor living"],
    image: "https://picsum.photos/seed/wcss-residential/1000/800",
    imageAlt: "Residential remodel",
    cta: { label: "Start your home project", href: "/contact" },
  },
  {
    id: "commercial",
    tab: "Commercial",
    title: "Commercial Construction",
    intro: [
      "WCSS Construction delivers dependable commercial building and renovation for offices, retail spaces and multi-level business complexes.",
      "We work around your operations and deadlines, with clear communication and a single point of contact from planning to handover.",
    ],
    points: ["Office build-outs & tenant improvements", "Retail & restaurant spaces", "Renovations & repairs", "Multi-level business complexes"],
    image: "https://picsum.photos/seed/wcss-commercial/1000/800",
    imageAlt: "Commercial build-out",
    cta: { label: "Plan your commercial project", href: "/contact" },
  },
];
