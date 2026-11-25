"use client";

import { useEffect } from "react";

export default function ConversionTracking() {
  useEffect(() => {
    let lastClick = 0;
    function track(event: MouseEvent) {
      if (!event.isTrusted || (event.type === "auxclick" && event.button !== 1)) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href);
      if (!["wa.me", "api.whatsapp.com", "web.whatsapp.com"].includes(url.hostname)) return;
      const now = Date.now();
      if (now - lastClick < 1500) return;
      lastClick = now;
      const payload = JSON.stringify({ event: "whatsapp_click", path: window.location.pathname });
      // Keep navigation immediate and do not store a visitor ID.
      void fetch("/api/events", { method: "POST", body: payload, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
    }
    document.addEventListener("click", track, true);
    document.addEventListener("auxclick", track, true);
    return () => {
      document.removeEventListener("click", track, true);
      document.removeEventListener("auxclick", track, true);
    };
  }, []);
  return null;
}
