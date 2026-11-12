import type { Chapter } from "../types";

/**
 * Capítulo II · Desarrollo & UX
 *
 * Definitivo: la apertura (texto aprobado y captura real del contador de
 * Pilatos) y los mensajes de Dani Front, Cami Front, Pao y Deiv. El resto sigue
 * siendo CONTENIDO DE DEMOSTRACIÓN hasta que llegue el material del equipo.
 */
export const desarrollo: Chapter = {
  slug: "desarrollo",
  blocks: [
    {
      type: "apertura",
      intro: [
        "En Desarrollo aprendimos que casi nada sale a la primera. Que un despliegue un viernes puede esperar al lunes, y que una buena pregunta a tiempo ahorra semanas de código.",
        "Contigo aprendimos algo más difícil: a decir que no sin cerrar la puerta, a celebrar los pequeños avances y a confiar en el equipo cuando el tablero estaba en rojo.",
        "Estas páginas son nuestras. Las escribimos entre tickets, cafés y madrugadas.",
      ],
      photo: {
        src: "/fotos/desarrollo/contador-pilatos-recorte.webp",
        alt: "Captura del editor de código con el componente contador.tsx del proyecto Pilatos: la función que calcula los días, horas, minutos y segundos que faltan para una fecha.",
        caption: "un reto difícil, pero se logró",
        date: "contador Pilatos",
        ratio: "portrait",
        focus: "0% 40%",
      },
      layout: "impresa",
      margin: "del código a la realidad",
    },
    {
      type: "notas",
      heading: "Lo que quisimos decirte",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      notes: [
        // Mensajes reales (Dani Front, Cami Front, Pao, Deiv), partidos en notas pequeñas
        // y mezclados a propósito para que cada uno aparezca como sorpresa.
        {
          id: "dev-cami-1",
          paper: "carta",
          from: "Cami Front",
          body: "Hoy quiero dedicarte estas palabras con muchísimo cariño y, sobre todo, con un profundo agradecimiento por haber tenido la oportunidad de coincidir contigo en este camino.",
        },
        {
          id: "dev-deiv-1",
          paper: "rasgado",
          from: "Deiv",
          body: "Valen, muchas gracias por tu tiempo y por toda tu dedicación al equipo.",
        },
        {
          id: "dev-dani-1",
          paper: "adhesiva",
          from: "Dani Front",
          body: "Gracias por darme la libertad de innovar, diseñar, experimentar y atreverme a llevar las ideas un poco más lejos.",
        },
        {
          id: "dev-cami-2",
          paper: "cuaderno",
          from: "Cami Front",
          body: "A veces la vida nos permite reencontrarnos con personas que llegan para aportarnos cosas bonitas, enseñarnos, impulsarnos y recordarnos que siempre hay nuevas oportunidades. Y en mi caso, tú fuiste una de esas personas.",
        },
        {
          id: "dev-pao-1",
          paper: "adhesiva",
          from: "Pao",
          body: "Agradezco a la vida que nos haya cruzado en el camino.",
        },
        {
          id: "dev-dani-2",
          paper: "rasgado",
          from: "Dani Front",
          body: "Fue un camino lleno de retos, momentos difíciles y aprendizajes, pero, sobre todo, un camino profundamente gratificante.",
        },
        {
          id: "dev-cami-3",
          paper: "kraft",
          from: "Cami Front",
          body: "Siempre voy a agradecerte por haberme abierto nuevamente las puertas de esta empresa, por confiar en mí y darme la oportunidad de regresar. Es un gesto que valoro muchísimo y que llevaré siempre en mi corazón.",
        },
        {
          id: "dev-dani-3",
          paper: "carta",
          from: "Dani Front",
          body: "Gracias por despertar en mí el amor por el Ecommerce, por permitirme descubrir todas sus posibilidades y por hacer que cada reto se convirtiera en una oportunidad para crear algo nuevo.",
        },
        {
          id: "dev-pao-2",
          paper: "kraft",
          from: "Pao",
          body: "He aprendido muchas cosas trabajando contigo, sobre todo temas de agilidad mental jaja, de pensar rápido, ir al grano, pero con objetividad y criterio.",
        },
        {
          id: "dev-deiv-2",
          paper: "cuaderno",
          from: "Deiv",
          body: "Gracias por darme la oportunidad de ser parte de Estudio de Moda y por tu apoyo en todos los momentos difíciles.",
        },
        {
          id: "dev-cami-5",
          paper: "rasgado",
          from: "Cami Front",
          body: "Me llevo muchos aprendizajes que, sin duda, seguirán acompañándome en mi camino.",
        },
        {
          id: "dev-cami-4",
          paper: "cuaderno",
          from: "Cami Front",
          body: "Gracias por cada enseñanza, por cada consejo, por tu paciencia, por confiar en mis capacidades y por todas esas experiencias que me permitieron crecer no solo profesionalmente, sino también como persona.",
        },
        {
          id: "dev-dani-4",
          paper: "kraft",
          from: "Dani Front",
          body: "Pero, más allá de todo lo profesional, gracias por hacerme sentir parte fundamental de este camino, por confiar en mis ideas y por darme la oportunidad de aportar, construir y crecer.",
        },
        {
          id: "dev-pao-3",
          paper: "rasgado",
          from: "Pao",
          body: "También aprendí, a nivel personal, a aprovechar lo que tenemos y disfrutar cada día porque eso es lo que nos queda.",
        },
        {
          id: "dev-cami-6",
          paper: "carta",
          from: "Cami Front",
          body: "Pero si hay algo que quiero resaltar, es que más allá de haber sido una gran jefe, eres una gran persona. De esas que dejan huellas bonitas, que se hacen recordar no solamente por lo que hacen, sino por lo que son y por la manera en que hacen sentir a quienes las rodean. Y creo que ese es uno de los regalos más bonitos que alguien puede dejar en la vida de los demás.",
        },
        {
          id: "dev-deiv-3",
          paper: "adhesiva",
          from: "Deiv",
          body: "Eres una gran persona y estoy seguro de que te irá muy bien dondequiera que vayas.",
        },
        {
          id: "dev-dani-5",
          paper: "rasgado",
          from: "Dani Front",
          body: "Me llevo muchos aprendizajes, grandes experiencias y, especialmente, la motivación de seguir haciendo aquello que aprendí a disfrutar tanto.",
        },
        {
          id: "dev-cami-7",
          paper: "cuaderno",
          from: "Cami Front",
          body: "Hoy termina una etapa, pero estoy seguro de que comienzas otra llena de nuevas oportunidades, retos, experiencias y momentos maravillosos. Deseo de todo corazón que la vida te sorprenda con cosas hermosas, que cada paso que des esté lleno de éxitos y que nunca te falten motivos para sonreír.",
        },
        {
          id: "dev-pao-4",
          paper: "kraft",
          from: "Pao",
          body: "Gracias por el tiempo compartido, por las risas y los momentos que no se olvidan.",
        },
        {
          id: "dev-dani-6",
          paper: "adhesiva",
          from: "Dani Front",
          body: "Gracias por creer, por confiar y por hacer de este camino una historia que siempre voy a recordar con cariño.",
        },
        {
          id: "dev-deiv-4",
          paper: "kraft",
          from: "Deiv",
          body: "Te deseo muchos éxitos en esta nueva etapa de tu vida.",
        },
        {
          id: "dev-cami-8",
          paper: "carta",
          from: "Cami Front",
          body: "Gracias por haber creído en mí, por esa oportunidad que significó tanto y por ser una de esas personas que uno agradece haber encontrado en su camino. Me alegra mucho haber coincidido contigo y haber tenido el privilegio de aprender de ti.",
        },
        {
          id: "dev-pao-5",
          paper: "rasgado",
          from: "Pao",
          body: "Mucha fuerza y serenidad para lo que venga en tu vida. Un abracito",
        },
        {
          id: "dev-cami-9",
          paper: "kraft",
          from: "Cami Front",
          body: "Te deseo lo más bonito de la vida, porque las personas que hacen tanto bien también merecen recibir cosas maravillosas. ¡Gracias por tanto y que esta nueva etapa sea tan especial como tú!",
        },
        {
          id: "dev-deiv-5",
          paper: "rasgado",
          from: "Deiv",
          body: "Te envío un abrazo enorme.",
        },
      ],
    },
    {
      type: "foto-completa",
      photo: {
        demo: true,
        alt: "Foto de demostración: el equipo de Desarrollo en la terraza de la oficina",
        ratio: "landscape",
      },
      quote: "No hay sistema que funcione sin las personas que lo cuidan.",
      quoteFrom: "algo que repetías en cada planeación",
    },
    {
      type: "sobre-y-voces",
      letter: {
        demo: true,
        envelopeTo: "Para abrir cuando llegues a esta página",
        to: "Querida líder:",
        body: [
          "Esta carta la escribimos entre todos, cada uno aportó una línea. Por eso suena un poco desordenada, como nuestras dailies.",
          "Gracias por el tiempo que le dedicaste a cada uno, por las conversaciones de pasillo que terminaban resolviendo lo que tres reuniones no pudieron y por recordarnos que detrás de cada pedido hay una persona esperando.",
          "Donde estés, te llevas un equipo entero de tu lado.",
        ],
        signature: "El equipo de Desarrollo",
        date: "noviembre de 2026",
      },
      audio: {
        demo: true,
        title: "Un mensaje de voz del equipo",
        from: "Grabado por Valeria y Andrés",
        duration: "1:30",
        transcript:
          "Transcripción de demostración. Aquí irá el texto del audio, para leerlo cuando no se pueda escuchar.",
      },
      video: {
        demo: true,
        title: "El equipo, en video",
        caption: "grabado en la última daily",
      },
    },
  ],
};
