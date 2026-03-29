import Link from 'next/link'
import { errorBrands } from '@/data/feilkoder'
import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Feilkoder vaskemaskin | Alle merker og koder', description: 'Komplett oversikt over feilkoder på vaskemaskiner fra Samsung, Bosch, LG, Electrolux, Siemens, Miele, AEG, Whirlpool, ASKO og Grundig. Finn ut hva koden betyr og hva du kan gjøre selv.', path: 'feilkode' })

export default function FeilkodeOverviewPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder' }]} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Feilkoder på vaskemaskiner</h1>
      <p className="text-lg text-slate-600 mb-10">Velg merket ditt for å finne ut hva feilkoden betyr og hvordan du kan løse problemet selv.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {errorBrands.map(brand => (
          <Link key={brand.slug} href={'/feilkode/' + brand.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
            <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">{brand.name}</h2>
            <p className="text-sm text-slate-500 mb-3">{brand.codes.length} feilkoder forklart</p>
            <div className="flex flex-wrap gap-1.5">{brand.codes.slice(0, 5).map(c => (<span key={c.slug} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{c.code}</span>))}{brand.codes.length > 5 && <span className="text-xs text-slate-400">+{brand.codes.length - 5} til</span>}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
