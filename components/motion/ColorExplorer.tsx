"use client";

import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { useState } from "react";
import type { ThermalColor } from "@/content/catalog";
import { ThermalRoll } from "../labels/ThermalRoll";
import { Lazy } from "./Lazy";

/**
 * Explorador de colores térmicos: al elegir un color, el rollo ilustrado
 * cambia de color y muestra su código. Los 34 colores están en el HTML
 * como botones con su código y referencia.
 */
function ColorExplorerInner({
  groups,
  labels,
}: {
  groups: { title: string; colors: ThermalColor[] }[];
  labels: { code: string; ref: string; aria: string; rollAlt: string };
}) {
  const [sel, setSel] = useState<ThermalColor>(groups[0].colors[0]);
  const reduce = useReducedMotion();

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div className="sheet top-28 grid place-items-center gap-4 p-8 lg:sticky">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.div
            key={sel.code}
            initial={reduce ? false : { opacity: 0, rotate: -6, y: 10 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, rotate: 6, y: -10 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            className="w-full max-w-xs"
          >
            <ThermalRoll color={sel.hexAprox} title={labels.rollAlt.replace("{code}", sel.code)} className="w-full" />
          </m.div>
        </AnimatePresence>
        <dl className="data grid w-full max-w-xs grid-cols-2 gap-2 text-label-ink" aria-live="polite">
          <div className="rounded border border-black/10 px-3 py-2">
            <dt className="text-[0.68rem] uppercase opacity-60">{labels.code}</dt>
            <dd className="text-base font-semibold">{sel.code}</dd>
          </div>
          <div className="rounded border border-black/10 px-3 py-2">
            <dt className="text-[0.68rem] uppercase opacity-60">{labels.ref}</dt>
            <dd className="text-base font-semibold">{sel.ref}</dd>
          </div>
        </dl>
      </div>
      <div role="group" aria-label={labels.aria} className="grid gap-8">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="kicker mb-3">
              {g.title} · {g.colors.length}
            </h3>
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-6">
              {g.colors.map((c) => {
                const on = c.code === sel.code;
                return (
                  <li key={c.code}>
                    <button
                      type="button"
                      aria-pressed={on}
                      onClick={() => setSel(c)}
                      className={`group w-full rounded-md border p-1.5 text-left transition-transform duration-150 hover:-translate-y-0.5 ${
                        on ? "border-ink ring-2 ring-ink" : "border-rule"
                      }`}
                    >
                      <span
                        className="block aspect-square w-full rounded shadow-[inset_0_0_0_1px_rgb(0_0_0/0.08)]"
                        style={{ background: c.hexAprox }}
                      />
                      <span className="data mt-1 block text-[0.72rem] font-semibold">{c.code}</span>
                      <span className="data block text-[0.66rem] text-ink-2">{c.ref}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Envoltura con carga diferida de Motion. */
export function ColorExplorer(props: Parameters<typeof ColorExplorerInner>[0]) {
  return (
    <Lazy>
      <ColorExplorerInner {...props} />
    </Lazy>
  );
}
