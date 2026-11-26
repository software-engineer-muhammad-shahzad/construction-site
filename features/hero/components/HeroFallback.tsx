import { heroSlides } from "../data/hero-slides";
import "../styles/hero.css";

// Static first slide shown instantly while the interactive slider loads.
export default function HeroFallback() {
  return (
    <section className="hero-slider" aria-label="Featured projects">
      <div className="hero-swiper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroSlides[0].img}
          alt={heroSlides[0].alt}
          width={1920}
          height={1080}
          className="hero-slide-img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-slide-overlay">
          <div className="hero-inner">
            <h1>
              <span className="hero-accent">WCSS</span> Construction
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
