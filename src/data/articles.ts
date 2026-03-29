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
    title: 'Komplett kjopsguide: Slik velger du vaskemaskin i 2026',
    metaTitle: 'Kjopsguide vaskemaskin 2026 | Alt du maa vite for kjop',
    metaDescription: 'Komplett guide til kjop av vaskemaskin i 2026. Kapasitet, energimerking, funksjoner, stoy og pris. Alt du trenger for aa ta riktig valg.',
    category: 'kjopsguide',
    excerpt: 'Aa velge riktig vaskemaskin handler om mer enn bare pris. Denne guiden tar deg gjennom alt fra kapasitet og energimerking til stoynivaa og smarte funksjoner.',
    publishedDate: '2026-01-15',
    updatedDate: '2026-03-20',
    readingTime: '12 min',
    sections: [
      {
        heading: 'Derfor er riktig valg viktigere enn du tror',
        content: 'En vaskemaskin er en av de hvitevarene du bruker oftest, kanskje sa mye som fire til fem ganger i uken. Over en levetid pa 10 til 15 aar betyr det tusenvis av vaskesykluser. Et feilkjop merkes ikke bare pa stromregningen, men ogsa pa klaerne dine og tiden du bruker pa vask.\n\nDet norske markedet tilbyr hundrevis av modeller fra et titalls merker. Prisene spenner fra under fire tusen kroner til godt over tjue tusen. Men den dyreste maskinen er ikke nodvendigvis den beste for deg. Det handler om aa finne maskinen som passer ditt hushold, dine vaner og ditt budsjett.',
      },
      {
        heading: 'Kapasitet: Hvor stor maskin trenger du egentlig',
        content: 'Kapasiteten maaleles i kilo og refererer til vekten av tort toy maskinen kan ta. En vanlig tommelfingerregel er at et hushold paa en til to personer klarer seg fint med seks til syv kilo. Familier paa tre til fire personer bor ga for aatte til ni kilo, mens storre familier kan ha behov for ti kilo eller mer.\n\nMen husk at dette er maksimalkapasitet. For best vaskeresultat bor trommelen vaere omtrent tre fjerdedeler full. En for stor maskin som aldri fylles opp bruker unodvendig mye energi og vann per vask. En for liten maskin betyr flere vaskrunder og mer slitasje.',
      },
      {
        heading: 'Energimerking: Slik leser du den nye EU skalaen',
        content: 'Siden mars 2021 bruker EU en ny energimerkingsskala fra A til G, der A er best. Den gamle A+++ merking er avviklet fordi nesten alle maskiner havnet i de ovre klassene, noe som gjorde det vanskelig for forbrukere aa skille mellom modeller.\n\nPaa den nye skalaen er det svart faa maskiner som naaer A klassen. De fleste gode modeller ligger paa B eller C. En maskin merket B paa den nye skalaen tilsvarer omtrent en gammel A+++ maskin. Forskjellen i stromforbruk mellom B og D klassen kan utgjore flere hundre kroner i aaret, avhengig av strompris og vaskefrekvens.',
      },
      {
        heading: 'Stoynivaa: Viktigere enn mange tror',
        content: 'Stoynivaaet maaleles i desibel og oppgis for baade vask og sentrifugering. En forskjell paa tre desibel betyr en dobling av lydnivaaet, saa smaa tall har stor praktisk betydning.\n\nFor vask bor du sikte paa under 50 desibel for aa kunne ha maskinen gaaende paa dagtid uten at det forstyrrer. For sentrifugering er under 75 desibel akseptabelt. Noen premiummodeller fra Bosch og Miele kommer ned mot 70 desibel under sentrifugering, noe som gjor en merkbar forskjell om maskinen staar naer stue eller soverom.',
      },
      {
        heading: 'Smarte funksjoner du faktisk bruker',
        content: 'Moderne vaskemaskiner tilbyr et hav av funksjoner, men ikke alle er like nyttige i hverdagen. Automatisk dosering av vaskemiddel er kanskje den mest praktiske funksjonen paa markedet. Baade Bosch sin i-DOS og Miele sin TwinDos doserer riktig mengde vaskemiddel basert paa mengde og tilsmussing. Dette gir bedre vaskeresultat, sparer vaskemiddel og er bedre for miljoet.\n\nDampfunksjon er en annen funksjon mange setter pris paa. Den kan friske opp klaer uten full vask, redusere kroyller og fjerne allergiforlatere. Samsung og LG har de mest avanserte dampfunksjonene.\n\nWi-Fi og appstyring er nyttig for aa starte og overvake vask eksternt, men de fleste bruker det mindre enn de tror naar de forst har kjopt maskinen.',
      },
    ],
    faq: [
      { question: 'Hvor lenge varer en vaskemaskin i gjennomsnitt?', answer: 'En vaskemaskin varer i gjennomsnitt 10 til 12 aar ved normal bruk. Premiummerker som Miele tester for 20 aars levetid, mens budsjettmodeller kan ha kortere levetid.' },
      { question: 'Er det verdt aa kjope en dyr vaskemaskin?', answer: 'Ja, ofte. En dyrere maskin har som regel lavere energiforbruk, storre holdbarhet og bedre vaskeresultat. Over maskinens levetid kan besparelsene paa strom og vaskemiddel utgjore mer enn prisforskjellen.' },
      { question: 'Hva er forskjellen paa 1200 og 1400 omdreininger?', answer: 'Hoyere turtall ved sentrifugering betyr at klaerne blir torrere etter vask, noe som reduserer torketiden. 1400 omdreininger gir omtrent 52 prosent restvanninnhold mot 54 prosent ved 1200. Forskjellen er merkbar, men ikke dramatisk.' },
      { question: 'Trenger jeg virkelig smartfunksjoner paa vaskemaskinen?', answer: 'De fleste klarer seg fint uten Wi-Fi og appstyring. Men automatisk dosering av vaskemiddel er en smartfunksjon som faktisk gjor hverdagen enklere og gir bedre vaskeresultat. Det er den ene smarte funksjonen vi anbefaler aa prioritere.' },
    ],
    relatedSlugs: ['energimerking-forklart', 'toppmatere-vs-frontmatere', 'beste-vasketorkere-2026'],
  },
  {
    slug: 'toppmatere-vs-frontmatere',
    title: 'Toppmater eller frontmater: Hvilken type passer for deg?',
    metaTitle: 'Toppmater vs frontmater vaskemaskin | Sammenligning 2026',
    metaDescription: 'Sammenligning av topp og frontmatere vaskemaskiner. Fordeler, ulemper, plassbruk og pris. Finn ut hvilken type som passer ditt hjem.',
    category: 'toppmatere',
    excerpt: 'Valget mellom toppmater og frontmater handler om plass, budsjett og hvordan du bruker vaskemaskinen. Her er alt du trenger aa vite.',
    publishedDate: '2026-01-20',
    updatedDate: '2026-03-15',
    readingTime: '8 min',
    sections: [
      {
        heading: 'To typer, to helt forskjellige losninger',
        content: 'Toppmaterevaskemaskiner aaapnes fra toppen og er typisk 40 centimeter brede. Frontmaterevaskemaskiner aaapnes fra fronten og er vanligvis 60 centimeter brede. Denne forskjellen i bredde er ofte det som avgjoer valget for mange norske forbrukere, spesielt de som bor i leiligheter med trange vaskerom.\n\nMen det er mer enn bare bredden som skiller dem. Kapasitet, pris, funksjonalitet og holdbarhet varierer ogsa mellom de to typene.',
      },
      {
        heading: 'Plassbruk og installasjon',
        content: 'En toppmater er uslaaelig nar plassen er knapp. Med bare 40 centimeter i bredde kan den staa i trange rom, paa bad og i skap der en frontmater aldri ville faat plass. Du trenger heller ikke plass foran maskinen til aa aapne luken.\n\nFrontmatere krever mer gulvplass, men gir deg muligheten til aa stable en torketrommel paa toppen. Dette betyr at to maskiner kan staa paa plassen til en, men da med bredde paa 60 centimeter. For de som har et eget vaskerom er frontmatere ofte det mest praktiske valget.',
      },
      {
        heading: 'Kapasitet og vaskeresultat',
        content: 'Frontmatere har generelt storre kapasitet enn toppmateere. Mens de fleste toppmateere har en kapasitet paa fem til syv kilo, finnes frontmatere med opptil tolv kilo kapasitet. For storre familier eller de som vasker mye sengetoy og handklaer, er denne forskjellen vesentlig.\n\nVaskeresultatet er sammenlignbart mellom de to typene i samme prisklasse. Frontmatere har imidlertid en litt fordel ved skaaansom vask fordi trommelbevegelsen er mildere mot tekstiler.',
      },
      {
        heading: 'Pris og tilgjengelighet',
        content: 'Toppmateere er typisk noe rimeligere enn sammenlignbare frontmatere. En enkel toppmater fra et anerkjent merke starter rundt tre tusen kroner, mens en tilsvarende frontmater starter naermere fire til fem tusen.\n\nUtvalget av frontmatere er betydelig storre i norske butikker. De fleste merker fokuserer hovedsakelig paa frontmatere, noe som gir deg flere valgmuligheter nar det gjelder funksjoner, kapasitet og design.',
      },
    ],
    faq: [
      { question: 'Varer toppmateere like lenge som frontmatere?', answer: 'Ja, levetiden er sammenlignbar naar du sammenligner maskiner i samme prisklasse. Begge typer varer typisk 10 til 12 aar ved normal bruk.' },
      { question: 'Kan jeg stable torketrommel paa en toppmater?', answer: 'Nei, det er ikke mulig aa stable en torketrommel paa en toppmater fordi luken aaapnes fra toppen. Dette er en av de storste fordelene med frontmatere.' },
      { question: 'Er toppmateere mer stoyende?', answer: 'Ikke nodvendigvis. Stoynivaaet avhenger mer av maskinens kvalitet og motortype enn om den er toppmater eller frontmater. Sjekk desibelverdiene i produktspesifikasjonene.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'beste-toppmater-2026', 'velge-frontmater'],
  },
  {
    slug: 'energimerking-forklart',
    title: 'Energimerking paa vaskemaskiner: Alt du maa vite',
    metaTitle: 'Energimerking vaskemaskin forklart | Ny EU skala 2026',
    metaDescription: 'Forstaa den nye energimerkingen paa vaskemaskiner. Fra A til G, stromforbruk, vannforbruk og hvordan du sparer penger med riktig valg.',
    category: 'energi-og-miljo',
    excerpt: 'Den nye EU energimerkingen kan vaere forvirrende. Her bryter vi den ned saa du forstaar noyaktig hva bokstavene betyr for lommeboken din.',
    publishedDate: '2026-02-01',
    updatedDate: '2026-03-18',
    readingTime: '9 min',
    sections: [
      {
        heading: 'Hvorfor energimerkingen ble endret',
        content: 'Foer 2021 brukte EU en energimerkeskala som gikk fra A+++ til D. Problemet var at nesten alle vaskemaskiner havnet i A+ til A+++ kategoriene, noe som gjorde det nesten umulig for forbrukere aa skille mellom en virkelig energieffektiv maskin og en middels god en.\n\nDen nye skalaen gaar fra A til G og er designet for aa gi mer rom i toppen. Per i dag er det svart faa vaskemaskiner som kvalifiserer for A klassen. De beste modellene paa markedet ligger typisk paa B, og de fleste gode maskiner paa C eller D.',
      },
      {
        heading: 'Slik leser du energietiketten',
        content: 'Energietiketten inneholder mer informasjon enn bare energiklassen. Den viser ogsa forventet aaarlig energiforbruk i kilowattimer, vannforbruk per syklus i liter, kapasitet i kilo, varighet paa standardprogrammet, stoynivaa under sentrifugering i desibel, og stoyklasse fraa A til D.\n\nAlt dette er maalt under standardiserte testforhold med et program kalt Eco 40-60. Dette programmet er designet for aa vaere det mest energieffektive valget for normalt skittent bomullstoy.',
      },
      {
        heading: 'Hva energiklassen betyr i kroner og oere',
        content: 'La oss si du vasker fire ganger i uken, som er gjennomsnittlig for en norsk familie. Med en strompris paa to kroner per kilowattime ser regnestykket omtrent slik ut. En maskin i energiklasse B bruker rundt 50 kilowattimer i aaret, noe som gir en stromkostnad paa omtrent 100 kroner. En maskin i klasse D bruker rundt 75 kilowattimer, altsaa 150 kroner i aaret.\n\nForskjellen virker liten per aar, men over maskinens levetid paa 10 til 15 aar summerer det seg. Og husk at stromprisen i Norge kan variere kraftig. I perioder med hoy strompris kan forskjellen mellom energiklassene bli langt storre.',
      },
    ],
    faq: [
      { question: 'Er energiklasse A vaskemaskin mulig aa faa kjopt?', answer: 'Per 2026 finnes det svart faa modeller i energiklasse A. Skalaen er designet med rom for fremtidig teknologiutvikling. De beste tilgjengelige maskinene ligger paa B klassen.' },
      { question: 'Bruker Eco programmet virkelig mye mindre strom?', answer: 'Ja, Eco 40-60 programmet bruker typisk 40 til 60 prosent mindre energi enn et vanlig 40 eller 60 graders program. Ulempen er at vasketiden er lenger, ofte to til tre timer.' },
      { question: 'Teller vannforbruk ogsa for miljoet?', answer: 'Absolutt. En moderne vaskemaskin bruker rundt 50 liter per vask, mens eldre modeller kan bruke over 100 liter. Lavere vannforbruk betyr ogsa lavere energiforbruk fordi mindre vann maa varmes opp.' },
    ],
    relatedSlugs: ['komplett-kjopsguide-2026', 'spare-strom-vaskemaskin'],
  },
  {
    slug: 'rengjore-vaskemaskin',
    title: 'Slik rengjor du vaskemaskinen: Komplett vedlikeholdsguide',
    metaTitle: 'Rengjore vaskemaskin | Steg for steg vedlikeholdsguide',
    metaDescription: 'Laer aa rengjore vaskemaskinen skikkelig. Fjern kalk, mugg og vond lukt med enkle midler du allerede har hjemme. Komplett vedlikeholdsguide.',
    category: 'vedlikehold',
    excerpt: 'Vaskemaskinen din rengjor klaerne dine, men hvem rengjor vaskemaskinen? Her er en komplett guide til vedlikehold som forlenger levetiden.',
    publishedDate: '2026-02-10',
    updatedDate: '2026-03-22',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hvorfor vaskemaskinen trenger rengjoring',
        content: 'Det hoeres kanskje rart ut at en maskin som bruker vann og saaape trenger rengjoring, men det er faktisk en av de viktigste tingene du kan gjore for aa forlenge maskinens levetid. Vaskemiddelrester, kalk fra vannet, lo fra tekstiler og fuktighet skaper et perfekt miljoe for bakterier og mugg.\n\nResultatet er vond lukt, daaaarligere vaskeresultat og i verste fall skade paa maskinens komponenter. Kalk setter seg spesielt paa varmeelementer og kan fore til hoeyere stromforbruk og kortere levetid.',
      },
      {
        heading: 'Maanedlig rengjoring av trommel og pakkning',
        content: 'Kjor et tomt vaskeprogram paa 90 grader en gang i maaneden. Tilsett enten en kopp hvit eddik eller en halv kopp natron i vaskemiddelskuffen. Dette dreper bakterier og loser opp avleiringer inne i trommelen og slangene.\n\nEtter hver vask bor du torke av gummipakkningen rundt luken med en torr klut. Fuktighet som samler seg her er den vanligste aarsaken til mugg og vond lukt. La ogsa luken staa paa gloett etter vask slik at fuktigheten kan fordampe.',
      },
      {
        heading: 'Rengjoring av vaskemiddelskuff og filter',
        content: 'Vaskemiddelskuffen bor tas ut og rengjores hver maaned. Bruk varmt vann og en gammel tannborste for aa fjerne vaskemiddelrester som har satt seg fast. Sjekk ogsa innsiden av holderen der skuffen sitter. Her kan det samle seg slim og bakterier.\n\nPumpefileteret nederst paa frontmatere bor sjekkes og rengjores hver andre til tredje maaned. Ha en klut eller et fat klar for vannet som kommer ut. Du finner vanligvis smaa gjenstander som mynter, haarnaaler og lo som har samlet seg opp.',
      },
    ],
    faq: [
      { question: 'Kan jeg bruke klor for aa rengjore vaskemaskinen?', answer: 'Det er mulig men ikke anbefalt som fast rutine. Klor er aggressivt og kan over tid skade gummipakninger og plastdeler. Hvit eddik eller sitrunsyre er skaaansommere alternativer som fungerer like godt.' },
      { question: 'Hvor ofte bor jeg rengjore vaskemaskinen?', answer: 'En grundig rengjoring med tomt 90 graders program bor gjores en gang i maaneden. Pakkningen bor torkes etter hver vask, og filteret rengjores hver andre til tredje maaned.' },
      { question: 'Hjelper det aa la luken staa aapen?', answer: 'Ja, dette er et av de enkleste og mest effektive tiltakene mot mugg og vond lukt. La luken og vaskemiddelskuffen staa paa gloett etter hver vask slik at fuktigheten kan fordampe.' },
    ],
    relatedSlugs: ['vanlige-feilkoder', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'vanlige-feilkoder',
    title: 'Vanlige feilkoder paa vaskemaskiner og hva de betyr',
    metaTitle: 'Feilkoder vaskemaskin | Oversikt og losninger alle merker',
    metaDescription: 'Oversikt over vanlige feilkoder paa vaskemaskiner fra Samsung, Bosch, LG, Electrolux og flere. Finn ut hva koden betyr og hva du kan gjore selv.',
    category: 'vedlikehold',
    excerpt: 'Naar vaskemaskinen viser en feilkode er det ikke alltid grunn til panikk. Mange feil kan du fikse selv paa noen faa minutter.',
    publishedDate: '2026-02-15',
    updatedDate: '2026-03-20',
    readingTime: '10 min',
    sections: [
      {
        heading: 'Slik tolker du feilkoder',
        content: 'Moderne vaskemaskiner har innebygd diagnostikk som viser feilkoder paa displayet naar noe ikke fungerer som det skal. Disse kodene bestaaar vanligvis av en eller to bokstaver etterfulgt av et tall, for eksempel E1, F2 eller dE.\n\nHver produsent bruker sitt eget kodesystem, saa en E1 paa en Samsung betyr noe helt annet enn E1 paa en Bosch. Heldigvis foelger de fleste merker et logisk system der bestemte bokstaver refererer til bestemte deler av maskinen.',
      },
      {
        heading: 'Dreneringsproblemer: Den vanligste feilen',
        content: 'Feilkoder knyttet til drenering er de aller vanligste og heldigvis ofte de enkleste aa fikse selv. Samsung bruker 5E eller SE, Bosch bruker F18 eller E18, LG bruker OE, og Electrolux bruker E21.\n\nForste steg er alltid aa sjekke pumpefileteret. Skru av maskinen, legg et haandkle paa gulvet og aapne filterluken. Fjern eventuelle fremmedlegemer som mynter, haarnaaler eller lo. Sjekk ogsa at avlopsslangen ikke er knekket eller blokkert.\n\nHvis filteret er rent og slangen er fri, kan problemet vaere en defekt dreneringspumpe. Da bor du kontakte en servicetekniker.',
      },
      {
        heading: 'Vanninntak og lukeproblemer',
        content: 'Feilkoder for vanninntak betyr som regel at maskinen ikke faar vann raskt nok. Sjekk at vanntilforselskranen er helt aapen og at inntaksslangen ikke er knekket. Kontroller ogsa at filteret i tilkoblingen ved kranen ikke er tilstoppet.\n\nLukeproblemer, som dE paa Samsung eller F16 paa Bosch, betyr at maskinen ikke registrerer at luken er ordentlig lukket. Sjekk at det ikke sitter klaer i veien for luken og at lukemekanismen ikke er skadet.',
      },
    ],
    faq: [
      { question: 'Bor jeg ringe servicetekniker med en gang?', answer: 'Ikke nodvendigvis. Mange feilkoder, spesielt de relatert til drenering og vanninntak, kan fikses selv paa noen minutter. Proev de enkle losningene foerst. Kontakt service hvis feilen vedvarer etter at du har sjekkket de vanlige aarsakene.' },
      { question: 'Koster det mye aa faa reparert vaskemaskin?', answer: 'En servicetekniker tar typisk 500 til 800 kroner i utrykningskostnad pluss deler. Enkle reparasjoner som pumpebytte koster totalt 1500 til 2500 kroner. Styrekortbytte kan komme opp i 3000 til 5000 kroner.' },
      { question: 'Kan jeg nullstille feilkoden selv?', answer: 'De fleste feilkoder kan nullstilles ved aa slaa av maskinen og vente noen minutter foer du slaar den paa igjen. Men husk at koden vises av en grunn. Hvis du nullstiller uten aa fikse problemet, vil koden sannsynligvis komme tilbake.' },
    ],
    relatedSlugs: ['rengjore-vaskemaskin', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'beste-toppmater-2026',
    title: 'Beste toppmaterevaskemaskiner i 2026',
    metaTitle: 'Beste toppmater vaskemaskin 2026 | Topp 5 anbefalinger',
    metaDescription: 'Oversikt over de beste toppmaterevaskmaskinene i 2026. Sammenligning av modeller fra Electrolux, Whirlpool, Miele og flere. Oppdatert guide.',
    category: 'toppmatere',
    excerpt: 'Vi har gjennomgaatt toppmateere fra alle store merker og sammenstilt det viktigste du trenger aa vite for aa velge riktig.',
    publishedDate: '2026-02-20',
    updatedDate: '2026-03-25',
    readingTime: '8 min',
    sections: [
      {
        heading: 'Derfor bor du vurdere en toppmater',
        content: 'Toppmateere har en unik plass i det norske markedet. Med en bredde paa bare 40 centimeter passer de steder der en standard 60 centimeter frontmater rett og slett ikke faar plass. Paa smaa bad, i trange garderobeskap eller i eldre leiligheter der vaskerommet ikke var planlagt for store hvitevarer er toppmateren det eneste realistiske alternativet.\n\nTil tross for den smalere stoerrelsen tilbyr moderne toppmatere opptil syv kilo kapasitet, noe som er tilstrekkelig for de fleste en til tre personers hushold.',
      },
      {
        heading: 'Electrolux EW6T5226C4: Vaar anbefaling',
        content: 'Electrolux sin toppmater er vaart toppvalg for de fleste kjopere. Den tilbyr seks kilo kapasitet, energiklasse C, og Electrolux sin SensiCare teknologi som automatisk tilpasser vasketid og vannforbruk etter mengde. Stoynivaaet er 47 desibel under vask og 73 under sentrifugering, noe som er godt for en toppmater.\n\nPrisen ligger rundt fem tusen kroner, noe som gir et veldig godt forhold mellom kvalitet og pris. Electrolux har ogsa et godt servicenettverk i Norge, noe som er verdifullt hvis noe skulle gaa galt.',
      },
      {
        heading: 'Premiumalternativet fra Miele',
        content: 'Miele WW690 WPM er det dyreste alternativet paa listen, med en pris rundt ti tusen kroner. Men du faar det som mange mener er den best bygde toppmateeren paa markedet. Miele sin beroemte 20 aaars holdbarhetstesting gjelder ogsa for deres toppmateere.\n\nMaskinen har syv kilo kapasitet, energiklasse B, og Miele sin CapDosing funksjon for spesialvaskemiddel i kapsler. Bygge kvaliteten er i en helt egen klasse, og mange Miele eiere rapporterer at maskinene varer vesentlig lenger enn konkurrentene.',
      },
    ],
    faq: [
      { question: 'Er toppmateere stoeerre enn frontmatere?', answer: 'Nei, toppmateere er faktisk ofte smalere (40 cm vs 60 cm), men de er noe hoeyere. Stoynivaaet varierer mer etter maskinens kvalitet enn etter type.' },
      { question: 'Kan jeg vaske dyne i en toppmater?', answer: 'Det avhenger av kapasiteten. En enkel syntetdyne kan gaa i en toppmater med syv kilo kapasitet, men store dundyner krever minimum aatte til ni kilo, noe som kun finnes i frontmatere.' },
    ],
    relatedSlugs: ['toppmatere-vs-frontmatere', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'vasketorker-verdt-det',
    title: 'Er en vasketorker verdt det? Fordeler og ulemper',
    metaTitle: 'Vasketorker: Er det verdt det? | Aarlig sammenligning 2026',
    metaDescription: 'Er en kombinert vaskemaskin og torketrommel verdt investeringen? Les om fordeler, ulemper og hvem en vasketorker passer for.',
    category: 'vasketorker',
    excerpt: 'En vasketorker gir deg to maskiner i en, men det finnes begrensninger du bor kjenne til foer du bestemmer deg.',
    publishedDate: '2026-02-25',
    updatedDate: '2026-03-20',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hva er en vasketorker og hvordan fungerer den',
        content: 'En vasketorker er en maskin som baade vasker og torker klaer i samme trommel. Du legger inn skittent toey, velger program, og tar ut rent og toert toey etter endt syklus. Det hoeres ideelt ut, og for mange er det nettopp det.\n\nMaskinen fungerer som en vanlig vaskemaskin under vaskesyklusen. Etter at vannet er dreneert og klaerne er sentrifugert, starter torkesyklusen. De fleste vasketorkere bruker kondenstorking, der varm luft sirkuleres gjennom trommelen og fuktigheten samles opp i en beholder eller ledes ut gjennom avloepet.',
      },
      {
        heading: 'Den store begrensningen: Kapasitet ved toerking',
        content: 'Her kommer den viktigste ulempen med vasketorkere. Mens maskinen typisk kan vaske aatte til ti kilo, kan den bare toerke fire til seks kilo. Det betyr at du enten maa ta ut halvparten av toeyet foer toerking, eller bare fylle halv maskin fra starten av.\n\nDette er ikke et problem hvis du planlegger for det, men det er viktig aa vaere klar over det foer kjoep. Hvis du er en familie paa fire som vasker full maskin, maa du enten dele toerkerunden i to eller akseptere at noe toey toerkes paa stativ.',
      },
      {
        heading: 'Hvem passer en vasketorker for',
        content: 'Vasketorkere er ideelle for leiligheter og hjem der du ikke har plass til baade vaskemaskin og torketrommel. De passer ogsa godt for en til to personers hushold der vaskmengdene er moderate.\n\nFor storre familier eller de som vasker mye og ofte, anbefaler vi heller separate maskiner hvis du har plassen. To separate maskiner gir deg storre fleksibilitet og muligheten til aa vaske og toerke samtidig.',
      },
    ],
    faq: [
      { question: 'Bruker vasketorkere mer stroem enn separate maskiner?', answer: 'Ja, vasketorkere bruker generelt mer energi per toerkesyklus enn en dedikert torketrommel med varmepumpe. Forskjellen er mest merkbar ved toerking. Vaskedelen er sammenlignbar.' },
      { question: 'Varer vasketorkere like lenge som vanlige vaskemaskiner?', answer: 'Levetiden er sammenlignbar med vanlige vaskemaskiner, men fordi de har flere komponenter kan det vaere flere ting som potensielt kan gaa i stykker. Godt vedlikehold er ekstra viktig.' },
    ],
    relatedSlugs: ['beste-vasketorkere-2026', 'komplett-kjopsguide-2026', 'toppmatere-vs-frontmatere'],
  },
  {
    slug: 'spare-strom-vaskemaskin',
    title: 'Slik sparer du stroem med vaskemaskinen',
    metaTitle: 'Spar stroem vaskemaskin | 8 enkle tips som kutter regningen',
    metaDescription: 'Aatte praktiske tips for aa redusere stroemforbruket paa vaskemaskinen. Spar hundrevis av kroner i aaret med smaa endringer i vaskevanene.',
    category: 'energi-og-miljo',
    excerpt: 'Smaa endringer i vaskevanene kan spare deg for hundrevis av kroner i aaret. Her er de mest effektive tipsene.',
    publishedDate: '2026-03-01',
    updatedDate: '2026-03-20',
    readingTime: '6 min',
    sections: [
      {
        heading: 'Temperaturen er den stoerste stroemtyven',
        content: 'Oppvarming av vannet staar for omtrent 80 prosent av stroemforbruket i en vaskemaskin. Det betyr at den enkleste og mest effektive maaaten aa spare stroem paa er aa vaske paa lavere temperatur.\n\nModerne vaskemidler er designet for aa fungere godt allerede ved 30 grader. For normalt skittent hverdagstoey er det sjaelden noodvendig med hoeyere temperatur. Reserver 60 grader for sengetoey, haandklaer og sterkt tilsmusset toey. 90 grader trenger du nesten aldri, bortsett fra den maanedlige rengjoeringsvask.',
      },
      {
        heading: 'Fyll maskinen riktig',
        content: 'En halvfull maskin bruker nesten like mye stroem og vann som en full maskin. Ved aa samle opp toey og kjoeere fulle vaskrunder reduserer du antall vask og dermed det totale forbruket.\n\nMen ikke overfyll heller. En overfylt maskin gir daarligere vaskeresultat og mer slitasje. Tommelfingerregelen er at du skal kunne stikke en haand ned mellom tooeyet og trommelens overkant.',
      },
      {
        heading: 'Bruk Eco programmet',
        content: 'Eco 40-60 programmet bruker betydelig mindre energi enn standardprogrammer. Ulempen er at det tar lenger tid, ofte to til tre timer. Men fordi de fleste av oss kan sette paa maskinen og gaa, er dette sjelden et reelt problem.\n\nHvis du har stroem avtale med spotpris kan du spare enda mer ved aa sette vaskemaskinen paa timer og la den kjoeere paa nattestid naar stroemprisen typisk er lavest.',
      },
    ],
    faq: [
      { question: 'Hvor mye kan jeg spare ved aa vaske paa 30 grader?', answer: 'Ved aa senke temperaturen fra 60 til 30 grader sparer du omtrent 50 til 60 prosent av stroemmen per vask. For en gjennomsnittlig familie som vasker fire ganger i uken kan dette utgjoeere 200 til 400 kroner i aaret.' },
      { question: 'Blir klaerne rene paa 30 grader?', answer: 'Ja, for normalt skittent hverdagstoey er 30 grader tilstrekkelig med et moderne vaskemiddel. Bakterier dreper du mest effektivt ved 60 grader, saa sengetoey og haandklaer boer fortsatt vaskes paa hoeyere temperatur.' },
    ],
    relatedSlugs: ['energimerking-forklart', 'komplett-kjopsguide-2026'],
  },
  {
    slug: 'velge-frontmater',
    title: 'Slik velger du riktig frontmater vaskemaskin',
    metaTitle: 'Velge frontmater vaskemaskin | Guide til riktig valg 2026',
    metaDescription: 'Komplett guide til aa velge riktig frontmater vaskemaskin. Kapasitet, funksjoner, merker og pris for norske hjem i 2026.',
    category: 'frontmatere',
    excerpt: 'Frontmatere dominerer det norske markedet med god grunn. Men med hundrevis av modeller kan det vaere vanskelig aa velge. Denne guiden hjelper deg.',
    publishedDate: '2026-03-05',
    updatedDate: '2026-03-22',
    readingTime: '9 min',
    sections: [
      {
        heading: 'Hva gjor en frontmater til riktig valg',
        content: 'Frontmatere er den klart mest populaere vaskemaskintypen i Norge, og det er flere gode grunner til det. De tilbyr stoerre kapasitet enn toppmatere, gir mulighet for stabling med torketrommel, og har generelt et bredere utvalg av funksjoner og programmer.\n\nFor de fleste norske hjem med et dedikert vaskerom eller plass paa badet er en frontmater det naturlige valget. Spoeersmaalet er ikke om du skal velge frontmater, men hvilken frontmater du skal velge.',
      },
      {
        heading: 'Kapasitet: Finn din gulltall',
        content: 'Frontmatere kommer med kapasiteter fra seks til tolv kilo. For en til to personer er seks til syv kilo tilstrekkelig. Tre til fire personer bor sikte paa aatte til ni kilo. Stoeerre familier har nytte av ti kilo eller mer, spesielt hvis de vasker mye sengetoey og haandklaer.\n\nHusk at kapasiteten refererer til toerrt toey. En full maskin med aatte kilo kapasitet betyr at du kan legge inn aatte kilo toerre klaer. Vaate klaer veier mer, men det er vekten foer vask som teller.',
      },
      {
        heading: 'De viktigste funksjonene aa vurdere',
        content: 'Automatisk dosering av vaskemiddel er den funksjonen vi mener gir mest verdi i hverdagen. Den sikrer optimal mengde vaskemiddel i hver vask, noe som gir bedre resultat og sparer baade vaskemiddel og miljoeet.\n\nDampfunksjon er nyttig for aa friske opp klaer mellom vask og redusere kroyller. Hurtigvask paa 15 til 30 minutter er praktisk for lett tilsmussede plagg som trengs raskt. Og et godt Eco program er viktig for aa holde stroemkostnadene nede.',
      },
    ],
    faq: [
      { question: 'Hva er forskjellen paa 1200 og 1600 omdreininger?', answer: 'Hoeyere sentrifugehastighet betyr toeerrere klaer etter vask. Forskjellen er omtrent fire prosentpoeng i restvanninnhold. 1400 omdreininger er tilstrekkelig for de fleste og gir et godt kompromiss mellom torkeresultat og stoey.' },
      { question: 'Er bredde paa 60 cm standard for alle frontmatere?', answer: 'Ja, 60 centimeter er standardbredden. Det finnes noen smale frontmatere paa 45 centimeter, men utvalget er begrenset og kapasiteten er lavere enn for standardbredde modeller.' },
    ],
    relatedSlugs: ['toppmatere-vs-frontmatere', 'komplett-kjopsguide-2026', 'energimerking-forklart'],
  },
  {
    slug: 'vaskemaskin-under-5000',
    title: 'Beste vaskemaskiner under 5000 kroner i 2026',
    metaTitle: 'Vaskemaskin under 5000 kr | Beste budsjettmodeller 2026',
    metaDescription: 'Faa en god vaskemaskin uten aa sprenge budsjettet. Oversikt over de beste modellene under 5000 kroner i det norske markedet.',
    category: 'kjopsguide',
    excerpt: 'Du trenger ikke bruke en formue for aa faa en god vaskemaskin. Her er de beste alternativene under fem tusen kroner.',
    publishedDate: '2026-03-10',
    updatedDate: '2026-03-25',
    readingTime: '7 min',
    sections: [
      {
        heading: 'Hva kan du forvente for under fem tusen kroner',
        content: 'For under fem tusen kroner faar du en vaskemaskin som dekker de grunnleggende behovene godt. Du faar typisk syv til aatte kilo kapasitet, energiklasse C eller D, og de viktigste vaskeprogrammene. Du maa som regel klare deg uten automatisk dosering, dampfunksjon og appstyring.\n\nMen det betyr ikke at du faar en daarlig maskin. Mange budsjettmodeller fra anerkjente merker vasker utmerket og har akseptabel holdbarhet. Noekkelen er aa velge riktig merke og modell.',
      },
      {
        heading: 'Whirlpool FFS 7259 B EE: Best i test for budsjettet',
        content: 'Whirlpool sin syvkilomodell er vaart toppvalg under fem tusen kroner. Den tilbyr 6th Sense teknologi som automatisk tilpasser vannmengde og energiforbruk, FreshCare+ som holder klaerne friske etter endt vask, og 1200 omdreininger ved sentrifugering.\n\nMaskinen er i energiklasse C og bruker 52 kilowattimer per aar ved standardbruk. Stoynivaaet er 49 desibel under vask, noe som er akseptabelt. Den store fordelen er at du faar smartfunksjoner som mange konkurrenter i denne prisklassen ikke tilbyr.',
      },
      {
        heading: 'Naar bor du vurdere aa bruke litt mer',
        content: 'Hvis budsjettet kan strekkes til seks til syv tusen kroner aapner det seg vesentlig flere muligheter. Du faar tilgang til bedre energiklasser, stoeerre kapasitet og merker som Bosch og Electrolux som generelt har hoeyere byggekvalitet.\n\nSpesielt energiklassen kan gjoeere en forskjell over tid. En maskin i klasse B versus D kan spare deg noen hundrelapper i aaret i stroem, noe som over ti aar utjevner prisforskjellen.',
      },
    ],
    faq: [
      { question: 'Er billige vaskemaskiner paalitelige?', answer: 'Budsjettmodeller fra anerkjente merker som Whirlpool, Beko og Candy er generelt paalitelige for normal bruk. Forvent en levetid paa aatte til ti aar, noe som er litt kortere enn premiummodeller men fortsatt god verdi for pengene.' },
      { question: 'Bor jeg heller kjoepe brukt?', answer: 'Brukte vaskemaskiner kan vaere risikabelt fordi du ikke vet historikken til maskinen. Nye budsjettmodeller gir deg garanti og forutsigbar levetid, noe som ofte gjor dem til et tryggere valg.' },
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
