import type { Metadata, Viewport } from "next";
import { Alexandria, Cairo } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { LocaleRoot } from "@/components/layout/locale-root";
import { getLocale } from "@/lib/locale";
import { translations } from "@/lib/i18n/translations";

const alexandria = Alexandria({
  variable: "--font-display",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = translations[locale].meta;

  return {
    metadataBase: new URL("https://mauri-mouhassib.com"),
    title: {
      default: meta.title,
      template: `%s | ${meta.name}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: meta.author }],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: "https://mauri-mouhassib.com",
      siteName: meta.siteName,
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#10211c",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const brand = translations[locale].brand;
  const meta = translations[locale].meta;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: brand.name,
    alternateName: meta.name,
    jobTitle: brand.tag,
    description: meta.description,
    url: "https://mauri-mouhassib.com",
    email: "mailto:hello@mauri-mouhassib.com",
    telephone: "+222 123456789",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: meta.name,
    description: meta.description,
    url: "https://mauri-mouhassib.com",
    founder: {
      "@type": "Person",
      name: meta.author,
      jobTitle: brand.tag,
    },
    areaServed: "Riyadh",
  };

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${alexandria.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-paper font-sans text-ink">
        <ReduxProvider initialLocale={locale}>
          <LocaleRoot>{children}</LocaleRoot>
        </ReduxProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, serviceSchema]) }}
        />
      </body>
    </html>
  );
}