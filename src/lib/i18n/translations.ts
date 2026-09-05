import type { Locale } from "@/redux/slices/locale-slice";
import ar from "./translations/ar.json";
import en from "./translations/en.json";

const translations: Record<Locale, typeof ar> = { ar, en };

export { translations };