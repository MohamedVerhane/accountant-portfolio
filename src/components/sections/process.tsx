"use client";

import {
  ChartSpline,
  ClipboardCheck,
  MessagesSquare,
  Settings2,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";

const STEP_ICONS = [MessagesSquare, ClipboardCheck, Settings2, ChartSpline];

function Process() {
  const { t, messages } = useTranslations("process");

  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="relative mt-20">
          <div
            className="absolute inset-x-0 top-10 hidden h-px bg-gradient-to-l from-transparent via-pine-900/20 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {messages.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <Reveal key={step.title} delay={0.1 * i}>
                  <div className="group relative text-center lg:text-start">
                    <div className="relative z-10 mx-auto flex size-20 items-center justify-center rounded-3xl border border-pine-900/10 bg-paper shadow-xl shadow-pine-950/10 transition-transform duration-300 group-hover:-translate-y-1.5 lg:mx-0">
                      <Icon className="size-8 text-pine-800" />
                      <span className="absolute -top-2.5 -end-2.5 flex size-8 items-center justify-center rounded-full bg-gold-400 font-display text-[12px] font-extrabold text-pine-950 shadow-md shadow-gold-500/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-pine-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-7 text-ink/70">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Process };