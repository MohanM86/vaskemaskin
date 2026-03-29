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
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Alle butikker' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Alle hvitevarebutikker i Norge</h1>
          <p className="text-lg text-slate-600 mb-10">{stores.length} butikker fordelt over hele landet.</p>
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
  )
}
