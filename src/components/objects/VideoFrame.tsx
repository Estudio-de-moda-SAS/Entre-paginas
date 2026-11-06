"use client";

import { useState } from "react";
import type { Video } from "@/content/types";
import { youtubeEmbedUrl, youtubeId } from "@/lib/media";
import { DemoMark, Tape } from "./Tape";
import s from "./interactive.module.css";

/**
 * Video de YouTube dentro de una copia impresa. El reproductor solo se
 * carga cuando la persona lo pide, así la página no pesa de entrada.
 */
export function VideoFrame({ video }: { video: Video }) {
  const id = youtubeId(video.youtube);
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={s.video}>
      <Tape color="rosa" at="top" rotate={2} />
      <div className={s.screen}>
        {playing && id ? (
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
        <span>{video.caption ?? video.title}</span>
        {video.demo && <DemoMark>video de demostración</DemoMark>}
      </figcaption>
    </figure>
  );
}
