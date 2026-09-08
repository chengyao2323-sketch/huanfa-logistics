"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useI18n } from "@/i18n";

export type LightboxImage = { src: string; alt: string };

type ImageLightboxProps = {
  image: LightboxImage | null;
  onClose: () => void;
  closeLabel: string;
};

export default function ImageLightbox({ image, onClose, closeLabel }: ImageLightboxProps) {
  const { locale } = useI18n();
  const titleId = useId();
  const helpId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const [actualSize, setActualSize] = useState(false);
  const src = image?.src;
  const isChinese = locale === "zh";

  useEffect(() => {
    if (!src || !dialog.current) return;

    const modal = dialog.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const body = document.body;
    const originalStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    setActualSize(false);
    dragged.current = false;
    // A native modal keeps keyboard focus inside the viewer and makes the page inert.
    if (!modal.open) modal.showModal();
    // Fixed positioning also prevents the background from scrolling on mobile Safari.
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = `-${scrollX}px`;
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      modal.close();
      Object.assign(body.style, originalStyles);
      const root = document.documentElement;
      const originalScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(scrollX, scrollY);
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
      root.style.scrollBehavior = originalScrollBehavior;
    };
  }, [src]);

  useEffect(() => {
    if (viewport.current) {
      viewport.current.scrollTop = 0;
      viewport.current.scrollLeft = 0;
    }
  }, [actualSize, src]);

  if (!image) return null;

  const closeOnBackground = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget && !dragged.current) onClose();
  };

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      aria-describedby={helpId}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none border-0 bg-slate-950/95 p-0 text-white backdrop:bg-black/80"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={closeOnBackground}
      onPointerDown={event => {
        pointerStart.current = { x: event.clientX, y: event.clientY };
        dragged.current = false;
      }}
      onPointerMove={event => {
        const start = pointerStart.current;
        if (start && (Math.abs(event.clientX - start.x) > 8 || Math.abs(event.clientY - start.y) > 8)) {
          dragged.current = true;
        }
      }}
      onPointerUp={() => { pointerStart.current = null; }}
      onPointerCancel={() => { pointerStart.current = null; dragged.current = true; }}
    >
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 items-center gap-3 border-b border-white/15 px-3 py-2 sm:px-5" style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}>
          <h2 id={titleId} className="min-w-0 flex-1 text-sm font-medium leading-snug">
            {image.alt}
          </h2>
          <button
            type="button"
            aria-pressed={actualSize}
            aria-label={isChinese ? "原始尺寸显示" : "Show at actual size"}
            className="min-h-11 shrink-0 rounded-lg border border-white/40 px-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={() => setActualSize(value => !value)}
          >
            {actualSize ? (isChinese ? "适应屏幕" : "Fit to screen") : (isChinese ? "原始尺寸" : "Actual size")}
          </button>
          <button
            type="button"
            autoFocus
            aria-label={closeLabel}
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>
        <p id={helpId} className="shrink-0 px-4 py-2 text-center text-xs leading-relaxed text-slate-300" aria-live="polite">
          {actualSize
            ? (isChinese ? "滑动或滚动查看原图；点击图片或关闭按钮收起。" : "Swipe or scroll to explore the original image. Click the image or close button to dismiss.")
            : (isChinese ? "可切换原始尺寸阅读聊天内容；点击图片、背景或关闭按钮收起。" : "Choose Actual size to read chat details. Click the image, background, or close button to dismiss.")}
        </p>
        <div
          ref={viewport}
          className="min-h-0 flex-1 overflow-auto overscroll-contain"
          onClick={closeOnBackground}
          onScroll={() => { dragged.current = true; }}
        >
          <div
            className={`flex items-center justify-center p-3 sm:p-5 ${actualSize ? "min-h-full min-w-full w-max" : "h-full w-full"}`}
            onClick={closeOnBackground}
          >
            <button
              type="button"
              aria-label={isChinese ? "点击图片关闭" : "Click image to close"}
              className={`cursor-zoom-out border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${actualSize ? "block shrink-0" : "flex h-full w-full items-center justify-center"}`}
              onClick={event => {
                // A swipe across a tall screenshot must not dismiss it when released.
                if (event.detail === 0 || !dragged.current) onClose();
              }}
            >
              {/* Load the same original asset in both modes; only its display size changes. */}
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className={actualSize ? "block h-auto w-auto max-w-none select-none" : "block h-auto max-h-full w-auto max-w-full select-none object-contain"}
              />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
