"use client";

import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ManAvatar, WomanAvatar } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";
import type { translations } from "@/lib/i18n/translations";

type Testimonial = (typeof translations)["en"]["testimonials"]["list"][number];

function Stars({ rating, ariaLabel }: { rating: number; ariaLabel: string }) {
  return (
    <div className="flex gap-0.5" aria-label={ariaLabel}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < rating
              ? "size-3.5 fill-gold-400 text-gold-400"
              : "size-3.5 fill-pine-200 text-pine-200"
          }
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  ariaLabel,
  className,
}: {
  testimonial: Testimonial;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-pine-900/10 bg-white/70 p-7 shadow-xl shadow-pine-950/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pine-950/10 sm:p-8",
        className
      )}
    >
      <Quote className="absolute -top-3 end-7 size-9 text-pine-100" />
      <div className="flex items-center justify-between">
        <Stars rating={testimonial.rating} ariaLabel={ariaLabel} />
      </div>
      <blockquote className="mt-5 flex-1 text-[15px] leading-8 text-ink/80">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3.5 border-t border-pine-900/10 pt-6">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-pine-900 text-gold-300 ring-1 ring-pine-900/10">
          {testimonial.gender === "woman" ? (
            <WomanAvatar className="size-5" />
          ) : (
            <ManAvatar className="size-5" />
          )}
        </span>
        <div className="leading-tight">
          <p className="font-display text-[15px] font-extrabold text-pine-950">
            {testimonial.name}
          </p>
          <p className="mt-1 text-[12.5px] text-ink/60">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function Testimonials() {
  const { t, messages } = useTranslations("testimonials");
  const ratingAria = (rating: number) =>
    t("ratingAria").replace("{rating}", String(rating));

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-paper-deep/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messages.list.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={0.06 * (i % 3)}
              className={cn(
                i % 3 === 1 && "lg:mt-10",
                i % 3 === 2 && "lg:mt-4",
                "flex"
              )}
            >
              <TestimonialCard
                testimonial={testimonial}
                ariaLabel={ratingAria(testimonial.rating)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 text-center text-[13px] text-ink/60">
            {t("footerNote")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export { Testimonials };