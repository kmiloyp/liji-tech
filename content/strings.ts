/**
 * Textos de interfaz y de la portada, versión 2 (aprobada en la propuesta).
 * Basados en base-liji-tech/content.json. Sin datos inventados:
 * nada de precios, mínimos, plazos, cifras ni cumplimiento normativo.
 * {tel} y {addr} se reemplazan al renderizar.
 */
import type { Lang } from "./catalog";

const en = {
  lang: "en" as Lang,
  locale: "en_US",
  langName: "English",
  otherLangLabel: "Ver en español",
  otherLangShort: "ES",
  skip: "Skip to content",
  nav: { labels: "Labels", order: "Order", guides: "Guides", factory: "Factory" },
  navAria: "Main",
  wa: "WhatsApp",
  call: "Call",
  waDefault: "Hi Liji Tech, I need a price for labels.",
  callUs: "Call {tel}",
  logoAlt: "Liji Tech, home",
  breadcrumbHome: "Home",
  breadcrumbAria: "Breadcrumb",

  home: {
    title: "Hazmat, Cargo & Thermal Labels in Miami | Liji Tech",
    description:
      "Hazmat labels and placards, lithium battery marks, air cargo and handling labels, thermal rolls and custom flexo labels, printed in Miami. Price by WhatsApp.",
    eyebrow: "Made in Miami, FL 33166",
    eyebrowLang: "Hablamos español",
    h1: ["Hazmat, cargo", "and thermal labels,", "fresh off our press"],
    lede: "Made at the Eti-Label plant by MIA, for the people who move freight. Send a photo of the label you use today and we match it.",
    ctaWa: "Get a price on WhatsApp",
    heroArt:
      "Hazard class labels: flammable gas, non-flammable gas, oxidizer, toxic, flammable solid, flammable liquid, organic peroxide, corrosive and class 9.",
    facts: [
      ["Printed here", "Flexo, in our own plant"],
      ["Ready-made", "Hazmat, air cargo, handling"],
      ["34 colors", "Thermal rolls and circles"],
      ["Made to order", "Your size, your color, your words"],
    ] as [string, string][],
    rollAria: "A roll of labels from the catalog",
    catH: "Pick your label",
    catP: "Catalog sizes below. Need another size or other wording? We print it for you.",
    filterAria: "Filter labels by type",
    filters: { all: "All", hazmat: "Hazmat", cargo: "Cargo and handling", thermal: "Thermal", custom: "Custom" },
    seeSizes: "See sizes",
    finderH: "Not sure what to order?",
    finderP: "Three quick questions. You get a starting list and a WhatsApp message ready to send.",
    orderH: "Your whole order, in one WhatsApp",
    orderP: "Fill in what you know. We'll handle the rest.",
    steps: ["Pick the label", "Add size and quantity", "Hit send. We reply with price and lead time"],
    whoH: "What are you shipping?",
    whoP: "Find your trade and see the labels it usually calls for. Not sure? Send us your packing list.",
    whoHead: ["You ship", "Labels people in your trade ask for"],
    customH: "Your brand on every roll",
    customP:
      "Product labels, branded shipping labels, color codes for your warehouse. Flexo prints from a plate made for your design, so your tenth reorder matches the first roll.",
    needH: "Send us four things",
    customCta: "Quote a custom label",
    guideH: "UN3480 or UN3481? A quick cheat sheet.",
    guideP: "The marks people ask us about most, in plain words.",
    guideHead: ["Mark", "What it identifies", "Size in catalog"],
    readGuides: "Read the guides",
    faqH: "Before you order",
    contactH: "Send a photo. Get a price.",
    contactP: "WhatsApp is fastest. Prefer to talk? Call {tel}.",
    plant: "The plant",
    seeFactory: "See the plant",
  },

  who: [
    ["Freight forwarders and consolidators", "Hazard class labels, lithium battery marks, Overpack, Limited Quantity, color thermal rolls"],
    ["Customs brokers, 3PLs and warehouses", "Handling labels, color thermal rolls, ribbons, Mixed Carton and Partial Carton"],
    ["Electronics exporters", "UN3480, UN3481, UN3090 and UN3091 marks, Class 9 label, Cargo Aircraft Only"],
    ["Perfume and cosmetics exporters", "Class 3 Flammable Liquid, UN1266 perfumery products, Limited Quantity"],
    ["Flowers, seafood and other perishables", "Perishable, Time & Temperature Sensitive, Dry Ice UN1845, This Side Up"],
    ["Aircraft parts suppliers", "Rush AOG, Fragile, Delicate Instruments"],
    ["Food, beverage and consumer brands", "Custom flexographic product labels"],
  ] as [string, string][],
  need: [
    "Label size",
    "Quantity",
    "Where it sticks: box, bottle, freezer, outdoors",
    "Your artwork, or a photo of the label you use now",
  ],
  markNote:
    "Reference only. The shipper classifies the goods and chooses the marks under the current IATA Dangerous Goods Regulations, the IMDG Code and 49 CFR.",
  faq: [
    ["Where are the labels made?", "At the Eti-Label plant, {addr}. Liji Tech is the direct sales line of that plant."],
    [
      "Which labels can I order?",
      "Hazard class labels and placards, lithium battery marks, air cargo labels, handling labels, blank thermal labels in 34 colors, thermal transfer ribbons for Zebra and Datamax printers, and custom flexographic labels.",
    ],
    [
      "Do you print custom labels?",
      "Yes. Send the size, the quantity and your artwork, or a photo of the label you use now, and we quote it.",
    ],
    [
      "Which lithium battery mark do I need?",
      "UN3480 is for lithium ion batteries shipped on their own and UN3481 for lithium ion batteries in or with equipment. UN3090 and UN3091 cover the same two cases for lithium metal batteries. Your dangerous goods classification decides which one applies.",
    ],
    [
      "What is the difference between direct thermal and thermal transfer labels?",
      "Direct thermal labels print with heat alone and suit short-life uses such as shipping labels. Thermal transfer labels print with a ribbon, last longer and resist rubbing.",
    ],
    ["Which ribbons do you carry?", "Zebra 110 mm × 74 m, Zebra 110 mm × 450 m and Datamax 110 mm × 360 m."],
    [
      "Can I pick up my order at the plant?",
      "Yes, at {addr}. The plant is open Monday to Thursday from 7:30 am to 5:00 pm and Friday from 7:30 am to 4:00 pm.",
    ],
    [
      "How long does an order take?",
      "It depends on the label. A new label first goes through artwork, design and plate. Once everything is ready at the plant, delivery takes about one week.",
    ],
    ["Can I send a purchase order?", "Yes. Email your purchase order to {email}."],
    ["How can I pay?", "By Zelle or by check."],
    [
      "How do I get a price?",
      "Send a WhatsApp message or call {tel} with the label, the size and the quantity. We answer in English or Spanish.",
    ],
  ] as [string, string][],

  order: {
    type: "Label type",
    size: "Size",
    sizePh: "4 × 4 in",
    qty: "Quantity (rolls)",
    qtyPh: "10",
    custom: "I need custom printing",
    notes: "Notes",
    notesPh: "Text, color, printer model, delivery ZIP",
    msg: "Your message",
    send: "Send on WhatsApp",
    hi: "Hi Liji Tech, I need a price.",
    mType: "Label",
    mSize: "Size",
    mQty: "Quantity",
    mCustom: "Custom printing: yes",
    mNotes: "Notes",
    types: [
      "Hazard class labels",
      "Hazmat placards",
      "Lithium battery marks",
      "Air cargo labels",
      "Handling labels",
      "Blank thermal labels",
      "Thermal transfer ribbons",
      "Custom printed labels",
      "Other",
    ],
  },

  finder: {
    q1: "What do you ship?",
    q2: "How does it travel?",
    q3: "Which printer do you use for labels?",
    via: ["By air", "By ground or ocean"],
    printers: ["Direct thermal", "Thermal transfer (with ribbon)", "No printer, or not sure"],
    back: "Back",
    restart: "Start over",
    stepOf: "Question {n} of 3",
    resultH: "A starting list for you",
    resultNote: "A starting point, not a classification. Your dangerous goods classification decides the final labels.",
    alsoSee: "Pages to check",
    send: "Ask for these on WhatsApp",
    waHi: "Hi Liji Tech, I need a price.",
    waShip: "I ship",
    waVia: "Via",
    waPrinter: "Printer",
    waLabels: "Labels I think I need",
  },

  product: {
    sizesH: "Sizes and options",
    faqH: "Quick answers",
    relatedH: "Related labels",
    guideH: "Read before you order",
    askPrice: "Get a price on WhatsApp",
    colorsH: "34 colors, pick yours",
    colorsP: "Choose a color to see it on the roll. Screen colors are approximate.",
    groupBoth: "Direct thermal or thermal transfer",
    groupTransfer: "Thermal transfer only",
    code: "Code",
    ref: "Reference",
    colorAria: "Thermal label colors",
    rollAlt: "Blank thermal label roll in color {code}",
    processH: "From your art to your roll",
  },

  process: [
    ["Art", "We take your artwork, or a photo of the label you use now, and prepare it for print."],
    ["Plate", "A flexographic plate is made for your design. It is what keeps every reorder the same."],
    ["Press", "The plate prints your labels on the flexo press, color by color."],
    ["Roll", "Labels are cut and wound on rolls, ready for your boxes or your printer."],
  ] as [string, string][],

  plant: {
    hoursH: "Plant hours",
    hours: ["Monday to Thursday", "7:30 am to 5:00 pm", "Friday", "7:30 am to 4:00 pm"],
    pickup: "You can pick up your order at the plant.",
    poH: "Purchase orders",
    poP: "Email your purchase order to",
    pay: "Payment by Zelle or check.",
    leadH: "Lead time",
    leadP: "A new label first goes through artwork, design and plate. Once everything is ready at the plant, delivery takes about one week.",
  },

  factory: {
    title: "Eti-Label Plant in Miami, FL 33166 | Liji Tech",
    description:
      "Liji Tech labels are made by Eti-Label Inc. at 6977 NW 82nd Ave, Miami, FL 33166: flexographic printing of hazmat, cargo, handling and custom labels.",
    name: "Factory",
    h1: "The Eti-Label plant, Miami",
    lede: "Every Liji Tech label is printed by Eti-Label Inc. in its own plant near Miami International Airport. Liji Tech is the direct sales line of that plant.",
    since: "Eti-Label has printed labels in Miami since 2000. Liji Tech has sold them directly since 2021.",
    whatH: "What we make here",
    whatP: "Hazard class labels and placards, lithium battery marks, air cargo and handling labels, and custom labels in flexography. We also supply blank thermal labels and ribbons.",
    howH: "How a label is made",
    visitH: "Find us",
    visitP: "Orders and questions by WhatsApp, phone or email, in English or Spanish.",
    mapLink: "Open in Google Maps",
  },

  guidesIndex: {
    title: "Label Guides for Shippers | Liji Tech",
    description:
      "Short, plain guides on lithium battery marks, hazmat labels and thermal labels, written by the label printer. English and Spanish.",
    name: "Guides",
    h1: "Label guides",
    lede: "Short answers to the questions shippers ask us most.",
    read: "Read the guide",
    updated: "Updated",
  },

  notFound: {
    h1: "This label fell off the roll",
    p: "The page you are looking for does not exist. Try the catalog:",
    home: "Go to the home page",
  },

  footer: {
    tagline: "Hazmat, cargo and thermal labels, made in Miami.",
    made: "Labels made by Eti-Label Inc.",
    labelsH: "Labels",
    moreH: "More",
    contactH: "Contact",
    langsH: "Languages",
  },
};

