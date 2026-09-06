"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ContactLink } from "@/components/contact-link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Landmark,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { useTranslations } from "@/lib/i18n";

const BARS = [34, 48, 40, 58, 52, 68, 62, 74, 66, 82, 71, 88, 79, 96];

const METRIC_ICONS = [Wallet, TrendingUp, BadgeCheck];

function Hero() {
  const reduceMotion = useReducedMotion();
  const { locale, messages } = useTranslations("hero");
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-pine-950"
    >
      <div
        className="bg-hero-grid absolute inset-0 -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 start-1/2 -z-10 h-[560px] w-[720px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(211 179 106 / 0.22), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-56 -start-40 -z-10 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(51 100 83 / 0.55), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -end-40 -z-10 h-[460px] w-[460px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgb(51 100 83 / 0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <span
        className="pointer-events-none absolute inset-x-0 top-14 -z-10 select-none text-center font-display text-[9rem] font-extrabold leading-[0.9] tracking-tighter text-outline-gold sm:text-[12rem] lg:text-[14rem]"
        aria-hidden="true"
      >
        {messages.watermark}
      </span>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-28 pt-16 text-center sm:px-8 sm:pt-20">
        <motion.h1
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-8 max-w-4xl text-balance font-display text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-paper sm:text-6xl lg:text-7xl"
        >
          {messages.title1}
          <br />
          <span className="text-gradient-gold">{messages.title2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-6 max-w-2xl text-pretty text-base leading-8 text-pine-200 sm:text-lg sm:leading-9"
        >
          {messages.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <ContactLink
            className="group inline-flex h-13 items-center gap-2 rounded-lg bg-gold-400 px-8 font-display text-base font-bold text-pine-950 shadow-xl shadow-gold-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-300"
          >
            {messages.ctaPrimary}
            <Arrow
              className={cn(
                "size-5 transition-transform duration-200",
                locale === "ar"
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              )}
            />
          </ContactLink>
          <Link
            href="/services"
            className="inline-flex h-13 items-center gap-2 rounded-lg border border-paper/25 bg-paper/5 px-8 font-display text-base font-bold text-paper backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-paper/50 hover:bg-paper/10"
          >
            {messages.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {[
            { icon: Landmark, text: messages.auth1 },
            { icon: BadgeCheck, text: messages.auth2 },
          ].map(({ icon: Icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-pine-300"
            >
              <Icon className="size-4 text-gold-400" />
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
        className="mx-auto max-w-5xl px-5 pb-24 sm:px-8"
      >
        <div className="relative rounded-[28px] border border-paper/15 bg-paper/5 p-5 shadow-2xl shadow-pine-950/60 backdrop-blur-md sm:p-8">
          <span
            className="absolute -start-8 bottom-8 hidden animate-float-slow rounded-2xl border border-paper/10 bg-pine-900/70 px-4 py-2.5 font-display text-[13px] font-extrabold text-emerald-300 shadow-xl shadow-pine-950/40 backdrop-blur-md lg:block"
            aria-hidden="true"
          >
            {messages.floating}
          </span>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-sm font-bold text-paper">
                    {messages.panelTitle}
                  </p>
                  <p className="mt-1 text-[12.5px] text-pine-300">
                    {messages.panelSub}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-pine-800/60 px-3 py-1 text-[11.5px] font-bold text-pine-100 ring-1 ring-paper/10">
                  <span className="size-1.5 animate-dot rounded-full bg-emerald-400" />
                  {messages.upToDate}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
                <div>
                  <p className="text-[12.5px] font-semibold text-pine-300">
                    {messages.netProfit}
                  </p>
                  <p className="mt-1 font-display text-4xl font-extrabold text-paper sm:text-5xl" dir="ltr">
                    <span className="me-2 align-middle text-lg font-bold text-pine-300">
                      $
                    </span>
                    124,580
                  </p>
                </div>
                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1.5 text-[12.5px] font-bold text-emerald-300 ring-1 ring-emerald-400/25">
                  <TrendingUp className="size-3.5" />
                  +24.5%
                </span>
              </div>

              <div className="mt-7 flex h-28 items-end gap-1.5 sm:gap-2">
                {BARS.map((height, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: reduceMotion ? 1 : 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.75 + i * 0.05,
                      ease: EASE,
                    }}
                    style={{ height: `${height}%` }}
                    className="w-full origin-bottom rounded-full bg-gradient-to-t from-gold-600/70 via-gold-300/80 to-gold-200/90"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {messages.metrics.map(({ label, value, note }, i) => {
                const MetricIcon = METRIC_ICONS[i];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + i * 0.15, ease: EASE }}
                    className="rounded-2xl border border-paper/10 bg-paper/5 p-4"
                  >
                    <MetricIcon className="size-4 text-gold-400" />
                    <p className="mt-3 text-[12px] font-semibold text-pine-300">
                      {label}
                    </p>
                    <p className="mt-0.5 font-display text-base font-extrabold text-paper">
                      {value}
                    </p>
                    <p className="mt-0.5 text-[11.5px] text-pine-400">{note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-paper to-transparent"
        aria-hidden="true"
      />
      <Link
        href="/services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-pine-400 transition-colors hover:text-gold-300 lg:block"
        aria-label={messages.scrollLabel}
      >
        <ChevronDown className="size-5 animate-bounce" />
      </Link>
    </section>
  );
}

export { Hero };