import { hazardClasses } from "../catalog";
import type { Product } from "./types";

const product: Product = {
  id: "hazard-class-labels",
  category: "hazmat",
  orderType: 0,
  related: ["hazmat-placards", "lithium-battery-labels", "air-cargo-labels"],
  guides: ["un3480-vs-un3481"],
  en: {
    slug: "hazard-class-labels",
    title: "Hazard Class Labels 4 × 4 in, Miami",
    h1: "Hazard class labels, 4 × 4 in",
    description:
      "Hazard class labels 4 × 4 in on rolls: flammable gas and liquid, oxidizer, toxic, corrosive, Class 9 and more. Made in Miami. Price by WhatsApp.",
    name: "Hazard class labels",
    sizes: "4 × 4 in",
    definition:
      "Hazard class labels are the 4 × 4 in diamonds that show which class of dangerous goods is inside a package. We print the 11 labels below at the Eti-Label plant in Miami.",
    tables: [
      {
        caption: "Hazard class labels in the current catalog",
        head: ["Class", "Label", "Size"],
        rows: hazardClasses.map((h) => [h.number, h.en, "4 × 4 in"]),
      },
    ],
    notes: [
      "Need the same classes in a bigger size for a truck or a container? See the 10.75 × 10.75 in placards.",
    ],
    faq: [
      [
        "Which hazard class labels can I order?",
        "Class 2 flammable, non-flammable and toxic gas; Class 3 flammable liquid; Class 4 flammable solid and spontaneously combustible; Class 5.1 oxidizer; Class 5.2 organic peroxide; Class 6 toxic; Class 8 corrosive and Class 9 miscellaneous.",
      ],
      [
        "Do you print other sizes or wording?",
        "Yes, as a custom job. Send the size, the quantity and a photo of the label you need.",
      ],
      [
        "Which label does my shipment need?",
        "The shipper classifies the goods and chooses the labels under the current IATA Dangerous Goods Regulations, the IMDG Code and 49 CFR. Our chart is a reference only.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for hazard class labels (4 × 4 in).",
  },
  es: {
    slug: "clases-de-riesgo",
    title: "Etiquetas de clases de riesgo 4 × 4 in, Miami",
    h1: "Etiquetas de clases de riesgo, 4 × 4 in",
    description:
      "Etiquetas de clases de riesgo de 4 × 4 in en rollo: gas y líquido inflamable, comburente, tóxico, corrosivo, Clase 9 y más. Hechas en Miami.",
    name: "Etiquetas de clases de riesgo",
    sizes: "4 × 4 in",
    definition:
      "Las etiquetas de clases de riesgo son los rombos de 4 × 4 in que indican qué clase de mercancía peligrosa va dentro de un bulto. Imprimimos las 11 etiquetas de abajo en la planta de Eti-Label en Miami.",
    tables: [
      {
        caption: "Etiquetas de clases de riesgo del catálogo actual",
        head: ["Clase", "Etiqueta", "Tamaño"],
        rows: hazardClasses.map((h) => [h.number, h.es, "4 × 4 in"]),
      },
    ],
    notes: [
      "¿Necesita las mismas clases en tamaño grande para un camión o un contenedor? Vea los placards de 10.75 × 10.75 in.",
    ],
    faq: [
      [
        "¿Qué etiquetas de clases de riesgo puedo pedir?",
        "Clase 2 gas inflamable, no inflamable y tóxico; Clase 3 líquido inflamable; Clase 4 sólido inflamable y combustión espontánea; Clase 5.1 comburente; Clase 5.2 peróxido orgánico; Clase 6 tóxico; Clase 8 corrosivo y Clase 9 misceláneos.",
      ],
      [
        "¿Imprimen otros tamaños u otro texto?",
        "Sí, como trabajo a medida. Envíenos el tamaño, la cantidad y una foto de la etiqueta que necesita.",
      ],
      [
        "¿Qué etiqueta necesita mi envío?",
        "El expedidor clasifica la mercancía y elige las etiquetas según la edición vigente de la reglamentación de IATA, el Código IMDG y el 49 CFR. Nuestra tabla es solo de referencia.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de etiquetas de clases de riesgo (4 × 4 in).",
  },
};

export default product;
