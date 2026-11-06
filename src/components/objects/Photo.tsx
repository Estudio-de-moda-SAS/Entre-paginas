import type { CSSProperties, ReactNode } from "react";
import type { Photo as PhotoData } from "@/content/types";
import { imageUrl } from "@/lib/media";
import { Tape, type TapeProps } from "./Tape";
import s from "./objects.module.css";

/** Elige un tono de marcador estable a partir del texto alternativo. */
function toneFor(text: string) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return String(h % 4);
}

/** Lo que el marcador dice: la descripción sin el prefijo "Foto de demostración:". */
function placeholderText(alt: string) {
  return alt.replace(/^foto de demostración:\s*/i, "");
}

type ImageProps = {
  photo: PhotoData;
  /** Rellena la altura del contenedor en lugar de usar la proporción. */
  fill?: boolean;
  /** Ancho aproximado en px, para pedir la imagen al tamaño justo. */
  width?: number;
  priority?: boolean;
};

/** La imagen en sí, o su marcador si todavía no hay foto. */
export function PhotoImage({ photo, fill, width, priority }: ImageProps) {
  return (
    <div className={s.image} data-ratio={photo.ratio ?? "landscape"} data-fill={fill || undefined}>
      {photo.src ? (
        <img
          src={imageUrl(photo.src, width)}
          alt={photo.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={photo.focus ? { objectPosition: photo.focus } : undefined}
        />
      ) : (
        <div className={s.placeholder} data-tone={toneFor(photo.alt + (photo.caption ?? ""))} role="img" aria-label={photo.alt}>
          <span className={s.placeholderLabel} aria-hidden="true">
            <small>foto de demostración</small>
            {placeholderText(photo.alt)}
          </span>
        </div>
      )}
    </div>
  );
}

type FrameProps = ImageProps & {
  /** Inclinación en grados. */
  tilt?: number;
  tape?: TapeProps | false;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

/** Foto con marco Polaroid y pie manuscrito. */
export function Polaroid({ photo, tilt = 0, tape, className, style, children, ...rest }: FrameProps) {
  return (
    <figure
      className={`${s.polaroid} ${className ?? ""}`}
      style={{ "--tilt": `${tilt}deg`, ...style } as CSSProperties}
    >
      {tape && <Tape {...tape} />}
      <PhotoImage photo={photo} {...rest} />
      <figcaption>
        {photo.caption}
        {photo.date && <span className={s.date}>{photo.date}</span>}
      </figcaption>
      {children}
    </figure>
  );
}

/** Copia impresa con borde blanco fino. El pie queda escrito debajo o sobre la foto. */
export function Print({
  photo,
  tilt = 0,
  tape,
  className,
  style,
  children,
  captionAt = "below",
  ...rest
}: FrameProps & { captionAt?: "below" | "inside" }) {
  return (
    <figure
      className={`${s.print} ${className ?? ""}`}
      style={{ "--tilt": `${tilt}deg`, ...style } as CSSProperties}
    >
      {tape && <Tape {...tape} />}
      <PhotoImage photo={photo} {...rest} />
      {(photo.caption || photo.date) && (
        <figcaption className={s.printCaption} data-at={captionAt}>
          {photo.caption}
          {photo.date && <span className={s.date}>{photo.date}</span>}
        </figcaption>
      )}
      {children}
    </figure>
  );
}
