import { markGuide } from "../catalog";
import type { Product } from "./types";

const lithium = markGuide.filter((m) => ["UN3480", "UN3481", "UN3090", "UN3091"].includes(m.mark));

const product: Product = {
  id: "lithium-battery-labels",
  category: "hazmat",
  orderType: 2,
  related: ["hazard-class-labels", "air-cargo-labels", "handling-labels"],
  guides: ["un3480-vs-un3481"],
  en: {
    slug: "lithium-battery-labels",
    title: "Lithium Battery Labels UN3480, UN3481, Miami",
    h1: "Lithium battery marks UN3480, UN3481, UN3090 and UN3091",
    description:
      "Lithium battery marks UN3480, UN3481, UN3090 and UN3091 at 4.5 × 5 in, plus the Class 9 lithium battery label. Made in Miami. Price by WhatsApp.",
    name: "Lithium battery marks",
    sizes: "Marks 4.5 × 5 in · Class 9 label 4 × 4 in",
    definition:
      "Lithium battery marks show that a package holds lithium batteries and which kind. We print the four marks, UN3480, UN3481, UN3090 and UN3091, at 4.5 × 5 in, plus the Class 9 lithium battery label at 4 × 4 in.",
    tables: [
      {
        caption: "Lithium battery marks in the current catalog",
        head: ["Mark", "What it identifies", "Size"],
        rows: [
          ...lithium.map((m) => [m.mark, m.en, m.catalogSize]),
          ["Class 9", "Lithium battery hazard label", "4 × 4 in"],
        ],
      },
    ],
    faq: [
      [
        "Which lithium battery mark do I need?",
        "UN3480 is for lithium ion batteries shipped on their own and UN3481 for lithium ion batteries in or with equipment. UN3090 and UN3091 cover the same two cases for lithium metal batteries. Your dangerous goods classification decides which one applies.",
      ],
      [
        "Do you also have the Class 9 lithium battery label?",
        "Yes, at 4 × 4 in. Many shipments use it together with a lithium battery mark.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for lithium battery marks.",
  },
  es: {
    slug: "baterias-de-litio",
    title: "Etiquetas de baterías de litio UN3480 y UN3481",
    h1: "Marcas de baterías de litio UN3480, UN3481, UN3090 y UN3091",
    description:
      "Marcas de baterías de litio UN3480, UN3481, UN3090 y UN3091 de 4.5 × 5 in y etiqueta Clase 9 de baterías de litio. Hechas en Miami.",
    name: "Marcas de baterías de litio",
    sizes: "Marcas 4.5 × 5 in · Etiqueta Clase 9 de 4 × 4 in",
    definition:
      "Las marcas de baterías de litio indican que un bulto lleva baterías de litio y de qué tipo. Imprimimos las cuatro marcas, UN3480, UN3481, UN3090 y UN3091, en 4.5 × 5 in, y la etiqueta Clase 9 para baterías de litio en 4 × 4 in.",
    tables: [
      {
        caption: "Marcas de baterías de litio del catálogo actual",
        head: ["Marca", "Qué identifica", "Tamaño"],
        rows: [
          ...lithium.map((m) => [m.mark, m.es, m.catalogSize]),
          ["Clase 9", "Etiqueta de riesgo para baterías de litio", "4 × 4 in"],
        ],
      },
    ],
    faq: [
      [
        "¿Qué marca de baterías de litio necesito?",
        "UN3480 es para baterías de ion de litio enviadas solas y UN3481 para baterías de ion de litio dentro de un equipo o con él. UN3090 y UN3091 cubren los mismos dos casos para baterías de metal litio. La clasificación de su mercancía peligrosa define cuál aplica.",
      ],
      [
        "¿También tienen la etiqueta Clase 9 de baterías de litio?",
        "Sí, en 4 × 4 in. Muchos envíos la llevan junto con una marca de baterías de litio.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de marcas de baterías de litio.",
  },
};

export default product;
