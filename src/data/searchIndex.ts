import { categories } from './categories'
import { brands } from './brands'
import { articles } from './articles'
import { errorBrands } from './feilkoder'
import { terms } from './ordliste'
import { manuals } from './bruksanvisning'
import { comparisons } from './sammenligninger'

export interface SearchItem {
  title: string
  href: string
  type: 'kategori' | 'merke' | 'artikkel' | 'feilkode' | 'ordliste' | 'bruksanvisning' | 'sammenligning' | 'bedrift' | 'verktoy'
  keywords: string
  desc: string
}

const bedriftPages: SearchItem[] = [
  { title: 'Vaskemaskin for hotell', href: '/bedrift/hotell/', type: 'bedrift', keywords: 'hotell overnatting vaskeri tekstil sengetoy', desc: 'Guide til profesjonelle maskiner for hoteller' },
  { title: 'Vaskemaskin for sykehus', href: '/bedrift/sykehus/', type: 'bedrift', keywords: 'sykehus helse barrieremaskin smittevern RABC', desc: 'Krav og maskiner for helsevesenet' },
  { title: 'Vaskemaskin for barnehage', href: '/bedrift/barnehage/', type: 'bedrift', keywords: 'barnehage barn hygiene allergi', desc: 'Profesjonelle maskiner for barnehager' },
  { title: 'Vaskemaskin for borettslag', href: '/bedrift/borettslag/', type: 'bedrift', keywords: 'borettslag sameie fellesvaskeri betaling', desc: 'Fellesvaskerier for borettslag' },
  { title: 'Vaskemaskin for vaskeri', href: '/bedrift/vaskeri/', type: 'bedrift', keywords: 'vaskeri profesjonelt tunnel industri', desc: 'Maskiner for kommersielle vaskerier' },
  { title: 'Vaskemaskin for ridesenter', href: '/bedrift/ridesenter/', type: 'bedrift', keywords: 'ridesenter hest stall dekken', desc: 'Maskiner for ridesentre og staller' },
  { title: 'Vaskemaskin for frisor', href: '/bedrift/frisor/', type: 'bedrift', keywords: 'frisor salong handkle skjonnhet', desc: 'Kompakte maskiner for salonger' },
  { title: 'Vaskemaskin for offshore', href: '/bedrift/offshore/', type: 'bedrift', keywords: 'offshore maritim plattform DNV skip', desc: 'Sertifiserte maskiner for offshore' },
  { title: 'Hygienestandarder', href: '/bedrift/hygienestandarder/', type: 'bedrift', keywords: 'hygiene EN14065 RABC desinfeksjon standard', desc: 'EN 14065, RABC og norske krav' },
  { title: 'Prisguide bedrift', href: '/bedrift/prisguide/', type: 'bedrift', keywords: 'pris kostnad leasing investering', desc: 'Priser for profesjonelle maskiner' },
  { title: 'Barrieremaskin', href: '/bedrift/maskintyper/barrieremaskin/', type: 'bedrift', keywords: 'barrieremaskin smittevern ren uren sone', desc: 'Tosidig maskin for smittevern' },
  { title: 'Tunnelvaskemaskin', href: '/bedrift/maskintyper/tunnelmaskin/', type: 'bedrift', keywords: 'tunnelmaskin kontinuerlig storvasker', desc: 'Kontinuerlig vask for storvaskerier' },
  { title: 'Industrivaskemaskin', href: '/bedrift/maskintyper/industrimaskin/', type: 'bedrift', keywords: 'industrimaskin stor kapasitet 20kg 60kg', desc: 'Store maskiner fra 20 til 120 kg' },
  { title: 'Moppemaskin', href: '/bedrift/maskintyper/moppemaskin/', type: 'bedrift', keywords: 'moppemaskin mopp klut renhold INSTA800', desc: 'Spesialmaskin for mopper og kluter' },
  { title: 'Torkeskap', href: '/bedrift/maskintyper/torkeskap/', type: 'bedrift', keywords: 'torkeskap uniform arbeidstoy boyle', desc: 'Skånsom tørking på bøyler' },
  { title: 'Miele Professional', href: '/bedrift/leverandorer/miele-professional/', type: 'bedrift', keywords: 'miele professional premium Little Giants', desc: 'Premium profesjonelle maskiner' },
  { title: 'Electrolux Professional', href: '/bedrift/leverandorer/electrolux-professional/', type: 'bedrift', keywords: 'electrolux professional myPRO Line6000', desc: 'Bredeste utvalget i Norden' },
  { title: 'Jensen Group', href: '/bedrift/leverandorer/jensen-group/', type: 'bedrift', keywords: 'jensen tunnel storvasker', desc: 'Verdensledende på tunnelsystemer' },
  { title: 'Girbau', href: '/bedrift/leverandorer/girbau/', type: 'bedrift', keywords: 'girbau spansk industri', desc: 'Spansk kvalitet for industrien' },
  { title: 'Podab', href: '/bedrift/leverandorer/podab/', type: 'bedrift', keywords: 'podab torkeskap fellesvaskeri SmartWash', desc: 'Nordisk spesialist på fellesvaskerier' },
  { title: 'Primus Alliance', href: '/bedrift/leverandorer/primus/', type: 'bedrift', keywords: 'primus alliance robust myntvaskeri', desc: 'Industrielle vaskemaskiner' },
  { title: 'LG Commercial', href: '/bedrift/leverandorer/lg-commercial/', type: 'bedrift', keywords: 'lg commercial AI Direct Drive', desc: 'Profesjonelle maskiner med AI motor' },
  { title: 'Schulthess', href: '/bedrift/leverandorer/schulthess/', type: 'bedrift', keywords: 'schulthess sveitsisk premium kvalitet', desc: 'Sveitsisk presisjon' },
  { title: 'Vaskeri ROI kalkulator', href: '/bedrift/verktoy/vaskeri-roi/', type: 'verktoy', keywords: 'ROI kalkulator lonnsom outsourcing', desc: 'Beregn lønnsomheten av eget vaskeri' },
  { title: 'Kapasitetsplanlegger', href: '/bedrift/verktoy/kapasitetsplanlegger/', type: 'verktoy', keywords: 'kapasitet planlegger antall maskiner', desc: 'Finn riktig antall maskiner' },
  { title: 'Bedriftsmaskinvelger', href: '/bedrift/verktoy/maskinvelger/', type: 'verktoy', keywords: 'maskinvelger quiz anbefaling bedrift', desc: 'Svar på 4 spørsmål og få anbefaling' },
]

