"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, FreeMode, Keyboard, Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

type Props = { title: string; images: string[]; open: boolean; onClose: () => void };

const pad = (n: number) => String(n).padStart(2, "0");

// Photo gallery in a native <dialog>: fade slider, thumbnails, zoom and slideshow.
export default function GalleryModal({ title, images, open, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [thumbs, setThumbs] = useState<SwiperType | null>(null);
  const [main, setMain] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // Open/close the dialog and lock page scroll while it is open.
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

  // Start/stop the slideshow from the play button.
  useEffect(() => {
    if (!main || main.destroyed || !main.autoplay) return;
    if (playing) main.autoplay.start();
    else main.autoplay.stop();
  }, [playing, main]);

  const close = () => {
    setThumbs(null);
    setMain(null);
    setActive(0);
    setPlaying(false);
    setZoomed(false);
    onClose();
  };

  return (
    <dialog
      ref={dialog}
      className="tile-modal"
      aria-label={`${title} photo gallery`}
      onClose={close}
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="gallery-head">
        <div>
          <p className="gallery-kicker">Photo Gallery</p>
          <h4 className="gallery-title">{title}</h4>
        </div>
        <p className="gallery-count" aria-live="polite">
          <strong>{pad(active + 1)}</strong> / {pad(images.length)}
        </p>
        <button
          type="button"
          className="gallery-btn"
          aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          aria-pressed={playing}
          onClick={() => setPlaying((p) => !p)}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          className="gallery-btn"
          aria-label={zoomed ? "Zoom out" : "Zoom in"}
          aria-pressed={zoomed}
          onClick={() => main?.zoom.toggle()}
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
          </svg>
        </button>
        <button type="button" className="gallery-close" aria-label="Close gallery" onClick={close}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div className="gallery-progress" aria-hidden="true">
        <span style={{ width: `${((active + 1) / images.length) * 100}%` }} />
      </div>

      {open && (
        <>
          <Swiper
            modules={[Autoplay, EffectFade, Keyboard, Navigation, Thumbs, Zoom]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={600}
            keyboard
            navigation
            rewind
            zoom={{ maxRatio: 3 }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            onSwiper={setMain}
            onZoomChange={(_, scale) => setZoomed(scale > 1)}
            thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="gallery-main"
          >
            {images.map((src, i) => (
              <SwiperSlide key={src}>
                <div className="swiper-zoom-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${title} photo ${i + 1}`} className="gallery-img" loading={i === 0 ? "eager" : "lazy"} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbs}
            modules={[FreeMode, Thumbs]}
            slidesPerView={4}
            spaceBetween={10}
            freeMode
            watchSlidesProgress
            className="gallery-thumbs"
          >
            {images.map((src, i) => (
              <SwiperSlide key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src.replace("/1200/900", "/240/160")} alt={`Show photo ${i + 1}`} loading="lazy" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </dialog>
  );
}
