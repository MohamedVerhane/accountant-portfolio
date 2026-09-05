"use client";

import { translations } from "@/lib/i18n/translations";
import { useAppSelector } from "@/redux/hooks";
import type { Locale } from "@/redux/slices/locale-slice";

type Dict = (typeof translations)["ar"];

function useLocale(): Locale {
  return useAppSelector((state) => state.locale.locale);
}

function useTranslations<K extends keyof Dict>(namespace: K) {
  const locale = useLocale();
  const dict = translations[locale];
  const messages = dict[namespace];
  const t = (key: string, fallback?: string): string => {
    const value = (messages as Record<string, unknown>)[key];
    return typeof value === "string" ? value : (fallback ?? key);
  };
  return { locale, t, messages };
}

export { useLocale, useTranslations, translations };
export type { Locale };