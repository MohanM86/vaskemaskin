export interface ManualSection {
  heading: string
  content: string
}

export interface BrandManual {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: ManualSection[]
  tips: string[]
}

export const manuals: BrandManual[] = [
  {
    slug: 'samsung',
    name: 'Samsung',
    metaTitle: 'Samsung vaskemaskin bruksanvisning | Programmer og symboler',
    metaDescription: 'Komplett bruksanvisning for Samsung vaskemaskiner. Alle programmer forklart, symboler på displayet, dosering og vedlikeholdstips.',
    intro: 'Samsung vaskemaskiner har et bredt utvalg av programmer og smarte funksjoner. Denne guiden forklarer de viktigste programmene, hva symbolene på displayet betyr, og hvordan du får mest mulig ut av maskinen din.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) er standardprogrammet for vanlig hverdagstøy og sengetøy. Det vasker grundig ved valgt temperatur og passer for de fleste plagg. Synthetics (syntetisk) bruker lavere sentrifugehastighet og er beregnet for polyester, nylon og blandingsstoffer. Eco 40-60 er det mest energieffektive programmet og passer for normalt skittent bomullstøy. Det bruker lengre tid men vesentlig mindre strøm. Quick Wash (hurtigvask) gir deg rent tøy på 15 til 30 minutter for lett tilsmussede plagg. Drum Clean (trommelrengjøring) bør kjøres en gang i måneden uten tøy for å holde maskinen ren.' },
      { heading: 'Symboler på displayet', content: 'Vannkran med kryss betyr problem med vanntilførsel. Nøkkelsymbol betyr at barnesikringen er aktivert, hold ned tilhørende knapp i tre sekunder for å deaktivere. Trommel med prikker betyr at EcoBubble er aktiv. Klokke med tall viser gjenværende tid. Utropstegn i trekant er en generell advarsel og bør sjekkes mot feilkoden på displayet.' },
      { heading: 'Dosering av vaskemiddel', content: 'Samsung sine maskiner med automatisk dosering (Auto Dispense) har en beholder som rommer vaskemiddel til rundt 20 vask. Fyll på flytende vaskemiddel i hovedbeholderen og skyllemiddel i den separate beholderen. For maskiner uten automatisk dosering, bruk vaskemiddelskuffen med tre rom: rommet merket II er for hovedvask, rommet merket I er for forvask, og blomstmerket rom er for skyllemiddel. Bruk alltid lavtskummende vaskemiddel beregnet for maskin.' },
      { heading: 'Spesialfunksjoner', content: 'EcoBubble blander vaskemiddel med luft og vann til fine bobler som trenger dypere inn i stoffet. Dette gir bedre rengjøring ved lavere temperaturer. AddWash lar deg åpne den lille luken på fronten for å legge til glemte plagg etter programstart, forutsatt at temperaturen er under 50 grader. Steam (damp) bruker varm damp for å fjerne bakterier og allergener. Smart Control via SmartThings appen lar deg starte og overvåke vask fra mobilen.' },
    ],
    tips: ['Bruk alltid Drum Clean programmet en gang i måneden', 'La luken stå på gløtt etter hver vask', 'Rengjør gummipakningen etter hver vask', 'Tøm pumpefilteret hver tredje måned'],
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    metaTitle: 'Bosch vaskemaskin bruksanvisning | Programmer og symboler',
    metaDescription: 'Komplett bruksanvisning for Bosch vaskemaskiner. Alle programmer forklart, i-DOS dosering, symboler og vedlikeholdstips.',
    intro: 'Bosch vaskemaskiner er kjent for sin tyske kvalitet og brukervennlighet. Denne guiden tar deg gjennom alle programmer, forklarer symbolene og gir deg tips for optimal bruk av din Bosch vaskemaskin.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cottons (bomull) er hovedprogrammet for hverdagstøy ved 30 til 90 grader. Easy Care (syntetisk) er for blandingsstoffer og syntetiske tekstiler. Delicates (finvask) bruker skånsom trommelbevegelse for ull, silke og ømfintlige plagg. Eco 40-60 er energispareprogrammet med lengre vasketid men lavere forbruk. Speed Perfect halverer vasketiden med økt energibruk. Super Quick 15 gir deg ferdig vask på et kvarter for lett tilsmussede plagg.' },
      { heading: 'i-DOS automatisk dosering', content: 'Bosch sin i-DOS teknologi doserer automatisk riktig mengde vaskemiddel og skyllemiddel basert på tøymengde, tilsmussing og vannhardhet. Fyll den venstre beholderen med flytende vaskemiddel og den høyre med skyllemiddel. En fylling varer typisk 15 til 20 vask. Systemet kalibrerer seg selv og justerer mengden per program. Du kan også justere doseringsnivået manuelt i tre trinn om du foretrekker mer eller mindre vaskemiddel.' },
      { heading: 'Symboler på displayet', content: 'i-DOS symbol lyser når automatisk dosering er aktiv. Vanndråpe med kryss betyr problem med vanntilførsel. Nøkkel betyr barnesikring, deaktiver ved å holde start/pause i tre sekunder. Trommelikon med lys betyr at Drum Clean er nødvendig. Klokke viser gjenværende tid.' },
      { heading: 'Vedlikehold', content: 'Kjør Drum Clean programmet en gang i måneden med en tablett maskinrens eller eddik. Rengjør vaskemiddelskuffen månedlig ved å trekke den helt ut og vaske den under rennende vann. Pumpefilteret bak servicelluken nederst til høyre bør sjekkes og rengjøres hver andre til tredje måned. Kontroller at inntaksslangen er tett og uten knekk.' },
    ],
    tips: ['Bruk Speed Perfect for raske vask uten å ofre kvalitet', 'i-DOS fungerer best med Bosch anbefalt flytende vaskemiddel', 'Juster vannhardhet i innstillingene for optimal dosering', 'Aktiver ekstra skylling for sensitiv hud'],
  },
  {
    slug: 'lg',
    name: 'LG',
    metaTitle: 'LG vaskemaskin bruksanvisning | Programmer og AI funksjoner',
    metaDescription: 'Komplett bruksanvisning for LG vaskemaskiner. AI Direct Drive, TurboWash, alle programmer og symboler forklart.',
    intro: 'LG vaskemaskiner bruker avansert AI teknologi for å tilpasse vasken automatisk. Denne guiden forklarer programmene, de smarte funksjonene og hvordan du bruker maskinen optimalt.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) er standardprogrammet for hverdagstøy. Mixed Fabric (blandingsstoff) passer for vask med ulike materialtyper. Allergy Care bruker høy temperatur og ekstra skylling for å fjerne allergener. TurboWash gir deg full vask på 39 minutter med kombinasjon av høytrykkssprut og rask trommelbevegelse. Steam rengjør med damp for ekstra hygiene. Eco programmet sparer strøm med lengre vasketid.' },
      { heading: 'AI Direct Drive', content: 'LG sin AI Direct Drive motor gjenkjenner automatisk stofftype og vekt, og justerer trommelbevegelsene deretter. Motoren kan utføre seks ulike bevegelsesmønstre: tumbling, stepping, scrubbing, filtration, swing og rolling. AI velger den optimale kombinasjonen for hver last. Du trenger ikke velge program basert på stofftype fordi maskinen tilpasser seg selv.' },
      { heading: 'TurboWash', content: 'TurboWash kombinerer høytrykk vannsprut med rask trommelbevegelse for å gi en full vask på 39 minutter. Teknologien sprøyter vann med høyt trykk direkte inn i tøyet for raskere og dypere gjennomvæting. Resultatet er sammenlignbart med en vanlig bomullsvask, men betydelig raskere. TurboWash passer best for normalt skittent hverdagstøy.' },
      { heading: 'Symboler og vedlikehold', content: 'Wi-Fi symbol blinker under tilkobling til SmartThinQ appen. Barnesikring aktiveres og deaktiveres med en knappekombinajon i tre sekunder. Tub Clean (trommelrengjøring) bør kjøres månedlig. LG anbefaler å bruke spesielle trommelrenstabletter. Rengjør pumpefilteret og vaskemiddelskuffen regelmessig. La luken og skuffen stå åpen etter bruk.' },
    ],
    tips: ['La AI Direct Drive gjøre jobben, unngå å overstyre programvalget', 'TurboWash er perfekt for hverdagsklær som ikke er sterkt tilsmusset', 'Bruk Allergy Care for sengetøy og barneklær', 'Last ned SmartThinQ appen for feildiagnose og fjernkontroll'],
  },
  {
    slug: 'electrolux',
    name: 'Electrolux',
    metaTitle: 'Electrolux vaskemaskin bruksanvisning | SensiCare og AutoDose',
    metaDescription: 'Komplett bruksanvisning for Electrolux vaskemaskiner. SensiCare, AutoDose, UltraCare og alle programmer forklart.',
    intro: 'Electrolux er det skandinaviske kvalitetsmerket innen hvitevarer. Denne guiden tar deg gjennom alle programmene og de spesielle teknologiene som gjør Electrolux vaskemaskiner populære i nordiske hjem.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) for hverdagstøy ved 30 til 90 grader. Synthetic (syntetisk) for polyester og blandingsstoffer. Delicate (finvask) for ømfintlige tekstiler. Wool/Handwash (ull/håndvask) med ekstra skånsom trommelbevegelse. Outdoor (friluft) for Gore-Tex og tekniske tekstiler. Eco 40-60 for energieffektiv hverdagsvask. Quick 20 for en rask oppfriskning av lett skitne klær.' },
      { heading: 'SensiCare og UltraCare', content: 'SensiCare bruker sensorer for å veie tøyet og tilpasse vasketid, vannmengde og energibruk automatisk. Mindre lass får kortere vasketid uten at du trenger å endre program. UltraCare forblander vaskemiddelet fullstendig med vann før det treffer tøyet. Dette gir jevnere fordeling og bedre flekkfjerning, spesielt ved lave temperaturer.' },
      { heading: 'AutoDose dosering', content: 'AutoDose måler riktig mengde vaskemiddel per vask basert på tøymengde og programvalg. Fyll opp de to beholderne med flytende vaskemiddel og skyllemiddel. En fylling varer typisk 20 vask. Systemet har en indikator som viser når beholderne trenger påfyll. Du kan også justere doseringsnivået i tre trinn.' },
      { heading: 'Vedlikehold', content: 'Kjør et tomt bomullsprogram på 90 grader med maskinrens eller eddik en gang i måneden. Rengjør vaskemiddelskuffen og pakningen rundt luken etter bruk. Pumpefilteret bør sjekkes og rengjøres regelmessig. La luken stå åpen for å forebygge mugg og lukt.' },
    ],
    tips: ['UltraCare gir merkbart bedre resultat ved 30 og 40 grader', 'Outdoor programmet er perfekt for skalljakker og softshell', 'Bruk SensiCare sin automatikk, den tilpasser alt selv', 'AutoDose sparer vaskemiddel over tid'],
  },
  {
    slug: 'miele',
    name: 'Miele',
    metaTitle: 'Miele vaskemaskin bruksanvisning | TwinDos og CapDosing',
    metaDescription: 'Komplett bruksanvisning for Miele vaskemaskiner. TwinDos automatisk dosering, CapDosing, alle programmer og vedlikeholdstips.',
    intro: 'Miele representerer det ypperste innen vaskemaskinteknologi. Denne guiden forklarer det du trenger å vite for å få mest mulig ut av din Miele vaskemaskin, fra TwinDos dosering til spesialprogrammer.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cottons (bomull) er hovedprogrammet med temperaturvalg fra 20 til 95 grader. Minimum Iron (lettstryking) reduserer krøller med skånsom sentrifugering. Delicates (finvask) for silke og ømfintlige materialer. Woollens (ull) har sertifisert Woolmark program for trygg ullvask. Express 20 for en rask vask av lett tilsmussede plagg. Proofing (impregnering) for å fornye vannavstøtende egenskaper på friluftsklær.' },
      { heading: 'TwinDos dosering', content: 'TwinDos doserer automatisk riktig mengde av Miele sitt UltraPhase 1 (vaskemiddel) og UltraPhase 2 (flekkfjerner). De to komponentene tilsettes i riktig fase av vaskeprogrammet for optimalt resultat. UltraPhase 1 tilsettes ved hovedvask for generell rengjøring. UltraPhase 2 tilsettes mot slutten av vasken for målrettet flekkfjerning. Systemet bruker Miele sine egne vaskemiddelprodukter som er spesialdesignet for å fungere med TwinDos.' },
      { heading: 'CapDosing', content: 'CapDosing er en tilleggsfunksjon der du legger en spesialkapsel i vaskemiddelskuffen for ekstra behandling. Tilgjengelige kapsler inkluderer impregneringsmiddel for friluftsklær, sportsvask for tekniske tekstiler, stivelse for bordduker og skjorter, og dufttilsetning for ekstra friskhet. Hver kapsel inneholder nøyaktig riktig mengde for én vask.' },
      { heading: 'Vedlikehold', content: 'Miele vaskemaskiner er bygget for å vare i 20 år, men riktig vedlikehold er fortsatt viktig. Kjør et tomt bomullsprogram på 95 grader med Miele maskinrens hver måned. Rengjør vaskemiddelskuffen og tørk av pakningen etter bruk. Miele sine maskiner har generelt mindre problemer med lukt og mugg enn andre merker takket være høy byggekvalitet og gode pakninger.' },
    ],
    tips: ['TwinDos fungerer kun med Miele UltraPhase produkter', 'Bruk Proofing programmet etter vask av Gore-Tex og lignende', 'Woolmark sertifiseringen betyr at ullprogrammet er trygt for all ull', 'Miele tilbyr service over hele Norge med egne teknikere'],
  },
  {
    slug: 'siemens',
    name: 'Siemens',
    metaTitle: 'Siemens vaskemaskin bruksanvisning | Home Connect og programmer',
    metaDescription: 'Komplett bruksanvisning for Siemens vaskemaskiner. Home Connect app, sensoFresh, alle programmer og symboler forklart.',
    intro: 'Siemens vaskemaskiner kombinerer tysk ingeniørkvalitet med moderne smart teknologi. Denne guiden forklarer programmene, Home Connect funksjonen og de spesielle teknologiene som skiller Siemens fra andre merker.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cottons (bomull) er standardprogrammet for 30 til 90 grader. Easy Care (lettstell) for syntetiske stoffer. Delicates/Silk (finvask/silke) med skånsom behandling. Super Quick 15 for en ekspressvask. Eco 40-60 for energieffektiv vask. Shirts (skjorter) med optimert krøllreduksjon for dressskjorter.' },
      { heading: 'Home Connect', content: 'Home Connect appen lar deg styre vaskemaskinen fra mobilen. Du kan starte og stoppe programmer, overvåke fremdriften, få varsler når vasken er ferdig, og laste ned nye vaskeprogrammer. Appen gir også tilgang til feildiagnostikk og vedlikeholdspåminnelser. Koble maskinen til hjemmets Wi-Fi nettverk via innstillingsmenyen på maskinen.' },
      { heading: 'sensoFresh', content: 'sensoFresh er Siemens sin dampfunksjon som friske opp klær uten full vask. Programmet bruker aktiv oksygen for å nøytralisere lukt og bakterier. Det er perfekt for plagg som har vært brukt én gang og bare trenger en oppfriskning, som dresser, jakker og jeans. Behandlingen tar omtrent 45 minutter og bruker minimalt med vann og strøm.' },
      { heading: 'Vedlikehold', content: 'Siemens deler teknologi med Bosch, så vedlikeholdsrutinene er like. Kjør Drum Clean månedlig. Rengjør filteret bak servicelluken regelmessig. Tørk av lukepakningen etter hver vask og la luken stå åpen. Sjekk og rengjør vaskemiddelskuffen månedlig.' },
    ],
    tips: ['Home Connect appen gir deg smarte vedlikeholdspåminnelser', 'sensoFresh er perfekt for dresser mellom renseri besøk', 'Siemens og Bosch bruker samme reservedeler, noe som gjør service enklere', 'Last ned nye programmer via Home Connect for spesielle stofftyper'],
  },
  {
    slug: 'aeg',
    name: 'AEG',
    metaTitle: 'AEG vaskemaskin bruksanvisning | ProSteam og ØKOMix',
    metaDescription: 'Komplett bruksanvisning for AEG vaskemaskiner. ProSteam dampteknologi, ØKOMix forblanding, alle programmer og tips.',
    intro: 'AEG kombinerer tysk ingeniørtradisjon med skandinavisk designtenkning. Denne guiden forklarer programmene og de spesielle teknologiene som gjør AEG til et populært valg for norske hjem.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) for hverdagstøy. Synthetics (syntetisk) for blandingsstoffer. Delicate (finvask) for ømfintlige tekstiler. Wool (ull) med Woolmark sertifisering. Outdoor (friluft) for tekniske tekstiler. Eco 40-60 for energieffektiv vask. 20 Min 3 kg for en rask oppfriskning av små mengder.' },
      { heading: 'ProSteam dampteknologi', content: 'ProSteam sprøyter fin damp inn i trommelen for å myke opp fibrene i stoffet. Dette reduserer krøller med opptil en tredjedel og behandler tøyet skånsommere. ProSteam kan legges til de fleste programmene eller brukes som et frittstående oppfriskningsprogram. Det er spesielt nyttig for klær som bare trenger en oppfriskning mellom vask.' },
      { heading: 'ØKOMix teknologi', content: 'ØKOMix løser opp vaskemiddelet fullstendig i vann før det treffer tøyet. Sammenlignet med tradisjonell dosering gir dette merkbart bedre flekkfjerning selv ved 30 grader. Teknologien sikrer at vaskemiddelet fordeles jevnt og ikke legger seg i klumper på tøyet. Resultatet er renere klær med mindre vaskemiddel.' },
      { heading: 'Vedlikehold', content: 'AEG bruker Electrolux sitt servicenettverk i Norge. Kjør et rengjøringsprogram månedlig. Rengjør filter, skuff og pakning regelmessig. La luken stå åpen etter bruk for å forebygge lukt.' },
    ],
    tips: ['ProSteam er perfekt for å redusere stryking', 'ØKOMix gir best effekt ved lave temperaturer', 'AEG service håndteres av Electrolux servicenettverk', 'Outdoor programmet bevarer membraner i Gore-Tex klær'],
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    metaTitle: 'Whirlpool vaskemaskin bruksanvisning | 6th Sense og FreshCare+',
    metaDescription: 'Komplett bruksanvisning for Whirlpool vaskemaskiner. 6th Sense teknologi, FreshCare+, alle programmer og vedlikeholdstips.',
    intro: 'Whirlpool tilbyr solid vaskemaskinteknologi med gode funksjoner til en konkurransedyktig pris. Denne guiden forklarer de viktigste programmene og teknologiene.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) for hverdagstøy ved 30 til 90 grader. Colours (farget) med lavere temperatur for å beskytte farger. Synthetics (syntetisk) for polyester og blandingsstoffer. Rapid 30 for en rask vask av lett skittent tøy. Eco programmet for energieffektiv vask.' },
      { heading: '6th Sense teknologi', content: '6th Sense bruker sensorer for å automatisk tilpasse vannmengde, vasketid og energibruk basert på tøymengde og tilsmussingsgrad. Systemet veier tøyet ved starten og justerer alle parametere for optimal ytelse. Med mindre lass sparer du både vann, strøm og tid uten å gjøre noe selv.' },
      { heading: 'FreshCare+', content: 'FreshCare+ holder klærne friske i opptil seks timer etter at vaskeprogrammet er ferdig. Maskinen beveger trommelen forsiktig med jevne mellomrom for å hindre at tøyet legger seg sammen og utvikler vond lukt. Dette er praktisk når du ikke kan ta ut tøyet med en gang.' },
      { heading: 'Vedlikehold', content: 'Kjør en rengjøringsvask på 90 grader månedlig. Rengjør pumpefilteret hver tredje måned. Tørk av pakningen og la luken stå åpen. Rengjør vaskemiddelskuffen regelmessig.' },
    ],
    tips: ['6th Sense tilpasser alt automatisk, du trenger bare å velge program', 'FreshCare+ er perfekt hvis du setter på vask før du drar på jobb', 'Whirlpool sin Rapid 30 er en av de bedre hurtigprogrammene', 'Bruk alltid lavtskummende vaskemiddel'],
  },
  {
    slug: 'asko',
    name: 'ASKO',
    metaTitle: 'ASKO vaskemaskin bruksanvisning | Norsk kvalitet i 20 år',
    metaDescription: 'Komplett bruksanvisning for ASKO vaskemaskiner. Programmer, symboler, dosering og vedlikeholdstips for skandinavisk kvalitet.',
    intro: 'ASKO er det norsk-svenske kvalitetsmerket som bygger vaskemaskiner for 20 års levetid. Denne guiden tar deg gjennom alt du trenger å vite for å bruke din ASKO vaskemaskin optimalt.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Normal er standardprogrammet for hverdagstøy. Syntet for blandingsstoffer og polyester. Finkles for ømfintlige tekstiler. Ull med skånsom trommelbevegelse. Hurtig for rask vask av lett skitne klær. Allergi med høy temperatur og ekstra skylling for allergikere.' },
      { heading: 'Betjening og symboler', content: 'ASKO er kjent for enkel og intuitiv betjening. Dreievelgeren velger program, og displayet viser temperatur, sentrifugehastighet og gjenværende tid. Barnesikring aktiveres ved å holde to knapper inne samtidig i tre sekunder. ASKO sine maskiner har færre kompliserte menyer enn mange konkurrenter, noe som gjør dem svært brukervennlige.' },
      { heading: 'Dosering', content: 'ASKO anbefaler å bruke vaskemiddelskuffen med tre rom: hovedvask, forvask og skyllemiddel. Følg doseringsinstruksjonene på vaskemiddelemballasjen og tilpass etter vannhardhet i din kommune. ASKO sine maskiner er designet for å fungere optimalt med normal dosering av standard vaskemiddel.' },
      { heading: 'Vedlikehold', content: 'ASKO maskiner er bygget for å vare, men vedlikehold er fortsatt viktig. Kjør en rengjøringsvask på 90 grader månedlig. ASKO sine trommeler er produsert i rustfritt stål av svært høy kvalitet, men kalk kan likevel bygge seg opp. Rengjør filteret og pakningen regelmessig.' },
    ],
    tips: ['ASKO sine maskiner er bygget for 20 års holdbarhet', 'Enkel betjening gjør ASKO populær blant eldre brukere', 'ASKO har egen service i Skandinavia', 'Trommelen er spesielt skånsom mot tøy'],
  },
  {
    slug: 'grundig',
    name: 'Grundig',
    metaTitle: 'Grundig vaskemaskin bruksanvisning | Programmer og funksjoner',
    metaDescription: 'Komplett bruksanvisning for Grundig vaskemaskiner. Alle programmer, symboler og vedlikeholdstips for god vaskeopplevelse.',
    intro: 'Grundig tilbyr gode vaskemaskiner til en fornuftig pris. Denne guiden forklarer programmene og funksjonene du finner på de mest populære Grundig modellene i Norge.',
    sections: [
      { heading: 'De viktigste vaskeprogrammene', content: 'Cotton (bomull) for hverdagstøy. Synthetics (syntetisk) for blandingsstoffer. Delicates (finvask) for ømfintlige tekstiler. Wool (ull) for ullplagg. Quick Wash for rask oppfriskning. Eco for energieffektiv vask med lengre vasketid.' },
      { heading: 'Dampfunksjon', content: 'Flere Grundig modeller har en enkel dampfunksjon som tilføyer damp mot slutten av vaskeprogrammet. Dette hjelper med å redusere krøller og kan friske opp lett brukte plagg. Dampfunksjonen på Grundig er enklere enn på premium merker, men gir likevel merkbar effekt.' },
      { heading: 'Dosering og bruk', content: 'Bruk vaskemiddelskuffen med standard tre roms inndeling. Grundig anbefaler lavtskummende vaskemiddel. Dosér etter vaskemiddelets instruksjoner og tilpass etter vannhardhet. Ikke overdosér, da dette kan gi dårligere vaskeresultat og skumdannelse.' },
      { heading: 'Vedlikehold', content: 'Kjør en rengjøringsvask på 90 grader månedlig. Rengjør pumpefilteret regelmessig. Tørk av lukepakningen og la luken stå åpen. Rengjør vaskemiddelskuffen med varmt vann.' },
    ],
    tips: ['Grundig gir mye for pengene i budsjettklassen', 'Dampfunksjonen er enklere men effektiv', 'Grundig produseres av Arcelik som også lager Beko', 'Service håndteres gjennom forhandleren din'],
  },
]

export function getManualBySlug(slug: string): BrandManual | undefined {
  return manuals.find(m => m.slug === slug)
}

export function getAllManualSlugs(): string[] {
  return manuals.map(m => m.slug)
}
