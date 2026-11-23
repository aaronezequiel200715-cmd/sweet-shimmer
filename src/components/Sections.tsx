"use client";
import { useState } from "react";
import { products, categories, journal, values, aboutImage } from "@/data/storefront";
import Artwork from "./Artwork";
import Reveal from "./Reveal";

const wrap = "mx-auto w-full max-w-[1440px] px-5 py-24 md:px-12 lg:px-16";
const h2 = "font-display text-4xl md:text-6xl";
const ring = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex w-48 items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-light/60" />
      <span className="twinkle h-2 w-2 rotate-45 bg-amber-light" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-light/60" />
    </div>
  );
}

function Deco() {
  const spark = (x: number, y: number, d: number, s = 1) => (
    <path key={`${x}${y}`} className="twinkle" style={{ animationDelay: `${d}s` }} fill="#E6BC7E" d={`M${x} ${y - 14 * s}l${3 * s} ${11 * s} ${11 * s} ${3 * s}-${11 * s} ${3 * s}-${3 * s} ${11 * s}-${3 * s}-${11 * s}-${11 * s}-${3 * s} ${11 * s}-${3 * s}z`} />
  );
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber-glow/20 blur-3xl" />
      <svg viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 h-full w-full">
        <defs><linearGradient id="jr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E6BC7E" /><stop offset="1" stopColor="#B76E79" /></linearGradient></defs>
        <g className="float" opacity=".4"><circle cx="1010" cy="170" r="90" fill="none" stroke="url(#jr)" strokeWidth="2" /><circle cx="1010" cy="170" r="62" fill="none" stroke="url(#jr)" strokeWidth="1" /></g>
        <g className="float" style={{ animationDelay: "2s" }} opacity=".3"><circle cx="1120" cy="470" r="46" fill="none" stroke="url(#jr)" strokeWidth="2" /></g>
        <path d="M0 560C300 500 500 600 800 520S1100 560 1200 520" fill="none" stroke="#B76E79" strokeOpacity=".25" />
        {spark(900, 90, 0, 1.2)}{spark(1150, 300, 1.2)}{spark(780, 430, 2.1, 0.8)}{spark(140, 140, 0.6, 0.9)}{spark(90, 420, 1.7)}
      </svg>
    </div>
  );
}

