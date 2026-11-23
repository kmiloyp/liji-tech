/**
 * Registro de guías. Cada guía tiene un archivo MDX por idioma en
 * content/guides/en y content/guides/es, con el mismo nombre que el id.
 * Título, H1, descripción y slug se editan aquí.
 */
import type { Lang } from "../catalog";

export type GuideCopy = {
  slug: string;
  /** <title> sin la marca. */
  title: string;
  h1: string;
  description: string;
  /** Resumen de una frase para tarjetas y llms.txt. */
  summary: string;
};

export type Guide = {
  id: string;
  /** Fecha de publicación y última revisión (AAAA-MM-DD). */
  published: string;
  updated: string;
  related: string[];
  en: GuideCopy;
  es: GuideCopy;
};

export const guides: Guide[] = [
  {
    id: "un3480-vs-un3481",
    published: "2026-11-23",
    updated: "2026-11-23",
    related: ["lithium-battery-labels", "hazard-class-labels", "air-cargo-labels"],
    en: {
      slug: "un3480-vs-un3481",
      title: "UN3480 vs UN3481: Which Lithium Battery Mark?",
      h1: "UN3480 vs UN3481: which lithium battery mark do you need",
      description:
        "UN3480 is for lithium ion batteries shipped alone, UN3481 for batteries in or with equipment. Plus UN3090 and UN3091 for lithium metal, in plain words.",
      summary: "The difference between the four lithium battery marks, in plain words.",
    },
    es: {
      slug: "un3480-vs-un3481",
      title: "UN3480 o UN3481: ¿qué marca de litio necesita?",
      h1: "UN3480 o UN3481: qué marca de baterías de litio necesita",
      description:
        "UN3480 es para baterías de ion de litio enviadas solas y UN3481 para baterías dentro de un equipo o con él. Y UN3090 y UN3091 para metal litio.",
      summary: "La diferencia entre las cuatro marcas de baterías de litio, en palabras sencillas.",
    },
  },
  {
    id: "direct-thermal-vs-thermal-transfer",
    published: "2026-11-23",
    updated: "2026-11-23",
    related: ["thermal-labels", "thermal-transfer-ribbons", "custom-labels"],
    en: {
      slug: "direct-thermal-vs-thermal-transfer",
      title: "Direct Thermal vs Thermal Transfer Labels",
      h1: "Direct thermal vs thermal transfer labels",
      description:
        "Direct thermal labels print with heat alone. Thermal transfer labels use a ribbon and last longer. How to choose for shipping, inventory and product labels.",
      summary: "Ribbon or no ribbon: how the two thermal printing methods differ and when to use each.",
    },
    es: {
      slug: "termica-directa-vs-transferencia-termica",
      title: "Térmica directa vs transferencia térmica",
      h1: "Etiquetas de térmica directa vs transferencia térmica",
      description:
        "La térmica directa imprime solo con calor. La transferencia térmica usa ribbon y dura más. Cómo elegir para envío, inventario y producto.",
      summary: "Con ribbon o sin ribbon: en qué se diferencian los dos métodos térmicos y cuándo usar cada uno.",
    },
  },
];

export const guideById = (id: string) => {
  const g = guides.find((x) => x.id === id);
  if (!g) throw new Error(`Guía desconocida: ${id}`);
  return g;
};

export const guideBySlug = (lang: Lang, slug: string) => guides.find((g) => g[lang].slug === slug);
