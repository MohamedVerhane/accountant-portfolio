"use client";

import { ContactLink } from "@/components/contact-link";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";

function Faq() {
  const { locale, t, messages } = useTranslations("faq");

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <SectionHeading
              align="start"
              eyebrow={t("eyebrow")}
              title={t("title")}
              description={t("description")}
            />
            <Reveal delay={0.15}>
              <ContactLink
                className="mt-8 inline-flex items-center gap-2 font-display text-[15px] font-bold text-pine-800 transition-colors hover:text-pine-950"
              >
                {t("moreLink")}
                <span className="text-gold-500" aria-hidden="true">
                  {locale === "ar" ? "←" : "→"}
                </span>
              </ContactLink>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion items={messages.list} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Faq };