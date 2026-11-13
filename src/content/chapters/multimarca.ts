import type { Chapter } from "../types";

/**
 * Capítulo III · Multimarca
 *
 * Abre con la carta del equipo (título y carta en dos hojas) y sigue con
 * "Lo que quisimos decirte". Todo el texto es real.
 */
export const multimarca: Chapter = {
  slug: "multimarca",
  blocks: [
    {
      // Carta del equipo como apertura del capítulo.
      type: "despedida",
      letter: {
        to: "Un universo de marcas, retos y oportunidades...",
        body: [
          "Si hay un equipo que sabe que cada día puede traer una marca nueva, una negociación inesperada o un reto diferente, es este.",
          "Desde Multimarcas compartimos contigo el desafío de construir, gestionar y hacer crecer un canal lleno de posibilidades. Un universo donde conviven cientos de marcas, productos, sellers y oportunidades; donde cada negociación, cada alianza comercial y cada decisión sobre nuestra página representaba una nueva pieza por encajar.",
          "Porque manejar un canal multimarca es mucho más que reunir productos en una página. Es encontrar oportunidades, construir relaciones, negociar, conectar marcas con clientes y lograr que todo ese mundo de posibilidades funcione como un solo equipo.",
          "En este camino hubo negociaciones que sacar adelante, nuevos sellers por conquistar, marketplaces por explorar, marcas que llegaban con grandes expectativas y retos que nos obligaban a pensar diferente. Y, por supuesto, también hubo cambios, imprevistos y situaciones que nos recordaron que en Ecommerce ningún día es exactamente igual al anterior.",
          "Gracias por acompañarnos en cada uno de esos desafíos, por impulsarnos a buscar nuevas oportunidades, por ayudarnos a encontrar soluciones y por enseñarnos a ver más allá de lo evidente. Gracias por tu confianza, por tus consejos y por esa determinación para seguir moviendo las cosas, incluso cuando el camino se ponía complicado.",
          "Nos llevamos las experiencias, las conversaciones, los acuerdos, los aprendizajes y todas esas historias que se fueron construyendo entre tantas marcas y tantos retos.",
          "Hoy queremos que sepas que fue un privilegio compartir contigo este universo. Nos enseñaste que siempre hay algo nuevo por explorar, una oportunidad por negociar y una forma diferente de hacer crecer las cosas.",
          "Porque entre tantas marcas, productos y oportunidades, lo verdaderamente valioso siempre fueron las personas con las que compartimos el camino.",
        ],
        breakAfter: 4,
        closing: "Con mucho cariño,",
        signature: "Tu equipo Multimarcas.",
      },
    },
    {
      type: "notas",
      heading: "Lo que quisimos decirte",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      notes: [
        // Mensajes reales (Valeria Montoya, Thali), partidos en notas pequeñas
        // y mezclados para que cada uno aparezca como sorpresa.
        {
          id: "multi-valeria-1",
          paper: "adhesiva",
          from: "Valeria Montoya",
          body: "¡Vale, te vamos a extrañar mucho!!!",
        },
        {
          id: "multi-thali-1",
          paper: "carta",
          from: "Thali",
          body: "Vale, fue un placer conocerte, compartir contigo y aprender de ti.",
        },
        {
          id: "multi-valeria-2",
          paper: "cuaderno",
          from: "Valeria Montoya",
          body: "Te deseamos de corazón lo mejor en este nuevo camino profesional y muchísimos éxitos en todo lo que viene.",
        },
        {
          id: "multi-thali-2",
          paper: "rasgado",
          from: "Thali",
          body: "Admiro tu capacidad de liderazgo, de proyección y tu objetividad.",
        },
        {
          id: "multi-valeria-3",
          paper: "carta",
          from: "Valeria Montoya",
          body: "Eres una tesa y dejas una huella muy bonita en cada uno de nosotros, no solo por todo lo que nos enseñaste, sino también por esa manera tan especial de invitarnos a cuestionar, a pensar más allá, a tener una mirada crítica y, sobre todo, a no hacer las cosas en piloto automático jajaja.",
        },
        {
          id: "multi-valeria-4",
          paper: "kraft",
          from: "Valeria Montoya",
          body: "Gracias por compartir tanto de ti y de tus conocimientos, por tu disposición, tu cuidado y por cada conversación y aprendizaje que nos dejas.",
        },
        {
          id: "multi-thali-3",
          paper: "cuaderno",
          from: "Thali",
          body: "Quiero agradecerte por haberme permitido hacer parte del equipo, por la acogida y por tu compromiso y disposición con mi aprendizaje.",
        },
        {
          id: "multi-valeria-5",
          paper: "rasgado",
          from: "Valeria Montoya",
          body: "Nos llevamos mucho de ti y estamos seguros de que todo eso nos acompañará por mucho tiempo.",
        },
        {
          id: "multi-thali-4",
          paper: "kraft",
          from: "Thali",
          body: "Sin duda, conocerlos y trabajar junto a ustedes será una experiencia memorable en mi carrera.",
        },
        {
          id: "multi-valeria-6",
          paper: "adhesiva",
          from: "Valeria Montoya",
          body: "¡Te vamos a extrañar un montón! Un abrazo enorme y que esta nueva etapa esté llena de cosas maravillosas. ❤️",
        },
      ],
    },
  ],
};
