import type { Offering } from "@/shared/components/OfferingPage";
import { serviceCatalog } from "@/shared/config/service-catalog";

export type ServiceDetail = Offering;

// PLACEHOLDER COPY — replace each entry with the client's real service descriptions.
const copy: Record<string, Omit<ServiceDetail, "slug" | "title" | "image">> = {
  carpentry: {
    summary: "Framing, trim, built-ins and finish carpentry done with precision.",
    intro: [
      "From structural framing to the finishing touches, WCSS Construction’s carpenters build things that fit properly and last.",
      "Whether it’s a repair, a custom built-in or a full framing job, we plan carefully and keep the work site clean.",
    ],
    highlights: ["Framing & structural repairs", "Trim, molding & baseboards", "Custom shelving & built-ins", "Decks & stairs"],
  },
  "concrete-work": {
    summary: "Durable concrete for patios, driveways, walkways and foundations.",
    intro: [
      "Good concrete starts with good preparation. We handle excavation, forms, reinforcement, pouring and finishing.",
      "We build slabs, steps and flatwork that stay level and stand up to weather and wear.",
    ],
    highlights: ["Patios & walkways", "Driveways", "Foundations & footings", "Retaining walls & steps"],
  },
  "custom-cabinets": {
    summary: "Cabinets designed and built to fit your space and your style.",
    intro: [
      "Custom cabinets make the most of every inch of your kitchen, bathroom or storage area.",
      "We work with you on layout, materials and finishes, then build and install to a tight, clean fit.",
    ],
    highlights: ["Kitchen & bath cabinetry", "Built-in storage", "Cabinet refacing", "Hardware & finish selection"],
  },
  "custom-countertops": {
    summary: "Countertops in the materials you love, measured and installed with care.",
    intro: [
      "The right countertop changes the whole feel of a room. We help you choose a material that fits your budget and how you live.",
      "Accurate templating and careful installation give you clean seams and a flawless finish.",
    ],
    highlights: ["Stone, quartz & solid surface", "Kitchen & bathroom counters", "Edge profiles & cutouts", "Removal of old countertops"],
  },
  doors: {
    summary: "Interior and exterior doors installed straight, sealed and secure.",
    intro: [
      "A well-hung door opens smoothly, closes tight and keeps the weather out.",
      "We install and replace entry, patio and interior doors, including framing, trim and hardware.",
    ],
    highlights: ["Entry & patio doors", "Interior doors", "Frame repair & weatherproofing", "Locks & hardware"],
  },
  electrical: {
    summary: "Safe, code-compliant electrical work for homes and businesses.",
    intro: [
      "Electrical work has to be done right. Our team installs, upgrades and repairs systems to current code.",
      "From a single outlet to a full panel upgrade, we explain the work and the cost before we start.",
    ],
    highlights: ["Outlets, switches & lighting", "Panel upgrades", "Rewiring & repairs", "Remodel electrical"],
  },
  "home-repairs": {
    summary: "Fast, reliable fixes for the small and not-so-small jobs around your home.",
    intro: [
      "Every home needs repairs from time to time. We take care of the list so you don’t have to chase several contractors.",
      "No job is too small — we give each repair the same attention as a large project.",
    ],
    highlights: ["Drywall & patching", "Water damage repair", "Fixtures & hardware", "General maintenance"],
  },
  hvac: {
    summary: "Heating, ventilation and air conditioning installed and serviced properly.",
    intro: [
      "A comfortable building depends on a well-designed, well-installed HVAC system.",
      "We handle installation, replacement and repair, and help you choose equipment that suits your space.",
    ],
    highlights: ["Heating & cooling installation", "Ductwork", "System repair & replacement", "Ventilation"],
  },
  painting: {
    summary: "Clean, even interior and exterior painting that protects and refreshes.",
    intro: [
      "Great paint jobs are about preparation. We patch, sand, prime and protect before the first coat goes on.",
      "We work neatly, use quality paint, and leave your space ready to enjoy.",
    ],
    highlights: ["Interior painting", "Exterior painting", "Surface prep & repair", "Color consultation"],
  },
  plumbing: {
    summary: "Installation and repair of pipes, fixtures and water systems.",
    intro: [
      "From a leaking faucet to a full remodel rough-in, our plumbers keep water going where it should.",
      "We install fixtures, repair pipes and drains, and coordinate plumbing with the rest of your project.",
    ],
    highlights: ["Fixtures & faucets", "Pipe & drain repair", "Water heaters", "Remodel plumbing"],
  },
  flooring: {
    summary: "Flooring for every room, installed on a properly prepared surface.",
    intro: [
      "The right floor sets the tone for the whole space. We help you compare options and install them on a level, solid base.",
      "Our crew handles removal of the old floor, subfloor prep and the finished installation.",
    ],
    highlights: ["Tile, wood & laminate", "Subfloor preparation", "Old floor removal", "Baseboards & transitions"],
  },
  "tile-flooring": {
    summary: "Tile floors with straight lines, tight grout and a long-lasting finish.",
    intro: [
      "Tile is durable and beautiful when it’s installed correctly. We prepare the surface carefully and set every tile level.",
      "We install tile in kitchens, bathrooms, entryways and more, in the pattern and size you choose.",
    ],
    highlights: ["Kitchen & bathroom tile", "Patterns & layouts", "Grout & sealing", "Waterproofing"],
  },
  "wood-flooring": {
    summary: "Hardwood and engineered wood floors installed, repaired and finished.",
    intro: [
      "Wood floors add warmth and value to any home. We install, refinish and repair them with attention to every board.",
      "We’ll help you choose the species, width and finish that suit your space.",
    ],
    highlights: ["Hardwood & engineered wood", "Installation & repair", "Sanding & refinishing", "Stairs & transitions"],
  },
};

export const serviceDetails: ServiceDetail[] = serviceCatalog.map(({ slug, title }) => ({
  slug,
  title,
  image: `https://picsum.photos/seed/wcss-service-${slug}/1200/800`,
  ...copy[slug],
}));

export const getServiceDetail = (slug: string) => serviceDetails.find((s) => s.slug === slug);
