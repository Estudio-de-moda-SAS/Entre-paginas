"use client";

import { useId, useState } from "react";
import type { Letter } from "@/content/types";
import { LetterSheet } from "./LetterSheet";
import s from "./interactive.module.css";

/** Sobre lacrado. Al abrirlo, la carta se despliega debajo. */
export function Envelope({ letter }: { letter: Letter & { envelopeTo: string } }) {
  const [open, setOpen] = useState(false);
  const letterId = useId();

  return (
    <div className={s.envelopeWrap} data-open={open || undefined}>
      <button
        type="button"
        className={s.envelope}
        aria-expanded={open}
        aria-controls={letterId}
        onClick={() => setOpen(true)}
        disabled={open}
      >
        <span className="visually-hidden">Abrir la carta</span>
        <span className={s.envBack} aria-hidden="true" />
        <span className={s.envPaper} aria-hidden="true" />
        <span className={s.envFront} aria-hidden="true">
          <span className={s.envTo}>{letter.envelopeTo}</span>
        </span>
        <span className={s.envFlap} aria-hidden="true" />
        <span className={s.seal} aria-hidden="true">
          EP
        </span>
      </button>

      {!open && (
        <p className={s.hint} aria-hidden="true">
          toca el sobre para abrirlo
        </p>
      )}

      <div id={letterId} hidden={!open}>
        {open && <LetterSheet letter={letter} className={s.unfold} />}
      </div>
    </div>
  );
}
