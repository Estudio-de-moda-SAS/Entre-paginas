import type { Metadata } from "next";
import Link from "next/link";
import { BookPages, Spread } from "@/components/book/Spread";
import { Polaroid } from "@/components/objects/Photo";
import { getSection, sections } from "@/content/book";
import { chapters } from "@/content/chapters";
import { indexAside, indexPhoto } from "@/content/indice";
import s from "../pages.module.css";

const section = getSection("indice")!;

export const metadata: Metadata = { title: `${section.title} | Entre páginas` };

/** Una sección está lista si es una página propia o un capítulo con contenido. */
function isReady(slug: string) {
  return slug === "prologo" || slug in chapters;
}

export default function Indice() {
  const entries = sections.filter((e) => e.slug !== "indice");
  return (
    <BookPages>
      <Spread
        folio={section.folio}
        running={section.title}
        label={section.title}
        left={
          <div className={s.indexLeft}>
            <header>
              <h1 className={s.indexTitle}>{section.subtitle.replace(/\.$/, "")}</h1>
              <p className={s.indexAside}>{indexAside}</p>
            </header>
            <Polaroid
              photo={indexPhoto}
              tilt={3}
              className={s.indexPhoto}
              tape={{ color: "kraft", at: "top", rotate: -4 }}
              width={800}
            />
          </div>
        }
        right={
          <nav aria-label="Capítulos del libro">
            <ol className={s.toc}>
              {entries.map((e) => (
                <li key={e.slug}>
                  <Link href={e.href} className={s.entry}>
                    <span className={s.entryNumeral}>{e.numeral ?? ""}</span>
                    <span className={s.entryLine}>
                      <span className={s.entryTitle}>{e.title}</span>
                      <span className={s.leader} aria-hidden="true" />
                      <span className={s.entryFolio}>
                        <span className="visually-hidden">página </span>
                        {e.folio}
                      </span>
                    </span>
                    <span className={s.entrySub}>
                      {e.subtitle}
                      {!isReady(e.slug) && <span className={s.pending}>en preparación</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        }
      />
    </BookPages>
  );
}
