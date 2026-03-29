export interface Brand {
  slug: string
  name: string
  country: string
  founded: number
  description: string
  longDescription: string
  strengths: string[]
  priceRange: "budsjett" | "mellomklasse" | "premium"
  energyFocus: string
  popularModels: string[]
  warranty: string
  seoTitle: string
  seoDescription: string
  faq: { question: string; answer: string }[]
}

export const brands: Brand[] = [
  {
    slug: "samsung",
    name: "Samsung",
    country: "Sor-Korea",
    founded: 1938,
    description: "Samsung er en av verdens storste elektronikkprodusenter og tilbyr et bredt utvalg vaskemaskiner med avansert teknologi som AI-styrt vask og dampfunksjon.",
    longDescription: "Samsung har vokst til a bli en av de mest dominerende aktørene innen hvitevarer globalt. Deres vaskemaskiner er kjent for innovativ teknologi, inkludert EcoBubble som løser opp vaskemiddel i kaldt vann for bedre rengjøring ved lavere temperaturer. AddWash-funksjonen lar deg legge til plagg midt i vaskeprogrammet gjennom en luke i døren. Samsung tilbyr maskiner i alle prisklasser, fra enkle toppmatede modeller til avanserte front-loadere med Wi-Fi og AI-styring. I Norge er Samsung spesielt populær for sine kombinerte vaske- og tørketrommler, som passer godt i mindre leiligheter.",
    strengths: ["EcoBubble-teknologi for kaldtvask", "AddWash-luke for a legge til plagg underveis", "Stor kapasitet opptil 12 kg", "Wi-Fi og SmartThings-app", "AI-optimaliserte vaskeprogrammer"],
    priceRange: "mellomklasse",
    energyFocus: "EcoBubble reduserer energiforbruket med opptil 70 prosent sammenlignet med vanlig vask ved 40 grader.",
    popularModels: ["WW90T554DAW", "WW11BBA046AW", "WD90T654DBE"],
    warranty: "2 ar garanti, 10 ar pa motor",
    seoTitle: "Samsung vaskemaskin | Test, modeller og priser 2026",
    seoDescription: "Alt om Samsung vaskemaskiner. Se beste modeller, priser, EcoBubble-teknologi og brukererfaringer. Finn riktig Samsung vaskemaskin for ditt behov.",
    faq: [
      { question: "Er Samsung vaskemaskiner gode?", answer: "Samsung vaskemaskiner scorer gjennomgaende godt i tester og er spesielt kjent for EcoBubble-teknologi som vasker rent ved lave temperaturer. De tilbyr god verdi for pengene i mellomklassen." },
      { question: "Hva er EcoBubble pa Samsung vaskemaskin?", answer: "EcoBubble er Samsungs teknologi som løser opp vaskemiddel til skum før vasken starter. Dette gir bedre rengjøring ved lavere temperaturer og sparer energi." },
      { question: "Hvor lenge varer en Samsung vaskemaskin?", answer: "Med riktig vedlikehold varer en Samsung vaskemaskin typisk 8 til 12 ar. Samsung gir 10 ars garanti pa invertermotoren." }
    ]
  },
  {
    slug: "lg",
    name: "LG",
    country: "Sor-Korea",
    founded: 1958,
    description: "LG er kjent for sine vaskemaskiner med DirectDrive-motor som gir stille og energieffektiv drift. TurboWash sparer tid uten a ga pa kompromiss med vaskeresultatet.",
    longDescription: "LG har bygget et sterkt rykte innen hvitevarer gjennom innovasjon og kvalitet. Deres DirectDrive-motor er festet direkte pa trommelen uten rem og gir dermed svart lite vibrasjon og støy. TurboWash-teknologien bruker høytrykkssprut for a vaske plaggene raskere. LG sine vaskemaskiner støtter ThinQ-appen for fjernstyring og diagnostikk. I det norske markedet er LG spesielt populør for større husholdninger takket vare høy kapasitet og pålitelig drift over tid.",
    strengths: ["DirectDrive-motor uten rem", "TurboWash for raskere vask", "6 Motion-teknologi med seks vaskebevegelsar", "AI DD som gjenkjenner stoff", "ThinQ-app for fjernstyring"],
    priceRange: "mellomklasse",
    energyFocus: "LG sine invertermotorer bruker opptil 36 prosent mindre energi enn konvensjonelle motorer. AI DD-funksjonen optimaliserer vann og energibruk basert pa stofftype.",
    popularModels: ["F4WR7010SGW", "F4Y710BBTA1", "F2WR708S2W"],
    warranty: "2 ar garanti, 10 ar pa DirectDrive-motor",
    seoTitle: "LG vaskemaskin | Test, priser og modelloversikt 2026",
    seoDescription: "Komplett guide til LG vaskemaskiner. DirectDrive-motor, TurboWash og AI DD forklart. Se priser, tester og finn beste LG-modell.",
    faq: [
      { question: "Er LG vaskemaskin bedre enn Samsung?", answer: "Begge merker er svart gode. LG har ofte litt lavere støyniva takket vare DirectDrive-motoren, mens Samsung er kjent for EcoBubble. Valget avhenger av hvilke funksjoner du prioriterer." },
      { question: "Hva betyr DirectDrive pa LG vaskemaskin?", answer: "DirectDrive betyr at motoren sitter direkte pa trommelen uten bruk av rem eller trinse. Dette gir mindre slitasje, lavere støy og lengre levetid." },
      { question: "Kan jeg styre LG vaskemaskin fra mobilen?", answer: "Ja, LG sine vaskemaskiner med Wi-Fi kan styres via ThinQ-appen. Du kan starte og stoppe vask, sjekke status og kjøre diagnostikk fra telefonen." }
    ]
  },
  {
    slug: "bosch",
    name: "Bosch",
    country: "Tyskland",
    founded: 1886,
    description: "Bosch er et tysk kvalitetsmerke som produserer holdbare og energieffektive vaskemaskiner. Kjent for pålitelighet, lav støy og gjennomtenkt tysk ingeniørkunst.",
    longDescription: "Bosch tilhører BSH Hausgerate og har produsert hvitevarer i over et arhundre. Deres vaskemaskiner er bygget for a vare og er kjent for svart lav feilfrekvens. EcoSilence Drive-motoren er borstefri og gir nesten lydløs drift. VarioPerfect-funksjonen lar deg velge mellom a spare tid med SpeedPerfect eller energi med EcoPerfect. ActiveWater Plus-systemet tilpasser vannmengden til vaskeladningen. I Norge er Bosch et av de mest solgte merkene og er spesielt populart blant de som setter pålitelighet over alt annet.",
    strengths: ["EcoSilence Drive borstefri motor", "VarioPerfect med SpeedPerfect og EcoPerfect", "ActiveWater Plus vannbesparelse", "AntiVibration sidepaneler", "Tysk kvalitet og lang levetid"],
    priceRange: "premium",
    energyFocus: "Bosch sine toppmodeller oppnar energiklasse A med EcoPerfect-modus som reduserer energiforbruket med opptil 50 prosent.",
    popularModels: ["WGG244A0BY", "WGG2540ESN", "WAU28P99SN"],
    warranty: "2 ar garanti, opptil 10 ar pa motor",
    seoTitle: "Bosch vaskemaskin | Tysk kvalitet, tester og priser 2026",
    seoDescription: "Alt om Bosch vaskemaskiner. Se tester, priser og modelloversikt. Tysk kvalitet med EcoSilence Drive og VarioPerfect. Finn riktig Bosch-modell.",
    faq: [
      { question: "Er Bosch vaskemaskin verdt prisen?", answer: "Bosch koster ofte litt mer enn konkurrentene, men kompenserer med lang levetid, lavt støyniva og lav feilfrekvens. For mange er det en god langsiktig investering." },
      { question: "Hva er forskjellen pa Bosch og Siemens vaskemaskin?", answer: "Bosch og Siemens tilhører samme konsern (BSH) og deler ofte de samme motorene og teknologiene. Bosch fokuserer pa funksjonelt design, mens Siemens ofte har flere premiumfunksjoner." },
      { question: "Hvor stille er Bosch vaskemaskin?", answer: "Bosch sine vaskemaskiner med EcoSilence Drive ligger typisk pa 47 til 49 dB under vask og rundt 71 til 74 dB under sentrifugering. Det er blant de stilleste pa markedet." }
    ]
  },
  {
    slug: "siemens",
    name: "Siemens",
    country: "Tyskland",
    founded: 1847,
    description: "Siemens lager premiumvaskemaskiner med avansert teknologi. iDos-systemet doserer vaskemiddel automatisk, og Home Connect-appen gir full fjernkontroll.",
    longDescription: "Siemens er premiummerket i BSH-familien og posisjonerer seg over Bosch med ekstra funksjoner og mer eksklusivt design. iDos-systemet er den mest avanserte automatiske doseringen pa markedet og maler nøyaktig riktig mengde vaskemiddel og skyllemiddel for hver vask basert pa tøymengde, skitten-grad og vannhardhet. Home Connect-appen gir full kontroll over maskinen fra mobilen. I Norge er Siemens forstevalget for mange som ønsker det aller beste innen vasketeknologi og ikke kompromisser pa kvalitet.",
    strengths: ["iDos automatisk dosering", "Home Connect-app med fjernkontroll", "sensoFresh-program som fjerner lukt med ozon", "antiFlekk-system for 16 flekktyper", "iQdrive borstefri motor"],
    priceRange: "premium",
    energyFocus: "iDos-systemet sparer opptil 38 prosent vaskemiddel per vask. Kombinert med iQdrive-motoren oppnar toppmodellene energiklasse A.",
    popularModels: ["WG54B2A7SN", "WM14N2G7SN", "WG44B2070"],
    warranty: "2 ar garanti, opptil 10 ar pa motor",
    seoTitle: "Siemens vaskemaskin | iDos, tester og priser 2026",
    seoDescription: "Komplett oversikt over Siemens vaskemaskiner. iDos automatisk dosering, Home Connect og premiumkvalitet. Se modeller, tester og priser.",
    faq: [
      { question: "Hva er iDos pa Siemens vaskemaskin?", answer: "iDos er Siemens sin automatiske doseringsteknologi. Maskinen maler selv riktig mengde vaskemiddel basert pa tøymengde og hvor skittent tøyet er. Du fyller opp en beholder som varer i flere uker." },
      { question: "Er Siemens bedre enn Bosch?", answer: "Siemens og Bosch deler grunnteknologi, men Siemens har ofte ekstra premiumfunksjoner som iDos og sensoFresh. Siemens koster typisk 1000 til 3000 kroner mer for sammenlignbare modeller." },
      { question: "Kan jeg koble Siemens vaskemaskin til smarthjemmet?", answer: "Ja, Siemens vaskemaskiner med Home Connect kan styres via app og integreres med Google Home og Amazon Alexa for stemmekommandoer." }
    ]
  },
  {
    slug: "miele",
    name: "Miele",
    country: "Tyskland",
    founded: 1899,
    description: "Miele representerer det ypperste innen vaskemaskiner. Kjent for 20 ars levetid, TwinDos automatisk dosering og uovertruffen byggekvalitet.",
    longDescription: "Miele er familieeid og har produsert hvitevarer i over 125 ar. Hver vaskemaskin er designet for a vare i minst 20 ar og testes grundig før den forlater fabrikken i Gutersloh. TwinDos er Mieles automatiske doseringssystem for flytende vaskemiddel. PowerWash-teknologien gir topp vaskeresultat pa under en time. SteamCare damper plaggene etter vask for a redusere krøller. Miele er det dyreste merket pa det norske markedet, men mange norske forbrukere vurderer det som en investering som lønner seg over tid.",
    strengths: ["Designet for 20 ars levetid", "TwinDos automatisk dosering", "PowerWash under 60 minutter", "SteamCare dampfunksjon", "ProfiEco-motor med livstidsgaranti"],
    priceRange: "premium",
    energyFocus: "Miele sine EcoSpeed-programmer kombinerer lavt energiforbruk med kort vasketid. Toppmodellene bruker under 50 kWh per 100 vasker.",
    popularModels: ["WSD663 WCS", "WEG675 WCS", "WWV980 WPS"],
    warranty: "2 ar garanti, kan utvides til 5 ar",
    seoTitle: "Miele vaskemaskin | Premium kvalitet, tester og priser 2026",
    seoDescription: "Alt om Miele vaskemaskiner. 20 ars levetid, TwinDos og tysk premiumkvalitet. Se modeller, priser og om Miele er verdt investeringen.",
    faq: [
      { question: "Hvorfor er Miele vaskemaskin sa dyr?", answer: "Miele bruker høykvalitets materialer og designer maskinene for a vare i minst 20 ar. Hver maskin testes grundig. Over levetiden blir kostnaden per ar ofte lavere enn billigere alternativer." },
      { question: "Varer Miele vaskemaskin virkelig i 20 ar?", answer: "Miele tester sine maskiner for 20 ars bruk, tilsvarende rundt 10 000 vaskesykluser. Med normalt vedlikehold er det realistisk at maskinen varer sa lenge." },
      { question: "Hvor kjøper jeg Miele vaskemaskin i Norge?", answer: "Miele vaskemaskiner selges hos Elkjøp, Power, Skousen og Miele sine egne butikker. Nettbutikker som Komplett og Proshop har ogsa et godt utvalg." }
    ]
  },
  {
    slug: "electrolux",
    name: "Electrolux",
    country: "Sverige",
    founded: 1919,
    description: "Electrolux er den svenske hvitevaregiganten som kombinerer skandinavisk design med praktiske løsninger. UltraCare-systemet er skånsomt mot fibre og farger.",
    longDescription: "Electrolux er en av verdens storste produsenter av hvitevarer og har hovedkontor i Stockholm. Deres vaskemaskiner utmerker seg med UltraCare-systemet som blander vaskemiddel og skyllemiddel med vann før det nar tøyet, noe som beskytter fibre og farger. SteamCare-funksjonen fjerner allergener og reduserer krøller. AutoDose-teknologien doserer vaskemiddel automatisk. Som skandinavisk merke har Electrolux et sterkt fotfeste i Norge og er tilgjengelig i alle de store elektrokjedene.",
    strengths: ["UltraCare fiber-beskyttelse", "SteamCare dampprogram", "AutoDose automatisk dosering", "SensiCare tilpasser tid til vaskemengde", "Skandinavisk design"],
    priceRange: "mellomklasse",
    energyFocus: "Electrolux sine PerfectCare-modeller tilpasser temperatur, vannmengde og vasketid automatisk. UltraCare vasker effektivt ved 30 grader.",
    popularModels: ["EW7F5247A4", "EW8F2166IA", "EW6F5248G4"],
    warranty: "2 ar garanti, kan utvides til 5 ar",
    seoTitle: "Electrolux vaskemaskin | Svensk kvalitet, tester og priser 2026",
    seoDescription: "Komplett guide til Electrolux vaskemaskiner. UltraCare, SteamCare og AutoDose forklart. Se modeller, tester og priser for norske forbrukere.",
    faq: [
      { question: "Er Electrolux vaskemaskin bra?", answer: "Electrolux scorer godt i tester og er spesielt kjent for a vare skansomme mot tøy. UltraCare-teknologien beskytter fibre og holder fargene sterke lenger." },
      { question: "Er Electrolux og AEG det samme?", answer: "AEG er et merke eid av Electrolux-konsernet. AEG posisjoneres som et premiummerke med ekstra funksjoner, mens Electrolux dekker mellomklassen." },
      { question: "Hvor lenge varer Electrolux vaskemaskin?", answer: "En Electrolux vaskemaskin varer typisk 10 til 15 ar med normalt vedlikehold. Inverter-motoren har lengre levetid enn tradisjonelle motorer." }
    ]
  },
  {
    slug: "aeg",
    name: "AEG",
    country: "Tyskland",
    founded: 1883,
    description: "AEG er premiummerket i Electrolux-familien og leverer vaskemaskiner med ProSteam-teknologi, lavt støyniva og elegant design.",
    longDescription: "AEG ble grunnlagt i Berlin og er i dag eid av Electrolux-konsernet. Merket posisjonerer seg mellom Electrolux og Miele og tilbyr avanserte funksjoner til en noe lavere pris enn Miele. ProSteam-teknologien sprøyter damp inn i trommelen under og etter vask for a redusere krøller med opptil en tredjedel. ProSense-teknologien veier tøyet og tilpasser vannmengde og vasketid. OKOInverter-motoren er svart energieffektiv og stille. AEG er et populart valg i Norge for de som ønsker premium ytelse uten a betale Miele-priser.",
    strengths: ["ProSteam dampteknologi", "ProSense veiing og tilpasning", "OKOInverter energieffektiv motor", "OKOMix løser vaskemiddel ved lave temperaturer", "Elegant premium-design"],
    priceRange: "premium",
    energyFocus: "OKOMix-teknologien gir full vaskekraft allerede ved 30 grader. OKOInverter-motoren bruker minimalt med energi og gir svart lite støy.",
    popularModels: ["LR7612C4B", "LR8816C8", "LR7BREMEN"],
    warranty: "2 ar garanti, kan utvides",
    seoTitle: "AEG vaskemaskin | ProSteam, tester og priser 2026",
    seoDescription: "Alt om AEG vaskemaskiner. ProSteam, ProSense og OKOMix forklart. Se beste modeller, priser og sammenligning med Bosch og Miele.",
    faq: [
      { question: "Er AEG vaskemaskin bedre enn Bosch?", answer: "Begge er svart gode. AEG utmerker seg med ProSteam som reduserer krøller, mens Bosch fokuserer pa pålitelighet og VarioPerfect. AEG koster ofte litt mer." },
      { question: "Hva er ProSteam pa AEG?", answer: "ProSteam sprøyter damp inn i trommelen for a lette krøller og friske opp plagg. Det kan brukes bade under og etter vask og reduserer behovet for stryking." },
      { question: "Lages AEG vaskemaskin av Electrolux?", answer: "Ja, AEG er eid av Electrolux-konsernet. Maskinene produseres i Electrolux sine fabrikker, men AEG har egne premiumfunksjoner og design." }
    ]
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    country: "USA",
    founded: 1911,
    description: "Whirlpool er verdens storste hvitevareprodusent og tilbyr pålitelige vaskemaskiner med FreshCare-teknologi som holder tøyet friskt etter endt vask.",
    longDescription: "Whirlpool Corporation er verdens storste hvitevareprodusent og eier ogsa merkene Hotpoint og Indesit. Deres vaskemaskiner er kjent for solid byggekvalitet og praktiske funksjoner. FreshCare-teknologien beveger trommelen forsiktig etter endt program for a forhindre at tøyet far vond lukt. 6th Sense-teknologien bruker sensorer for a tilpasse vannforbruk og vasketid. I Norge er Whirlpool et godt alternativ i mellomklassen med solid ytelse og konkurransedyktige priser.",
    strengths: ["FreshCare holder tøyet friskt", "6th Sense sensorteknologi", "ZEN DirectDrive stille motor", "Steam Hygiene dampprogram", "Stort utvalg i alle prisklasser"],
    priceRange: "mellomklasse",
    energyFocus: "6th Sense-teknologien reduserer energi og vannforbruk med opptil 50 prosent ved halvfulle ladninger.",
    popularModels: ["W8 W046WR", "FFB 9469 BV", "FWSD 81283 BV"],
    warranty: "2 ar garanti",
    seoTitle: "Whirlpool vaskemaskin | FreshCare, tester og priser 2026",
    seoDescription: "Komplett oversikt over Whirlpool vaskemaskiner i Norge. FreshCare, 6th Sense og modelloversikt. Se priser og finn riktig modell.",
    faq: [
      { question: "Er Whirlpool vaskemaskin bra?", answer: "Whirlpool tilbyr solid kvalitet i mellomklassen. FreshCare-funksjonen og 6th Sense-teknologien gir god vaskeytelse til en rimelig pris." },
      { question: "Eier Whirlpool andre vaskemaskinmerker?", answer: "Ja, Whirlpool Corporation eier bade Hotpoint og Indesit, i tillegg til KitchenAid og Maytag. Hvert merke har sin egen posisjonering." },
      { question: "Hvor stille er Whirlpool vaskemaskin?", answer: "Whirlpool sine modeller med ZEN DirectDrive-motor er blant de stilleste pa markedet med under 50 dB under vask." }
    ]
  },
  {
    slug: "candy",
    name: "Candy",
    country: "Italia",
    founded: 1945,
    description: "Candy er et italiensk merke som tilbyr rimelige vaskemaskiner med smart Wi-Fi-tilkobling og app-styring. God kvalitet til lav pris.",
    longDescription: "Candy er en italiensk hvitevareprodusent som na er eid av kinesiske Haier Group. Merket er kjent for a levere god funksjonalitet til konkurransedyktige priser. Smart Touch-funksjonen gir NFC og Wi-Fi-tilkobling slik at du kan styre maskinen fra telefonen. KG-detektoren veier tøyet og tilpasser programmet. Candy er et populart budsjettvalg i Norge for forstegangsboligkjøpere og studenter som vil ha en god maskin uten a bruke for mye penger.",
    strengths: ["Smart Touch Wi-Fi og NFC", "KG-detektor for automatisk tilpasning", "Rimelig pris", "Kompakte modeller for sma rom", "Italiensk design"],
    priceRange: "budsjett",
    energyFocus: "KG-detektoren tilpasser vannmengde og vasketid til den faktiske vaskemengden, noe som sparer bade vann og energi.",
    popularModels: ["CS 1410TXME/1-S", "RO 1496DWMCE/1-S", "CSO4 1075TE/2-S"],
    warranty: "2 ar garanti",
    seoTitle: "Candy vaskemaskin | Rimelig kvalitet, tester og priser 2026",
    seoDescription: "Alt om Candy vaskemaskiner. Se beste budsjettmodeller, Smart Touch-funksjoner og priser. Finn en god vaskemaskin til lav pris.",
    faq: [
      { question: "Er Candy vaskemaskin bra nok?", answer: "Candy leverer solid vaskeytelse til lav pris. De mangler noen av premiumfunksjonene til dyrere merker, men for vanlig hverdagsbruk er de et godt valg." },
      { question: "Hvem eier Candy?", answer: "Candy er eid av Haier Group fra Kina, som ogsa eier Haier og Hoover. Maskinene produseres fortsatt delvis i Italia." },
      { question: "Hvor lenge varer en Candy vaskemaskin?", answer: "Med normalt vedlikehold varer en Candy vaskemaskin typisk 7 til 10 ar. Levetiden er noe kortere enn premiummerker, men prisen er ogsa mye lavere." }
    ]
  },
  {
    slug: "haier",
    name: "Haier",
    country: "Kina",
    founded: 1984,
    description: "Haier er verdens storste hvitevareprodusent malt i volum og tilbyr vaskemaskiner med innovativ I-Pro-serie og antibakteriell dampvask.",
    longDescription: "Haier har vokst fra en liten kinesisk fabrikk til verdens storste hvitevarekonsern. De eier ogsa Candy og GE Appliances. I-Pro-serien representerer toppen av deres sortiment med direkte drevet invertermotor, antibakteriell dampfunksjon og Smart Dose automatisk dosering. Haier har investert tungt i det europeiske markedet og har fabrikker i Italia. I Norge er Haier et relativt nytt merke som tilbyr mye teknologi til konkurransedyktige priser.",
    strengths: ["I-Pro-serien med premiumfunksjoner", "ABT antibakteriell teknologi", "Smart Dose automatisk dosering", "Pillow Drum skansom trommel", "Konkurransedyktig pris for teknologien"],
    priceRange: "mellomklasse",
    energyFocus: "Smart Dose-systemet sparer opptil 30 prosent vaskemiddel. I-Pro Serie 7 oppnar energiklasse A.",
    popularModels: ["HW100-B14979", "HW80-B14979", "HWD100-B14979"],
    warranty: "2 ar garanti",
    seoTitle: "Haier vaskemaskin | I-Pro serie, tester og priser 2026",
    seoDescription: "Komplett guide til Haier vaskemaskiner i Norge. I-Pro-serien, ABT antibakteriell teknologi og Smart Dose forklart. Se priser og tester.",
    faq: [
      { question: "Er Haier vaskemaskin bra?", answer: "Haier har forbedret kvaliteten kraftig de siste arene. I-Pro-serien har fatt gode testresultater og tilbyr mange premiumfunksjoner til lavere pris enn europeiske konkurrenter." },
      { question: "Hvem lager Haier vaskemaskiner?", answer: "Haier Group er et kinesisk konsern som er verdens storste hvitevareprodusent. De har fabrikker i Kina og Italia og eier ogsa Candy og GE Appliances." },
      { question: "Selges Haier vaskemaskin i norske butikker?", answer: "Ja, Haier vaskemaskiner selges hos blant annet Elkjøp, Power og diverse nettbutikker i Norge." }
    ]
  },
  {
    slug: "beko",
    name: "Beko",
    country: "Tyrkia",
    founded: 1955,
    description: "Beko er Europas nest storste hvitevaremerke og leverer pålitelige vaskemaskiner med AquaTech-teknologi for raskere og mer skansomme programmer.",
    longDescription: "Beko tilhører tyrkiske Arcelik-konsernet og har blitt et av Europas storste hvitevaremerker. AquaTech-teknologien sprøyter vann pa tøyet fra toppen av trommelen i stedet for a dyppe det, noe som gir raskere oppløsning av vaskemiddel og skansommere behandling av tøyet. SteamCure-dampteknologien fjerner bakterier og allergener. Beko er ogsa kjent for sitt fokus pa barekraft med RecycledTub laget av resirkulerte plastflasker. I Norge er Beko et godt budsjett- til mellomklasse-alternativ.",
    strengths: ["AquaTech rask vannfordeling", "SteamCure dampteknologi", "RecycledTub av resirkulert plast", "ProSmart invertermotor", "God pris-ytelse"],
    priceRange: "budsjett",
    energyFocus: "AquaTech reduserer vasketiden med opptil 50 prosent. RecycledTub bruker 60 resirkulerte plastflasker per trommel.",
    popularModels: ["B5WFU59415W", "B3WFT510413W", "WTE10736XOAT"],
    warranty: "2 ar garanti",
    seoTitle: "Beko vaskemaskin | AquaTech, tester og priser 2026",
    seoDescription: "Alt om Beko vaskemaskiner. AquaTech-teknologi, barekraft og konkurransedyktige priser. Se modeller, tester og priser for Norge.",
    faq: [
      { question: "Er Beko vaskemaskin bra?", answer: "Beko tilbyr god kvalitet til lav pris. AquaTech-teknologien gir merkbart kortere vasketider og maskinene scorer godt i uavhengige tester." },
      { question: "Hvor er Beko vaskemaskin laget?", answer: "Beko vaskemaskiner produseres i Tyrkia av Arcelik-konsernet. Arcelik er et av Europas storste hvitevarekonsern." },
      { question: "Er Beko et billigmerke?", answer: "Beko er et budsjettvennlig merke, men kvaliteten er god. De har investert mye i teknologi som AquaTech og RecycledTub og scorer godt i tester." }
    ]
  },
  {
    slug: "gorenje",
    name: "Gorenje",
    country: "Slovenia",
    founded: 1950,
    description: "Gorenje er et slovensk merke eid av Hisense som kombinerer europeisk design med rimelige priser. WaveActive-trommelen gir skansomme vaskeprogrammer.",
    longDescription: "Gorenje ble grunnlagt i Slovenia og ble i 2018 kjøpt opp av kinesiske Hisense. Merket er kjent for a tilby europeisk designkvalitet til overkommelige priser. WaveActive-trommelen har en bølgeformet overflate som er svart skansom mot tøyet. SteamTech-funksjonen bruker damp til a løse skitt og redusere krøller. I Norge er Gorenje et populart alternativ for de som ønsker et europeisk merke uten a betale premiumpriser.",
    strengths: ["WaveActive bølgeformet trommel", "SteamTech dampfunksjon", "Invertermotor med 15 ars garanti", "Kompakte modeller for sma bad", "Europeisk designkvalitet"],
    priceRange: "budsjett",
    energyFocus: "Inverter PowerDrive-motoren bruker opptil 30 prosent mindre energi enn tradisjonelle motorer.",
    popularModels: ["WNEI86BS", "WHP72ESN", "WPNA84ATSWIFI3"],
    warranty: "2 ar garanti, 15 ar pa motor",
    seoTitle: "Gorenje vaskemaskin | Europeisk design til god pris 2026",
    seoDescription: "Komplett oversikt over Gorenje vaskemaskiner. WaveActive-trommel, SteamTech og priser. Europeisk kvalitet til budsjettpris.",
    faq: [
      { question: "Hvem eier Gorenje?", answer: "Gorenje er eid av kinesiske Hisense Group siden 2018. Produksjonen skjer fortsatt i Slovenia og andre europeiske fabrikker." },
      { question: "Er Gorenje vaskemaskin bra?", answer: "Gorenje tilbyr god kvalitet til konkurransedyktig pris. WaveActive-trommelen er spesielt skansom mot tøy, og inverter-motoren gir lang levetid." },
      { question: "Hvordan uttales Gorenje?", answer: "Gorenje uttales go-REN-ye med trykk pa andre stavelse. Navnet kommer fra landsbyen Gorenje i Slovenia der selskapet ble grunnlagt." }
    ]
  },
  {
    slug: "hisense",
    name: "Hisense",
    country: "Kina",
    founded: 1969,
    description: "Hisense er et kinesisk teknologikonsern som har vokst kraftig i det europeiske hvitevaremarkedet med gode spesifikasjoner til lave priser.",
    longDescription: "Hisense er et av Kinas storste teknologiselskaper og har vokst raskt i Europa gjennom oppkjøpet av Gorenje. Deres vaskemaskiner tilbyr moderne funksjoner som invertermotor, dampvask og Wi-Fi-tilkobling til lavere priser enn etablerte europeiske merker. I Norge er Hisense tilgjengelig hos de store elektrokjedene og tiltrekker seg kunder som ønsker mye spesifikasjoner for pengene.",
    strengths: ["Konkurransedyktig pris", "God kapasitet", "Dampvask", "Invertermotor", "Wi-Fi pa utvalgte modeller"],
    priceRange: "budsjett",
    energyFocus: "Invertermotor og automatisk lastsensing reduserer energiforbruket ved mindre vaskemengder.",
    popularModels: ["WFQA1014EVJM", "WFQP9014EVM", "WF5S1245BW"],
    warranty: "2 ar garanti",
    seoTitle: "Hisense vaskemaskin | Priser, tester og modeller 2026",
    seoDescription: "Guide til Hisense vaskemaskiner i Norge. Se modeller, priser og spesifikasjoner. Mye vaskemaskin for pengene.",
    faq: [
      { question: "Er Hisense vaskemaskin bra?", answer: "Hisense tilbyr god grunnkvalitet til lav pris. De passer godt for de som trenger en enkel og pålitelig maskin uten a betale for premiumfunksjoner." },
      { question: "Eier Hisense Gorenje?", answer: "Ja, Hisense kjøpte Gorenje i 2018. Begge merkene selges fortsatt separat med forskjellig posisjonering." },
      { question: "Hvor lenge varer Hisense vaskemaskin?", answer: "Med normalt vedlikehold kan du forvente 7 til 10 ars levetid. Invertermotoren bidrar til lengre levetid enn eldre motortyper." }
    ]
  },
  {
    slug: "hotpoint",
    name: "Hotpoint",
    country: "Storbritannia",
    founded: 1911,
    description: "Hotpoint er et tradisjonsrikt merke eid av Whirlpool som tilbyr enkle og pålitelige vaskemaskiner til lave priser.",
    longDescription: "Hotpoint er et av de eldste hvitevaremerkene i Europa og er i dag eid av Whirlpool Corporation. Merket fokuserer pa enkel bruk og pålitelighet til budsjettvennlige priser. Anti-Stain-teknologien har spesialprogram for 20 ulike flekktyper. Steam Hygiene-programmet fjerner 99,9 prosent av bakterier. Hotpoint er et godt valg for de som ønsker en enkel, upretensiøs vaskemaskin uten unødvendig kompleksitet.",
    strengths: ["Anti-Stain flekk-fjerning", "Steam Hygiene antibakteriell", "Enkel bruk", "Lav innganspris", "Pålitelig grunnkvalitet"],
    priceRange: "budsjett",
    energyFocus: "Steam Hygiene-programmet fjerner bakterier ved lavere temperaturer enn tradisjonell kokvask og sparer dermed energi.",
    popularModels: ["NSWE 745CS", "NM11 846 WC A", "NDD 11726 DA"],
    warranty: "2 ar garanti",
    seoTitle: "Hotpoint vaskemaskin | Rimelig, enkel og pålitelig 2026",
    seoDescription: "Alt om Hotpoint vaskemaskiner. Enkle, pålitelige maskiner til budsjettpris. Se modeller, tester og priser.",
    faq: [
      { question: "Er Hotpoint samme som Whirlpool?", answer: "Hotpoint eies av Whirlpool Corporation, men er et eget merke med egen design og produktlinje. Hotpoint posisjoneres som et budsjettalternativ." },
      { question: "Er Hotpoint vaskemaskin bra nok?", answer: "Hotpoint leverer grunnleggende god vaskeytelse til lav pris. For enkel hverdagsbruk uten behov for avanserte funksjoner er de et solid valg." },
      { question: "Finnes Hotpoint vaskemaskin i Norge?", answer: "Hotpoint har begrenset tilgjengelighet i Norge. Sjekk nettbutikker som Komplett og Proshop for utvalget." }
    ]
  },
  {
    slug: "indesit",
    name: "Indesit",
    country: "Italia",
    founded: 1975,
    description: "Indesit er et italiensk budsjettmerke eid av Whirlpool. Enkle og rimelige vaskemaskiner for hverdagsbruk.",
    longDescription: "Indesit er et italiensk merke som ble grunnlagt i Fabriano og er na eid av Whirlpool Corporation. Merket fokuserer pa a tilby vaskemaskiner som er enkle a bruke, pålitelige og rimelige. Push and Wash-funksjonen starter en komplett vask med ett knappetrykk. Turn and Wash-programmet er et kort 45-minutters program for daglig bruk. Indesit er et av de rimeligste merkene pa det norske markedet.",
    strengths: ["Push and Wash ett-trykks vask", "Turn and Wash 45-minutters program", "Svart lav pris", "Enkel betjening", "Kompakte størrelser tilgjengelig"],
    priceRange: "budsjett",
    energyFocus: "Turn and Wash-programmet sparer tid og energi med sitt 45-minutters program for daglig bruk.",
    popularModels: ["MTWE 91495 W", "BWE 91496X WS", "BWSA 61251 W"],
    warranty: "2 ar garanti",
    seoTitle: "Indesit vaskemaskin | Billigst i test, priser 2026",
    seoDescription: "Komplett oversikt over Indesit vaskemaskiner. Lave priser, enkel bruk og italiensk design. Se modeller og priser.",
    faq: [
      { question: "Er Indesit en god vaskemaskin?", answer: "Indesit er et grunnleggende budsjettmerke som gjør jobben for vanlig hverdagsbruk. Forvent ikke premiumfunksjoner, men solid vaskeytelse til lav pris." },
      { question: "Hvem lager Indesit?", answer: "Indesit er eid av Whirlpool Corporation. Maskinene produseres i Italia og andre europeiske fabrikker." },
      { question: "Hva koster en Indesit vaskemaskin?", answer: "Indesit er blant de rimeligste merkene pa markedet. Prisene starter typisk fra rundt 3000 kroner for enkle modeller." }
    ]
  },
  {
    slug: "gram",
    name: "Gram",
    country: "Danmark",
    founded: 1901,
    description: "Gram er et dansk tradisjonsmerke med over 120 ars historie. Praktiske vaskemaskiner med skandinavisk tilnarming til design og funksjon.",
    longDescription: "Gram ble grunnlagt i Vojens i Danmark i 1901 og er et av de eldste hvitevaremerkene i Skandinavia. Merket fokuserer pa nordiske verdier som funksjonalitet, holdbarhet og enkel betjening. Gram vaskemaskiner tilbyr godt utvalg av programmer, inkludert allergiprogram og hurtigvask. Merket har et sterkt fotfeste i Danmark og er ogsa tilgjengelig i Norge. Gram er et godt valg for de som foretrekker et skandinavisk merke med lang tradisjon.",
    strengths: ["Skandinavisk tradisjon siden 1901", "Allergivennlige programmer", "Enkel og intuitiv betjening", "Godt utvalg hurtigprogrammer", "God etterservice i Norden"],
    priceRange: "mellomklasse",
    energyFocus: "Gram sine nyere modeller har invertermotor og automatisk lasttilpasning for a redusere energiforbruk.",
    popularModels: ["GWM 38410", "GWM 49810", "GWM 38440"],
    warranty: "2 ar garanti",
    seoTitle: "Gram vaskemaskin | Dansk tradisjon, tester og priser 2026",
    seoDescription: "Guide til Gram vaskemaskiner. Dansk kvalitetstradisjon siden 1901. Se modeller, priser og finn en Gram vaskemaskin i Norge.",
    faq: [
      { question: "Er Gram vaskemaskin bra?", answer: "Gram leverer solid skandinavisk kvalitet. Maskinene er enkle a bruke, har gode programmer og holder godt over tid." },
      { question: "Hvem eier Gram?", answer: "Gram er et dansk merke med lang historie. Hvitevaredelen har hatt ulike eiere gjennom arene, men beholder sin danske identitet." },
      { question: "Selges Gram vaskemaskin i Norge?", answer: "Gram har begrenset distribusjon i Norge. Sjekk elektrokjedene og nettbutikker for tilgjengelighet." }
    ]
  },
  {
    slug: "grundig",
    name: "Grundig",
    country: "Tyskland",
    founded: 1945,
    description: "Grundig er et tysk merke eid av Arcelik (samme konsern som Beko) med fokus pa barekraft og FiberCatcher-teknologi som fanger mikroplast.",
    longDescription: "Grundig ble grunnlagt i Nurnberg og er i dag eid av tyrkiske Arcelik-konsernet. Merket utmerker seg med sterkt fokus pa barekraft. FiberCatcher-filteret fanger opptil 90 prosent av mikroplastfibre under vask og forhindrer at de nar havet. StainExpert-systemet har spesialprogram for 23 flekktyper. Grundig er et interessant valg for miljøbevisste norske forbrukere som ønsker a redusere sin miljøpåvirkning.",
    strengths: ["FiberCatcher mikroplastfilter", "StainExpert 23 flekkprogrammer", "Barekraftig produksjon", "Invertermotor", "Tysk designarv"],
    priceRange: "mellomklasse",
    energyFocus: "FiberCatcher-teknologien reduserer mikroplastutslipp med opptil 90 prosent. Maskinen er ogsa energieffektiv med invertermotor.",
    popularModels: ["GW75941FW", "GW7P89418W", "GW76941FC"],
    warranty: "2 ar garanti",
    seoTitle: "Grundig vaskemaskin | FiberCatcher, tester og priser 2026",
    seoDescription: "Alt om Grundig vaskemaskiner. FiberCatcher mot mikroplast, barekraft og tysk kvalitet. Se priser og tester.",
    faq: [
      { question: "Hva er FiberCatcher pa Grundig?", answer: "FiberCatcher er et innebygd filter som fanger opptil 90 prosent av mikroplastfibre som løsner fra syntetiske klær under vask. Det forhindrer at plastpartiklene nar avløpssystemet." },
      { question: "Er Grundig same som Beko?", answer: "Grundig og Beko tilhører begge Arcelik-konsernet. Grundig posisjoneres som et premiummerke med sterkere fokus pa design og barekraft." },
      { question: "Hvor kjøper jeg Grundig vaskemaskin?", answer: "Grundig har begrenset distribusjon i Norge. Sjekk Elkjøp, Power og nettbutikker for utvalget." }
    ]
  },
  {
    slug: "v-zug",
    name: "V-ZUG",
    country: "Sveits",
    founded: 1913,
    description: "V-ZUG er et sveitsisk premiummerke som lager vaskemaskiner med ekstrem presisjon. Vibration Absorbing System gir den stilleste driften pa markedet.",
    longDescription: "V-ZUG er et sveitsisk selskap med over 110 ars historie i produksjon av hvitevarer. Alle maskiner designes og produseres i Zug i Sveits. Vibration Absorbing System (VAS) gjør V-ZUG til det stilleste merket pa markedet. OptiTime-funksjonen lar deg velge nøyaktig vasketid. WetClean-teknologien er sa skansom at den kan vaske plagg merket med kun kjemisk rens. V-ZUG er det dyreste merket pa det norske markedet, men representerer absolutt toppklasse for krevende kunder.",
    strengths: ["Sveitsisk presisjon", "VAS vibrasjonsdempning", "WetClean for sarte plagg", "OptiTime justerbar vasketid", "Ekstremt stille drift"],
    priceRange: "premium",
    energyFocus: "V-ZUG sine maskiner er svart energieffektive. EcoManagement-systemet optimaliserer forbruk gjennom hele maskinens levetid.",
    popularModels: ["Adora SLQ WP", "Unimatic SL WP", "Adora V4000"],
    warranty: "2 ar garanti, kan utvides",
    seoTitle: "V-ZUG vaskemaskin | Sveitsisk premium, tester og priser 2026",
    seoDescription: "Komplett guide til V-ZUG vaskemaskiner. Sveitsisk presisjon, VAS-teknologi og uovertruffen kvalitet. Se priser og modeller i Norge.",
    faq: [
      { question: "Hvorfor er V-ZUG sa dyrt?", answer: "V-ZUG produseres utelukkende i Sveits med høyeste kvalitetsstandarder. Materialvalg, presisjon og grundig testing gjør at prisen er høyere, men kvaliteten er upaklagelig." },
      { question: "Kan jeg kjøpe V-ZUG i Norge?", answer: "V-ZUG har begrenset distribusjon i Norge og selges primort gjennom spesialiserte forhandlere og kjøkkenbutikker." },
      { question: "Hvor stille er V-ZUG vaskemaskin?", answer: "V-ZUG med VAS-teknologi er blant de absolutt stilleste pa markedet. Noen modeller gar ned til 40 dB under vask, noe som tilsvarer en stille samtale." }
    ]
  },
  {
    slug: "asko",
    name: "ASKO",
    country: "Norge",
    founded: 1950,
    description: "ASKO er et skandinavisk premiummerke med norske røtter. Kjent for industriell kvalitet, Steel Seal-trommel uten gummipakning og lang levetid.",
    longDescription: "ASKO ble grunnlagt i Sverige men har sterke røtter i det skandinaviske markedet. Merket er na eid av Gorenje og dermed Hisense Group. ASKO skiller seg ut med Steel Seal-trommelen som erstatter den tradisjonelle gummipakningen med en stålløsning. Dette eliminerer mugg og bakterievekst og gir en mer hygienisk vask. Pro Wash-systemet sprøyter vann i flere retninger for grundigere rengjøring. Quattro-støtdempere gir stille drift. I Norge har ASKO en sterk posisjon blant kunder som verdsetter skandinavisk kvalitet.",
    strengths: ["Steel Seal uten gummipakning", "Pro Wash flerretnings vannsprut", "Quattro-støtdempere", "Skandinavisk premiummerke", "Hygienisk pakningSfri design"],
    priceRange: "premium",
    energyFocus: "ASKO sine maskiner er designet for lang levetid, noe som gjør dem mer barekraftige over tid enn billigere maskiner som byttes oftere.",
    popularModels: ["W4096R.W", "W4086C.W", "W4114C.W"],
    warranty: "5 ar garanti",
    seoTitle: "ASKO vaskemaskin | Skandinavisk premium, tester og priser 2026",
    seoDescription: "Alt om ASKO vaskemaskiner. Steel Seal, skandinavisk kvalitet og 5 ars garanti. Se modeller, priser og test av ASKO i Norge.",
    faq: [
      { question: "Er ASKO norsk?", answer: "ASKO har skandinaviske røtter og en sterk posisjon i Norge. Merket er i dag eid av Hisense Group via Gorenje, men beholder sin skandinaviske identitet og design." },
      { question: "Hva er Steel Seal pa ASKO?", answer: "Steel Seal erstatter den vanlige gummipakningen rundt trommeldøren med en løsning i rustfritt stal. Dette forhindrer oppsamling av mugg, bakterier og lukt som ofte oppstar i gummipakningen." },
      { question: "Er ASKO verdt prisen?", answer: "ASKO koster mer enn mainstream-merker, men tilbyr 5 ars garanti, Steel Seal-hygiene og solid byggekvalitet. For de som verdsetter renslighet og lang levetid er det et godt valg." }
    ]
  },
  {
    slug: "smeg",
    name: "Smeg",
    country: "Italia",
    founded: 1948,
    description: "Smeg er det italienske designmerket kjent for retrostil. Deres vaskemaskiner kombinerer iøynefallende design med solid vaskeytelse.",
    longDescription: "Smeg er et familieeid italiensk selskap som er mest kjent for sine retrodesignede hvitevarer. Vaskemaskinkolleksjonen fokuserer pa a bringe samme designfilosofi til vaskerommet. Maskinene har solide spesifikasjoner med invertermotor, dampfunksjon og flere programmuligheter. For de som verdsetter estetikk i hjemmet tilbyr Smeg vaskemaskiner i farger som pastell-bla, pastell-grønn, creme og rosa, i tillegg til klassisk hvit. I Norge er Smeg et nisjemerke for designbevisste kunder.",
    strengths: ["Ikonisk italiensk retrodesign", "Tilgjengelig i mange farger", "Invertermotor", "Dampvask", "God byggekvalitet"],
    priceRange: "premium",
    energyFocus: "Smeg sine modeller har invertermotor og oppnar gode energiklasser, men fokuset er primort pa design fremfor energiinnovasjon.",
    popularModels: ["LBF16CRO", "SWM16CRO", "WHT1114LSIN"],
    warranty: "2 ar garanti",
    seoTitle: "Smeg vaskemaskin | Italiensk retrodesign, priser 2026",
    seoDescription: "Guide til Smeg vaskemaskiner. Ikonisk retrodesign i mange farger. Se modeller, priser og om Smeg er verdt investeringen.",
    faq: [
      { question: "Er Smeg vaskemaskin bra eller bare pen?", answer: "Smeg vaskemaskiner har solide spesifikasjoner med invertermotor og dampvask. Du betaler en premie for designet, men vaskeytelsen er god." },
      { question: "Finnes Smeg vaskemaskin i farger?", answer: "Ja, Smeg tilbyr vaskemaskiner i pastellfarger som bla, grønn, creme, rosa og klassisk hvit. De er blant fa merker med fargevalg." },
      { question: "Hvor dyrt er Smeg vaskemaskin?", answer: "Smeg vaskemaskiner ligger i premiumsegmentet og koster typisk mer enn tilsvarende modeller fra mainstream-merker. Du betaler ekstra for den ikoniske designen." }
    ]
  },
  {
    slug: "zanussi",
    name: "Zanussi",
    country: "Italia",
    founded: 1916,
    description: "Zanussi er et italiensk merke eid av Electrolux som tilbyr enkle og pålitelige vaskemaskiner til lave priser.",
    longDescription: "Zanussi ble grunnlagt i Pordenone i Italia og ble kjøpt av Electrolux i 1984. Merket posisjoneres som budsjettalternativet i Electrolux-familien og tilbyr enkel funksjonalitet til lave priser. AquaFall-teknologien fordeler vannet jevnt over tøyet. FlexiTime-funksjonen lar deg justere vasketiden. I Norge har Zanussi begrenset distribusjon, men er tilgjengelig gjennom noen nettbutikker.",
    strengths: ["AquaFall vannfordeling", "FlexiTime justerbar vasketid", "Lav pris", "Electrolux-teknologi i bunn", "Enkel betjening"],
    priceRange: "budsjett",
    energyFocus: "FlexiTime-funksjonen lar deg velge kortere vasketid nar tøyet er lite skittent, noe som sparer bade tid og energi.",
    popularModels: ["ZWF942E2PW", "ZWF8421BSW", "ZWFN942TW"],
    warranty: "2 ar garanti",
    seoTitle: "Zanussi vaskemaskin | Rimelig Electrolux-kvalitet 2026",
    seoDescription: "Alt om Zanussi vaskemaskiner. Rimelig alternativ fra Electrolux-familien. Se priser, tester og modeller.",
    faq: [
      { question: "Er Zanussi og Electrolux det samme?", answer: "Zanussi er eid av Electrolux og bruker mye av den samme grunnteknologien. Zanussi posisjoneres som budsjettalternativet med enklere funksjoner." },
      { question: "Er Zanussi vaskemaskin bra?", answer: "Zanussi leverer grunnleggende god kvalitet til lav pris. Med Electrolux-teknologi i bunn far du pålitelig drift uten premiumprisen." },
      { question: "Finnes Zanussi i norske butikker?", answer: "Zanussi har begrenset distribusjon i Norge. Sjekk nettbutikker for tilgjengelighet." }
    ]
  },
  {
    slug: "bauknecht",
    name: "Bauknecht",
    country: "Tyskland",
    founded: 1919,
    description: "Bauknecht er et tysk merke eid av Whirlpool med ActiveCare-teknologi som fjerner over 100 flekker ved bare 40 grader.",
    longDescription: "Bauknecht er et tradisjonsrikt tysk merke som na er eid av Whirlpool Corporation. Merket er spesielt sterkt i det tyske og østerrikske markedet. ActiveCare-teknologien fjerner over 100 ulike flekktyper allerede ved 40 grader takket vare kombinasjonen av pre-treat, vask og ekstra skylle-faser. Steam Hygiene bruker damp for a eliminere 99,9 prosent av bakterier. I Norden har Bauknecht en mer begrenset tilstedevaerelse enn i Sentral-Europa.",
    strengths: ["ActiveCare flekkfjerning", "Steam Hygiene antibakteriell", "FreshCare etter endt vask", "ZEN DirectDrive motor", "Tysk tradisjon"],
    priceRange: "mellomklasse",
    energyFocus: "ActiveCare fjerner flekker ved 40 grader, noe som sparer energi sammenlignet med a vaske ved høyere temperaturer.",
    popularModels: ["B8 W046WB", "BPW 914 A", "W Active 823 PS"],
    warranty: "2 ar garanti",
    seoTitle: "Bauknecht vaskemaskin | Tysk ActiveCare, priser 2026",
    seoDescription: "Oversikt over Bauknecht vaskemaskiner. ActiveCare flekkfjerning, tysk kvalitet og Whirlpool-teknologi. Se priser og modeller.",
    faq: [
      { question: "Er Bauknecht det samme som Whirlpool?", answer: "Bauknecht er eid av Whirlpool og deler noe teknologi, men har egne modeller og funksjoner. Bauknecht selges primort i det tyske markedet." },
      { question: "Kan jeg kjøpe Bauknecht i Norge?", answer: "Bauknecht har begrenset distribusjon i Norge. Noen nettbutikker fører utvalgte modeller." },
      { question: "Hva er ActiveCare?", answer: "ActiveCare er Bauknechts flekkfjerningsteknologi som kombinerer pre-behandling, vask og ekstra skylling for a fjerne over 100 flekktyper ved bare 40 grader." }
    ]
  },
  {
    slug: "midea",
    name: "Midea",
    country: "Kina",
    founded: 1968,
    description: "Midea er en av verdens storste hvitevareprodusenter og tilbyr vaskemaskiner med Lunar Dial-design og avanserte funksjoner til lave priser.",
    longDescription: "Midea Group er et kinesisk industrikonsern som er blant verdens storste hvitevareprodusenter. De eier ogsa det tyske robotstøvsugermerket Roborock og har en stor andel i tyske Kuka Robotics. Midea vaskemaskiner har fatt økt oppmerksomhet i Europa med Lunar Dial-designet og gode spesifikasjoner til lave priser. Blizzard Wash-teknologien bruker høytrykkssprut for raskere og grundigere vask. I Norge er Midea fortsatt et relativt ukjent merke, men vokser gjennom netthandel.",
    strengths: ["Lunar Dial premium-design", "Blizzard Wash høytrykk", "BLDC invertermotor", "Svart lav pris for spesifikasjonene", "Automatisk vaskemiddeldosering"],
    priceRange: "budsjett",
    energyFocus: "BLDC-invertermotoren og automatisk lastdeteksjon gjør Midea overraskende energieffektiv til prisklassen.",
    popularModels: ["MF200W80WB", "MF100W70", "MF200D80B"],
    warranty: "2 ar garanti",
    seoTitle: "Midea vaskemaskin | Rimelig kvalitet fra Kina, priser 2026",
    seoDescription: "Guide til Midea vaskemaskiner. Verdens storste produsent med lave priser. Se modeller, spesifikasjoner og norsk tilgjengelighet.",
    faq: [
      { question: "Hvem er Midea?", answer: "Midea er et kinesisk industrikonsern og en av verdens storste hvitevareprodusenter. De omsetter for over 50 milliarder dollar arlig og eier blant annet Roborock." },
      { question: "Er Midea vaskemaskin bra?", answer: "Midea tilbyr overraskende gode spesifikasjoner til lave priser. Kvaliteten har økt betraktelig de siste arene, men langtidserfaringer i Norge er begrenset." },
      { question: "Hvor kjøper jeg Midea vaskemaskin i Norge?", answer: "Midea har begrenset distribusjon i norske fysiske butikker. Sjekk nettbutikker som Amazon og andre europeiske netthandlere." }
    ]
  }
]

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug)
}

export function getBrandsByPriceRange(range: Brand["priceRange"]): Brand[] {
  return brands.filter((b) => b.priceRange === range)
}

export function getAllBrandSlugs(): string[] {
  return brands.map((b) => b.slug)
}
