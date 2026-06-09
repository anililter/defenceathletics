"use client";
import { useEffect, useRef } from "react";

export default function AnimateOnScroll() {
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
