import storesData from '@/data/stores.json'

export interface Store {
  slug: string
  name: string
  orgnr: string
  address: string
  postnummer: string
  poststed: string
  kommune: string
  kommuneSlug: string
  kommunenummer: string
  fylke: string
  fylkeSlug: string
  ansatte: number
}

export const stores: Store[] = storesData as Store[]

export function getStoreBySlug(slug: string): Store | undefined {
  return stores.find(s => s.slug === slug)
}

export function getStoresByKommune(kommuneSlug: string): Store[] {
  return stores.filter(s => s.kommuneSlug === kommuneSlug)
}

export function getStoresByFylke(fylkeSlug: string): Store[] {
  return stores.filter(s => s.fylkeSlug === fylkeSlug)
}

export function getAllStoreSlugs(): string[] {
  return stores.map(s => s.slug)
}

export function getStoreCount(): number {
  return stores.length
}
