import type { Letter, Photo } from "./types";

/** Carta de bienvenida del prólogo. */
export const prologueLetter: Letter = {
  to: "Para ti,",
  body: [
    "Hay historias que no se escriben en un solo lugar ni con una sola voz. Esta la escribimos entre todos, desde Monomarcas, Desarrollo & UX, Multimarca, Marketing y Smartsale. Cada equipo guarda momentos distintos, pero todos compartimos algo en común: haber coincidido contigo en este capítulo de nuestras vidas.",
    "Entre estas páginas encontrarás fotografías, palabras, anécdotas, momentos que todavía nos hacen sonreír y recuerdos que quizás nunca habíamos encontrado la forma de contarte.",
    "No es un informe, no tiene cifras ni resultados que presentar. Es algo mucho más nuestro: un pedacito de todo lo que vivimos, aprendimos y construimos a tu lado.",
    "Queremos que recorras estas páginas sin prisa, que sonrías al reconocer algún momento, que te sorprendas con alguna historia y que, de vez en cuando, encuentres en estas palabras un motivo para recordar lo especial que fue compartir este camino contigo.",
    "Porque los proyectos terminan, los equipos cambian y los caminos toman nuevas direcciones, pero hay personas que dejan huellas que no se borran con el tiempo.",
    "Esta historia también es tuya. Y siempre tendrás un lugar entre sus páginas.",
  ],
  signature: "Tus equipos",
  date: "Ecommerce, 2026",
  breakAfter: 3,
};

/**
 * La foto de todo el equipo. Va sola en el pliego que sigue a la carta:
 * la carta dice "somos cerca de veinte personas" y al pasar la página aparecen.
 */
export const prologuePhoto: Photo = {
  src: "/fotos/prologo/equipo-navidad.webp",
  alt: "El equipo reunido en una sesión de fotos navideña: unas veinte personas sonriendo, con diademas de renos, gorros de Papá Noel y camisetas rojas, algunas de pie y otras sentadas en el suelo.",
  caption: "todos, alguna vez, en la misma foto",
  ratio: "wide",
};

/** Línea manuscrita al pie de la página del título, antes de pasar a la foto. */
export const prologueTurnNote = "pasa la página: ahí estamos todos";
