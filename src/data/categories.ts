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
  {
    slug: 'vaskeguide',
    name: 'Vaskeguider',
    shortName: 'Vaskeguider',
    description: 'Praktiske guider for vask av dyner, ull, sko, gardiner og mer.',
    metaTitle: 'Vaskeguider | Slik vasker du alt riktig i vaskemaskinen',
    metaDescription: 'Praktiske vaskeguider for alt fra dyner og ull til sko og gardiner. Riktig temperatur, program og vaskemiddel for hvert plagg.',
    intro: 'Visste du at feil vaskeprogram kan odelegge favorittgenseren din? Disse guidene viser deg noyaktig hvordan du vasker alt fra omfintlig ull til skitne joggesko, med riktig temperatur, program og dosering for hvert materiale.',
    articleSlugs: ['vaske-dyne-i-vaskemaskin', 'vaske-ull-uten-krymping', 'fjerne-flekker', 'vaskesymboler-guide', 'vaske-sko-i-vaskemaskin', 'vasketemperatur-guide', 'vaskemiddel-guide', 'vaske-gardiner', 'sportsklaer-vask', 'vaske-babyklaer'],
  },
  {
    slug: 'allergi-og-hygiene',
    name: 'Allergi og hygiene',
    shortName: 'Allergi og hygiene',
    description: 'Vask for allergikere, babyklaer og fjerning av bakterier.',
    metaTitle: 'Allergivask og hygiene | Vaskemaskiner for allergikere',
    metaDescription: 'Slik vasker du for a fjerne allergener, bakterier og stovmidd. Programmer, temperaturer og tips for allergikere.',
    intro: 'For allergikere og barnefamilier er riktig vasking mer enn bare rengjoring. Det handler om a fjerne allergener som stovmidd, pollen og dyrehar fra tekstiler. Moderne vaskemaskiner med dampfunksjon og hoytemperaturprogrammer gjor dette enklere enn noen gang.',
    articleSlugs: ['allergivask', 'vaske-babyklaer'],
  },
  {
    slug: 'okonomi',
    name: 'Okonomi og tilbud',
    shortName: 'Okonomi',
    description: 'Budsjettmaskiner, strombesparing og Black Friday tips.',
    metaTitle: 'Vaskemaskin okonomi | Spare penger pa kjop og drift',
    metaDescription: 'Finn de beste vaskemaskinene til lavest pris. Budsjettmodeller, strombesparing og tips for Black Friday.',
    intro: 'Du trenger ikke bruke en formue pa en god vaskemaskin. Denne kategorien hjelper deg a finne det beste valget for budsjettet ditt, enten du jakter pa budsjettmodeller under fem tusen kroner eller vil vite hvordan du sparer strom med maskinen du allerede har.',
    articleSlugs: ['vaskemaskin-under-5000', 'spare-strom-vaskemaskin', 'black-friday-vaskemaskin', 'reklamasjon-garanti-vaskemaskin', 'naar-bytte-vaskemaskin'],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return categories.map(c => c.slug)
}
