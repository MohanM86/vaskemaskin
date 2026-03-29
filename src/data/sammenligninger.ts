export interface Comparison {
  slug: string
  brand1: string
  brand2: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  categories: { name: string; brand1Score: string; brand2Score: string; winner: string; explanation: string }[]
  verdict: string
}

export const comparisons: Comparison[] = [
  {
    slug: 'bosch-vs-samsung',
    brand1: 'Bosch', brand2: 'Samsung',
    title: 'Bosch vs Samsung vaskemaskin: Hvilken bør du velge?',
    metaTitle: 'Bosch vs Samsung vaskemaskin | Komplett sammenligning 2026',
    metaDescription: 'Bosch vs Samsung vaskemaskin: Vi sammenligner pris, kvalitet, funksjoner og holdbarhet. Finn ut hvilken som passer best for deg.',
    intro: 'Bosch og Samsung er to av de mest populære vaskemaskinmerkene i Norge, men de representerer to helt forskjellige tilnærminger. Bosch satser på tysk pålitelighet og stille drift, mens Samsung fokuserer på innovasjon og smarte funksjoner.',
    categories: [
      { name: 'Byggekvalitet', brand1Score: '9/10', brand2Score: '7/10', winner: 'Bosch', explanation: 'Bosch bruker tykkere materialer og mer robust konstruksjon. EcoSilence motoren er ekstremt holdbar og stillegående.' },
      { name: 'Smarte funksjoner', brand1Score: '7/10', brand2Score: '9/10', winner: 'Samsung', explanation: 'Samsung har EcoBubble, AddWash, AI Energy Mode og SmartThings appstyring. Bosch sin i-DOS er utmerket, men Samsung har bredere funksjonalitet.' },
      { name: 'Støynivå', brand1Score: '9/10', brand2Score: '7/10', winner: 'Bosch', explanation: 'Bosch sine EcoSilence motorer er blant de stilleste på markedet. Samsung er akseptabel men merkbart høyere under sentrifugering.' },
      { name: 'Pris', brand1Score: '6/10', brand2Score: '8/10', winner: 'Samsung', explanation: 'Samsung tilbyr flere modeller i det lavere prissegmentet. Bosch sin inngangspris er typisk tusen til to tusen kroner høyere.' },
      { name: 'Energieffektivitet', brand1Score: '8/10', brand2Score: '8/10', winner: 'Likt', explanation: 'Begge merker tilbyr modeller i energiklasse B. Forskjellene i strømforbruk er minimale mellom sammenlignbare modeller.' },
      { name: 'Service i Norge', brand1Score: '9/10', brand2Score: '7/10', winner: 'Bosch', explanation: 'BSH har et godt utbygd servicenettverk i Norge. Samsung sin service er akseptabel men kan ta lengre tid i distriktene.' },
    ],
    verdict: 'Velg Bosch hvis du prioriterer holdbarhet, stille drift og langsiktig pålitelighet. Velg Samsung hvis du vil ha de nyeste funksjonene, appstyring og en mer overkommelig pris. For de fleste norske familier er Bosch det tryggeste valget over tid.',
  },
  {
    slug: 'miele-vs-bosch',
    brand1: 'Miele', brand2: 'Bosch',
    title: 'Miele vs Bosch vaskemaskin: Er Miele verdt den ekstra prisen?',
    metaTitle: 'Miele vs Bosch vaskemaskin | Er premium verdt det?',
    metaDescription: 'Miele vs Bosch vaskemaskin sammenligning. Er Miele sin 20 års holdbarhet verdt den høyere prisen sammenlignet med Bosch?',
    intro: 'Miele og Bosch er begge tyske kvalitetsmerker, men Miele posisjonerer seg som det absolutte premiumvalget. Spørsmålet mange norske forbrukere stiller seg er om Miele sin høyere pris rettferdiggjøres av bedre kvalitet og lengre levetid.',
    categories: [
      { name: 'Byggekvalitet', brand1Score: '10/10', brand2Score: '9/10', winner: 'Miele', explanation: 'Miele tester for 20 års levetid. Bosch er svært god, men Miele bruker enda tykkere materialer og har strengere kvalitetskontroll.' },
      { name: 'Levetid', brand1Score: '10/10', brand2Score: '8/10', winner: 'Miele', explanation: 'Miele varer typisk 15 til 20 år. Bosch varer 10 til 15 år. Over tid kan Miele faktisk bli billigere per år.' },
      { name: 'Vaskemiddeldosering', brand1Score: '9/10', brand2Score: '9/10', winner: 'Likt', explanation: 'Miele sin TwinDos og Bosch sin i-DOS er begge utmerkede automatiske doseringssystemer. TwinDos krever Miele egne produkter, mens i-DOS er mer fleksibel.' },
      { name: 'Pris', brand1Score: '4/10', brand2Score: '7/10', winner: 'Bosch', explanation: 'Miele koster typisk dobbelt så mye som en sammenlignbar Bosch. Inngangsprisen er rundt ti tusen mot fem tusen for Bosch.' },
      { name: 'Funksjoner', brand1Score: '8/10', brand2Score: '8/10', winner: 'Likt', explanation: 'Begge har et godt utvalg av programmer og funksjoner. Miele har CapDosing for spesialbehandling, Bosch har SpeedPerfect for raskere vask.' },
    ],
    verdict: 'Miele er verdt den ekstra prisen hvis du planlegger å bo lenge i samme bolig og verdsetter holdbarhet over alt annet. Regnet per år er Miele faktisk rimelig. Bosch er det smartere valget hvis budsjettet er stramt eller hvis du bytter bolig ofte.',
  },
  {
    slug: 'samsung-vs-lg',
    brand1: 'Samsung', brand2: 'LG',
    title: 'Samsung vs LG vaskemaskin: De sørkoreanske rivalene',
    metaTitle: 'Samsung vs LG vaskemaskin | Sørkoreansk teknologi 2026',
    metaDescription: 'Samsung vs LG vaskemaskin: Vi sammenligner EcoBubble vs AI Direct Drive, smarte funksjoner, pris og kvalitet.',
    intro: 'Samsung og LG er begge sørkoreanske teknologigiganter som konkurrerer hardt i vaskemaskinmarkedet. Begge satser på innovasjon og smarte funksjoner, men med forskjellig tilnærming til vaskeopplevelsen.',
    categories: [
      { name: 'Vasketeknologi', brand1Score: '8/10', brand2Score: '9/10', winner: 'LG', explanation: 'LG sin AI Direct Drive gjenkjenner stofftype automatisk og tilpasser trommelbevegelsen. Samsung sin EcoBubble er effektiv men mindre adaptiv.' },
      { name: 'Hurtigvask', brand1Score: '7/10', brand2Score: '9/10', winner: 'LG', explanation: 'LG sin TurboWash gir full vask på 39 minutter med svært godt resultat. Samsung sin hurtigvask er raskere men med lavere kapasitet.' },
      { name: 'Smart funksjonalitet', brand1Score: '9/10', brand2Score: '8/10', winner: 'Samsung', explanation: 'Samsung sin SmartThings er en mer moden plattform med bredere smart home integrasjon. LG sin ThinQ er god men ikke like allsidig.' },
      { name: 'Design', brand1Score: '8/10', brand2Score: '7/10', winner: 'Samsung', explanation: 'Samsung har generelt et mer moderne og elegant design. AddWash luken gir også et distinkt utseende.' },
      { name: 'Motorgaranti', brand1Score: '7/10', brand2Score: '9/10', winner: 'LG', explanation: 'LG tilbyr opptil 10 års garanti på sin Direct Drive motor. Samsung gir typisk 2 år standard garanti.' },
    ],
    verdict: 'LG er det bedre valget for deg som vil ha den mest avanserte vasketeknologien og lang motorgaranti. Samsung passer bedre for deg som prioriterer smart home integrasjon, AddWash funksjonen og elegant design.',
  },
  {
    slug: 'electrolux-vs-aeg',
    brand1: 'Electrolux', brand2: 'AEG',
    title: 'Electrolux vs AEG vaskemaskin: Søskenrivalene',
    metaTitle: 'Electrolux vs AEG vaskemaskin | Hva er forskjellen?',
    metaDescription: 'Electrolux vs AEG vaskemaskin: Begge eies av samme konsern. Vi forklarer forskjellene og hjelper deg å velge riktig.',
    intro: 'Electrolux og AEG er søstermerker under Electrolux konsernet. Mange lurer på hva som egentlig skiller dem. Kort sagt posisjonerer AEG seg som det mer premiumorienterte merket med tysk ingeniørtradisjon, mens Electrolux fokuserer på skandinavisk brukervennlighet.',
    categories: [
      { name: 'Vasketeknologi', brand1Score: '8/10', brand2Score: '9/10', winner: 'AEG', explanation: 'AEG sin ØKOMix forblander vaskemiddelet bedre enn Electrolux sin standard dosering. ProSteam dampen gir også AEG et forsprang.' },
      { name: 'Brukervennlighet', brand1Score: '9/10', brand2Score: '7/10', winner: 'Electrolux', explanation: 'Electrolux er enklere å betjene med mer intuitive menyer. SensiCare gjør alt automatisk uten at du trenger å tenke.' },
      { name: 'Pris', brand1Score: '8/10', brand2Score: '6/10', winner: 'Electrolux', explanation: 'Electrolux er typisk tusen til to tusen kroner rimeligere enn sammenlignbare AEG modeller.' },
      { name: 'Tekstilpleie', brand1Score: '8/10', brand2Score: '9/10', winner: 'AEG', explanation: 'AEG sin ProSteam og ØKOMix kombinasjon gir merkbart bedre tekstilpleie. Klærne holder seg penere lenger.' },
      { name: 'Service', brand1Score: '9/10', brand2Score: '9/10', winner: 'Likt', explanation: 'Begge bruker Electrolux sitt servicenettverk i Norge, som er godt utbygd.' },
    ],
    verdict: 'Velg AEG hvis du verdsetter tekstilpleie og er villig til å betale litt mer for ØKOMix og ProSteam. Velg Electrolux hvis du vil ha enkel bruk, SensiCare automatikk og en lavere pris for tilsvarende kvalitet.',
  },
  {
    slug: 'miele-vs-asko',
    brand1: 'Miele', brand2: 'ASKO',
    title: 'Miele vs ASKO vaskemaskin: To premium med 20 års levetid',
    metaTitle: 'Miele vs ASKO vaskemaskin | Topp holdbarhet sammenlignet',
    metaDescription: 'Miele vs ASKO: Begge bygger vaskemaskiner for 20 års levetid. Vi sammenligner de to premium alternativene.',
    intro: 'Miele og ASKO er de to eneste merkene som tester sine vaskemaskiner for 20 års levetid. Begge representerer det ypperste innen holdbarhet, men med forskjellig tilnærming til teknologi og brukeropplevelse.',
    categories: [
      { name: 'Holdbarhet', brand1Score: '10/10', brand2Score: '10/10', winner: 'Likt', explanation: 'Begge tester for 20 år og 12 500 timer. Konstruksjonskvaliteten er i toppklasse hos begge.' },
      { name: 'Funksjoner', brand1Score: '9/10', brand2Score: '6/10', winner: 'Miele', explanation: 'Miele har TwinDos, CapDosing, mange spesialprogrammer og smart tilkobling. ASKO fokuserer på enkelhet fremfor funksjoner.' },
      { name: 'Brukervennlighet', brand1Score: '7/10', brand2Score: '9/10', winner: 'ASKO', explanation: 'ASKO er kjent for sin ekstremt enkle betjening. Miele har flere funksjoner men også mer komplekse menyer.' },
      { name: 'Pris', brand1Score: '4/10', brand2Score: '6/10', winner: 'ASKO', explanation: 'ASKO er typisk to til fem tusen kroner rimeligere enn sammenlignbare Miele modeller.' },
      { name: 'Skandinavisk tilpasning', brand1Score: '7/10', brand2Score: '9/10', winner: 'ASKO', explanation: 'ASKO er norsk-svensk og forstår det nordiske markedet bedre. Miele er tysk og har bredere global tilpasning.' },
    ],
    verdict: 'Velg Miele hvis du vil ha den mest avanserte vaskemaskinen med alle tenkelige funksjoner og TwinDos dosering. Velg ASKO hvis du verdsetter skandinavisk enkelhet, litt lavere pris og en maskin som gjør jobben uten dikkedarer.',
  },
  {
    slug: 'bosch-vs-siemens',
    brand1: 'Bosch', brand2: 'Siemens',
    title: 'Bosch vs Siemens vaskemaskin: Hva er egentlig forskjellen?',
    metaTitle: 'Bosch vs Siemens vaskemaskin | Samme konsern, ulik profil',
    metaDescription: 'Bosch vs Siemens vaskemaskin: Begge er BSH. Vi forklarer de reelle forskjellene og hjelper deg å velge riktig.',
    intro: 'Bosch og Siemens deler teknologiplattform gjennom BSH konsernet. Innvendig er maskinene svært like, men det finnes reelle forskjeller i funksjoner, design og posisjonering som kan påvirke ditt valg.',
    categories: [
      { name: 'Teknologi', brand1Score: '9/10', brand2Score: '9/10', winner: 'Likt', explanation: 'Motorene, pumpene og styrekortene er identiske. i-DOS finnes på begge. Den tekniske plattformen er den samme.' },
      { name: 'Smart tilkobling', brand1Score: '7/10', brand2Score: '9/10', winner: 'Siemens', explanation: 'Siemens sin Home Connect app er mer utviklet og tilbyr nedlastbare programmer og bedre feildiagnostikk.' },
      { name: 'Design', brand1Score: '7/10', brand2Score: '8/10', winner: 'Siemens', explanation: 'Siemens har et mer moderne og premium designspråk. Bosch er mer funksjonelt og nøkternt.' },
      { name: 'Pris', brand1Score: '8/10', brand2Score: '6/10', winner: 'Bosch', explanation: 'Bosch er typisk tusen til to tusen kroner rimeligere for sammenlignbare spesifikasjoner.' },
      { name: 'Spesialfunksjoner', brand1Score: '8/10', brand2Score: '9/10', winner: 'Siemens', explanation: 'Siemens har sensoFresh dampfunksjon og flere nedlastbare programmer. Bosch har SpeedPerfect men færre eksklusiviteter.' },
    ],
    verdict: 'Velg Bosch hvis du vil ha BSH kvalitet til lavest mulig pris. Velg Siemens hvis du setter pris på Home Connect, sensoFresh og et mer premium design. Teknisk sett er forskjellen liten, det handler mest om funksjoner og estetikk.',
  },
  {
    slug: 'lg-vs-bosch',
    brand1: 'LG', brand2: 'Bosch',
    title: 'LG vs Bosch vaskemaskin: Teknologi mot tradisjon',
    metaTitle: 'LG vs Bosch vaskemaskin | Innovasjon mot pålitelighet',
    metaDescription: 'LG vs Bosch vaskemaskin: AI Direct Drive mot i-DOS. Sammenligning av teknologi, kvalitet, pris og service.',
    intro: 'LG representerer sørkoreansk innovasjon med AI og Direct Drive motor, mens Bosch står for tysk pålitelighet og stille drift. Begge er solide valg, men for forskjellige typer kjøpere.',
    categories: [
      { name: 'Vasketeknologi', brand1Score: '9/10', brand2Score: '8/10', winner: 'LG', explanation: 'LG sin AI Direct Drive gjenkjenner stofftyper automatisk. Bosch sin i-DOS doserer perfekt, men tilpasser ikke trommelbevegelsen.' },
      { name: 'Byggekvalitet', brand1Score: '7/10', brand2Score: '9/10', winner: 'Bosch', explanation: 'Bosch sin tyske konstruksjon er mer robust og har bedre omdømme for langtidsholdbarhet.' },
      { name: 'Støynivå', brand1Score: '7/10', brand2Score: '9/10', winner: 'Bosch', explanation: 'Bosch EcoSilence er blant markedets stilleste. LG er akseptabel men merkbart høyere.' },
      { name: 'Motorgaranti', brand1Score: '9/10', brand2Score: '7/10', winner: 'LG', explanation: 'LG gir opptil 10 års garanti på Direct Drive motoren. Bosch gir standard 2 år.' },
      { name: 'Pris', brand1Score: '7/10', brand2Score: '7/10', winner: 'Likt', explanation: 'Begge ligger i samme prisleie for sammenlignbare modeller.' },
    ],
    verdict: 'Velg LG for den mest avanserte vasketeknologien og lang motorgaranti. Velg Bosch for stille drift, tysk holdbarhet og det beste servicenettverket.',
  },
  {
    slug: 'samsung-vs-electrolux',
    brand1: 'Samsung', brand2: 'Electrolux',
    title: 'Samsung vs Electrolux vaskemaskin: Asia mot Skandinavia',
    metaTitle: 'Samsung vs Electrolux vaskemaskin | Sammenligning 2026',
    metaDescription: 'Samsung vs Electrolux vaskemaskin: EcoBubble mot SensiCare. Hvem vinner på pris, kvalitet og nordisk tilpasning?',
    intro: 'Samsung er den globale innovatøren med smarte funksjoner, mens Electrolux er det skandinaviske kvalitetsmerket som forstår nordiske behov. Her er de reelle forskjellene.',
    categories: [
      { name: 'Nordisk tilpasning', brand1Score: '6/10', brand2Score: '9/10', winner: 'Electrolux', explanation: 'Electrolux er svensk og forstår det skandinaviske markedet. Samsung er global og ikke like tilpasset nordiske forhold.' },
      { name: 'Smarte funksjoner', brand1Score: '9/10', brand2Score: '7/10', winner: 'Samsung', explanation: 'Samsung har mer avanserte smartfunksjoner med SmartThings, EcoBubble og AddWash.' },
      { name: 'Tekstilpleie', brand1Score: '7/10', brand2Score: '8/10', winner: 'Electrolux', explanation: 'Electrolux sin UltraCare og SensiCare gir skånsommere vask og bedre tilpasning til tøymengde.' },
      { name: 'Service i Norge', brand1Score: '7/10', brand2Score: '9/10', winner: 'Electrolux', explanation: 'Electrolux har et vesentlig bedre servicenettverk i Norge og Norden.' },
      { name: 'Pris', brand1Score: '8/10', brand2Score: '7/10', winner: 'Samsung', explanation: 'Samsung har flere modeller i det lavere prissegmentet.' },
    ],
    verdict: 'Velg Samsung for smarte funksjoner og lavere pris. Velg Electrolux for skandinavisk kvalitet, bedre service og skånsommere tekstilpleie.',
  },
  {
    slug: 'miele-vs-samsung',
    brand1: 'Miele', brand2: 'Samsung',
    title: 'Miele vs Samsung vaskemaskin: Premium mot verdi',
    metaTitle: 'Miele vs Samsung vaskemaskin | Premium verdt prisen?',
    metaDescription: 'Miele vs Samsung vaskemaskin: Er Miele sin 20 års holdbarhet verdt tre ganger prisen sammenlignet med Samsung?',
    intro: 'Miele og Samsung representerer ytterpunktene i vaskemaskinmarkedet. Miele er det dyreste og mest holdbare, Samsung tilbyr mest teknologi for pengene. Hvem vinner for deg?',
    categories: [
      { name: 'Holdbarhet', brand1Score: '10/10', brand2Score: '7/10', winner: 'Miele', explanation: 'Miele tester for 20 år. Samsung varer typisk 10 til 12 år. Over 20 år kjøper du to Samsung maskiner.' },
      { name: 'Funksjoner', brand1Score: '8/10', brand2Score: '9/10', winner: 'Samsung', explanation: 'Samsung har EcoBubble, AddWash, AI Energy Mode og SmartThings. Miele har TwinDos og CapDosing men færre smarte funksjoner.' },
      { name: 'Pris', brand1Score: '3/10', brand2Score: '9/10', winner: 'Samsung', explanation: 'Samsung starter rundt fire tusen, Miele rundt ti tusen. Prisforskjellen er betydelig.' },
      { name: 'Byggekvalitet', brand1Score: '10/10', brand2Score: '7/10', winner: 'Miele', explanation: 'Miele er i en helt egen klasse. Tykkere materialer, bedre pakninger, strengere toleranser.' },
      { name: 'Pris per år', brand1Score: '8/10', brand2Score: '7/10', winner: 'Miele', explanation: 'Miele til 15 000 over 20 år er 750 kr per år. Samsung til 6 000 over 10 år er 600 kr per år. Forskjellen er liten.' },
    ],
    verdict: 'Miele er for deg som kjøper én maskin og beholder den i 20 år. Samsung er for deg som vil ha mye teknologi nå og bytter maskin oftere. Regnet per år er forskjellen overraskende liten.',
  },
  {
    slug: 'whirlpool-vs-beko',
    brand1: 'Whirlpool', brand2: 'Beko',
    title: 'Whirlpool vs Beko vaskemaskin: Budsjettduellen',
    metaTitle: 'Whirlpool vs Beko vaskemaskin | Beste budsjett 2026',
    metaDescription: 'Whirlpool vs Beko vaskemaskin for prisbevisste kjøpere. Hvem gir mest for pengene i budsjettklassen?',
    intro: 'Whirlpool og Beko konkurrerer i det samme prissegmentet men med forskjellig tilnærming. Her er hva som skiller dem.',
    categories: [
      { name: 'Funksjoner', brand1Score: '8/10', brand2Score: '6/10', winner: 'Whirlpool', explanation: 'Whirlpool har 6th Sense og FreshCare+ som er merkbart bedre enn Beko sine grunnfunksjoner.' },
      { name: 'Pris', brand1Score: '7/10', brand2Score: '9/10', winner: 'Beko', explanation: 'Beko er typisk noen hundrelapper billigere enn sammenlignbare Whirlpool modeller.' },
      { name: 'Byggekvalitet', brand1Score: '7/10', brand2Score: '6/10', winner: 'Whirlpool', explanation: 'Whirlpool har en liten fordel i byggekvalitet, spesielt på trommelkonstruksjonen.' },
      { name: 'Tilgjengelighet', brand1Score: '8/10', brand2Score: '8/10', winner: 'Likt', explanation: 'Begge er bredt tilgjengelige i norske elektronikkjeder.' },
    ],
    verdict: 'Whirlpool er det bedre valget med bedre funksjoner og litt høyere kvalitet for en marginal merpris. Beko er greit om budsjettet er absolutt minimum.',
  },

]

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug)
}
export function getAllComparisonSlugs(): string[] {
  return comparisons.map(c => c.slug)
}
