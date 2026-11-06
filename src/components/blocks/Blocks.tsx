import type { ReactNode } from "react";
import type { Block, Note as NoteData, Section } from "@/content/types";
import { Spread } from "@/components/book/Spread";
import { PhotoImage, Polaroid, Print } from "@/components/objects/Photo";
import { Note } from "@/components/objects/Note";
import { DemoMark, Tape } from "@/components/objects/Tape";
import { Envelope } from "@/components/objects/Envelope";
import { AudioNote } from "@/components/objects/AudioNote";
import { VideoFrame } from "@/components/objects/VideoFrame";
import s from "./blocks.module.css";

type Ctx = { section: Section; folio: number };

/** Cuántos pliegos ocupa un bloque (para numerar los folios). */
export function spreadsFor(block: Block): number {
  if (block.type === "notas") return chunkNotes(block.notes).length;
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

/** Notas por pliego: 4 en la página izquierda (bajo el título) y 6 en la derecha. */
const PER_SPREAD = 10;
const PER_LEFT = 4;
function chunkNotes(notes: NoteData[]) {
  const out: NoteData[][] = [];
  for (let i = 0; i < notes.length; i += PER_SPREAD) out.push(notes.slice(i, i + PER_SPREAD));
  return out.length ? out : [[]];
}
const TILTS = [-1.2, -3, 1.5, -1, 2.5, -2, 1];

function Notes({ block, ctx }: { block: Of<"notas">; ctx: Ctx }) {
  const chunks = chunkNotes(block.notes);
  return (
    <>
      {chunks.map((chunk, c) => {
        const left = chunk.slice(0, PER_LEFT);
        const right = chunk.slice(PER_LEFT);
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
                  <Note key={n.id} note={n} tilt={TILTS[(i + PER_LEFT) % TILTS.length]} />
                ))}
              </div>
            }
          />
        );
      })}
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
