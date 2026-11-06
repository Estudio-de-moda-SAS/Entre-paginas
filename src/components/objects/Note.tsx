import type { CSSProperties } from "react";
import type { Note as NoteData } from "@/content/types";
import { Clip, DemoMark, Tape } from "./Tape";
import s from "./objects.module.css";

type Props = {
  note: NoteData;
  tilt?: number;
  className?: string;
  style?: CSSProperties;
};

/** Cómo se sujeta cada papel al álbum. */
function Fastener({ paper }: { paper: NoteData["paper"] }) {
  switch (paper) {
    case "carta":
      return <Clip style={{ right: "2.2rem" }} />;
    case "cuaderno":
      return <Tape color="kraft" at="top" rotate={2} />;
    case "rasgado":
      return <Tape color="oliva" at="top-left" />;
    default:
      return null; // la adhesiva se pega sola, la etiqueta cuelga del ojal
  }
}

/** Un mensaje escrito en un papel físico. */
export function Note({ note, tilt = 0, className, style }: Props) {
  const paragraphs = note.body.split(/\n\n+/);
  return (
    <figure
      className={`${s.note} ${className ?? ""}`}
      data-paper={note.paper}
      style={{ "--tilt": `${tilt}deg`, margin: 0, ...style } as CSSProperties}
    >
      <Fastener paper={note.paper} />
      <blockquote style={{ margin: 0 }}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </blockquote>
      {note.from && (
        <figcaption className={s.noteMeta}>
          <span className={s.noteSign}>{note.from}</span>
          {note.demo && <DemoMark>nombre ficticio</DemoMark>}
        </figcaption>
      )}
    </figure>
  );
}
