import type { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/data/categories'
import { getAllArticleSlugs } from '@/data/articles'
import { getAllBrandSlugs } from '@/data/brands'
import { getAllFylkeSlugs, getAllKommuneSlugs } from '@/data/geografi'
import { getAllStoreSlugs } from '@/lib/stores'
import { getAllErrorBrandSlugs, getAllErrorCodeParams } from '@/data/feilkoder'
import { getAllTermSlugs } from '@/data/ordliste'
import { getAllManualSlugs } from '@/data/bruksanvisning'

const BASE = 'https://vaskemaskin.no'
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const s: MetadataRoute.Sitemap = [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/fylker/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/butikker/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/feilkode/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/ordliste/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bruksanvisning/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/om-oss/', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: BASE + '/personvern/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
  const m = (slugs: string[], prefix: string, p: number, f: 'weekly' | 'monthly') => slugs.map(slug => ({ url: BASE + prefix + slug + '/', lastModified: now, changeFrequency: f, priority: p }))
  return [
    ...s,
    ...m(getAllCategorySlugs(), '/kategori/', 0.8, 'weekly'),
    ...m(getAllBrandSlugs(), '/merke/', 0.7, 'monthly'),
    ...m(getAllArticleSlugs(), '/artikkel/', 0.8, 'monthly'),
    ...m(getAllFylkeSlugs(), '/fylke/', 0.7, 'monthly'),
    ...m(getAllKommuneSlugs(), '/kommune/', 0.6, 'monthly'),
    ...m(getAllStoreSlugs(), '/butikk/', 0.5, 'monthly'),
    ...m(getAllErrorBrandSlugs(), '/feilkode/', 0.7, 'monthly'),
    ...getAllErrorCodeParams().map(p => ({ url: BASE + '/feilkode/' + p.merke + '/' + p.kode + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...m(getAllTermSlugs(), '/ordliste/', 0.5, 'monthly'),
    ...m(getAllManualSlugs(), '/bruksanvisning/', 0.7, 'monthly'),
  ]
}
