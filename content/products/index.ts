/**
 * Registro de páginas de producto. Para agregar una página:
 * 1. Cree content/products/<id>.ts copiando uno existente.
 * 2. Impórtelo aquí y agréguelo a la lista (el orden es el del catálogo).
 * Las rutas, el sitemap, llms.txt y los enlaces se generan solos.
 */
import type { Lang } from "../catalog";
import airCargo from "./air-cargo-labels";
import customLabels from "./custom-labels";
import handling from "./handling-labels";
import hazardClass from "./hazard-class-labels";
import placards from "./hazmat-placards";
import lithium from "./lithium-battery-labels";
import thermal from "./thermal-labels";
import ribbons from "./thermal-transfer-ribbons";
import type { Product } from "./types";

export const products: Product[] = [
  hazardClass,
  placards,
  lithium,
  airCargo,
  handling,
  thermal,
  ribbons,
  customLabels,
];

export const productById = (id: string) => {
  const p = products.find((x) => x.id === id);
  if (!p) throw new Error(`Producto desconocido: ${id}`);
  return p;
};

export const productBySlug = (lang: Lang, slug: string) => products.find((p) => p[lang].slug === slug);

export type { Product, ProductCopy, ProductCategory } from "./types";
