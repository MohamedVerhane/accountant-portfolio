"use client";

import { ContactLink } from "@/components/contact-link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";
import type { translations } from "@/lib/i18n/translations";

type Plan = (typeof translations)["en"]["pricing"]["plans"][number];

function PricingCard({
  plan,
  locale,
  featuredBadge,
}: {
  plan: Plan;
  locale: string;
  featuredBadge: string;
}) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300",
        plan.featured
          ? "bg-pine-950 text-paper shadow-2xl shadow-pine-950/30 ring-1 ring-pine-950 lg:-translate-y-4 lg:hover:-translate-y-6"
          : "border border-pine-900/10 bg-white/70 text-pine-950 shadow-xl shadow-pine-950/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-2xl hover:shadow-pine-950/10"
      )}
    >
      {plan.featured && (
        <>
          <div
            className="bg-hero-grid absolute inset-0 rounded-3xl opacity-40"
            aria-hidden="true"
          />
          <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-400 px-4 py-1.5 font-display text-[12px] font-extrabold text-pine-950 shadow-lg shadow-gold-500/30">
            <Sparkles className="ms-1 inline size-3.5" />
            {featuredBadge}
          </span>
        </>
      )}

      <div className="relative flex h-full flex-col">
        <h3
          className={cn(
            "font-display text-lg font-extrabold",
            plan.featured ? "text-paper" : "text-pine-950"
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-[13.5px] leading-6",
            plan.featured ? "text-pine-200" : "text-ink/60"
          )}
        >
          {plan.description}
        </p>

        <div
          className={cn(
            "mt-7 flex items-end gap-2 border-y py-6",
            plan.featured ? "border-paper/10" : "border-pine-900/10"
          )}
        >
          <span
            className={cn(
              "font-display text-4xl font-extrabold tracking-tight",
              plan.featured ? "text-paper" : "text-pine-950"
            )}
          >
            {plan.price}
          </span>
          <span
            className={cn(
              "pb-1 text-[13px] font-semibold",
              plan.featured ? "text-pine-300" : "text-ink/55"
            )}
          >
            {plan.period}
          </span>
        </div>

        <ul className="mt-7 flex-1 space-y-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                  plan.featured
                    ? "bg-gold-400 text-pine-950"
                    : "bg-pine-100 text-pine-800"
                )}
              >
                <Check className="size-3" />
              </span>
              <span
                className={cn(
                  "text-[14px] font-semibold leading-6",
                  plan.featured ? "text-pine-100" : "text-ink/80"
                )}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <ContactLink
          className={cn(
            "group mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-lg font-display text-sm font-bold transition-all duration-200 hover:-translate-y-0.5",
            plan.featured
              ? "bg-gold-400 text-pine-950 shadow-lg shadow-gold-500/30 hover:bg-gold-300"
              : "border border-pine-900/20 bg-transparent text-pine-900 hover:border-pine-900/40 hover:bg-pine-900/5"
          )}
        >
          {plan.cta}
          <Arrow className={cn("size-4 transition-transform duration-200", locale === "ar" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1")} />
        </ContactLink>
      </div>
    </div>
  );
}

function Pricing() {
  const { locale, t, messages } = useTranslations("pricing");

  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {messages.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.1 * i} className="flex">
              <PricingCard plan={plan} locale={locale} featuredBadge={t("featuredBadge")} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-[13.5px] text-ink/60">
            {t("note")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export { Pricing };