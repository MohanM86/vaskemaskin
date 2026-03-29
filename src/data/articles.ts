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
