import type { ReactNode } from "react";
import Reveal from "@/shared/components/Reveal";
import "../styles/about.css";

type Props = {
  image: string;
  alt: string;
  caption: string;
  kicker: string;
  title: ReactNode;
  /** Put the photo on the right instead of the left. */
  flip?: boolean;
  /** Centre the text column. */
  center?: boolean;
  /** Content shown above the kicker (e.g. a badge). */
  top?: ReactNode;
  children: ReactNode;
};

// Photo + text split section with framed photo, caption chip and styled copy.
export default function SplitSection({ image, alt, caption, kicker, title, flip, center, top, children }: Props) {
  return (
    <section className="split grid border-t-4 border-[#fbb713] md:grid-cols-2">
      <div className={`split-media group relative min-h-80 overflow-hidden md:min-h-[34rem]${flip ? " md:order-2" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          width={1000}
          height={1100}
          loading="lazy"
          decoding="async"
          className="split-img absolute inset-0 h-full w-full object-cover"
        />
        <div className="split-shade" aria-hidden="true" />
        <span className="split-corner split-corner-tl" aria-hidden="true" />
        <span className="split-corner split-corner-br" aria-hidden="true" />
        <p className="split-caption">
          <span aria-hidden="true" />
          {caption}
        </p>
      </div>

      <Reveal className={`split-text flex flex-col justify-center px-8 py-16 md:px-12 lg:px-16${center ? " items-center text-center" : ""}`}>
        {top}
        <p className="split-kicker">{kicker}</p>
        <h2 className="text-3xl font-extrabold text-[#1b1b1b] md:text-4xl">{title}</h2>
        <span className="mt-4 block h-1 w-14 rounded bg-[#fbb713]" />
        <div className={`split-body mt-7 space-y-5 leading-7${center ? "" : " md:text-justify"}`}>{children}</div>
      </Reveal>
    </section>
  );
}
