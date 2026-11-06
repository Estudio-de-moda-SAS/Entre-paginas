import type { Metadata } from "next";
import { BookPages, PageCurl, Spread } from "@/components/book/Spread";
import { LetterSheet } from "@/components/objects/LetterSheet";
import { Print } from "@/components/objects/Photo";
import { Clip, Tape } from "@/components/objects/Tape";
import { getNextSection, getSection } from "@/content/book";
import { prologueLetter, prologuePhoto, prologueTurnNote } from "@/content/prologo";
import s from "../pages.module.css";

const section = getSection("prologo")!;
const next = getNextSection("prologo")!;

export const metadata: Metadata = { title: `${section.title} | Entre páginas` };

export default function Prologo() {
  return (
    <BookPages>
      {/* Pliego 1: título y carta de bienvenida */}
      <Spread
        folio={section.folio}
        running={section.title}
        label={section.title}
        left={
          <div className={s.prologueLeft}>
            <header>
              <p className={s.kicker}>{section.title}</p>
              <h1 className={s.prologueTitle}>Antes de comenzar esta historia</h1>
            </header>
            <LetterSheet letter={prologueLetter} sheet="primera" tilt={-0.6}>
              <Clip style={{ left: "2.5rem" }} />
            </LetterSheet>
          </div>
        }
        right={
          <div className={s.prologueRight}>
            <LetterSheet letter={prologueLetter} sheet="segunda" tilt={0.8}>
              <Tape color="kraft" at="top" rotate={-2} />
            </LetterSheet>
            <p className={s.turnNote}>{prologueTurnNote}</p>
          </div>
        }
      />

      {/* Pliego 2: todo el equipo, en una copia grande sobre las dos páginas */}
      <Spread
        folio={section.folio + 2}
        running={section.title}
        label="Foto de todo el equipo"
        across={
          <>
            <div className={s.groupSpread}>
              <Print photo={prologuePhoto} tilt={-1.2} className={s.groupPhoto} width={1600} captionAt="below">
                <Tape color="kraft" at="top-left" />
                <Tape color="rosa" at="top-right" />
              </Print>
            </div>
            <PageCurl href={next.href} label="pasar al índice" />
          </>
        }
      />
    </BookPages>
  );
}
