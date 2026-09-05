"use client";

import * as React from "react";
import { useLocale } from "@/lib/i18n";
import { useAppDispatch } from "@/redux/hooks";
import { setLocale, STORAGE_KEY } from "@/redux/slices/locale-slice";

function LocaleRoot({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if ((stored === "ar" || stored === "en") && stored !== locale) {
        dispatch(setLocale(stored));
      }
    } catch {
      // ignore storage errors
    }
  }, [dispatch, locale]);

  React.useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return <>{children}</>;
}

export { LocaleRoot };