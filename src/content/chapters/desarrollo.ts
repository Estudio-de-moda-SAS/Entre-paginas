import type { Chapter } from "../types";

/**
 * Capítulo II · Desarrollo & UX
 *
 * Definitivo: la apertura (texto aprobado y captura real del contador de
 * Pilatos) y la nota de Daniel. El resto sigue siendo CONTENIDO DE
 * DEMOSTRACIÓN hasta que llegue el material del equipo.
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
        // El mensaje de Daniel, repartido párrafo a párrafo en papeles distintos.
        {
          id: "dev-daniel-1",
          paper: "carta",
          from: "Daniel",
          body: "Gracias por darme la libertad de innovar, diseñar, experimentar y atreverme a llevar las ideas un poco más lejos.",
        },
        {
          id: "dev-daniel-2",
          paper: "adhesiva",
          from: "Daniel",
          body: "Fue un camino lleno de retos, momentos difíciles y aprendizajes, pero, sobre todo, un camino profundamente gratificante.",
        },
        {
          id: "dev-daniel-3",
          paper: "cuaderno",
          from: "Daniel",
          body: "Gracias por despertar en mí el amor por el Ecommerce, por permitirme descubrir todas sus posibilidades y por hacer que cada reto se convirtiera en una oportunidad para crear algo nuevo.",
        },
        {
          id: "dev-daniel-4",
          paper: "kraft",
          from: "Daniel",
          body: "Pero, más allá de todo lo profesional, gracias por hacerme sentir parte fundamental de este camino, por confiar en mis ideas y por darme la oportunidad de aportar, construir y crecer.",
        },
        {
          id: "dev-daniel-5",
          paper: "rasgado",
          from: "Daniel",
          body: "Me llevo muchos aprendizajes, grandes experiencias y, especialmente, la motivación de seguir haciendo aquello que aprendí a disfrutar tanto.",
        },
        {
          id: "dev-daniel-6",
          paper: "carta",
          from: "Daniel",
          body: "Gracias por creer, por confiar y por hacer de este camino una historia que siempre voy a recordar con cariño.",
        },
        {
          id: "dev-2",
          demo: true,
          paper: "adhesiva",
          from: "Camila",
          body: "Primero entiende el problema. Después abre el editor.\n\nSigue pegada en mi pantalla.",
        },
        {
          id: "dev-3",
          demo: true,
          paper: "cuaderno",
          from: "Julián",
          body: "Mi primer día me dijiste que no tuviera miedo de romper cosas, que para eso existía staging. Rompí producción a la semana. Te reíste, me ayudaste a arreglarlo y nunca más lo mencionaste.",
        },
        {
          id: "dev-4",
          demo: true,
          paper: "kraft",
          from: "Mateo",
          body: "Por cada retro en la que nos hiciste hablar a todos, hasta a los que nunca hablamos.",
        },
        {
          id: "dev-5",
          demo: true,
          paper: "rasgado",
          from: "Sara",
          body: "Nos enseñaste a celebrar los despliegues pequeños.",
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
