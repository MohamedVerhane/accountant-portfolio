"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_HREF, NAV_LINKS } from "@/lib/navigation";
import { ContactLink } from "@/components/contact-link";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLocale } from "@/redux/slices/locale-slice";
import { useTranslations } from "@/lib/i18n";

const MotionLink = motion.create(Link);

function LangToggle({ onDark, onNavigate }: { onDark: boolean; onNavigate?: () => void }) {
  const dispatch = useAppDispatch();
  const { locale, messages } = useTranslations("header");

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(toggleLocale());
        onNavigate?.();
      }}
      aria-label={locale === "ar" ? messages.switchToEnglish : messages.switchToArabic}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-bold transition-colors",
        onDark
          ? "border-paper/15 bg-paper/5 text-pine-100 backdrop-blur-sm hover:border-gold-400 hover:text-gold-300"
          : "border-pine-900/15 bg-white/70 text-pine-700 hover:border-pine-900/40"
      )}
    >
      <Globe className="size-3.5" />
      {messages.otherLanguageShort}
    </button>
  );
}

function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { messages: nav } = useTranslations("nav");
  const { messages: brand } = useTranslations("brand");
  const { messages: header } = useTranslations("header");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onDark = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-pine-900/10 bg-paper/85 shadow-sm shadow-pine-950/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image
            src="/icon.svg"
            alt={brand.name}
            width={40}
            height={40}
            className="size-10 rounded-xl shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-lg font-extrabold tracking-tight transition-colors duration-300",
                onDark ? "text-paper" : "text-pine-950"
              )}
            >
              {brand.name}
            </span>
            <span
              className={cn(
                "text-[11px] font-semibold transition-colors duration-300",
                onDark ? "text-pine-300" : "text-pine-600"
              )}
            >
              {brand.tag}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((key) => (
            <Link
              key={key}
              href={NAV_HREF[key]}
              className={cn(
                "rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition-colors duration-200",
                onDark
                  ? "text-pine-200 hover:bg-paper/10 hover:text-paper"
                  : "text-ink/70 hover:bg-pine-900/5 hover:text-pine-950"
              )}
            >
              {nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle onDark={onDark} />
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[12px] font-bold",
              onDark
                ? "border-paper/15 bg-paper/5 text-pine-100 backdrop-blur-sm"
                : "border-pine-900/15 bg-white/70 text-pine-700"
            )}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-dot rounded-full bg-emerald-400" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {header.available}
          </span>
          <ContactLink
            className={cn(
              "inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 font-display text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400",
              onDark
                ? "bg-gold-400 text-pine-950 shadow-lg shadow-gold-500/25 hover:-translate-y-0.5 hover:bg-gold-300"
                : "bg-pine-900 text-paper shadow-lg shadow-pine-950/20 hover:-translate-y-0.5 hover:bg-pine-950"
            )}
          >
            <MessageCircle className="size-4" />
            {header.bookConsultation}
          </ContactLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={header.openMenu}
          className={cn(
            "flex size-11 items-center justify-center rounded-xl transition-colors lg:hidden",
            onDark
              ? "text-paper hover:bg-paper/10"
              : "text-pine-950 hover:bg-pine-900/5"
          )}
        >
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <path
              d="M1 1h20M1 7h14M1 13h20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-pine-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-18 items-center justify-between px-5 sm:px-8">
              <span className="flex items-center gap-2.5">
                <Image
                  src="/icon.svg"
                  alt={brand.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-xl shrink-0"
                />
                <span className="font-display text-lg font-extrabold text-paper">
                  {brand.name}
                </span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={header.closeMenu}
                className="flex size-11 items-center justify-center rounded-xl text-paper hover:bg-paper/10"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 pt-6">
              {NAV_LINKS.map((key, i) => (
                <MotionLink
                  key={key}
                  href={NAV_HREF[key]}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className="rounded-2xl px-3 py-4 font-display text-2xl font-bold text-paper transition-colors hover:bg-paper/10"
                >
                  {nav[key]}
                </MotionLink>
              ))}
            </nav>
            <div className="px-5 pb-10">
              <button
                type="button"
                onClick={() => {
                  dispatch(toggleLocale());
                  setOpen(false);
                }}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full border border-paper/15 bg-paper/5 py-3 font-display text-sm font-bold text-paper transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Globe className="size-4" />
                {header.otherLanguageFull}
              </button>
              <ContactLink
                onClick={() => setOpen(false)}
                className="flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-gold-400 font-display text-base font-bold text-pine-950 shadow-lg shadow-gold-500/25"
              >
                <MessageCircle className="size-5" />
                {header.bookFreeConsultation}
              </ContactLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { SiteHeader };