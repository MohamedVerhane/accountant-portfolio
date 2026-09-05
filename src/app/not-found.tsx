import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { getLocale } from "@/lib/locale";
import { translations } from "@/lib/i18n/translations";

export default async function NotFound() {
  const locale = await getLocale();
  const { t } = serverTranslations(locale);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-32 text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-pine-900 text-gold-300 shadow-xl shadow-pine-950/10">
        <FileQuestion className="size-8" />
      </span>
      <p className="mt-6 font-display text-sm font-bold tracking-widest text-gold-600">
        {t("code")}
      </p>
      <h1 className="mt-3 max-w-xl text-balance font-display text-3xl font-extrabold leading-[1.2] tracking-tight text-pine-950 sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mt-4 max-w-md text-pretty text-base leading-8 text-ink/70">
        {t("text")}
      </p>
      <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-lg bg-pine-900 px-7 font-display text-sm font-bold text-paper shadow-lg shadow-pine-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pine-950"
        >
          {t("home")}
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-lg border border-pine-900/20 bg-transparent px-7 font-display text-sm font-bold text-pine-900 transition-all duration-200 hover:border-pine-900/40 hover:bg-pine-900/5"
        >
          {t("contact")}
        </Link>
      </div>
    </main>
  );
}

function serverTranslations(locale: "ar" | "en") {
  const section = translations[locale].notFound;
  const t = (key: string, fallback?: string): string => {
    const value = (section as Record<string, unknown>)[key];
    return typeof value === "string" ? value : (fallback ?? key);
  };
  return { t };
}