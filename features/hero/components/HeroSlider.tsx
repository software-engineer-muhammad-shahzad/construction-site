"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { ChevronDownIcon } from "@/shared/components/icons";
import { heroSlides } from "../data/hero-slides";
import "../styles/hero.css";

export default function HeroSlider() {
  return (
    <section className="hero-slider" aria-label="Featured projects">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        speed={900}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        className="hero-swiper"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={slide.img}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.img}
              alt={slide.alt}
              width={1920}
              height={1080}
              className="hero-slide-img"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
            />
            <div className="hero-slide-overlay">
              <div className="hero-inner">
                <h1>
                  <span className="hero-accent">WCSS</span> Construction
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="#services" className="hero-down" aria-label="Scroll to services">
        <ChevronDownIcon size={20} />
      </a>
    </section>
  );
}
