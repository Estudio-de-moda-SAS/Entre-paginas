import type { Chapter } from "../types";

/**
 * Capítulo I · Lo que quisimos decirte
 *
 * Un mensaje personal por página, completo y firmado. Sin equipos: es el
 * libro de todo Ecommerce. El orden está mezclado a propósito (largos y
 * cortos alternados) para que cada página sea una sorpresa.
 *
 * Para añadir un mensaje: agregar un elemento a `messages` con un `id`
 * único. El papel se elige solo según el largo del texto; se puede fijar
 * con `paper`. Los párrafos se separan con "\n\n".
 */
export const loQueQuisimosDecirte: Chapter = {
  slug: "lo-que-quisimos-decirte",
  titlePage: false,
  blocks: [
    {
      type: "mensajes",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      messages: [
        {
          id: "cami-front",
          from: "Cami Front",
          body: "Hoy quiero dedicarte estas palabras con muchísimo cariño y, sobre todo, con un profundo agradecimiento por haber tenido la oportunidad de coincidir contigo en este camino.\n\nA veces la vida nos permite reencontrarnos con personas que llegan para aportarnos cosas bonitas, enseñarnos, impulsarnos y recordarnos que siempre hay nuevas oportunidades. Y en mi caso, tú fuiste una de esas personas. Siempre voy a agradecerte por haberme abierto nuevamente las puertas de esta empresa, por confiar en mí y darme la oportunidad de regresar. Es un gesto que valoro muchísimo y que llevaré siempre en mi corazón.\n\nGracias por cada enseñanza, por cada consejo, por tu paciencia, por confiar en mis capacidades y por todas esas experiencias que me permitieron crecer no solo profesionalmente, sino también como persona. Me llevo muchos aprendizajes que, sin duda, seguirán acompañándome en mi camino.\n\nPero si hay algo que quiero resaltar, es que más allá de haber sido una gran jefe, eres una gran persona. De esas que dejan huellas bonitas, que se hacen recordar no solamente por lo que hacen, sino por lo que son y por la manera en que hacen sentir a quienes las rodean. Y creo que ese es uno de los regalos más bonitos que alguien puede dejar en la vida de los demás.\n\nHoy termina una etapa, pero estoy seguro de que comienzas otra llena de nuevas oportunidades, retos, experiencias y momentos maravillosos. Deseo de todo corazón que la vida te sorprenda con cosas hermosas, que cada paso que des esté lleno de éxitos y que nunca te falten motivos para sonreír.\n\nGracias por haber creído en mí, por esa oportunidad que significó tanto y por ser una de esas personas que uno agradece haber encontrado en su camino. Me alegra mucho haber coincidido contigo y haber tenido el privilegio de aprender de ti.\n\nTe deseo lo más bonito de la vida, porque las personas que hacen tanto bien también merecen recibir cosas maravillosas. ¡Gracias por tanto y que esta nueva etapa sea tan especial como tú!",
        },
        {
          id: "tani",
          from: "Tani",
          body: "Me quedaré con todas las risas, almuercito, comida rica, uno que otro trago por ahí que compartimos y tus compritas en VTC. ¡Gracias por tanto!!",
        },
        {
          id: "dani-front",
          from: "Dani Front",
          body: "Gracias por darme la libertad de innovar, diseñar, experimentar y atreverme a llevar las ideas un poco más lejos.\n\nFue un camino lleno de retos, momentos difíciles y aprendizajes, pero, sobre todo, un camino profundamente gratificante.\n\nGracias por despertar en mí el amor por el Ecommerce, por permitirme descubrir todas sus posibilidades y por hacer que cada reto se convirtiera en una oportunidad para crear algo nuevo.\n\nPero, más allá de todo lo profesional, gracias por hacerme sentir parte fundamental de este camino, por confiar en mis ideas y por darme la oportunidad de aportar, construir y crecer.\n\nMe llevo muchos aprendizajes, grandes experiencias y, especialmente, la motivación de seguir haciendo aquello que aprendí a disfrutar tanto.\n\nGracias por creer, por confiar y por hacer de este camino una historia que siempre voy a recordar con cariño.",
        },
        {
          id: "aleja",
          from: "Aleja",
          body: "Un gusto haber compartido todo este tiempo en un gran equipo. Agradecida por cada uno de los aprendizajes y el conocimiento que he tenido, por las oportunidades y la confianza. Deseo de corazón que la felicidad te acompañe y el éxito nunca te suelte. Un fuerte abrazo ✨",
        },
        {
          id: "valeria-montoya",
          from: "Valeria Montoya",
          body: "¡Vale, te vamos a extrañar mucho!!!\n\nTe deseamos de corazón lo mejor en este nuevo camino profesional y muchísimos éxitos en todo lo que viene. Eres una tesa y dejas una huella muy bonita en cada uno de nosotros, no solo por todo lo que nos enseñaste, sino también por esa manera tan especial de invitarnos a cuestionar, a pensar más allá, a tener una mirada crítica y, sobre todo, a no hacer las cosas en piloto automático jajaja.\n\nGracias por compartir tanto de ti y de tus conocimientos, por tu disposición, tu cuidado y por cada conversación y aprendizaje que nos dejas. Nos llevamos mucho de ti y estamos seguros de que todo eso nos acompañará por mucho tiempo. ¡Te vamos a extrañar un montón! Un abrazo enorme y que esta nueva etapa esté llena de cosas maravillosas. ❤️",
        },
        {
          id: "kathe",
          from: "Kathe",
          body: "Quiero expresarle agradecimiento por la oportunidad, confianza y por cada enseñanza que me brindó. Valoro mucho la oportunidad de aprender, crecer profesionalmente y asumir nuevos retos bajo su liderazgo.\n\nGracias por su paciencia y disposición. Sin duda, sus consejos de mejoras y ejemplo aportaron mucho a mi crecimiento personal y profesional.",
        },
        {
          id: "pao",
          from: "Pao",
          body: "Agradezco a la vida que nos haya cruzado en el camino, he aprendido muchas cosas trabajando contigo, sobre todo temas de agilidad mental jaja, de pensar rápido, ir al grano, pero con objetividad y criterio. También aprendí, a nivel personal, a aprovechar lo que tenemos y disfrutar cada día porque eso es lo que nos queda. Gracias por el tiempo compartido, por las risas y los momentos que no se olvidan. Mucha fuerza y serenidad para lo que venga en tu vida. Un abracito",
        },
        {
          id: "valen-r",
          from: "Valen R.",
          body: "Valen, quiero agradecerte por la oportunidad de haber hecho parte de tu equipo y por todo lo que me aportaste durante este tiempo en Estudio de Moda. Gracias por la confianza, por permitirme crecer profesionalmente, asumir nuevos retos y aprender tantas cosas en el camino.\n\nTe deseo muchísimos éxitos en esta nueva etapa. Estoy segura de que vendrán grandes oportunidades y nuevos retos para ti. Espero sigas cumpliendo tus proyectos y sueños.\n\n¡Gracias por todo! Te deseo siempre lo mejor.",
        },
        {
          id: "deiv",
          from: "Deiv",
          body: "Valen, muchas gracias por tu tiempo y por toda tu dedicación al equipo. Gracias por darme la oportunidad de ser parte de Estudio de Moda y por tu apoyo en todos los momentos difíciles.\n\nEres una gran persona y estoy seguro de que te irá muy bien dondequiera que vayas. Te deseo muchos éxitos en esta nueva etapa de tu vida.\n\nTe envío un abrazo enorme.",
        },
        {
          id: "thali",
          from: "Thali",
          body: "Vale, fue un placer conocerte, compartir contigo y aprender de ti. Admiro tu capacidad de liderazgo, de proyección y tu objetividad.\n\nQuiero agradecerte por haberme permitido hacer parte del equipo, por la acogida y por tu compromiso y disposición con mi aprendizaje. Sin duda, conocerlos y trabajar junto a ustedes será una experiencia memorable en mi carrera.",
        },
        {
          id: "marce",
          from: "Marce",
          body: "Valen, quiero agradecerte por todo lo que nos enseñaste, por la confianza y por la excelente líder que fuiste y seguirás siendo. Como te lo dije en algún momento, el equipo tan teso que tenemos hoy es también reflejo de todo lo que construiste con nosotros.\n\nEstoy segura de que vienen cosas muy bonitas para ti y te deseo muchísimos éxitos en esta nueva etapa. ¡Un abrazoooo enorme!",
        },
      ],
    },
  ],
};
