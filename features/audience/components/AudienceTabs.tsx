"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { CheckIcon } from "@/shared/components/icons";
import type { Audience } from "../data/audience";
import "../styles/audience.css";

const icons: Record<Audience["id"], string> = {
  residential: "M3 10l9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  commercial: "M5 3h14a1 1 0 0 1 1 1v17H4V4a1 1 0 0 1 1-1zm3 4v2h2V7zm6 0v2h2V7zm-6 4v2h2v-2zm6 0v2h2v-2zm-6 4v2h2v-2zm6 0v2h2v-2z",
};

export default function AudienceTabs({ items }: { items: Audience[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <section className="audience" aria-label="Choose your project type">
      <div className="audience-bar" role="tablist" aria-label="Project type">
        {items.map((a, i) => (
          <button
            key={a.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            id={`tab-${a.id}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`panel-${a.id}`}
            tabIndex={active === i ? 0 : -1}
            className={`audience-tab${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d={icons[a.id]} />
            </svg>
            {a.tab}
          </button>
        ))}
      </div>

      {items.map((a, i) => (
        <div
          key={a.id}
          id={`panel-${a.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${a.id}`}
          hidden={active !== i}
          className="audience-panel"
        >
          <div className="audience-text">
            <h2>{a.title}</h2>
            <span className="audience-rule" />
            {a.intro.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <ul>
              {a.points.map((pt) => (
                <li key={pt}>
                  <CheckIcon size={18} className="audience-check" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href={a.cta.href} className="audience-link">
              {a.cta.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="audience-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt={a.imageAlt} width={1000} height={800} loading="lazy" decoding="async" />
          </div>
        </div>
      ))}
    </section>
  );
}
