import Link from 'next/link'
import { fylker } from '@/data/geografi'
import { getStoresByFylke, stores } from '@/lib/stores'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Hvitevarebutikker i hele Norge 2026', description: 'Finn hvitevarebutikker over hele Norge. ' + stores.length + ' butikker i alle 15 fylker.', path: 'fylker' })

export default function FylkerPage() {
  const sections = fylker.map(f => ({ id: f.slug, label: f.name }))
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Alle fylker' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">Hvitevarebutikker over hele Norge</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">{stores.length} butikker fordelt på alle 15 fylker.</p>
        </div>
      </section>

    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{fylker.map(f => {
            const fStores = getStoresByFylke(f.slug)
            return (
              <Link key={f.slug} href={'/fylke/' + f.slug + '/'} data-section-id={f.slug} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all scroll-mt-20">
                <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors">{f.name}</h2>
                <div className="flex gap-4 mt-2 text-sm text-slate-500"><span className="text-aqua-600 font-semibold">{fStores.length} butikker</span><span>{f.kommuner.length} kommuner</span></div>
              </Link>
            )
          })}</div>
        </div>
        <PageSidebar sections={sections} />
      </div>
    </div>
    </>
  )
}
