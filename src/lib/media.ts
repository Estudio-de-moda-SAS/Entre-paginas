/**
 * Utilidades de medios. Hoy las fotos y audios son URLs directas; si más
 * adelante se usa un servicio (Cloudinary, etc.) basta con cambiar
 * `imageUrl` para pedir el tamaño adecuado. Los componentes no cambian.
 */

/** Devuelve la URL a usar para una foto, con un ancho máximo sugerido. */
export function imageUrl(src: string, _width?: number): string {
  // Enlaces de Google Drive "compartir" → enlace directo de imagen.
  const drive = src.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (drive) return `https://lh3.googleusercontent.com/d/${drive[1]}`;
  return src;
}

/** Extrae el ID de un video de YouTube a partir de una URL o del ID mismo. */
export function youtubeId(input?: string): string | undefined {
  if (!input) return undefined;
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const url = new URL(trimmed);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1, 12) || undefined;
    const v = url.searchParams.get("v");
    if (v) return v;
    const path = url.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    return path?.[1];
  } catch {
    return undefined;
  }
}

/** URL de inserción sin cookies de seguimiento. */
export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}
