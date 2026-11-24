<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Liji Tech · sitio web

## Resumen
Sitio de **Liji Tech**, línea de venta directa de la planta de etiquetas **Eti-Label Inc.** (6977 NW 82nd Ave, Miami, FL 33166).
Vende etiquetas hazmat y placards, marcas de baterías de litio, etiquetas de carga aérea y de manejo, rollos térmicos de color, ribbons y etiquetas a medida en flexografía.
Un solo objetivo: que el visitante **escriba por WhatsApp o llame**. Sin carrito, sin precios, sin formularios que envíen datos.
Inglés en la raíz (`/`), español bajo `/es`. Cada página existe en los dos idiomas.

## Stack
- Next.js 16.4 (App Router, Turbopack) + TypeScript + React 19.3
- `cacheComponents: true` (por defecto del proyecto). Todo se prerenderiza en el build.
- Tailwind CSS v4: tokens en `app/globals.css` (`:root` + `@theme inline`).
- Motion 14 (`motion/react`) para las animaciones. No hay GSAP.
- `next/font/google` (Big Shoulders, Public Sans, IBM Plex Mono), MDX con `@next/mdx` + `remark-gfm`.
- `@vercel/analytics` (eventos personalizados). GA4 opcional por `NEXT_PUBLIC_GA_ID`.
- Despliegue: Vercel. **No desplegar a producción ni conectar el dominio sin confirmación de Camilo.**

## Comandos
```bash
npm run dev      # desarrollo
npm run build    # build de producción (debe pasar sin errores)
npm run start    # servir el build
npm run lint
```
Variables: copiar `.env.example` a `.env.local`. `NEXT_PUBLIC_PHONE_E164` y `NEXT_PUBLIC_PHONE_DISPLAY` son obligatorias (el build falla sin ellas).

## Estructura
```
app/
  (en)/                      layout raíz <html lang="en"> + páginas en inglés
    page.tsx  labels/[slug]/  guides/  guides/[slug]/  factory/   (+ opengraph-image.tsx en cada una)
  (es)/                      layout raíz <html lang="es">
    es/page.tsx  es/etiquetas/[slug]/  es/guias/  es/guias/[slug]/  es/fabrica/
  global-not-found.tsx       404 bilingüe (hay dos layouts raíz)
  sitemap.ts  robots.ts  llms.txt/route.ts  icon.svg  fonts.ts  globals.css
proxy.ts                     responde 404 real a slugs que no existen (ver "Decisiones")
views/                       HomeView, ProductView, GuideView, GuidesIndexView, FactoryView (reciben lang)
components/
  labels/                    SVG de servidor: Diamond, LithiumMark, CargoTag, ThermalRoll, ProcessArt, ProductArt
  motion/                    islas "use client": RollStrip, CatalogGrid, LabelFinder, ColorExplorer, ProcessScroll
  conversion/                ContactButtons, OrderBuilder (cliente), MobileBar, ClickTracker (cliente), icons
  layout/                    Header, Footer, Breadcrumbs, PageShell, RootShell, Logo
  seo/JsonLd.tsx
content/
  site.ts                    NAP, WhatsApp, teléfono, dominio (desde variables de entorno)
  catalog.json + catalog.ts  datos del catálogo (copiados de base-liji-tech/content.json)
  strings.ts                 textos de interfaz y portada, en y es (versión 2 aprobada)
  products/*.ts + index.ts   una página de producto = un archivo
  guides/index.ts            título, H1, descripción y slug de cada guía
  guides/en/*.mdx, guides/es/*.mdx   cuerpo de cada guía
lib/
  routes.ts                  tabla única de URL por idioma: hreflang, canonical, sitemap, cambio de idioma
  meta.ts  schema.ts  contact.ts  maps.ts  og.tsx
assets/fonts/                TTF solo para las imágenes Open Graph
base-liji-tech/              material original del cliente (no se publica)
propuesta-diseno/            propuesta de diseño aprobada (A), textos v2 y cuestionario para el cliente
```

