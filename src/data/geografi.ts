export interface Fylke {
  slug: string
  name: string
  kommuner: string[]  // kommuneSlug references
}

export interface Kommune {
  slug: string
  name: string
  fylkeSlug: string
  kommunenummer: string
}

export const fylker: Fylke[] = [
  { slug: 'oslo', name: 'Oslo', kommuner: ['oslo'] },
  { slug: 'akershus', name: 'Akershus', kommuner: ['asker', 'aurskog-hoeland', 'eidsvoll', 'loerenskog', 'nes', 'nittedal'] },
  { slug: 'oestfold', name: 'Østfold', kommuner: ['fredrikstad', 'moss', 'raade'] },
  { slug: 'buskerud', name: 'Buskerud', kommuner: ['aal', 'drammen', 'gol', 'hemsedal', 'kroedsherad', 'modum', 'nore-og-uvdal', 'oevre-eiker', 'ringerike'] },
  { slug: 'vestfold', name: 'Vestfold', kommuner: ['horten', 'larvik', 'toensberg'] },
  { slug: 'telemark', name: 'Telemark', kommuner: ['midt-telemark', 'porsgrunn', 'skien', 'tinn'] },
  { slug: 'innlandet', name: 'Innlandet', kommuner: ['dovre', 'elverum', 'gjoevik', 'gran', 'kongsvinger', 'lom', 'nord-aurdal', 'nordre-land', 'ringsaker', 'sel', 'tynset', 'vestre-toten'] },
  { slug: 'agder', name: 'Agder', kommuner: ['evje-og-hornnes', 'farsund', 'grimstad', 'kristiansand', 'kvinesdal', 'lillesand', 'lindesnes', 'lyngdal', 'tvedestrand', 'vennesla'] },
  { slug: 'rogaland', name: 'Rogaland', kommuner: ['gjesdal', 'haa', 'haugesund', 'karmoey', 'stavanger', 'strand', 'time'] },
  { slug: 'vestland', name: 'Vestland', kommuner: ['askvoll', 'bergen', 'etne', 'gloppen', 'kinn', 'kvam', 'kvinnherad', 'sogndal', 'stord', 'stryn', 'sunnfjord', 'voss'] },
  { slug: 'moere-og-romsdal', name: 'Møre og Romsdal', kommuner: ['aalesund', 'hareid', 'hustadvika', 'kristiansund', 'smoela', 'surnadal', 'sykkylven', 'vestnes'] },
  { slug: 'troendelag', name: 'Trøndelag', kommuner: ['hitra', 'indre-fosen', 'midtre-gauldal', 'naeroeysund', 'namsos', 'oppdal', 'orkland', 'roeros', 'stjoerdal', 'verdal'] },
  { slug: 'nordland', name: 'Nordland', kommuner: ['alstahaug', 'andoey', 'fauske', 'narvik', 'saltdal', 'sortland', 'vaagan', 'vefsn', 'vestvaagoey'] },
  { slug: 'troms', name: 'Troms', kommuner: ['harstad', 'lyngen', 'senja', 'tromsoe'] },
  { slug: 'finnmark', name: 'Finnmark', kommuner: ['alta', 'hammerfest', 'karasjok', 'porsanger', 'vadsoe'] },
]

