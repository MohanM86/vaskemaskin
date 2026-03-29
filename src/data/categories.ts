export interface Category {
  slug: string
  name: string
  shortName: string
  description: string
  metaTitle: string
  metaDescription: string
  intro: string
  articleSlugs: string[]
}

export const categories: Category[] = [
  {
    slug: 'toppmatere',
    name: 'Toppmaterevaskemaskiner',
    shortName: 'Toppmatere',
    description: 'Alt om toppmaterevaskemaskiner. Perfekt for trange rom og mindre bad.',
    metaTitle: 'Toppmaterevaskemaskiner | Fordeler, tips og anbefalinger',
    metaDescription: 'Komplett guide til toppmaterevaskemaskiner. Smale, plassbesparende og effektive. Les om fordeler, ulemper og hvilke modeller som passer ditt hjem.',
    intro: 'Toppmaterevaskemaskiner er det smarte valget for deg med begrenset plass. Med en bredde pa bare 40 centimeter far du full vaskekapasitet uten a ofre gulvplass. Denne typen er spesielt populaer i leiligheter og mindre bad der hver centimeter teller.',
    articleSlugs: ['toppmatere-vs-frontmatere', 'beste-toppmater-2026'],
  },
  {
    slug: 'frontmatere',
    name: 'Frontmaterevaskemaskiner',
    shortName: 'Frontmatere',
    description: 'Alt om frontmaterevaskemaskiner. Den vanligste typen i norske hjem.',
    metaTitle: 'Frontmaterevaskemaskiner | Guide til valg og bruk',
    metaDescription: 'Frontmaterevaskemaskiner er Norges mest populaere vaskemaskintype. Finn ut hvorfor, og les om funksjoner, kapasitet og energimerking.',
    intro: 'Frontmaterevaskemaskiner er den klart vanligste typen i norske hjem. De gir deg muligheten til a stable torketrommel pa toppen, har generelt storre kapasitet og er kjent for grundig og skannsom vask. De fleste modeller pa markedet i dag er frontmatere.',
    articleSlugs: ['velge-frontmater', 'frontmater-kapasitet-guide'],
  },
  {
    slug: 'vasketorker',
    name: 'Kombinerte vask og tork',
    shortName: 'Vasketorkere',
    description: 'Kombinerte maskiner som bade vasker og torker klaerne dine.',
    metaTitle: 'Vasketorkere | Kombinert vaskemaskin og torketrommel',
    metaDescription: 'Vasketorkere gir deg to maskiner i en. Les om fordeler, begrensninger og de beste modellene for norske hjem.',
    intro: 'En vasketorker kombinerer vaskemaskin og torketrommel i en og samme enhet. Det er den perfekte losningen for deg som ikke har plass til to separate maskiner, men likevel onsker komforten av a kunne torke klaerne uten klesnor.',
    articleSlugs: ['vasketorker-verdt-det', 'beste-vasketorkere-2026'],
  },
  {
    slug: 'energi-og-miljo',
    name: 'Energi og miljo',
    shortName: 'Energi',
    description: 'Energimerking, stromforbruk og miljobevisste valg for vaskemaskiner.',
    metaTitle: 'Energimerking vaskemaskin | Spar strom og miljo',
    metaDescription: 'Forstaa energimerking pa vaskemaskiner. Les om stromforbruk, vannforbruk og hvordan du velger en miljevennlig vaskemaskin.',
    intro: 'Med stadig stigende strompriser i Norge er energiforbruk blitt en viktig faktor nar du velger vaskemaskin. Den nye energimerkingen fra EU gjor det enklere a sammenligne modeller, men det er flere ting du bor vite for a gjore et smart valg.',
    articleSlugs: ['energimerking-forklart', 'spare-strom-vaskemaskin'],
  },
  {
    slug: 'vedlikehold',
    name: 'Vedlikehold og feilsoking',
    shortName: 'Vedlikehold',
    description: 'Hold vaskemaskinen i toppform med riktig vedlikehold og feilsoking.',
    metaTitle: 'Vedlikehold vaskemaskin | Tips, rengjoring og feilsoking',
    metaDescription: 'Laer a vedlikeholde vaskemaskinen din riktig. Rengjoring, kalkfjerning, feilkoder og nar du bor ringe servicetekniker.',
    intro: 'En vaskemaskin som far jevnlig vedlikehold varer lenger og vasker bedre. De fleste problemer kan forebygges med enkle rutiner, og mange feil kan du fikse selv uten a ringe servicetekniker.',
    articleSlugs: ['rengjore-vaskemaskin', 'vanlige-feilkoder'],
  },
  {
    slug: 'kjopsguide',
    name: 'Kjopsguider',
    shortName: 'Kjopsguide',
    description: 'Hjelp til a velge riktig vaskemaskin for dine behov og budsjett.',
    metaTitle: 'Kjopsguide vaskemaskin | Slik velger du riktig',
    metaDescription: 'Komplett kjopsguide for vaskemaskiner. Kapasitet, funksjoner, stoy, pris og alt annet du trenger a vite for kjop i 2026.',
    intro: 'A kjope ny vaskemaskin er en investering som varer i mange aar. Med sa mange modeller, merker og funksjoner tilgjengelig kan det vaere vanskelig a vite hva du faktisk trenger. Denne guiden hjelper deg a navigere markedet.',
    articleSlugs: ['komplett-kjopsguide-2026', 'vaskemaskin-under-5000'],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return categories.map(c => c.slug)
}
