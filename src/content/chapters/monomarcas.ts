import type { Chapter } from "../types";

/**
 * Capítulo I · Monomarcas
 *
 * Abre con la carta del equipo (título y carta en dos hojas) y sigue con
 * "Lo que quisimos decirte". Todo el texto es real.
 */
export const monomarcas: Chapter = {
  slug: "monomarcas",
  blocks: [
    {
      // Carta del equipo como apertura del capítulo.
      type: "despedida",
      letter: {
        body: [
          "Trabajar contigo ha sido una experiencia de mucho aprendizaje. Nos llevamos conocimientos, experiencias y muchas enseñanzas que seguramente seguiremos poniendo en práctica en nuestro camino profesional.",
          "Gracias por guiarnos, por compartir lo que sabías, por tener la disposición de enseñarnos y por impulsarnos a asumir nuevos retos. Valoramos mucho todo lo que aportaste a nuestro equipo y el crecimiento que nos ayudaste a construir durante este tiempo.",
          "Esperamos que esta nueva etapa venga llena de oportunidades, proyectos bonitos y muchos éxitos. ¡Te deseamos lo mejor y gracias por todo lo que nos dejaste!",
        ],
        breakAfter: 2,
        closing: "Con mucho cariño,",
        signature: "Tu equipo Monomarca!! 🩷",
      },
    },
    {
      type: "notas",
      heading: "Lo que quisimos decirte",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      notes: [
        // Mensajes reales (Kathe, Aleja, Valen R., Tani), partidos en notas
        // pequeñas y mezclados para que cada uno aparezca como sorpresa.
        {
          id: "mono-kathe-1",
          paper: "carta",
          from: "Kathe",
          body: "Quiero expresarle agradecimiento por la oportunidad, confianza y por cada enseñanza que me brindó.",
        },
        {
          id: "mono-aleja-1",
          paper: "adhesiva",
          from: "Aleja",
          body: "Un gusto haber compartido todo este tiempo en un gran equipo.",
        },
        {
          id: "mono-valen-1",
          paper: "cuaderno",
          from: "Valen R.",
          body: "Valen, quiero agradecerte por la oportunidad de haber hecho parte de tu equipo y por todo lo que me aportaste durante este tiempo en Estudio de Moda.",
        },
        {
          id: "mono-tani-1",
          paper: "kraft",
          from: "Tani",
          body: "Me quedaré con todas las risas, almuercito, comida rica, uno que otro trago por ahí que compartimos y tus compritas en VTC.",
        },
        {
          id: "mono-kathe-2",
          paper: "rasgado",
          from: "Kathe",
          body: "Valoro mucho la oportunidad de aprender, crecer profesionalmente y asumir nuevos retos bajo su liderazgo.",
        },
        {
          id: "mono-valen-2",
          paper: "carta",
          from: "Valen R.",
          body: "Gracias por la confianza, por permitirme crecer profesionalmente, asumir nuevos retos y aprender tantas cosas en el camino.",
        },
        {
          id: "mono-aleja-2",
          paper: "adhesiva",
          from: "Aleja",
          body: "Agradecida por cada uno de los aprendizajes y el conocimiento que he tenido, por las oportunidades y la confianza.",
        },
        {
          id: "mono-kathe-3",
          paper: "cuaderno",
          from: "Kathe",
          body: "Gracias por su paciencia y disposición.",
        },
        {
          id: "mono-valen-3",
          paper: "kraft",
          from: "Valen R.",
          body: "Te deseo muchísimos éxitos en esta nueva etapa. Estoy segura de que vendrán grandes oportunidades y nuevos retos para ti.",
        },
        {
          id: "mono-tani-2",
          paper: "rasgado",
          from: "Tani",
          body: "¡Gracias por tanto!!",
        },
        {
          id: "mono-valen-4",
          paper: "carta",
          from: "Valen R.",
          body: "Espero sigas cumpliendo tus proyectos y sueños.",
        },
        {
          id: "mono-aleja-3",
          paper: "adhesiva",
          from: "Aleja",
          body: "Deseo de corazón que la felicidad te acompañe y el éxito nunca te suelte. Un fuerte abrazo ✨",
        },
        {
          id: "mono-kathe-4",
          paper: "cuaderno",
          from: "Kathe",
          body: "Sin duda, sus consejos de mejoras y ejemplo aportaron mucho a mi crecimiento personal y profesional.",
        },
        {
          id: "mono-valen-5",
          paper: "kraft",
          from: "Valen R.",
          body: "¡Gracias por todo! Te deseo siempre lo mejor.",
        },
      ],
    },
  ],
};
