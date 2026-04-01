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
    intro: 'Visste du at feil vaskeprogram kan ødelegge favorittgenseren din? Disse guidene viser deg nøyaktig hvordan du vasker alt fra ømfintlig ull til skitne joggesko, med riktig temperatur, program og dosering for hvert materiale.',
    articleSlugs: ['vaske-dyne-i-vaskemaskin', 'vaske-ull-uten-krymping', 'fjerne-flekker', 'vaskesymboler-guide', 'vaske-sko-i-vaskemaskin', 'vasketemperatur-guide', 'vaskemiddel-guide', 'vaske-gardiner', 'sportsklaer-vask', 'vaske-babyklaer'],
  },
  {
    slug: 'allergi-og-hygiene',
    name: 'Allergi og hygiene',
    shortName: 'Allergi og hygiene',
    description: 'Vask for allergikere, babyklær og fjerning av bakterier.',
    metaTitle: 'Allergivask og hygiene | Vaskemaskiner for allergikere',
    metaDescription: 'Slik vasker du for å fjerne allergener, bakterier og støvmidd. Programmer, temperaturer og tips for allergikere.',
    intro: 'For allergikere og barnefamilier er riktig vasking mer enn bare rengjøring. Det handler om å fjerne allergener som støvmidd, pollen og dyrehår fra tekstiler. Moderne vaskemaskiner med dampfunksjon og høytemperaturprogrammer gjør dette enklere enn noen gang.',
    articleSlugs: ['allergivask', 'vaske-babyklaer'],
  },
  {
    slug: 'okonomi',
    name: 'Økonomi og tilbud',
    shortName: 'Økonomi',
    description: 'Budsjettmaskiner, strømbesparing og Black Friday tips.',
    metaTitle: 'Vaskemaskin økonomi | Spare penger på kjøp og drift',
    metaDescription: 'Finn de beste vaskemaskinene til lavest pris. Budsjettmodeller, strømbesparing og tips for Black Friday.',
    intro: 'Du trenger ikke bruke en formue på en god vaskemaskin. Denne kategorien hjelper deg å finne det beste valget for budsjettet ditt, enten du jakter på budsjettmodeller under fem tusen kroner eller vil vite hvordan du sparer strøm med maskinen du allerede har.',
    articleSlugs: ['vaskemaskin-under-5000', 'spare-strom-vaskemaskin', 'black-friday-vaskemaskin', 'reklamasjon-garanti-vaskemaskin', 'naar-bytte-vaskemaskin'],
  },

  {
    slug: 'smart-vaskemaskin',
    name: 'Smarte vaskemaskiner',
    shortName: 'Smart vask',
    description: 'WiFi, app-styring og smarte funksjoner for moderne hjem.',
    metaTitle: 'Smarte vaskemaskiner 2026 | WiFi, app og smarte funksjoner',
    metaDescription: 'Komplett guide til smarte vaskemaskiner med WiFi og app-styring. Samsung SmartThings, LG ThinQ, Bosch Home Connect og mer.',
    intro: 'Smarte vaskemaskiner med WiFi lar deg starte, overvåke og styre vasken fra telefonen. Du får varsler når vasken er ferdig, kan laste ned nye programmer og feilsøke via appen. De fleste nye mellomklasse og premiummodeller fra Samsung, LG, Bosch og Electrolux har nå innebygd WiFi som standard.',
    articleSlugs: ["smart-vaskemaskin-guide", "beste-app-vaskemaskiner-2026", "smart-hjem-vaskemaskin"],
  },
  {
    slug: 'torketrommel',
    name: 'Tørketromler',
    shortName: 'Tørketrommel',
    description: 'Kondenstørker, varmepumpe og riktig tørking av klær.',
    metaTitle: 'Tørketrommel guide 2026 | Kondenstørker vs varmepumpe',
    metaDescription: 'Alt om tørketromler: varmepumpe vs kondenstørker, kapasitet, energiforbruk og de beste modellene i Norge i 2026.',
    intro: 'En tørketrommel er en stor investering som forenkler hverdagen betraktelig, spesielt i norske hjem der utendørs tørking bare er mulig noen måneder i året. Valget mellom varmepumpetørker og kondenstørker påvirker både strømregningen og klærnes levetid. Denne kategorien hjelper deg å finne riktig tørketrommel.',
    articleSlugs: ["torketrommel-guide-2026", "varmepumpe-vs-kondenstorker", "torketrommel-energi-tips"],
  },
  {
    slug: 'vaskeprogrammer',
    name: 'Vaskeprogrammer og funksjoner',
    shortName: 'Programmer',
    description: 'Forstå alle programmene på vaskemaskinen din.',
    metaTitle: 'Vaskeprogrammer guide 2026 | Alle programmer forklart',
    metaDescription: 'Komplett oversikt over vaskeprogrammer: bomull, syntetisk, ull, eco, hurtigvask, dampvask og spesialprogrammer forklart.',
    intro: 'De fleste bruker bare to eller tre av vaskemaskinens programmer, men moderne maskiner har opptil tjue ulike alternativer. Å velge riktig program gir bedre vaskeresultat, lavere strømforbruk og lengre levetid for klærne. Denne kategorien forklarer alle programmene og når du bør bruke dem.',
    articleSlugs: ["vaskeprogrammer-forklart", "dampvask-guide", "hurtigvask-vs-eco"],
  },
  {
    slug: 'installasjon',
    name: 'Installasjon og oppsett',
    shortName: 'Installasjon',
    description: 'Montering, tilkobling, vaskesøyle og plassering.',
    metaTitle: 'Installasjon vaskemaskin 2026 | Montering og oppsett guide',
    metaDescription: 'Komplett guide til installasjon av vaskemaskin. Vaskesøyle, vann og avløp, støydemping, gulvkrav og integrerte modeller.',
    intro: 'Riktig installasjon er avgjørende for at vaskemaskinen skal fungere optimalt og vare lenge. Feil montering fører til vibrasjon, støy og i verste fall vannskader. Denne kategorien dekker alt fra vaskesøyle og tilkobling til støydemping og spesialtilpasninger for trange rom.',
    articleSlugs: ["installere-vaskemaskin", "vaskesoeyle-guide", "vaskemaskin-stoeydemping"],
  },
  {
    slug: 'best-i-test',
    name: 'Best i test og anbefalinger',
    shortName: 'Best i test',
    description: 'Testvinnere, anbefalinger og toppmodeller i hver prisklasse.',
    metaTitle: 'Vaskemaskin best i test 2026 | Testvinnere og anbefalinger',
    metaDescription: 'Oversikt over vaskemaskin best i test 2026. Testvinnere fra Stiftung Warentest, anbefalinger per prisklasse og tips til valg.',
    intro: 'Uavhengige tester fra organisasjoner som Stiftung Warentest, Which og svenske Rad och Ron gir deg objektive data om vaskeresultat, energiforbruk, holdbarhet og støy. Vi sammenstiller de viktigste testresultatene og gir deg klare anbefalinger tilpasset norske forhold og priser.',
    articleSlugs: ["beste-vaskemaskin-2026", "beste-vaskemaskin-familie", "beste-vaskemaskin-liten-plass"],
  },
  {
    slug: 'kompakt',
    name: 'Kompakte og små vaskemaskiner',
    shortName: 'Kompakt',
    description: 'Småvaskemaskiner for hytte, leilighet og trange rom.',
    metaTitle: 'Kompakt vaskemaskin 2026 | Små modeller for hytte og leilighet',
    metaDescription: 'Guide til kompakte vaskemaskiner for hytte, liten leilighet og trange vaskerom. Slim, mini og benkevaskemaskiner.',
    intro: 'Ikke alle har plass til en fullstørrelse vaskemaskin. Kompakte modeller med 40 til 50 cm bredde, benkevaskemaskiner og hyttevaskemaskiner gir deg full funksjonalitet i en mindre pakke. Denne kategorien hjelper deg å finne en maskin som passer plassen du har tilgjengelig.',
    articleSlugs: ["vaskemaskin-paa-hytta", "kompakt-vaskemaskin-guide", "vaskemaskin-liten-plass"],
  },
  {
    slug: 'gjenbruk-og-miljo',
    name: 'Gjenbruk og miljø',
    shortName: 'Gjenbruk',
    description: 'Resirkulering, EE-avfall, bærekraft og miljøvennlig vasking.',
    metaTitle: 'Gjenbruk vaskemaskin 2026 | Resirkulering, EE-avfall og bærekraft',
    metaDescription: 'Alt om gjenbruk og resirkulering av vaskemaskiner i Norge. EE-avfall, innlevering, bærekraftig vask og miljøvennlige valg.',
    intro: 'En vaskemaskin inneholder verdifulle materialer som stål, aluminium, kobber og plast som kan gjenvinnes og brukes i nye produkter. I Norge har vi gode ordninger for innlevering av EE-avfall, og alle elektronikkforhandlere er lovpålagt å ta imot gammel elektronikk gratis. Denne kategorien hjelper deg å kvitte deg med den gamle maskinen på riktig måte, vurdere om brukt maskin er et godt kjøp, og vaske mer miljøvennlig i hverdagen.',
    articleSlugs: ["resirkulere-vaskemaskin", "brukt-vaskemaskin-guide", "miljovennlig-vask"],
  },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return categories.map(c => c.slug)
}
