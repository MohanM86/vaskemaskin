import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Kapasitetsplanlegger for bedrift | Antall maskiner og investering',
  description: 'Velg bransje og antall enheter for aa beregne anbefalt antall vaskemaskiner, maskinkapasitet og estimert investering.',
  path: 'bedrift/verktoy/kapasitetsplanlegger',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
