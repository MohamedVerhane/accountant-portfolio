export const NAV_LINKS = [
  "home",
  "services",
  "about",
  "testimonials",
  "pricing",
  "faq",
] as const;

export type NavKey = (typeof NAV_LINKS)[number];

export const NAV_HREF: Record<NavKey, string> = {
  home: "/",
  services: "/services",
  about: "/about",
  testimonials: "/testimonials",
  pricing: "/pricing",
  faq: "/faq",
};

export const ROUTES = [
  "services",
  "about",
  "testimonials",
  "pricing",
  "faq",
  "contact",
] as const;

export type RouteKey = (typeof ROUTES)[number];