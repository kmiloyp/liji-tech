import { handlingLabels, handlingSizes } from "../catalog";
import type { Product } from "./types";

const product: Product = {
  id: "handling-labels",
  category: "cargo",
  orderType: 4,
  related: ["air-cargo-labels", "thermal-labels", "custom-labels"],
  guides: [],
  en: {
    slug: "handling-labels",
    title: "Handling Labels: Fragile, This Side Up, Miami",
    h1: "Handling labels",
    description:
      "Fragile, This Side Up, Keep Dry, Do Not Stack, Mixed Carton and more, in 3 × 4, 3 × 5, 4 × 4, 4 × 6 and 2 × 6 in. Made in Miami. Price by WhatsApp.",
    name: "Handling labels",
    sizes: handlingSizes.join(" · ") + " in",
    definition:
      "Handling labels tell everyone who touches a box how to treat it: fragile, this side up, keep dry, do not stack. They come in 3 × 4, 3 × 5, 4 × 4, 4 × 6 and 2 × 6 in.",
    tables: [
      {
        caption: "Handling labels in the current catalog",
        head: ["Label"],
        rows: handlingLabels.map((l) => [l.en]),
      },
      {
        caption: "Sizes",
        head: ["Size"],
        rows: handlingSizes.map((s) => [s + " in"]),
      },
    ],
    faq: [
      [
        "Does every handling label come in every size?",
        "Not always. Tell us the label and the size you want and we confirm it, or quote it as a custom job.",
      ],
      [
        "Do you have labels for mixed or partial cartons?",
        "Yes: Mixed Carton, Partial Carton and Mixed Merchandise.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for handling labels.",
  },
  es: {
    slug: "manejo",
    title: "Etiquetas de manejo: frágil, este lado arriba",
    h1: "Etiquetas de manejo",
    description:
      "Frágil, este lado arriba, mantener seco, no apilar, caja mixta y más, en 3 × 4, 3 × 5, 4 × 4, 4 × 6 y 2 × 6 in. Hechas en Miami. Precio por WhatsApp.",
    name: "Etiquetas de manejo",
    sizes: handlingSizes.join(" · ") + " in",
    definition:
      "Las etiquetas de manejo le dicen a todo el que toca una caja cómo tratarla: frágil, este lado arriba, mantener seco, no apilar. Vienen en 3 × 4, 3 × 5, 4 × 4, 4 × 6 y 2 × 6 in.",
    tables: [
      {
        caption: "Etiquetas de manejo del catálogo actual",
        head: ["Etiqueta"],
        rows: handlingLabels.map((l) => [l.es]),
      },
      {
        caption: "Tamaños",
        head: ["Tamaño"],
        rows: handlingSizes.map((s) => [s + " in"]),
      },
    ],
    faq: [
      [
        "¿Cada etiqueta de manejo viene en todos los tamaños?",
        "No siempre. Díganos la etiqueta y el tamaño que quiere y se lo confirmamos, o lo cotizamos como trabajo a medida.",
      ],
      [
        "¿Tienen etiquetas para cajas mixtas o parciales?",
        "Sí: caja mixta, caja parcial y mercancía mixta.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de etiquetas de manejo.",
  },
};

export default product;
