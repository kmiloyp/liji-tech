import type { CSSProperties } from "react";
import type { DiamondStyle, HazardClass } from "@/content/catalog";
import { PictogramMark } from "./pictograms";

/**
 * Rombo de clase de riesgo dibujado en SVG, a partir de content/catalog (styleKey).
 * Colores estándar aproximados. El texto va en inglés, como se imprime.
 * Componente de servidor: sin JavaScript en el cliente.
 */

const RED = "#D52B1E";
const GREEN = "#00843D";
const YELLOW = "#FFCD00";
const BLACK = "#1A1A1A";
const WHITE = "#FFFFFF";

// Rombo exterior en un viewBox 0..100
const R = 48.5;
const OUTER = "50,1.5 98.5,50 50,98.5 1.5,50";
const INNER = "50,6.5 93.5,50 50,93.5 6.5,50";

/** Media altura del rombo en x. */
const h = (x: number) => Math.max(0, R - Math.abs(x - 50));

/** Franja vertical [a, b] recortada al rombo; si halfTop, solo la mitad superior. */
function stripe(a: number, b: number, halfTop = false) {
  const pts: [number, number][] = [];
  const xs = a < 50 && b > 50 ? [a, 50, b] : [a, b];
  for (const x of xs) pts.push([x, 50 - h(x)]);
  for (const x of [...xs].reverse()) pts.push([x, halfTop ? 50 : 50 + h(x)]);
  return pts.map((p) => p.map((n) => n.toFixed(2)).join(",")).join(" ");
}

const TOP_HALF = "50,1.5 98.5,50 1.5,50";
const BOTTOM_HALF = "1.5,50 98.5,50 50,98.5";

function Background({ style }: { style: DiamondStyle }) {
  switch (style) {
    case "dm-red":
      return <polygon points={OUTER} fill={RED} />;
    case "dm-green":
      return <polygon points={OUTER} fill={GREEN} />;
    case "dm-yellow":
      return <polygon points={OUTER} fill={YELLOW} />;
    case "white":
      return <polygon points={OUTER} fill={WHITE} />;
    case "dm-stripe":
      return (
        <>
          <polygon points={OUTER} fill={WHITE} />
          {Array.from({ length: 7 }, (_, i) => {
            const a = 6.2 + i * 12.6;
            return <polygon key={i} points={stripe(a, a + 6.3)} fill={RED} />;
          })}
        </>
      );
    case "dm-ry":
      return (
        <>
          <polygon points={TOP_HALF} fill={RED} />
          <polygon points={BOTTOM_HALF} fill={YELLOW} />
        </>
      );
    case "dm-wr":
      return (
        <>
          <polygon points={TOP_HALF} fill={WHITE} />
          <polygon points={BOTTOM_HALF} fill={RED} />
        </>
      );
    case "dm-wb":
      return (
        <>
          <polygon points={TOP_HALF} fill={WHITE} />
          <polygon points={BOTTOM_HALF} fill={BLACK} />
        </>
      );
    case "dm-nine":
      return (
        <>
          <polygon points={OUTER} fill={WHITE} />
          {Array.from({ length: 7 }, (_, i) => {
            const a = 26 + i * 7.2;
            return <polygon key={i} points={stripe(a, a + 3.6, true)} fill={BLACK} />;
          })}
        </>
      );
  }
}

/** Color de fondo bajo el pictograma (para "recortar" ojos de la calavera, etc.). */
const topBg: Record<DiamondStyle, string> = {
  "dm-red": RED,
  "dm-green": GREEN,
  "dm-yellow": YELLOW,
  white: WHITE,
  "dm-stripe": WHITE,
  "dm-ry": RED,
  "dm-wr": WHITE,
  "dm-wb": WHITE,
  "dm-nine": WHITE,
};

const solid = (s: DiamondStyle) => s === "dm-red" || s === "dm-green";

export type DiamondProps = {
  hazard: Pick<HazardClass, "style" | "number" | "printed" | "pictogram" | "ink">;
  /** Texto accesible. Si se omite, el SVG es decorativo (aria-hidden). */
  title?: string;
  className?: string;
  style?: CSSProperties;
  /** Sombra dibujada dentro del SVG (más barata que un filtro CSS drop-shadow). */
  shadow?: boolean;
};

export function Diamond({ hazard, title, className, style, shadow }: DiamondProps) {
  const ink = hazard.ink === "white" ? WHITE : BLACK;
  const borderInk = solid(hazard.style) ? WHITE : BLACK;
  const numberInk = hazard.style === "dm-wb" || solid(hazard.style) ? WHITE : BLACK;
  // En dm-wr y dm-ry el texto cruza la mitad: va en negro.
  const textInk = hazard.style === "dm-ry" || hazard.style === "dm-wr" ? BLACK : ink;
  const lines = hazard.printed;
  const longest = Math.max(0, ...lines.map((l) => l.length));
  const fontSize = longest > 12 ? 7.2 : longest > 9 ? 8.4 : 9.6;
  const firstY = lines.length > 1 ? 54 : 59;
  // Fondo "de papel" sobre franjas, para que el texto se lea.
  const textOnStripes = hazard.style === "dm-stripe";

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ ["--diamond-bg" as string]: topBg[hazard.style], ...style }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      overflow="visible"
    >
      {shadow && <polygon points={OUTER} transform="translate(0 3.5)" fill="rgb(6 40 24 / 0.14)" />}
      <Background style={hazard.style} />
      <polygon points={INNER} fill="none" stroke={borderInk} strokeWidth="1.1" />
      <PictogramMark kind={hazard.pictogram} color={ink} />
      {lines.length > 0 && (
        <g
          fontFamily="var(--font-display), 'Arial Narrow', sans-serif"
          fontWeight={800}
          textAnchor="middle"
          fill={textInk}
          fontSize={fontSize}
          letterSpacing="0.01em"
          paintOrder={textOnStripes ? "stroke" : undefined}
          stroke={textOnStripes ? WHITE : undefined}
          strokeWidth={textOnStripes ? 2.4 : undefined}
          strokeLinejoin="round"
        >
          {lines.map((l, i) => (
            <text key={l} x="50" y={firstY + i * (fontSize + 0.6)}>
              {l}
            </text>
          ))}
        </g>
      )}
      <text
        x="50"
        y="89"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Arial Narrow', sans-serif"
        fontWeight={800}
        fontSize="11"
        fill={numberInk}
      >
        {hazard.number}
      </text>
      {hazard.style === "dm-nine" && <rect x="46" y="91" width="8" height="1.3" fill={BLACK} />}
      <polygon points={OUTER} fill="none" stroke="rgb(0 0 0 / 0.16)" strokeWidth="0.6" />
    </svg>
  );
}
