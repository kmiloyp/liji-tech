import { hazardClasses } from "../catalog";
import type { Product } from "./types";

const product: Product = {
  id: "hazmat-placards",
  category: "hazmat",
  orderType: 1,
  related: ["hazard-class-labels", "lithium-battery-labels", "custom-labels"],
  guides: [],
  en: {
    slug: "hazmat-placards",
    title: "Hazmat Placards 10.75 × 10.75 in, Miami",
    h1: "Hazmat placards, 10.75 × 10.75 in",
    description:
      "Hazmat placards 10.75 × 10.75 in in every hazard class, blank or with a UN number panel. Made at the Eti-Label plant in Miami. Price by WhatsApp.",
    name: "Hazmat placards",
    sizes: "10.75 × 10.75 in",
    definition:
      "Hazmat placards are the large 10.75 × 10.75 in hazard diamonds used on freight units such as trucks and containers. They come in the same classes as our labels, blank, or with a panel for the UN number.",
    tables: [
      {
        caption: "Placards in the current catalog",
        head: ["Class", "Placard", "Size"],
        rows: hazardClasses.map((h) => [h.number, h.en, "10.75 × 10.75 in"]),
      },
    ],
    notes: [
      "Placards also come blank or with a UN number panel. Example: UN2794, wet batteries filled with acid, Class 8.",
    ],
    faq: [
      [
        "Do placards come with the UN number?",
        "They come blank or with a UN number panel. Tell us the number you need when you ask for the price.",
      ],
      [
        "What is the difference between a label and a placard?",
        "Size and use. Labels are 4 × 4 in and go on packages. Placards are 10.75 × 10.75 in and go on larger freight units.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for hazmat placards (10.75 × 10.75 in).",
  },
  es: {
    slug: "placards-hazmat",
    title: "Placards hazmat 10.75 × 10.75 in, Miami",
    h1: "Placards hazmat, 10.75 × 10.75 in",
    description:
      "Placards hazmat de 10.75 × 10.75 in en todas las clases de riesgo, en blanco o con panel para el número UN. Hechos en Miami. Precio por WhatsApp.",
    name: "Placards hazmat",
    sizes: "10.75 × 10.75 in",
    definition:
      "Los placards hazmat son los rombos grandes de 10.75 × 10.75 in que se ponen en unidades de carga como camiones y contenedores. Vienen en las mismas clases que nuestras etiquetas, en blanco o con panel para el número UN.",
    tables: [
      {
        caption: "Placards del catálogo actual",
        head: ["Clase", "Placard", "Tamaño"],
        rows: hazardClasses.map((h) => [h.number, h.es, "10.75 × 10.75 in"]),
      },
    ],
    notes: [
      "Los placards también vienen en blanco o con panel para el número UN. Por ejemplo: UN2794, baterías húmedas con ácido, Clase 8.",
    ],
    faq: [
      [
        "¿Los placards vienen con el número UN?",
        "Vienen en blanco o con panel para el número UN. Díganos el número que necesita cuando pida el precio.",
      ],
      [
        "¿Qué diferencia hay entre una etiqueta y un placard?",
        "El tamaño y el uso. Las etiquetas miden 4 × 4 in y van en los bultos. Los placards miden 10.75 × 10.75 in y van en unidades de carga más grandes.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de placards hazmat (10.75 × 10.75 in).",
  },
};

export default product;
