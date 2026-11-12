"use client";

import { useState } from "react";
import type { Video } from "@/content/types";
import { youtubeEmbedUrl, youtubeId } from "@/lib/media";
import { DemoMark, Tape } from "./Tape";
import s from "./interactive.module.css";

/**
 * Video dentro de una copia impresa. Puede ser un archivo propio
 * (public/videos/) o un video de YouTube. Nada se reproduce solo: el de
 * YouTube ni siquiera se carga hasta que la persona lo pide.
 */
export function VideoFrame({ video, className, tilt }: { video: Video; className?: string; tilt?: number }) {
  const id = youtubeId(video.youtube);
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={`${s.video} ${className ?? ""}`} data-ratio={video.ratio ?? "horizontal"}
      style={tilt === undefined ? undefined : { rotate: `${tilt}deg` }}
    >
      <Tape color="rosa" at="top" rotate={2} />
      <div className={s.screen}>
        {video.src ? (
          // "#t=0.1" hace que el navegador (también en iPhone) muestre el primer cuadro como portada
          <video src={`${video.src}#t=0.1`} controls playsInline preload="metadata" aria-label={video.title} />
        ) : playing && id ? (
          <iframe
            src={youtubeEmbedUrl(id)}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className={s.facade} onClick={() => setPlaying(true)} disabled={!id}>
            <span className={s.facadeIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 18 18">
                <path d="M5 2.5 15 9 5 15.5Z" fill="currentColor" />
              </svg>
            </span>
            <span className={s.facadeLabel}>{id ? `Ver: ${video.title}` : "aquí irá el video del equipo"}</span>
          </button>
        )}
      </div>
      <figcaption className={s.videoCaption}>
        <span>
          {video.caption ?? video.title}
          {video.from && <span className={s.videoFrom}>{video.from}</span>}
        </span>
        {video.demo && <DemoMark>video de demostración</DemoMark>}
      </figcaption>
    </figure>
  );
}
