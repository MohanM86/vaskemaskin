import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Bedriftsmaskinvelger | Finn riktig profesjonell vaskemaskin',
  description: 'Svar på 4 spørsmål om bransje, volum, hygienekrav og budsjett. Få skreddersydd anbefaling med maskintype, kapasitet og leverandor.',
  path: 'bedrift/verktøy/maskinvelger',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
