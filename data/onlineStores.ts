export interface OnlineStore {
  id: string
  name: string
  url: string
  affiliateUrl: string | null
  affiliateActive: boolean
  freeShippingOver: number | null
  deliveryDays: string
  description: string
}

export var onlineStores: OnlineStore[] = [
  {
    id: 'elkjop',
    name: 'Elkjop',
    url: 'https://www.elkjop.no',
    affiliateUrl: null,
    affiliateActive: false,
    freeShippingOver: 500,
    deliveryDays: '1-4 virkedager',
    description: 'Norges storste elektronikkjede med bredt utvalg av vaskemaskiner fra alle merker.',
  },
  {
    id: 'power',
    name: 'Power',
    url: 'https://www.power.no',
    affiliateUrl: null,
    affiliateActive: false,
    freeShippingOver: 500,
    deliveryDays: '1-5 virkedager',
    description: 'Elektronikkjede med konkurransedyktige priser pa vaskemaskiner.',
  },
  {
    id: 'komplett',
    name: 'Komplett',
    url: 'https://www.komplett.no',
    affiliateUrl: null,
    affiliateActive: false,
    freeShippingOver: 500,
    deliveryDays: '1-3 virkedager',
    description: 'Norges storste nettbutikk med rask levering.',
  },
  {
    id: 'skousen',
    name: 'Skousen',
    url: 'https://www.skousen.no',
    affiliateUrl: null,
    affiliateActive: false,
    freeShippingOver: 0,
    deliveryDays: '2-5 virkedager',
    description: 'Hvitevarespesialist med fokus pa kvalitet og service.',
  },
  {
    id: 'hvitevarelandet',
    name: 'Hvitevarelandet',
    url: 'https://www.hvitevarelandet.no',
    affiliateUrl: null,
    affiliateActive: false,
    freeShippingOver: 0,
    deliveryDays: '3-7 virkedager',
    description: 'Spesialist pa hvitevarer med stort utvalg.',
  },
]