const verktoyPages: SearchItem[] = [
  { title: 'Energikalkulator', href: '/verktoy/energikalkulator/', type: 'verktoy', keywords: 'energi kalkulator strøm kwh', desc: 'Beregn strømkostnad for vaskemaskinen' },
  { title: 'Vaskemaskinvelger', href: '/verktoy/vaskemaskinvelger/', type: 'verktoy', keywords: 'velger quiz anbefaling test', desc: 'Finn riktig vaskemaskin for deg' },
  { title: 'Kapasitetskalkulator', href: '/verktoy/kapasitetskalkulator/', type: 'verktoy', keywords: 'kapasitet kilo familie storrelse', desc: 'Hvor stor maskin trenger du?' },
  { title: 'Sammenlign pris', href: '/verktoy/sammenlign-pris/', type: 'verktoy', keywords: 'sammenlign pris tilbud', desc: 'Sammenlign priser på vaskemaskiner' },
  { title: 'Reparere eller bytte?', href: '/verktoy/reparere-eller-bytte/', type: 'verktoy', keywords: 'reparere bytte gammel ny lonnsom', desc: 'Lønner det seg aa reparere?' },
]

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  categories.forEach(c => {
    items.push({ title: c.shortName, href: '/kategori/' + c.slug + '/', type: 'kategori', keywords: (c.shortName + ' ' + c.description).toLowerCase(), desc: c.description })
  })

  brands.forEach(b => {
    items.push({ title: b.name, href: '/merke/' + b.slug + '/', type: 'merke', keywords: (b.name + ' ' + b.country + ' vaskemaskin').toLowerCase(), desc: b.country + ' - vaskemaskinprodusent' })
  })

  articles.forEach(a => {
    items.push({ title: a.title, href: '/artikkel/' + a.slug + '/', type: 'artikkel', keywords: (a.title + ' ' + a.excerpt + ' ' + a.category).toLowerCase(), desc: a.excerpt.slice(0, 100) })
  })

  const allCodes: SearchItem[] = []
  errorBrands.forEach((eb: any) => {
    eb.codes.forEach((c: any) => {
      allCodes.push({ title: eb.name + ' ' + c.code + ': ' + c.title, href: '/feilkode/' + eb.slug + '/' + c.slug + '/', type: 'feilkode', keywords: (eb.name + ' ' + c.code + ' ' + c.title + ' ' + c.description).toLowerCase(), desc: c.description.slice(0, 100) })
    })
  })
  items.push(...allCodes)

  terms.forEach(t => {
    items.push({ title: t.term, href: '/ordliste/' + t.slug + '/', type: 'ordliste', keywords: (t.term + ' ' + t.definition + ' ' + t.longDescription.slice(0, 200)).toLowerCase(), desc: t.definition.slice(0, 100) })
  })

  manuals.forEach((m: any) => {
    items.push({ title: 'Bruksanvisning ' + m.name, href: '/bruksanvisning/' + m.slug + '/', type: 'bruksanvisning', keywords: (m.name + ' bruksanvisning manual').toLowerCase(), desc: 'Last ned bruksanvisning for ' + m.name })
  })

  comparisons.forEach((c: any) => {
    items.push({ title: c.brand1 + ' vs ' + c.brand2, href: '/sammenligning/' + c.slug + '/', type: 'sammenligning', keywords: (c.brand1 + ' ' + c.brand2 + ' sammenligning vs versus').toLowerCase(), desc: 'Sammenligning av ' + c.brand1 + ' og ' + c.brand2 })
  })

  items.push(...bedriftPages)
  items.push(...verktoyPages)

  return items
}

export function searchItems(query: string, allItems: SearchItem[], limit: number = 8): SearchItem[] {
  if (!query || query.length < 2) return []
  const q = query.toLowerCase().trim()
  const words = q.split(/\s+/)

  const scored = allItems.map(item => {
    const titleLower = item.title.toLowerCase()
    const kwLower = item.keywords
    let score = 0

    if (titleLower === q) score += 100
    if (titleLower.startsWith(q)) score += 50
    if (titleLower.includes(q)) score += 30

    words.forEach(w => {
      if (titleLower.includes(w)) score += 15
      if (kwLower.includes(w)) score += 5
    })

    return { item, score }
  })

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.item)
}
