"use client";
import { useEffect, useRef } from "react";
import { storefront as s } from "@/data/storefront";
import JewelrySculptureVisual from "./JewelrySculptureVisual";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e: PointerEvent) => {
      el.style.setProperty("--mx", String((e.clientX / innerWidth - 0.5) * 2));
      el.style.setProperty("--my", String((e.clientY / innerHeight - 0.5) * 2));
    };
    const scroll = () => el.style.setProperty("--sy", String(Math.min(scrollY, 900)));
    addEventListener("pointermove", move);
    addEventListener("scroll", scroll, { passive: true });
    return () => { removeEventListener("pointermove", move); removeEventListener("scroll", scroll); };
  }, []);

  const T = (mx: number, my: number, sy: number) =>
    ({ transform: `translate3d(calc(var(--mx,0) * ${mx}px), calc(var(--my,0) * ${my}px + var(--sy,0) * ${sy}px), 0)` });

  return (
    <section id="top" ref={ref} className="relative mx-auto flex min-h-[680px] w-full max-w-[1440px] flex-col px-5 pb-10 pt-20 md:min-h-screen md:px-12 lg:px-16">
      <p className="rise z-30 mt-6 text-[10px] tracking-[0.3em] text-muted md:text-[11px]">{s.eyebrow}</p>

      <h1 aria-label={s.headline} className="layer pointer-events-none absolute inset-x-0 top-[14%] z-10 text-center font-display font-medium leading-[0.95] tracking-[-0.01em] text-ink" style={{ fontSize: "clamp(2.5rem, 11vw, 11rem)", ...T(-14, -8, 0.18) }}>
        {s.headline.split("").map((c, i) => <span key={i} aria-hidden className="letter" style={{ animationDelay: `${150 + i * 70}ms` }}>{c}</span>)}
      </h1>

      <div className="layer pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[62%] md:h-[66%]" style={T(10, 6, -0.06)}><JewelrySculptureVisual /></div>

      <div className="relative z-30 mt-auto flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="layer" style={T(-6, -3, 0.1)}>
          <p className="rise font-display text-6xl italic leading-none text-ink md:text-8xl" style={{ animationDelay: "900ms" }}>{s.script}</p>
          <p className="rise mt-3 font-display text-lg italic text-ink-soft/80" style={{ animationDelay: "1100ms" }}>{s.tagline}</p>
        </div>
        <div className="rise max-w-[280px] md:mr-16" style={{ animationDelay: "1300ms" }}>
          <p className="text-[13px] leading-relaxed text-muted">{s.description}</p>
          <a href={s.cta.href} className="group mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-ink transition-colors duration-200 hover:text-amber-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70">
            {s.cta.label}<span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
