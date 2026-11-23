# AGENTS.md · Liji Tech (borrador para aprobar)

## Resumen
Sitio de Liji Tech, línea de venta directa de la planta de etiquetas Eti-Label Inc. (6977 NW 82nd Ave, Miami, FL 33166).
Vende etiquetas hazmat y placards, marcas de baterías de litio, etiquetas de carga aérea y de manejo, rollos térmicos de color, ribbons y etiquetas a medida en flexografía.
Un solo objetivo: que el visitante escriba por WhatsApp o llame. Sin carrito, sin precios, sin formularios que envíen datos.
Inglés en la raíz, español bajo `/es`. Cada página existe en los dos idiomas.

## Stack
- Next.js (App Router) + TypeScript, 100 % estático (SSG, `generateStaticParams`, `dynamicParams = false`)
- Tailwind CSS v4 (tokens en `app/globals.css` con `@theme`)
- Motion para React (`motion/react`). GSAP no se instala salvo que una secuencia de scroll lo exija.
- `next/font` (autoalojadas), `next/image`, MDX para guías (`@next/mdx`)
- `@vercel/analytics` (eventos personalizados) y GA4 opcional por `NEXT_PUBLIC_GA_ID`
- Despliegue en Vercel. **No desplegar a producción ni conectar dominio sin confirmación de Camilo.**

## Estructura
```
app/
  (en)/                      grupo de rutas con su propio layout raíz <html lang="en">
    layout.tsx  page.tsx  labels/[slug]/  guides/  guides/[slug]/  factory/
  (es)/es/                   grupo de rutas con su propio layout raíz <html lang="es">
    layout.tsx  page.tsx  etiquetas/[slug]/  guias/  guias/[slug]/  fabrica/
                             (cada page.tsx es una línea que llama a la vista compartida en views/ con lang)
  opengraph-image.tsx por página
  sitemap.ts  robots.ts  llms.txt/route.ts  not-found.tsx
views/                       HomeView, ProductView, GuideView, FactoryView (reciben lang)
components/
  labels/                    Diamond.tsx, LithiumMark.tsx, CargoLabel.tsx, ThermalRoll.tsx (SVG puros, server)
  motion/                    islas "use client": HeroDiamonds, RollStrip, PeelCard, ColorExplorer, LabelFinder, ProcessScroll
  conversion/                WhatsAppLink, CallLink, OrderBuilder, MobileBar
  seo/                       JsonLd.tsx y constructores de schema
  layout/                    Header, Footer, Breadcrumbs, LangSwitch
content/
  site.ts                    NAP, rutas por idioma, navegación (lee env)
  catalog.ts                 hazardClasses, airCargo, handling, thermalColors, ribbons, guide (de content.json)
  strings/en.ts  strings/es.ts   textos de interfaz
  products/*.ts              una página de producto = un archivo (slug, title, h1, description, en/es)
  guides/en/*.mdx  guides/es/*.mdx   frontmatter: slug, title, h1, description, pair
lib/
  routes.ts                  tabla de pares de URL en/es (fuente de hreflang, sitemap y cambio de idioma)
  whatsapp.ts  analytics.ts  schema.ts
public/photos/               vacío hasta recibir fotos reales
base-liji-tech/              material original del cliente (no se publica)
```

## Convenciones
- Server Components por defecto. `"use client"` solo en `components/motion` y `components/conversion`.
- Todo texto visible se renderiza en el servidor. Ninguna sección depende de una animación para mostrarse.
- Animar solo `transform` y `opacity`. Respetar `prefers-reduced-motion`. Nada de secuestrar el scroll.
- Agregar una página de producto o guía = agregar un archivo en `content/`. Nada de tocar componentes.
- Texto dentro de las etiquetas dibujadas: en inglés. En español se trata al lector de "usted".
- Sin guiones largos en textos visibles. Un solo verde de interfaz; los colores reglamentarios solo dentro de etiquetas.
- No inventar datos del negocio (precios, mínimos, plazos, cifras, certificaciones, clientes). Si falta, va a Pendientes.
- No afirmar cumplimiento de 49 CFR, IATA o IMDG. La guía de marcas lleva la nota "solo como referencia".
- Teléfono, WhatsApp y dominio solo por variables de entorno (`.env.example`).
- Sin logos de terceros (Zebra, Datamax, WhatsApp, IATA). Nombres en texto, sí.
- `LocalBusiness` solo en `/factory` y a nombre de Eti-Label. Liji Tech es `Organization`.

## Pendientes del cliente
- [ ] Dominio (`NEXT_PUBLIC_SITE_URL`): Camilo lo compra pronto. Mientras, se usa la URL de Vercel
- [ ] Número de WhatsApp de la dueña (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- [x] Teléfono: +1 (305) 303-0985 (`NEXT_PUBLIC_PHONE_E164=+13053030985`)
- [ ] Confirmar dirección 6977 NW 82nd Ave
- [ ] Confirmar si el WhatsApp es el mismo número del teléfono
- [ ] Logo SVG de Liji Tech y verde exacto de marca
- [ ] Fotos reales de planta, prensa y rollos
- [ ] Herramienta de medición: solo Vercel Analytics o también GA4
- [ ] Contenido para /factory: qué se puede decir de la planta (equipos, proceso, horario de atención)
- [ ] Estudio de palabras clave de Camilo: slugs definitivos
- [ ] Confirmación del cliente antes de cualquier mención de cumplimiento normativo
- [ ] Fase 2 (no construir): formulario con Resend
