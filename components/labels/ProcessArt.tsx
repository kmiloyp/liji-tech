import { ThermalRoll } from "./ThermalRoll";

/**
 * Ilustraciones del proceso flexográfico: arte → plancha → prensa → rollo.
 * Esquemáticas, no representan la planta real (las fotos reales van en /factory cuando lleguen).
 */
export function ProcessArt({ step, className }: { step: number; className?: string }) {
  const INK = "#141414";
  const GREEN = "#08703F";
  switch (step) {
    case 0: // Arte
      return (
        <svg viewBox="0 0 240 180" className={className} aria-hidden="true" focusable="false">
          <rect x="30" y="20" width="180" height="140" rx="4" fill="#fff" stroke="rgb(0 0 0 / .12)" />
          {/* marcas de corte */}
          <g stroke={INK} strokeWidth="1">
            <path d="M58 40h-12M66 32v-12M182 40h12M174 32v-12M58 140h-12M66 148v12M182 140h12M174 148v12" />
          </g>
          <rect x="66" y="40" width="108" height="100" rx="6" fill="none" stroke={GREEN} strokeDasharray="4 3" />
          <rect x="80" y="54" width="80" height="22" rx="2" fill={GREEN} />
          <rect x="80" y="84" width="58" height="7" rx="1" fill={INK} />
          <rect x="80" y="97" width="70" height="7" rx="1" fill={INK} opacity=".6" />
          <rect x="80" y="112" width="34" height="16" rx="2" fill="#FFC72C" />
          <circle cx="146" cy="120" r="9" fill="#DA291C" />
        </svg>
      );
    case 1: // Plancha
      return (
        <svg viewBox="0 0 240 180" className={className} aria-hidden="true" focusable="false">
          <ellipse cx="120" cy="150" rx="96" ry="10" fill="rgb(0 0 0 / .08)" />
          <g transform="skewX(-18) translate(40 0)">
            <rect x="40" y="40" width="150" height="100" rx="3" fill="#5F7F8C" />
            {/* relieve en espejo del arte */}
            <rect x="80" y="56" width="80" height="22" rx="2" fill="#86A7B3" />
            <rect x="102" y="86" width="58" height="7" rx="1" fill="#86A7B3" />
            <rect x="90" y="99" width="70" height="7" rx="1" fill="#86A7B3" />
            <rect x="126" y="114" width="34" height="16" rx="2" fill="#86A7B3" />
            <circle cx="94" cy="122" r="9" fill="#86A7B3" />
          </g>
        </svg>
      );
    case 2: // Prensa
      return (
        <svg viewBox="0 0 240 180" className={className} aria-hidden="true" focusable="false">
          {/* banda de papel */}
          <path d="M0 104 L240 104 L240 116 L0 116 Z" fill="#fff" stroke="rgb(0 0 0 / .1)" />
          {[150, 182, 214].map((x) => (
            <rect key={x} x={x} y="106" width="22" height="8" rx="1" fill={GREEN} />
          ))}
          {/* cilindro anilox, cilindro porta plancha y cilindro de impresión */}
          <circle cx="78" cy="48" r="20" fill="#9AA5A0" />
          <circle cx="78" cy="48" r="20" fill="none" stroke={INK} strokeOpacity=".2" strokeDasharray="2 2" />
          <circle cx="110" cy="80" r="24" fill="#5F7F8C" />
          <circle cx="110" cy="80" r="6" fill="#30444C" />
          <circle cx="110" cy="142" r="26" fill="#C9D1CC" />
          <circle cx="110" cy="142" r="6" fill="#8A958F" />
          {/* bandeja de tinta */}
          <path d="M44 30 h30 v10 h-30 Z" fill={GREEN} opacity=".85" />
          <path d="M20 104 l14 -6 v18 l-14 -6" fill="rgb(0 0 0 / .12)" />
        </svg>
      );
    default: // Rollo
      return (
        <div className={className}>
          <ThermalRoll color={GREEN} className="h-full w-full" />
        </div>
      );
  }
}
