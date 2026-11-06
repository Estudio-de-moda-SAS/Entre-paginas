import type { Section } from "./types";

/** Datos generales del libro. */
export const book = {
  title: "Entre páginas",
  tagline: "Las historias que escribimos contigo.",
  /** Quién firma el libro, en conjunto. */
  authors: "Tus equipos de Ecommerce",
  /** Los cinco equipos, tal como aparecen en el sello de la portada. */
  teams: ["Producto", "Desarrollo & UX", "Marketplace", "Marketing", "Smartsale"],
  /**
   * Su nombre, tal como irá escrito a mano en el ex libris (interior de la tapa).
   * Vacío: se deja la línea en blanco.
   */
  honoree: "Valentina Echeverry",
  /**
   * Mientras sea `true`, el libro muestra la marca "versión de demostración".
   * Pasar a `false` cuando todo el contenido provisional esté reemplazado.
   */
  demoMode: true,
};

/** El libro completo, en orden de lectura. */
export const sections: Section[] = [
  {
    slug: "prologo",
    href: "/prologo/",
    kind: "preliminar",
    title: "Prólogo",
    subtitle: "Antes de comenzar esta historia.",
    folio: 5,
  },
  {
    slug: "indice",
    href: "/indice/",
    kind: "preliminar",
    title: "Índice",
    subtitle: "Las páginas de esta historia.",
    folio: 9,
  },
  {
    slug: "producto",
    href: "/capitulos/producto/",
    kind: "capitulo",
    numeral: "I",
    title: "Producto",
    subtitle: "Las ideas también tienen historias.",
    folio: 11,
  },
  {
    slug: "desarrollo",
    href: "/capitulos/desarrollo/",
    kind: "capitulo",
    numeral: "II",
    title: "Desarrollo & UX",
    subtitle: "Entre códigos, retos y grandes ideas.",
    folio: 23,
  },
  {
    slug: "marketplace",
    href: "/capitulos/marketplace/",
    kind: "capitulo",
    numeral: "III",
    title: "Marketplace",
    subtitle: "El arte de conectar oportunidades.",
    folio: 37,
  },
  {
    slug: "marketing",
    href: "/capitulos/marketing/",
    kind: "capitulo",
    numeral: "IV",
    title: "Marketing",
    subtitle: "Cuando las ideas encuentran su voz.",
    folio: 49,
  },
  {
    slug: "smartsale",
    href: "/capitulos/smartsale/",
    kind: "capitulo",
    numeral: "V",
    title: "Smartsale",
    subtitle: "Las personas detrás de cada historia.",
    folio: 61,
  },
  {
    slug: "todos",
    href: "/capitulos/todos/",
    kind: "capitulo",
    numeral: "VI",
    title: "Todos",
    subtitle: "Las pequeñas cosas que hicieron grande esta historia.",
    folio: 73,
  },
  {
    slug: "notas-personales",
    href: "/capitulos/notas-personales/",
    kind: "capitulo",
    numeral: "VII",
    title: "Notas personales",
    subtitle: "Lo que nunca quisimos dejar sin escribir.",
    folio: 85,
  },
  {
    slug: "epilogo",
    href: "/capitulos/epilogo/",
    kind: "final",
    title: "Epílogo",
    subtitle: "Las mejores historias nunca terminan.",
    folio: 97,
  },
];

export function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}

export function getNextSection(slug: string) {
  const i = sections.findIndex((s) => s.slug === slug);
  return i >= 0 ? sections[i + 1] : undefined;
}

export function getPrevSection(slug: string) {
  const i = sections.findIndex((s) => s.slug === slug);
  return i > 0 ? sections[i - 1] : undefined;
}

/** Secciones que viven en /capitulos/[slug]. */
export const chapterSections = sections.filter((s) => s.href.startsWith("/capitulos/"));
