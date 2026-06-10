"use client";

import { useEffect, useRef } from "react";

const disciplines = [
  {
    id: "boks",
    title: "Boks",
    subtitle: "Combat & Güç",
    description:
      "Uzman antrenörler eşliğinde teknik boks antrenmanı. Refleks, dayanıklılık ve mental güç geliştirme programları.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&q=80&auto=format&fit=crop",
    tag: "Savaş Sanatı",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    subtitle: "Fonksiyonel Güç",
    description:
      "Yüksek yoğunluklu fonksiyonel antrenmanlar ile tüm vücudu güçlendirin. Topluluk ruhu ile motivasyonunuzu zirveye taşıyın.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&auto=format&fit=crop",
    tag: "Yüksek Performans",
  },
  {
    id: "pilates",
    title: "Pilates",
    subtitle: "Denge & Esneklik",
    description:
      "Reformer ve mat pilates ile postür, core gücü ve esnekliğinizi geliştirin. Zihin-beden bütünlüğü için tasarlanmış seanlar.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80&auto=format&fit=crop",
    tag: "Zihin & Beden",
  },
  {
    id: "mobilite",
    title: "Mobilite",
    subtitle: "Hareket Kalitesi",
    description:
      "Eklem hareket açıklığı, esneklik ve yaralanma önleme. Performansınızın temelidir.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80&auto=format&fit=crop",
    tag: "Fonksiyonel",
  },
  {
    id: "kondisyon",
    title: "Kondisyon",
    subtitle: "Kuvvet & Dayanıklılık",
    description:
      "Kişiye özel güç ve kondisyon programları. Atletik performansınızı bir üst seviyeye taşıyın.",
    image: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&q=80&auto=format&fit=crop",
    tag: "Elite Training",
  },
];

export default function DisciplinesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".discipline-card-reveal");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="branslar" ref={sectionRef} className="section-padding bg-charcoal">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-tag" style={{ fontFamily: "var(--font-inter)" }}>
            Branşlarımız
          </span>
          <h2
            className="font-display font-light text-ivory mt-2"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              lineHeight: "1.1",
            }}
          >
            Potansiyelinize giden
            <br />
            <em className="not-italic text-gold">beş farklı yol.</em>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {disciplines.map((disc, i) => (
            <div
              key={disc.id}
              id={`discipline-${disc.id}`}
              className="discipline-card-reveal discipline-card group"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Background Image */}
              <img
                src={disc.image}
                alt={disc.title}
                className="card-img"
              />

              {/* Overlay */}
              <div className="card-overlay" />

              {/* Content */}
              <div className="card-content">
                {/* Tag */}
                <span
                  className="inline-block text-gold/80 text-[10px] font-body font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {disc.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-ivory font-display text-2xl font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {disc.title}
                </h3>
                <p
                  className="text-ivory/60 text-xs font-body mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {disc.subtitle}
                </p>

                {/* Gold separator */}
                <div className="h-px bg-gold/40 mb-3 group-hover:bg-gold transition-colors duration-300" />

                {/* Detail - reveals on hover */}
                <div className="card-detail">
                  <p
                    className="text-ivory/70 text-xs font-body leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {disc.description}
                  </p>
                  <a
                    href="#iletisim"
                    className="inline-flex items-center gap-2 text-gold text-[11px] font-body font-semibold tracking-widest uppercase hover:text-gold-light transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Keşfet →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p
            className="text-ivory/40 text-sm font-body mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Hangi branşın sizi dönüştüreceğini bulmak için
          </p>
          <a
            id="disciplines-cta"
            href="#iletisim"
            className="btn-outline-gold text-[11px]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ücretsiz Danışmanlık Al
          </a>
        </div>
      </div>
    </section>
  );
}
