import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Bedriftsmaskinvelger | Finn riktig profesjonell vaskemaskin',
  description: 'Svar paa 4 sporsmal om bransje, volum, hygienekrav og budsjett. Faa skreddersydd anbefaling med maskintype, kapasitet og leverandor.',
  path: 'bedrift/verktoy/maskinvelger',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
