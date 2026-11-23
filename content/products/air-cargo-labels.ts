import { airCargoLabels } from "../catalog";
import type { Product } from "./types";

const product: Product = {
  id: "air-cargo-labels",
  category: "cargo",
  orderType: 3,
  related: ["handling-labels", "lithium-battery-labels", "hazard-class-labels"],
  guides: ["un3480-vs-un3481"],
  en: {
    slug: "air-cargo-labels",
    title: "Air Cargo Labels: CAO, Dry Ice, AOG, Miami",
    h1: "Air cargo labels",
    description:
      "Cargo Aircraft Only, Dry Ice UN1845, Perishable, Live Animals, Rush AOG, Overpack and more, from 2 × 2 to 4 × 6 in. Made in Miami. Price by WhatsApp.",
    name: "Air cargo labels",
    sizes: "From 2 × 2 to 4 × 6 in",
    definition:
      "Air cargo labels tell the airline and the ground crew how a package travels and how to handle it: cargo aircraft only, dry ice, perishables, live animals, aircraft parts on ground and more. Sizes run from 2 × 2 to 4 × 6 in.",
    tables: [
      {
        caption: "Air cargo labels in the current catalog",
        head: ["Label", "Size"],
        rows: airCargoLabels.map((l) => [l.en, l.size]),
      },
    ],
    faq: [
      [
        "What does Rush AOG mean?",
        "Aircraft on Ground: a part needed to return an aircraft to service. The label asks for priority handling.",
      ],
      [
        "What is an Overpack label for?",
        "An overpack is several packages inside one outer pack that hides their labels. The Overpack label goes on that outer pack.",
      ],
      [
        "What does Cargo Aircraft Only mean?",
        "The package is allowed on cargo aircraft, not on passenger aircraft.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for air cargo labels.",
  },
  es: {
    slug: "carga-aerea",
    title: "Etiquetas de carga aérea: CAO, hielo seco, AOG",
    h1: "Etiquetas de carga aérea",
    description:
      "Cargo Aircraft Only, hielo seco UN1845, perecedero, animales vivos, Rush AOG, Overpack y más, de 2 × 2 a 4 × 6 in. Hechas en Miami.",
    name: "Etiquetas de carga aérea",
    sizes: "De 2 × 2 a 4 × 6 in",
    definition:
      "Las etiquetas de carga aérea le dicen a la aerolínea y al personal de rampa cómo viaja un bulto y cómo manejarlo: solo avión de carga, hielo seco, perecederos, animales vivos, repuestos de avión en tierra y más. Los tamaños van de 2 × 2 a 4 × 6 in.",
    tables: [
      {
        caption: "Etiquetas de carga aérea del catálogo actual",
        head: ["Etiqueta", "Tamaño"],
        rows: airCargoLabels.map((l) => [l.es, l.size]),
      },
    ],
    faq: [
      [
        "¿Qué significa Rush AOG?",
        "Aircraft on Ground: una pieza necesaria para que un avión vuelva a operar. La etiqueta pide manejo prioritario.",
      ],
      [
        "¿Para qué sirve la etiqueta Overpack?",
        "Un overpack (sobreembalaje) son varios bultos dentro de un embalaje exterior que tapa sus etiquetas. La etiqueta Overpack va en ese embalaje exterior.",
      ],
      [
        "¿Qué significa Cargo Aircraft Only?",
        "Que el bulto puede ir en avión de carga, no en avión de pasajeros.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de etiquetas de carga aérea.",
  },
};

export default product;
