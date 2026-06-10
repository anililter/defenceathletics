"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const y = window.scrollY;
        overlayRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={overlayRef} className="absolute inset-0 scale-110">
        <img
          src="/hero-bg.jpg"
          alt="Defence Athletics — Lüks Spor Kulübü"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent z-10" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-gold z-20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-20 container-site text-center lg:text-left">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="inline-flex items-center gap-3 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="h-px w-10 bg-gold" />
            <span
              className="text-gold text-xs font-body font-semibold tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              İstanbul · Dubai
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-ivory font-light leading-none mb-6 animate-slide-up"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(56px, 8vw, 120px)",
              letterSpacing: "-0.01em",
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Potansiyelini
            <br />
            <em className="not-italic text-gold">Yeniden</em>
            <br />
            Tanımla.
          </h1>

          {/* Subtext */}
          <p
            className="text-ivory/60 font-body font-light text-lg mb-10 max-w-lg animate-slide-up"
            style={{
              fontFamily: "var(--font-inter)",
              animationDelay: "0.6s",
              opacity: 0,
              animationFillMode: "forwards",
              lineHeight: "1.7",
            }}
          >
            Sıradan sınırları aşanlar için tasarlanmış, zihin ve beden dönüşüm merkezi.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start animate-slide-up"
            style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a
              id="hero-cta-primary"
              href="#iletisim"
              className="btn-gold text-xs py-4 px-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Özel Seans Ayarla
            </a>
            <a
              id="hero-cta-secondary"
              href="#branslar"
              className="btn-outline-ivory text-xs py-4 px-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Branşları Keşfet
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.2s", opacity: 0, animationFillMode: "forwards" }}>
        <span
          className="text-ivory/40 text-[10px] font-body tracking-[0.25em] uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Kaydır
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-scroll-down" />
        <ArrowDown size={12} className="text-gold animate-float" />
      </div>

      {/* Floating stat badge */}
      <div
        className="absolute bottom-12 right-10 z-20 hidden lg:block bg-charcoal/80 backdrop-blur-sm border border-gold/20 p-5 animate-fade-in"
        style={{ animationDelay: "1.4s", opacity: 0, animationFillMode: "forwards" }}
      >
        <div
          className="text-gold font-display text-3xl font-light"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          10+
        </div>
        <div
          className="text-ivory/50 text-[11px] font-body tracking-widest uppercase mt-1"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Yıllık Deneyim
        </div>
      </div>
    </section>
  );
}
