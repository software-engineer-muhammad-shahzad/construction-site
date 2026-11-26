import PageHero from "@/shared/components/PageHero";
import GalleryGrid from "./GalleryGrid";

// /gallery — filterable project photos.
export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        image="https://picsum.photos/seed/wcss-gallery-hero/1600/600"
        subtitle="A look at some of our recent work"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <GalleryGrid />
      </section>
    </>
  );
}
