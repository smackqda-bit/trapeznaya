"use client";

import { useEffect, useRef, useState } from "react";
import { gallery } from "@/content";
import { Photo } from "./Photo";

const pad = (n: number) => String(n).padStart(2, "0");

export function Gallery() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const n = gallery.length;
  const go = (i: number) => setIdx(((i % n) + n) % n);

  // Автолистание каждые 6 секунд, пауза при наведении
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section id="gallery" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Галерея</span>
            <h2 className="heading">Атмосфера Трапезной</h2>
          </div>
          <div className="flex items-center gap-6">
            <span aria-live="polite" className="font-serif text-[28px] tracking-[0.04em]">
              {pad(idx + 1)} / {pad(n)}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Предыдущее фото"
                onClick={() => go(idx - 1)}
                className="flex h-14 w-14 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-ivory"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Следующее фото"
                onClick={() => go(idx + 1)}
                className="flex h-14 w-14 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-ivory"
              >
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className="cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={(e) => {
            startX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (startX.current === null) return;
            const dx = e.clientX - startX.current;
            startX.current = null;
            if (dx < -40) go(idx + 1);
            else if (dx > 40) go(idx - 1);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(idx - 1);
            if (e.key === "ArrowRight") go(idx + 1);
          }}
          tabIndex={0}
          role="region"
          aria-roledescription="карусель"
          aria-label="Фотографии Трапезной"
        >
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)]"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {gallery.map((s, i) => (
              <figure
                key={s.title}
                className="m-0 flex flex-[0_0_100%] flex-col gap-4"
                aria-hidden={i !== idx}
                aria-roledescription="слайд"
              >
                <Photo
                  label={s.title}
                  image={s.image}
                  className="h-[clamp(320px,52vw,640px)]"
                  sizes="(min-width: 1280px) 1216px, 100vw"
                />
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <span className="font-serif text-[28px]">{s.title}</span>
                  <span className="text-sm font-light text-body">{s.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {gallery.map((s, i) => (
            <button
              key={s.title}
              type="button"
              aria-label={`Фото ${i + 1}: ${s.title}`}
              aria-current={i === idx}
              onClick={() => go(i)}
              className="flex h-6 flex-1 items-center"
            >
              <span
                className={`block w-full transition-colors duration-300 ${i === idx ? "h-0.5 bg-ink" : "h-px bg-[#c9c1b2]"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
