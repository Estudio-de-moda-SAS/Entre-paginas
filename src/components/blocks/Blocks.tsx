import type { ReactNode } from "react";
import type { Block, Moment, Note as NoteData, Section } from "@/content/types";
import { Spread } from "@/components/book/Spread";
import { PhotoImage, Polaroid, Print } from "@/components/objects/Photo";
import { Note } from "@/components/objects/Note";
import { DemoMark, Tape } from "@/components/objects/Tape";
import { Envelope } from "@/components/objects/Envelope";
import { AudioNote } from "@/components/objects/AudioNote";
import { VideoFrame } from "@/components/objects/VideoFrame";
import { LetterSheet } from "@/components/objects/LetterSheet";
import { Clip } from "@/components/objects/Tape";
import s from "./blocks.module.css";

type Ctx = { section: Section; folio: number };

/** Cuántos pliegos ocupa un bloque (para numerar los folios). */
export function spreadsFor(block: Block): number {
  if (block.type === "notas") return chunkNotes(block.notes).length;
  if (block.type === "momentos") return Math.max(1, Math.ceil(block.items.length / 2));
  return 1;
}

/** Dibuja un bloque de contenido como uno o varios pliegos. */
export function BlockView({ block, ctx }: { block: Block; ctx: Ctx }): ReactNode {
  switch (block.type) {
    case "apertura":
      return <Opener block={block} ctx={ctx} />;
    case "collage":
      return <Collage block={block} ctx={ctx} />;
    case "notas":
      return <Notes block={block} ctx={ctx} />;
    case "foto-completa":
      return <FullBleed block={block} ctx={ctx} />;
    case "sobre-y-voces":
      return <Voices block={block} ctx={ctx} />;
    case "momentos":
      return <Moments block={block} ctx={ctx} />;
    case "bienvenida":
      return <Welcome block={block} ctx={ctx} />;
    case "despedida":
      return <Farewell block={block} ctx={ctx} />;
  }
}

type Of<T extends Block["type"]> = Extract<Block, { type: T }>;

/* ── Apertura: título del capítulo a la izquierda, foto a sangre a la derecha ── */

