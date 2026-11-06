import type { CSSProperties } from "react";
import s from "./objects.module.css";

export type TapeProps = {
  color?: "rosa" | "oliva" | "kraft";
  at?: "top" | "top-left" | "top-right" | "bottom-right";
  /** Giro en grados, si se quiere distinto al de la posición. */
  rotate?: number;
};

/** Trozo de cinta washi. Se coloca sobre el borde del objeto que sostiene. */
export function Tape({ color = "rosa", at = "top", rotate }: TapeProps) {
  const style = rotate !== undefined ? ({ "--tape-rot": `${rotate}deg` } as CSSProperties) : undefined;
  return <span className={s.tape} data-color={color} data-at={at} style={style} aria-hidden="true" />;
}

/** Clip metálico, dibujado a trazo. */
export function Clip({ style }: { style?: CSSProperties }) {
  return (
    <svg className={s.clip} style={style} viewBox="0 0 24 64" fill="none" aria-hidden="true">
      <path
        d="M8 20 V52 a6 6 0 0 0 12 0 V10 a8 8 0 0 0 -16 0 V50 a4 4 0 0 0 8 0 V20"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Anotación a lápiz que marca el contenido provisional. */
export function DemoMark({ children = "texto provisional" }: { children?: string }) {
  return <span className={s.demoMark}>{children}</span>;
}
