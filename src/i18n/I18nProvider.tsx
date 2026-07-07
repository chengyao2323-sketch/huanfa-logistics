"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Locale, I18nDict } from "./types";
import zh from "./zh";
import en from "./en";

type I18nContextValue = {
  locale: Locale;
  t: I18nDict;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const dictionaries: Record<Locale, I18nDict> = { zh, en };

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "zh" || saved === "en") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", l);
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "zh" ? "en" : "zh");
  }, [locale, setLocale]);

  const t = dictionaries[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}
