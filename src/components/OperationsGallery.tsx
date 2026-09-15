"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useT } from "@/i18n";
import styles from "./OperationsGallery.module.css";

const photos = [
  { src: "/operations/warehouse-exterior.webp", label: "warehouse1", position: "50% 50%" },
  { src: "/operations/container-loading.webp", label: "warehouse2", position: "50% 50%" },
  { src: "/operations/warehouse-operations.webp", label: "team", position: "50% 50%" },
  { src: "/operations/warehouse-storage.jpg", label: "storage", position: "50% 48%" },
  { src: "/operations/palletized-cargo.jpg", label: "pallets", position: "50% 56%" },
  { src: "/operations/indoor-forklift.jpg", label: "forklift", position: "50% 48%" },
  { src: "/operations/night-loading.jpg", label: "nightLoading", position: "50% 50%" },
] as const;

export default function OperationsGallery() {
  const { real: t } = useT().homeSections;
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const groupWidth = useRef(0);
  const drag = useRef<{ pointerId: number; x: number } | null>(null);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [keyboardFocused, setKeyboardFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  function moveBy(distance: number) {
    const width = groupWidth.current;
    if (!width || !trackRef.current) return;
    offset.current = ((offset.current + distance) % width + width) % width;
    trackRef.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
  }

  function endDrag(pointerId: number) {
    if (drag.current?.pointerId !== pointerId) return;
    drag.current = null;
    setDragging(false);
  }

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    const resize = new ResizeObserver(() => {
      const width = group.getBoundingClientRect().width;
      if (groupWidth.current) offset.current *= width / groupWidth.current;
      groupWidth.current = width;
      moveBy(0);
    });
    resize.observe(group);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => {
      resize.disconnect();
      media.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    if (paused || !inView || dragging || keyboardFocused || reducedMotion) return;
    let frame: number;
    let previous: number | undefined;
    const tick = (now: number) => {
      if (previous !== undefined && !drag.current) {
        // Preserve the original 70-second loop, without jumping after a hidden tab.
        moveBy((Math.min(now - previous, 64) / 70000) * groupWidth.current);
      }
      previous = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, inView, dragging, keyboardFocused, reducedMotion]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={galleryRef} className={styles.gallery} role="region" aria-label={t.title}>
      <div
        id="operations-photo-strip"
        className={styles.viewport}
        tabIndex={0}
        aria-label={t.galleryLabel}
        data-dragging={dragging}
        onFocus={(event) => setKeyboardFocused(event.currentTarget.matches(":focus-visible"))}
        onBlur={() => setKeyboardFocused(false)}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0 || drag.current) return;
          drag.current = { pointerId: event.pointerId, x: event.clientX };
          setDragging(true);
          setKeyboardFocused(false);
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current?.pointerId !== event.pointerId) return;
          moveBy(drag.current.x - event.clientX);
          drag.current.x = event.clientX;
        }}
        onPointerUp={(event) => {
          endDrag(event.pointerId);
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={(event) => endDrag(event.pointerId)}
        onLostPointerCapture={(event) => endDrag(event.pointerId)}
        onDragStart={(event) => event.preventDefault()}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          setKeyboardFocused(true);
          moveBy((event.key === "ArrowRight" ? 1 : -1) * groupWidth.current / photos.length);
        }}
      >
        <div ref={trackRef} className={styles.track}>
          {[false, true].map((duplicate) => (
            <div ref={duplicate ? undefined : groupRef} key={String(duplicate)} className={styles.group} aria-hidden={duplicate ? true : undefined}>
              {photos.map((photo) => (
                <figure key={photo.src} className={styles.photo}>
                  <Image
                    src={photo.src}
                    alt={duplicate ? "" : t[photo.label]}
                    fill
                    draggable={false}
                    sizes="(max-width: 1120px) 280px, (max-width: 1760px) 25vw, 440px"
                    className={styles.image}
                    style={{ objectPosition: photo.position }}
                  />
                  <figcaption className={styles.caption}>{t[photo.label]}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={styles.control}
        onClick={() => setPaused(!paused)}
        aria-controls="operations-photo-strip"
        aria-label={paused ? t.resume : t.pause}
        title={paused ? t.resume : t.pause}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          {paused ? <path d="m8 5 11 7-11 7V5Z" /> : <path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z" />}
        </svg>
      </button>
    </div>
  );
}
