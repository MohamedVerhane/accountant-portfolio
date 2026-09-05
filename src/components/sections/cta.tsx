"use client";

import { ContactLink } from "@/components/contact-link";
import { ArrowLeft, ArrowRight, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";

function Cta() {
  const { locale, t } = useTranslations("cta");
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-pine-950 px-6 py-20 text-center shadow-2xl shadow-pine-950/30 sm:px-12 sm:py-24">
          <div
            className="bg-hero-grid absolute inset-0 opacity-50"
            aria-hidden="true"
          />
          <div
            className="absolute -top-48 start-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgb(211 179 106 / 0.22), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.2] tracking-tight text-paper sm:text-5xl">
              {t("title1")}
              <span className="text-gradient-gold">{t("title2")}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-8 text-pine-200 sm:text-lg">
              {t("description")}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <ContactLink
                className="group inline-flex h-13 items-center gap-2 rounded-lg bg-gold-400 px-8 font-display text-base font-bold text-pine-950 shadow-xl shadow-gold-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300"
              >
                <CalendarCheck className="size-5" />
                {t("button")}
                <Arrow
                  className={cn(
                    "size-5 transition-transform duration-200",
                    locale === "ar" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                  )}
                />
              </ContactLink>
            </div>

            <p className="mt-6 text-[13px] text-pine-400">
              {t("responseNote")}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export { Cta };