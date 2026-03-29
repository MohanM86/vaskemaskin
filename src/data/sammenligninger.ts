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
]

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug)
}
export function getAllComparisonSlugs(): string[] {
  return comparisons.map(c => c.slug)
}