## Cómo agregar contenido
- **Página de producto:** copiar un archivo de `content/products/`, cambiar `id`, slugs, textos y tablas, e importarlo en `content/products/index.ts`. Rutas, sitemap, llms.txt, menú del pie, 404 y JSON-LD se actualizan solos. Si necesita un bloque visual propio, agregarlo en `Showcase` de `views/ProductView.tsx`.
- **Guía:** agregar una entrada en `content/guides/index.ts` y los dos archivos `content/guides/en/<id>.mdx` y `content/guides/es/<id>.mdx`.
- **Cambiar un slug:** editar `slug` en el archivo de contenido. Si la página ya está publicada, agregar una redirección 301 en `next.config.ts`.
- **Páginas por ciudad (Doral, Medley, Hialeah):** no crearlas hasta tener contenido propio para cada una.

## Convenciones
- Server Components por defecto. `"use client"` solo en `components/motion`, `OrderBuilder` y `ClickTracker`. Los componentes cliente no importan `content/strings.ts` ni `content/site.ts` completos: reciben los textos por props.
- Todo texto visible se renderiza en el servidor. Ninguna sección depende de una animación para mostrarse (probado sin JavaScript).
- Movimiento: solo `transform` y `opacity`, nada de secuestrar el scroll, y todo respeta `prefers-reduced-motion`.
- Un solo H1 por página. Tablas con `th scope`. SVG con significado: `role="img"` y `aria-label`.
- Texto dentro de las etiquetas dibujadas: en inglés, como se imprime. En español se trata al lector de "usted".
- Sin guiones largos (—) en textos visibles. El verde de marca es el único color de interfaz; los colores reglamentarios van solo dentro de las etiquetas.
- **No inventar datos del negocio:** precios, mínimos, plazos, cifras, años, certificaciones, clientes, reseñas. Si falta un dato, va a Pendientes.
- **No afirmar cumplimiento** de 49 CFR, IATA o IMDG. Las tablas de marcas llevan la nota "solo como referencia" (`markNote`).
- Teléfono, WhatsApp y dominio solo por variables de entorno. Sin logos de terceros (Zebra, Datamax, WhatsApp, IATA): solo los nombres en texto. El ícono de WhatsApp es un globo de chat genérico.
- JSON-LD: Liji Tech es `Organization`. El `LocalBusiness` es de **Eti-Label** y solo va en `/factory`. `Product` sin `offers` ni precio.
- Medición: cada enlace de WhatsApp, llamada o correo lleva `data-track="whatsapp|call|email"` y `data-track-location="<lugar>"`. `ClickTracker` registra `whatsapp_click`, `call_click` o `email_click` con `location`, `page` y `lang`.

## Decisiones técnicas (Next 16.4 con cacheComponents)
- `dynamicParams`, `dynamic` y `revalidate` no se pueden exportar. Las rutas `[slug]` usan `generateStaticParams` + `notFound()`.
- Con prerenderizado parcial, `notFound()` llega con estado 200. Por eso `proxy.ts` responde 404 a los slugs que no existen (solo corre en `/labels/*`, `/guides/*`, `/es/etiquetas/*`, `/es/guias/*`).
- Dos layouts raíz (uno por idioma) para que `<html lang>` salga correcto del servidor. Cambiar de idioma recarga la página completa; la transición la hace `@view-transition` en CSS.
- `new Date()` sin argumentos no se puede usar al renderizar. Las fechas son textos fijos en el contenido.
- Fuentes: solo el subconjunto `latin` (incluye tildes y ñ), Big Shoulders sin eje `opsz` y Plex Mono sin precarga. Así el LCP en celular baja de 3,8 s a 2,3–2,4 s.
- `<Analytics />` se monta solo cuando `VERCEL=1`.

