// Construction types offered. Used by the navbar dropdown and the construction pages.

export type CatalogConstruction = { slug: string; title: string };

export const constructionCatalog: CatalogConstruction[] = [
  { slug: "commercial", title: "Commercial Construction" },
  { slug: "residential", title: "Residential Construction" },
  { slug: "deck", title: "Deck Construction" },
  { slug: "patio", title: "Patio Construction" },
  { slug: "home-additions", title: "Home Additions" },
  { slug: "siding", title: "Siding" },
  { slug: "framing", title: "Framing" },
];
