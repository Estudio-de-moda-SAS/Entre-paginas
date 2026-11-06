import s from "./book.module.css";

/** Sello discreto mientras el libro tenga contenido de demostración. */
export function DemoStamp() {
  return (
    <p className={s.demoStamp} role="note">
      versión de demostración
    </p>
  );
}
