import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import { IconEnergi, IconWasher, IconTrendingUp, IconTarget } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Interaktive verktøy for vaskemaskin 2026', description: 'Energikalkulator, vaskemaskinvelger, kapasitetskalkulator og prissammenligning. Interaktive verktøy for å finne og sammenligne vaskemaskiner.', path: 'verktoy' })

const tools = [
  { href: '/verktoy/energikalkulator/', icon: IconEnergi, title: 'Energikalkulator', desc: 'Beregn hva vaskemaskinen koster i strøm per år basert på energiklasse, vaskefrekvens og strømpris.', cta: 'Beregn strømkostnad' },
  { href: '/verktoy/vaskemaskinvelger/', icon: IconWasher, title: 'Vaskemaskinvelger', desc: 'Svar på tre spørsmål om husstand, plass og budsjett og få personlig anbefaling med merker og modeller.', cta: 'Start quizen' },
  { href: '/verktoy/kapasitetskalkulator/', icon: IconWasher, title: 'Kapasitetskalkulator', desc: 'Finn riktig trommelstørrelse basert på antall personer, vaskefrekvens og spesielle behov som dyner og kjæledyr.', cta: 'Finn riktig størrelse' },
  { href: '/verktoy/sammenlign-pris/', icon: IconTarget, title: 'Sammenlign pris per år', desc: 'Sammenlign totalkostnaden for to maskiner over tid inkludert innkjøp, strøm og forventet levetid.', cta: 'Sammenlign maskiner' },
  { href: '/verktoy/reparere-eller-bytte/', icon: IconTrendingUp, title: 'Reparere eller bytte?', desc: 'Finn ut om det lønner seg å reparere den gamle maskinen eller kjøpe ny basert på alder, kostnad og restlevetid.', cta: 'Sjekk hva som lønner seg' },
]

export default function VerktoyPage() {
  const sections = [{ id: 'verktoy', label: 'Våre verktøy' }]
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Verktøy' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">Interaktive verktøy</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">Bruk våre kalkulatorer og verktøy for å ta informerte beslutninger om vaskemaskinen din.</p>
        </div>
      </section>

    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <div data-section-id="verktoy" className="scroll-mt-20 grid sm:grid-cols-2 gap-5">
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
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
          { href: '/artikkel/energimerking-forklart/', label: 'Energimerking forklart' },
          { href: '/artikkel/spare-strom-vaskemaskin/', label: 'Spare strøm' },
        ]} showQuiz={false} />
      </div>
    </div>
    </>
  )
}
