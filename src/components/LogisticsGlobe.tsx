"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LogisticsGlobeCanvas = dynamic(() => import("@/components/LogisticsGlobeCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function LogisticsGlobe() {
  const [renderGlobe, setRenderGlobe] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setRenderGlobe(desktop.matches && !reducedMotion.matches);
    update();
    desktop.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-blue-400/20 blur-3xl" />
      {renderGlobe ? (
        <LogisticsGlobeCanvas />
      ) : (
        <div className="absolute inset-[18%] rounded-full border border-blue-300/30 bg-[radial-gradient(circle_at_35%_28%,rgba(96,165,250,0.55),rgba(15,23,42,0.85)_55%,rgba(2,6,23,0.95))] shadow-[0_0_70px_rgba(59,130,246,0.35)] md:hidden" />
      )}
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[7%] h-24 bg-gradient-to-t from-brand-900 via-brand-900/80 to-transparent" />
    </div>
  );
}
