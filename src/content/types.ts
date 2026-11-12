/**
 * Modelo de contenido de "Entre páginas".
 *
 * Todo lo que se ve en el libro sale de estos tipos. Los componentes nunca
 * tienen textos ni fotos escritos a mano: los leen de `src/content/`.
 *
 * `demo: true` marca el contenido provisional. En pantalla aparece con una
 * anotación a lápiz ("foto de demostración", "texto provisional") para que
 * nunca se confunda con contenido real.
 */

/** Una fotografía. Sin `src`, se dibuja un marcador de posición. */
export type Photo = {
  /** URL pública de la imagen (Drive, Cloudinary, Google Fotos, /public...). */
  src?: string;
  /** Descripción para lectores de pantalla: qué se ve en la foto. */
  alt: string;
  /** Pie escrito a mano debajo o al lado de la foto. */
  caption?: string;
  /** Fecha tal como se escribiría a mano: "marzo 2023", "un viernes cualquiera". */
  date?: string;
  /** Quién firma el pie (se escribe debajo, más pequeño). */
  from?: string;
  /** Proporción de la foto original. */
  ratio?: "portrait" | "landscape" | "square" | "wide";
  /** Punto de enfoque al recortar (CSS object-position), p. ej. "50% 30%". */
  focus?: string;
  demo?: boolean;
};

/** Tipos de papel para notas y mensajes. */
export type Paper =
  | "adhesiva" // nota adhesiva rosa
  | "cuaderno" // hoja de cuaderno rayada, con perforaciones
  | "kraft" // etiqueta de papel kraft con ojal
  | "carta" // papel de carta blanco, texto en Lora
  | "rasgado"; // trozo de papel rasgado, frase corta

export type Note = {
  id: string;
  paper: Paper;
  /** Quién la escribe (nombre como lo firmaría). */
  from: string;
  /** Texto. Los saltos de párrafo se escriben con "\n\n". */
  body: string;
  date?: string;
  demo?: boolean;
};

export type Letter = {
  to: string;
  /** Párrafos de la carta. */
  body: string[];
  /** Línea de despedida antes de la firma: "Con todo nuestro cariño,". */
  closing?: string;
  /** Firma manuscrita. */
  signature: string;
  date?: string;
  /**
   * Cartas largas: número de párrafos que van en la primera hoja.
   * El resto pasa a una segunda hoja (en la página de enfrente).
   */
  breakAfter?: number;
  demo?: boolean;
};

export type Annotation = {
  text: string;
  /** Índice (desde 0) de la foto del collage a la que apunta. */
  near: number;
};

/**
 * Bloques que componen un capítulo. Cada bloque se dibuja como un pliego
 * (doble página en escritorio, páginas seguidas en el celular).
 */
export type Block =
  | {
      type: "apertura";
      intro: string[];
      photo: Photo;
      /** Línea manuscrita junto a la foto principal. */
      margin?: string;
      /**
       * "sangre" (por defecto): la foto cubre toda la página derecha.
       * "impresa": la foto va como una copia pegada sobre el papel,
       * con el sticker y el pie de foto fuera de la imagen.
       */
      layout?: "sangre" | "impresa";
      demo?: boolean;
    }
  | {
      type: "collage";
      /** Título manuscrito del collage. */
      heading?: string;
      /** Entre 3 y 6 fotos. Las dos primeras se dibujan más grandes. */
      photos: Photo[];
      annotations?: Annotation[];
    }
  | {
      type: "notas";
      heading: string;
      intro?: string;
      notes: Note[];
    }
  | {
      type: "foto-completa";
      photo: Photo;
      /** Frase en un papel rasgado sobre la foto. */
      quote?: string;
      quoteFrom?: string;
    }
  | {
      type: "sobre-y-voces";
      letter: Letter & { envelopeTo: string };
      audio?: Audio;
      video?: Video;
    }
  | {
      /** Carta final a doble página: título a la izquierda, la carta en dos hojas. */
      type: "despedida";
      title: string;
      letter: Letter;
    }
  | {
      /**
       * Apertura solo de texto: título del capítulo con una carta de bienvenida
       * a la izquierda y una nota adhesiva grande a la derecha.
       */
      type: "bienvenida";
      /** Primera línea, bajo el título. */
      lead: string;
      intro: string[];
      /** Lista con su encabezado ("Nota importante" → "Se vale…"). */
      rules?: { title: string; items: string[] };
      /** Frase destacada como un sello. */
      goldenRule?: { label: string; text: string };
      outro?: string;
      signature?: string;
      /** Nota adhesiva grande con un recuadro de advertencia. */
      warning?: { title: string; headline: string; body: string; footer?: string };
    }
  | {
      /** Videos y fotos sueltos, cada uno con su mensaje: dos por pliego. */
      type: "momentos";
      items: Moment[];
    };

/** Un recuerdo del capítulo de momentos: un video o una foto, con su nota. */
export type Moment = {
  video?: Video;
  photo?: Photo;
  /** Mensaje que acompaña al recuerdo. Si no se indica papel, se alterna solo. */
  note?: Omit<Note, "paper"> & { paper?: Paper };
};

export type Audio = {
  title: string;
  from: string;
  /** URL directa al archivo (.mp3, .m4a, .ogg). */
  src?: string;
  /** Duración aproximada para mostrar antes de cargar: "1:42". */
  duration?: string;
  /** Transcripción opcional, se muestra plegada debajo del audio. */
  transcript?: string;
  demo?: boolean;
};

export type Video = {
  title: string;
  /** URL de YouTube (normal, corta o no listada) o solo el ID. */
  youtube?: string;
  /** Archivo propio en public/videos/ (lo genera `npm run medios`). */
  src?: string;
  /** Quién firma el pie del video. */
  from?: string;
  /** Forma del video; los de celular suelen ser verticales. */
  ratio?: "vertical" | "horizontal" | "square";
  caption?: string;
  demo?: boolean;
};

export type Chapter = {
  slug: string;
  blocks: Block[];
};

/** Una entrada del libro, en el orden en que se lee. */
export type Section = {
  slug: string;
  /** Ruta de la página. */
  href: string;
  kind: "preliminar" | "capitulo" | "final";
  /** Número romano del capítulo, solo para capítulos. */
  numeral?: string;
  /** Nombre corto: "Desarrollo", "Prólogo". */
  title: string;
  /** Frase del capítulo: "Entre códigos, retos y grandes ideas." */
  subtitle: string;
  /** Página donde empieza (folio), como en un índice impreso. */
  folio: number;
};
