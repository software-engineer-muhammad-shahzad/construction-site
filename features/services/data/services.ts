export type Service = {
  title: string;
  href: string;
  /** Square thumbnail shown on the card. */
  image: string;
  /** SVG path (24×24 viewBox) for the card icon. */
  icon: string;
  /** Photos shown in the gallery modal. */
  gallery: string[];
};

// Real photos in /public/images/services (600×600).
const PHOTOS = {
  services: "/images/services/services.jpg",
  remodeling: "/images/services/remodeling.jpg",
  construction: "/images/services/construction.jpg",
};

const BUILDING_ICON =
  "M5 3h14a1 1 0 0 1 1 1v17H4V4a1 1 0 0 1 1-1zm3 4v2h2V7zm6 0v2h2V7zm-6 4v2h2v-2zm6 0v2h2v-2zm-6 4v2h2v-2zm6 0v2h2v-2z";

// Each gallery opens on the card's own photo, followed by the other project photos.
const galleryFor = (own: string) => [own, ...Object.values(PHOTOS).filter((p) => p !== own)];

const make = (title: string, href: string, image: string, icon: string): Service => ({
  title,
  href,
  image,
  icon,
  gallery: galleryFor(image),
});

export const services: Service[] = [
  make(
    "Services",
    "/services",
    PHOTOS.services,
    "M19.4 13a7.5 7.5 0 0 0 0-2l2-1.6-2-3.4-2.4 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 3a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7.5 7.5 0 0 0 0 2l-2 1.6 2 3.4 2.4-1c.5.4 1.1.7 1.7 1l.4 3h4l.4-3c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.4zM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z",
  ),
  make("Remodeling", "/remodeling", PHOTOS.remodeling, BUILDING_ICON),
  make("Construction", "/construction", PHOTOS.construction, BUILDING_ICON),
];
