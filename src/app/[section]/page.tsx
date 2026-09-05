import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeContent } from "@/components/home-content";
import { ScrollToSection } from "@/components/layout/scroll-to-section";
import { getLocale } from "@/lib/locale";
import { translations } from "@/lib/i18n/translations";
import { ROUTES } from "@/lib/navigation";

export function generateStaticParams() {
  return ROUTES.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  if (!(ROUTES as readonly string[]).includes(section)) return {};

  const locale = await getLocale();
  const seo = translations[locale].seo[section as (typeof ROUTES)[number]];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/${section}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
    },
  };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!(ROUTES as readonly string[]).includes(section)) notFound();

  return (
    <>
      <HomeContent />
      <ScrollToSection section={section} />
    </>
  );
}