"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";

type Item = { id: string; category: string; node: ReactNode; span?: "wide" | "full" };

/**
 * Catálogo con filtro por tipo y transición de layout.
 * Las tarjetas llegan renderizadas desde el servidor (todas visibles en el HTML).
 */
export function CatalogGrid({
  items,
  filters,
  filterLabel,
}: {
  items: Item[];
  filters: { key: string; label: string }[];
  filterLabel: string;
}) {
  const [active, setActive] = useState("all");
  const reduce = useReducedMotion();
  const visible = items.filter((i) => active === "all" || i.category === active);
  const spring = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 260, damping: 30 };

  return (
    <LayoutGroup>
      <div role="group" aria-label={filterLabel} className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const on = f.key === active;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.key)}
              className={`relative rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${
                on ? "text-brand-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="catalog-filter"
                  className="absolute inset-0 rounded-full bg-brand"
                  transition={spring}
                  aria-hidden="true"
                />
              )}
              <span className="relative">{f.label}</span>
            </button>
          );
        })}
      </div>
      <motion.ul layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((i) => (
            <motion.li
              key={i.id}
              layout
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={spring}
              className={i.span === "wide" ? "sm:col-span-2" : i.span === "full" ? "sm:col-span-2 lg:col-span-4" : undefined}
            >
              {i.node}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
