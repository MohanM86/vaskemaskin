import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Vaskeri ROI kalkulator | Eget vaskeri vs. outsourcing',
  description: 'Beregn om det loenner seg aa investere i eget vaskeri eller fortsette med ekstern vaskerileverandor. Juster tallene til din virksomhet og se resultatet.',
  path: 'bedrift/verktoy/vaskeri-roi',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
