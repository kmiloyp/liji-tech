Copia todo lo que está debajo de esta línea y pégalo en Claude Code. Antes, descomprime `base-liji-tech.zip` y deja la carpeta `base-liji-tech/` en la raíz del proyecto.

---

## Objetivo

Construir el sitio web de **Liji Tech**, la línea de venta directa de la fábrica de etiquetas **Eti-Label** (Miami, Florida). Vende etiquetas de mercancía peligrosa, carga aérea, manejo, rollos térmicos de color, ribbons y etiquetas a medida en flexografía. Los compradores son agentes de carga, bodegas, agentes de aduana y exportadores de la zona del aeropuerto de Miami.

El sitio tiene un solo trabajo: que quien busca estas etiquetas en Google o en un buscador de IA encuentre la página, entienda en segundos qué puede pedir y **escriba por WhatsApp o llame**. No hay carrito ni precios públicos. La dueña atiende y cierra la venta por WhatsApp.

Debe quedar al nivel visual de los mejores sitios actuales: tipografía con carácter, movimiento cuidado y una interfaz que se sienta hecha a mano para este negocio. Y debe ser impecable en SEO técnico.

## Lo que ya existe (léelo antes de proponer nada)

En `base-liji-tech/` hay una primera versión hecha fuera de Claude Code:

- `content.json`: **todos los textos ya redactados en inglés y español** y los datos del catálogo (clases de riesgo, etiquetas de carga aérea con tamaños, etiquetas de manejo, 34 colores térmicos con código, ribbons, guía de marcas UN, preguntas frecuentes). Es la fuente de contenido. No reescribas los textos salvo para ajustar largo o corregir.
- `referencia-v1/`: el sitio estático anterior (`index.html`, `es.html`, `styles.css`, `site.js`, `llms.txt`, `robots.txt`, `sitemap.xml`). Sirve para ver la estructura de secciones, los datos estructurados y el armador de pedido por WhatsApp. **El diseño de esa versión se queda corto: no lo copies, supéralo.**
- `catalogo-fotos/`: fotos del folleto impreso del cliente. Son referencia para saber cómo son las etiquetas reales. No se publican en la web.

## Stack y requisitos técnicos

- **Next.js (App Router) + TypeScript + TailwindCSS**, todo generado de forma estática (SSG). Sin base de datos ni autenticación en esta versión.
- **Motion para React** (`motion`, antes Framer Motion) para las animaciones. Si una secuencia de scroll lo pide, GSAP ScrollTrigger es aceptable, pero no cargues dos librerías para lo mismo.
- **`next/font`** para las fuentes (autoalojadas, sin saltos de diseño) y **`next/image`** para las imágenes.
- Contenido en archivos tipados dentro del repo (`/content`): datos en TS o JSON y guías en MDX. Título, H1, descripción y slug de cada página deben poder editarse en el contenido sin tocar componentes.
- Despliegue en **Vercel**.
- Usa la skill **frontend-design** para el diseño.
- Datos de contacto y dominio por variables de entorno, con `.env.example`:
  - `NEXT_PUBLIC_SITE_URL` `[POR CONFIRMAR: dominio]`
  - `NEXT_PUBLIC_WHATSAPP_NUMBER` `[POR CONFIRMAR: WhatsApp de la dueña, solo dígitos con código de país]`
  - `NEXT_PUBLIC_PHONE_E164` y `NEXT_PUBLIC_PHONE_DISPLAY` (provisional: +13057160094, (305) 716-0094)
  - `NEXT_PUBLIC_GA_ID` (opcional) y `GOOGLE_SITE_VERIFICATION` (opcional)
- Crea y mantén `AGENTS.md` con resumen, stack, estructura de carpetas, convenciones y la lista de pendientes del cliente.
- Antes de usar una API de Next.js o de Motion, revisa la documentación de la versión instalada. Los enlaces están en "Documentación".

## Rutas

Inglés en la raíz (es el idioma de la mayoría de búsquedas) y español bajo `/es`. Cada página existe en los dos idiomas, con su propio texto.

