import { MetadataRoute } from "next"
import { articles } from "@/data/articles"
import { brands } from "@/data/brands"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vaskemaskin.no"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: baseUrl + "/artikler",
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/merker",
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/forhandlere",
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/fylke",
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: baseUrl + "/om-oss",
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ]

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: baseUrl + "/artikler/" + a.slug,
    lastModified: new Date(a.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: baseUrl + "/merker/" + b.slug,
    lastModified: new Date("2026-03-15"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages, ...brandPages]
}
