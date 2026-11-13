import type { Chapter } from "../types";

/**
 * Capítulo IV · Marketing
 *
 * Mensajes y carta del equipo (texto real). Sin portadilla aparte: el título
 * va a la izquierda y "Lo que quisimos decirte" en la página de enfrente.
 */
export const marketing: Chapter = {
  slug: "marketing",
  titlePage: false,
  blocks: [
    {
      type: "notas",
      heading: "Lo que quisimos decirte",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      notes: [
        // Mensajes reales partidos en notas pequeñas, en papeles distintos.
        {
          id: "mkt-marce-1",
          paper: "carta",
          from: "Marce",
          body: "Valen, quiero agradecerte por todo lo que nos enseñaste, por la confianza y por la excelente líder que fuiste y seguirás siendo.",
        },
        {
          id: "mkt-marce-2",
          paper: "adhesiva",
          from: "Marce",
          body: "Como te lo dije en algún momento, el equipo tan teso que tenemos hoy es también reflejo de todo lo que construiste con nosotros.",
        },
        {
          id: "mkt-marce-3",
          paper: "cuaderno",
          from: "Marce",
          body: "Estoy segura de que vienen cosas muy bonitas para ti y te deseo muchísimos éxitos en esta nueva etapa.",
        },
        {
          id: "mkt-marce-4",
          paper: "rasgado",
          from: "Marce",
          body: "¡Un abrazoooo enorme!",
        },
      ],
    },
    {
      type: "sobre-y-voces",
      letter: {
        envelopeTo: "Para abrir cuando llegues a esta página",
        body: [
          "Detrás de cada campaña hubo una idea, detrás de cada publicación una intención y detrás de cada lanzamiento un equipo que trabajaba para hacer que las cosas sucedieran.",
          "Desde Marketing vivimos contigo el ritmo de un Ecommerce que nunca se detiene: campañas que había que sacar adelante, publicaciones, redes sociales, correos, estrategias, anuncios, cambios de última hora y esos momentos en los que todo parecía urgente y el tiempo siempre parecía faltar.",
          "Fuimos los encargados de llevar las ideas hasta las personas, de darles forma, crear mensajes, conectar canales y hacer que cada campaña tuviera un propósito. Y en medio de todo ese movimiento, también aprendimos a trabajar de la mano contigo, a entender los retos del negocio, a buscar soluciones y a encontrar la manera de convertir cada objetivo en una oportunidad.",
          "Gracias por tu confianza, por impulsarnos a pensar más allá de una publicación o una campaña, por ayudarnos a entender que cada acción tenía un impacto en el resultado y por recordarnos que Marketing no trabaja solo: hace parte de una historia mucho más grande.",
          "Nos quedan las carreras por llegar a tiempo, los cambios inesperados, las ideas que se transformaron en grandes campañas, las conversaciones, los aprendizajes y, por supuesto, las risas que hicieron más llevadero el día a día.",
          "Hoy queremos que sepas que para nosotros fue un privilegio compartir este camino contigo. Gracias por permitirnos crear, proponer, equivocarnos, aprender y crecer.",
          "Porque algunas campañas duran unos días, otras dejan resultados que se miden en cifras, pero hay personas que dejan recuerdos que no necesitan métricas para saber cuánto valen.",
          "**Y tú, sin duda, eres una de esas personas.**",
        ],
        closing: "Con mucho cariño,",
        signature: "Tu equipo de Marketing.",
      },
    },
  ],
};