export type Strings = typeof en;

const es: Strings = {
  lang: "es",
  locale: "es_US",
  langName: "Español",
  otherLangLabel: "View in English",
  otherLangShort: "EN",
  skip: "Ir al contenido",
  nav: { labels: "Etiquetas", order: "Pedir", guides: "Guías", factory: "Fábrica" },
  navAria: "Principal",
  wa: "WhatsApp",
  call: "Llamar",
  waDefault: "Hola Liji Tech, necesito precio de etiquetas.",
  callUs: "Llame al {tel}",
  logoAlt: "Liji Tech, inicio",
  breadcrumbHome: "Inicio",
  breadcrumbAria: "Ruta de navegación",

  home: {
    title: "Etiquetas hazmat, de carga y térmicas en Miami | Liji Tech",
    description:
      "Etiquetas de mercancía peligrosa, baterías de litio, carga aérea y manejo, rollos térmicos y etiquetas a medida, impresas en Miami. Precio por WhatsApp.",
    eyebrow: "Hecho en Miami, FL 33166",
    eyebrowLang: "We speak English",
    h1: ["Etiquetas hazmat,", "de carga y térmicas,", "recién salidas de la prensa"],
    lede: "Hechas en la planta Eti-Label, cerca del aeropuerto de Miami, para quienes mueven carga. Mándenos una foto de la etiqueta que usa hoy y se la igualamos.",
    ctaWa: "Cotice por WhatsApp",
    heroArt:
      "Etiquetas de clases de riesgo: gas inflamable, gas no inflamable, comburente, tóxico, sólido inflamable, líquido inflamable, peróxido orgánico, corrosivo y clase 9.",
    facts: [
      ["Impreso aquí", "Flexografía, en planta propia"],
      ["Listas para pedir", "Hazmat, carga aérea, manejo"],
      ["34 colores", "Rollos térmicos y círculos"],
      ["A su medida", "Su tamaño, su color, su texto"],
    ],
    rollAria: "Un rollo de etiquetas del catálogo",
    catH: "Elija su etiqueta",
    catP: "Abajo están los tamaños del catálogo. ¿Necesita otro tamaño u otro texto? Se lo imprimimos.",
    filterAria: "Filtrar etiquetas por tipo",
    filters: { all: "Todas", hazmat: "Hazmat", cargo: "Carga y manejo", thermal: "Térmicas", custom: "A medida" },
    seeSizes: "Ver tamaños",
    finderH: "¿No sabe qué pedir?",
    finderP: "Tres preguntas rápidas. Recibe una lista para empezar y un mensaje de WhatsApp listo para enviar.",
    orderH: "Todo su pedido en un solo WhatsApp",
    orderP: "Llene lo que sepa. Del resto nos encargamos nosotros.",
    steps: ["Elija la etiqueta", "Agregue tamaño y cantidad", "Envíe. Le respondemos con precio y tiempo de entrega"],
    whoH: "¿Qué está enviando?",
    whoP: "Busque su tipo de carga y vea las etiquetas que suele llevar. ¿No está seguro? Mándenos su lista de empaque.",
    whoHead: ["Usted envía", "Etiquetas que se piden en su rubro"],
    customH: "Su marca en cada rollo",
    customP:
      "Etiquetas de producto, etiquetas de envío con su marca y códigos de color para su bodega. La flexografía imprime con una plancha hecha para su diseño: el décimo pedido sale igual al primer rollo.",
    needH: "Envíenos cuatro cosas",
    customCta: "Cotizar etiqueta a medida",
    guideH: "¿UN3480 o UN3481? Una guía rápida.",
    guideP: "Las marcas por las que más nos preguntan, en palabras sencillas.",
    guideHead: ["Marca", "Qué identifica", "Tamaño en catálogo"],
    readGuides: "Leer las guías",
    faqH: "Antes de pedir",
    contactH: "Mande una foto. Reciba el precio.",
    contactP: "WhatsApp es lo más rápido. ¿Prefiere hablar? Llame al {tel}.",
    plant: "La planta",
    seeFactory: "Ver la planta",
  },

  who: [
    ["Agentes de carga y consolidadores", "Etiquetas de clases de riesgo, marcas de baterías de litio, Overpack, cantidad limitada, rollos térmicos de color"],
    ["Agentes de aduana, 3PL y bodegas", "Etiquetas de manejo, rollos térmicos de color, ribbons, caja mixta y caja parcial"],
    ["Exportadores de electrónica", "Marcas UN3480, UN3481, UN3090 y UN3091, etiqueta Clase 9, Cargo Aircraft Only"],
    ["Exportadores de perfumería y cosmética", "Líquido inflamable Clase 3, productos de perfumería UN1266, cantidad limitada"],
    ["Flores, pescado y otros perecederos", "Perecedero, sensible a tiempo y temperatura, hielo seco UN1845, este lado arriba"],
    ["Proveedores de repuestos de aviación", "Rush AOG, frágil, instrumentos delicados"],
    ["Marcas de alimentos, bebidas y consumo", "Etiquetas de producto a medida en flexografía"],
  ],
  need: [
    "Tamaño de la etiqueta",
    "Cantidad",
    "Dónde se pega: caja, botella, congelador, exterior",
    "Su arte, o una foto de la etiqueta que usa hoy",
  ],
  markNote:
    "Solo como referencia. El expedidor clasifica la mercancía y elige las marcas según la edición vigente de la Reglamentación sobre Mercancías Peligrosas de IATA, el Código IMDG y el 49 CFR.",
  faq: [
    ["¿Dónde se fabrican las etiquetas?", "En la planta de Eti-Label, {addr}. Liji Tech es la línea de venta directa de esa planta."],
    [
      "¿Qué etiquetas puedo pedir?",
      "Etiquetas y placards de clases de riesgo, marcas de baterías de litio, etiquetas de carga aérea, etiquetas de manejo, etiquetas térmicas en blanco en 34 colores, ribbons de transferencia térmica para impresoras Zebra y Datamax, y etiquetas a medida en flexografía.",
    ],
    [
      "¿Imprimen etiquetas a medida?",
      "Sí. Envíe el tamaño, la cantidad y su arte, o una foto de la etiqueta que usa hoy, y se la cotizamos.",
    ],
    [
      "¿Qué marca de baterías de litio necesito?",
      "UN3480 es para baterías de ion de litio enviadas solas y UN3481 para baterías de ion de litio dentro de un equipo o con él. UN3090 y UN3091 cubren los mismos dos casos para baterías de metal litio. La clasificación de su mercancía peligrosa define cuál aplica.",
    ],
    [
      "¿Qué diferencia hay entre térmica directa y transferencia térmica?",
      "La térmica directa imprime solo con calor y sirve para usos de vida corta, como etiquetas de envío. La transferencia térmica imprime con ribbon, dura más y resiste el roce.",
    ],
    ["¿Qué ribbons manejan?", "Zebra 110 mm × 74 m, Zebra 110 mm × 450 m y Datamax 110 mm × 360 m."],
    [
      "¿Puedo recoger mi pedido en la planta?",
      "Sí, en {addr}. La planta atiende de lunes a jueves de 7:30 a. m. a 5:00 p. m. y los viernes de 7:30 a. m. a 4:00 p. m.",
    ],
    [
      "¿Cuánto tarda un pedido?",
      "Depende de la etiqueta. Una etiqueta nueva primero pasa por arte, diseño y plancha. Con todo listo en la planta, la entrega toma alrededor de una semana.",
    ],
    ["¿Puedo enviar una orden de compra?", "Sí. Envíe su orden de compra por correo a {email}."],
    ["¿Cómo puedo pagar?", "Con Zelle o con cheque."],
    [
      "¿Cómo pido un precio?",
      "Envíe un mensaje de WhatsApp o llame al {tel} con la etiqueta, el tamaño y la cantidad. Atendemos en español o inglés.",
    ],
  ],

  order: {
    type: "Tipo de etiqueta",
    size: "Tamaño",
    sizePh: "4 × 4 in",
    qty: "Cantidad (rollos)",
    qtyPh: "10",
    custom: "Necesito impresión a medida",
    notes: "Notas",
    notesPh: "Texto, color, modelo de impresora, ZIP de entrega",
    msg: "Su mensaje",
    send: "Enviar por WhatsApp",
    hi: "Hola Liji Tech, necesito un precio.",
    mType: "Etiqueta",
    mSize: "Tamaño",
    mQty: "Cantidad",
    mCustom: "Impresión a medida: sí",
    mNotes: "Notas",
    types: [
      "Etiquetas de clases de riesgo",
      "Placards hazmat",
      "Marcas de baterías de litio",
      "Etiquetas de carga aérea",
      "Etiquetas de manejo",
      "Etiquetas térmicas en blanco",
      "Ribbons de transferencia térmica",
      "Etiquetas impresas a medida",
      "Otra",
    ],
  },

  finder: {
    q1: "¿Qué envía?",
    q2: "¿Cómo viaja?",
    q3: "¿Qué impresora usa para etiquetas?",
    via: ["Por avión", "Por tierra o mar"],
    printers: ["Térmica directa", "Transferencia térmica (con ribbon)", "No tengo, o no sé"],
    back: "Atrás",
    restart: "Empezar de nuevo",
    stepOf: "Pregunta {n} de 3",
    resultH: "Una lista para empezar",
    resultNote: "Es un punto de partida, no una clasificación. La clasificación de su mercancía peligrosa define las etiquetas finales.",
    alsoSee: "Páginas para revisar",
    send: "Pedir estas por WhatsApp",
    waHi: "Hola Liji Tech, necesito un precio.",
    waShip: "Envío",
    waVia: "Vía",
    waPrinter: "Impresora",
    waLabels: "Etiquetas que creo necesitar",
  },

  product: {
    sizesH: "Tamaños y opciones",
    faqH: "Respuestas rápidas",
    relatedH: "Etiquetas relacionadas",
    guideH: "Lea antes de pedir",
    askPrice: "Cotice por WhatsApp",
    colorsH: "34 colores, elija el suyo",
    colorsP: "Elija un color para verlo en el rollo. Los colores en pantalla son aproximados.",
    groupBoth: "Térmica directa o transferencia térmica",
    groupTransfer: "Solo transferencia térmica",
    code: "Código",
    ref: "Referencia",
    colorAria: "Colores de etiquetas térmicas",
    rollAlt: "Rollo de etiquetas térmicas en blanco, color {code}",
    processH: "De su arte a su rollo",
  },

  process: [
    ["Arte", "Recibimos su arte, o una foto de la etiqueta que usa hoy, y lo preparamos para imprimir."],
    ["Plancha", "Se hace una plancha flexográfica para su diseño. Es lo que mantiene igual cada repetición."],
    ["Prensa", "La plancha imprime sus etiquetas en la prensa flexográfica, color por color."],
    ["Rollo", "Las etiquetas se cortan y se enrollan, listas para sus cajas o su impresora."],
  ],

  plant: {
    hoursH: "Horario de la planta",
    hours: ["Lunes a jueves", "7:30 a. m. a 5:00 p. m.", "Viernes", "7:30 a. m. a 4:00 p. m."],
    pickup: "Puede recoger su pedido en la planta.",
    poH: "Órdenes de compra",
    poP: "Envíe su orden de compra por correo a",
    pay: "Pago con Zelle o cheque.",
    leadH: "Tiempo de entrega",
    leadP: "Una etiqueta nueva primero pasa por arte, diseño y plancha. Con todo listo en la planta, la entrega toma alrededor de una semana.",
  },

  factory: {
    title: "Planta Eti-Label en Miami, FL 33166 | Liji Tech",
    description:
      "Las etiquetas de Liji Tech las fabrica Eti-Label Inc. en 6977 NW 82nd Ave, Miami, FL 33166: impresión flexográfica de etiquetas hazmat, de carga y a medida.",
    name: "Fábrica",
    h1: "La planta Eti-Label, Miami",
    lede: "Cada etiqueta de Liji Tech la imprime Eti-Label Inc. en su propia planta, cerca del Aeropuerto Internacional de Miami. Liji Tech es la línea de venta directa de esa planta.",
    since: "Eti-Label imprime etiquetas en Miami desde el año 2000. Liji Tech las vende directamente desde 2021.",
    whatH: "Lo que fabricamos aquí",
    whatP: "Etiquetas y placards de clases de riesgo, marcas de baterías de litio, etiquetas de carga aérea y de manejo, y etiquetas a medida en flexografía. También ofrecemos etiquetas térmicas en blanco y ribbons.",
    howH: "Cómo se hace una etiqueta",
    visitH: "Dónde estamos",
    visitP: "Pedidos y preguntas por WhatsApp, teléfono o correo, en español o inglés.",
    mapLink: "Abrir en Google Maps",
  },

  guidesIndex: {
    title: "Guías de etiquetas para exportadores | Liji Tech",
    description:
      "Guías cortas y claras sobre marcas de baterías de litio, etiquetas hazmat y etiquetas térmicas, escritas por el fabricante. En español e inglés.",
    name: "Guías",
    h1: "Guías de etiquetas",
    lede: "Respuestas cortas a lo que más nos preguntan los exportadores.",
    read: "Leer la guía",
    updated: "Actualizada",
  },

  notFound: {
    h1: "Esta etiqueta se despegó del rollo",
    p: "La página que busca no existe. Pruebe en el catálogo:",
    home: "Ir al inicio",
  },

  footer: {
    tagline: "Etiquetas hazmat, de carga y térmicas, hechas en Miami.",
    made: "Etiquetas fabricadas por Eti-Label Inc.",
    labelsH: "Etiquetas",
    moreH: "Más",
    contactH: "Contacto",
    langsH: "Idiomas",
  },
};

export const strings: Record<Lang, Strings> = { en, es };
export const t = (lang: Lang) => strings[lang];

/** Reemplaza {tel} y {addr}. */
export function fill(text: string, vars: Record<string, string>) {
  return text.replace(/\{(\w+)\}/g, (m, k) => vars[k] ?? m);
}

/** Productos que corresponden a cada fila de "who" (mismo orden). */
export const whoProducts: string[][] = [
  ["hazard-class-labels", "lithium-battery-labels", "air-cargo-labels", "thermal-labels"],
  ["handling-labels", "thermal-labels", "thermal-transfer-ribbons"],
  ["lithium-battery-labels", "hazard-class-labels", "air-cargo-labels"],
  ["hazard-class-labels", "air-cargo-labels"],
  ["air-cargo-labels", "handling-labels"],
  ["air-cargo-labels", "handling-labels"],
  ["custom-labels"],
];
