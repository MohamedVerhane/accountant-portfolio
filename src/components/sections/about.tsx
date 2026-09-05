"use client";

import Image from "next/image";
import { BadgeCheck, GraduationCap, PhoneCall } from "lucide-react";
import { ContactLink } from "@/components/contact-link";
import aboutFinance from "@/assets/images/about-finance.jpg";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { useTranslations } from "@/lib/i18n";

function About() {
  const { t, messages } = useTranslations("about");
  const credentials = messages.credentials;

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-paper py-24 sm:py-32"
    >
      <div
        className="absolute -end-32 top-16 h-96 w-96 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(211 179 106 / 0.25), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading
            align="start"
            eyebrow={t("eyebrow")}
            title={t("title")}
            className="lg:hidden"
          />
          <div className="relative mt-10 lg:mt-0">
            <div
              className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-gold-200 via-transparent to-pine-200 opacity-70"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[26px] border border-pine-900/10 bg-white shadow-2xl shadow-pine-950/15">
              <Image
                src={aboutFinance}
                alt={messages.imgAlt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
                placeholder="blur"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-pine-950/55 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 start-5 flex items-center gap-3 rounded-2xl border border-paper/15 bg-paper/10 p-4 backdrop-blur-md">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gold-400 text-pine-950">
                  <GraduationCap className="size-5" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-extrabold text-paper">
                    {messages.badgeTitle}
                  </p>
                  <p className="mt-0.5 text-[12px] text-pine-200">
                    {messages.badgeSub}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-5 end-4 hidden rotate-2 rounded-2xl border border-gold-300/70 bg-gold-100/95 px-4 py-3 shadow-xl shadow-gold-500/20 backdrop-blur-sm sm:block">
              <p className="font-display text-[13px] font-extrabold text-pine-950">
                {messages.cardValue}
              </p>
              <p className="mt-0.5 text-[11.5px] text-pine-800/70">
                {messages.cardNote}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="order-1 lg:order-2">
          <SectionHeading
            align="start"
            eyebrow={t("eyebrow")}
            title={t("title")}
            className="hidden lg:flex"
          />
          <div className="lg:hidden" />

          <div className="mt-6 space-y-5 text-base leading-8 text-ink/75">
            <p>{messages.p1}</p>
            <p>{messages.p2}</p>
          </div>

          <ul className="mt-8 space-y-3.5">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-pine-900 text-gold-300">
                  <BadgeCheck className="size-3.5" />
                </span>
                <span className="text-[15px] font-semibold leading-7 text-pine-950">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3.5 sm:flex-row">
            <ContactLink
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-pine-900 px-7 font-display text-sm font-bold text-paper shadow-lg shadow-pine-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-pine-950"
            >
              <PhoneCall className="size-4" />
              {t("ctaContact")}
            </ContactLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { About };
