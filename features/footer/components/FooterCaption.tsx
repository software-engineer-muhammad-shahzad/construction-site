import type { ReactNode } from "react";

// Small gold column title with a short leading line.
export default function FooterCaption({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-[#fbb713] uppercase">
      <span className="h-px w-6 bg-[#fbb713]" />
      {children}
    </p>
  );
}