| Inglés | Español | Propósito |
|---|---|---|
| `/` | `/es` | Portada: qué vende, catálogo resumido, armador de pedido, contacto |
| `/labels/hazard-class-labels` | `/es/etiquetas/clases-de-riesgo` | Etiquetas de clases de riesgo 4 × 4 in |
| `/labels/hazmat-placards` | `/es/etiquetas/placards-hazmat` | Placards 10.75 × 10.75 in |
| `/labels/lithium-battery-labels` | `/es/etiquetas/baterias-de-litio` | Marcas UN3480, UN3481, UN3090, UN3091 |
| `/labels/air-cargo-labels` | `/es/etiquetas/carga-aerea` | Cargo Aircraft Only, AOG, perecederos, hielo seco, etc. |
| `/labels/handling-labels` | `/es/etiquetas/manejo` | Frágil, este lado arriba, no apilar, etc. |
| `/labels/thermal-labels` | `/es/etiquetas/termicas` | Rollos térmicos en blanco, 34 colores, círculos |
| `/labels/thermal-transfer-ribbons` | `/es/etiquetas/ribbons` | Ribbons Zebra y Datamax |
| `/labels/custom-labels` | `/es/etiquetas/a-medida` | Etiquetas a medida en flexografía |
| `/guides` y `/guides/[slug]` | `/es/guias` y `/es/guias/[slug]` | Guías en MDX (plan de contenidos) |
| `/factory` | `/es/fabrica` | La planta Eti-Label: quién fabrica, dónde, cómo. A esta página enlazará la ficha de Google de Eti-Label |
| `/llms.txt`, `/robots.txt`, `/sitemap.xml` | | Generados desde el contenido |

**Punto de decisión:** los slugs de arriba son provisionales. Camilo está haciendo el estudio de palabras clave y puede cambiarlos o agregar páginas. Deja la creación de una página nueva de producto o guía como "agregar un archivo de contenido". No crees páginas por ciudad (Doral, Medley, Hialeah) hasta que haya contenido propio para cada una: páginas casi iguales con el nombre de la ciudad cambiado perjudican el posicionamiento.

Guías iniciales, con el contenido que ya está en `content.json`: "UN3480 vs UN3481: which lithium battery mark do you need" y "Direct thermal vs thermal transfer labels", cada una con su versión en español.

## Dirección de diseño

Usa la skill frontend-design y **propón primero**: dos parejas tipográficas y una paleta, aplicadas a la portada, para que Camilo elija antes de construir el resto.

Punto de partida, ajustable:

- **Mundo visual:** el de la etiqueta industrial. Papel blanco troquelado sobre su respaldo, rombos de clases de riesgo con sus colores reglamentarios, tipografía condensada de etiqueta de carga, datos en mono como ficha técnica (tamaños, códigos UN, códigos de color).
- **Marca:** verde (el logo de Liji Tech es verde; el tono exacto y el logo están pendientes, deja el verde como token y un espacio para el logo SVG).
- **Los rombos y las etiquetas se dibujan en SVG como componentes**, a partir de `content.json` (`hazardClasses`, `styleKey`), fieles a los colores estándar. Mira `catalogo-fotos/` para el detalle.

Momentos de movimiento que quiero ver (elige y ejecuta bien, no todos a medias):

1. **Portada:** los rombos se "pegan" uno por uno como etiquetas recién despegadas, con resorte, y el titular entra por líneas.
2. **Cinta de rollo:** una tira continua de etiquetas que se desenrolla en horizontal con el avance del scroll.
3. **Catálogo:** al pasar el cursor, la etiqueta levanta una esquina (efecto despegar). Filtro por tipo con transición de layout.
4. **Explorador de colores térmicos:** al elegir un color, un rollo ilustrado en SVG cambia de color y muestra su código.
5. **Buscador de etiquetas:** tres preguntas (qué envía, por qué vía, qué impresora usa) que terminan en una recomendación y en el botón de WhatsApp con el mensaje armado.
6. **Proceso:** secuencia ligada al scroll, del arte a la plancha, a la prensa flexográfica y al rollo terminado, con ilustración SVG.
7. **Transiciones entre páginas** suaves, si la versión instalada lo soporta de forma estable.

Reglas del movimiento: anima solo `transform` y `opacity`; nada de secuestrar el scroll; respeta `prefers-reduced-motion`; y **todo el texto debe estar en el HTML desde el servidor**, visible sin JavaScript. Ninguna sección puede depender de una animación para mostrarse.

Fotos: deja espacios definidos para fotos reales de la planta, la prensa y los rollos (el cliente las enviará). Mientras tanto usa las ilustraciones SVG. No uses fotos de banco ni imágenes generadas que parezcan la planta real.

