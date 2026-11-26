export type GalleryCategory = "Remodeling" | "Construction" | "Services";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  /** Small image for the grid. */
  thumb: string;
  /** Large image for the lightbox. */
  full: string;
};

export const galleryCategories: GalleryCategory[] = ["Remodeling", "Construction", "Services"];

const make = (id: string, title: string, category: GalleryCategory): GalleryItem => ({
  id,
  title,
  category,
  thumb: `https://picsum.photos/seed/wcss-gallery-${id}/600/450`,
  full: `https://picsum.photos/seed/wcss-gallery-${id}/1400/1000`,
});

// Photos are placeholders — replace with real project photos.
export const galleryItems: GalleryItem[] = [
  make("kitchen-1", "Kitchen remodel", "Remodeling"),
  make("bathroom-1", "Bathroom remodel", "Remodeling"),
  make("basement-1", "Basement finishing", "Remodeling"),
  make("kitchen-2", "Kitchen cabinets", "Remodeling"),
  make("addition-1", "Home addition", "Construction"),
  make("deck-1", "Deck construction", "Construction"),
  make("patio-1", "Patio construction", "Construction"),
  make("framing-1", "Framing", "Construction"),
  make("siding-1", "Siding installation", "Construction"),
  make("flooring-1", "Wood flooring", "Services"),
  make("painting-1", "Interior painting", "Services"),
  make("countertops-1", "Custom countertops", "Services"),
];
