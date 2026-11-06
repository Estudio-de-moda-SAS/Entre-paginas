import Link from "next/link";
import type { Section } from "@/content/types";
import { PageCurl, Spread, Sprig } from "./Spread";
import s from "./book.module.css";

/**
 * Cierre de un capítulo: a la izquierda, el final del actual;
 * a la derecha, la portadilla del siguiente, como en un libro impreso.
 */
export function ChapterEnd({ current, next, folio }: { current: Section; next?: Section; folio: number }) {
  return (
    <Spread
      folio={folio}
      label={next ? `Fin de ${current.title}. Sigue ${next.title}` : `Fin de ${current.title}`}
      left={
        <div className={s.endLeft}>
          <Sprig />
          <p className={s.endNote}>Aquí terminan las páginas de {current.title}.</p>
          <Link href="/indice/" className={s.endLink}>
            Volver al índice
          </Link>
        </div>
      }
      right={
        next ? (
          <>
            <div className={s.halfTitle}>
              {next.numeral && <p className={s.numeral}>Capítulo {next.numeral}</p>}
              <h2 className={s.halfTitleName}>{next.title}</h2>
              <p className={s.halfTitleSub}>{next.subtitle}</p>
            </div>
            <PageCurl href={next.href} label={`pasar a ${next.title}`} />
          </>
        ) : (
          <>
            <div className={s.halfTitle}>
              <h2 className={s.halfTitleName}>Fin</h2>
              <p className={s.halfTitleSub}>Gracias por leernos.</p>
            </div>
            <PageCurl href="/" label="cerrar el libro" />
          </>
        )
      }
    />
  );
}
