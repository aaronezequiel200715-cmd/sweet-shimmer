/**
 * Visual central (SVG). Para reemplazarlo por fotografía/render real de Sweet Shimmer:
 * exporta un WebP transparente con la misma silueta (pieza central ~38% del ancho,
 * flanqueada por masas oscuras) y sustituye el <svg> por
 * <Image src="/hero.webp" fill className="object-contain object-bottom" alt="..." />.
 */
export default function JewelrySculptureVisual() {
  return (
    <svg viewBox="0 0 1200 560" preserveAspectRatio="xMidYMax slice" className="h-full w-full" role="img" aria-label="Pieza escultórica de joyería con luz cálida">
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#D8B9B0" /><stop offset="1" stopColor="#BE9A94" /></linearGradient>
        <linearGradient id="warm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6BC7E" /><stop offset=".55" stopColor="#D4A05A" /><stop offset="1" stopColor="#9A6A3A" /></linearGradient>
        <radialGradient id="halo" cx=".5" cy=".55" r=".5"><stop offset="0" stopColor="#D4A05A" stopOpacity=".35" /><stop offset="1" stopColor="#D4A05A" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse className="pulse-glow" cx="600" cy="330" rx="380" ry="230" fill="url(#halo)" />
      <path d="M0 560V330c60-40 130-60 190-20 50 30 70 110 90 250z" fill="#E9C8C3" />
      <path d="M1200 560V300c-70-30-140-30-200 20-50 40-60 140-70 240z" fill="#F1D9D2" />
      <g className="float"><path d="M470 560V250l130-110 130 110v310z" fill="url(#steel)" />
      <path d="M600 140l130 110v310H600z" fill="#F1D9D2" opacity=".45" />
      <circle cx="600" cy="300" r="62" fill="none" stroke="url(#warm)" strokeWidth="14" />
      <circle cx="600" cy="300" r="26" fill="url(#warm)" opacity=".9" />
      <rect x="500" y="400" width="48" height="110" fill="url(#warm)" opacity=".85" />
      <rect x="652" y="400" width="48" height="110" fill="url(#warm)" opacity=".55" />
      <path d="M470 250l130-110" stroke="#E6BC7E" strokeWidth="2" opacity=".7" />
      <clipPath id="face"><path d="M470 560V250l130-110 130 110v310z" /></clipPath>
      <g clipPath="url(#face)"><rect className="sweep" x="560" y="140" width="40" height="420" fill="#E6BC7E" opacity="0" transform="skewX(-18)" /></g>
      </g>
      {[[470,250,0],[600,140,.8],[730,250,1.6],[660,300,2.2],[540,330,1.1]].map(([x,y,d],i)=>(
        <path key={i} className="twinkle" style={{animationDelay:`${d}s`}} d={`M${x} ${Number(y)-16}l3 13 13 3-13 3-3 13-3-13-13-3 13-3z`} fill="#E6BC7E" />
      ))}
    </svg>
  );
}
