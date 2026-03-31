import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import { IconTrendingUp, IconTarget, IconWasher } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Verktøy for bedrift | Kalkulatorer og velgere',
  description: 'Interaktive verktøy for bedrifter. ROI kalkulator for eget vaskeri, kapasitetsplanlegger og maskinvelger for profesjonelle vaskemaskiner.',
  path: 'bedrift/verktoy',
})

const tools = [
  { href: '/bedrift/verktoy/vaskeri-roi/', icon: IconTrendingUp, title: 'Vaskeri ROI kalkulator', desc: 'Beregn lønnsomheten av eget vaskeri vs. outsourcing. Se breakeven punkt, årlig besparelse og totalkostnad over tid.', cta: 'Beregn ROI' },
  { href: '/bedrift/verktoy/kapasitetsplanlegger/', icon: IconTarget, title: 'Kapasitetsplanlegger', desc: 'Legg inn bransje, antall enheter og vaskebehov. Få anbefalt antall maskiner, kapasitet og estimert investering.', cta: 'Planlegg kapasitet' },
  { href: '/bedrift/verktoy/maskinvelger/', icon: IconWasher, title: 'Bedriftsmaskinvelger', desc: 'Svar på 5 spørsmål om bransje, volum og krav. Få skreddersydd anbefaling med maskintype, kapasitet og leverandør.', cta: 'Finn riktig maskin' },
]

export default function BedriftVerktoyPage() {
  const sections = [{ id: 'verktoy', label: 'Verktøy for bedrift' }]
  return (
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Verktøy' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Verktøy for bedrift</h1>
          <p className="text-lg text-slate-600 mb-10">Interaktive kalkulatorer og velgere som hjelper deg å ta riktig beslutning om profesjonelle vaskemaskiner.</p>
          <div data-section-id="verktoy" className="scroll-mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool, i) => (
              <Link key={i} href={tool.href} className="group p-6 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600 mb-4 group-hover:bg-aqua-100 transition-colors"><tool.icon size={28} /></div>
                <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">{tool.title}</h2>
                <p className="text-sm text-slate-500 mb-3">{tool.desc}</p>
                <span className="text-xs font-semibold text-aqua-600">{tool.cta}</span>
              </Link>
            ))}
          </div>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/bedrift/', label: 'Bedriftsoversikt' },
          { href: '/bedrift/prisguide/', label: 'Prisguide bedrift' },
          { href: '/bedrift/hygienestandarder/', label: 'Hygienestandarder' },
          { href: '/verktoy/', label: 'Verktøy for forbrukere' },
        ]} />
      </div>
    </div>
  )
}
