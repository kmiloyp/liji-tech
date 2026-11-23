"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import type { Strings } from "@/content/strings";
import { ChatIcon } from "../conversion/icons";

type PageLink = { id: string; name: string; href: string };

/**
 * Buscador de etiquetas: tres preguntas (qué envía, por qué vía, qué impresora)
 * que terminan en una lista para empezar y un WhatsApp con el mensaje armado.
 * Es orientativo: no clasifica la mercancía.
 */
export function LabelFinder({
  s,
  who,
  whoProducts,
  pages,
  whatsapp,
}: {
  s: Strings["finder"];
  who: [string, string][];
  whoProducts: string[][];
  pages: Record<string, PageLink>;
  whatsapp: string;
}) {
  const uid = useId();
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const touched = useRef(false);

  useEffect(() => {
    if (touched.current) headingRef.current?.focus();
  }, [step]);

  function choose(i: number) {
    touched.current = true;
    const next = [...answers.slice(0, step), i];
    setAnswers(next);
    setStep(step + 1);
  }
  function back() {
    touched.current = true;
    setStep(Math.max(0, step - 1));
  }
  function restart() {
    touched.current = true;
    setAnswers([]);
    setStep(0);
  }

  const questions = [
    { q: s.q1, options: who.map((w) => w[0]) },
    { q: s.q2, options: s.via },
    { q: s.q3, options: s.printers },
  ];

  let result: { labels: string; links: PageLink[]; href: string } | null = null;
  if (step === 3) {
    const [w, via, printer] = answers;
    const ids = new Set(whoProducts[w]);
    if (via === 0) ids.add("air-cargo-labels");
    if (printer === 0) ids.add("thermal-labels");
    if (printer === 1) {
      ids.add("thermal-labels");
      ids.add("thermal-transfer-ribbons");
    }
    const links = [...ids].map((id) => pages[id]).filter(Boolean);
    const message = [
      s.waHi,
      `${s.waShip}: ${who[w][0]}`,
      `${s.waVia}: ${s.via[via]}`,
      `${s.waPrinter}: ${s.printers[printer]}`,
      `${s.waLabels}: ${who[w][1]}`,
    ].join("\n");
    result = {
      labels: who[w][1],
      links,
      href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
    };
  }

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 24 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -24 },
        transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <div className="relative">
      {/* progreso: tres etiquetas que se "pegan" */}
      <ol className="mb-6 flex gap-2" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <li key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-liner-2">
            <motion.span
              className="block h-full origin-left rounded-full bg-brand"
              initial={false}
              animate={{ scaleX: step > i ? 1 : 0 }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 26 }}
            />
          </li>
        ))}
      </ol>

      <AnimatePresence mode="wait" initial={false}>
        {result ? (
          <motion.div key="result" {...anim}>
            <h3 ref={headingRef} tabIndex={-1} className="font-display text-3xl font-extrabold uppercase outline-none">
              {s.resultH}
            </h3>
            <p className="mt-3 text-lg font-medium">{result.labels}</p>
            <p className="mt-2 text-sm text-ink-2">{s.resultNote}</p>
            {result.links.length > 0 && (
              <>
                <p className="kicker mt-5">{s.alsoSee}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {result.links.map((l) => (
                    <li key={l.id}>
                      <a
                        href={l.href}
                        className="inline-block rounded-full border border-rule px-3 py-1.5 text-sm font-semibold hover:border-brand hover:text-brand"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={result.href}
                target="_blank"
                rel="noopener"
                className="btn btn-wa"
                data-track="whatsapp"
                data-track-location="label-finder"
              >
                <ChatIcon />
                {s.send}
              </a>
              <button type="button" onClick={restart} className="link">
                {s.restart}
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.fieldset key={step} {...anim} className="min-w-0">
            <legend className="contents">
              <span className="kicker block">{s.stepOf.replace("{n}", String(step + 1))}</span>
              <h3
                ref={headingRef}
                tabIndex={-1}
                id={`${uid}-q`}
                className="mt-1 font-display text-3xl font-extrabold uppercase outline-none"
              >
                {questions[step].q}
              </h3>
            </legend>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {questions[step].options.map((o, i) => {
                const picked = answers[step] === i;
                return (
                  <button
                    key={o}
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={picked}
                    className={`rounded border px-4 py-3 text-left font-semibold transition-[transform,border-color,background-color] duration-150 hover:-translate-y-px hover:border-brand active:translate-y-0 ${
                      picked ? "border-brand bg-brand-tint" : "border-rule bg-paper"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {step > 0 && (
              <button type="button" onClick={back} className="link mt-4">
                {s.back}
              </button>
            )}
          </motion.fieldset>
        )}
      </AnimatePresence>
    </div>
  );
}
