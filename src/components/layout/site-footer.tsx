"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinLogo, XLogo } from "@/components/icons";
import { NAV_HREF, NAV_LINKS } from "@/lib/navigation";
import { useTranslations } from "@/lib/i18n";

function SiteFooter() {
  const { messages: footer } = useTranslations("footer");
  const { messages: nav } = useTranslations("nav");
  const { messages: brand } = useTranslations("brand");

  const socials = [
    { icon: XLogo, label: footer.socialX },
    { icon: LinkedinLogo, label: footer.socialLinkedin },
    { icon: MessageCircle, label: footer.socialWhatsapp },
    { icon: Mail, label: footer.socialEmail },
  ];

  return (
    <footer className="relative overflow-hidden bg-pine-950 text-paper">
      <div
        className="bg-hero-grid absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/icon.svg"
                alt={brand.name}
                width={44}
                height={44}
                className="size-11 rounded-xl shrink-0"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold tracking-tight">
                  {brand.name}
                </span>
                <span className="mt-1 text-[11.5px] font-semibold text-pine-300">
                  {brand.tag}
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[14.5px] leading-7 text-pine-200">
              {footer.about}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="/contact"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-paper/15 bg-paper/5 text-pine-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-gold-300">
              {footer.quickLinks}
            </h4>
            <ul className="mt-6 space-y-3.5">
              {NAV_LINKS.map((key) => (
                <li key={key}>
                  <Link
                    href={NAV_HREF[key]}
                    className="text-[14.5px] text-pine-200 transition-colors hover:text-paper"
                  >
                    {nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-gold-300">
              {footer.services}
            </h4>
            <ul className="mt-6 space-y-3.5">
              {footer.servicesLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="text-[14.5px] text-pine-200 transition-colors hover:text-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-gold-300">
              {footer.contact}
            </h4>
            <ul className="mt-6 space-y-4 text-[14.5px] leading-7 text-pine-200">
              <li>
                <span className="block text-[12.5px] font-bold text-pine-400">
                  {footer.phoneLabel}
                </span>
                <a href="tel:+222123456789" className="hover:text-paper" dir="ltr">
                  +222 123456789
                </a>
              </li>
              <li>
                <span className="block text-[12.5px] font-bold text-pine-400">
                  {footer.emailLabel}
                </span>
                <a
                  href="mailto:hello@mauri-mouhassib.com"
                  className="hover:text-paper"
                  dir="ltr"
                >
                  hello@mauri-mouhassib.com
                </a>
              </li>
              <li>
                <span className="block text-[12.5px] font-bold text-pine-400">
                  {footer.officeLabel}
                </span>
                {footer.officeValue}
              </li>
              <li>
                <span className="block text-[12.5px] font-bold text-pine-400">
                  {footer.hoursLabel}
                </span>
                {footer.hoursValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row">
          <p className="text-[13px] text-pine-300">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6 text-[13px] text-pine-300">
            <Link href="/contact" className="transition-colors hover:text-paper">
              {footer.privacy}
            </Link>
            <Link href="/contact" className="transition-colors hover:text-paper">
              {footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };