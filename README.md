# Mauri Mouhassib — portfolio site

A personal website for a certified accountant in Riyadh. The site is bilingual —
Arabic and English — and switches between RTL and LTR automatically.

The homepage is one long landing page: services, credentials, pricing, reviews,
FAQ, and a contact form. On top of that, URLs like `/services` or `/contact`
link straight to the matching section on that same page.

## Running it

You need Node 20+ (Next.js 16 requires it).

```bash
npm install
npm run dev
```

That's it — the site runs at http://localhost:3000.

Other commands:

```bash
npm run build       # production build
npm run start       # serve the production build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit, type checks without building
```

## What's under the hood

- **Next.js 16** (App Router, Turbopack) with React 19 and TypeScript
- **Tailwind CSS v4** — custom palette (pine, gold, ink, paper) defined in `globals.css`
- **Framer Motion** for the scroll reveals and small animations
- **Redux Toolkit** — its only job is remembering the selected language on the client
- **lucide-react** for icons

The full dependency list, with versions, lives in `package.json` and is locked
in the lockfile, so installs are reproducible (`npm ci` is your friend).

## How it's organized

```
src/
├── app/                 # routers, layouts, sitemap, robots
│   ├── layout.tsx       # fonts, metadata, JSON-LD, language detection
│   ├── page.tsx         # "/" renders the homepage
│   ├── [section]/page.tsx
│   └── globals.css      # Tailwind theme and keyframes
├── components/
│   ├── layout/          # header, footer, language sync
│   ├── sections/        # one component per landing section
│   ├── motion/          # Reveal, CountUp, Marquee
│   └── ui/              # buttons, inputs, accordion, etc.
├── redux/               # store + locale slice
└── lib/
    ├── i18n/            # translations and the hook
    ├── navigation.ts    # nav + routes, one source of truth
    └── motion.ts        # shared easing curve
```

The homepage is put together in `src/components/home-content.tsx`. Each section
is its own component in `src/components/sections/`.

## Routing

There's no client router library here — no `react-router-dom`. This is
Next.js's App Router, where **routes come from the file system** under
`src/app/`:

- `/` → `src/app/page.tsx` — the full landing page.
- `/services`, `/about`, `/testimonials`, `/pricing`, `/faq`, `/contact` →
  all served by one file, `src/app/[section]/page.tsx`. It renders the same
  homepage and then scrolls to the matching section, so each section gets a
  shareable URL.
- Anything else → `src/app/not-found.tsx`, a localized 404.

The section slugs and their order come from `src/lib/navigation.ts` — the single
source of truth shared by the header, footer, sitemap, and the route handler.
Links inside components use `next/link`, not `react-router-dom`'s `<Link>`.

## About the two languages

There's no i18n library. Just two JSON files that need to stay in sync:

```
src/lib/i18n/translations/ar.json
src/lib/i18n/translations/en.json
```

The language is chosen from the `mauri-locale` cookie. When a visitor switches
language on the page, the choice is saved back to the cookie so it sticks.

Components pull their copy through a small hook:

```tsx
const { locale, t, messages } = useTranslations("services");
t("title")               // one key
messages.list[0].title   // nested data
```

The golden rule here: **all user-facing text lives in the JSON files.**
Nothing is hardcoded in components. The TypeScript type is generated from the
JSON, so if a key is missing in one language, the build simply fails.

## Before going live

A few things are still placeholders:

- **Domain** — the site assumes `https://mauri-mouhassib.com` in its metadata,
  sitemap, robots file, and share image.
- **Contact details** — the email, phone number, and office address in the
  footer, the contact section, and the structured data in `layout.tsx` are
  dummy values. Replace them with real ones.
- **Contact form** — right now it just shows a "thanks" message. It doesn't
  send anything anywhere. Hook it up to your mail/API before launch.