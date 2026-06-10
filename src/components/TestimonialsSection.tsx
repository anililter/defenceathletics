"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Defence Athletics'e adım attığım gün hayatım değişti. Sadece fiziksel olarak değil, zihinsel olarak da tamamen dönüştüm. Bu kulübün sunduğu disiplin ve kalite eşsiz.",
    author: "Elif K.",
    title: "Pilates & Boks Üyesi",
    branch: "Beşiktaş",
    rating: 5,
    duration: "2 Yıllık Üye",
  },
  {
    id: 2,
    quote:
      "CrossFit programı sayesinde hayatımın en iyi formuna girdim. Antrenörler gerçekten dünya standartlarında. Ortam premium, ekipmanlar mükemmel.",
    author: "Mehmet A.",
    title: "CrossFit & Kondisyon Üyesi",
    branch: "Levent",
    rating: 5,
    duration: "3 Yıllık Üye",
  },
  {
    id: 3,
    quote:
      "Dünyanın birçok şehrinde spor salonlarına üye oldum, ancak Defence Athletics'in sunduğu kişiselleştirilmiş deneyim ve lüks ortam gerçekten benzersiz.",
    author: "Sarah M.",
    title: "Mobilite & Pilates Üyesi",
    branch: "Dubai Marina",
    rating: 5,
    duration: "1 Yıllık Üye",
  },
  {
    id: 4,
    quote:
      "Kondisyon programımı özelleştiren antrenörüm, hedeflerimi gerçekleştirmek için tam bir yol haritası çıkardı. 6 ayda inanılmaz bir dönüşüm yaşadım.",
    author: "Burak T.",
    title: "Kuvvet & Kondisyon Üyesi",
    branch: "Kadıköy",
    rating: 5,
    duration: "18 Aylık Üye",
  },
  {
    id: 5,
    quote:
      "Uzun yıllar boyunca sporla ilgileniyordum ama Defence Athletics'in disiplin anlayışı ve üst düzey antrenman ortamı bambaşka bir seviyede. Hayatımın en doğru kararlarından biri.",
    author: "Zeynep D.",
    title: "Boks & Mobilite Üyesi",
    branch: "Beşiktaş",
    rating: 5,
    duration: "4 Yıllık Üye",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const next = () => goTo((current + 1) % testimonials.length);
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".testimonial-reveal");
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const t = testimonials[current];

  return (
    <section
      id="yorumlar"
      ref={sectionRef}
      className="section-padding bg-bege relative overflow-hidden"
    >
      {/* Decorative large quote */}
      <div
        className="absolute top-10 left-10 text-charcoal/5 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "300px",
          lineHeight: "1",
          fontWeight: "300",
        }}
      >
        &ldquo;
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="testimonial-reveal label-tag"
            style={{
              fontFamily: "var(--font-inter)",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Üye Deneyimleri
          </span>
          <h2
            className="testimonial-reveal font-display font-light text-charcoal mt-2"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              lineHeight: "1.1",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Dönüşümlerin{" "}
            <em className="not-italic text-gold">gerçek hikayeleri.</em>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="testimonial-reveal max-w-4xl mx-auto"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
            ))}
          </div>

          {/* Quote */}
          <div
            className={`transition-all duration-300 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            <blockquote className="testimonial-quote text-center mb-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-px bg-gold" />
              <div className="text-center mt-2">
                <p
                  className="font-display text-xl font-light text-charcoal"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {t.author}
                </p>
                <p
                  className="text-xs font-body font-medium tracking-widest uppercase mt-1"
                  style={{
                    fontFamily: "var(--font-inter)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {t.title} · {t.branch} · {t.duration}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            id="testimonial-prev"
            onClick={prev}
            className="p-3 border border-charcoal/20 hover:border-gold hover:text-gold text-charcoal transition-all duration-300"
            aria-label="Önceki yorum"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 ${
                  i === current
                    ? "w-6 h-1 bg-gold"
                    : "w-1 h-1 bg-charcoal/30 hover:bg-gold/50 rounded-full"
                }`}
                aria-label={`${i + 1}. yorum`}
              />
            ))}
          </div>

          <button
            id="testimonial-next"
            onClick={next}
            className="p-3 border border-charcoal/20 hover:border-gold hover:text-gold text-charcoal transition-all duration-300"
            aria-label="Sonraki yorum"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
