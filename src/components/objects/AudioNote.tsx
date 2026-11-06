"use client";

import { useRef, useState, type CSSProperties } from "react";
import type { Audio } from "@/content/types";
import { DemoMark, Tape } from "./Tape";
import s from "./interactive.module.css";

function fmt(sec: number) {
  if (!Number.isFinite(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const r = Math.floor(sec % 60);
  return `${m}:${String(r).padStart(2, "0")}`;
}

/** Nota de voz en una tarjeta de papel. */
export function AudioNote({ audio }: { audio: Audio }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const available = Boolean(audio.src);

  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  }

  const progress = duration ? (time / duration) * 100 : 0;

  return (
    <figure className={s.audio}>
      <Tape color="kraft" at="top-left" />
      <div className={s.audioRow}>
        <button
          type="button"
          className={s.play}
          onClick={toggle}
          disabled={!available}
          aria-label={playing ? "Pausar" : `Escuchar: ${audio.title}`}
        >
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M5 3v12M13 3v12" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M5 2.5 15 9 5 15.5Z" fill="currentColor" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <div>
          <figcaption>
            <span className={s.audioTitle}>{audio.title}</span>
            <br />
            <span className={s.audioFrom}>{audio.from}</span>
          </figcaption>
          <div className={s.track}>
            <input
              type="range"
              className={s.range}
              min={0}
              max={duration || 1}
              step={0.1}
              value={time}
              disabled={!available}
              aria-label="Posición del audio"
              style={{ "--p": `${progress}%` } as CSSProperties}
              onChange={(e) => {
                const t = Number(e.target.value);
                if (ref.current) ref.current.currentTime = t;
                setTime(t);
              }}
            />
            <span>{duration ? `${fmt(time)} / ${fmt(duration)}` : (audio.duration ?? "")}</span>
          </div>
        </div>
      </div>

      {!available && (
        <p style={{ margin: "0.9rem 0 0", display: "flex", gap: "0.75rem", alignItems: "center", flexWrap: "wrap" }}>
          <span className={s.audioFrom}>el audio llegará pronto</span>
          {audio.demo && <DemoMark>audio de demostración</DemoMark>}
        </p>
      )}

      {audio.transcript && (
        <details className={s.transcript}>
          <summary>leer lo que dice</summary>
          <p>{audio.transcript}</p>
        </details>
      )}

      {available && (
        <audio
          ref={ref}
          src={audio.src}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        />
      )}
    </figure>
  );
}
