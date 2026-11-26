// Single source of truth for business details used across the site.

export const site = {
  name: "WCSS Construction",
  phone: { label: "(888) 922-2017", href: "tel:8889222017" },
  email: "elad@wcssinc.com",
  address: { street: "2250 Vicente Street", city: "San Francisco, CA 94116" },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=2250+Vicente+Street+San+Francisco+CA+94116",
  serviceAreas: ["San Francisco", "San Leandro", "San Jose"],
  socials: {
    facebook: "https://facebook.com",
    houzz: "https://houzz.com",
  },
  credits: { label: "LinkNow", href: "https://linknow.com/" },
} as const;