export const kommuner: Kommune[] = [
  { slug: 'evje-og-hornnes', name: 'EVJE OG HORNNES', fylkeSlug: 'agder', kommunenummer: '4219' },
  { slug: 'farsund', name: 'FARSUND', fylkeSlug: 'agder', kommunenummer: '4206' },
  { slug: 'grimstad', name: 'GRIMSTAD', fylkeSlug: 'agder', kommunenummer: '4202' },
  { slug: 'kristiansand', name: 'KRISTIANSAND', fylkeSlug: 'agder', kommunenummer: '4204' },
  { slug: 'kvinesdal', name: 'KVINESDAL', fylkeSlug: 'agder', kommunenummer: '4227' },
  { slug: 'lillesand', name: 'LILLESAND', fylkeSlug: 'agder', kommunenummer: '4215' },
  { slug: 'lindesnes', name: 'LINDESNES', fylkeSlug: 'agder', kommunenummer: '4205' },
  { slug: 'lyngdal', name: 'LYNGDAL', fylkeSlug: 'agder', kommunenummer: '4225' },
  { slug: 'tvedestrand', name: 'TVEDESTRAND', fylkeSlug: 'agder', kommunenummer: '4213' },
  { slug: 'vennesla', name: 'VENNESLA', fylkeSlug: 'agder', kommunenummer: '4223' },
  { slug: 'asker', name: 'ASKER', fylkeSlug: 'akershus', kommunenummer: '3203' },
  { slug: 'aurskog-hoeland', name: 'AURSKOG-HØLAND', fylkeSlug: 'akershus', kommunenummer: '3226' },
  { slug: 'eidsvoll', name: 'EIDSVOLL', fylkeSlug: 'akershus', kommunenummer: '3240' },
  { slug: 'loerenskog', name: 'LØRENSKOG', fylkeSlug: 'akershus', kommunenummer: '3222' },
  { slug: 'nes', name: 'NES', fylkeSlug: 'akershus', kommunenummer: '3228' },
  { slug: 'nittedal', name: 'NITTEDAL', fylkeSlug: 'akershus', kommunenummer: '3232' },
  { slug: 'drammen', name: 'DRAMMEN', fylkeSlug: 'buskerud', kommunenummer: '3301' },
  { slug: 'gol', name: 'GOL', fylkeSlug: 'buskerud', kommunenummer: '3324' },
  { slug: 'hemsedal', name: 'HEMSEDAL', fylkeSlug: 'buskerud', kommunenummer: '3326' },
  { slug: 'kroedsherad', name: 'KRØDSHERAD', fylkeSlug: 'buskerud', kommunenummer: '3318' },
  { slug: 'modum', name: 'MODUM', fylkeSlug: 'buskerud', kommunenummer: '3316' },
  { slug: 'nore-og-uvdal', name: 'NORE OG UVDAL', fylkeSlug: 'buskerud', kommunenummer: '3338' },
  { slug: 'ringerike', name: 'RINGERIKE', fylkeSlug: 'buskerud', kommunenummer: '3305' },
  { slug: 'aal', name: 'ÅL', fylkeSlug: 'buskerud', kommunenummer: '3328' },
  { slug: 'oevre-eiker', name: 'ØVRE EIKER', fylkeSlug: 'buskerud', kommunenummer: '3314' },
  { slug: 'alta', name: 'ALTA', fylkeSlug: 'finnmark', kommunenummer: '5601' },
  { slug: 'hammerfest', name: 'HAMMERFEST', fylkeSlug: 'finnmark', kommunenummer: '5603' },
  { slug: 'karasjok', name: 'KARASJOK', fylkeSlug: 'finnmark', kommunenummer: '5610' },
  { slug: 'porsanger', name: 'PORSANGER', fylkeSlug: 'finnmark', kommunenummer: '5622' },
  { slug: 'vadsoe', name: 'VADSØ', fylkeSlug: 'finnmark', kommunenummer: '5607' },
  { slug: 'dovre', name: 'DOVRE', fylkeSlug: 'innlandet', kommunenummer: '3431' },
  { slug: 'elverum', name: 'ELVERUM', fylkeSlug: 'innlandet', kommunenummer: '3420' },
  { slug: 'gjoevik', name: 'GJØVIK', fylkeSlug: 'innlandet', kommunenummer: '3407' },
  { slug: 'gran', name: 'GRAN', fylkeSlug: 'innlandet', kommunenummer: '3446' },
  { slug: 'kongsvinger', name: 'KONGSVINGER', fylkeSlug: 'innlandet', kommunenummer: '3401' },
  { slug: 'lom', name: 'LOM', fylkeSlug: 'innlandet', kommunenummer: '3434' },
  { slug: 'nord-aurdal', name: 'NORD-AURDAL', fylkeSlug: 'innlandet', kommunenummer: '3451' },
  { slug: 'nordre-land', name: 'NORDRE LAND', fylkeSlug: 'innlandet', kommunenummer: '3448' },
  { slug: 'ringsaker', name: 'RINGSAKER', fylkeSlug: 'innlandet', kommunenummer: '3411' },
  { slug: 'sel', name: 'SEL', fylkeSlug: 'innlandet', kommunenummer: '3437' },
  { slug: 'tynset', name: 'TYNSET', fylkeSlug: 'innlandet', kommunenummer: '3427' },
  { slug: 'vestre-toten', name: 'VESTRE TOTEN', fylkeSlug: 'innlandet', kommunenummer: '3443' },
  { slug: 'hareid', name: 'HAREID', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1517' },
  { slug: 'hustadvika', name: 'HUSTADVIKA', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1579' },
  { slug: 'kristiansund', name: 'KRISTIANSUND', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1505' },
  { slug: 'smoela', name: 'SMØLA', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1573' },
  { slug: 'surnadal', name: 'SURNADAL', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1566' },
  { slug: 'sykkylven', name: 'SYKKYLVEN', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1528' },
  { slug: 'vestnes', name: 'VESTNES', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1535' },
  { slug: 'aalesund', name: 'ÅLESUND', fylkeSlug: 'moere-og-romsdal', kommunenummer: '1508' },
  { slug: 'alstahaug', name: 'ALSTAHAUG', fylkeSlug: 'nordland', kommunenummer: '1820' },
  { slug: 'andoey', name: 'ANDØY', fylkeSlug: 'nordland', kommunenummer: '1871' },
  { slug: 'fauske', name: 'FAUSKE', fylkeSlug: 'nordland', kommunenummer: '1841' },
  { slug: 'narvik', name: 'NARVIK', fylkeSlug: 'nordland', kommunenummer: '1806' },
  { slug: 'saltdal', name: 'SALTDAL', fylkeSlug: 'nordland', kommunenummer: '1840' },
  { slug: 'sortland', name: 'SORTLAND', fylkeSlug: 'nordland', kommunenummer: '1870' },
  { slug: 'vefsn', name: 'VEFSN', fylkeSlug: 'nordland', kommunenummer: '1824' },
  { slug: 'vestvaagoey', name: 'VESTVÅGØY', fylkeSlug: 'nordland', kommunenummer: '1860' },
  { slug: 'vaagan', name: 'VÅGAN', fylkeSlug: 'nordland', kommunenummer: '1865' },
  { slug: 'oslo', name: 'OSLO', fylkeSlug: 'oslo', kommunenummer: '0301' },
  { slug: 'gjesdal', name: 'GJESDAL', fylkeSlug: 'rogaland', kommunenummer: '1122' },
  { slug: 'haugesund', name: 'HAUGESUND', fylkeSlug: 'rogaland', kommunenummer: '1106' },
  { slug: 'haa', name: 'HÅ', fylkeSlug: 'rogaland', kommunenummer: '1119' },
  { slug: 'karmoey', name: 'KARMØY', fylkeSlug: 'rogaland', kommunenummer: '1149' },
  { slug: 'stavanger', name: 'STAVANGER', fylkeSlug: 'rogaland', kommunenummer: '1103' },
  { slug: 'strand', name: 'STRAND', fylkeSlug: 'rogaland', kommunenummer: '1130' },
  { slug: 'time', name: 'TIME', fylkeSlug: 'rogaland', kommunenummer: '1121' },
  { slug: 'midt-telemark', name: 'MIDT-TELEMARK', fylkeSlug: 'telemark', kommunenummer: '4020' },
  { slug: 'porsgrunn', name: 'PORSGRUNN', fylkeSlug: 'telemark', kommunenummer: '4001' },
  { slug: 'skien', name: 'SKIEN', fylkeSlug: 'telemark', kommunenummer: '4003' },
  { slug: 'tinn', name: 'TINN', fylkeSlug: 'telemark', kommunenummer: '4026' },
  { slug: 'harstad', name: 'HARSTAD', fylkeSlug: 'troms', kommunenummer: '5503' },
  { slug: 'lyngen', name: 'LYNGEN', fylkeSlug: 'troms', kommunenummer: '5536' },
  { slug: 'senja', name: 'SENJA', fylkeSlug: 'troms', kommunenummer: '5530' },
  { slug: 'tromsoe', name: 'TROMSØ', fylkeSlug: 'troms', kommunenummer: '5501' },
  { slug: 'hitra', name: 'HITRA', fylkeSlug: 'troendelag', kommunenummer: '5056' },
  { slug: 'indre-fosen', name: 'INDRE FOSEN', fylkeSlug: 'troendelag', kommunenummer: '5054' },
  { slug: 'midtre-gauldal', name: 'MIDTRE GAULDAL', fylkeSlug: 'troendelag', kommunenummer: '5027' },
  { slug: 'namsos', name: 'NAMSOS', fylkeSlug: 'troendelag', kommunenummer: '5007' },
  { slug: 'naeroeysund', name: 'NÆRØYSUND', fylkeSlug: 'troendelag', kommunenummer: '5060' },
  { slug: 'oppdal', name: 'OPPDAL', fylkeSlug: 'troendelag', kommunenummer: '5021' },
  { slug: 'orkland', name: 'ORKLAND', fylkeSlug: 'troendelag', kommunenummer: '5059' },
  { slug: 'roeros', name: 'RØROS', fylkeSlug: 'troendelag', kommunenummer: '5025' },
  { slug: 'stjoerdal', name: 'STJØRDAL', fylkeSlug: 'troendelag', kommunenummer: '5035' },
  { slug: 'verdal', name: 'VERDAL', fylkeSlug: 'troendelag', kommunenummer: '5038' },
  { slug: 'horten', name: 'HORTEN', fylkeSlug: 'vestfold', kommunenummer: '3901' },
  { slug: 'larvik', name: 'LARVIK', fylkeSlug: 'vestfold', kommunenummer: '3909' },
  { slug: 'toensberg', name: 'TØNSBERG', fylkeSlug: 'vestfold', kommunenummer: '3905' },
  { slug: 'askvoll', name: 'ASKVOLL', fylkeSlug: 'vestland', kommunenummer: '4645' },
  { slug: 'bergen', name: 'BERGEN', fylkeSlug: 'vestland', kommunenummer: '4601' },
  { slug: 'etne', name: 'ETNE', fylkeSlug: 'vestland', kommunenummer: '4611' },
  { slug: 'gloppen', name: 'GLOPPEN', fylkeSlug: 'vestland', kommunenummer: '4650' },
  { slug: 'kinn', name: 'KINN', fylkeSlug: 'vestland', kommunenummer: '4602' },
  { slug: 'kvam', name: 'KVAM', fylkeSlug: 'vestland', kommunenummer: '4622' },
  { slug: 'kvinnherad', name: 'KVINNHERAD', fylkeSlug: 'vestland', kommunenummer: '4617' },
  { slug: 'sogndal', name: 'SOGNDAL', fylkeSlug: 'vestland', kommunenummer: '4640' },
  { slug: 'stord', name: 'STORD', fylkeSlug: 'vestland', kommunenummer: '4614' },
  { slug: 'stryn', name: 'STRYN', fylkeSlug: 'vestland', kommunenummer: '4651' },
  { slug: 'sunnfjord', name: 'SUNNFJORD', fylkeSlug: 'vestland', kommunenummer: '4647' },
  { slug: 'voss', name: 'VOSS', fylkeSlug: 'vestland', kommunenummer: '4621' },
  { slug: 'fredrikstad', name: 'FREDRIKSTAD', fylkeSlug: 'oestfold', kommunenummer: '3107' },
  { slug: 'moss', name: 'MOSS', fylkeSlug: 'oestfold', kommunenummer: '3103' },
  { slug: 'raade', name: 'RÅDE', fylkeSlug: 'oestfold', kommunenummer: '3112' },
]

export function getFylkeBySlug(slug: string): Fylke | undefined {
  return fylker.find(f => f.slug === slug)
}

export function getKommuneBySlug(slug: string): Kommune | undefined {
  return kommuner.find(k => k.slug === slug)
}

export function getKommunerByFylke(fylkeSlug: string): Kommune[] {
  return kommuner.filter(k => k.fylkeSlug === fylkeSlug)
}

export function getAllFylkeSlugs(): string[] {
  return fylker.map(f => f.slug)
}

export function getAllKommuneSlugs(): string[] {
  return kommuner.map(k => k.slug)
}
