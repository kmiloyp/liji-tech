/**
 * Marca de baterías de litio (rectángulo con borde rayado rojo), simplificada
 * a partir del folleto (02-etiquetas-varias.jpg). Texto en inglés.
 */
export function LithiumMark({
  un,
  title,
  className,
}: {
  un: string;
  title?: string;
  className?: string;
}) {
  const RED = "#D52B1E";
  const INK = "#141414";
  // Rayado diagonal del borde: un patrón dibujado como líneas recortadas por el marco.
  const hatch = Array.from({ length: 34 }, (_, i) => {
    const x = -20 + i * 6;
    return <line key={i} x1={x} y1="0" x2={x + 20} y2="20" />;
  });
  return (
    <svg
      viewBox="0 0 120 133"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <rect x="0.5" y="0.5" width="119" height="132" rx="2" fill="#fff" stroke="rgb(0 0 0 / .15)" />
      {/* marco rayado: cuatro bandas */}
      <g stroke={RED} strokeWidth="2.6">
        <svg x="3" y="3" width="114" height="7" viewBox="0 0 114 7" overflow="hidden">
          <g transform="scale(1 .35)">{hatch}</g>
        </svg>
        <svg x="3" y="123" width="114" height="7" viewBox="0 0 114 7" overflow="hidden">
          <g transform="scale(1 .35)">{hatch}</g>
        </svg>
        <svg x="3" y="3" width="7" height="127" viewBox="0 0 7 127" overflow="hidden">
          <g transform="rotate(90 3.5 3.5) scale(1 .35)">{hatch}</g>
        </svg>
        <svg x="110" y="3" width="7" height="127" viewBox="0 0 7 127" overflow="hidden">
          <g transform="rotate(90 3.5 3.5) scale(1 .35)">{hatch}</g>
        </svg>
      </g>
      <rect x="10.5" y="10.5" width="99" height="112" fill="none" stroke={RED} strokeWidth="1" />
      {/* baterías */}
      <g fill={INK}>
        <rect x="28" y="30" width="30" height="17" rx="2" />
        <rect x="58" y="35" width="3" height="7" />
        <rect x="64" y="30" width="22" height="17" rx="2" />
        <rect x="86" y="35" width="3" height="7" />
        <path d="M44 22c1.2 3 4.4 4.2 4.4 8 0 2-1.4 3.4-3.4 3.4h-2c-2 0-3.4-1.4-3.4-3.4 0-2 1-3 2-4 0 1.4.6 2.2 1.4 2.4-.4-2.4 0-4.6 1-6.4Z" />
      </g>
      <text
        x="60"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Arial Narrow', sans-serif"
        fontWeight={800}
        fontSize="20"
        fill={INK}
      >
        {un}
      </text>
      <g fill="none" stroke={INK} strokeWidth="1">
        <line x1="24" y1="96" x2="96" y2="96" />
      </g>
      <text x="24" y="92" fontFamily="var(--font-mono), monospace" fontSize="6" fill={INK}>
        Tel.
      </text>
    </svg>
  );
}
