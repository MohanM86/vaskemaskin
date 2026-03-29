export interface Fylke {
  name: string
  slug: string
  nummer: string
  kommunerCount: number
}

export const fylker: Fylke[] = [
  {
    name: "Oslo",
    slug: "oslo",
    nummer: "03",
    kommunerCount: 1,
  },
  {
    name: "Rogaland",
    slug: "rogaland",
    nummer: "11",
    kommunerCount: 23,
  },
  {
    name: "More og Romsdal",
    slug: "more-og-romsdal",
    nummer: "15",
    kommunerCount: 26,
  },
  {
    name: "Nordland",
    slug: "nordland",
    nummer: "18",
    kommunerCount: 38,
  },
  {
    name: "Viken",
    slug: "viken",
    nummer: "30",
    kommunerCount: 44,
  },
  {
    name: "Innlandet",
    slug: "innlandet",
    nummer: "34",
    kommunerCount: 46,
  },
  {
    name: "Vestfold og Telemark",
    slug: "vestfold-og-telemark",
    nummer: "38",
    kommunerCount: 24,
  },
  {
    name: "Agder",
    slug: "agder",
    nummer: "42",
    kommunerCount: 28,
  },
  {
    name: "Vestland",
    slug: "vestland",
    nummer: "46",
    kommunerCount: 43,
  },
  {
    name: "Trondelag",
    slug: "trondelag",
    nummer: "50",
    kommunerCount: 35,
  },
  {
    name: "Troms og Finnmark",
    slug: "troms-og-finnmark",
    nummer: "54",
    kommunerCount: 37,
  },
]

export function getFylkeBySlug(slug: string): Fylke | undefined {
  return fylker.find(function(f) { return f.slug === slug })
}