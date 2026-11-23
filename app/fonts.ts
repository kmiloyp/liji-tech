import { Big_Shoulders, IBM_Plex_Mono, Public_Sans } from "next/font/google";

// Solo el subconjunto "latin": incluye tildes y ñ (español) y pesa la mitad
// que sumar "latin-ext". Menos archivos de fuente = mejor LCP en celular.

/** Titulares: condensada industrial, como etiqueta de carga. Variable (wght). */
export const display = Big_Shoulders({
  subsets: ["latin"],
  adjustFontFallback: false,
  variable: "--font-display",
  display: "swap",
});

/** Texto corrido. Variable: un solo archivo para todos los grosores. */
export const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/** Datos tipo ficha técnica: tamaños, códigos UN, códigos de color. No se precarga. */
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;
