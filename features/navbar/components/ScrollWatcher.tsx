"use client";

import { useEffect } from "react";

// Toggles data-scrolled on <html> once the page is scrolled a little (with hysteresis to avoid flicker).
export default function ScrollWatcher() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", max > 0 ? String(Math.min(1, y / max)) : "0");
      if (y > 100) root.dataset.scrolled = "true";
      else if (y < 20) delete root.dataset.scrolled;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
