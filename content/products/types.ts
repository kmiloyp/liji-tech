import type { Lang } from "../catalog";

/** Filtro del catálogo en portada. */
export type ProductCategory = "hazmat" | "cargo" | "thermal" | "custom";

export type SizeTable = {
  caption: string;
  /** Encabezados de columna. */
  head: string[];
  rows: string[][];
};

export type ProductCopy = {
  /** Último tramo de la URL. Cambiarlo cambia la URL publicada. */
  slug: string;
  /** <title> sin la marca (se agrega " | Liji Tech"). Hasta ~48 caracteres. */
  title: string;
  h1: string;
  /** Meta descripción, hasta ~155 caracteres. */
  description: string;
  /** Nombre corto para tarjetas, menús y migas de pan. */
  name: string;
  /** Tamaños en una línea, para la tarjeta del catálogo. */
  sizes: string;
  /** Definición directa de una o dos frases. Abre la página. */
  definition: string;
  /** Tablas de tamaños (opcional: algunas páginas usan un bloque propio). */
  tables?: SizeTable[];
  /** Párrafos extra, en orden, después de las tablas. */
  notes?: string[];
  faq: [question: string, answer: string][];
  /** Mensaje con el que abre WhatsApp desde esta página. */
  waMessage: string;
};

export type Product = {
  id: string;
  category: ProductCategory;
  /** Texto del tipo en el armador de pedido (índice de strings.types). */
  orderType: number;
  related: string[];
  guides: string[];
  en: ProductCopy;
  es: ProductCopy;
};

export type { Lang };
