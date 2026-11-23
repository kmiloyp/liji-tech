/**
 * Catálogo tipado. Los datos vienen de content/catalog.json
 * (copiado de base-liji-tech/content.json). Para cambiar un tamaño o un color,
 * edite el JSON.
 */
import data from "./catalog.json";

export type Lang = "en" | "es";
export type Bi = { en: string; es: string };

/** Fondo del rombo, según styleKey del contenido original. */
export type DiamondStyle =
  | "dm-red"
  | "dm-green"
  | "dm-yellow"
  | "white"
  | "dm-stripe"
  | "dm-ry"
  | "dm-wr"
  | "dm-wb"
  | "dm-nine";

/** Pictograma, dibujado en components/labels/pictograms.tsx */
export type Pictogram = "flame" | "cylinder" | "skull" | "flame-circle" | "corrosion" | "none";

export type HazardClass = {
  id: string;
  style: DiamondStyle;
  number: string;
  en: string;
  es: string;
  /** Texto impreso en la etiqueta real (siempre en inglés, como se imprime). */
  printed: string[];
  pictogram: Pictogram;
  /** Color del pictograma y del texto superior. */
  ink: "white" | "black";
};

// Texto impreso y pictograma de cada clase, fieles a las fotos del folleto
// (base-liji-tech/catalogo-fotos/01-placards.jpg y 03-etiquetas-4x4.jpg).
const printedById: Record<string, Pick<HazardClass, "printed" | "pictogram" | "ink">> = {
  "2-flammable-gas": { printed: ["FLAMMABLE", "GAS"], pictogram: "flame", ink: "white" },
  "2-non-flammable-gas": { printed: ["NON-FLAMMABLE", "GAS"], pictogram: "cylinder", ink: "white" },
  "2-toxic-gas": { printed: ["TOXIC", "GAS"], pictogram: "skull", ink: "black" },
  "3-flammable-liquid": { printed: ["FLAMMABLE", "LIQUID"], pictogram: "flame", ink: "white" },
  "4-flammable-solid": { printed: ["FLAMMABLE", "SOLID"], pictogram: "flame", ink: "black" },
  "4-spontaneously-combustible": { printed: ["SPONTANEOUSLY", "COMBUSTIBLE"], pictogram: "flame", ink: "black" },
  "5.1-oxidizer": { printed: ["OXIDIZER"], pictogram: "flame-circle", ink: "black" },
  "5.2-organic-peroxide": { printed: ["ORGANIC", "PEROXIDE"], pictogram: "flame", ink: "black" },
  "6-toxic-inhalation-hazard": { printed: ["INHALATION", "HAZARD"], pictogram: "skull", ink: "black" },
  "8-corrosive": { printed: ["CORROSIVE"], pictogram: "corrosion", ink: "black" },
  "9-miscellaneous": { printed: [], pictogram: "none", ink: "black" },
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const hazardClasses: HazardClass[] = data.hazardClasses.map((h) => {
  const id = `${h.number}-${slugify(h.en.replace(", inhalation hazard", " inhalation hazard"))}`;
  const extra = printedById[id];
  if (!extra) throw new Error(`Falta texto impreso para la clase ${id}`);
  return { id, style: h.style as DiamondStyle, number: h.number, en: h.en, es: h.es, ...extra };
});

export const hazardById = (id: string) => {
  const h = hazardClasses.find((x) => x.id === id);
  if (!h) throw new Error(`Clase desconocida: ${id}`);
  return h;
};

export type CargoLabel = { en: string; es: string; size: string };
export const airCargoLabels: CargoLabel[] = data.airCargoLabels;
export const handlingLabels: Bi[] = data.handlingLabels;

export type ThermalColor = { code: string; ref: string; hexAprox: string };
export const thermalColors = {
  both: data.thermalColors.directThermalOrThermalTransfer as ThermalColor[],
  transferOnly: data.thermalColors.thermalTransferOnly as ThermalColor[],
  circlesIn: data.thermalColors.circles_in as number[],
};
export const thermalColorCount = thermalColors.both.length + thermalColors.transferOnly.length;

export type Ribbon = { printer: string; size: string };
export const ribbons: Ribbon[] = data.ribbons;

export type GuideMark = { mark: string; en: string; es: string; catalogSize: string };
export const markGuide: GuideMark[] = data.guide;

export const lithiumMarks = ["UN3480", "UN3481", "UN3090", "UN3091"] as const;

export const handlingSizes = ["3 × 4", "3 × 5", "4 × 4", "4 × 6", "2 × 6"];
