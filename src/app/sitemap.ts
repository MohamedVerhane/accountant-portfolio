import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mauri-mouhassib.com";
  const lastModified = new Date();

  const sectionEntries: MetadataRoute.Sitemap = ROUTES.map((section) => ({
    url: `${base}/${section}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionEntries,
  ];
}