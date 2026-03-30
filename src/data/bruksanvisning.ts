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
      { heading: 'De viktigste vaskeprogrammene', content: 'Samsung vaskemaskiner har et intuitivt betjeningspanel med digitalt display som viser programtype, temperatur, sentrifugehastighet og estimert tid. De vanligste programmene er Bomull 60 og 40 for hverdagsklær, Syntetisk for blandingsstoffer, Finvask for ømfintlige plagg, Ullprogram med minimal trommelbevegelse, Eco 40-60 som er det mest strømeffektive, og Hurtigvask 15 som tar bare femten minutter for lett tilsmussede plagg. Samsung sin EcoBubble teknologi aktiveres automatisk på de fleste programmer og blander vaskemiddel med luft og vann for bedre rengjøring ved lave temperaturer. AddWash luken på kompatible modeller åpnes ved å trykke på pause og vente til luken låses opp. Du kan da legge inn glemte plagg uten å starte programmet på nytt. Dosering av vaskemiddel: bruk flytende vaskemiddel i rommet merket II for hovedvask. For modeller med automatisk dosering fyller du beholderen og maskinen doserer selv. Skyllemiddel fylles i det smale rommet med blomstermerke. Rengjøring anbefales månedlig med Trommelrengjøring programmet som kjører på nitti grader uten tøy. Rengjør pumpefilteret bak serviceluken hver tredje måned. Tørk av lukepakningen etter hver vask og la luken stå på gløtt for å forhindre lukt og mugg.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'Bosch vaskemaskiner i Serie 4, 6 og 8 har et dreievelgerhjul for programvalg og digitalt display med tilleggsinnstillinger. Standardprogrammer inkluderer Bomull 60 og 40, Lettstryking for syntetisk, Finvask, Ull med håndvaskbevegelse, Eco 40-60 som standardprogram, Hurtig 15 minutter, og Miks for blandede stoffer. Bosch sitt SpeedPerfect alternativ reduserer vasketiden med opptil 65 prosent uten å gå på bekostning av vaskeresultatet. EcoPerfect prioriterer energibesparelse med lengre vasketid. Modeller med i-DOS automatisk dosering har to beholdere inne i maskinen for flytende vaskemiddel og skyllemiddel. Fyll beholderne og maskinen doserer riktig mengde basert på tøymengde og tilsmussing. Uten i-DOS bruker du rom II for vaskemiddel og blomsterrommet for skyllemiddel. Bosch anbefaler sitt eget Drum Clean program for månedlig rengjøring. Kjør på nitti grader uten tøy og vaskemiddel. Rengjør pumpefilteret bak serviceluken nederst til høyre regelmessig. Aquastop systemet gir livstidsgaranti mot vannskade. Bosch Home Connect appen lar deg starte og overvåke vask fra mobilen på WiFi tilkoblede modeller.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'LG vaskemaskiner bruker et moderne touchpanel med stort digitalt display. Programmene inkluderer Bomull, Bomull Eco, Syntetisk, Finvask, Ull og Silke, Hurtigvask 14 minutter, Allergiker med ekstra skylling, og Sportsvask for treningsklær. LG sin TurboWash teknologi bruker kraftige vannstråler fra flere vinkler for å redusere vasketiden til under en time med fullt vaskeresultat. AI Direct Drive teknologien på nyere modeller gjenkjenner stofftype og tilpasser trommelbevegelse automatisk mellom seks forskjellige bevegelsesmønstre. Steam funksjonen aktiveres med en egen knapp og tilsetter damp for å fjerne allergener og bakterier. ThinQ appen kobles via WiFi og lar deg laste ned nye programmer, få vedlikeholdspåminnelser og feilsøke problemer. Smart Diagnosis funksjonen lar servicesenteret diagnostisere feil over telefon ved å holde mobilen mot maskinen. Dosering: bruk rom II for hovedvask. LG anbefaler flytende vaskemiddel for best resultat med TurboWash. Rengjør pumpefilteret via serviceluken nederst til venstre. Kjør Trommelrengjøring programmet månedlig.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'Electrolux vaskemaskiner har et rent skandinavisk designspråk med dreievelger og digitalt display. Standardprogrammer er Bomull 60 og 40, Syntetisk, Finvask, Ull med SoftPlus for jevn skyllemiddelfordeling, Eco 40-60, Hurtig 14 minutter, og Jeans. SensiCare teknologien veier tøyet automatisk og tilpasser vasketid og vannforbruk. UltraCare forblander vaskemiddelet med vann i et eget kammer for jevnere fordeling og bedre flekkfjerning. Modeller med AutoDose har innebygde beholdere for flytende vaskemiddel og skyllemiddel som doserer automatisk basert på sensoravlesninger. Uten AutoDose: rom II for vaskemiddel, blomsterrom for skyllemiddel. Electrolux MyElectrolux appen kobles via WiFi for fjernstart og vedlikeholdstips. Rengjør pumpefilteret bak serviceluken regelmessig. Kjør månedlig rengjøringsprogram på nitti grader uten tøy. Tørk av lukepakningen etter hver vask. Electrolux anbefaler avkalking med sitronsyre annenhver måned i områder med hardt vann.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'Miele vaskemaskiner representerer den øverste kvalitetsklassen med W1 serien og er designet for tjue års levetid. Betjeningen bruker et dreievelgerhjul med tydelige programikoner og et stort TFT display på premium modeller. Standardprogrammer inkluderer Bomull 60 og 40, Minimum Stryking for syntetisk, Finvask, Ull med Miele sin pulserende bevegelse, Express 20 for hurtig oppfriskning, Mørke Klær med redusert mekanisk bearbeiding, og Eco programmet. TwinDos automatisk dosering bruker to separate komponenter: UltraPhase 1 for generell rengjøring og UltraPhase 2 med blekemiddel for flekkfjerning. CapDosing kapsler legges i skuffen for spesialbehandlinger som impregnering og sportsvask. PowerWash 59 minutter gir full vask med toppresultat på under en time. SingleWash tilpasser for enkelplagg. Miele sin WiFiConn@ct lar deg styre maskinen via Miele appen. Vedlikehold: kjør månedlig rengjøring på nitti grader. Miele anbefaler sitt eget maskinrens. Rengjør pumpefilteret i sokkelen. Miele service er tilgjengelig med egne ansatte teknikere i hele Norge.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'Siemens vaskemaskiner deler teknisk plattform med Bosch under BSH konsernet men har sitt eget designspråk med fokus på smart teknologi. IQ300, IQ500 og IQ700 seriene tilbyr stigende funksjonsnivå. Programmene inkluderer Bomull 60 og 40, Pflegeleicht for syntetisk, Feinwasche, Wolle med håndvaskbevegelse, Eco 40-60, Super 15 hurtigvask, og OutDoor for tekniske tekstiler. iDos automatisk dosering fungerer identisk med Bosch i-DOS med to beholdere for vaskemiddel og skyllemiddel. SpeedPack tillegget reduserer vasketiden markant. Home Connect appen gir full kontroll via WiFi med mulighet for fjernstart, programovervåking og smart Home integrasjon. Siemens tilbyr også intelligentDosing som lærer av dine vaskevaner over tid. Vedlikehold følger samme prosedyre som Bosch: månedlig Trommelrengjøring på nitti grader, regelmessig rengjøring av pumpefilter, og tørking av lukepakning. BSH Service dekker begge merker.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'AEG vaskemaskiner posisjonerer seg mellom Electrolux og Miele i kvalitet og pris med serier fra 6000 til 9000. ProSteam dampteknologi er AEG sin signatur og sprøyter fin damp gjennom hele vaskesyklusen for skånsommere behandling og bedre flekkfjerning. ØKOMix forblander vaskemiddel med vann for jevn fordeling. Programmene inkluderer Bomull, Syntetisk, Finvask, Ull med SoftPlus, Eco 40-60, NonStop 60 minutters fullprogram, Damp Oppfriskning på tjue minutter for å friske opp klær uten vask, og Allergiker Plus med ekstra skylling. AutoDose automatisk dosering er tilgjengelig på 7000 og 8000 seriene. ProSense veiesensor tilpasser tid og vann etter tøymengde. My AEG appen kobles via WiFi. Rengjør pumpefilteret regelmessig via serviceluken. Kjør månedlig rengjøring på nitti grader. AEG bruker Electrolux servicenettverk i Norge.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'Whirlpool vaskemaskiner er kjent for solid ytelse til en fornuftig pris med FreshCare+ som holder klærne friske etter endt program ved å rotere trommelen forsiktig i opptil seks timer. Programmene inkluderer Bomull 60 og 40, Syntetisk, Finvask, Ull, Eco 40-60, Hurtig 30, og Colours 15 for en rask farge oppfriskning. SenseInverter motoren er stille og energieffektiv. SoftMove teknologien tilpasser trommelbevegelsen for forskjellige stofftyper. Dosering: bruk rom II for hovedvask og blomsterrommet for skyllemiddel. Whirlpool 6th Sense teknologi bruker sensorer for å optimalisere vannforbruk og tid. Rengjør pumpefilteret via luken nederst på fronten. Kjør månedlig rengjøring. Tørk lukepakningen etter bruk. Whirlpool service er tilgjengelig via autoriserte serviceverksteder i Norge.' },
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
      { heading: 'De viktigste vaskeprogrammene', content: 'ASKO er Norges eget premium vaskemaskimerke med røtter fra Drammen og produksjon i Slovakia. Maskinene er designet for skandinaviske forhold med fokus på holdbarhet og miljø. Pro Home serien tilbyr programmer som Bomull 60 og 40, Syntetisk, Finvask, Ull med forsiktig bevegelse, Eco 40-60, Hurtigvask, og Steel Seal som gjør maskinen til den eneste på markedet uten lukepakning av gummi noe som eliminerer bakterievekst helt. Active Drum trommelen har en unik bølgeformet overflate som er skånsommere mot tekstiler. Dosering: bruk rom II for vaskemiddel. ASKO anbefaler flytende vaskemiddel for optimal oppløsning. Rengjør pumpefilteret via serviceluken. ASKO sine maskiner har ekstra kraftige støtdempere og lagre for minimal vibrasjon. Vedlikehold: månedlig nitti graders rengjøring, jevnlig filterrengjøring. ASKO service via autoriserte verksteder med norsk kundesupport.' },
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
      { heading: 'De viktigste programmene', content: 'Grundig vaskemaskiner er en del av Arcelik konsernet sammen med Beko og tilbyr god kvalitet i mellomprissegmentet. Programmene inkluderer Bomull 60 og 40, Syntetisk, Finvask, Ull, Eco 40-60, Hurtigvask 14 minutter, Babyvask med ekstra skylling, og Sportsvask. SteamCare dampfunksjon er tilgjengelig på utvalgte modeller for krøllreduksjon og oppfriskning. Invertermotoren gir stille drift og lang levetid. Self Clean programmet renser trommelen automatisk. ProSmart invertermotor har ti års garanti. Dosering: rom II for vaskemiddel, blomsterrommet for skyllemiddel. Grundig anbefaler månedlig trommelrengjøring og regelmessig rengjøring av pumpefilter og vaskemiddelskuff. Grundig service er tilgjengelig via Beko sitt servicenettverk i Skandinavia med god dekningstilgjengelighet.' },
      { heading: 'Dosering av vaskemiddel', content: 'Grundig maskiner bruker manuell dosering via den tredelte vaskemiddelskuffen. Rommet til venstre er for hovedvask, midten for skyllemiddel og høyre for forvask. Følg doseringsinstruksjonene på vaskemiddelemballasjen og tilpass etter vannhardhet i din kommune. Bruk flytende vaskemiddel ved lave temperaturer for å unngå pulverrester. Ikke overdoser fordi overskuddssåpe bygger seg opp inne i maskinen og skaper lukt.' },
      { heading: 'Vedlikeholdsrutiner', content: 'Kjør et tomt nitti graders program med eddik eller sitronsyre en gang i måneden for å holde maskinen ren og luktfri. Rengjør pumpefilteret bak serviceluten hver andre til tredje måned. Tørk av gummipakningen etter hver vask og la luken stå åpen. Trekk ut vaskemiddelskuffen månedlig og vask den under varmt vann. I områder med hardt vann bør du bruke avkalkingsmiddel regelmessig.' },
      { heading: 'Vanlige feilkoder', content: 'Grundig vaskemaskiner viser feilkoder på displayet ved problemer. E11 betyr vanninntak feil og løses vanligvis ved å sjekke at kranen er åpen og at silen i slangen ikke er tilstoppet. E21 betyr dreneringsfeil og skyldes oftest et tilstoppet pumpefilter. E40 betyr at luken ikke er ordentlig lukket. Hvis en feilkode vedvarer etter feilsøking bør du kontakte servicetekniker.' },
      { heading: 'Symboler på displayet', content: 'Displayet viser programvalg, temperatur, sentrifugehastighet og gjenværende tid. Et nøkkelsymbol betyr at barnesikringen er aktivert. Et klokkeikon betyr at forsinket start er programmert. Vaskesymbolet roterer når programmet kjører. Når programmet er ferdig vises en indikator og noen modeller gir en lydsignal. Dørens låsesymbol forsvinner når det er trygt å åpne luken.' },
      { heading: 'Tips for best resultat', content: 'Sorter tøyet etter farge og materialtype. Fyll trommelen til tre fjerdedeler for best vaskeresultat. Snu jeans og mørke plagg på vrangen. Lukk glidelåser for å beskytte andre plagg. Sjekk alle lommer for mynter og smågjenstander som kan skade pumpen. Bruk vaskenett for ømfintlige plagg og BH-er. Velg lavest mulig temperatur som gir akseptabelt resultat for å spare strøm og beskytte tøyet.' },
    ],
    tips: ['Grundig gir mye for pengene i budsjettklassen', 'Dampfunksjonen er enklere men effektiv', 'Grundig produseres av Arcelik som også lager Beko', 'Service håndteres gjennom forhandleren din'],
  },

  {
    slug: 'hisense',
    name: 'Hisense',
    metaTitle: 'Hisense vaskemaskin bruksanvisning | Programmer og tips',
    metaDescription: 'Bruksanvisning for Hisense vaskemaskiner. Programmer, dosering og vedlikeholdstips.',
    intro: 'Hisense vaskemaskiner tilbyr god verdi i budsjettsegmentet med solide programmer og invertermotor for stille drift.',
    sections: [
      { heading: 'Programmer', content: 'Hisense vaskemaskiner har standardprogrammer som Bomull 60 og 40, Syntetisk, Finvask, Ull, Eco 40-60, Hurtigvask 15 minutter, Babyvask med ekstra skylling og Sportsvask. Invertermotoren gir jevn og stille drift med lang levetid.' },
      { heading: 'Dosering', content: 'Bruk rom II i vaskemiddelskuffen for hovedvask og blomsterrommet for skyllemiddel. Hisense anbefaler flytende lavtskummende vaskemiddel for best resultat. Ikke overdoser da dette gir skumproblemer.' },
      { heading: 'Vedlikehold', content: 'Rengjor pumpefilteret via serviceluken regelmessig. Kjor en tom vask pa nitti grader manedlig for a fjerne bakterier og avleiringer. Tork av lukepakningen etter hver vask. La luken sta pa glott mellom vask.' },
    ],
    tips: ['Rengjor pumpefilteret regelmessig', 'Kjor manedlig rengjoring pa 90 grader', 'Bruk riktig mengde vaskemiddel', 'La luken sta apent mellom vask'],
  },
]

export function getManualBySlug(slug: string): BrandManual | undefined {
  return manuals.find(m => m.slug === slug)
}

export function getAllManualSlugs(): string[] {
  return manuals.map(m => m.slug)
}