## Conversión (WhatsApp y llamada)

- Botón de WhatsApp y de llamada visibles en toda página. En celular, barra fija inferior con los dos.
- Enlace: `https://wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=<mensaje codificado>`. Cada botón lleva un mensaje según el contexto (página de producto, idioma).
- **Armador de pedido** (ya existe en `referencia-v1/site.js`): tipo de etiqueta, tamaño, cantidad, "necesito impresión a medida" y notas. Muestra el mensaje y abre WhatsApp. Tráelo como componente y mejóralo.
- Muestra siempre el teléfono también como texto.
- **Medición:** registra como evento cada clic en WhatsApp y en llamada, con la ubicación del botón, la página y el idioma. Usa Vercel Web Analytics con eventos personalizados y, si existe `NEXT_PUBLIC_GA_ID`, también GA4. Pregunta a Camilo cuál usará antes de cablear GA4.

## SEO técnico (obligatorio)

1. `generateMetadata` por página: título (hasta ~60 caracteres), descripción (hasta ~155), canonical absoluto, Open Graph y `alternates.languages` con `en`, `es` y `x-default`.
2. Un solo H1 por página y jerarquía de encabezados correcta. HTML semántico (`header`, `nav`, `main`, `article`, `address`, tablas con `th scope`).
3. Datos estructurados JSON-LD desde el servidor:
   - Todo el sitio: `Organization` (Liji Tech, dirección, `contactPoint` de ventas en inglés y español, `hasOfferCatalog`) y `WebSite`.
   - Producto: `Product` sin precio (no inventes `offers` con precio) y `BreadcrumbList`.
   - Guías: `Article` y `BreadcrumbList`.
   - Preguntas frecuentes: `FAQPage`.
   - `/factory`: `LocalBusiness` para Eti-Label con su dirección. **No** pongas `LocalBusiness` a nombre de Liji Tech: la ficha de Google es de Eti-Label y no deben competir dos negocios locales en la misma dirección.
4. `app/sitemap.ts` con todas las URL y sus alternativas de idioma, y `app/robots.ts`.
5. Imagen Open Graph generada por página (`opengraph-image`).
6. Enlazado interno: la portada enlaza a todas las páginas de producto, cada producto enlaza a productos relacionados y a su guía, y hay migas de pan.
7. Rendimiento en celular: LCP menor a 2,5 s, CLS menor a 0,1, INP menor a 200 ms. Carga diferida de lo que está fuera de pantalla y el mínimo de JavaScript en cliente (Server Components por defecto, `"use client"` solo en lo interactivo).
8. Accesibilidad AA: contraste, foco visible, navegación por teclado, `alt` en imágenes, `aria-label` en los SVG con significado.
9. Página 404 propia con enlaces al catálogo.

## Buscadores de IA

- Contenido que responde directo: cada página de producto abre con una definición de una o dos frases, luego tabla de tamaños y preguntas con respuesta corta.
- `robots` permite `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot` y `Google-Extended`.
- `/llms.txt` generado desde el contenido, como el de `referencia-v1/llms.txt`. Es de bajo costo y lo leen algunas herramientas, pero no reemplaza lo anterior: lo que cuenta es HTML rastreable, datos estructurados y los mismos datos del negocio (nombre, dirección, teléfono) escritos igual en todo el sitio.

## Ejemplos (referencia ajustable)

Portada, de arriba abajo:

```
[Logo]  Labels · Order · Guides · Factory        [ES] [WhatsApp]
-----------------------------------------------------------------
PRINTED IN MIAMI, FL 33166 · ENGLISH / ESPAÑOL
HAZMAT, SHIPPING AND THERMAL LABELS,            [rombos de clases
PRINTED IN MIAMI                                 de riesgo animados]
Texto corto.  [Get a price on WhatsApp] [Call]
Print · Stock · Thermal · Custom  (4 datos tipo ficha)
-----------------------------------------------------------------
Cinta de rollo en movimiento
Catálogo: 8 tarjetas que enlazan a las páginas de producto
Buscador de etiquetas / armador de pedido  →  WhatsApp
Etiquetas según lo que usted envía (tabla)
A medida: qué enviar para cotizar
Guía rápida de marcas UN (tabla) + enlaces a guías
Preguntas frecuentes
Contacto: WhatsApp, teléfono, dirección de la planta
```