## Estado de calidad (build local, Lighthouse móvil, 23 nov 2026)
- Rendimiento 95–98 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100. LCP 2,3–2,4 s, CLS ≤ 0,001.
- Las 26 URL del sitemap tienen un H1, canonical, hreflang en/es/x-default y JSON-LD que se puede leer.
- En vivo (https://liji-tech.vercel.app, 24 nov 2026, Lighthouse móvil desde el contenedor de desarrollo): accesibilidad, buenas prácticas y SEO 100 en todas; rendimiento 85–91 en la portada, 92 en térmicas y 95 en fábrica. LCP 2,1–2,5 s, CLS 0. El TBT varía de 290 a 540 ms entre corridas iguales porque depende de la CPU del contenedor: medir también con PageSpeed Insights.
- Ya aplicado para rendimiento: sombras dentro del SVG (sin filtros `drop-shadow`), `content-visibility: auto` en secciones bajas de la portada y Motion con `LazyMotion` + `m`.
- Si la portada sigue por debajo de 90 en PageSpeed Insights: lo siguiente es aligerar la cinta de rollo (menos etiquetas) y cargar el buscador y el armador solo cuando se acercan a la pantalla.
- Pendiente: validar en el validador de schema.org y en la prueba de resultados enriquecidos de Google.

## Pendientes del cliente
- [ ] **Dominio** (`NEXT_PUBLIC_SITE_URL`). Mientras no exista, el sitio usa la URL de producción de Vercel.
- [x] WhatsApp de la dueña: el mismo número del teléfono (`NEXT_PUBLIC_WHATSAPP_NUMBER=13053030985`).
- [x] Teléfono: +1 (305) 303-0985.
- [x] Horario de la planta y retiro en planta: lunes a jueves 7:30 a. m. a 5:00 p. m., viernes 7:30 a. m. a 4:00 p. m. (`content/site.ts`). Falta confirmar sábado y domingo (hoy no se publican).
- [x] Eti-Label en Miami desde 2000; Liji Tech registrada en 2021.
- [x] Órdenes de compra por correo: lijitechcorp@gmail.com. Pago: Zelle o cheque. Entrega: alrededor de una semana con arte y plancha listos en planta; una etiqueta nueva pasa antes por arte, diseño y plancha.
- [ ] Confirmar la dirección 6977 NW 82nd Ave, Miami, FL 33166.
- [ ] **Logo SVG** de Liji Tech y verde exacto. Hoy: rombo provisional en `components/layout/Logo.tsx`, verde `#08703F` en `app/globals.css` (oscurecido desde `#0A7A45` para pasar contraste AA).
- [ ] **Fotos reales** de la planta, la prensa y los rollos, para `/factory` y las páginas de producto (`public/photos/`, con `next/image`). Hoy se usan ilustraciones SVG.
- [ ] Contenido de `/factory`: equipos (prensas, colores, ancho), proceso real, personas. Ver `propuesta-diseno/preguntas-cliente.md`.
- [ ] Medición: confirmar si se usa solo Vercel Analytics o también GA4 (`NEXT_PUBLIC_GA_ID`). Activar Web Analytics en el proyecto de Vercel.
- [ ] Estudio de palabras clave de Camilo: slugs definitivos y páginas nuevas.
- [ ] Cumplimiento: la cliente dice que las etiquetas de riesgo están "aprobadas por IATA". IATA no aprueba fabricantes de etiquetas; falta acordar la redacción exacta (propuesta: "fabricadas según las especificaciones de la Reglamentación sobre Mercancías Peligrosas de IATA") y un respaldo escrito antes de publicarlo.
- [ ] Revisar con el cliente las equivalencias de la tabla "¿Qué está enviando?" (`whoProducts` en `content/strings.ts`) y los tamaños de ejemplo de los dibujos de etiquetas de carga y manejo.
- [ ] Ficha de Google de Eti-Label: enlazarla a `/factory` cuando el sitio esté en el dominio.
- [ ] Google Search Console: `GOOGLE_SITE_VERIFICATION` y enviar el sitemap.
- [ ] Fase 2 (no construir aún): formulario de contacto con Resend.