export default function Sections() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Todos");
  const [pick, setPick] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [saved, setSaved] = useState<string[]>([]);
  const shown = products.filter((p) => cat === "Todos" || p.cat === cat);
  const toggleSave = (n: string) => setSaved((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]));
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")}`;
    window.location.href = `mailto:hello@sweetshimmer.com?subject=${encodeURIComponent(String(f.get("subject")))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <section id="collection" className={wrap}>
        <Reveal>
          <h2 className={h2}>Colección</h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">Piezas de la serie actual, hechas para acompañarte todos los días.</p>
        </Reveal>
        <div className="mt-10 flex flex-wrap items-center gap-3" role="group" aria-label="Filtrar por categoría">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`border px-4 py-2 text-[12px] tracking-[0.15em] transition-colors ${cat === c ? "border-amber-light bg-amber-light text-night-800" : "border-ink/25 text-ink-soft hover:border-amber-light hover:text-amber-light"} ${ring}`}>{c}</button>
          ))}
          <span className="ml-auto text-[12px] text-muted" role="status">{shown.length} piezas</span>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {shown.map((p, i) => (
            <Reveal key={p.img} delay={(i % 4) * 90}>
              <article className="group h-full border border-ink/10 bg-night-700/40 p-3 transition-all duration-500 hover:-translate-y-2 hover:border-amber-light/50 hover:shadow-[0_20px_50px_-20px_rgba(183,110,121,.45)] md:p-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-night-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${p.img}`} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span aria-hidden className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-[420%]" />
                  <span className="absolute left-2 top-2 bg-night-800/80 px-2 py-1 text-[9px] tracking-[0.2em] text-ink-soft backdrop-blur-sm">{p.cat.toUpperCase()}</span>
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl">{p.name}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-muted md:text-[13px]">{p.desc}</p>
                <div className="mt-4 flex items-center gap-2 border-t border-ink/10 pt-3">
                  <a href="#contact" onClick={() => setPick(p.name)} className={`border border-ink/30 px-3 py-2 text-[11px] transition-colors hover:border-amber-light hover:text-amber-light ${ring}`}>Consultar</a>
                  <button onClick={() => toggleSave(p.name)} aria-pressed={saved.includes(p.name)} className={`px-2 py-2 text-[11px] transition-colors ${saved.includes(p.name) ? "text-amber-light" : "text-muted hover:text-ink"} ${ring}`}>
                    {saved.includes(p.name) ? "Guardada ✓" : "Guardar"}
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        {saved.length > 0 && <p className="mt-6 text-[13px] text-muted" role="status">Guardadas: {saved.join(", ")}</p>}
      </section>

      <section id="about" className={wrap}>
        <Reveal><h2 className={h2}>Acerca de</h2><Ornament className="mt-6" /></Reveal>
        <div className="mt-12 grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal delay={150}><p className="max-w-xl font-display text-xl leading-relaxed text-ink-soft md:text-2xl">Sweet Shimmer crea joyería contemporánea en series pequeñas. Cada pieza se elige y se acaba con cuidado, para llevarla todos los días.</p></Reveal>
            <ul className="mt-10 grid gap-4">
              {values.map((v, i) => (
                <Reveal key={v} delay={250 + i * 100}>
                  <li className="flex items-center gap-4 text-[14px] text-ink-soft"><span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-amber-light" />{v}</li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={250}>
            <figure className="relative mx-auto w-full max-w-sm">
              <div aria-hidden className="pointer-events-none absolute -inset-3 translate-x-2 translate-y-2 border border-amber-light/40" />
              <div className="group relative aspect-[4/5] overflow-hidden border border-ink/15">
                {aboutImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={aboutImage} alt="Collares con inicial sobre una bandeja de resina" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                ) : (
                  <div className="h-full w-full"><Artwork variant="studio" /></div>
                )}
              </div>
              <figcaption className="mt-5 font-display text-sm italic text-muted">Iniciales en oro sobre una bandeja de resina.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="journal" className="relative overflow-hidden">
        <Deco />
        <div className={`${wrap} relative`}>
          <Reveal><h2 className={h2}>Diario</h2><Ornament className="mt-6" /></Reveal>
          <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {journal.map((j, i) => (
              <Reveal key={j.title} delay={i * 100}>
                <li><a href="#journal" className={`group grid gap-2 py-7 transition-colors hover:text-amber-light md:grid-cols-[1fr_auto] md:items-center ${ring}`}>
                  <div>
                    <span className="block font-display text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">{j.title}</span>
                    <span className="mt-2 block max-w-xl text-[13px] leading-relaxed text-muted">{j.excerpt}</span>
                  </div>
                  <span className="flex items-center gap-4 text-[12px] text-muted">{j.tag} · {j.read}<span aria-hidden className="text-amber-light transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                </a></li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className={`${wrap} text-center`}>
        <Reveal>
          <h2 className={h2}>Contacto</h2><Ornament className="mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-md text-[14px] leading-relaxed text-muted">¿Dudas sobre una pieza, tallas o un pedido? Escríbenos y te responderemos en un máximo de dos días.</p>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="mx-auto mt-10 grid w-full max-w-xl gap-5 border border-ink/10 bg-night-700/50 p-6 text-left md:p-10">
            {[["name", "Nombre"], ["subject", "Asunto"]].map(([n, l]) => (
              <label key={n} className="grid gap-2 text-[12px] text-muted">{l}
                <input required name={n} defaultValue={n === "subject" && pick ? `Consulta: ${pick}` : undefined} key={n === "subject" ? pick ?? "x" : n} className={`border-b border-ink/30 bg-transparent py-2 text-[15px] text-ink transition-colors focus:border-amber-light ${ring}`} />
              </label>
            ))}
            <label className="grid gap-2 text-[12px] text-muted">Mensaje
              <textarea required name="message" rows={4} className={`border border-ink/30 bg-transparent p-3 text-[15px] text-ink transition-colors focus:border-amber-light ${ring}`} />
            </label>
            <button className={`group w-fit justify-self-center border border-ink/40 px-6 py-3 text-[12px] tracking-[0.25em] transition-colors hover:border-amber-light hover:bg-amber-light hover:text-night-800 ${ring}`}>ENVIAR <span className="inline-block transition-transform group-hover:translate-x-1">→</span></button>
            {sent && <p role="status" className="text-center text-[13px] text-amber-light">Se abrirá tu aplicación de correo. ¡Gracias!</p>}
          </form>
          <p className="mt-8 text-[13px] text-muted">O escríbenos directamente a <a href="mailto:hello@sweetshimmer.com" className={`text-ink-soft underline-offset-4 transition-colors hover:text-amber-light hover:underline ${ring}`}>hello@sweetshimmer.com</a></p>
        </Reveal>
      </section>
      <footer className="border-t border-ink/10 px-5 py-8 text-center text-[11px] tracking-[0.25em] text-muted">© 2026 SWEET SHIMMER</footer>
    </>
  );
}
