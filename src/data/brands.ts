export interface Brand {
  slug: string
  name: string
  country: string
  description: string
  metaTitle: string
  metaDescription: string
  founded: string
  intro: string
  pros: string[]
  cons: string[]
  priceRange: string
  popularModels: string[]
  articleSlugs: string[]
}

export const brands: Brand[] = [
  {
    slug: 'samsung',
    name: 'Samsung',
    country: 'Sør-Korea',
    description: 'Verdensledende teknologiselskap med et bredt utvalg av vaskemaskiner.',
    metaTitle: 'Samsung vaskemaskiner | Modeller, priser og anmeldelser',
    metaDescription: 'Komplett oversikt over Samsung vaskemaskiner i Norge. Les om populære modeller, teknologi, priser og hva som gjør Samsung til et populært valg.',
    founded: '1938',
    intro: 'Samsung er et av verdens største elektronikkselskaper og tilbyr et bredt spekter av vaskemaskiner. De er kjent for innovativ teknologi som EcoBubble, AddWash og AI Energy Mode. Samsung har et solid fotfeste i det norske markedet med modeller i alle prisklasser.',
    pros: ['Innovativ teknologi med EcoBubble', 'Stille drift med Digital Inverter Motor', 'Smart styring via SmartThings appen', 'Bredt utvalg i alle prisklasser'],
    cons: ['Premiummodeller kan være dyre', 'Komplekse menyer på noen modeller', 'Enkelte reservedeler kan være vanskelige å få tak i'],
    priceRange: '4 000 til 15 000 kroner',
    popularModels: ['Samsung WW90T534DAW', 'Samsung WW11BBA046AW', 'Samsung WW80T636ALH'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    country: 'Tyskland',
    description: 'Tysk kvalitet og pålitelighet i vaskemaskiner siden 1933.',
    metaTitle: 'Bosch vaskemaskiner | Tysk kvalitet for norske hjem',
    metaDescription: 'Alt om Bosch vaskemaskiner. Kjent for holdbarhet, energieffektivitet og stille drift. Les om modeller og teknologi.',
    founded: '1886',
    intro: 'Bosch er synonymt med tysk ingeniørkunnskap og kvalitet. Deres vaskemaskiner er kjent for å være eksepsjonelt pålitelige, energieffektive og stillegående. Med i-DOS automatisk dosering og SpeedPerfect teknologi er Bosch et trygt valg for norske forbrukere som verdsetter holdbarhet.',
    pros: ['Utmerket byggekvalitet og holdbarhet', 'Svært stille drift med EcoSilence motor', 'Automatisk vaskemiddeldosering med i-DOS', 'Gode energiklasser'],
    cons: ['Høyere inngangspris enn mange konkurrenter', 'Designet er funksjonelt men ikke det mest moderne', 'Færre smarte funksjoner enn Samsung og LG'],
    priceRange: '5 000 til 16 000 kroner',
    popularModels: ['Bosch WGG244A0BY', 'Bosch WGB256A0BY', 'Bosch WAU28P40'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'siemens',
    name: 'Siemens',
    country: 'Tyskland',
    description: 'Premium vaskemaskiner med avansert tysk teknologi.',
    metaTitle: 'Siemens vaskemaskiner | Premium vaskeopplevelse',
    metaDescription: 'Siemens vaskemaskiner representerer toppen av tysk hvitevareteknologi. Les om funksjoner, modeller og hvorfor Siemens er et premiumvalg.',
    founded: '1847',
    intro: 'Siemens plasserer seg i det øvre segmentet av vaskemaskiner med avanserte funksjoner og sofistikert design. Merket deler teknologiplattform med Bosch gjennom BSH konsernet, men Siemens posisjonerer seg med mer premiumfunksjoner og et mer moderne designspråk.',
    pros: ['Premium design og materialvalg', 'Home Connect app for smart styring', 'sensoFresh dampfunksjon', 'Deler pålitelig teknologi med Bosch'],
    cons: ['Høy pris sammenlignet med de fleste konkurrenter', 'Begrenset utvalg i lavere prisklasser', 'Kan være overkill for enkle behov'],
    priceRange: '6 000 til 18 000 kroner',
    popularModels: ['Siemens WG56B2A4BY', 'Siemens WM14N297DN', 'Siemens WG44B209BY'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'lg',
    name: 'LG',
    country: 'Sør-Korea',
    description: 'Innovativ sørkoreansk produsent kjent for AI og inverterteknologi.',
    metaTitle: 'LG vaskemaskiner | AI drevet vask for norske hjem',
    metaDescription: 'LG vaskemaskiner med AI Direct Drive og TurboWash. Les om teknologi, modeller og priser for det norske markedet.',
    founded: '1958',
    intro: 'LG er kjent for å presse grensene for vaskemaskinteknologi. Med AI Direct Drive motoren som automatisk gjenkjenner stofftyper og justerer bevegelser, og TurboWash som gir rask vask uten å gå på bekostning av resultatet, er LG et spennende valg for teknologiinteresserte forbrukere.',
    pros: ['AI Direct Drive motor gjenkjenner stofftyper', 'TurboWash gir rask og effektiv vask', 'Steam funksjon på mange modeller', 'Lang garanti på motor (opptil 10 år)'],
    cons: ['Brukergrensesnittet kan være uoversiktlig', 'Enkelte modeller er ganske dype', 'Ikke like utbredt i norsk hvitevarehandel som Bosch og Samsung'],
    priceRange: '4 500 til 14 000 kroner',
    popularModels: ['LG F4WR7009AGW', 'LG F4WV710P1E', 'LG F2WV9082E'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'electrolux',
    name: 'Electrolux',
    country: 'Sverige',
    description: 'Skandinavisk storhet innen hvitevarer med lang tradisjon i Norden.',
    metaTitle: 'Electrolux vaskemaskiner | Skandinavisk kvalitet',
    metaDescription: 'Electrolux vaskemaskiner for det nordiske markedet. Les om svenske vaskemaskiner med fokus på tekstilpleie og energieffektivitet.',
    founded: '1919',
    intro: 'Electrolux er den nordiske stolthet innen hvitevarer. Det svenske selskapet har over hundre års erfaring og forstår det skandinaviske markedet bedre enn de fleste. Deres UltraCare system og SensiCare teknologi er utviklet med tanke på at klær i Norden utsettes for alt fra regn og snø til sommer og sol.',
    pros: ['Skandinavisk selskap som forstår nordiske behov', 'UltraCare løsning blander vaskemiddel for bedre resultat', 'SensiCare tilpasser vask etter mengde', 'God tilgang på service og reservedeler i Norge'],
    cons: ['Designet kan oppleves litt konservativt', 'Færre smarte funksjoner enn Samsung og LG', 'Premiummodeller har høy pris'],
    priceRange: '4 000 til 14 000 kroner',
    popularModels: ['Electrolux EW7F6448Q7', 'Electrolux EW9F1689IB', 'Electrolux PerfectCare 600'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'miele',
    name: 'Miele',
    country: 'Tyskland',
    description: 'Tysk premiummerke kjent for enestående holdbarhet og kvalitet.',
    metaTitle: 'Miele vaskemaskiner | Holdbarheten som varer i 20 år',
    metaDescription: 'Miele vaskemaskiner er bygget for å vare i 20 år. Les om det tyske premiummerket, deres TwinDos teknologi og hvorfor mange velger Miele.',
    founded: '1899',
    intro: 'Miele er det udiskutable premiummerket innen vaskemaskiner. Selskapet tester alle maskiner for en levetid på 20 år, noe som gjør dem til det mest holdbare alternativet på markedet. TwinDos automatisk dosering og CapDosing for spesialbehandling viser at Miele aldri går på kompromiss.',
    pros: ['Testet for 20 års levetid', 'TwinDos automatisk dosering', 'Eksepsjonell byggekvalitet', 'Lavt energi og vannforbruk'],
    cons: ['Høyeste prisnivået på markedet', 'Begrenset smart funksjonalitet sammenlignet med Samsung og LG', 'Reservedeler kan være kostbare'],
    priceRange: '10 000 til 25 000 kroner',
    popularModels: ['Miele WSD663 WCS', 'Miele WWD660 WCS', 'Miele WED135 WCS'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'aeg',
    name: 'AEG',
    country: 'Tyskland',
    description: 'Historisk tysk hvitevaremerke, nå under Electrolux paraplyen.',
    metaTitle: 'AEG vaskemaskiner | Tysk tradisjon, nordisk tilpasning',
    metaDescription: 'AEG vaskemaskiner kombinerer tysk ingeniørtradisjon med nordisk design. Les om ØKOMix, ProSteam og modeller tilgjengelige i Norge.',
    founded: '1883',
    intro: 'AEG bringer mer enn 140 års tysk ingeniørtradisjon til norske vaskerom. Som del av Electrolux konsernet får AEG fordelen av skandinavisk markedskunnskap kombinert med tysk presisjon. Deres ØKOMix teknologi og ProSteam dampfunksjon representerer den ypperste kombinasjonen av vaskeresultat og tekstilpleie.',
    pros: ['ØKOMix løser opp vaskemiddel for bedre resultat', 'ProSteam reduserer krøller med damp', 'Solid tysk byggekvalitet', 'God service gjennom Electrolux nettverket i Norge'],
    cons: ['Kan være vanskelig å skille fra Electrolux modeller', 'Høyere pris enn sammenlignbare Electrolux modeller', 'Noe begrenset utvalg i Norge'],
    priceRange: '5 000 til 15 000 kroner',
    popularModels: ['AEG LR7686UD4', 'AEG L7FEP847E', 'AEG L8FEC96QS'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    country: 'USA',
    description: 'Amerikansk hvitevaregigant med solid posisjon i det norske markedet.',
    metaTitle: 'Whirlpool vaskemaskiner | Amerikansk innovasjon',
    metaDescription: 'Whirlpool vaskemaskiner til norske hjem. Les om FreshCare+, 6th Sense teknologi og modeller som passer alle budsjetter.',
    founded: '1911',
    intro: 'Whirlpool er verdens største hvitevareprodusent og har en solid posisjon i Norge. Merket er spesielt kjent for sitt gode forhold mellom pris og ytelse. Med 6th Sense teknologi som automatisk tilpasser vannmengde og energiforbruk, og FreshCare+ som holder klærne friske etter endt vask, tilbyr Whirlpool praktiske løsninger for hverdagen.',
    pros: ['Godt forhold mellom pris og kvalitet', '6th Sense teknologi for automatisk tilpasning', 'FreshCare+ holder klær friske', 'Bredt utvalg i mellomprissegmentet'],
    cons: ['Byggekvaliteten når ikke helt opp til Bosch og Miele', 'Noen modeller kan være noe støyende', 'Designet kan oppleves litt enklere'],
    priceRange: '3 500 til 10 000 kroner',
    popularModels: ['Whirlpool FFS 7259 B EE', 'Whirlpool FWSG 71283 BV', 'Whirlpool FFB 9469 BV'],
    articleSlugs: ['komplett-kjopsguide-2026'],
  },
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug)
}

export function getAllBrandSlugs(): string[] {
  return brands.map(b => b.slug)
}
