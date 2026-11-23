import type { Pictogram } from "@/content/catalog";

/**
 * Pictogramas de las clases de riesgo, simplificados a partir del folleto.
 * Coordenadas en el viewBox 100 × 100 del rombo, centrados en la mitad superior.
 */
export function PictogramMark({ kind, color }: { kind: Pictogram; color: string }) {
  switch (kind) {
    case "flame":
      return <Flame color={color} />;
    case "flame-circle":
      return (
        <g fill={color}>
          <circle cx="50" cy="30" r="6" fill="none" stroke={color} strokeWidth="2.6" />
          <path d="M50 11c1.4 3.2 4.6 4.6 4.6 8.6 0 1.6-.6 2.9-1.6 3.8a7.6 7.6 0 0 0-6 0c-1-.9-1.6-2.2-1.6-3.8 0-2.2 1.2-3.4 2.2-4.5 0 1.6.6 2.6 1.6 2.9-.6-2.6 0-5 .8-7Z" />
          <rect x="40" y="38.4" width="20" height="2.4" />
        </g>
      );
    case "cylinder":
      return (
        <g transform="rotate(-24 50 25)" fill={color}>
          <rect x="33" y="21" width="30" height="8.4" rx="4.2" />
          <rect x="62" y="23" width="4.6" height="4.4" rx="0.8" />
          <rect x="66" y="24" width="2.6" height="2.4" />
        </g>
      );
    case "skull":
      return (
        <g fill={color}>
          <path d="M50 13.5c-5.6 0-9.4 3.7-9.4 8.6 0 2.9 1.4 5 3.6 6.3v3.3h11.6v-3.3c2.2-1.3 3.6-3.4 3.6-6.3 0-4.9-3.8-8.6-9.4-8.6Z" />
          <circle cx="46.2" cy="22.2" r="2.4" fill="var(--diamond-bg, #fff)" />
          <circle cx="53.8" cy="22.2" r="2.4" fill="var(--diamond-bg, #fff)" />
          <path d="M50 25.4l-1.3 2.5h2.6Z" fill="var(--diamond-bg, #fff)" />
          <path d="M37.5 33.5l25 6.5M62.5 33.5l-25 6.5" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
        </g>
      );
    case "corrosion":
      return (
        <g fill={color} stroke={color}>
          {/* dos tubos que vierten sobre una barra y una mano */}
          <path d="M33.5 12.5l8 7.5" strokeWidth="3.4" strokeLinecap="round" fill="none" />
          <path d="M66.5 12.5l-8 7.5" strokeWidth="3.4" strokeLinecap="round" fill="none" />
          <circle cx="43" cy="24" r="1.2" stroke="none" />
          <circle cx="42" cy="28" r="1.2" stroke="none" />
          <circle cx="57" cy="24" r="1.2" stroke="none" />
          <circle cx="58" cy="28" r="1.2" stroke="none" />
          <rect x="34" y="32" width="14" height="4.2" stroke="none" />
          <path d="M52 36.2h12.5c1.6 0 2.4-1 2.4-2.2s-.8-2-2.4-2H52Z" stroke="none" />
          <path d="M38 31.5l2-2.5 2 2.5M56 31.5l2-2.5 2 2.5" strokeWidth="1.2" fill="none" />
        </g>
      );
    case "none":
      return null;
  }
}

function Flame({ color }: { color: string }) {
  return (
    <g fill={color}>
      <path d="M50 10.5c1.6 4.3 6.6 6.6 6.6 12.4 0 4.6-3 7.8-6.6 7.8s-6.6-3.2-6.6-7.8c0-3 1.6-4.8 3-6.3 0 2.3.9 3.8 2.3 4.2-.8-3.6.1-7.4 1.3-10.3Z" />
      <path
        d="M50 22.8c.7 1.8 2.6 2.8 2.6 5.1a2.6 2.6 0 0 1-5.2 0c0-1.1.5-1.9 1.1-2.5 0 .8.4 1.4.9 1.5-.2-1.4.1-2.9.6-4.1Z"
        fill="var(--diamond-bg, #fff)"
      />
      <rect x="40" y="33" width="20" height="2.4" />
    </g>
  );
}
