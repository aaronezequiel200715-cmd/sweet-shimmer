export type ArtVariant = "studio" | "ring" | "cuff" | "drops";

const Sparkle = ({ x, y, s = 1, d = 0 }: { x: number; y: number; s?: number; d?: number }) => (
  <path className="twinkle" style={{ animationDelay: `${d}s` }} fill="#E6BC7E"
    d={`M${x} ${y - 12 * s}l${2.5 * s} ${9.5 * s} ${9.5 * s} ${2.5 * s}-${9.5 * s} ${2.5 * s}-${2.5 * s} ${9.5 * s}-${2.5 * s}-${9.5 * s}-${9.5 * s}-${2.5 * s} ${9.5 * s}-${2.5 * s}z`} />
);

/** Ilustración en código. Para usar una foto real, sustituye este componente por <Image/> o <img/>. */
export default function Artwork({ variant, className = "" }: { variant: ArtVariant; className?: string }) {
  const studio = variant === "studio";
  return (
    <svg viewBox={studio ? "0 0 400 500" : "0 0 400 300"} preserveAspectRatio="xMidYMid slice" className={`h-full w-full ${className}`} role="img"
      aria-label={studio ? "Anillo sobre un pedestal con luz de ventana" : `${variant} pieza de joyería`}>
      <defs>
        <linearGradient id="aw-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FBEDE6" /><stop offset="1" stopColor="#E9C8C3" /></linearGradient>
        <linearGradient id="aw-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6BC7E" /><stop offset=".55" stopColor="#D4A05A" /><stop offset="1" stopColor="#9A6A3A" /></linearGradient>
        <linearGradient id="aw-steel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#D8B9B0" /><stop offset=".6" stopColor="#CBA8A0" /><stop offset="1" stopColor="#BE9A94" /></linearGradient>
        <linearGradient id="aw-beam" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6BC7E" stopOpacity=".28" /><stop offset="1" stopColor="#E6BC7E" stopOpacity="0" /></linearGradient>
        <radialGradient id="aw-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#D4A05A" stopOpacity=".4" /><stop offset="1" stopColor="#D4A05A" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="400" height={studio ? 500 : 300} fill="url(#aw-bg)" />

      {studio ? (
        <>
          <path d="M80 500V210a120 120 0 0 1 240 0v290z" fill="#F6E6DE" stroke="#7A5558" strokeOpacity=".12" />
          <path d="M230 0H400V400L120 440z" fill="url(#aw-beam)" />
          <ellipse className="pulse-glow" cx="200" cy="300" rx="150" ry="110" fill="url(#aw-glow)" />
          <rect x="130" y="340" width="140" height="160" fill="url(#aw-steel)" />
          <rect x="120" y="326" width="160" height="16" fill="#D8B9B0" />
          <ellipse cx="200" cy="326" rx="80" ry="6" fill="#C9A9A2" opacity=".35" />
          <g className="float"><ellipse cx="200" cy="296" rx="40" ry="30" fill="none" stroke="url(#aw-gold)" strokeWidth="10" /><path d="M200 252l12 14-12 12-12-12z" fill="#E6BC7E" /></g>
          <ellipse cx="200" cy="332" rx="46" ry="5" fill="#E9C8C3" opacity=".55" />
          <Sparkle x={290} y={170} s={1.2} /><Sparkle x={118} y={250} d={1.1} /><Sparkle x={262} y={250} s={.8} d={2} />
        </>
      ) : (
        <>
          <ellipse className="pulse-glow" cx="200" cy="170" rx="150" ry="110" fill="url(#aw-glow)" />
          <rect x="150" y="222" width="100" height="78" fill="url(#aw-steel)" />
          <rect x="142" y="212" width="116" height="12" fill="#D8B9B0" />
          {variant === "ring" && <g className="float"><ellipse cx="200" cy="184" rx="44" ry="30" fill="none" stroke="url(#aw-gold)" strokeWidth="10" /><path d="M200 142l12 14-12 12-12-12z" fill="#E6BC7E" /></g>}
          {variant === "cuff" && <g className="float"><path d="M116 190A84 38 0 1 1 284 190" fill="none" stroke="url(#aw-gold)" strokeWidth="16" strokeLinecap="round" /><path d="M126 184A76 32 0 0 1 274 184" fill="none" stroke="#E6BC7E" strokeWidth="2" opacity=".6" /></g>}
          {variant === "drops" && <g className="float">{[150, 250].map((x, i) => (<g key={x}><path d={`M${x} 0V${60 + i * 14}`} stroke="#C9A9A2" strokeOpacity=".5" /><path d={`M${x} ${60 + i * 14}c-24 32-24 66 0 74 24-8 24-42 0-74z`} fill="url(#aw-gold)" /></g>))}</g>}
          <Sparkle x={300} y={80} /><Sparkle x={100} y={120} s={.8} d={1.3} />
        </>
      )}
    </svg>
  );
}
