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
    // Bedrift hub
    { url: BASE + '/bedrift/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Bedrift bransjer
    { url: BASE + '/bedrift/hotell/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/barnehage/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/sykehus/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/borettslag/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/vaskeri/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/ridesenter/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/bedrift/frisor/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/bedrift/offshore/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    // Bedrift maskintyper
    { url: BASE + '/bedrift/maskintyper/barrieremaskin/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/maskintyper/industrimaskin/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/maskintyper/tunnelmaskin/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/maskintyper/moppemaskin/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/bedrift/maskintyper/torkeskap/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    // Bedrift leverandorer
    { url: BASE + '/bedrift/leverandorer/miele-professional/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/bedrift/leverandorer/electrolux-professional/', lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: BASE + '/bedrift/leverandorer/primus/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: BASE + '/bedrift/leverandorer/lg-commercial/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: BASE + '/bedrift/leverandorer/schulthess/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: BASE + '/bedrift/leverandorer/girbau/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: BASE + '/bedrift/leverandorer/jensen-group/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: BASE + '/bedrift/leverandorer/podab/', lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    // Bedrift spesialsider
    { url: BASE + '/bedrift/hygienestandarder/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/prisguide/', lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Bedrift verktoy
    { url: BASE + '/bedrift/verktoy/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/verktoy/vaskeri-roi/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/verktoy/kapasitetsplanlegger/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: BASE + '/bedrift/verktoy/maskinvelger/', lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // Existing dynamic routes
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
