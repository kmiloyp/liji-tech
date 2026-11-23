/**
 * Rollo de etiquetas ilustrado en SVG (vista 3/4). El color se pasa por prop.
 * Sin IDs internos: se puede repetir en la misma página.
 */
export function ThermalRoll({
  color,
  title,
  className,
}: {
  color: string;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {/* tira que sale del rollo, con etiquetas sobre el respaldo */}
      <path d="M96 150 L210 150 L210 176 L96 176 Z" fill="#EEF1EE" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={104 + i * 36} y="153" width="30" height="20" rx="2.5" fill={color} />
      ))}
      {/* cuerpo del rollo */}
      <path d="M40 30 L130 30 A40 72 0 0 1 130 174 L40 174 Z" fill={color} />
      {/* sombra lateral para volumen */}
      <path d="M130 30 A40 72 0 0 1 130 174 L118 174 A36 72 0 0 0 118 30 Z" fill="rgb(0 0 0 / .1)" />
      {/* cara frontal */}
      <ellipse cx="40" cy="102" rx="40" ry="72" fill={color} />
      <ellipse cx="40" cy="102" rx="40" ry="72" fill="rgb(255 255 255 / .18)" />
      {[60, 48, 36].map((ry, i) => (
        <ellipse
          key={ry}
          cx="40"
          cy="102"
          rx={ry * 0.55}
          ry={ry}
          fill="none"
          stroke="rgb(0 0 0 / .08)"
          strokeWidth={i === 0 ? 1 : 0.8}
        />
      ))}
      {/* core de cartón */}
      <ellipse cx="40" cy="102" rx="15" ry="26" fill="#C9A878" />
      <ellipse cx="40" cy="102" rx="11" ry="21" fill="#8A6A44" />
      <ellipse cx="40" cy="102" rx="40" ry="72" fill="none" stroke="rgb(0 0 0 / .14)" />
    </svg>
  );
}
