import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import { IconEnergi, IconWasher } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Interaktive verktøy | Vaskemaskin.no', description: 'Energikalkulator og vaskemaskinvelger. Interaktive verktøy for å finne og sammenligne vaskemaskiner.', path: 'verktoy' })

export default function VerktoyPage() {
  const sections = [{ id: 'verktoy', label: 'Våre verktøy' }]
  return (
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Verktøy' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Interaktive verktøy</h1>
          <p className="text-lg text-slate-600 mb-10">Bruk våre verktøy for å finne den perfekte vaskemaskinen og beregne kostnadene.</p>
          <div data-section-id="verktoy" className="scroll-mt-20 grid sm:grid-cols-2 gap-5">
            <Link href="/verktoy/energikalkulator/" className="group p-6 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600 mb-4 group-hover:bg-aqua-100 transition-colors"><IconEnergi size={28} /></div>
              <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">Energikalkulator</h2>
              <p className="text-sm text-slate-500 mb-3">Beregn hva vaskemaskinen koster i strøm per år basert på energiklasse, vaskefrekvens og strømpris.</p>
              <span className="text-xs font-semibold text-aqua-600">Prøv kalkulatoren</span>
            </Link>
            <Link href="/verktoy/vaskemaskinvelger/" className="group p-6 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600 mb-4 group-hover:bg-aqua-100 transition-colors"><IconWasher size={28} /></div>
              <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">Vaskemaskinvelger</h2>
              <p className="text-sm text-slate-500 mb-3">Svar på tre spørsmål om husstand, plass og budsjett og få personlig anbefaling med merker og modeller.</p>
              <span className="text-xs font-semibold text-aqua-600">Start quizen</span>
            </Link>
          </div>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
          { href: '/artikkel/energimerking-forklart/', label: 'Energimerking forklart' },
          { href: '/artikkel/beste-vaskemaskin-2026/', label: 'Beste vaskemaskin 2026' },
        ]} showQuiz={false} />
      </div>
    </div>
  )
}
