import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockView, spreadsFor } from "@/components/blocks/Blocks";
import { ChapterEnd } from "@/components/book/ChapterEnd";
import { BookPages, Spread } from "@/components/book/Spread";
import { Note } from "@/components/objects/Note";
import { chapterSections, getNextSection, getSection } from "@/content/book";
import { getChapter } from "@/content/chapters";
import blocks from "@/components/blocks/blocks.module.css";
import s from "../../pages.module.css";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return chapterSections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  return { title: section ? `${section.title} | Entre páginas` : "Entre páginas" };
}

export default async function ChapterPage({ params }: Props) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  const chapter = getChapter(slug);
  const next = getNextSection(slug);

  // Cada pliego ocupa dos folios.
  let folio = section.folio;
  const views = (chapter?.blocks ?? []).map((block, i) => {
    const view = <BlockView key={i} block={block} ctx={{ section, folio }} />;
    folio += spreadsFor(block) * 2;
    return view;
  });

  return (
    <BookPages>
      {chapter ? (
        views
      ) : (
        <Spread
          folio={folio}
          label={section.title}
          left={
            <header className={blocks.opener}>
              {section.numeral && <p className={blocks.numeral}>Capítulo {section.numeral}</p>}
              <h1 className={blocks.chapterTitle}>{section.title}</h1>
              <p className={blocks.chapterSub}>{section.subtitle}</p>
            </header>
          }
          right={
            <div className={s.pendingRight}>
              <Note
                className={s.pendingNote}
                tilt={-1.5}
                note={{
                  id: "pendiente",
                  paper: "kraft",
                  from: "",
                  body: `Estas páginas se están escribiendo. Pronto llegarán las fotos y los mensajes de ${section.title}.`,
                }}
              />
            </div>
          }
        />
      )}
      <ChapterEnd current={section} next={next} folio={chapter ? folio : folio + 2} />
    </BookPages>
  );
}
