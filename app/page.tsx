import Navbar from "@/components/Navbar";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ─── DATA ─────────────────────────────────────────────── */
const branches = [
  { name:"Ataşehir",   addr:"Ataşehir Mah. Spor Cad. No:12, Ataşehir",    phone:"+90 530 100 0001", wa:"905301000001", icon:"🏋️", num:"01", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Bayrampaşa", addr:"Bayrampaşa Mah. Güç Sk. No:5, Bayrampaşa",   phone:"+90 530 100 0002", wa:"905301000002", icon:"🥊", num:"02", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Maltepe",    addr:"Bağlarbaşı Mah. Kampüs Sok. No:8, Maltepe",   phone:"+90 530 100 0003", wa:"905301000003", icon:"🥋", num:"03", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Nişantaşı",  addr:"Teşvikiye Cad. No:22, Şişli",                 phone:"+90 530 100 0004", wa:"905301000004", icon:"⚡", num:"04", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"PiyalePaşa", addr:"PiyalePaşa Bulvarı No:44, Kasımpaşa",         phone:"+90 530 100 0005", wa:"905301000005", icon:"🏆", num:"05", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Kadıköy",    addr:"Moda Cad. No:17, Kadıköy",                     phone:"+90 530 100 0006", wa:"905301000006", icon:"💪", num:"06", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Levent",     addr:"Büyükdere Cad. No:99, Levent",                 phone:"+90 530 100 0007", wa:"905301000007", icon:"🎯", num:"07", hours:"Pzt–Cum 07:00–22:00  |  Hf 09:00–20:00" },
  { name:"Dubai",      addr:"Sheikh Zayed Road, Al Barsha, Dubai, UAE",     phone:"+971 50 000 0001", wa:"971500000001", icon:"✈️", num:"08", hours:"Sat–Thu 07:00–22:00  |  Fri 09:00–20:00" },
];

const programs = [
  { icon:"🥊", title:"Kick Boks",             desc:"Teknik vuruş kombinasyonları ve kondisyon. Her seviye için profesyonel antrenman programları.", num:"01" },
  { icon:"🥋", title:"Muay Thai",             desc:"8 uzuvlu dövüş sanatı. Dirsek, diz, yumruk ve tekme tekniklerini en iyi antrenörlerle öğrenin.", num:"02" },
  { icon:"⚡",  title:"Atletik Performans",    desc:"Sporcular için özel yüksek yoğunluklu performans antrenmanları. Sınırlarını zorla.", num:"03" },
  { icon:"🧘", title:"Pilates",               desc:"Esneklik, denge ve güç için modern pilates. Beden ve zihin uyumunu keşfedin.", num:"04" },
  { icon:"💪", title:"Kuvvet & Kondisyon",    desc:"Fonksiyonel hareketlerle vücudunu zirveye taşı. Ölçülebilir sonuçlar.", num:"05" },
  { icon:"🎯", title:"Mobilite",              desc:"Eklem sağlığı ve hareket kalitesi. Sakatlanmayı önle, performansını artır.", num:"06" },
];

const whyUs = [
  { icon:"🏅", title:"Sertifikalı Antrenörler", desc:"Ulusal ve uluslararası federasyon sertifikalı, alanında uzman antrenör kadromuz." },
  { icon:"🏟️", title:"Modern Tesisler",          desc:"Son teknoloji ekipmanlar, temiz ve güvenli antrenman ortamı." },
  { icon:"📅", title:"Esnek Programlar",         desc:"Sabah 07:00'den gece 22:00'ye kadar yoğun program seçenekleri." },
  { icon:"🌍", title:"8 Şube",                   desc:"İstanbul geneli 7 şube + Dubai uluslararası şubesi ile her yerde yanınızdayız." },
  { icon:"🎯", title:"Kişisel Gelişim",          desc:"Fiziksel güç, mental dayanıklılık, disiplin ve özgüven." },
  { icon:"👥", title:"Topluluk Ruhu",            desc:"5.000+ üyemizden oluşan güçlü bir aile ortamına katılın." },
];

const testimonials = [
  { q:"Defence Athletics'e geldiğimde kendimi ailenin bir parçası gibi hissediyorum. Kickboks dersleri sayesinde hem dayanıklılığım arttı hem de stresimi atmanın harika bir yolunu buldum.", name:"Ayşe Yılmaz",   role:"Kickboks Üyesi",            init:"AY" },
  { q:"6 aydır crossfit antrenmanlarına katılıyorum. Vücudumda inanılmaz değişiklikler gördüm. Antrenörler her hareketi detaylı anlatıyor ve sürekli destek oluyor.",                        name:"İsa Dağhan",    role:"Atletik Performans Üyesi", init:"İD" },
  { q:"Pilates derslerine başladıktan sonra esnekliğim ve dengem çok gelişti. Bel ağrılarım azaldı ve kendimi daha fit hissediyorum. Kesinlikle tavsiye ederim.",                             name:"Sibel Koç",     role:"Pilates Üyesi",            init:"SK" },
  { q:"Muay Thai eğitimim bana sadece fiziksel güç değil, özgüven ve disiplin de kazandırdı. Antrenörler gerçekten uzman ve motive edici.",                                                   name:"Mert Arslan",   role:"Muay Thai Üyesi",          init:"MA" },
  { q:"Nişantaşı şubesinde kickboks derslerine katılıyorum. Tesis çok temiz ve modern, antrenörler profesyonel. Kesinlikle tavsiye ederim!",                                                  name:"Deniz Kaya",    role:"Kickboks Üyesi",            init:"DK" },
  { q:"Kuvvet ve kondisyon programı beni tamamen dönüştürdü. İki ay içinde performansım ikiye katlandı. Defence Athletics'in yaklaşımı gerçekten farklı.",                                    name:"Berk Doğan",    role:"Kuvvet & Kondisyon Üyesi", init:"BD" },
];

const ticker = ["Kickboks","Muay Thai","Pilates","Atletik Performans","Kuvvet & Kondisyon","Mobilite","Defence & Athletics","İstanbul · Dubai"];

/* ─── PAGE ─────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <AnimateOnScroll />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />

        <div className="hero-content">
          <div className="wrap">
            <div className="hero-tag reveal">
              <span className="tag">🏆 İstanbul&apos;un #1 Dövüş Sporları Kulübü</span>
            </div>

            <p className="hero-pre">Defence &amp; Athletics Club</p>

            <h1 className="h-xl hero-title">
              <span className="line1">Sınırlarını</span>
              <span className="line2">Zorla.</span>
              <span className="line3">En İyisi Ol.</span>
            </h1>

            <p className="hero-sub">
              Kickboks, Muay Thai, Pilates ve daha fazlasıyla kendinizi dönüştürün.
              8 şube, 50+ uzman antrenör, 5.000+ başarı hikayesi.
            </p>

            <div className="hero-actions">
              <a href="#iletisim" className="btn btn-red">
                Ücretsiz Deneme Dersi →
              </a>
              <a href="#dersler" className="btn btn-ghost">
                Dersleri Keşfet
              </a>
            </div>

            <div className="hero-stats">
              {[
                { n:"8+",  l:"Şube" },
                { n:"5K+", l:"Aktif Üye" },
                { n:"15+", l:"Yıl Deneyim" },
                { n:"50+", l:"Uzman Antrenör" },
              ].map(s => (
                <div className="stat" key={s.l}>
                  <div className="stat-n">{s.n}</div>
                  <div className="stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker">
          {[...ticker,...ticker].map((t,i) => (
            <span className="ticker-item" key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── PROGRAMS ─────────────────────────────────────── */}
      <section className="sec programs-sec" id="dersler">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="tag">Programlarımız</span>
            <h2 className="h-lg" style={{marginTop:"1.5rem",marginBottom:"1rem"}}>
              Her İhtiyaca Uygun<br />
              <span className="red">Antrenman</span>
            </h2>
            <p style={{color:"var(--text-2)",fontSize:"1rem",maxWidth:520,lineHeight:1.75}}>
              Dövüş sporlarından pilates&apos;e geniş bir yelpazede, bireysel hedeflerinize özel profesyonel eğitim.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((p, i) => (
              <div className="prog-card reveal" key={p.title}
                style={{ transitionDelay:`${i * 0.08}s` }}>
                <div className="prog-num">{p.num}</div>
                <span className="prog-icon">{p.icon}</span>
                <h3 className="prog-title">{p.title}</h3>
                <p className="prog-desc">{p.desc}</p>
                <span className="prog-link">
                  Daha Fazla <span>→</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────── */}
      <section className="sec" style={{background:"var(--bg)"}}>
        <div className="wrap">
          <div className="sec-head reveal" style={{textAlign:"center"}}>
            <span className="tag">Neden Biz?</span>
            <h2 className="h-lg" style={{marginTop:"1.5rem"}}>
              Defence&apos;i <span className="red">Özel</span> Kılan
            </h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w, i) => (
              <div className="why-card reveal" key={w.title}
                style={{ transitionDelay:`${i * 0.08}s` }}>
                <div className="why-icon">{w.icon}</div>
                <h3 className="why-title">{w.title}</h3>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCHES ─────────────────────────────────────── */}
      <section className="sec branches-sec" id="subeler">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="tag">Şubelerimiz</span>
            <h2 className="h-lg" style={{marginTop:"1.5rem",marginBottom:"1rem"}}>
              Size En Yakın<br />
              <span className="red">Şubemizi</span> Bulun
            </h2>
            <p style={{color:"var(--text-2)",fontSize:"1rem",maxWidth:520,lineHeight:1.75}}>
              İstanbul&apos;da 7, Dubai&apos;de 1 şubemizle her zaman yanınızdayız.
              Her şubenin ayrı iletişim hattı mevcuttur.
            </p>
          </div>

          <div className="branches-grid">
            {branches.map((b, i) => (
              <div className="branch-card reveal" key={b.name}
                style={{ transitionDelay:`${i * 0.07}s` }}>
                <div className="branch-num">{b.num}</div>
                <div className="branch-icon">{b.icon}</div>
                <h3 className="branch-name">{b.name} Şubesi</h3>
                <p className="branch-addr">📍 {b.addr}</p>
                <div className="branch-hours">🕐 {b.hours}</div>
                <div className="branch-actions">
                  <a href={`tel:${b.phone.replace(/\s/g,"")}`} className="branch-tel">
                    📞 {b.phone}
                  </a>
                  <a href={`https://wa.me/${b.wa}?text=Merhaba, bilgi almak istiyorum.`}
                    target="_blank" rel="noopener noreferrer"
                    className="branch-wa">
                    💬 WA
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="sec testi-sec" id="yorumlar">
        <div className="wrap">
          <div className="sec-head reveal" style={{textAlign:"center"}}>
            <span className="tag">Üyelerimiz</span>
            <h2 className="h-lg" style={{marginTop:"1.5rem"}}>
              Onlar Anlatıyor,<br />
              <span className="red">Siz Karar Veriyorsunuz</span>
            </h2>
          </div>

          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi-card reveal" key={i}
                style={{ transitionDelay:`${i * 0.09}s` }}>
                <div className="testi-stars">
                  {[...Array(5)].map((_,j) => <span key={j} className="testi-star">★</span>)}
                </div>
                <div className="testi-quote">&ldquo;</div>
                <p className="testi-text">{t.q}</p>
                <div className="testi-author">
                  <div className="testi-av">{t.init}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="sec about-sec" id="hakkinda">
        <div className="wrap">
          <div className="about-grid">
            <div className="reveal-l">
              <span className="tag">Hakkımızda</span>
              <h2 className="h-lg" style={{marginTop:"1.5rem",marginBottom:"2rem"}}>
                Yüksek Performansın<br />
                <span className="red">Merkezi</span>
              </h2>
              <div className="about-text">
                <p>
                  Defence Athletics olarak, dövüş sporlarına olan tutkumuzu
                  profesyonel antrenmanlarla birleştirerek her seviyeden sporcunun
                  kendini geliştirebileceği bir ortam sunuyoruz.
                </p>
                <p>
                  Modern eğitim metodlarımız, deneyimli antrenör kadromuz ve
                  disiplinli yaklaşımımız ile yalnızca fiziksel güç değil,
                  mental dayanıklılık ve özgüven kazandırmayı hedefliyoruz.
                </p>
              </div>
              <a href="#iletisim" className="btn btn-red" style={{marginTop:"1rem",display:"inline-flex"}}>
                Bize Katıl →
              </a>
            </div>

            <div className="about-visual reveal-r">
              <div className="about-visual-inner">
                {[
                  { n:"8+",  l:"Şube" },
                  { n:"15+", l:"Yıl Deneyim" },
                  { n:"50+", l:"Antrenör" },
                  { n:"5K+", l:"Mutlu Üye" },
                ].map(s => (
                  <div className="about-stat" key={s.l}>
                    <div className="about-stat-n">{s.n}</div>
                    <div className="about-stat-l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="cta-sec" id="iletisim">
        <div className="wrap cta-inner">
          <div className="reveal">
            <h2>İlk Ders<br />Ücretsiz!</h2>
            <p>
              Hemen rezervasyon yapın. Size en yakın şubemizde
              profesyonel antrenörlerimizle tanışın.
            </p>
            <div style={{display:"flex",justifyContent:"center",gap:"1rem",flexWrap:"wrap"}}>
              <a href="https://wa.me/905301000000?text=Merhaba, ücretsiz deneme dersi almak istiyorum."
                target="_blank" rel="noopener noreferrer"
                className="btn btn-white">
                💬 WhatsApp ile Rezervasyon
              </a>
              <a href="tel:+905301000000" className="btn btn-outline-white">
                📞 Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <span>D&amp;</span>A Athletics
              </div>
              <p className="footer-desc">
                Defence & Athletics Club — yüksek performans gösterenlerin
                en iyi hallerine ulaştığı yer. İstanbul &amp; Dubai.
              </p>
              <div className="socials">
                {[
                  { href:"https://instagram.com/defenceathletics", icon:"📸", label:"Instagram" },
                  { href:"https://facebook.com/defenceathletics",  icon:"👥", label:"Facebook"  },
                  { href:"https://twitter.com/defenceathlete",     icon:"🐦", label:"Twitter"   },
                  { href:"https://youtube.com/@defenceathletics",  icon:"▶️", label:"YouTube"   },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-col">
              <h5>Programlar</h5>
              <ul className="footer-links">
                {programs.map(p => (
                  <li key={p.title}><a href="#dersler">→ {p.title}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Şubeler</h5>
              <ul className="footer-links">
                {branches.map(b => (
                  <li key={b.name}><a href="#subeler">→ {b.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>İletişim</h5>
              <ul className="footer-links">
                <li><a href="mailto:info@defenceathletics.com">✉ info@defenceathletics.com</a></li>
                <li><a href="tel:+905301000000">📞 +90 530 100 00 00</a></li>
                <li><a href="https://wa.me/905301000000" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a></li>
              </ul>
              <div style={{marginTop:"1.5rem"}}>
                <h5>Çalışma Saatleri</h5>
                <p style={{fontSize:".825rem",color:"var(--text-2)",lineHeight:1.75}}>
                  Pzt – Cum: 07:00 – 22:00<br />
                  Cmts – Paz: 09:00 – 20:00
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Defence &amp; Athletics Club. Tüm Hakları Saklıdır.</p>
            <div className="footer-legal">
              <a href="#">Gizlilik Politikası</a>
              <a href="#">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
