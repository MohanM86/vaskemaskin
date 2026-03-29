import type { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/data/categories'
import { getAllArticleSlugs } from '@/data/articles'
import { getAllBrandSlugs } from '@/data/brands'

const BASE = 'https://vaskemaskin.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/om-oss/', lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: BASE + '/personvern/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map(slug => ({
    url: BASE + '/kategori/' + slug + '/',
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const brandPages: MetadataRoute.Sitemap = getAllBrandSlugs().map(slug => ({
    url: BASE + '/merke/' + slug + '/',
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const articlePages: MetadataRoute.Sitemap = getAllArticleSlugs().map(slug => ({
    url: BASE + '/artikkel/' + slug + '/',
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...categoryPages, ...brandPages, ...articlePages]
}
