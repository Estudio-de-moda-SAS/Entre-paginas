import type { Section } from "./types";

/** Datos generales del libro. */
export const book = {
  title: "Entre páginas",
  tagline: "Las historias que escribimos contigo.",
  /** Quién firma el libro, en conjunto. */
  authors: "Tus equipos de Ecommerce",
  /** Texto que da la vuelta al sello de la portada. */
  stamp: ["Equipo Ecommerce", "Entre páginas"],
  /**
   * Su nombre, tal como irá escrito a mano en el ex libris (interior de la tapa).
   * Vacío: se deja la línea en blanco.
   */
  honoree: "Valentina Echeverry",
  /**
   * Mientras sea `true`, el libro muestra la marca "versión de demostración".
   * Pasar a `false` cuando todo el contenido provisional esté reemplazado.
   */
  demoMode: false,
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
    slug: "lo-que-quisimos-decirte",
    href: "/capitulos/lo-que-quisimos-decirte/",
    kind: "capitulo",
    numeral: "I",
    title: "Lo que quisimos decirte",
    subtitle: "Un mensaje de cada uno, con todo lo que quería decirte.",
    folio: 11,
  },
  {
    slug: "entre-risas",
    href: "/capitulos/entre-risas/",
    kind: "capitulo",
    numeral: "II",
    title: "Entre risas",
    subtitle: "Las pequeñas cosas que hicieron grande esta historia.",
    folio: 27,
  },
  {
    slug: "epilogo",
    href: "/capitulos/epilogo/",
    kind: "final",
    title: "Epílogo",
    subtitle: "Las mejores historias nunca terminan.",
    folio: 51,
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
