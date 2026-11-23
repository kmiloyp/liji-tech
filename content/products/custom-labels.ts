import type { Product } from "./types";

const product: Product = {
  id: "custom-labels",
  category: "custom",
  orderType: 7,
  related: ["thermal-labels", "handling-labels", "hazard-class-labels"],
  guides: [],
  en: {
    slug: "custom-labels",
    title: "Custom Flexo Printed Labels, Miami",
    h1: "Custom labels, printed in flexography",
    description:
      "Custom product labels, branded shipping labels and color-coded warehouse labels, printed in flexography at the Eti-Label plant in Miami.",
    name: "Custom printed labels",
    sizes: "Your size, color and text",
    definition:
      "Custom labels are printed to your size, color and text on a flexographic press, from a plate made for your design. Every roll and every reorder matches.",
    notes: [
      "Product labels, shipping labels with your brand and color-coded labels for your warehouse.",
    ],
    faq: [
      [
        "What do you need to quote a custom label?",
        "The label size, the quantity, where it sticks (box, bottle, freezer, outdoors) and your artwork or a photo of the label you use now.",
      ],
      [
        "Why flexography?",
        "Flexography prints from a plate made for your design, so every roll and every reorder comes out the same.",
      ],
      [
        "Can you match a label I already use?",
        "Send a photo of it by WhatsApp with the size and quantity, and we quote it.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a quote for custom printed labels.",
  },
  es: {
    slug: "a-medida",
    title: "Etiquetas a medida en flexografía, Miami",
    h1: "Etiquetas a medida, impresas en flexografía",
    description:
      "Etiquetas de producto, de envío con su marca y de color para bodega, impresas a medida en flexografía en la planta de Eti-Label en Miami.",
    name: "Etiquetas a medida",
    sizes: "Su tamaño, color y texto",
    definition:
      "Las etiquetas a medida se imprimen en el tamaño, el color y el texto que usted pida, en una prensa flexográfica y con una plancha hecha para su diseño. Cada rollo y cada repetición salen iguales.",
    notes: [
      "Etiquetas de producto, etiquetas de envío con su marca y etiquetas de color para su bodega.",
    ],
    faq: [
      [
        "¿Qué necesitan para cotizar una etiqueta a medida?",
        "El tamaño, la cantidad, dónde se pega (caja, botella, congelador, exterior) y su arte o una foto de la etiqueta que usa hoy.",
      ],
      [
        "¿Por qué flexografía?",
        "La flexografía imprime con una plancha hecha para su diseño, así cada rollo y cada repetición salen iguales.",
      ],
      [
        "¿Pueden igualar una etiqueta que ya uso?",
        "Envíenos una foto por WhatsApp con el tamaño y la cantidad, y se la cotizamos.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito cotizar etiquetas impresas a medida.",
  },
};

export default product;
