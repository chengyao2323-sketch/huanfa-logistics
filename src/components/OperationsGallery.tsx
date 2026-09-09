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
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);

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
      <div id="operations-photo-strip" className={styles.viewport} tabIndex={0} aria-label={t.galleryLabel}>
        <div className={styles.track} data-paused={paused || !inView}>
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className={styles.group} aria-hidden={duplicate ? true : undefined}>
              {photos.map((photo) => (
                <figure key={photo.src} className={styles.photo}>
                  <Image
                    src={photo.src}
                    alt={duplicate ? "" : t[photo.label]}
                    fill
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
