import Link from 'next/link'
import { fylker } from '@/data/geografi'
import { getStoresByFylke } from '@/lib/stores'
import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Hvitevarebutikker i alle fylker | Vaskemaskin.no', description: 'Finn hvitevarebutikker over hele Norge. Oversikt over alle 15 fylker med antall butikker og kommuner.', path: 'fylker' })

export default function FylkerPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Alle fylker' }]} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Hvitevarebutikker over hele Norge</h1>
      <p className="text-lg text-slate-600 mb-10">Finn butikker som selger vaskemaskiner i alle 15 fylker.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fylker.map(f => {
          const stores = getStoresByFylke(f.slug)
          return (
            <Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
              <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors">{f.name}</h2>
              <div className="flex gap-4 mt-2 text-sm text-slate-500">
                <span className="text-aqua-600 font-semibold">{stores.length} butikker</span>
                <span>{f.kommuner.length} kommuner</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
