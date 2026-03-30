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
    description: 'Perfekt for trange rom. Kun 40 cm bredde.',
    metaTitle: 'Toppmaterevaskemaskiner | Fordeler, tips og anbefalinger',
    metaDescription: 'Komplett guide til toppmaterevaskemaskiner. Smale, plassbesparende og effektive. Les om fordeler, ulemper og hvilke modeller som passer hjemmet ditt.',
    intro: 'Toppmaterevaskemaskiner er det smarte valget for deg med begrenset plass. Med en bredde på bare 40 centimeter får du full vaskekapasitet uten å ofre gulvplass. Denne typen er spesielt populær i leiligheter og mindre bad der hver centimeter teller.',
    articleSlugs: ['toppmatere-vs-frontmatere', 'beste-toppmater-2026'],
  },
  {
    slug: 'frontmatere',
    name: 'Frontmaterevaskemaskiner',
    shortName: 'Frontmatere',
    description: 'Den vanligste typen. 60 cm, stabling mulig.',
    metaTitle: 'Frontmaterevaskemaskiner | Guide til valg og bruk',
    metaDescription: 'Frontmaterevaskemaskiner er Norges mest populære vaskemaskintype. Finn ut hvorfor, og les om funksjoner, kapasitet og energimerking.',
    intro: 'Frontmaterevaskemaskiner er den klart vanligste typen i norske hjem. De gir deg muligheten til å stable tørketrommel på toppen, har generelt større kapasitet og er kjent for grundig og skånsom vask. De fleste modeller på markedet i dag er frontmatere.',
    articleSlugs: ['velge-frontmater', 'frontmater-kapasitet-guide'],
  },
  {
    slug: 'vasketorker',
    name: 'Kombinerte vask og tørk',
    shortName: 'Vasketørkere',
    description: 'Kombinerte maskiner som både vasker og tørker klærne dine.',
    metaTitle: 'Vasketørkere | Kombinert vaskemaskin og tørketrommel',
    metaDescription: 'Vasketørkere gir deg to maskiner i én. Les om fordeler, begrensninger og de beste modellene for norske hjem.',
    intro: 'En vasketørker kombinerer vaskemaskin og tørketrommel i én og samme enhet. Det er den perfekte løsningen for deg som ikke har plass til to separate maskiner, men likevel ønsker komforten av å kunne tørke klærne uten klesnor.',
    articleSlugs: ['vasketorker-verdt-det', 'beste-vasketorkere-2026'],
  },
  {
    slug: 'energi-og-miljo',
    name: 'Energi og miljø',
    shortName: 'Energi',
    description: 'Energimerking, strømforbruk og miljøbevisste valg for vaskemaskiner.',
    metaTitle: 'Energimerking vaskemaskin | Spar strøm og miljø',
    metaDescription: 'Forstå energimerking på vaskemaskiner. Les om strømforbruk, vannforbruk og hvordan du velger en miljøvennlig vaskemaskin.',
    intro: 'Med stadig stigende strømpriser i Norge er energiforbruk blitt en viktig faktor når du velger vaskemaskin. Den nye energimerkingen fra EU gjør det enklere å sammenligne modeller, men det er flere ting du bør vite for å gjøre et smart valg.',
    articleSlugs: ['energimerking-forklart', 'spare-strom-vaskemaskin'],
  },
  {
    slug: 'vedlikehold',
    name: 'Vedlikehold og feilsøking',
    shortName: 'Vedlikehold',
    description: 'Hold vaskemaskinen i toppform med riktig vedlikehold og feilsøking.',
    metaTitle: 'Vedlikehold vaskemaskin | Tips, rengjøring og feilsøking',
    metaDescription: 'Lær å vedlikeholde vaskemaskinen din riktig. Rengjøring, kalkfjerning, feilkoder og når du bør ringe servicetekniker.',
    intro: 'En vaskemaskin som får jevnlig vedlikehold varer lenger og vasker bedre. De fleste problemer kan forebygges med enkle rutiner, og mange feil kan du fikse selv uten å ringe servicetekniker.',
    articleSlugs: ['rengjore-vaskemaskin', 'vanlige-feilkoder'],
  },
  {
    slug: 'kjopsguide',
    name: 'Kjøpsguider',
    shortName: 'Kjøpsguide',
    description: 'Hjelp til å velge riktig vaskemaskin for dine behov og budsjett.',
    metaTitle: 'Kjøpsguide vaskemaskin | Slik velger du riktig',
    metaDescription: 'Komplett kjøpsguide for vaskemaskiner. Kapasitet, funksjoner, støy, pris og alt annet du trenger å vite før kjøp i 2026.',
    intro: 'Å kjøpe ny vaskemaskin er en investering som varer i mange år. Med så mange modeller, merker og funksjoner tilgjengelig kan det være vanskelig å vite hva du faktisk trenger. Denne guiden hjelper deg å navigere markedet.',
    articleSlugs: ['komplett-kjopsguide-2026', 'vaskemaskin-under-5000'],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return categories.map(c => c.slug)
}
