// The list of services offered. Used by the navbar dropdown and the services pages.

export type CatalogService = { slug: string; title: string };

export const serviceCatalog: CatalogService[] = [
  { slug: "carpentry", title: "Carpentry" },
  { slug: "concrete-work", title: "Concrete Work" },
  { slug: "custom-cabinets", title: "Custom Cabinets" },
  { slug: "custom-countertops", title: "Custom Countertops" },
  { slug: "doors", title: "Doors" },
  { slug: "electrical", title: "Electrical" },
  { slug: "home-repairs", title: "Home Repairs" },
  { slug: "hvac", title: "HVAC" },
  { slug: "painting", title: "Painting" },
  { slug: "plumbing", title: "Plumbing" },
  { slug: "flooring", title: "Flooring" },
  { slug: "tile-flooring", title: "Tile Flooring" },
  { slug: "wood-flooring", title: "Wood Flooring" },
];
