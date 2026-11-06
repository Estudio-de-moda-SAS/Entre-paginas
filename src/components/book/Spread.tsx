import type { ReactNode } from "react";
import Link from "next/link";
import { book } from "@/content/book";
import s from "./book.module.css";

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  /** Contenido que cruza el lomo y ocupa las dos páginas. Reemplaza left/right. */
  across?: ReactNode;
  /** Página que va a sangre (foto hasta el borde, sin márgenes). */
  bleed?: "left" | "right" | "across";
  /** Cabecera de la página derecha (normalmente el nombre del capítulo). */
  running?: string;
  /** Folio de la página izquierda. La derecha es folio + 1. */
  folio?: number;
  label?: string;
  className?: string;
};

/**
 * Un pliego del libro: dos páginas con el lomo en el centro.
 * En el celular las dos páginas quedan una debajo de la otra.
 */
export function Spread({ left, right, across, bleed, running, folio, label, className }: Props) {
  const leftBleed = bleed === "left" || bleed === "across";
  const rightBleed = bleed === "right" || bleed === "across";

  return (
    <section className={`${s.spread} ${className ?? ""}`} aria-label={label}>
      {across ? (
        <div className={s.across} data-bleed={bleed === "across" || undefined}>
          {across}
        </div>
      ) : (
        <>
          <div className={s.page} data-side="left" data-bleed={leftBleed || undefined}>
            {left}
          </div>
          <div className={s.page} data-side="right" data-bleed={rightBleed || undefined}>
            {right}
          </div>
        </>
      )}

      {!leftBleed && (
        <span className={s.running} data-side="left" aria-hidden="true">
          {book.title}
        </span>
      )}
      {running && !rightBleed && (
        <span className={s.running} data-side="right" data-hide-mobile={across ? undefined : true} aria-hidden="true">
          {running}
        </span>
      )}
      {folio !== undefined && !leftBleed && (
        <span className={s.folio} data-side="left" aria-hidden="true">
          {folio}
        </span>
      )}
      {folio !== undefined && !rightBleed && (
        <span className={s.folio} data-side="right" data-hide-mobile={across ? undefined : true} aria-hidden="true">
          {folio + 1}
        </span>
      )}
    </section>
  );
}

/** La esquina doblada de la página: lleva a la siguiente sección. */
export function PageCurl({ href, label }: { href: string; label: string }) {
  return (
    <Link className={s.curl} href={href}>
      <span className={s.curlLabel}>{label}</span>
      <span className={s.curlCorner} aria-hidden="true" />
    </Link>
  );
}

export function BookPages({ children }: { children: ReactNode }) {
  return <main className={s.book}>{children}</main>;
}

/** Ramita de olivo dibujada a trazo: ornamento de cierre. */
export function Sprig({ className }: { className?: string }) {
  return (
    <svg className={`${s.sprig} ${className ?? ""}`} viewBox="0 0 80 40" fill="none" aria-hidden="true">
      <path d="M4 30 C 24 26, 46 18, 76 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {[
        [16, 27, -30],
        [24, 22, 35],
        [32, 22, -28],
        [40, 17, 32],
        [48, 17, -25],
        [56, 12, 30],
        [64, 12, -22],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y + (i % 2 ? -4 : 3)}
          rx="5.5"
          ry="2.2"
          transform={`rotate(${r} ${x} ${y + (i % 2 ? -4 : 3)})`}
          fill="currentColor"
          opacity={0.75}
        />
      ))}
    </svg>
  );
}
