"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Lazy } from "./Lazy";

/**
 * Cinta de rollo: una tira continua de etiquetas que avanza en horizontal
 * con el scroll de la página (no secuestra el scroll). Los elementos llegan
 * renderizados desde el servidor; aquí solo se mueve el contenedor (transform).
 * Con movimiento reducido, la tira queda quieta y se puede desplazar a mano.
 */
function RollStripInner({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-46%"]);

  return (
    <div
      ref={ref}
      role="region"
      aria-label={label}
      className={`relative ${reduce ? "overflow-x-auto" : "overflow-hidden"}`}
      tabIndex={reduce ? 0 : undefined}
    >
      <m.div style={reduce ? undefined : { x }} className="flex w-max will-change-transform">
        {children}
      </m.div>
    </div>
  );
}

/** Envoltura con carga diferida de Motion. */
export function RollStrip(props: Parameters<typeof RollStripInner>[0]) {
  return (
    <Lazy>
      <RollStripInner {...props} />
    </Lazy>
  );
}
