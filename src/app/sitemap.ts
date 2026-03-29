import type { MetadataRoute } from 'next'
import { getAllCategorySlugs } from '@/data/categories'
import { getAllArticleSlugs } from '@/data/articles'
import { getAllBrandSlugs } from '@/data/brands'
import { getAllFylkeSlugs, getAllKommuneSlugs } from '@/data/geografi'
import { getAllStoreSlugs } from '@/lib/stores'
import { getAllErrorBrandSlugs, getAllErrorCodeParams } from '@/data/feilkoder'
import { getAllTermSlugs } from '@/data/ordliste'
import { getAllManualSlugs } from '@/data/bruksanvisning'
import { getAllComparisonSlugs } from '@/data/sammenligninger'

const BASE = 'https://vaskemaskin.no'
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const p = (slugs: string[], prefix: string, pri: number, freq: 'weekly' | 'monthly') => slugs.map(s => ({ url: BASE + prefix + s + '/', lastModified: now, changeFrequency: freq, priority: pri }))
  return [
    { url: BASE + '/', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: BASE + '/fylker/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/butikker/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/feilkode/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/ordliste/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bruksanvisning/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/verktoy/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/verktoy/energikalkulator/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/verktoy/vaskemaskinvelger/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/faq/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: BASE + '/om-oss/', lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: BASE + '/personvern/', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...p(getAllCategorySlugs(), '/kategori/', 0.8, 'weekly'),
    ...p(getAllBrandSlugs(), '/merke/', 0.7, 'monthly'),
    ...p(getAllArticleSlugs(), '/artikkel/', 0.8, 'monthly'),
    ...p(getAllFylkeSlugs(), '/fylke/', 0.7, 'monthly'),
    ...p(getAllKommuneSlugs(), '/kommune/', 0.6, 'monthly'),
    ...p(getAllStoreSlugs(), '/butikk/', 0.5, 'monthly'),
    ...p(getAllErrorBrandSlugs(), '/feilkode/', 0.7, 'monthly'),
    ...getAllErrorCodeParams().map(x => ({ url: BASE + '/feilkode/' + x.merke + '/' + x.kode + '/', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...p(getAllTermSlugs(), '/ordliste/', 0.5, 'monthly'),
    ...p(getAllManualSlugs(), '/bruksanvisning/', 0.7, 'monthly'),
    ...p(getAllComparisonSlugs(), '/sammenligning/', 0.8, 'monthly'),
  ]
}
