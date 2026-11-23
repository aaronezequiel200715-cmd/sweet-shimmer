export default function ScrollIndicator() {
  return (
    <a href="#collection" aria-label="Ir a la colección" className="absolute bottom-8 right-5 z-30 hidden flex-col items-center gap-3 transition-opacity hover:opacity-100 md:flex md:right-12 lg:right-16 opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-light/70">
      <span className="text-[9px] tracking-[0.3em] text-muted [writing-mode:vertical-rl]">DESLIZA PARA EXPLORAR</span>
      <span className="relative h-12 w-px bg-ink/20"><span className="scroll-line absolute inset-0 bg-amber-light" /></span>
    </a>
  );
}
