import type { ReactNode } from "react";

/**
 * Etiqueta rectangular de carga o manejo (Cargo Aircraft Only, Rush AOG, Fragile…).
 * Texto en inglés, como se imprime. Ilustrativa, basada en el folleto.
 */
export type CargoTagDesign = {
  lines: string[];
  bg: string;
  fg: string;
  /** Borde interior opcional (color). */
  frame?: string;
  /** Proporción ancho/alto (por defecto 1). */
  ratio?: number;
  symbol?: "arrows" | "glass" | "plane" | "none";
};

export function CargoTag({
  design,
  title,
  className,
}: {
  design: CargoTagDesign;
  title?: string;
  className?: string;
}) {
  const ratio = design.ratio ?? 1;
  const W = 100 * ratio;
  const H = 100;
  const longest = Math.max(...design.lines.map((l) => l.length));
  const fs = Math.min(26, (W * 0.86) / (longest * 0.48), 62 / design.lines.length);
  const symbolSpace = design.symbol && design.symbol !== "none" ? 26 : 0;
  const blockH = design.lines.length * fs * 0.98;
  const startY = (H + symbolSpace - blockH) / 2 + fs * 0.82;

  let symbol: ReactNode = null;
  if (design.symbol === "arrows") {
    symbol = (
      <g fill={design.fg} transform={`translate(${W / 2 - 14} 8)`}>
        <path d="M5 22V9H0l7-9 7 9H9v13Z" />
        <path d="M19 22V9h-5l7-9 7 9h-5v13Z" />
        <rect x="0" y="23.5" width="28" height="2.2" />
      </g>
    );
  } else if (design.symbol === "glass") {
    symbol = (
      <g fill="none" stroke={design.fg} strokeWidth="2.4" transform={`translate(${W / 2 - 8} 7)`}>
        <path d="M1 1h14l-1.5 8a5.5 5.5 0 0 1-11 0Z" />
        <path d="M8 15v7M3 23h10" />
        <path d="M5 4l3 5 3-5" strokeWidth="1.6" />
      </g>
    );
  } else if (design.symbol === "plane") {
    symbol = (
      <g fill={design.fg} transform={`translate(${W / 2 - 12} 6) scale(1.1)`}>
        <path d="M10 0h2l1 8 9 5v2l-9-2-.6 6 3 2v1.6l-4.4-1.2L6.6 22.6V21l3-2L9 13l-9 2v-2l9-5Z" />
      </g>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect x="0.5" y="0.5" width={W - 1} height={H - 1} rx="2" fill={design.bg} stroke="rgb(0 0 0 / .14)" />
      {design.frame && (
        <rect x="5" y="5" width={W - 10} height={H - 10} fill="none" stroke={design.frame} strokeWidth="2.2" />
      )}
      {symbol}
      <g
        fontFamily="var(--font-display), 'Arial Narrow', sans-serif"
        fontWeight={900}
        textAnchor="middle"
        fill={design.fg}
        fontSize={fs}
      >
        {design.lines.map((l, i) => (
          <text key={l + i} x={W / 2} y={startY + i * fs * 0.98}>
            {l}
          </text>
        ))}
      </g>
    </svg>
  );
}

/** Diseños de ejemplo usados en la portada y en las páginas de producto. */
export const tagDesigns = {
  cargoAircraftOnly: { lines: ["CARGO", "AIRCRAFT", "ONLY"], bg: "#F7941D", fg: "#141414", frame: "#141414", symbol: "plane" },
  rushAog: { lines: ["RUSH", "AOG"], bg: "#FFCD00", fg: "#141414", frame: "#141414" },
  fragile: { lines: ["FRAGILE"], bg: "#D52B1E", fg: "#FFFFFF", ratio: 1.5, symbol: "glass" },
  thisSideUp: { lines: ["THIS SIDE", "UP"], bg: "#FFFFFF", fg: "#D52B1E", frame: "#D52B1E", ratio: 0.8, symbol: "arrows" },
  perishable: { lines: ["PERISHABLE"], bg: "#FFFFFF", fg: "#00843D", frame: "#00843D", ratio: 1.33 },
  doNotStack: { lines: ["DO NOT", "STACK"], bg: "#FFFFFF", fg: "#141414", frame: "#D52B1E", ratio: 0.8 },
  keepDry: { lines: ["KEEP", "DRY"], bg: "#FFFFFF", fg: "#1D4F91", frame: "#1D4F91" },
  overpack: { lines: ["OVERPACK"], bg: "#FFFFFF", fg: "#141414", frame: "#141414", ratio: 3 },
  dryIce: { lines: ["DRY ICE", "UN1845"], bg: "#FFFFFF", fg: "#141414", frame: "#141414", ratio: 0.8 },
  liveAnimals: { lines: ["LIVE", "ANIMALS"], bg: "#FFFFFF", fg: "#00843D", frame: "#00843D", ratio: 0.67 },
} satisfies Record<string, CargoTagDesign>;
