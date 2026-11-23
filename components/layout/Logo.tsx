/**
 * Marca provisional: rombo verde + nombre en la tipografía de titulares.
 * PENDIENTE: reemplazar el <svg> por el logo oficial de Liji Tech cuando llegue
 * (ver AGENTS.md). El texto "Liji Tech" debe quedar como nombre accesible.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="size-7 shrink-0" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="2" transform="rotate(45 16 16)" fill="var(--brand)" />
        <rect x="9.5" y="9.5" width="13" height="13" rx="1" transform="rotate(45 16 16)" fill="none" stroke="var(--brand-ink)" strokeWidth="1.4" />
      </svg>
      <span className="font-display text-[1.6rem] leading-none font-extrabold tracking-[0.01em]">Liji Tech</span>
    </span>
  );
}
