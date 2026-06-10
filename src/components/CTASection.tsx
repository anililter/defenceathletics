"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";

const branches = ["Beşiktaş", "Kadıköy", "Levent", "Dubai Marina"];
const disciplines = ["Boks", "CrossFit", "Pilates", "Mobilite", "Kondisyon", "Tüm Branşlar"];

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    discipline: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".cta-reveal");
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // simulate API
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `
    w-full bg-transparent border-b border-ivory/20 px-0 py-3 text-ivory
    text-sm font-body placeholder:text-ivory/30 outline-none
    focus:border-gold transition-colors duration-300
  `;

  const selectClass = `
    w-full bg-charcoal border-b border-ivory/20 px-0 py-3 text-ivory
    text-sm font-body outline-none focus:border-gold transition-colors duration-300
    appearance-none cursor-pointer
  `;

  return (
    <section
      id="iletisim"
      ref={sectionRef}
      className="section-padding bg-charcoal relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/95" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Text */}
          <div>
            <span
              className="cta-reveal label-tag"
              style={{
                fontFamily: "var(--font-inter)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              Dönüşümünü Başlat
            </span>
            <h2
              className="cta-reveal font-display font-light text-ivory mt-4 mb-8"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: "1.1",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              İlk adımını
              <br />
              <em className="not-italic text-gold">bugün at.</em>
            </h2>
            <p
              className="cta-reveal text-ivory/50 text-lg font-body leading-relaxed mb-10"
              style={{
                fontFamily: "var(--font-inter)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              Ücretsiz danışmanlık seansı için formu doldurun. Size uygun branş ve antrenör programını 24 saat içinde sunalım.
            </p>

            {/* Promises */}
            <div
              className="cta-reveal space-y-4"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              {[
                "Kişiselleştirilmiş antrenman programı",
                "Uzman kadro ile ücretsiz ilk görüşme",
                "Şube ziyareti ve tur imkânı",
                "Taahhütsüz, baskısız başlangıç",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-gold flex-shrink-0" />
                  <span
                    className="text-ivory/70 text-sm font-body"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="cta-reveal"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease 0.2s" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-16">
                <CheckCircle size={48} className="text-gold animate-float" />
                <h3
                  className="font-display text-ivory text-3xl font-light text-center"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Mesajınız ulaştı.
                </h3>
                <p
                  className="text-ivory/50 text-sm text-center font-body"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  24 saat içinde sizinle iletişime geçeceğiz.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Adınız *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Ad Soyad"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      E-posta *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Telefon
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="+90 5XX XXX XX XX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                {/* Branch + Discipline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Şube *
                    </label>
                    <select
                      id="form-branch"
                      required
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className={selectClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <option value="" disabled>Seçin</option>
                      {branches.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Branş
                    </label>
                    <select
                      id="form-discipline"
                      value={form.discipline}
                      onChange={(e) => setForm({ ...form, discipline: e.target.value })}
                      className={selectClass}
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      <option value="" disabled>Seçin</option>
                      {disciplines.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="text-ivory/40 text-[11px] font-body tracking-widest uppercase block mb-1"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    placeholder="Hedeflerinizi, sorularınızı paylaşın..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  id="form-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full sm:w-auto px-12 py-4 flex items-center justify-center gap-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {loading ? (
                    <span className="animate-pulse-gold">Gönderiliyor...</span>
                  ) : (
                    <>
                      <Send size={14} />
                      Danışmanlık Talep Et
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
