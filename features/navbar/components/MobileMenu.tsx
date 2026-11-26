"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/shared/config/site";
import type { NavItem } from "../data/nav-items";


export default function MobileMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Close the drawer after navigating (state reset during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setExpanded(null);
  }

  // Lock page scroll while open and close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));

  return (
    <div className="mnav">
      <button
        type="button"
        className={`mnav-btn${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mnav-drawer"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mnav-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <aside id="mnav-drawer" className={`mnav-drawer${open ? " open" : ""}`} inert={!open} aria-label="Menu">
        <ul>
          {items.map((i, idx) => (
            <li key={i.href} style={{ transitionDelay: open ? `${80 + idx * 45}ms` : "0ms" }}>
              <div className="mnav-row">
                <Link href={i.href} className={isActive(i.href) ? "active" : undefined}>
                  {i.label}
                </Link>
                {i.children && (
                  <button
                    type="button"
                    className={`mnav-toggle${expanded === i.href ? " is-open" : ""}`}
                    aria-label={`Toggle ${i.label} submenu`}
                    aria-expanded={expanded === i.href}
                    onClick={() => setExpanded(expanded === i.href ? null : i.href)}
                  >
                    <span className="caret" aria-hidden="true" />
                  </button>
                )}
              </div>
              {i.children && (
                <ul className={`mnav-sub${expanded === i.href ? " open" : ""}`}>
                  {i.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href}>{c.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <a href={site.phone.href} className="mnav-call">
          Call Now · {site.phone.label}
        </a>
      </aside>
    </div>
  );
}
