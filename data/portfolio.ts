export interface PortfolioSite {
  name: string
  domain: string
  url: string
  description: string
  category: string
  active: boolean
}

export var portfolioSites: PortfolioSite[] = [
  {
    name: 'vaskemaskin.no',
    domain: 'vaskemaskin.no',
    url: 'https://vaskemaskin.no',
    description: 'Norges komplette ressurs for vaskemaskiner',
    category: 'Vaskemaskin',
    active: true,
  },
  {
    name: 'komfyr.no',
    domain: 'komfyr.no',
    url: 'https://komfyr.no',
    description: 'Alt om komfyrer, stekeovner og platetopper',
    category: 'Komfyr',
    active: false,
  },
  {
    name: 'hvitevare.no',
    domain: 'hvitevare.no',
    url: 'https://hvitevare.no',
    description: 'Norges hvitevareportal',
    category: 'Hvitevarer',
    active: false,
  },
]

export var currentSite = portfolioSites[0]

export function getOtherSites(): PortfolioSite[] {
  return portfolioSites.filter(function(s) { return s.domain !== currentSite.domain })
}
