import type { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/data/categories'
import { getAllArticleSlugs } from '@/data/articles'
import { getAllBrandSlugs } from '@/data/brands'
import { getAllFylkeSlugs, getAllKommuneSlugs } from '@/data/geografi'
import { getAllStoreSlugs } from '@/lib/stores'

const BASE = 'https://vaskemaskin.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/fylker/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/butikker/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/personvern/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const categoryPages: MetadataRoute.Sitemap = getAllCategorySlugs().map(slug => ({
    url: BASE + '/kategori/' + slug + '/', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8,
  }))

  const brandPages: MetadataRoute.Sitemap = getAllBrandSlugs().map(slug => ({
    url: BASE + '/merke/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
  }))

  const articlePages: MetadataRoute.Sitemap = getAllArticleSlugs().map(slug => ({
    url: BASE + '/artikkel/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8,
  }))

  const fylkePages: MetadataRoute.Sitemap = getAllFylkeSlugs().map(slug => ({
    url: BASE + '/fylke/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7,
  }))

  const kommunePages: MetadataRoute.Sitemap = getAllKommuneSlugs().map(slug => ({
    url: BASE + '/kommune/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6,
  }))

  const storePages: MetadataRoute.Sitemap = getAllStoreSlugs().map(slug => ({
    url: BASE + '/butikk/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5,
  }))

  return [...staticPages, ...categoryPages, ...brandPages, ...articlePages, ...fylkePages, ...kommunePages, ...storePages]
}
