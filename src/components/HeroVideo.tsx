"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);
  const { locale } = useI18n();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let visible = true;
    const sync = () => {
      if (visible && !document.hidden && !userPaused.current && !motion.matches && !connection?.saveData) {
        if (!video.getAttribute("src")) video.src = "/video/hero-logistics.mp4";
        void video.play().catch(() => setPlaying(false));
      } else video.pause();
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); motion.removeEventListener("change", sync); video.pause(); };
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    userPaused.current = !video.paused;
    if (video.paused) {
      if (!video.getAttribute("src")) video.src = "/video/hero-logistics.mp4";
      void video.play().catch(() => setPlaying(false));
    } else video.pause();
  };
  return <>
    <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" muted loop playsInline preload="none" poster="/video/hero-logistics-poster.jpg" aria-hidden="true" disablePictureInPicture onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    <button type="button" onClick={toggle} className="absolute bottom-4 left-4 z-10 min-h-11 rounded-full border border-white/40 bg-black/50 px-4 text-xs font-semibold text-white hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6">
      {locale === "zh" ? (playing ? "暂停背景视频" : "播放背景视频") : (playing ? "Pause video" : "Play video")}
    </button>
  </>;
}
