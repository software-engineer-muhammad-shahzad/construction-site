"use client";

import { useEffect, useRef, useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory } from "../data/gallery";
import "../styles/gallery.css";

type Filter = "All" | GalleryCategory;
const filters: Filter[] = ["All", ...galleryCategories];

// Filterable photo grid with a keyboard-friendly lightbox (native <dialog>).
export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const items = filter === "All" ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const open = current !== null && current < items.length;
  const item = open ? items[current] : null;

  // Show / hide the dialog and lock page scroll while it is open.
  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const step = (dir: 1 | -1) => setCurrent((c) => (c === null ? c : (c + dir + items.length) % items.length));

  // Arrow keys while the lightbox is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  return (
    <>
      <div className="gal-filters" role="tablist" aria-label="Filter photos">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`gal-chip${filter === f ? " is-active" : ""}`}
            onClick={() => {
              setFilter(f);
              setCurrent(null);
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="gal-grid">
        {items.map((g, i) => (
          <li key={g.id}>
            <button type="button" className="gal-card" onClick={() => setCurrent(i)} aria-label={`Open ${g.title}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={g.thumb} alt={g.title} width={600} height={450} loading="lazy" decoding="async" />
              <span className="gal-card-layer">
                <span className="gal-card-plus" aria-hidden="true">+</span>
                <span className="gal-card-title">{g.title}</span>
                <span className="gal-card-tag">{g.category}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="gal-dialog"
        aria-label="Photo viewer"
        onClose={() => setCurrent(null)}
        onClick={(e) => e.target === dialog.current && setCurrent(null)}
      >
        {item && (
          <>
            <button type="button" className="gal-close" aria-label="Close" onClick={() => setCurrent(null)}>
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.full} alt={item.title} className="gal-full" />
            <div className="gal-bar">
              <button type="button" className="gal-nav" aria-label="Previous photo" onClick={() => step(-1)}>
                ‹
              </button>
              <p>
                <strong>{item.title}</strong>
                <span>
                  {(current ?? 0) + 1} / {items.length}
                </span>
              </p>
              <button type="button" className="gal-nav" aria-label="Next photo" onClick={() => step(1)}>
                ›
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
