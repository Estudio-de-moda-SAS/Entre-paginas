import type { Chapter } from "../types";

/**
 * Capítulo I · Producto
 *
 * Por ahora solo mensajes (todos reales). Sin apertura: el capítulo abre con
 * su título hasta que lleguen las fotos del equipo.
 */
export const producto: Chapter = {
  slug: "producto",
  blocks: [
    {
      type: "notas",
      heading: "Lo que quisimos decirte",
      intro:
        "Le pedimos a cada persona del equipo que te escribiera algo. Sin reglas, sin límite de palabras.",
      notes: [
        // Mensajes reales partidos en notas pequeñas, en papeles distintos.
        {
          id: "prod-kathe-1",
          paper: "carta",
          from: "Kathe",
          body: "Quiero expresarle agradecimiento por la oportunidad, confianza y por cada enseñanza que me brindó.",
        },
        {
          id: "prod-kathe-2",
          paper: "adhesiva",
          from: "Kathe",
          body: "Valoro mucho la oportunidad de aprender, crecer profesionalmente y asumir nuevos retos bajo su liderazgo.",
        },
        {
          id: "prod-kathe-3",
          paper: "rasgado",
          from: "Kathe",
          body: "Gracias por su paciencia y disposición.",
        },
        {
          id: "prod-kathe-4",
          paper: "cuaderno",
          from: "Kathe",
          body: "Sin duda, sus consejos de mejoras y ejemplo aportaron mucho a mi crecimiento personal y profesional.",
        },
      ],
    },
  ],
};
