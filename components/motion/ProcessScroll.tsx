"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useRef, useState, type ReactNode } from "react";

/**
 * Proceso ligado al scroll: arte → plancha → prensa → rollo.
 * En escritorio la ilustración queda fija mientras pasan los pasos y cambia
 * según el avance (solo opacity/transform). En celular cada paso muestra su
 * propia ilustración. Todo el texto viene del servidor.
 */
export function ProcessScroll({ steps, frames }: { steps: [string, string][]; frames: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === i ? prev : i));
  });

  return (
    <div ref={ref} className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className="hidden md:block">
        <div className="sticky top-28">
          <div className="sheet relative aspect-[4/3] overflow-hidden">
            {frames.map((f, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 flex items-center justify-center p-10"
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: reduce ? 0 : active === i ? 0 : active > i ? -24 : 24,
                  scale: reduce ? 1 : active === i ? 1 : 0.96,
                }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 180, damping: 24 }}
                aria-hidden={active !== i}
              >
                {f}
              </motion.div>
            ))}
            <div className="absolute inset-x-6 bottom-5 flex gap-1.5" aria-hidden="true">
              {steps.map((_, i) => (
                <span key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                  <motion.span
                    className="block h-full origin-left bg-[#08703F]"
                    initial={false}
                    animate={{ scaleX: active >= i ? 1 : 0 }}
                    transition={reduce ? { duration: 0 } : { duration: 0.35 }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ol className="grid gap-8 md:gap-0">
        {steps.map(([title, text], i) => (
          <li key={title} className="md:flex md:min-h-[55vh] md:items-center">
            <div
              className={`border-l-4 pl-5 transition-colors duration-300 md:max-w-md ${
                active === i ? "border-brand" : "border-transparent"
              }`}
            >
              <div className="sheet mb-4 flex aspect-[4/3] max-w-sm items-center justify-center p-6 md:hidden">
                {frames[i]}
              </div>
              <p className="data text-brand">0{i + 1}</p>
              <h3 className="mt-1 font-display text-4xl font-extrabold uppercase">{title}</h3>
              <p className="mt-2 text-lg text-ink-2">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
