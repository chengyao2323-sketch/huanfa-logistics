"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { servicesContent } from "@/content/services";

export default function ServiceProofPhotos() {
  const { locale } = useI18n();
  const { ui } = servicesContent[locale];
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const photos = [
    { src: "/operations/warehouse-operations.webp", alt: ui.operationsAlt },
    { src: "/customer-feedback/brian-packaging-collage.jpg", alt: ui.packingAlt },
  ];

  useEffect(() => {
    if (selected === null) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  return <section className="mt-10" aria-labelledby="service-photos-title">
    <h2 id="service-photos-title" className="text-2xl font-bold text-brand-800">{ui.photoTitle}</h2>
    <p className="mb-5 mt-3 text-sm leading-relaxed text-slate-600">{ui.photoNote}</p>
    <div className="grid gap-4 sm:grid-cols-2">
      {photos.map((photo, index) => <figure key={photo.src}>
        <button type="button" className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600" aria-label={`${locale === "zh" ? "放大查看：" : "Enlarge: "}${photo.alt}`} onClick={event => { trigger.current = event.currentTarget; setSelected(index); }}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 390px, (min-width: 640px) 45vw, 90vw" className="object-contain" />
        </button>
        <figcaption className="mt-2 text-xs leading-relaxed text-slate-500">{photo.alt}</figcaption>
      </figure>)}
    </div>
    {selected !== null && <dialog ref={dialog} aria-label={photos[selected].alt} className="fixed m-auto max-h-[94vh] w-[94vw] max-w-6xl overflow-auto rounded-xl border-0 bg-slate-950 p-4 text-white shadow-2xl backdrop:bg-black/80" onCancel={event => { event.preventDefault(); setSelected(null); }} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }}>
      <div className="mb-3 flex justify-end">
        <button type="button" autoFocus onClick={() => setSelected(null)} className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" aria-label={locale === "zh" ? "关闭图片" : "Close image"}>×</button>
      </div>
      <button type="button" className="block w-full cursor-zoom-out" onClick={() => setSelected(null)} aria-label={locale === "zh" ? "点击图片关闭" : "Click image to close"}>
        {/* Keep the original photo fully visible in the in-page viewer. */}
        <img src={photos[selected].src} alt={photos[selected].alt} className="mx-auto max-h-[75vh] w-auto max-w-full object-contain" />
      </button>
    </dialog>}
  </section>;
}
