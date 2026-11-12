import type { Chapter } from "../types";
import { desarrollo } from "./desarrollo";
import { producto } from "./producto";

/**
 * Capítulos con contenido. Para añadir uno nuevo:
 * 1. Crear `src/content/chapters/<slug>.ts` (copiar la forma de desarrollo.ts).
 * 2. Registrarlo aquí.
 * Los capítulos que no están en esta lista se muestran como "en preparación".
 */
export const chapters: Record<string, Chapter> = {
  producto,
  desarrollo,
};

export function getChapter(slug: string): Chapter | undefined {
  return chapters[slug];
}
