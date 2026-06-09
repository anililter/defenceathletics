"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href:"#dersler", label:"Dersler" },
    { href:"#subeler", label:"Şubeler" },
    { href:"#hakkinda",label:"Hakkında" },
    { href:"#yorumlar",label:"Yorumlar" },
  ];

  return (
    <>
      <nav className={`nav ${stuck ? "stuck" : ""}`}>
        <div className="wrap">
          <div className="nav-inner">
            {/* Logo */}
            <a href="/" className="nav-logo">
              <span>D&amp;</span>A&nbsp;
              <span style={{fontSize:".55em",fontStyle:"normal",letterSpacing:".15em",fontWeight:400,color:"var(--text-2)"}}>
                ATHLETICS
              </span>
            </a>

            {/* Desktop links */}
            <ul className="nav-menu">
              {links.map(l => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>

            <a href="#iletisim" className="nav-btn">Ücretsiz Deneme</a>

            {/* Burger */}
            <button className="burger" onClick={() => setOpen(true)} aria-label="Menü">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mob-overlay ${open ? "open" : ""}`}>
        <button className="mob-x" onClick={() => setOpen(false)}>✕</button>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#iletisim" onClick={() => setOpen(false)}
          style={{
            background:"var(--red)",color:"#fff",
            padding:"12px 40px",borderRadius:"10px",fontWeight:800
          }}>
          Ücretsiz Deneme
        </a>
      </div>
    </>
  );
}