function Opener({ block, ctx }: { block: Of<"apertura">; ctx: Ctx }) {
  const { section } = ctx;
  const printed = block.layout === "impresa";
  return (
    <Spread
      folio={ctx.folio}
      bleed={printed ? undefined : "right"}
      label={`Capítulo ${section.numeral ?? ""}: ${section.title}`}
      left={
        <header className={s.opener}>
          {section.numeral && <p className={s.numeral}>Capítulo {section.numeral}</p>}
          <h1 className={s.chapterTitle}>{section.title}</h1>
          <p className={s.chapterSub}>{section.subtitle}</p>
          <div className={s.intro}>
            {block.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {block.demo && (
            <p className={s.demoLine}>
              <DemoMark />
            </p>
          )}
        </header>
      }
      right={
        printed ? (
          <div className={s.openerPrint}>
            {block.margin && (
              <div className={s.openerSticker}>
                <Note note={{ id: "margin", paper: "rasgado", from: "", body: block.margin }} />
              </div>
            )}
            <Print
              photo={block.photo}
              tilt={1.5}
              tape={{ color: "kraft", at: "top-left" }}
              className={s.openerPrintPhoto}
              priority
              width={1000}
            />
          </div>
        ) : (
        <>
          <div className={s.bleedPhoto}>
            <PhotoImage photo={block.photo} fill priority width={900} />
          </div>
          {block.margin && (
            <div className={s.marginNote}>
              <Note note={{ id: "margin", paper: "rasgado", from: "", body: block.margin }} />
            </div>
          )}
          {(block.photo.caption || block.photo.date) && (
            <p className={s.bleedCaption}>
              {block.photo.caption}
              {block.photo.date && <span>{block.photo.date}</span>}
            </p>
          )}
        </>
        )
      }
    />
  );
}

/* ── Collage: fotos superpuestas que cruzan el lomo ── */

const SLOTS: { frame: "print" | "polaroid"; tilt: number; tape?: "rosa" | "oliva" | "kraft"; at?: "top" | "top-left" | "top-right" | "bottom-right" }[] = [
  { frame: "print", tilt: -2.5, tape: "kraft", at: "top-left" },
  { frame: "polaroid", tilt: 3, tape: "rosa", at: "top" },
  { frame: "print", tilt: -4, tape: "oliva", at: "top-right" },
  { frame: "print", tilt: 1.5 },
  { frame: "polaroid", tilt: -2.5, tape: "kraft", at: "top" },
  { frame: "print", tilt: 3, tape: "rosa", at: "top-left" },
];

function Arrow() {
  return (
    <svg viewBox="0 0 40 30" fill="none" aria-hidden="true">
      <path d="M36 26 C 26 24, 14 18, 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 14 L6 6 L13 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Collage({ block, ctx }: { block: Of<"collage">; ctx: Ctx }) {
  return (
    <Spread
      folio={ctx.folio}
      running={ctx.section.title}
      label={block.heading ?? "Collage de fotos"}
      across={
        <div className={s.collage}>
          {block.heading && <h2 className={s.collageHeading}>{block.heading}</h2>}
          {block.photos.slice(0, SLOTS.length).map((photo, i) => {
            const slot = SLOTS[i];
            const tape = slot.tape ? { color: slot.tape, at: slot.at } : false;
            const note = block.annotations?.find((a) => a.near === i);
            const Frame = slot.frame === "polaroid" ? Polaroid : Print;
            return (
              <div key={i} className={s.slot} data-slot={i}>
                <Frame photo={photo} tilt={slot.tilt} tape={tape} width={600} />
                {note && (
                  <p className={s.annotation}>
                    <Arrow />
                    {note.text}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      }
    />
  );
}

/* ── Notas: mensajes en papeles distintos, repartidos en pliegos ── */

/** Máximo de notas por pliego; se reparten en partes iguales entre los pliegos. */
const PER_SPREAD = 10;
function chunkNotes(notes: NoteData[]) {
  const count = Math.max(1, Math.ceil(notes.length / PER_SPREAD));
  const out: NoteData[][] = [];
  let start = 0;
  for (let c = 0; c < count; c++) {
    const size = Math.floor(notes.length / count) + (c < notes.length % count ? 1 : 0);
    out.push(notes.slice(start, start + size));
    start += size;
  }
  return out;
}

/** Cuánto espacio ocupa una nota, aproximado por la longitud del texto más el papel y la firma. */
const weight = (n: NoteData) => n.body.length + 140;
/** Lo que ocupa el título de la sección en la primera página izquierda. */
const HEADING_WEIGHT = 450;

/**
 * Cuántas notas van en la página izquierda para que las dos páginas queden
 * con un peso parecido, sin alterar el orden de las notas.
 */
function splitPoint(chunk: NoteData[], withHeading: boolean) {
  if (chunk.length < 2) return chunk.length;
  const total = chunk.reduce((sum, n) => sum + weight(n), 0);
  const offset = withHeading ? HEADING_WEIGHT : 0;
  let best = 1;
  let bestDiff = Infinity;
  let left = 0;
  for (let k = 1; k < chunk.length; k++) {
    left += weight(chunk[k - 1]);
    const diff = Math.abs(left + offset - (total - left));
    if (diff < bestDiff) {
      bestDiff = diff;
      best = k;
    }
  }
  return best;
}
const TILTS = [-1.2, -3, 1.5, -1, 2.5, -2, 1];

function Notes({ block, ctx }: { block: Of<"notas">; ctx: Ctx }) {
  const chunks = chunkNotes(block.notes);
  return (
    <>
      {chunks.map((chunk, c) => {
        const leftCount = splitPoint(chunk, c === 0);
        const left = chunk.slice(0, leftCount);
        const right = chunk.slice(leftCount);
        return (
          <Spread
            key={c}
            folio={ctx.folio + c * 2}
            running={ctx.section.title}
            label={c === 0 ? block.heading : `${block.heading} (continuación)`}
            left={
              <div className={s.notesLeft}>
                {c === 0 && (
                  <div>
                    <h2 className={s.notesHeading}>{block.heading}</h2>
                    {block.intro && <p className={s.notesIntro}>{block.intro}</p>}
                  </div>
                )}
                <div className={s.board}>
                  {left.map((n, i) => (
                    <Note key={n.id} note={n} tilt={TILTS[i % TILTS.length]} />
                  ))}
                </div>
              </div>
            }
            right={
              <div className={s.board}>
                {right.map((n, i) => (
                  <Note key={n.id} note={n} tilt={TILTS[(i + leftCount) % TILTS.length]} />
                ))}
              </div>
            }
          />
        );
      })}
    </>
  );
}

/* ── Despedida: la carta final de todos, en dos hojas ── */

function Farewell({ block, ctx }: { block: Of<"despedida">; ctx: Ctx }) {
  const { section } = ctx;
  return (
    <Spread
      folio={ctx.folio}
      running={section.title}
      label={`${section.title}: ${block.title}`}
      left={
        <div className={s.farewellLeft}>
          <header>
            <p className={s.farewellKicker}>{section.title}</p>
            <h1 className={s.farewellTitle}>{block.title}</h1>
          </header>
          <LetterSheet letter={block.letter} sheet="primera" tilt={-0.6}>
            <Clip style={{ left: "2.5rem" }} />
          </LetterSheet>
        </div>
      }
      right={
        <div className={s.farewellRight}>
          <LetterSheet letter={block.letter} sheet="segunda" tilt={0.7}>
            <Tape color="rosa" at="top" rotate={-2} />
          </LetterSheet>
        </div>
      }
    />
  );
}

/* ── Bienvenida: título con una carta a la izquierda, advertencia a la derecha ── */

function Welcome({ block, ctx }: { block: Of<"bienvenida">; ctx: Ctx }) {
  const { section } = ctx;
  return (
    <Spread
      folio={ctx.folio}
      label={`Capítulo ${section.numeral ?? ""}: ${section.title}`}
      left={
        <header className={s.welcome}>
          {section.numeral && <p className={s.numeral}>Capítulo {section.numeral}</p>}
          <h1 className={s.chapterTitle}>{section.title}</h1>
          <p className={s.welcomeLead}>{block.lead}</p>
          <div className={s.welcomeText}>
            {block.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {block.rules && (
            <section className={s.rules} aria-label={block.rules.title}>
              <h2 className={s.rulesTitle}>{block.rules.title}</h2>
              <ul>
                {block.rules.items.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}
          {block.goldenRule && (
            <p className={s.goldenRule}>
              <span>{block.goldenRule.label}</span>
              {block.goldenRule.text}
            </p>
          )}
          {block.outro && <p className={s.welcomeText}>{block.outro}</p>}
          {block.signature && <p className={s.welcomeSign}>{block.signature}</p>}
        </header>
      }
      right={
        block.warning && (
          <div className={s.warningPage}>
            <aside className={s.warning} aria-label={block.warning.title}>
              <p className={s.warningBox}>
                <span className={s.warningTitle}>{block.warning.title}</span>
                <span className={s.warningHeadline}>{block.warning.headline}</span>
              </p>
              <p className={s.warningBody}>{block.warning.body}</p>
              {block.warning.footer && <p className={s.warningFooter}>{block.warning.footer}</p>}
            </aside>
          </div>
        )
      }
    />
  );
}

/* ── Momentos: un video o una foto por página, con su mensaje al lado ── */

const MOMENT_TILTS = [-1.5, 2, 1, -2.5];
const MOMENT_PAPERS = ["adhesiva", "rasgado", "kraft", "cuaderno", "carta"] as const;

function MomentPage({ item, index }: { item?: Moment; index: number }) {
  if (!item) return null;
  const vertical = item.video?.ratio === "vertical" || item.photo?.ratio === "portrait";
  return (
    <div className={s.moment} data-vertical={vertical || undefined} data-side={index % 2 ? "right" : "left"}>
      {item.video ? (
        <VideoFrame video={item.video} className={s.momentMedia} tilt={MOMENT_TILTS[index % MOMENT_TILTS.length]} />
      ) : item.photo ? (
        <Print photo={item.photo} tilt={MOMENT_TILTS[index % MOMENT_TILTS.length]} tape={{ color: "kraft", at: "top" }} className={s.momentMedia} width={800} />
      ) : null}
      {item.note && (
        <Note
          className={s.momentNote}
          note={{ ...item.note, paper: item.note.paper ?? MOMENT_PAPERS[index % MOMENT_PAPERS.length] }}
          tilt={MOMENT_TILTS[(index + 1) % MOMENT_TILTS.length]}
        />
      )}
    </div>
  );
}

function Moments({ block, ctx }: { block: Of<"momentos">; ctx: Ctx }) {
  const pairs: Moment[][] = [];
  for (let i = 0; i < block.items.length; i += 2) pairs.push(block.items.slice(i, i + 2));
  return (
    <>
      {pairs.map((pair, p) => (
        <Spread
          key={p}
          folio={ctx.folio + p * 2}
          running={ctx.section.title}
          label={`${ctx.section.title}: recuerdos ${p * 2 + 1}${pair[1] ? ` y ${p * 2 + 2}` : ""}`}
          left={<MomentPage item={pair[0]} index={p * 2} />}
          right={<MomentPage item={pair[1]} index={p * 2 + 1} />}
        />
      ))}
    </>
  );
}

/* ── Foto a doble página con una frase encima ── */

function FullBleed({ block, ctx }: { block: Of<"foto-completa">; ctx: Ctx }) {
  return (
    <Spread
      folio={ctx.folio}
      bleed="across"
      label={block.photo.alt}
      across={
        <div className={s.fullBleed}>
          <div>
            <PhotoImage photo={block.photo} fill width={1600} />
          </div>
          {block.quote && (
            <div className={s.quote}>
              <Tape color="rosa" at="top" rotate={-4} />
              <Note
                note={{ id: "quote", paper: "rasgado", from: "", body: block.quote }}
                tilt={-1.5}
              />
              {block.quoteFrom && (
                <span className={s.quoteFrom} style={{ paddingLeft: "1.6rem" }}>
                  {block.quoteFrom}
                </span>
              )}
            </div>
          )}
        </div>
      }
    />
  );
}

/* ── Sobre lacrado a la izquierda; audio y video a la derecha ── */

function Voices({ block, ctx }: { block: Of<"sobre-y-voces">; ctx: Ctx }) {
  // Solo la carta: el título a la izquierda y el sobre a la derecha.
  if (!block.audio && !block.video) {
    return (
      <Spread
        folio={ctx.folio}
        running={ctx.section.title}
        label="Una carta"
        left={
          <div className={s.voicesLeft}>
            <h2 className={s.voicesHeading}>Lo que no cupo en una nota</h2>
          </div>
        }
        right={
          <div className={s.letterOnly}>
            <Envelope letter={block.letter} />
          </div>
        }
      />
    );
  }
  return (
    <Spread
      folio={ctx.folio}
      running={ctx.section.title}
      label="Una carta, un audio y un video"
      left={
        <div className={s.voicesLeft}>
          <h2 className={s.voicesHeading}>Lo que no cupo en una nota</h2>
          <Envelope letter={block.letter} />
        </div>
      }
      right={
        <div className={s.voicesRight}>
          {block.audio && <AudioNote audio={block.audio} />}
          {block.video && <VideoFrame video={block.video} />}
        </div>
      }
    />
  );
}
