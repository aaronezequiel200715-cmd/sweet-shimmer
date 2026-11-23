"use client";
import { useEffect, useState } from "react";
import { storefront as s } from "@/data/storefront";

const ids = ["top", "collection", "about", "journal", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - innerHeight;
      setProgress(h > 0 ? scrollY / h : 0);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", esc);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("keydown", esc); io.disconnect(); };
  }, []);

  const link = (id: string) =>
    `relative text-[13px] transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70 after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-amber-light after:transition-all after:duration-300 ${
      active === id ? "text-ink after:w-full" : "text-ink-soft/70 after:w-0 hover:after:w-full"}`;
  const idOf = (href: string) => href.replace("#", "");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-night-900/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-5 md:px-12 lg:px-16">
        <a href="#top" className="text-sm tracking-[0.28em] text-ink">{s.brand}</a>
        <nav aria-label="Principal" className="hidden gap-10 md:flex">
          {s.nav.map((n) => <a key={n.label} href={n.href} aria-current={active === idOf(n.href) ? "true" : undefined} className={link(idOf(n.href))}>{n.label}</a>)}
        </nav>
        <a href={s.contact.href} className="group hidden items-center gap-2 rounded-[2px] border border-ink/30 px-4 py-2 text-[13px] transition-colors duration-200 hover:border-amber-light/70 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70 md:inline-flex">
          {s.contact.label}<span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
        <button aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70">
          <span className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="mx-5 mb-4 flex flex-col gap-5 border border-ink/20 bg-night-900/95 p-6 md:hidden">
          {[...s.nav, s.contact].map((n) => <a key={n.label} href={n.href} className={link(idOf(n.href))} onClick={() => setOpen(false)}>{n.label}</a>)}
        </div>
      )}
      <div className="h-px origin-left bg-amber-light/70" style={{ transform: `scaleX(${progress})` }} />
    </header>
  );
}
