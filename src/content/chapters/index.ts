import type { Chapter } from "../types";
import { loQueQuisimosDecirte } from "./lo-que-quisimos-decirte";
import { entreRisas } from "./entre-risas";
import { epilogo } from "./epilogo";

/**
 * Capítulos con contenido. Para añadir uno nuevo:
 * 1. Crear `src/content/chapters/<slug>.ts`.
 * 2. Registrarlo aquí y en las secciones de `book.ts`.
 * Los capítulos que no están en esta lista se muestran como "en preparación".
 */
export const chapters: Record<string, Chapter> = {
  "lo-que-quisimos-decirte": loQueQuisimosDecirte,
  "entre-risas": entreRisas,
  epilogo,
};

export function getChapter(slug: string): Chapter | undefined {
  return chapters[slug];
}
