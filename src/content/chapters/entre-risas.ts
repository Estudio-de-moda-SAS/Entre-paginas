import type { Chapter } from "../types";

/**
 * Capítulo VI · Entre risas
 *
 * Videos y fotos de momentos compartidos entre todos los equipos, cada uno
 * con su mensaje. Se agregan uno a uno a medida que llegan.
 */
export const entreRisas: Chapter = {
  slug: "entre-risas",
  blocks: [
    {
      type: "bienvenida",
      lead: "Entre risas, tragos y otros recuerdos...",
      intro: [
        "Porque no todo fue trabajo, reuniones, pendientes y objetivos por cumplir. También hubo rumbas, cafés, cócteles, brindis, bailes, carcajadas y momentos en los que el único KPI importante era pasarla bueno.",
        "Porque también tuvimos la oportunidad de conocer a esa Valentina espontánea, divertida, ocurrente, descomplicada y con ese talento especial para convertir cualquier momento en una buena historia.",
        "Aquí reunimos algunos de esos instantes que quedaron guardados en fotos y videos. Momentos fuera de la oficina, lejos de los correos y las responsabilidades, donde simplemente éramos nosotros disfrutando, riendo y creando recuerdos.",
        "Y atención, porque aquí no hay protocolo, cargos ni jerarquías.",
      ],
      rules: {
        title: "Nota importante:",
        items: [
          "Se vale reír, cantar, bailar y gritar.",
          "Se vale recordar los brindis, los tragos y los pasos prohibidos.",
          "Se vale sorprenderse con lo que aparece en pantalla.",
          "Se vale cuestionar algunas decisiones de vestuario. 😂",
          "Se vale revivir cada momento sin necesidad de dar explicaciones.",
        ],
      },
      goldenRule: { label: "Regla de oro:", text: "Vemos, recordamos y no juzgamos." },
      outro:
        "Así que acomódate, dale play y prepárate... porque algunas historias merecen quedarse entre nosotros, pero otras simplemente tenían que quedar grabadas.",
      signature: "Con cariño, y con algo de evidencia en nuestra contra. ❤️",
      warning: {
        title: "Advertencia",
        headline: "Material altamente comprometedor",
        body: "Contiene risas, pasos prohibidos, brindis, decisiones cuestionables y recuerdos que podrían desbloquear memorias.",
        footer: "Vemos, pero no juzgamos. 🤫",
      },
    },
    {
      type: "momentos",
      items: [
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-51-29-pm.mp4",
            title: "O se lo toma o se lo lleva puesto",
            caption: "O se lo toma o se lo lleva puesto",
            from: "Valen R.",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-48-55-pm.mp4",
            title: "Danny haz lo tuyooooooooo",
            caption: "Danny haz lo tuyooooooooo",
            from: "Danny Maya, directamente desde Ebéjico",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-51-36-pm.mp4",
            title: "Enseñándole a los niños los verdaderos clásicos",
            caption: "Enseñándole a los niños los verdaderos clásicos",
            from: "Dani Front, Danny Maya, Valen E.",
            ratio: "vertical",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/salud-equipo.webp",
            alt: "Brindis en una noche de fiesta: varias manos con manillas de evento chocan vasos de shot y latas sobre la mesa, mientras dos compañeras sonríen detrás.",
            caption: "Pa arriba, pa abajo, pal centro y paentro!!!!",
            ratio: "portrait",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/visita.webp",
            alt: "Visita de Deiv.",
            caption: "Por esas visitas que alegran el alma",
            from: "Deiv",
            ratio: "landscape",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/visita-2.webp",
            alt: "Visita de Deiv, segunda foto.",
            caption: "¿Quién dijo que solo vine a trabajar?",
            from: "Deiv",
            ratio: "landscape",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-39-42-pm-1.mp4",
            title: "Video de Halloween",
            caption: "Dijimos que no juzgaríamos 🫣",
            ratio: "vertical",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/princesas.webp",
            alt: "Fotos juntas.",
            caption: "¡Y estas princesas!!!!!!!!!",
            ratio: "landscape",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/diesel-bogota.webp",
            alt: "Bogotá, foto 1.",
            caption: "Fui a Bogotá solo a caerme",
            from: "Valen R.",
            ratio: "portrait",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/diesel-bogota-2.webp",
            alt: "Bogotá, foto 2.",
            caption: "Lo mejor fue la caída de Valen R.",
            from: "Dani Front",
            ratio: "portrait",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-45-51-pm.mp4",
            title: "Aún quiero mi postre",
            caption: "Aún quiero mi postre",
            from: "Marce",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-46-26-pm.mp4",
            title: "Grupo Ecommerce o Grupo Niche, igual la dimos TODA",
            caption: "Grupo Ecommerce o Grupo Niche, igual la dimos TODA",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-48-02-pm.mp4",
            title: "¿Quién dijo miedo?",
            caption: "¿Quién dijo miedo?",
            from: "Valen R.",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-48-04-pm.mp4",
            title: "Muestre su talento, chicas",
            caption: "Muestre su talento, chicas",
            from: "Danny Maya",
            ratio: "vertical",
          },
        },
        {
          video: {
            src: "/videos/entre-risas/whatsapp-video-2026-11-05-at-7-48-08-pm.mp4",
            title: "No, no, no, no... mmm. Bueno, sí",
            caption: "No, no, no, no... mmm. Bueno, sí",
            from: "Valen E.",
            ratio: "vertical",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/que-gran-historia-1.webp",
            alt: "Qué gran historia 1.",
            caption: "Qué gran historia",
            ratio: "portrait",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/que-gran-historia-2.webp",
            alt: "Qué gran historia 2.",
            caption: "Qué gran equipo creaste",
            ratio: "portrait",
          },
        },
        {
          photo: {
            src: "/fotos/entre-risas/que-gran-historia-3.webp",
            alt: "Qué gran historia 3.",
            caption: "Una historia más",
            ratio: "landscape",
          },
        },
      ],
    },
    {
      // Cierre del capítulo: la foto de todo el equipo, a doble página.
      type: "foto-completa",
      photo: {
        src: "/fotos/entre-risas/foto-grupal-montaje-1.webp",
        alt: "Foto grupal.",
        ratio: "landscape",
      },
      quote: "Un largo camino, pero se LOGRÓ",
    },
  ],
};
