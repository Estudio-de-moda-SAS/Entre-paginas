"use client";

import { useRef } from "react";
import s from "./zoom.module.css";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

/**
 * Capa invisible sobre una foto: al tocarla, la foto se abre grande en un
 * diálogo. Se cierra con "Cerrar", con Esc o tocando fuera de la foto.
 */
export function PhotoZoom({ src, alt, caption }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className={s.trigger}
        aria-label={`Ampliar foto: ${alt}`}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      />
      <dialog
        ref={dialog}
        className={s.dialog}
        aria-label={caption || alt}
        // un clic en el fondo (fuera de la foto) cierra el diálogo
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        <figure className={s.figure}>
          <img src={src} alt={alt} loading="lazy" decoding="async" />
          {caption && <figcaption className={s.caption}>{caption}</figcaption>}
        </figure>
        <button type="button" className={s.close} onClick={() => dialog.current?.close()} autoFocus>
          Cerrar
        </button>
      </dialog>
    </>
  );
}
