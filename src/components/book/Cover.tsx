"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { book } from "@/content/book";
import { consumeCloseFlag } from "./CloseBook";
import s from "./cover.module.css";

/** Sello circular con los nombres de los cinco equipos. */
function TeamsStamp({ teams }: { teams: string[] }) {
  const text = teams.join("  ✦  ") + "  ✦  ";
  return (
    <svg className={s.stamp} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="stamp-circle" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="33" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fill="currentColor" fontSize="9.6" letterSpacing="0.4" style={{ fontFamily: "var(--f-display)" }}>
        <textPath href="#stamp-circle" textLength="272">
          {text}
        </textPath>
      </text>
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fill="currentColor"
        fontSize="20"
        fontStyle="italic"
        style={{ fontFamily: "var(--f-display)" }}
      >
        EP
      </text>
    </svg>
  );
}

/** Etiqueta "Ex libris" con el nombre de la dueña del libro. */
function ExLibris({ className }: { className?: string }) {
  return (
    <div className={`${s.exlibris} ${className ?? ""}`}>
      <p className={s.exlibrisTitle}>Ex libris</p>
      <p className={s.exlibrisText}>Este libro pertenece a</p>
      <p className={s.exlibrisName}>{book.honoree || " "}</p>
    </div>
  );
}

export function Cover() {
  const [open, setOpen] = useState(false);
  const [instant, setInstant] = useState(false);
  const startRef = useRef<HTMLAnchorElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const userAction = useRef(false);

  // Si se llega desde "Cerrar el libro" en una página interior, el libro
  // aparece abierto y se cierra delante de la persona.
  useLayoutEffect(() => {
    if (!consumeCloseFlag()) return;
    setInstant(true);
    setOpen(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setInstant(false);
        setOpen(false);
      }),
    );
  }, []);

  // El foco acompaña la acción: al abrir va a "Empezar a leer"; al cerrar, a "Abrir el libro".
  useEffect(() => {
    if (!userAction.current) return;
    const target = open ? startRef.current : openRef.current;
    const t = setTimeout(() => target?.focus({ preventScroll: true }), open ? 900 : 50);
    return () => clearTimeout(t);
  }, [open]);

  function toggle(next: boolean) {
    userAction.current = true;
    setOpen(next);
  }

  return (
    <main className={s.stage}>
      <div className={s.book} data-open={open || undefined} data-instant={instant || undefined}>
        <section className={s.inside} aria-hidden={!open} inert={!open}>
          <span className={s.ribbon} aria-hidden="true" />
          {/* En el celular la tapa desaparece al abrir: el ex libris pasa a la primera página */}
          <ExLibris className={s.exlibrisMobile} />
          <p className={s.dedication}>Para ti,</p>
          <p className={s.insideText}>de las personas que tuvieron la suerte de trabajar contigo.</p>
          <Link href="/prologo/" className={s.start} ref={startRef}>
            Empezar a leer
          </Link>
          <Link href="/indice/" className={s.toIndex}>
            Ir al índice
          </Link>
        </section>

        <div className={s.cover}>
          <div className={s.front}>
            <div className={s.label}>
              <h1 className={s.title}>
                <span>Entre</span>
                <span>páginas</span>
              </h1>
              <p className={s.tagline}>{book.tagline}</p>
            </div>
            <TeamsStamp teams={book.teams} />
            <p className={s.authors}>{book.authors}</p>
          </div>
          <div className={s.back}>
            <ExLibris />
          </div>
        </div>
      </div>

      <button type="button" className={s.open} onClick={() => toggle(!open)} ref={openRef}>
        {open ? "Cerrar el libro" : "Abrir el libro"}
        <svg viewBox="0 0 140 10" fill="none" aria-hidden="true">
          <path
            d="M2 6 C 30 2, 50 9, 75 5 S 120 3, 138 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </main>
  );
}
