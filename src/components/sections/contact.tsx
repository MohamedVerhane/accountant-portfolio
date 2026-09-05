"use client";

import * as React from "react";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { LinkedinLogo } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "@/lib/i18n";

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const { locale, t } = useTranslations("contact");

  if (submitted) {
    return (
      <div className="flex h-full min-h-96 flex-col items-center justify-center rounded-[28px] border border-pine-900/10 bg-white/70 p-10 text-center shadow-2xl shadow-pine-950/10 backdrop-blur-sm">
        <span className="flex size-16 items-center justify-center rounded-full bg-pine-900 text-gold-300 shadow-xl shadow-pine-950/20">
          <CheckCircle2 className="size-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-extrabold text-pine-950">
          {t("submittedTitle")}
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-7 text-ink/70">
          {t("submittedText")}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 cursor-pointer font-display text-sm font-bold text-pine-800 underline-offset-4 hover:underline"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-[28px] border border-pine-900/10 bg-white/70 p-7 shadow-2xl shadow-pine-950/10 backdrop-blur-sm sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-[13px] font-bold text-pine-900"
          >
            {t("formName")}
          </label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder={t("formNamePlaceholder")}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-[13px] font-bold text-pine-900"
          >
            {t("formPhone")}
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            dir={locale === "ar" ? "rtl" : "ltr"}
            placeholder={t("formPhonePlaceholder")}
          />
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="mb-2 block text-[13px] font-bold text-pine-900"
        >
          {t("formEmail")}
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          dir="ltr"
          placeholder={t("formEmailPlaceholder")}
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="subject"
          className="mb-2 block text-[13px] font-bold text-pine-900"
        >
          {t("formSubject")}
        </label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder={t("formSubjectPlaceholder")}
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="mb-2 block text-[13px] font-bold text-pine-900"
        >
          {t("formMessage")}
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("formMessagePlaceholder")}
        />
      </div>

      <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="gold" size="lg" className="flex-1">
          <MessageCircle className="size-4" />
          {t("formSubmit")}
        </Button>
        <p className="text-center text-[12px] text-ink/60 sm:max-w-44 sm:text-start">
          {t("formPrivacy")}
        </p>
      </div>
    </form>
  );
}

function Contact() {
  const { t, messages } = useTranslations("contact");

  const channels = [
    { icon: Phone, label: t("phoneLabel"), value: "+222 123456789", href: "tel:+222123456789" },
    { icon: Mail, label: t("emailLabel"), value: "hello@mauri-mouhassib.com", href: "mailto:hello@mauri-mouhassib.com" },
    { icon: MapPin, label: t("officeLabel"), value: messages.officeValue, href: "#contact" },
    { icon: Clock, label: t("hoursLabel"), value: messages.hoursValue, href: "#contact" },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
    >
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

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-4 rounded-3xl border border-pine-900/10 bg-white/70 p-5 shadow-lg shadow-pine-950/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pine-950/10"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-pine-900 text-gold-300 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[12.5px] font-semibold text-ink/55">
                      {label}
                    </p>
                    <p className="mt-1 font-display text-[15px] font-bold text-pine-950">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
              <div className="flex items-center gap-3 rounded-3xl border border-pine-900/10 bg-white/70 p-5 shadow-lg shadow-pine-950/5 backdrop-blur-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-pine-950">
                  <LinkedinLogo className="size-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[12.5px] font-semibold text-ink/55">
                    {t("linkedinLabel")}
                  </p>
                  <p className="mt-1 font-display text-[15px] font-bold text-pine-950">
                    {t("linkedinValue")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export { Contact };