"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const branches = [
  {
    id: "besiktas",
    city: "İstanbul",
    name: "Beşiktaş",
    address: "Barbaros Bulvarı No:45, Beşiktaş",
    hours: "06:00 – 23:00",
    phone: "+90 212 XXX XX XX",
    mapUrl: "https://maps.google.com",
    highlight: "Ana Merkez",
    description: "Şehrin kalbinde, Boğaz manzaralı premium lokasyonumuz.",
  },
  {
    id: "kadikoy",
    city: "İstanbul",
    name: "Kadıköy",
    address: "Moda Caddesi No:78, Kadıköy",
    hours: "06:00 – 23:00",
    phone: "+90 216 XXX XX XX",
    mapUrl: "https://maps.google.com",
    highlight: "Anadolu Yakası",
    description: "Dinamik Kadıköy'ün ruhunu taşıyan ferah antrenman alanı.",
  },
  {
    id: "levent",
    city: "İstanbul",
    name: "Levent",
    address: "Büyükdere Caddesi No:102, Levent",
    hours: "06:00 – 22:00",
    phone: "+90 212 XXX XX XX",
    mapUrl: "https://maps.google.com",
    highlight: "İş Merkezi",
    description: "İstanbul'un finans merkezi içinde, kurumsal antrenman çözümleri.",
  },
  {
    id: "dubai",
    city: "Dubai",
    name: "Dubai Marina",
    address: "Dubai Marina Walk, Dubai, UAE",
    hours: "05:30 – 23:30",
    phone: "+971 4 XXX XXXX",
    mapUrl: "https://maps.google.com",
    highlight: "International",
    description: "Dubai Marina'nın ikonik silueti karşısında, global elite deneyim.",
  },
];

export default function BranchesSection() {
  const [active, setActive] = useState("besiktas");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".branch-reveal");
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeBranch = branches.find((b) => b.id === active)!;

  return (
    <section id="subeler" ref={sectionRef} className="section-padding bg-ivory">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="branch-reveal label-tag"
            style={{
              fontFamily: "var(--font-inter)",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Şubelerimiz
          </span>
          <h2
            className="branch-reveal font-display font-light text-charcoal mt-2"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              lineHeight: "1.1",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Sizi en yakın{" "}
            <em className="not-italic text-gold">mükemmeliyete</em>
            <br />
            bağlıyoruz.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Branch Selector */}
          <div
            className="branch-reveal space-y-3"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            {branches.map((branch) => (
              <button
                key={branch.id}
                id={`branch-btn-${branch.id}`}
                onClick={() => setActive(branch.id)}
                className={`branch-card w-full text-left p-6 transition-all duration-300 ${
                  active === branch.id ? "active" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`branch-dot w-2 h-2 rounded-full transition-all duration-300 ${
                        active === branch.id ? "bg-gold" : "bg-charcoal/20"
                      }`}
                    />
                    <div>
                      <div className="flex items-center gap-3">
                        <h3
                          className="font-display text-xl font-light text-charcoal"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          {branch.name}
                        </h3>
                        <span
                          className="text-[10px] font-body font-semibold tracking-widest uppercase px-2 py-0.5"
                          style={{
                            fontFamily: "var(--font-inter)",
                            color: "var(--color-gold)",
                            border: "1px solid var(--color-gold)",
                          }}
                        >
                          {branch.highlight}
                        </span>
                      </div>
                      <p
                        className="text-xs font-body mt-0.5"
                        style={{
                          fontFamily: "var(--font-inter)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {branch.city}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs transition-colors duration-300 ${
                      active === branch.id ? "text-gold" : "text-charcoal/30"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active Branch Detail */}
          <div
            className="branch-reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
          >
            <div className="bg-charcoal p-8 lg:p-10 relative overflow-hidden">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gold" />

              <div className="pl-4">
                {/* City badge */}
                <span className="label-tag mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                  {activeBranch.city}
                </span>

                <h3
                  className="font-display text-ivory text-4xl font-light mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {activeBranch.name}
                </h3>

                <p
                  className="text-ivory/50 text-sm font-body leading-relaxed mb-8"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {activeBranch.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <span
                      className="text-ivory/70 text-sm font-body"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {activeBranch.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock size={16} className="text-gold flex-shrink-0" />
                    <span
                      className="text-ivory/70 text-sm font-body"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {activeBranch.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={16} className="text-gold flex-shrink-0" />
                    <span
                      className="text-ivory/70 text-sm font-body"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {activeBranch.phone}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={activeBranch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-[11px] py-3 px-6 flex items-center gap-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <ExternalLink size={12} />
                    Haritada Gör
                  </a>
                  <a
                    href="#iletisim"
                    className="btn-outline-ivory text-[11px] py-3 px-6"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Seans Ayarla
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
