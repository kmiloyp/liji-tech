import { thermalColorCount, thermalColors } from "../catalog";
import type { Product } from "./types";

const circles = thermalColors.circlesIn.map((c) => `${c} in`).join(" · ");

const product: Product = {
  id: "thermal-labels",
  category: "thermal",
  orderType: 5,
  related: ["thermal-transfer-ribbons", "handling-labels", "custom-labels"],
  guides: ["direct-thermal-vs-thermal-transfer"],
  en: {
    slug: "thermal-labels",
    title: "Blank Thermal Labels in 34 Colors, Miami",
    h1: "Blank thermal labels in 34 colors",
    description:
      "Blank thermal label rolls in 34 colors and color circles from 1 to 5 in, for direct thermal or thermal transfer printers. Made in Miami.",
    name: "Blank thermal labels in color",
    sizes: "34 colors · circles 1 to 5 in",
    definition: `Blank thermal labels are rolls you print yourself on a thermal printer. Ours come in ${thermalColorCount} colors, so a warehouse can sort freight by destination, day or client, and as color circles from 1 to 5 in.`,
    tables: [
      {
        caption: "Blank thermal labels",
        head: ["Format", "Options"],
        rows: [
          ["Rolls", `${thermalColorCount} colors`],
          ["Color circles", circles],
        ],
      },
    ],
    notes: [
      `${thermalColors.both.length} colors work on direct thermal or thermal transfer printers. ${thermalColors.transferOnly.length} more work on thermal transfer only. Screen colors are approximate: ask for a sample if the exact shade matters.`,
    ],
    faq: [
      [
        "What is the difference between direct thermal and thermal transfer labels?",
        "Direct thermal labels print with heat alone and suit short-life uses such as shipping labels. Thermal transfer labels print with a ribbon, last longer and resist rubbing.",
      ],
      [
        "Why use colored thermal labels?",
        "Color rolls help a warehouse separate freight by destination, day or client at a glance.",
      ],
      [
        "Do you have the ribbons too?",
        "Yes: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m and Datamax 110 mm × 360 m.",
      ],
    ],
    waMessage: "Hi Liji Tech, I need a price for blank thermal labels in color.",
  },
  es: {
    slug: "termicas",
    title: "Etiquetas térmicas en blanco, 34 colores, Miami",
    h1: "Etiquetas térmicas en blanco, en 34 colores",
    description:
      "Rollos de etiquetas térmicas en blanco en 34 colores y círculos de 1 a 5 in, para impresoras de térmica directa o transferencia térmica. Hechas en Miami.",
    name: "Etiquetas térmicas de color",
    sizes: "34 colores · círculos de 1 a 5 in",
    definition: `Las etiquetas térmicas en blanco son rollos que usted imprime en su impresora térmica. Las nuestras vienen en ${thermalColorCount} colores, para que una bodega separe la carga por destino, día o cliente, y en círculos de color de 1 a 5 in.`,
    tables: [
      {
        caption: "Etiquetas térmicas en blanco",
        head: ["Formato", "Opciones"],
        rows: [
          ["Rollos", `${thermalColorCount} colores`],
          ["Círculos de color", circles],
        ],
      },
    ],
    notes: [
      `${thermalColors.both.length} colores sirven para térmica directa o transferencia térmica. Otros ${thermalColors.transferOnly.length} sirven solo para transferencia térmica. Los colores en pantalla son aproximados: pida una muestra si el tono exacto importa.`,
    ],
    faq: [
      [
        "¿Qué diferencia hay entre térmica directa y transferencia térmica?",
        "La térmica directa imprime solo con calor y sirve para usos de vida corta, como etiquetas de envío. La transferencia térmica imprime con ribbon, dura más y resiste el roce.",
      ],
      [
        "¿Para qué sirven las etiquetas térmicas de color?",
        "Los rollos de color ayudan a una bodega a separar la carga por destino, día o cliente de un vistazo.",
      ],
      [
        "¿También tienen ribbons?",
        "Sí: Zebra 110 mm × 74 m, Zebra 110 mm × 450 m y Datamax 110 mm × 360 m.",
      ],
    ],
    waMessage: "Hola Liji Tech, necesito precio de etiquetas térmicas de color.",
  },
};

export default product;
