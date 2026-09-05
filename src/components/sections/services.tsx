"use client";

import {
  ArrowUpLeft,
  Briefcase,
  Calculator,
  Landmark,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";
import type { translations } from "@/lib/i18n/translations";

type Service = (typeof translations)["en"]["services"]["list"][number];

const ICONS = [TrendingUp, Landmark, Calculator, ShieldCheck, Target, Briefcase];

function ServiceCard({
  service,
  icon,
  detailLink,
  className,
  horizontal = false,
}: {
  service: Service;
  icon: (typeof ICONS)[number];
  detailLink: string;
  className?: string;
  horizontal?: boolean;
}) {
  const Icon = icon;
  const dark = service.tone === "dark";
  const gold = service.tone === "gold";

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 sm:p-8",
        dark &&
          "border-pine-950 bg-pine-950 text-paper shadow-2xl shadow-pine-950/25 hover:shadow-pine-950/40",
        gold &&
          "border-gold-300/70 bg-gold-100/60 text-pine-950 hover:shadow-xl hover:shadow-gold-500/20",
        !dark &&
          !gold &&
          "border-pine-900/10 bg-white/70 text-pine-950 hover:shadow-xl hover:shadow-pine-950/10",
        className
      )}
    >
      {dark && (
        <div
          className="bg-hero-grid absolute inset-0 opacity-40"
          aria-hidden="true"
        />
      )}
      {gold && (
        <div
          className="absolute -end-16 -top-16 size-44 rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(closest-side, rgb(211 179 106 / 0.4), transparent)",
          }}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "relative flex h-full flex-col",
          horizontal && "lg:flex-row lg:items-center lg:gap-8"
        )}
      >
        <span
          className={cn(
            "flex size-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
            horizontal && "lg:size-16",
            dark && "bg-paper/10 text-gold-300 ring-1 ring-paper/15",
            gold && "bg-pine-950 text-gold-300",
            !dark && !gold && "bg-pine-900 text-gold-300"
          )}
        >
          <Icon className={cn("size-6", horizontal && "lg:size-8")} />
        </span>

        <div className={cn(horizontal && "lg:ms-2 lg:max-w-sm")}>
          <h3
            className={cn(
              "mt-6 font-display text-xl font-extrabold tracking-tight sm:text-[22px]",
              horizontal && "lg:mt-0",
              dark && "text-paper",
              gold && "text-pine-950",
              !dark && !gold && "text-pine-950"
            )}
          >
            {service.title}
          </h3>
          <p
            className={cn(
              "mt-3 text-[14.5px] leading-7",
              horizontal && "lg:mt-2",
              dark ? "text-pine-200" : "text-ink/70"
            )}
          >
            {service.description}
          </p>
        </div>

        <div
          className={cn(
            "mt-5 flex flex-wrap gap-2",
            horizontal && "lg:mx-auto lg:mt-0 lg:max-w-2xl"
          )}
        >
          {service.features.map((feature) => (
            <span
              key={feature}
              className={cn(
                "rounded-full px-3 py-1 text-[11.5px] font-bold",
                dark
                  ? "bg-paper/10 text-pine-100 ring-1 ring-paper/10"
                  : gold
                    ? "bg-pine-950/5 text-pine-800 ring-1 ring-pine-950/10"
                    : "bg-pine-50 text-pine-700 ring-1 ring-pine-900/10"
              )}
            >
              {feature}
            </span>
          ))}
        </div>

        <span
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-bold transition-colors",
            horizontal && "lg:ms-auto lg:mt-0",
            dark
              ? "text-gold-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              : "text-pine-800"
          )}
        >
          <ArrowUpLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          {detailLink}
        </span>
      </div>
    </div>
  );
}

function Services() {
  const { t, messages } = useTranslations("services");

  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        className="bg-paper-grid absolute inset-0 opacity-50"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          <Reveal className="lg:col-span-4">
            <ServiceCard service={messages.list[0]} icon={ICONS[0]} detailLink={t("detailLink")} />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <ServiceCard service={messages.list[1]} icon={ICONS[1]} detailLink={t("detailLink")} />
          </Reveal>
          {messages.list.slice(2, 5).map((service, i) => (
            <Reveal key={service.title} delay={0.08 * (i + 1)} className="lg:col-span-2">
              <ServiceCard service={service} icon={ICONS[i + 2]} detailLink={t("detailLink")} />
            </Reveal>
          ))}
          <Reveal delay={0.2} className="sm:col-span-2 lg:col-span-6">
            <ServiceCard service={messages.list[5]} icon={ICONS[5]} detailLink={t("detailLink")} horizontal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Services };