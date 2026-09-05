# Mauri Mouhassib — portfolio site

A personal website for a certified accountant in Riyadh. Bilingual (Arabic and
English), with full RTL/LTR support. It's one long landing page on the home
route, plus short deep links like `/services` or `/contact` that scroll you
straight to the section you asked for.

## Stack

- **Next.js 16** (App Router, Turbopack) + React 19 + TypeScript
- **Tailwind CSS v4** — custom palette (pine, gold, ink, paper) defined in `globals.css`
- **Framer Motion** for scroll reveals and small animations
- **Redux Toolkit** — used only to hold the selected language on the client
- **lucide-react** icons

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

Also available:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## How the site is structured

The homepage is assembled in `src/components/home-content.tsx` — header, the
sections in order, footer. Each section is its own component under
`src/components/sections/`.

The deep-link routes (`/services`, `/about`, …) are just the same homepage
rendered by `src/app/[section]/page.tsx`, which then auto-scrolls to the right
section. The full list of links lives in `src/lib/navigation.ts`.

## Languages

There's no i18n library — just two JSON files that are kept in sync:

```
src/lib/i18n/translations/ar.json
src/lib/i18n/translations/en.json
```

The server picks the language from the `mauri-locale` cookie. When you flip the
language on the page, it saves the choice back to the cookie so it sticks.
Components read strings like this:

```tsx
const { locale, t, messages } = useTranslations("services");
t("title")                 // one key
messages.list[0].title     // nested data
```

The rule is simple: **all user-facing text lives in the JSON files.** Nothing is
hardcoded in components. Because the type is built from the JSON (`translations.ts`),
a missing key in one language is a compile error.

## Before launching

A few things are still placeholders:

- **Domain:** the site is configured for `https://mauri-mouhassib.com`
  (metadata, sitemap, robots, share image).
- **Contact details:** email `hello@mauri-mouhassib.com`, phone +222 123456789,
  office "City - District" — appear in the footer, the contact section, and the
  structured data in `src/app/layout.tsx`.
- **Contact form:** it's a demo — submitting just shows a "thanks" state. It
  doesn't send an email yet, so hook it to whatever backend you use before
  going live.