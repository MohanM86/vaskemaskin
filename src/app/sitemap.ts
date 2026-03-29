import type { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/data/categories'
import { getAllArticleSlugs } from '@/data/articles'
import { getAllBrandSlugs } from '@/data/brands'
import { getAllFylkeSlugs, getAllKommuneSlugs } from '@/data/geografi'
import { getAllStoreSlugs } from '@/lib/stores'
import { getAllErrorBrandSlugs, getAllErrorCodeParams } from '@/data/feilkoder'
import { getAllTermSlugs } from '@/data/ordliste'

const BASE = 'https://vaskemaskin.no'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/fylker/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/butikker/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/feilkode/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/ordliste/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/personvern/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const categoryPages = getAllCategorySlugs().map(slug => ({ url: BASE + '/kategori/' + slug + '/', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 }))
  const brandPages = getAllBrandSlugs().map(slug => ({ url: BASE + '/merke/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }))
  const articlePages = getAllArticleSlugs().map(slug => ({ url: BASE + '/artikkel/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 }))
  const fylkePages = getAllFylkeSlugs().map(slug => ({ url: BASE + '/fylke/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }))
  const kommunePages = getAllKommuneSlugs().map(slug => ({ url: BASE + '/kommune/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 }))
  const storePages = getAllStoreSlugs().map(slug => ({ url: BASE + '/butikk/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 }))
  const errorBrandPages = getAllErrorBrandSlugs().map(slug => ({ url: BASE + '/feilkode/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 }))
  const errorCodePages = getAllErrorCodeParams().map(p => ({ url: BASE + '/feilkode/' + p.merke + '/' + p.kode + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 }))
  const termPages = getAllTermSlugs().map(slug => ({ url: BASE + '/ordliste/' + slug + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.5 }))

  return [...staticPages, ...categoryPages, ...brandPages, ...articlePages, ...fylkePages, ...kommunePages, ...storePages, ...errorBrandPages, ...errorCodePages, ...termPages]
}
