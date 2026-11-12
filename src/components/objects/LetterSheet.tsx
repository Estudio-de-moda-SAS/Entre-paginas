import type { CSSProperties, ReactNode } from "react";
import type { Letter } from "@/content/types";
import { DemoMark } from "./Tape";
import s from "./interactive.module.css";

type Props = {
  letter: Letter;
  /**
   * Qué parte de la carta dibujar cuando tiene `breakAfter`:
   * "primera" (saludo + primeros párrafos), "segunda" (resto + firma) o "completa".
   */
  sheet?: "completa" | "primera" | "segunda";
  tilt?: number;
  className?: string;
  children?: ReactNode;
  id?: string;
};

/** Una hoja de carta en papel blanco: saludo, párrafos y firma manuscrita. */
export function LetterSheet({ letter, sheet = "completa", tilt = 0, className, children, id }: Props) {
  const cut = letter.breakAfter ?? letter.body.length;
  const paragraphs =
    sheet === "primera" ? letter.body.slice(0, cut) : sheet === "segunda" ? letter.body.slice(cut) : letter.body;
  const showTo = sheet !== "segunda";
  const showSign = sheet !== "primera";

  return (
    <article
      className={`${s.letter} ${className ?? ""}`}
      id={id}
      style={tilt ? ({ rotate: `${tilt}deg` } as CSSProperties) : undefined}
    >
      {children}
      {letter.demo && showTo && (
        <span className={s.letterDemo}>
          <DemoMark />
        </span>
      )}
      {showTo && <p className={s.letterTo}>{letter.to}</p>}
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {showSign && letter.closing && <p className={s.letterClosing}>{letter.closing}</p>}
      {showSign && (
        <p className={s.letterSign}>
          {letter.signature}
          {letter.date && <span className={s.letterDate}>{letter.date}</span>}
        </p>
      )}
    </article>
  );
}
