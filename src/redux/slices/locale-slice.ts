import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Locale = "ar" | "en";

export interface LocaleState {
  locale: Locale;
}

const STORAGE_KEY = "mauri-locale";

function persist(locale: Locale) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.cookie = `${STORAGE_KEY}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    }
  } catch {
    // ignore storage errors
  }
}

const initialState: LocaleState = {
  locale: "ar",
};

export { STORAGE_KEY };

export const localeSlice = createSlice({
  name: "locale",
  initialState,
  reducers: {
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
      persist(action.payload);
    },
    toggleLocale(state) {
      const next: Locale = state.locale === "ar" ? "en" : "ar";
      state.locale = next;
      persist(next);
    },
  },
});

export const { setLocale, toggleLocale } = localeSlice.actions;

export default localeSlice.reducer;