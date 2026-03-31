import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Vaskeri ROI kalkulator | Eget vaskeri vs. outsourcing',
  description: 'Beregn om det lønner seg å investere i eget vaskeri eller fortsette med ekstern vaskerileverandør. Juster tallene til din virksomhet og se resultatet.',
  path: 'bedrift/verktoy/vaskeri-roi',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