Mensaje de WhatsApp que arma el pedido:

```
Hi Liji Tech, I need a price.
Label: Lithium battery marks
Size: 4.5 x 5 in
Quantity: 12
Custom printing: yes
Notes: UN3481, deliver to 33166
```

JSON-LD de una página de producto (sin precio):

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lithium battery marks UN3480, UN3481, UN3090, UN3091",
  "description": "…",
  "brand": { "@type": "Brand", "name": "Liji Tech" },
  "manufacturer": { "@type": "Organization", "name": "Eti-Label Inc." }
}
```

## Documentación

- Índice de la documentación de Next.js para agentes: https://nextjs.org/docs/llms.txt
- Metadata: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Robots: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Imagen Open Graph: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- JSON-LD, internacionalización, `next/font` y `next/image`: búscalos en el índice de arriba según la versión instalada.
- Motion para React: https://motion.dev/docs/react
- Animaciones de scroll con Motion: https://motion.dev/docs/react-scroll-animations y https://motion.dev/docs/react-use-scroll
- Versiones por idioma (hreflang), Google: https://developers.google.com/search/docs/specialty/international/localized-versions
- Datos estructurados, Google: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Vocabulario de datos estructurados: https://schema.org
- Formato llms.txt: https://llmstxt.org
- Eventos personalizados de Vercel Analytics: https://vercel.com/docs/analytics/custom-events
- Enlace directo a un chat de WhatsApp: el formato es `https://wa.me/<número>?text=<texto>`. No tengo el enlace exacto de la ayuda oficial; verifícalo en https://faq.whatsapp.com buscando "click to chat".

## Restricciones (qué NO hacer)

- **No inventes nada sobre el negocio:** ni testimonios, ni reseñas, ni clientes, ni cifras, ni años de experiencia, ni certificaciones, ni precios, ni mínimos, ni tiempos de entrega. Si falta un dato, deja un pendiente en `AGENTS.md` y pregunta.
- **No afirmes cumplimiento normativo** (49 CFR, IATA, IMDG) hasta que el cliente lo confirme. La guía de marcas lleva la nota de "solo como referencia" que ya está en `content.json`.
- No escribas el número de WhatsApp, el teléfono ni el dominio en el código: van por variables de entorno.
- No uses logos de terceros (Zebra, Datamax, WhatsApp, IATA). Los nombres en texto sí. Para WhatsApp, un ícono genérico de chat.
- No copies textos ni imágenes de competidores.
- El texto dentro de las etiquetas dibujadas va en inglés, como se imprimen. En español se trata al lector de "usted".
- No agregues formularios que envíen datos a un servidor en esta versión. El único canal es WhatsApp y llamada. Deja previsto, sin construir, un formulario con Resend para una fase posterior.
- No dejes texto de relleno ni secciones vacías.
- No sacrifiques rendimiento por animación. Si un efecto baja la nota de Lighthouse en celular, simplifícalo.
- No despliegues a producción ni conectes el dominio sin confirmación explícita de Camilo.

## Antes de escribir código

1. Lee `base-liji-tech/` completo y resume en diez líneas qué entendiste del negocio y del contenido.
2. Confirma el stack y pregunta lo pendiente: dominio, número de WhatsApp, logo y verde, si ya hay fotos, y qué herramienta de medición usar.
3. Propón la estructura de carpetas y el `AGENTS.md`.
4. Presenta la dirección de diseño (dos parejas tipográficas y la paleta) sobre la portada y espera la elección de Camilo.
5. Orden de construcción: sistema de diseño y componentes de etiquetas → portada en inglés y español → páginas de producto → fábrica → guías → SEO final (sitemap, robots, llms.txt, imágenes Open Graph) → medición.

## Listo cuando

- Lighthouse en celular: 95 o más en SEO y accesibilidad, 90 o más en rendimiento.
- Al ver el código fuente de cualquier página, sin JavaScript, están el texto completo, el JSON-LD y las etiquetas `hreflang`.
- El JSON-LD pasa el validador de schema.org y la prueba de resultados enriquecidos de Google sin errores.
- Cada página tiene su par en el otro idioma y el cambio de idioma lleva a la página equivalente.
- Todos los botones de WhatsApp abren el chat con el mensaje correcto y registran su evento.
- `AGENTS.md` lista lo que quedó pendiente del cliente.
