"use client";

import { LazyMotion } from "motion/react";
import type { ReactNode } from "react";

const loadFeatures = () => import("./features").then((r) => r.default);

/**
 * Carga diferida de Motion: los componentes usan `m.*` (liviano) y las
 * funciones de animación llegan en un archivo aparte, sin bloquear la carga.
 */
export function Lazy({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
