"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "years",
    value: 10,
    suffix: "+",
    label: "Yıllık Deneyim",
    description: "Spor dünyasında güven inşa etmenin on yılı",
  },
  {
    id: "members",
    value: 1500,
    suffix: "+",
    label: "Dönüşen Hayat",
    description: "Sınırlarını aşan, potansiyelini keşfeden bireyler",
  },
  {
    id: "trainers",
    value: 25,
    suffix: "+",
    label: "Elite Antrenör",
    description: "Uluslararası sertifikalı uzman kadro",
  },
  {
    id: "locations",
    value: 3,
    suffix: "",
    label: "Prestijli Şube",
    description: "İstanbul'un kalbinde ve Dubai'de",
  },
];

function useCounter(end: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, started]);

  return count;
}

function StatItem({
  stat,
  started,
  index,
}: {
  stat: (typeof stats)[0];
  started: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, 2000 + index * 200, started);

  return (
    <div
      className="stat-reveal flex flex-col items-center lg:items-start text-center lg:text-left py-8 lg:py-0 border-b lg:border-b-0 lg:border-r border-ivory/10 last:border-0 px-6 first:pl-0 last:pr-0"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: `all 0.7s ease ${index * 0.15}s`,
      }}
    >
      <div className="stat-number mb-2">
        {count}
        {stat.suffix}
      </div>
      <div
        className="text-ivory text-sm font-body font-semibold tracking-[0.15em] uppercase mb-2"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {stat.label}
      </div>
      <p
        className="text-ivory/40 text-xs font-body leading-relaxed max-w-[180px]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {stat.description}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const items = entry.target.querySelectorAll(".stat-reveal");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      id="istatistikler"
      ref={sectionRef}
      className="section-padding-sm bg-midnight relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,169,110,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(201,169,110,0.2) 0%, transparent 50%)",
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="label-tag" style={{ fontFamily: "var(--font-inter)" }}>
            Rakamlarla Defence Athletics
          </span>
          <h2
            className="font-display font-light text-ivory mt-2"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: "1.1",
            }}
          >
            Mükemmeliyetin
            <em className="not-italic text-gold"> ölçütleri.</em>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 divide-ivory/10">
          {stats.map((stat, index) => (
            <StatItem key={stat.id} stat={stat} started={started} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
