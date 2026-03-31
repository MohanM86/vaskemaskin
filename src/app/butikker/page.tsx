import Link from 'next/link'
import { stores } from '@/lib/stores'
import { fylker } from '@/data/geografi'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Alle hvitevarebutikker i Norge | Vaskemaskin.no', description: 'Komplett oversikt over ' + stores.length + ' hvitevarebutikker i Norge.', path: 'butikker' })

export default function ButikkerPage() {
  const sections = fylker.filter(f => stores.some(s => s.fylkeSlug === f.slug)).map(f => ({ id: f.slug, label: f.name }))
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Alle butikker' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">Alle hvitevarebutikker i Norge</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-10">{stores.length} butikker fordelt over hele landet.</p>
        </div>
      </section>

    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          {fylker.map(f => {
            const fylkeStores = stores.filter(s => s.fylkeSlug === f.slug)
            if (fylkeStores.length === 0) return null
            return (
              <section key={f.slug} data-section-id={f.slug} className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4"><Link href={'/fylke/' + f.slug + '/'} className="hover:text-aqua-700 transition-colors">{f.name}</Link><span className="text-sm font-normal text-slate-400 ml-2">{fylkeStores.length} butikker</span></h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">{fylkeStores.map(store => (
                  <Link key={store.slug} href={'/butikk/' + store.slug + '/'} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <div><div className="text-sm font-medium text-slate-800">{store.name}</div><div className="text-xs text-slate-400">{store.kommune}</div></div>
                  </Link>
                ))}</div>
              </section>
            )
          })}
        </div>
        <PageSidebar sections={sections} />
      </div>
    </div>
    </>
  )
}
