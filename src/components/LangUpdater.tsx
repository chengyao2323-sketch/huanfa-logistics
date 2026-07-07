"use client";

import { useEffect } from "react";
import { useI18n } from "@/i18n";

export default function LangUpdater() {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return null;
}
