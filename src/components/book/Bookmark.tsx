"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./book.module.css";

/** Cinta marcapáginas fija: siempre lleva al índice. No aparece en la portada. */
export function Bookmark() {
  const path = usePathname();
  if (path === "/" || path.startsWith("/indice")) return null;
  return (
    <Link href="/indice/" className={s.bookmark} aria-label="Ir al índice">
      <span className={s.bookmarkLabel} aria-hidden="true">
        índice
      </span>
    </Link>
  );
}
