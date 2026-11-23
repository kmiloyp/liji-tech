import { ribbons } from "../catalog";
import type { Product } from "./types";

const product: Product = {
  id: "thermal-transfer-ribbons",
  category: "thermal",
  orderType: 6,
  related: ["thermal-labels", "custom-labels", "handling-labels"],
  guides: ["direct-thermal-vs-thermal-transfer"],
  en: {
    slug: "thermal-transfer-ribbons",
    title: "Thermal Transfer Ribbons for Zebra, Datamax",
    h1: "Thermal transfer ribbons for Zebra and Datamax printers",
    description:
      "Thermal transfer ribbons: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m and Datamax 110 mm × 360 m. Sold in Miami by Liji Tech. Price by WhatsApp.",
    name: "Thermal transfer ribbons",
    sizes: "Zebra · Datamax",
    definition:
      "A thermal transfer ribbon carries the ink that the printer melts onto the label. We carry three: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m and Datamax 110 mm × 360 m.",
    tables: [
      {
        caption: "Ribbons in the current catalog",
        head: ["Printer", "Width × length"],
        rows: ribbons.map((r) => [r.printer, r.size]),
      },
    ],
    notes: ["Zebra and Datamax are trademarks of their owners. The names only describe the printers each ribbon is sized for."],
    faq: [
      [
        "Do I need a ribbon for direct thermal labels?",
        "No. Direct thermal labels print with heat alone. Ribbons are for thermal transfer labels.",
      ],
      [
        "Which ribbon fits my printer?",
        "Send us the printer brand and model by WhatsApp and we tell you which one to order.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for thermal transfer ribbons. My printer is: ",
  },
  es: {
    slug: "ribbons",
    title: "Ribbons de transferencia térmica Zebra y Datamax",
    h1: "Ribbons de transferencia térmica para Zebra y Datamax",
    description:
      "Ribbons de transferencia térmica: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m y Datamax 110 mm × 360 m. Venta en Miami por Liji Tech.",
    name: "Ribbons de transferencia térmica",
    sizes: "Zebra · Datamax",
    definition:
      "El ribbon de transferencia térmica lleva la tinta que la impresora funde sobre la etiqueta. Manejamos tres: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m y Datamax 110 mm × 360 m.",
    tables: [
      {
        caption: "Ribbons del catálogo actual",
        head: ["Impresora", "Ancho × largo"],
        rows: ribbons.map((r) => [r.printer, r.size]),
      },
    ],
    notes: ["Zebra y Datamax son marcas de sus dueños. Los nombres solo indican para qué impresoras tiene medida cada ribbon."],
    faq: [
      [
        "¿Necesito ribbon para etiquetas de térmica directa?",
        "No. La térmica directa imprime solo con calor. El ribbon es para etiquetas de transferencia térmica.",
      ],
      [
        "¿Qué ribbon sirve para mi impresora?",
        "Envíenos por WhatsApp la marca y el modelo de su impresora y le decimos cuál pedir.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de ribbons de transferencia térmica. Mi impresora es: ",
  },
};

export default product;
