"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/search.css";

type HighlightRegistry = { set(name: string, h: unknown): void; delete(name: string): void };
type HighlightCtor = new (...ranges: Range[]) => unknown;

const registry = (): HighlightRegistry | undefined =>
  (CSS as unknown as { highlights?: HighlightRegistry }).highlights;

// Finds every occurrence of `query` in the page text, outside the header.
function findRanges(query: string): Range[] {
  const q = query.toLowerCase();
  const ranges: Range[] = [];
  if (!q) return ranges;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const el = node.parentElement;
      if (!el || el.closest("header, script, style, noscript, [inert], .to-top")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const text = (n.textContent ?? "").toLowerCase();
    let i = text.indexOf(q);
    while (i !== -1) {
      const r = document.createRange();
      r.setStart(n, i);
      r.setEnd(n, i + q.length);
      ranges.push(r);
      i = text.indexOf(q, i + q.length);
    }
  }
  return ranges;
}

// Search icon that expands into an input and highlights matches on the current page.
export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const ranges = useRef<Range[]>([]);

  const clear = useCallback(() => {
    registry()?.delete("site-search");
    registry()?.delete("site-search-current");
    ranges.current = [];
    setCount(0);
    setIndex(0);
  }, []);

  const go = useCallback((i: number) => {
    const list = ranges.current;
    if (!list.length) return;
    const n = ((i % list.length) + list.length) % list.length;
    const Highlight = (window as unknown as { Highlight?: HighlightCtor }).Highlight;
    if (Highlight) registry()?.set("site-search-current", new Highlight(list[n]));
    list[n].startContainer.parentElement?.scrollIntoView({ block: "center", behavior: "smooth" });
    setIndex(n);
  }, []);

  const run = useCallback(
    (q: string) => {
      clear();
      const term = q.trim();
      if (!term) return;
      const found = findRanges(term);
      ranges.current = found;
      setCount(found.length);
      const Highlight = (window as unknown as { Highlight?: HighlightCtor }).Highlight;
      if (Highlight && found.length) registry()?.set("site-search", new Highlight(...found));
      if (found.length) go(0);
    },
    [clear, go],
  );

  // Live search as you type (debounced).
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => run(value), 150);
    return () => clearTimeout(t);
  }, [value, open, run]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setValue("");
        clear();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, clear]);

  return (
    <form
      role="search"
      className={`searchbox${open ? " open" : ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        go(index + 1);
      }}
    >
      <input
        ref={input}
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search this page…"
        aria-label="Search this page"
        tabIndex={open ? 0 : -1}
        onBlur={(e) => {
          if (!e.currentTarget.value) setOpen(false);
        }}
      />
      {open && value.trim() && (
        <span className="searchbox-count" aria-live="polite">
          {count ? `${index + 1}/${count}` : "0"}
        </span>
      )}
      <button
        type="button"
        aria-label={open ? "Next match" : "Open search"}
        aria-expanded={open}
        onClick={() => (open ? go(index + 1) : setOpen(true))}
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
      </button>
    </form>
  );
}
