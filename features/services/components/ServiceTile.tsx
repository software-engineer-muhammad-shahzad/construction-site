"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "../data/services";
import GalleryModal from "./GalleryModal";

// Service card: the whole card links to the service page; the "+" button opens its photo gallery.
export default function ServiceTile({ service, tag = "View Details" }: { service: Service; tag?: string }) {
  const [open, setOpen] = useState(false);
  const { title, href, image, icon, gallery } = service;

  return (
    <div className="tile relative mx-auto w-full max-w-72 overflow-hidden rounded-xl bg-white p-6 text-center shadow-lg ring-1 ring-black/5">
      <span className="tile-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d={icon} />
        </svg>
      </span>
      <h3 className="mb-4 text-lg font-extrabold tracking-wide text-[#1b1b1b] uppercase">{title}</h3>

      <div className="tile-media relative overflow-hidden rounded shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} width={400} height={400} loading="lazy" decoding="async" className="tile-img aspect-square w-full object-cover" />

        <div className="tile-layer">
          <button type="button" className="tile-plus" aria-label={`View ${title} photos`} onClick={() => setOpen(true)}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div className="tile-info">
            <p className="tile-title">{title}</p>
            <span className="tile-tag">{tag}</span>
          </div>
        </div>
      </div>

      {/* The whole card is a link; the + button above it opens the gallery instead. */}
      <Link href={href} className="tile-link" aria-label={`${title} – ${tag}`} />

      <GalleryModal title={title} images={gallery} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
