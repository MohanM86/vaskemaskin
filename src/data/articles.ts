export interface ArticleSection {
  heading: string
  content: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  category: string
  excerpt: string
  publishedDate: string
  updatedDate: string
  readingTime: string
  sections: ArticleSection[]
  faq: FAQ[]
  relatedSlugs: string[]
}

export const articles: Article[] = [
  {
    slug: 'komplett-kjopsguide-2026',
    title: 'Komplett kjøpsguide: Slik velger du vaskemaskin i 2026',
    metaTitle: 'Kjøpsguide vaskemaskin 2026 | Alt du må vite før kjøp',
    metaDescription: 'Komplett guide til kjøp av vaskemaskin i 2026. Kapasitet, energimerking, funksjoner, støy og pris. Alt du trenger for å ta riktig valg.',
    category: 'kjopsguide',
    excerpt: 'Å velge riktig vaskemaskin handler om mer enn bare pris. Denne guiden tar deg gjennom alt fra kapasitet og energimerking til støynivå og smarte funksjoner.',
    publishedDate: '2026-01-15',
    updatedDate: '2026-03-20',
    readingTime: '12 min',
    sections: [
      {
        heading: 'Derfor er riktig valg viktigere enn du tror',
        content: 'En vaskemaskin er en av de hvitevarene du bruker oftest, kanskje så mye som fire til fem ganger i uken. Over en levetid på 10 til 15 år betyr det tusenvis av vaskesykluser. Et feilkjøp merkes ikke bare på strømregningen, men også på klærne dine og tiden du bruker på vask.\n\nDet norske markedet tilbyr hundrevis av modeller fra et titalls merker. Prisene spenner fra under fire tusen kroner til godt over tjue tusen. Men den dyreste maskinen er ikke nødvendigvis den beste for deg. Det handler om å finne maskinen som passer ditt hushold, dine vaner og ditt budsjett.',
      },
      {
        heading: 'Kapasitet: Hvor stor maskin trenger du egentlig',
        content: 'Kapasiteten måles i kilo og refererer til vekten av tørt tøy maskinen kan ta. En vanlig tommelfingerregel er at et hushold på én til to personer klarer seg fint med seks til syv kilo. Familier på tre til fire personer bør gå for åtte til ni kilo, mens større familier kan ha behov for ti kilo eller mer.\n\nMen husk at dette er maksimalkapasitet. For best vaskeresultat bør trommelen være omtrent tre fjerdedeler full. En for stor maskin som aldri fylles opp bruker unødvendig mye energi og vann per vask. En for liten maskin betyr flere vaskrunder og mer slitasje.',
      },
      {
        heading: 'Energimerking: Slik leser du den nye EU skalaen',
        content: 'Siden mars 2021 bruker EU en ny energimerkingsskala fra A til G, der A er best. Den gamle A+++ merkingen er avviklet fordi nesten alle maskiner havnet i de øvre klassene, noe som gjorde det vanskelig for forbrukere å skille mellom modeller.\n\nPå den nye skalaen er det svært få maskiner som når A klassen. De fleste gode modeller ligger på B eller C. En maskin merket B på den nye skalaen tilsvarer omtrent en gammel A+++ maskin. Forskjellen i strømforbruk mellom B og D klassen kan utgjøre flere hundre kroner i året, avhengig av strømpris og vaskefrekvens.',
      },
      {
        heading: 'Støynivå: Viktigere enn mange tror',
        content: 'Støynivået måles i desibel og oppgis for både vask og sentrifugering. En forskjell på tre desibel betyr en dobling av lydnivået, så små tall har stor praktisk betydning.\n\nFor vask bør du sikte på under 50 desibel for å kunne ha maskinen gående på dagtid uten at det forstyrrer. For sentrifugering er under 75 desibel akseptabelt. Noen premiummodeller fra Bosch og Miele kommer ned mot 70 desibel under sentrifugering, noe som gjør en merkbar forskjell om maskinen står nær stue eller soverom.',
      },
      {
        heading: 'Smarte funksjoner du faktisk bruker',
        content: 'Moderne vaskemaskiner tilbyr et hav av funksjoner, men ikke alle er like nyttige i hverdagen. Automatisk dosering av vaskemiddel er kanskje den mest praktiske funksjonen på markedet. Både Bosch sin i-DOS og Miele sin TwinDos doserer riktig mengde vaskemiddel basert på mengde og tilsmussing. Dette gir bedre vaskeresultat, sparer vaskemiddel og er bedre for miljøet.\n\nDampfunksjon er en annen funksjon mange setter pris på. Den kan friske opp klær uten full vask, redusere krøller og fjerne allergifremkallere. Samsung og LG har de mest avanserte dampfunksjonene.\n\nWi-Fi og appstyring er nyttig for å starte og overvåke vask eksternt, men de fleste bruker det mindre enn de tror når de først har kjøpt maskinen.',
      },
    ],
    faq: [
      { question: 'Hvor lenge varer en vaskemaskin i gjennomsnitt?', answer: 'En vaskemaskin varer i gjennomsnitt 10 til 12 år ved normal bruk. Premiummerker som Miele tester for 20 års levetid, mens budsjettmodeller kan ha kortere levetid.' },
      { question: 'Er det verdt å kjøpe en dyr vaskemaskin?', answer: 'Ja, ofte. En dyrere maskin har som regel lavere energiforbruk, større holdbarhet og bedre vaskeresultat. Over maskinens levetid kan besparelsene på strøm og vaskemiddel utgjøre mer enn prisforskjellen.' },
      { question: 'Hva er forskjellen på 1200 og 1400 omdreininger?', answer: 'Høyere turtall ved sentrifugering betyr at klærne blir tørrere etter vask, noe som reduserer tørketiden. 1400 omdreininger gir omtrent 52 prosent restvanninnhold mot 54 prosent ved 1200. Forskjellen er merkbar, men ikke dramatisk.' },
      { question: 'Trenger jeg virkelig smartfunksjoner på vaskemaskinen?', answer: 'De fleste klarer seg fint uten Wi-Fi og appstyring. Men automatisk dosering av vaskemiddel er en smartfunksjon som faktisk gjør hverdagen enklere og gir bedre vaskeresultat. Det er den éne smarte funksjonen vi anbefaler å prioritere.' },
    ],
    relatedSlugs: ['energimerking-forklart', 'toppmatere-vs-frontmatere', 'beste-vasketorkere-2026'],
  },
  {
    slug: 'toppmatere-vs-frontmatere',
    title: 'Toppmater eller frontmater: Hvilken type passer for deg?',
    metaTitle: 'Toppmater vs frontmater vaskemaskin | Sammenligning 2026',
    metaDescription: 'Sammenligning av topp og frontmatere vaskemaskiner. Fordeler, ulemper, plassbruk og pris. Finn ut hvilken type som passer ditt hjem.',
    category: 'toppmatere',
    excerpt: 'Valget mellom toppmater og frontmater handler om plass, budsjett og hvordan du bruker vaskemaskinen. Her er alt du trenger å vite.',
    publishedDate: '2026-01-20',
    updatedDate: '2026-03-15',
    readingTime: '8 min',
    sections: [
      {
        heading: 'To typer, to helt forskjellige løsninger',
        content: 'Toppmaterevaskemaskiner åpnes fra toppen og er typisk 40 centimeter brede. Frontmaterevaskemaskiner åpnes fra fronten og er vanligvis 60 centimeter brede. Denne forskjellen i bredde er ofte det som avgjør valget for mange norske forbrukere, spesielt de som bor i leiligheter med trange vaskerom.\n\nMen det er mer enn bare bredden som skiller dem. Kapasitet, pris, funksjonalitet og holdbarhet varierer også mellom de to typene.',
      },
      {
        heading: 'Plassbruk og installasjon',
        content: 'En toppmater er uslåelig når plassen er knapp. Med bare 40 centimeter i bredde kan den stå i trange rom, på bad og i skap der en frontmater aldri ville fått plass. Du trenger heller ikke plass foran maskinen til å åpne luken.\n\nFrontmatere krever mer gulvplass, men gir deg muligheten til å stable en tørketrommel på toppen. Dette betyr at to maskiner kan stå på plassen til én, men da med bredde på 60 centimeter. For de som har et eget vaskerom er frontmatere ofte det mest praktiske valget.',
      },
      {
        heading: 'Kapasitet og vaskeresultat',
        content: 'Frontmatere har generelt større kapasitet enn toppmaterevaskemaskiner. Mens de fleste toppmatere har en kapasitet på fem til syv kilo, finnes frontmatere med opptil tolv kilo kapasitet. For større familier eller de som vasker mye sengetøy og håndklær, er denne forskjellen vesentlig.\n\nVaskeresultatet er sammenlignbart mellom de to typene i samme prisklasse. Frontmatere har imidlertid en liten fordel ved skånsom vask fordi trommelbevegelsen er mildere mot tekstiler.',
      },
      {
        heading: 'Pris og tilgjengelighet',
        content: 'Toppmatere er typisk noe rimeligere enn sammenlignbare frontmatere. En enkel toppmater fra et anerkjent merke starter rundt tre tusen kroner, mens en tilsvarende frontmater starter nærmere fire til fem tusen.\n\nUtvalget av frontmatere er betydelig større i norske butikker. De fleste merker fokuserer hovedsakelig på frontmatere, noe som gir deg flere valgmuligheter når det gjelder funksjoner, kapasitet og design.',
      },
    ],
    faq: [
      { question: 'Varer toppmatere like lenge som frontmatere?', answer: 'Ja, levetiden er sammenlignbar når du sammenligner maskiner i samme prisklasse. Begge typer varer typisk 10 til 12 år ved normal bruk.' },
      { question: 'Kan jeg stable tørketrommel på en toppmater?', answer: 'Nei, det er ikke mulig å stable en tørketrommel på en toppmater fordi luken åpnes fra toppen. Dette er en av de største fordelene med frontmatere.' },
      { question: 'Er toppmatere mer støyende?', answer: 'Ikke nødvendigvis. Støynivået avhenger mer av maskinens kvalitet og motortype enn om den er toppmater eller frontmater. Sjekk desibelverdiene i produktspesifikasjonene.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'beste-toppmater-2026', 'velge-frontmater'],
  },
  {
    slug: 'energimerking-forklart',
    title: 'Energimerking på vaskemaskiner: Alt du må vite',
    metaTitle: 'Energimerking vaskemaskin forklart | Ny EU skala 2026',
    metaDescription: 'Forstå den nye energimerkingen på vaskemaskiner. Fra A til G, strømforbruk, vannforbruk og hvordan du sparer penger med riktig valg.',
    category: 'energi-og-miljo',
    excerpt: 'Den nye EU energimerkingen kan være forvirrende. Her bryter vi den ned så du forstår nøyaktig hva bokstavene betyr for lommeboken din.',
    publishedDate: '2026-02-01',
    updatedDate: '2026-03-18',
    readingTime: '9 min',
    sections: [
      {
        heading: 'Hvorfor energimerkingen ble endret',
        content: 'Før 2021 brukte EU en energimerkeskala som gikk fra A+++ til D. Problemet var at nesten alle vaskemaskiner havnet i A+ til A+++ kategoriene, noe som gjorde det nesten umulig for forbrukere å skille mellom en virkelig energieffektiv maskin og en middels god én.\n\nDen nye skalaen går fra A til G og er designet for å gi mer rom i toppen. Per i dag er det svært få vaskemaskiner som kvalifiserer for A klassen. De beste modellene på markedet ligger typisk på B, og de fleste gode maskiner på C eller D.',
      },
      {
        heading: 'Slik leser du energietiketten',
        content: 'Energietiketten inneholder mer informasjon enn bare energiklassen. Den viser også forventet årlig energiforbruk i kilowattimer, vannforbruk per syklus i liter, kapasitet i kilo, varighet på standardprogrammet, støynivå under sentrifugering i desibel, og støyklasse fra A til D.\n\nAlt dette er målt under standardiserte testforhold med et program kalt Eco 40-60. Dette programmet er designet for å være det mest energieffektive valget for normalt skittent bomullstøy.',
      },
      {
        heading: 'Hva energiklassen betyr i kroner og øre',
        content: 'La oss si du vasker fire ganger i uken, som er gjennomsnittlig for en norsk familie. Med en strømpris på to kroner per kilowattime ser regnestykket omtrent slik ut. En maskin i energiklasse B bruker rundt 50 kilowattimer i året, noe som gir en strømkostnad på omtrent 100 kroner. En maskin i klasse D bruker rundt 75 kilowattimer, altså 150 kroner i året.\n\nForskjellen virker liten per år, men over maskinens levetid på 10 til 15 år summerer det seg. Og husk at strømprisen i Norge kan variere kraftig. I perioder med høy strømpris kan forskjellen mellom energiklassene bli langt større.',
      },
    ],
    faq: [
      { question: 'Er energiklasse A vaskemaskin mulig å få kjøpt?', answer: 'Per 2026 finnes det svært få modeller i energiklasse A. Skalaen er designet med rom for fremtidig teknologiutvikling. De beste tilgjengelige maskinene ligger på B klassen.' },
      { question: 'Bruker Eco programmet virkelig mye mindre strøm?', answer: 'Ja, Eco 40-60 programmet bruker typisk 40 til 60 prosent mindre energi enn et vanlig 40 eller 60 graders program. Ulempen er at vasketiden er lenger, ofte to til tre timer.' },
      { question: 'Teller vannforbruk også for miljøet?', answer: 'Absolutt. En moderne vaskemaskin bruker rundt 50 liter per vask, mens eldre modeller kan bruke over 100 liter. Lavere vannforbruk betyr også lavere energiforbruk fordi mindre vann må varmes opp.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'spare-strom-vaskemaskin'],
  },
  {
    slug: 'rengjore-vaskemaskin',
    title: 'Slik rengjør du vaskemaskinen: Komplett vedlikeholdsguide',
    metaTitle: 'Rengjøre vaskemaskin | Steg for steg vedlikeholdsguide',
    metaDescription: 'Lær å rengjøre vaskemaskinen skikkelig. Fjern kalk, mugg og vond lukt med enkle midler du allerede har hjemme.',
    category: 'vedlikehold',
    excerpt: 'Vaskemaskinen din rengjør klærne dine, men hvem rengjør vaskemaskinen? Her er en komplett guide til vedlikehold som forlenger levetiden.',
    publishedDate: '2026-02-10',
    updatedDate: '2026-03-22',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hvorfor vaskemaskinen trenger rengjøring',
        content: 'Det høres kanskje rart ut at en maskin som bruker vann og såpe trenger rengjøring, men det er faktisk en av de viktigste tingene du kan gjøre for å forlenge maskinens levetid. Vaskemiddelrester, kalk fra vannet, lo fra tekstiler og fuktighet skaper et perfekt miljø for bakterier og mugg.\n\nResultatet er vond lukt, dårligere vaskeresultat og i verste fall skade på maskinens komponenter. Kalk setter seg spesielt på varmeelementer og kan føre til høyere strømforbruk og kortere levetid.',
      },
      {
        heading: 'Månedlig rengjøring av trommel og pakning',
        content: 'Kjør et tomt vaskeprogram på 90 grader én gang i måneden. Tilsett enten en kopp hvit eddik eller en halv kopp natron i vaskemiddelskuffen. Dette dreper bakterier og løser opp avleiringer inne i trommelen og slangene.\n\nEtter hver vask bør du tørke av gummipakningen rundt luken med en tørr klut. Fuktighet som samler seg her er den vanligste årsaken til mugg og vond lukt. La også luken stå på gløtt etter vask slik at fuktigheten kan fordampe.',
      },
      {
        heading: 'Rengjøring av vaskemiddelskuff og filter',
        content: 'Vaskemiddelskuffen bør tas ut og rengjøres hver måned. Bruk varmt vann og en gammel tannbørste for å fjerne vaskemiddelrester som har satt seg fast. Sjekk også innsiden av holderen der skuffen sitter. Her kan det samle seg slim og bakterier.\n\nPumpefilteret nederst på frontmatere bør sjekkes og rengjøres hver andre til tredje måned. Ha en klut eller et fat klar for vannet som kommer ut. Du finner vanligvis små gjenstander som mynter, hårnåler og lo som har samlet seg opp.',
      },
    ],
    faq: [
      { question: 'Kan jeg bruke klor for å rengjøre vaskemaskinen?', answer: 'Det er mulig men ikke anbefalt som fast rutine. Klor er aggressivt og kan over tid skade gummipakninger og plastdeler. Hvit eddik eller sitronsyre er skånsommere alternativer som fungerer like godt.' },
      { question: 'Hvor ofte bør jeg rengjøre vaskemaskinen?', answer: 'En grundig rengjøring med tomt 90 graders program bør gjøres én gang i måneden. Pakningen bør tørkes etter hver vask, og filteret rengjøres hver andre til tredje måned.' },
      { question: 'Hjelper det å la luken stå åpen?', answer: 'Ja, dette er et av de enkleste og mest effektive tiltakene mot mugg og vond lukt. La luken og vaskemiddelskuffen stå på gløtt etter hver vask slik at fuktigheten kan fordampe.' },
    ],
    relatedSlugs: ['vanlige-feilkoder', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'vanlige-feilkoder',
    title: 'Vanlige feilkoder på vaskemaskiner og hva de betyr',
    metaTitle: 'Feilkoder vaskemaskin | Oversikt og løsninger alle merker',
    metaDescription: 'Oversikt over vanlige feilkoder på vaskemaskiner fra Samsung, Bosch, LG, Electrolux og flere. Finn ut hva koden betyr og hva du kan gjøre selv.',
    category: 'vedlikehold',
    excerpt: 'Når vaskemaskinen viser en feilkode er det ikke alltid grunn til panikk. Mange feil kan du fikse selv på noen få minutter.',
    publishedDate: '2026-02-15',
    updatedDate: '2026-03-20',
    readingTime: '10 min',
    sections: [
      {
        heading: 'Slik tolker du feilkoder',
        content: 'Moderne vaskemaskiner har innebygd diagnostikk som viser feilkoder på displayet når noe ikke fungerer som det skal. Disse kodene består vanligvis av én eller to bokstaver etterfulgt av et tall, for eksempel E1, F2 eller dE.\n\nHver produsent bruker sitt eget kodesystem, så en E1 på en Samsung betyr noe helt annet enn E1 på en Bosch. Heldigvis følger de fleste merker et logisk system der bestemte bokstaver refererer til bestemte deler av maskinen.',
      },
      {
        heading: 'Dreneringsproblemer: Den vanligste feilen',
        content: 'Feilkoder knyttet til drenering er de aller vanligste og heldigvis ofte de enkleste å fikse selv. Samsung bruker 5E eller SE, Bosch bruker F18 eller E18, LG bruker OE, og Electrolux bruker E21.\n\nFørste steg er alltid å sjekke pumpefilteret. Skru av maskinen, legg et håndkle på gulvet og åpne filterluken. Fjern eventuelle fremmedlegemer som mynter, hårnåler eller lo. Sjekk også at avløpsslangen ikke er knekket eller blokkert.\n\nHvis filteret er rent og slangen er fri, kan problemet være en defekt dreneringspumpe. Da bør du kontakte en servicetekniker.',
      },
      {
        heading: 'Vanninntak og lukeproblemer',
        content: 'Feilkoder for vanninntak betyr som regel at maskinen ikke får vann raskt nok. Sjekk at vanntilførselskranen er helt åpen og at inntaksslangen ikke er knekket. Kontroller også at filteret i tilkoblingen ved kranen ikke er tilstoppet.\n\nLukeproblemer, som dE på Samsung eller F16 på Bosch, betyr at maskinen ikke registrerer at luken er ordentlig lukket. Sjekk at det ikke sitter klær i veien for luken og at lukemekanismen ikke er skadet.',
      },
    ],
    faq: [
      { question: 'Bør jeg ringe servicetekniker med en gang?', answer: 'Ikke nødvendigvis. Mange feilkoder, spesielt de relatert til drenering og vanninntak, kan fikses selv på noen minutter. Prøv de enkle løsningene først. Kontakt service hvis feilen vedvarer etter at du har sjekket de vanlige årsakene.' },
      { question: 'Koster det mye å få reparert vaskemaskin?', answer: 'En servicetekniker tar typisk 500 til 800 kroner i utrykningskostnad pluss deler. Enkle reparasjoner som pumpebytte koster totalt 1500 til 2500 kroner. Styrekortbytte kan komme opp i 3000 til 5000 kroner.' },
      { question: 'Kan jeg nullstille feilkoden selv?', answer: 'De fleste feilkoder kan nullstilles ved å slå av maskinen og vente noen minutter før du slår den på igjen. Men husk at koden vises av en grunn. Hvis du nullstiller uten å fikse problemet, vil koden sannsynligvis komme tilbake.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'beste-toppmater-2026',
    title: 'Beste toppmaterevaskemaskiner i 2026',
    metaTitle: 'Beste toppmater vaskemaskin 2026 | Topp 5 anbefalinger',
    metaDescription: 'Oversikt over de beste toppmaterevaskmaskinene i 2026. Sammenligning av modeller fra Electrolux, Whirlpool, Miele og flere.',
    category: 'toppmatere',
    excerpt: 'Vi har gjennomgått toppmatere fra alle store merker og sammenstilt det viktigste du trenger å vite for å velge riktig.',
    publishedDate: '2026-02-20',
    updatedDate: '2026-03-25',
    readingTime: '8 min',
    sections: [
      {
        heading: 'Derfor bør du vurdere en toppmater',
        content: 'Toppmatere har en unik plass i det norske markedet. Med en bredde på bare 40 centimeter passer de steder der en standard 60 centimeter frontmater rett og slett ikke får plass. På små bad, i trange garderobeskap eller i eldre leiligheter der vaskerommet ikke var planlagt for store hvitevarer er toppmateren det eneste realistiske alternativet.\n\nTil tross for den smalere størrelsen tilbyr moderne toppmatere opptil syv kilo kapasitet, noe som er tilstrekkelig for de fleste én til tre personers hushold.',
      },
      {
        heading: 'Electrolux EW6T5226C4: Vår anbefaling',
        content: 'Electrolux sin toppmater er vårt toppvalg for de fleste kjøpere. Den tilbyr seks kilo kapasitet, energiklasse C, og Electrolux sin SensiCare teknologi som automatisk tilpasser vasketid og vannforbruk etter mengde. Støynivået er 47 desibel under vask og 73 under sentrifugering, noe som er godt for en toppmater.\n\nPrisen ligger rundt fem tusen kroner, noe som gir et veldig godt forhold mellom kvalitet og pris. Electrolux har også et godt servicenettverk i Norge, noe som er verdifullt hvis noe skulle gå galt.',
      },
      {
        heading: 'Premiumalternativet fra Miele',
        content: 'Miele WW690 WPM er det dyreste alternativet på listen, med en pris rundt ti tusen kroner. Men du får det som mange mener er den best bygde toppmateren på markedet. Miele sin berømte 20 års holdbarhetstesting gjelder også for deres toppmatere.\n\nMaskinen har syv kilo kapasitet, energiklasse B, og Miele sin CapDosing funksjon for spesialvaskemiddel i kapsler. Byggekvaliteten er i en helt egen klasse, og mange Miele eiere rapporterer at maskinene varer vesentlig lenger enn konkurrentene.',
      },
    ],
    faq: [
      { question: 'Er toppmatere mer støyende enn frontmatere?', answer: 'Nei, toppmatere er faktisk ofte smalere enn frontmatere, men støynivået varierer mer etter maskinens kvalitet enn etter type.' },
      { question: 'Kan jeg vaske dyne i en toppmater?', answer: 'Det avhenger av kapasiteten. En enkel syntetdyne kan gå i en toppmater med syv kilo kapasitet, men store dundyner krever minimum åtte til ni kilo, noe som kun finnes i frontmatere.' },
    ],
    relatedSlugs: ['toppmatere-vs-frontmatere', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'vasketorker-verdt-det',
    title: 'Er en vasketørker verdt det? Fordeler og ulemper',
    metaTitle: 'Vasketørker: Er det verdt det? | Årlig sammenligning 2026',
    metaDescription: 'Er en kombinert vaskemaskin og tørketrommel verdt investeringen? Les om fordeler, ulemper og hvem en vasketørker passer for.',
    category: 'vasketorker',
    excerpt: 'En vasketørker gir deg to maskiner i én, men det finnes begrensninger du bør kjenne til før du bestemmer deg.',
    publishedDate: '2026-02-25',
    updatedDate: '2026-03-20',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hva er en vasketørker og hvordan fungerer den',
        content: 'En vasketørker er en maskin som både vasker og tørker klær i samme trommel. Du legger inn skittent tøy, velger program, og tar ut rent og tørt tøy etter endt syklus. Det høres ideelt ut, og for mange er det nettopp det.\n\nMaskinen fungerer som en vanlig vaskemaskin under vaskesyklusen. Etter at vannet er drenert og klærne er sentrifugert, starter tørkesyklusen. De fleste vasketørkere bruker kondenstørking, der varm luft sirkuleres gjennom trommelen og fuktigheten samles opp i en beholder eller ledes ut gjennom avløpet.',
      },
      {
        heading: 'Den store begrensningen: Kapasitet ved tørking',
        content: 'Her kommer den viktigste ulempen med vasketørkere. Mens maskinen typisk kan vaske åtte til ti kilo, kan den bare tørke fire til seks kilo. Det betyr at du enten må ta ut halvparten av tøyet før tørking, eller bare fylle halv maskin fra starten av.\n\nDette er ikke et problem hvis du planlegger for det, men det er viktig å være klar over det før kjøp. Hvis du er en familie på fire som vasker full maskin, må du enten dele tørkerunden i to eller akseptere at noe tøy tørkes på stativ.',
      },
      {
        heading: 'Hvem passer en vasketørker for',
        content: 'Vasketørkere er ideelle for leiligheter og hjem der du ikke har plass til både vaskemaskin og tørketrommel. De passer også godt for én til to personers hushold der vaskemengdene er moderate.\n\nFor større familier eller de som vasker mye og ofte, anbefaler vi heller separate maskiner hvis du har plassen. To separate maskiner gir deg større fleksibilitet og muligheten til å vaske og tørke samtidig.',
      },
    ],
    faq: [
      { question: 'Bruker vasketørkere mer strøm enn separate maskiner?', answer: 'Ja, vasketørkere bruker generelt mer energi per tørkesyklus enn en dedikert tørketrommel med varmepumpe. Forskjellen er mest merkbar ved tørking. Vaskedelen er sammenlignbar.' },
      { question: 'Varer vasketørkere like lenge som vanlige vaskemaskiner?', answer: 'Levetiden er sammenlignbar med vanlige vaskemaskiner, men fordi de har flere komponenter kan det være flere ting som potensielt kan gå i stykker. Godt vedlikehold er ekstra viktig.' },
    ],
    relatedSlugs: ['beste-vasketorkere-2026', 'komplett-kjopsguide-2026', 'toppmatere-vs-frontmatere'],
  },
  {
    slug: 'spare-strom-vaskemaskin',
    title: 'Slik sparer du strøm med vaskemaskinen',
    metaTitle: 'Spar strøm vaskemaskin | 8 enkle tips som kutter regningen',
    metaDescription: 'Åtte praktiske tips for å redusere strømforbruket på vaskemaskinen. Spar hundrevis av kroner i året med små endringer i vaskevanene.',
    category: 'energi-og-miljo',
    excerpt: 'Små endringer i vaskevanene kan spare deg for hundrevis av kroner i året. Her er de mest effektive tipsene.',
    publishedDate: '2026-03-01',
    updatedDate: '2026-03-20',
    readingTime: '6 min',
    sections: [
      {
        heading: 'Temperaturen er den største strømtyven',
        content: 'Oppvarming av vannet står for omtrent 80 prosent av strømforbruket i en vaskemaskin. Det betyr at den enkleste og mest effektive måten å spare strøm på er å vaske på lavere temperatur.\n\nModerne vaskemidler er designet for å fungere godt allerede ved 30 grader. For normalt skittent hverdagstøy er det sjelden nødvendig med høyere temperatur. Reserver 60 grader for sengetøy, håndklær og sterkt tilsmusset tøy. 90 grader trenger du nesten aldri, bortsett fra den månedlige rengjøringsvask.',
      },
      {
        heading: 'Fyll maskinen riktig',
        content: 'En halvfull maskin bruker nesten like mye strøm og vann som en full maskin. Ved å samle opp tøy og kjøre fulle vaskrunder reduserer du antall vask og dermed det totale forbruket.\n\nMen ikke overfyll heller. En overfylt maskin gir dårligere vaskeresultat og mer slitasje. Tommelfingerregelen er at du skal kunne stikke en hånd ned mellom tøyet og trommelens overkant.',
      },
      {
        heading: 'Bruk Eco programmet',
        content: 'Eco 40-60 programmet bruker betydelig mindre energi enn standardprogrammer. Ulempen er at det tar lenger tid, ofte to til tre timer. Men fordi de fleste av oss kan sette på maskinen og gå, er dette sjelden et reelt problem.\n\nHvis du har strømavtale med spotpris kan du spare enda mer ved å sette vaskemaskinen på timer og la den kjøre på nattestid når strømprisen typisk er lavest.',
      },
    ],
    faq: [
      { question: 'Hvor mye kan jeg spare ved å vaske på 30 grader?', answer: 'Ved å senke temperaturen fra 60 til 30 grader sparer du omtrent 50 til 60 prosent av strømmen per vask. For en gjennomsnittlig familie som vasker fire ganger i uken kan dette utgjøre 200 til 400 kroner i året.' },
      { question: 'Blir klærne rene på 30 grader?', answer: 'Ja, for normalt skittent hverdagstøy er 30 grader tilstrekkelig med et moderne vaskemiddel. Bakterier dreper du mest effektivt ved 60 grader, så sengetøy og håndklær bør fortsatt vaskes på høyere temperatur.' },
    ],
    relatedSlugs: ['energimerking-forklart', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'velge-frontmater',
    title: 'Slik velger du riktig frontmater vaskemaskin',
    metaTitle: 'Velge frontmater vaskemaskin | Guide til riktig valg 2026',
    metaDescription: 'Komplett guide til å velge riktig frontmater vaskemaskin. Kapasitet, funksjoner, merker og pris for norske hjem i 2026.',
    category: 'frontmatere',
    excerpt: 'Frontmatere dominerer det norske markedet med god grunn. Men med hundrevis av modeller kan det være vanskelig å velge. Denne guiden hjelper deg.',
    publishedDate: '2026-03-05',
    updatedDate: '2026-03-22',
    readingTime: '9 min',
    sections: [
      {
        heading: 'Hva gjør en frontmater til riktig valg',
        content: 'Frontmatere er den klart mest populære vaskemaskintypen i Norge, og det er flere gode grunner til det. De tilbyr større kapasitet enn toppmatere, gir mulighet for stabling med tørketrommel, og har generelt et bredere utvalg av funksjoner og programmer.\n\nFor de fleste norske hjem med et dedikert vaskerom eller plass på badet er en frontmater det naturlige valget. Spørsmålet er ikke om du skal velge frontmater, men hvilken frontmater du skal velge.',
      },
      {
        heading: 'Kapasitet: Finn ditt gulltall',
        content: 'Frontmatere kommer med kapasiteter fra seks til tolv kilo. For én til to personer er seks til syv kilo tilstrekkelig. Tre til fire personer bør sikte på åtte til ni kilo. Større familier har nytte av ti kilo eller mer, spesielt hvis de vasker mye sengetøy og håndklær.\n\nHusk at kapasiteten refererer til tørt tøy. En full maskin med åtte kilo kapasitet betyr at du kan legge inn åtte kilo tørre klær. Våte klær veier mer, men det er vekten før vask som teller.',
      },
      {
        heading: 'De viktigste funksjonene å vurdere',
        content: 'Automatisk dosering av vaskemiddel er den funksjonen vi mener gir mest verdi i hverdagen. Den sikrer optimal mengde vaskemiddel i hver vask, noe som gir bedre resultat og sparer både vaskemiddel og miljøet.\n\nDampfunksjon er nyttig for å friske opp klær mellom vask og redusere krøller. Hurtigvask på 15 til 30 minutter er praktisk for lett tilsmussede plagg som trengs raskt. Og et godt Eco program er viktig for å holde strømkostnadene nede.',
      },
    ],
    faq: [
      { question: 'Hva er forskjellen på 1200 og 1600 omdreininger?', answer: 'Høyere sentrifugehastighet betyr tørrere klær etter vask. Forskjellen er omtrent fire prosentpoeng i restvanninnhold. 1400 omdreininger er tilstrekkelig for de fleste og gir et godt kompromiss mellom tørkeresultat og støy.' },
      { question: 'Er bredde på 60 cm standard for alle frontmatere?', answer: 'Ja, 60 centimeter er standardbredden. Det finnes noen smale frontmatere på 45 centimeter, men utvalget er begrenset og kapasiteten er lavere enn for standardbredde modeller.' },
    ],
    relatedSlugs: ['toppmatere-vs-frontmatere', 'komplett-kjopsguide-2026', 'energimerking-forklart'],
  },
  {
    slug: 'vaskemaskin-under-5000',
    title: 'Beste vaskemaskiner under 5000 kroner i 2026',
    metaTitle: 'Vaskemaskin under 5000 kr | Beste budsjettmodeller 2026',
    metaDescription: 'Få en god vaskemaskin uten å sprenge budsjettet. Oversikt over de beste modellene under 5000 kroner i det norske markedet.',
    category: 'kjopsguide',
    excerpt: 'Du trenger ikke bruke en formue for å få en god vaskemaskin. Her er de beste alternativene under fem tusen kroner.',
    publishedDate: '2026-03-10',
    updatedDate: '2026-03-25',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hva kan du forvente for under fem tusen kroner',
        content: 'For under fem tusen kroner får du en vaskemaskin som dekker de grunnleggende behovene godt. Du får typisk syv til åtte kilo kapasitet, energiklasse C eller D, og de viktigste vaskeprogrammene. Du må som regel klare deg uten automatisk dosering, dampfunksjon og appstyring.\n\nMen det betyr ikke at du får en dårlig maskin. Mange budsjettmodeller fra anerkjente merker vasker utmerket og har akseptabel holdbarhet. Nøkkelen er å velge riktig merke og modell.',
      },
      {
        heading: 'Whirlpool FFS 7259 B EE: Best i test for budsjettet',
        content: 'Whirlpool sin syvkilomodell er vårt toppvalg under fem tusen kroner. Den tilbyr 6th Sense teknologi som automatisk tilpasser vannmengde og energiforbruk, FreshCare+ som holder klærne friske etter endt vask, og 1200 omdreininger ved sentrifugering.\n\nMaskinen er i energiklasse C og bruker 52 kilowattimer per år ved standardbruk. Støynivået er 49 desibel under vask, noe som er akseptabelt. Den store fordelen er at du får smartfunksjoner som mange konkurrenter i denne prisklassen ikke tilbyr.',
      },
      {
        heading: 'Når bør du vurdere å bruke litt mer',
        content: 'Hvis budsjettet kan strekkes til seks til syv tusen kroner åpner det seg vesentlig flere muligheter. Du får tilgang til bedre energiklasser, større kapasitet og merker som Bosch og Electrolux som generelt har høyere byggekvalitet.\n\nSpesielt energiklassen kan gjøre en forskjell over tid. En maskin i klasse B versus D kan spare deg noen hundrelapper i året i strøm, noe som over ti år utjevner prisforskjellen.',
      },
    ],
    faq: [
      { question: 'Er billige vaskemaskiner pålitelige?', answer: 'Budsjettmodeller fra anerkjente merker som Whirlpool, Beko og Candy er generelt pålitelige for normal bruk. Forvent en levetid på åtte til ti år, noe som er litt kortere enn premiummodeller men fortsatt god verdi for pengene.' },
      { question: 'Bør jeg heller kjøpe brukt?', answer: 'Brukte vaskemaskiner kan være risikabelt fordi du ikke vet historikken til maskinen. Nye budsjettmodeller gir deg garanti og forutsigbar levetid, noe som ofte gjør dem til et tryggere valg.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'velge-frontmater', 'energimerking-forklart'],
  },
  {
    slug: 'vaske-dyne-i-vaskemaskin',
    title: 'Slik vasker du dyne i vaskemaskin',
    metaTitle: 'Vaske dyne i vaskemaskin | Komplett guide 2026',
    metaDescription: 'Lær å vaske dynen din i vaskemaskinen uten å ødelegge den. Temperatur, program, kapasitet og tørking forklart.',
    category: 'kjopsguide',
    excerpt: 'De fleste dyner kan vaskes i maskin, men det er noen viktige ting du må vite for å unngå klumper og skade.',
    publishedDate: '2026-03-15',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Kan dynen din vaskes i maskin?', content: 'De fleste syntetdyner og mange dundyner kan vaskes i vaskemaskin, men du må sjekke vaskeanvisningen på dynen først. Syntetdyner tåler generelt mer enn dundyner. Du trenger minimum åtte kilo kapasitet for en enkeltdyne og ti kilo for en dobbeltdyne. Hvis maskinen er for liten vil dynen ikke bli skikkelig ren fordi den ikke får nok plass til å bevege seg fritt i trommelen.' },
      { heading: 'Riktig temperatur og program', content: 'Syntetdyner vaskes på 60 grader med vanlig bomullsprogram. Dundyner vaskes på 40 grader med finvask eller dunkledsprogram hvis maskinen har det. Bruk flytende vaskemiddel, aldri pulver, fordi pulverklumper kan sette seg fast i fyllet. Ikke bruk skyllemiddel på dundyner da det kan ødelegge dunenes naturlige fettlag.' },
      { heading: 'Tørking er det viktigste', content: 'En dyne som ikke tørkes ordentlig kan utvikle mugg og vond lukt. Tørketrommel er det tryggeste alternativet. Legg inn to til tre tennisballer som hjelper med å fordele fyllet jevnt. Kjør på lav varme i flere runder og sjekk at dynen er helt tørr før du legger den tilbake på sengen. Uten tørketrommel kan du henge dynen utendørs på en tørkerekke, men regn med at det tar et par dager.' },
    ],
    faq: [
      { question: 'Hvor ofte bør jeg vaske dynen?', answer: 'Dynen bør vaskes én til to ganger i året. Bruk alltid dynetrekk som vaskes oftere for å beskytte dynen mellom vask.' },
      { question: 'Kan jeg vaske en dundyne i vaskemaskin?', answer: 'Ja, de fleste moderne dundyner kan vaskes på 40 grader med finvask. Sjekk alltid vaskeanvisningen først. Bruk flytende vaskemiddel og unngå skyllemiddel.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'velge-frontmater'],
  },
  {
    slug: 'vaske-ull-uten-krymping',
    title: 'Slik vasker du ull uten å krympe det',
    metaTitle: 'Vaske ull i vaskemaskin | Unngå krymping og skade',
    metaDescription: 'Lær å vaske ullklær i vaskemaskinen uten krymping. Riktig temperatur, program og vaskemiddel for ull og kashmir.',
    category: 'kjopsguide',
    excerpt: 'Ull trenger spesialbehandling, men med riktig program og temperatur kan du trygt vaske det i maskin.',
    publishedDate: '2026-03-16',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Hvorfor ull krymper', content: 'Ull krymper fordi fibrene har små skjell på overflaten som hekter seg i hverandre ved høy temperatur og mekanisk bevegelse. Når fibrene filtes sammen trekker stoffet seg sammen og plagget blir mindre. Dette er irreversibelt. Nøkkelen er å bruke lav temperatur og minimal mekanisk påkjenning.' },
      { heading: 'Riktig program og innstillinger', content: 'Bruk alltid ullprogrammet på vaskemaskinen din. Dette programmet bruker lav temperatur (vanligvis 30 grader), minimal trommelbevegelse og lav sentrifugehastighet. Miele og AEG har Woolmark sertifiserte programmer som er testet og godkjent for maskinvask av ull. Vask aldri ull på vanlig bomullsprogram.' },
      { heading: 'Vaskemiddel for ull', content: 'Bruk alltid spesialvaskemiddel for ull og finvask. Vanlig vaskemiddel inneholder enzymer som bryter ned ullfibrene over tid. Ullvaskemiddel har nøytral pH og inneholder lanolin som pleier fibrene. Bruk aldri skyllemiddel på ull fordi det kan gjøre stoffet stivt og fjerne den naturlige elastisiteten.' },
    ],
    faq: [
      { question: 'Kan jeg vaske kashmir i vaskemaskin?', answer: 'Ja, kashmir kan vaskes på ullprogrammet ved 30 grader med ullvaskemiddel. Kashmir er finere enn vanlig ull og krever ekstra forsiktighet. Legg plagget i et vaskenett for ekstra beskyttelse.' },
      { question: 'Kan krympet ull reddes?', answer: 'Noen ganger kan du strekke ut krympet ull ved å legge plagget i lunkent vann med hårbalsam i 30 minutter. Balsamen myker opp fibrene slik at du kan strekke plagget forsiktig tilbake til original størrelse.' },
    ],
    relatedSlugs: ['vaskesymboler-guide', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'fjerne-flekker',
    title: 'Flekkfjerning: Slik fjerner du alle typer flekker',
    metaTitle: 'Fjerne flekker fra klær | Komplett flekkguide 2026',
    metaDescription: 'Slik fjerner du flekker fra klær. Blod, rødvin, gress, kaffe, fett og mer. Steg for steg guide med husmorråd som faktisk fungerer.',
    category: 'vedlikehold',
    excerpt: 'Ulike flekker krever ulike metoder. Her er en komplett guide til de vanligste flekkene og hvordan du fjerner dem.',
    publishedDate: '2026-03-17',
    updatedDate: '2026-03-28',
    readingTime: '10 min',
    sections: [
      { heading: 'Grunnreglene for flekkfjerning', content: 'Den viktigste regelen er å behandle flekken så raskt som mulig. Jo lenger en flekk sitter, jo vanskeligere er den å fjerne. Skrap av overflødig materiale med en skje eller kniv uten å gni det dypere inn i stoffet. Test alltid flekkfjerneren på et skjult område først for å sjekke at den ikke skader stoffet eller fargen.' },
      { heading: 'Proteinflekker: Blod, egg og melk', content: 'Proteinflekker må alltid behandles med kaldt vann. Varmt vann koagulerer proteinet og fester flekken permanent. Legg plagget i kaldt vann med salt i 30 minutter. For tørket blod, bruk hydrogenperoksid (tre prosent) direkte på flekken og la det virke i ti minutter før vask på 30 grader.' },
      { heading: 'Tanninflekker: Kaffe, te og rødvin', content: 'Skyll flekken med kokende vann fra en halv meters høyde slik at vannstrålen presser flekken ut. For rødvin, strø salt på den våte flekken umiddelbart og la det trekke i noen minutter. Vask deretter på 40 grader. For inntørkede kaffeflekker, bruk en blanding av eddik og oppvaskmiddel.' },
      { heading: 'Fettflekker: Matolje, smør og saus', content: 'Strø rikelig med maisstivelse eller bakepulver på fettflekken og la det suge i 15 minutter. Børst av og behandle med oppvaskmiddel direkte på flekken. La det virke i ti minutter og vask på 40 til 60 grader. Gallsåpe er spesielt effektivt mot fettflekker.' },
      { heading: 'Gressflekker og jordflekker', content: 'Gressflekker er blant de vanskeligste å fjerne fordi klorofyll binder seg sterkt til tekstilfibrene. Behandle med hvit eddik eller sitronsaft og la det virke i 30 minutter. Gni forsiktig med en tannbørste og vask på 40 grader. Jordflekker bør tørkes først og børstes av før behandling med vaskemiddel.' },
    ],
    faq: [
      { question: 'Fungerer gallsåpe på alle flekker?', answer: 'Gallsåpe er spesielt effektiv på fettflekker, proteinflekker og mange organiske flekker. Den er mindre effektiv på fargeflekker som blekk og rustflekker. Den er trygg å bruke på de fleste stoffer.' },
      { question: 'Kan jeg bruke blekmiddel på flekker?', answer: 'Klorblekmiddel fungerer kun på hvite bomullstoffer og kan ødelegge farger og syntetiske materialer. Oksygenbasert blekmiddel er skånsommere og kan brukes på de fleste fargede stoffer.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'vaske-ull-uten-krymping'],
  },
  {
    slug: 'vaskesymboler-guide',
    title: 'Vaskesymboler på klær: Komplett guide med alle symboler',
    metaTitle: 'Vaskesymboler forklart | Alle symboler på klær 2026',
    metaDescription: 'Komplett guide til alle vaskesymboler på klær. Vasking, bleking, tørking, stryking og rensing forklart med bilder.',
    category: 'kjopsguide',
    excerpt: 'Forvirret av symbolene på vaskelappen? Her er en komplett oversikt over hva hvert symbol betyr.',
    publishedDate: '2026-03-18',
    updatedDate: '2026-03-28',
    readingTime: '8 min',
    sections: [
      { heading: 'De fem symbolgruppene', content: 'Vaskesymbolene er delt inn i fem grupper: vaskebalje (vasking), trekant (bleking), firkant (tørking), strykejern (stryking) og sirkel (profesjonell rensing). Hver gruppe har varianter som forteller om temperatur, intensitet og spesialkrav. Et kryss over symbolet betyr alltid at behandlingen ikke er tillatt.' },
      { heading: 'Vaskesymboler: Baljesymbolet', content: 'En balje med tall angir maksimal vasketemperatur. Balje med 30 betyr maskinvask på inntil 30 grader. Balje med 40 betyr 40 grader, og så videre. En strek under baljen betyr skånsom vask, to streker betyr ekstra skånsom vask. En hånd i baljen betyr håndvask. En balje med kryss betyr at plagget ikke tåler vask i vann.' },
      { heading: 'Blekesymboler: Trekanten', content: 'En tom trekant betyr at alle typer blekemiddel er tillatt. En trekant med to skrå streker betyr at kun oksygenbasert blekmiddel er tillatt, ikke klorblekemiddel. En trekant med kryss betyr at bleking ikke er tillatt.' },
      { heading: 'Tørkesymboler: Firkanten', content: 'En firkant med en sirkel inne betyr at tørketrommel er tillatt. En prikk i sirkelen betyr lav varme, to prikker betyr normal varme. En firkant med kryss betyr at tørketrommel ikke er tillatt. En firkant med en vannrett strek betyr at plagget skal tørkes liggende, og en firkant med en loddrett strek betyr hengetørking.' },
      { heading: 'Stryke og rensesymboler', content: 'Strykejernet med prikker angir temperatur. En prikk er lav varme for syntetisk, to prikker er middels for ull og silke, tre prikker er høy for bomull og lin. Strykejern med kryss betyr at plagget ikke tåler stryking. Sirkelen er for profesjonell rensing der bokstaven inne i sirkelen angir hvilke kjemikalier som kan brukes.' },
    ],
    faq: [
      { question: 'Hva betyr en hånd i vaskebaljesymbolet?', answer: 'En hånd i baljesymbolet betyr at plagget kun tåler håndvask. Bruk lunkent vann opp til 40 grader og vaskemiddel for finvask. Ikke vri plagget. Mange vaskemaskiner har et håndvask program som er skånsomt nok for de fleste plagg merket med håndvask.' },
      { question: 'Kan jeg ignorere vaskesymbolene?', answer: 'Vi anbefaler å følge symbolene, spesielt for dyre plagg og ømfintlige materialer. For vanlig bomullstøy er det ofte mulig å avvike litt, men vask aldri ull eller silke på høyere temperatur enn angitt.' },
      { question: 'Hva betyr P i sirkelen?', answer: 'P betyr at plagget kan renses med perkloretylen, som er det vanligste rensemiddelet. F betyr at kun mildere løsemidler kan brukes. W betyr at profesjonell våtrens er tillatt.' },
    ],
    relatedSlugs: ['vaske-ull-uten-krymping', 'fjerne-flekker', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'vaske-sko-i-vaskemaskin',
    title: 'Slik vasker du sko i vaskemaskinen',
    metaTitle: 'Vaske sko i vaskemaskin | Guide for trygge resultater',
    metaDescription: 'Kan du vaske sko i vaskemaskin? Ja, men ikke alle typer. Les hvilke sko som tåler maskin og hvordan du gjør det riktig.',
    category: 'vedlikehold',
    excerpt: 'Mange sko kan faktisk vaskes i maskin, men det er viktig å vite hvilke typer som tåler det og hvordan du beskytter både sko og maskin.',
    publishedDate: '2026-03-19',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Hvilke sko kan vaskes i maskin', content: 'Tekstilsko som joggesko, sneakers og canvassko tåler generelt maskinvask. Lær, semsket skinn, kork og sko med pynt eller lim bør aldri vaskes i maskin. Fjern alltid snørene og innleggssålene før vask og legg skoene i et vaskenett eller en gammel putevar for å beskytte både skoene og trommelen.' },
      { heading: 'Riktig program og temperatur', content: 'Vask på 30 grader med finvask eller syntetisk program. Ikke bruk sentrifugering over 600 omdreininger. Legg inn noen håndklær sammen med skoene for å dempe støy og gi bedre vaskeresultat. Bruk flytende vaskemiddel, ikke pulver.' },
      { heading: 'Tørking av sko', content: 'Aldri bruk tørketrommel på sko. Varmen kan deformere sålen og ødelegge limet. Fyll skoene med avispapir som suger opp fuktigheten og hjelper dem beholde formen. Bytt avisen etter noen timer. La skoene tørke i romtemperatur, aldri på en varmeovn eller i direkte sollys.' },
    ],
    faq: [
      { question: 'Kan maskinvask ødelegge vaskemaskinen?', answer: 'Nei, så lenge du bruker vaskenett og legger inn håndklær for å balansere lasten. Sko er tunge og kan lage mye støy og vibrasjoner uten polstring.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'fjerne-flekker'],
  },
  {
    slug: 'vaskemaskin-lukt',
    title: 'Vaskemaskin lukter vondt: Årsaker og løsninger',
    metaTitle: 'Vaskemaskin lukter vondt | Fjern vond lukt for godt',
    metaDescription: 'Vond lukt fra vaskemaskinen? Her er de vanligste årsakene og slik fjerner du lukten for godt med enkle midler.',
    category: 'vedlikehold',
    excerpt: 'Vond lukt fra vaskemaskinen er et vanlig problem, men det er heldigvis enkelt å fikse med riktige tiltak.',
    publishedDate: '2026-03-20',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Hvorfor vaskemaskinen lukter', content: 'Vond lukt i vaskemaskinen skyldes nesten alltid bakterier og mugg som trives i den fuktige miljøet inne i maskinen. De vanligste stedene for bakterievekst er gummipakningen rundt luken, vaskemiddelskuffen, pumpefilteret og innsiden av trommelen. Moderne vaskemaskiner som bruker lave temperaturer og lite vann er mer utsatt fordi bakteriene ikke dreper like effektivt som ved høye temperaturer.' },
      { heading: 'Slik fjerner du lukten', content: 'Start med å rengjøre gummipakningen grundig med en klut og litt eddik. Trekk pakninggen forsiktig fra hverandre og tørk ut all fuktighet og smuss som har samlet seg i foldene. Ta ut vaskemiddelskuffen og vask den under rennende varmt vann med en tannbørste. Rengjør pumpefilteret nederst på fronten. Kjør deretter et tomt 90 graders program med to desiliter hvit eddik i vaskemiddelskuffen.' },
      { heading: 'Forebygg at lukten kommer tilbake', content: 'La luken og vaskemiddelskuffen stå på gløtt etter hver vask slik at fuktigheten kan fordampe. Tørk av gummipakningen etter hver vask. Kjør en tom 90 graders vask én gang i måneden. Unngå å la ferdigvasket tøy ligge i maskinen i lengre tid. Bruk riktig mengde vaskemiddel fordi overdosering skaper avleiringer der bakterier trives.' },
    ],
    faq: [
      { question: 'Hjelper det å bruke mer vaskemiddel?', answer: 'Nei, tvert imot. For mye vaskemiddel skaper avleiringer inne i maskinen der bakterier trives. Bruk anbefalt mengde eller litt mindre.' },
      { question: 'Må jeg kjøpe spesielle rengjøringsprodukter?', answer: 'Nei, hvit eddik og natron fungerer utmerket. Du kan også bruke sitronsyre. Spesielle maskinrenstabletter er praktiske men ikke nødvendige.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'vanlige-feilkoder'],
  },
  {
    slug: 'vasketemperatur-guide',
    title: 'Vasketemperatur guide: Riktig temperatur for hvert plagg',
    metaTitle: 'Vasketemperatur guide | 30, 40, 60 eller 90 grader?',
    metaDescription: 'Hvilken vasketemperatur bør du velge? Komplett guide til 30, 40, 60 og 90 grader. Hva som passer for bomull, syntetisk, ull og silke.',
    category: 'kjopsguide',
    excerpt: 'Riktig temperatur gir bedre vaskeresultat, sparer strøm og beskytter klærne dine. Her er den komplette guiden.',
    publishedDate: '2026-03-21',
    updatedDate: '2026-03-28',
    readingTime: '7 min',
    sections: [
      { heading: '30 grader: Hverdagstøy og farget', content: 'Tretti grader er tilstrekkelig for normalt skittent hverdagstøy som t-skjorter, jeans, gensere og undertøy. Moderne vaskemidler er designet for å fungere godt ved denne temperaturen. Kalde farger holder seg bedre ved lav temperatur. Dette er den mest energieffektive temperaturen og den skånsomeste for tekstilene.' },
      { heading: '40 grader: Standard for de fleste', content: 'Førti grader er et godt kompromiss mellom rengjøring og energieffektivitet. Det fungerer for de fleste hverdagsplagg, barneklær med vanlig skitt og lettere tilsmussede arbeidsklær. Mange Eco programmer bruker 40 grader som utgangspunkt.' },
      { heading: '60 grader: Hygienevask', content: 'Seksti grader dreper de fleste bakterier og er anbefalt for sengetøy, håndklær, oppvaskkluter og klær som har vært i kontakt med sykdom. Allergikere bør vaske sengetøy på 60 grader for å drepe støvmidd. Hvite bomullsplagg kan også vaskes på 60 for å holde dem lyse.' },
      { heading: '90 grader: Kun for rengjøring', content: 'Nitti grader brukes nesten utelukkende for rengjøring av selve vaskemaskinen. Et tomt 90 graders program en gang i måneden dreper alle bakterier og løser opp kalkavleiringer. Svært få klær tåler 90 grader. Kun grove bomullsstoffer som arbeidsklær med sterk olje eller kjemisk tilsmussing kan vaske på denne temperaturen.' },
    ],
    faq: [
      { question: 'Dreper 30 grader bakterier?', answer: 'Tretti grader dreper ikke bakterier effektivt. For daglig hygiene er dette vanligvis tilstrekkelig fordi vaskemiddelet fjerner de fleste bakteriene mekanisk. For klær som har vært i kontakt med sykdom bør du bruke 60 grader.' },
      { question: 'Sparer jeg mye på å vaske kaldere?', answer: 'Ja, oppvarming av vann utgjør omtrent 80 prosent av strømforbruket. Å gå fra 60 til 30 grader kan halvere strømkostnaden per vask.' },
    ],
    relatedSlugs: ['spare-strom-vaskemaskin', 'energimerking-forklart', 'vaskesymboler-guide'],
  },
  {
    slug: 'vaskemiddel-guide',
    title: 'Pulver, flytende eller kapsler: Hvilken type vaskemiddel bør du velge?',
    metaTitle: 'Vaskemiddel guide | Pulver vs flytende vs kapsler 2026',
    metaDescription: 'Sammenligning av pulver, flytende vaskemiddel og vaskekapsler. Fordeler, ulemper og hva som passer best for dine behov.',
    category: 'vedlikehold',
    excerpt: 'Valget av vaskemiddel påvirker både vaskeresultat og maskinens levetid. Her er alt du trenger å vite.',
    publishedDate: '2026-03-22',
    updatedDate: '2026-03-28',
    readingTime: '7 min',
    sections: [
      { heading: 'Pulver: Best på hvitt og sterke flekker', content: 'Pulvervaskemiddel inneholder blekemiddel som holder hvite tekstiler lyse og fjerner sterke flekker effektivt. Det er det mest miljøvennlige alternativet fordi det ikke inneholder konserveringsmidler og har lavere transportvekt. Ulempen er at det kan etterlate hvite rester på mørke klær hvis det ikke løses opp ordentlig ved lave temperaturer.' },
      { heading: 'Flytende: Best på farget og lave temperaturer', content: 'Flytende vaskemiddel løser seg opp fullstendig ved alle temperaturer og etterlater ingen rester. Det er skånsommere mot farger fordi det ikke inneholder blekemiddel. Flytende er også det eneste alternativet for maskiner med automatisk dosering som Bosch i-DOS og Miele TwinDos. Ulempen er at det er dyrere per vask og mindre effektivt på hvitt tøy over tid.' },
      { heading: 'Kapsler: Praktisk men dyrt', content: 'Vaskekapsler er forhåndsdoserte enheter med konsentrert vaskemiddel innpakket i en oppløselig film. De er svært praktiske og eliminerer risikoen for overdosering. Ulempen er at de er den dyreste løsningen per vask, typisk dobbelt så dyre som pulver. De kan heller ikke tilpasses til små lass fordi doseringen er fast.' },
      { heading: 'Dosering: Mindre er ofte mer', content: 'Overdosering av vaskemiddel er et vanlig problem som gir dårligere vaskeresultat, avleiringer i maskinen og unødvendig miljøbelastning. Følg doseringsinstruksjonene på emballasjen og juster etter vannhardhet i din kommune. I områder med mykt vann trenger du mindre enn anbefalt dose. Maskiner med automatisk dosering eliminerer dette problemet helt.' },
    ],
    faq: [
      { question: 'Bør jeg bruke spesialvaskemiddel for svart tøy?', answer: 'Svart vaskemiddel hjelper med å bevare den mørke fargen lenger. Det er flytende og inneholder ikke blekemiddel. For vanlig bruk er et godt flytende colorvaskemiddel tilstrekkelig.' },
      { question: 'Trenger jeg skyllemiddel?', answer: 'Skyllemiddel er valgfritt. Det gjør tøyet mykt og gir fin duft, men er ikke nødvendig for rengjøring. For allergikere og personer med sensitiv hud anbefaler vi å droppe skyllemiddel.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'vasketemperatur-guide', 'spare-strom-vaskemaskin'],
  },
  {
    slug: 'installere-vaskemaskin',
    title: 'Slik installerer du vaskemaskin selv: Komplett guide',
    metaTitle: 'Installere vaskemaskin | Steg for steg guide 2026',
    metaDescription: 'Installer vaskemaskinen selv med denne steg for steg guiden. Tilkobling av vann, avløp, strøm og justering av vater.',
    category: 'vedlikehold',
    excerpt: 'De fleste kan installere vaskemaskin selv med riktig verktøy og litt tålmodighet. Her er alt du trenger å vite.',
    publishedDate: '2026-03-23',
    updatedDate: '2026-03-28',
    readingTime: '8 min',
    sections: [
      { heading: 'Før du begynner', content: 'Fjern all emballasje og transportsikringer. De fleste vaskemaskiner har bolter i baksiden som holder trommelen fast under transport. Disse må fjernes før bruk, ellers kan maskinen bli skadet. Sjekk bruksanvisningen for nøyaktig plassering. Du trenger en vanntilkobling med 3/4 toms gjenger, et avløpsrør eller vaskemaskinkobling, og en jordet stikkontakt.' },
      { heading: 'Vanntilkobling', content: 'Skru inntaksslangen til vanntilførselskranen. Sørg for at koblingen er tett med gummipakningen på plass. Ikke bruk teflontape på gummipakning. Åpne kranen og sjekk for lekkasje. Noen maskiner har Aquastop system med en spesiell slange som må kobles riktig. Slangen skal ikke være knekket eller klemt.' },
      { heading: 'Avløpstilkobling', content: 'Avløpsslangen kan enten kobles direkte til et avløpsrør i veggen eller henges over kanten av en vask. Hvis du bruker avløpsrør, sørg for at slangen ikke stikker mer enn 10 centimeter ned i røret for å unngå syfongeffekt. Slangens høyeste punkt bør være mellom 60 og 100 centimeter fra gulvet. For lavt gir tilbakestrømming, for høyt og pumpen sliter.' },
      { heading: 'Vater og balansering', content: 'Maskinen må stå helt i vater for å unngå vibrasjoner og vandring under sentrifugering. Bruk et vaterpass på toppen av maskinen og juster føttene til boblen er sentrert. Alle fire føtter må ha fast kontakt med gulvet. Etter justering, stram låsemutterne på føttene slik at de ikke løsner over tid.' },
    ],
    faq: [
      { question: 'Trenger jeg rørlegger for å installere vaskemaskin?', answer: 'Nei, de fleste kan installere vaskemaskin selv hvis vanntilkobling og avløp allerede er på plass. Hvis du trenger ny vanntilkobling eller avløpsrør bør du bruke en autorisert rørlegger.' },
      { question: 'Hva er transportsikringene?', answer: 'Transportsikringer er bolter i baksiden av maskinen som holder trommelen fast under transport. De må fjernes før første bruk. Bruk medfølgende nøkkel og oppbevar boltene i tilfelle du skal flytte maskinen senere.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'vanlige-feilkoder'],
  },
  {
    slug: 'reklamasjon-garanti-vaskemaskin',
    title: 'Reklamasjon og garanti på vaskemaskin: Dine rettigheter',
    metaTitle: 'Reklamasjon vaskemaskin | 5 års rettigheter forklart',
    metaDescription: 'Du har 5 års reklamasjonsrett på vaskemaskiner i Norge. Les om dine rettigheter, hvordan du klager og hva butikken plikter.',
    category: 'kjopsguide',
    excerpt: 'Mange vet ikke at de har 5 års reklamasjonsrett på vaskemaskiner. Her er alt du trenger å vite om dine rettigheter.',
    publishedDate: '2026-03-24',
    updatedDate: '2026-03-28',
    readingTime: '7 min',
    sections: [
      { heading: 'Forskjellen på garanti og reklamasjon', content: 'Produsentgarantien er et frivillig tilbud fra produsenten, vanligvis ett til to år. Reklamasjonsretten er lovfestet i forbrukerkjøpsloven og gir deg rett til å klage i inntil fem år for varer som forventes å vare lenger enn to år. Vaskemaskiner faller klart i denne kategorien. Reklamasjonsretten gjelder uansett hva produsentgarantien sier.' },
      { heading: 'Slik reklamerer du', content: 'Kontakt alltid butikken du kjøpte maskinen i, ikke produsenten. Du har plikt til å reklamere innen rimelig tid etter at du oppdaget feilen. Ha kvitteringen klar. De første to årene etter kjøp har butikken bevisbyrden, det vil si at feilen antas å være opprinnelig med mindre de kan bevise noe annet. Etter to år må du selv sannsynliggjøre at feilen skyldes en opprinnelig mangel.' },
      { heading: 'Hva kan du kreve', content: 'Du kan kreve reparasjon eller omlevering først. Hvis det ikke lar seg gjøre innen rimelig tid, kan du kreve prisavslag eller heving av kjøpet. Butikken kan ikke kreve at du betaler for frakten av maskinen til og fra reparasjon. Alle kostnader ved reklamasjonen skal dekkes av selgeren.' },
      { heading: 'Hvis butikken avviser reklamasjonen', content: 'Hvis butikken avviser reklamasjonen din kan du klage til Forbrukertilsynet eller Forbrukerklageutvalget. Forbrukerklageutvalget behandler tvister gratis og fatter bindende vedtak. Du kan også kontakte Forbrukerrådet for veiledning. Ta vare på all skriftlig kommunikasjon med butikken.' },
    ],
    faq: [
      { question: 'Gjelder reklamasjonsretten ved netthandel?', answer: 'Ja, reklamasjonsretten gjelder uansett om du kjøpte i butikk eller på nett. Ved netthandel har du i tillegg 14 dagers angrerett fra mottaksdato.' },
      { question: 'Trenger jeg kvitteringen?', answer: 'Ja, kvitteringen er det viktigste dokumentet ved reklamasjon. Noen butikker kan slå opp kjøpet via bankkort eller kundeprogram, men dette er ingen rettighet. Oppbevar kvitteringen digitalt for sikkerhet.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'vanlige-feilkoder'],
  },
  {
    slug: 'beste-vaskemaskin-2026',
    title: 'Beste vaskemaskin 2026: Topp 5 i hver kategori',
    metaTitle: 'Beste vaskemaskin 2026 | Topp modeller testet og vurdert',
    metaDescription: 'Oversikt over de beste vaskemaskinene i 2026. Topp 5 i kategoriene beste totalt, beste budsjett, beste premium, beste toppmater og beste vasketørker.',
    category: 'kjopsguide',
    excerpt: 'Vi har sammenstilt de best vurderte vaskemaskinene i 2026 basert på tester, brukeranmeldelser og ekspertuttalelser.',
    publishedDate: '2026-03-25',
    updatedDate: '2026-03-28',
    readingTime: '12 min',
    sections: [
      { heading: 'Slik har vi vurdert', content: 'Vi har analysert testresultater fra Forbrukerrådet, nordiske testmagasiner og brukeranmeldelser fra norske nettbutikker. Vi vekter vaskeresultat, energieffektivitet, støynivå, holdbarhet og pris. Modellene er tilgjengelige i norske butikker per mars 2026.' },
      { heading: 'Beste vaskemaskin totalt: Bosch WGG244A0BY', content: 'Bosch sin Serie 6 modell kombinerer i-DOS automatisk dosering, SpeedPerfect hurtigvask og EcoSilence motor til en svært kompetent pakke. Ni kilo kapasitet, energiklasse B, og et støynivå på bare 47 desibel under vask gjør den til det tryggeste valget for de fleste norske familier. Pris rundt åtte tusen kroner.' },
      { heading: 'Beste budsjett: Whirlpool FFS 7259 B EE', content: 'Whirlpool sin syvkilomodell gir deg 6th Sense teknologi og FreshCare+ til en pris under fem tusen kroner. Energiklasse C, 1200 omdreininger og et akseptabelt støynivå på 49 desibel. Ikke den mest avanserte maskinen, men et svært godt kjøp for pengene.' },
      { heading: 'Beste premium: Miele WSD663 WCS', content: 'Miele sin TwinDos modell med automatisk toskomponent dosering, CapDosing for spesialbehandling og den berømte 20 års holdbarhetstesten. Åtte kilo kapasitet, energiklasse A, og eksepsjonell stillhet. Pris rundt femten tusen kroner, men regnet per år av levetiden er den faktisk konkurransedyktig.' },
      { heading: 'Beste toppmater: Electrolux EW6T5226C4', content: 'Electrolux sin toppmater med SensiCare og bare 40 centimeter bredde. Seks kilo kapasitet, energiklasse C, og god lyddemping. Det beste valget for trange vaskerom og små bad. Pris rundt fem tusen kroner.' },
      { heading: 'Beste vasketørker: LG F4DV710H2E', content: 'LG sin kombinerte maskin med AI Direct Drive og TurboWash. Ti kilo vaskekapasitet og seks kilo tørkekapasitet. Steam funksjon og Wi-Fi tilkobling. Den beste løsningen for deg som ikke har plass til to separate maskiner. Pris rundt ti tusen kroner.' },
    ],
    faq: [
      { question: 'Bør jeg velge den dyreste modellen?', answer: 'Ikke nødvendigvis. Den beste maskinen for deg avhenger av dine behov og ditt budsjett. En Whirlpool til fem tusen kroner vasker utmerket for de fleste. Betal mer bare hvis du trenger spesifikke funksjoner som automatisk dosering eller ekstra lang holdbarhet.' },
      { question: 'Hvor ofte oppdateres denne listen?', answer: 'Vi oppdaterer listen etter hvert som nye modeller lanseres og testresultater publiseres. Sist oppdatert mars 2026.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'vaskemaskin-under-5000', 'beste-toppmater-2026'],
  },
  {
    slug: 'vaskemaskin-stoyer',
    title: 'Vaskemaskin bråker og vibrerer: Årsaker og løsninger',
    metaTitle: 'Vaskemaskin støyer og vibrerer | Slik løser du det',
    metaDescription: 'Bråker vaskemaskinen din? Les om de vanligste årsakene til støy og vibrasjoner, og hva du kan gjøre for å fikse det.',
    category: 'vedlikehold',
    excerpt: 'Unormal støy og vibrasjoner fra vaskemaskinen kan ha enkle årsaker som du kan fikse selv.',
    publishedDate: '2026-03-26',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Vanlige årsaker til støy', content: 'De vanligste årsakene til unormal støy er at maskinen ikke står i vater, at transportsikringene ikke er fjernet, at tøyet er ujevnt fordelt, eller at det er fremmedlegemer i trommelen. Bankende lyder under sentrifugering skyldes nesten alltid ubalanse i lasten. Skrapende lyder kan bety at en BH spile eller mynt har falt mellom trommel og kar.' },
      { heading: 'Maskinen vandrer over gulvet', content: 'Hvis maskinen flytter seg under sentrifugering er den nesten garantert ikke i vater. Sjekk med et vaterpass og juster føttene. Alle fire føtter må ha kontakt med gulvet. Vibrasjonsdempende matter eller puter under føttene kan også hjelpe, spesielt på flisegulv som forsterker vibrasjonene.' },
      { heading: 'Når støyen er et tegn på slitasje', content: 'Vedvarende maleende eller knirkende lyder kan bety slitte lagre. Bankende lyd som ikke skyldes ubalanse kan bety slitte støtdempere. Brummende lyd ved drenering kan bety at pumpen sliter. Disse problemene krever vanligvis servicetekniker, men det er greit å vite hva du skal lytte etter slik at du kan beskrive problemet presist.' },
    ],
    faq: [
      { question: 'Er det normalt at maskinen bråker under sentrifugering?', answer: 'En viss støy er normalt under sentrifugering. Sjekk støynivået i spesifikasjonene. Under 75 desibel er akseptabelt. Hvis støyen har økt merkbart sammenlignet med da maskinen var ny, kan det tyde på slitasje.' },
    ],
    relatedSlugs: ['vanlige-feilkoder', 'installere-vaskemaskin', 'rengjore-vaskemaskin'],
  },
  {
    slug: 'vaske-babyklaer',
    title: 'Slik vasker du babyklær i vaskemaskin',
    metaTitle: 'Vaske babyklær | Riktig temperatur og vaskemiddel',
    metaDescription: 'Guide til vask av babyklær. Riktig temperatur, hypoallergenisk vaskemiddel og tips for sensitiv babyhud.',
    category: 'kjopsguide',
    excerpt: 'Babyhud er mye mer sensitiv enn voksen hud. Her er hva du bør vite om vask av babyklær.',
    publishedDate: '2026-03-27',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Vaskemiddel for babyklær', content: 'Bruk et hypoallergenisk vaskemiddel uten parfyme og fargestoffer. Merkene Neutral og Klar er populære valg for babyvask i Norge. Unngå skyllemiddel fordi det kan irritere sensitiv hud. Vask nye babyklær før bruk for å fjerne eventuelle kjemikalier fra produksjonen.' },
      { heading: 'Temperatur og program', content: 'Vask babyklær på 60 grader for å drepe bakterier effektivt. Babyer har svakere immunforsvar og klærne deres utsettes for mye søl og bleierester. Bruk en ekstra skyllerunde for å fjerne alle vaskemiddelrester. Mange maskiner har et allergiker eller hygiene program som passer perfekt.' },
      { heading: 'Separering og hyppighet', content: 'Vask babyklær separat fra voksnes klær de første månedene. Bleierester og oppkast kan inneholde bakterier som du ikke vil blande med annet tøy. Vask ofte heller enn å samle opp store mengder. Babyklær tørkes best i tørketrommel på lav varme eller på tørkestativ innendørs.' },
    ],
    faq: [
      { question: 'Må jeg vaske babyklær separat?', answer: 'De første tre til seks månedene anbefaler vi å vaske babyklær separat med hypoallergenisk vaskemiddel. Etterpå kan du gradvis begynne å vaske sammen med resten av familien.' },
    ],
    relatedSlugs: ['vasketemperatur-guide', 'vaskemiddel-guide'],
  },
  {
    slug: 'vaske-gardiner',
    title: 'Slik vasker du gardiner i vaskemaskin',
    metaTitle: 'Vaske gardiner i vaskemaskin | Steg for steg guide',
    metaDescription: 'Lær å vaske gardiner trygt i vaskemaskinen. Hvilke typer tåler maskin, riktig temperatur og tørking.',
    category: 'vedlikehold',
    excerpt: 'De fleste gardiner kan vaskes i maskin, men feil temperatur kan føre til krymping. Her er den trygge guiden.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Sjekk vaskelappen først', content: 'De fleste polyestergardiner og bomullsgardiner tåler maskinvask. Silke og lin gardiner krever mer forsiktighet. Sjekk alltid vaskelappen. Fjern alle kroker og ringer før vask. Ikke overfyll maskinen, gardiner trenger plass til å bevege seg fritt i trommelen for å bli ordentlig rene.' },
      { heading: 'Riktig program og temperatur', content: 'Vask på 30 til 40 grader med finvask eller syntetisk program. Bruk lav sentrifugehastighet, maksimalt 600 omdreininger, for å unngå krøller og krymping. Flytende vaskemiddel er bedre enn pulver for gardiner fordi det løser seg opp helt. Ikke bruk skyllemiddel på syntetiske gardiner da det kan tiltrekke støv.' },
      { heading: 'Tørking og oppheng', content: 'Heng gardinene opp mens de fortsatt er litt fuktige. Tyngdekraften trekker ut krøllene mens de tørker. Ikke bruk tørketrommel med mindre vaskelappen tillater det. Stryk kun hvis nødvendig, og bruk lav varme med et klede mellom strykejernet og gardinstoffet.' },
    ],
    faq: [
      { question: 'Hvor ofte bør gardiner vaskes?', answer: 'Gardiner bør vaskes to til fire ganger i året avhengig av plassering. Kjøkkengardiner trenger hyppigere vask. Gardiner i soverom og stue klarer seg med to ganger i året.' },
    ],
    relatedSlugs: ['vasketemperatur-guide', 'vaskesymboler-guide'],
  },
  {
    slug: 'vaskemaskin-paa-hytta',
    title: 'Vaskemaskin på hytta: Hva du må tenke på',
    metaTitle: 'Vaskemaskin på hytta | Tips for hytteeiere 2026',
    metaDescription: 'Planlegger du vaskemaskin på hytta? Les om vintersikring, vanntilkobling, kapasitet og hvilke modeller som passer for hyttebruk.',
    category: 'kjopsguide',
    excerpt: 'En vaskemaskin på hytta er praktisk, men det er noen spesielle hensyn du må ta for at det skal fungere godt.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Vintersikring er viktigst', content: 'Hvis hytta ikke er oppvarmet om vinteren må du tømme vaskemaskinen for vann før du reiser. Frost kan sprenge slanger, pumpe og ventiler. Kjør et kort sentrifugeringsprogram etter at du har stengt vannet for å tømme rester. Noen hytteeiere heller litt frostvæske i trommelen, men dette kan skade gummipakninger over tid.' },
      { heading: 'Vanntilkobling og avløp', content: 'Mange hytter har begrenset vanntilførsel. Sjekk at vanntrykket er tilstrekkelig, minimum 0.5 bar. Avløpsløsning avhenger av hyttas infrastruktur. Noen bruker direkte avløp til septiktank, andre bruker oppsamlingsbeholder. Sørg for at avløpsslangen har riktig høyde og fall.' },
      { heading: 'Hvilken maskin passer på hytta', content: 'For sporadisk hyttebruk trenger du ikke den mest avanserte maskinen. En enkel frontmater med fem til syv kilo kapasitet er tilstrekkelig. Toppmater er også et godt alternativ fordi de tar mindre plass. Prioriter pålitelighet over funksjoner. Merker som Bosch, Electrolux og ASKO tåler den litt røffere behandlingen en hyttemaskin kan få.' },
    ],
    faq: [
      { question: 'Kan jeg bruke vaskemaskin med brønnvann?', answer: 'Ja, men brønnvann kan ha høyere mineralinnhold som gir mer kalkavleiringer. Bruk litt ekstra avkalkingsmiddel og kjør rengjøringsprogram oftere.' },
    ],
    relatedSlugs: ['installere-vaskemaskin', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'allergivask',
    title: 'Vask for allergikere: Fjern allergener fra klær og sengetøy',
    metaTitle: 'Allergivask vaskemaskin | Fjern støvmidd og pollen',
    metaDescription: 'Slik vasker du klær og sengetøy for å fjerne allergener. Temperatur, vaskemiddel og programmer for allergikere.',
    category: 'kjopsguide',
    excerpt: 'Riktig vask kan drastisk redusere allergiproblemer. Her er de viktigste rådene for allergikervask.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Temperatur dreper allergener', content: 'Støvmidd dør ved 60 grader. For allergikere er det derfor viktig å vaske sengetøy, håndklær og undertøy på minimum 60 grader hver uke. Pollenkorn vaskes ut ved lavere temperaturer, men 40 grader anbefales for å være sikker. Dyrehår og dander fjernes mekanisk ved vask, men ekstra skylling er viktig.' },
      { heading: 'Vaskemiddel og skylling', content: 'Bruk parfymefritt og hypoallergenisk vaskemiddel. Parfyme og fargestoffer i vaskemiddel er blant de vanligste årsakene til kontakteksem. Kjør alltid en ekstra skyllerunde for å fjerne alle vaskemiddelrester fra tøyet. Unngå skyllemiddel helt.' },
      { heading: 'Spesialprogrammer for allergikere', content: 'Mange vaskemaskiner har egne allergiprogrammer eller Steam funksjoner som er spesielt effektive mot allergener. Samsung sin Steam funksjon, LG sitt Allergy Care program og Miele sin AllergoWash er alle designet for å fjerne allergener mer effektivt enn standard programmer. Noen er til og med sertifisert av allergiorganisasjoner.' },
    ],
    faq: [
      { question: 'Bør allergikere bruke tørketrommel?', answer: 'Ja, tørketrommel er faktisk bedre for allergikere enn utendørs tørking fordi klærne ikke eksponeres for pollen. Den høye temperaturen i tørkeren dreper også eventuelle gjenværende støvmidd.' },
    ],
    relatedSlugs: ['vasketemperatur-guide', 'vaskemiddel-guide', 'vaske-babyklaer'],
  },
  {
    slug: 'naar-bytte-vaskemaskin',
    title: 'Når bør du bytte vaskemaskin? 7 tegn på at tiden er inne',
    metaTitle: 'Når bytte vaskemaskin | 7 tegn du bør se etter',
    metaDescription: 'Usikker på om du bør reparere eller bytte? Her er de 7 tegnene på at det er på tide med ny vaskemaskin.',
    category: 'kjopsguide',
    excerpt: 'Noen ganger er det billigere å kjøpe nytt enn å reparere. Her er tegnene du bør se etter.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '6 min',
    sections: [
      { heading: 'Alder og forventet levetid', content: 'En vaskemaskin varer typisk 10 til 12 år. Premiummerker som Miele og ASKO kan vare opptil 20 år. Hvis maskinen din er over ti år gammel og begynner å vise problemer, er det ofte mer økonomisk å bytte enn å reparere. Nye maskiner bruker også vesentlig mindre strøm og vann enn ti år gamle modeller.' },
      { heading: 'De 7 tegnene', content: 'Nummer én er gjentatte feil der du stadig ringer servicetekniker for nye problemer. Nummer to er lekkasje som kommer tilbake etter reparasjon. Nummer tre er unormal støy som bare blir verre. Nummer fire er at klærne ikke blir rene selv om du følger alle instruksjoner. Nummer fem er at maskinen bruker unormalt lang tid på programmene. Nummer seks er rust i trommelen eller på kabinettet. Nummer syv er at reparasjonskostnaden overstiger halvparten av prisen for en ny maskin.' },
      { heading: 'Reparere eller bytte: Regnestykket', content: 'En enkel reparasjon som pumpebytte koster typisk 1500 til 2500 kroner og er nesten alltid verdt det på en maskin under åtte år. Styrekortbytte til 3000 til 5000 kroner er vanskeligere å forsvare på en gammel maskin. Lagerbytte koster 2000 til 4000 kroner og er kun verdt det på premiummerker. Tommelfingerregel: hvis reparasjonen koster mer enn halvparten av en ny maskin, kjøp nytt.' },
    ],
    faq: [
      { question: 'Bør jeg kjøpe samme merke igjen?', answer: 'Ikke nødvendigvis. Merker endrer seg over tid. Les oppdaterte tester og sammenligninger. Det som var best for ti år siden er ikke nødvendigvis best i dag.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'beste-vaskemaskin-2026', 'vanlige-feilkoder'],
  },
  {
    slug: 'sportsklaer-vask',
    title: 'Slik vasker du sportsklær riktig',
    metaTitle: 'Vaske sportsklær | Fjern lukt og bevar funksjon',
    metaDescription: 'Sportsklær trenger spesiell behandling. Lær å fjerne svetteukt og bevare de tekniske egenskapene i treningsklærne.',
    category: 'vedlikehold',
    excerpt: 'Sportsklær i syntetiske materialer kan utvikle permanent svetteukt hvis de vaskes feil. Her er løsningen.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Hvorfor sportsklær lukter', content: 'Syntetiske sportsklær som polyester og nylon holder på lukt mer enn bomull fordi bakterier fester seg sterkere til de glatte fiberoverflatene. Vanlig vask på 30 grader fjerner ikke alltid disse bakteriene, noe som fører til at lukten kommer tilbake så snart klærne blir varme igjen.' },
      { heading: 'Riktig vasketeknikk', content: 'Vask sportsklær på vrangen for å beskytte overflatebehandlinger. Bruk 40 grader for å drepe luktbakterier effektivt. Ikke bruk skyllemiddel fordi det legger seg som et lag oppå fibrene og fanger bakterier. Vask sportsklær separat fra bomullstøy fordi lo fra bomull fester seg i de syntetiske fibrene.' },
      { heading: 'Fjerne permanent svetteukt', content: 'Hvis sportsklærne har utviklet permanent lukt, legg dem i bløt i en bøtte med kaldt vann og en kopp hvit eddik i en time før vask. Eddik dreper bakterier og nøytraliserer lukt. Alternativt kan du bruke natron i vaskemiddelskuffen sammen med vanlig vaskemiddel. Noen maskiner har spesielle sportsprogrammer som er designet for dette.' },
    ],
    faq: [
      { question: 'Kan jeg vaske Gore-Tex i vaskemaskin?', answer: 'Ja, Gore-Tex kan vaskes på 40 grader med flytende vaskemiddel. Ikke bruk pulver eller skyllemiddel. Tørk i tørketrommel på lav varme i 20 minutter for å reaktivere den vannavstøtende behandlingen. Impregner etter vask om nødvendig.' },
    ],
    relatedSlugs: ['vasketemperatur-guide', 'vaskemiddel-guide', 'vaske-sko-i-vaskemaskin'],
  },
  {
    slug: 'black-friday-vaskemaskin',
    title: 'Black Friday vaskemaskin: Slik finner du de ekte tilbudene',
    metaTitle: 'Black Friday vaskemaskin 2026 | Ekte tilbud og tips',
    metaDescription: 'Black Friday er årets beste tid for å kjøpe vaskemaskin. Lær å skille ekte tilbud fra lureri og hvilke merker som gir størst rabatt.',
    category: 'kjopsguide',
    excerpt: 'Black Friday er den beste tiden å kjøpe vaskemaskin, men ikke alle tilbud er like gode. Her er hva du bør vite.',
    publishedDate: '2026-03-28',
    updatedDate: '2026-03-28',
    readingTime: '5 min',
    sections: [
      { heading: 'Når er det billigst å kjøpe', content: 'Black Friday i november gir typisk 15 til 25 prosent rabatt på vaskemaskiner. Januar salg og sommerutsalg kan også gi gode rabatter, men utvalget er ofte mindre. Nye modeller lanseres vanligvis om våren, noe som betyr at fjorårsmodeller selges ut til redusert pris fra mars til mai.' },
      { heading: 'Slik sjekker du om tilbudet er ekte', content: 'Norsk lov krever at butikker viser laveste pris de siste 30 dagene ved annonserte tilbud. Sjekk dette tallet mot tilbudsprisen. Bruk prissammenligningssider som Prisjakt og Prisguiden for å se prishistorikken. Noen butikker hever prisene ukene før Black Friday for å vise større prosentrabatt.' },
      { heading: 'Hvilke merker gir størst rabatt', content: 'De største rabattene finner du typisk på forrige sesongs modeller fra Samsung, LG og Whirlpool. Premium merker som Miele og Bosch gir sjelden mer enn ti til femten prosent rabatt. Budsjettmerker som Beko og Candy har allerede lav pris og rabatteres sjelden mye mer.' },
    ],
    faq: [
      { question: 'Bør jeg vente til Black Friday med å kjøpe?', answer: 'Hvis du kan vente og maskinen din fortsatt fungerer, er november ofte verdt å vente på. Men husk at utvalget kan være begrenset og de beste tilbudene selger raskt.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'beste-vaskemaskin-2026', 'vaskemaskin-under-5000'],
  },

]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getAllArticleSlugs(): string[] {
  return articles.map(a => a.slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(a => a.category === categorySlug)
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs.map(s => articles.find(a => a.slug === s)).filter(Boolean) as Article[]
}
