"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./book.module.css";

const FLAG = "ep-cerrar";

/** Lo lee la portada: si existe, el libro se cierra con animación al llegar. */
export function consumeCloseFlag(): boolean {
  try {
    if (!sessionStorage.getItem(FLAG)) return false;
    sessionStorage.removeItem(FLAG);
    return true;
  } catch {
    return false;
  }
}

/** Etiqueta fija para volver a la portada desde cualquier página interior. */
export function CloseBook() {
  const path = usePathname();
  if (path === "/") return null;
  return (
    <Link
      href="/"
      className={s.closeBook}
      onClick={() => {
        try {
          sessionStorage.setItem(FLAG, "1");
        } catch {
          // sin almacenamiento: la portada aparece cerrada directamente
        }
      }}
    >
      Cerrar el libro
    </Link>
  );
}
