import Link from 'next/link'
import { manuals } from '@/data/bruksanvisning'
import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Bruksanvisning vaskemaskin | Alle merker', description: 'Bruksanvisninger for vaskemaskiner fra Samsung, Bosch, LG, Electrolux, Miele og flere. Programmer, symboler og dosering forklart.', path: 'bruksanvisning' })

export default function BruksanvisningPage() {
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bruksanvisning' }]} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Bruksanvisning for vaskemaskiner</h1>
      <p className="text-lg text-slate-600 mb-10">Velg merket ditt for å finne programmer, symboler, dosering og vedlikeholdstips.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {manuals.map(m => (
          <Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
            <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">{m.name}</h2>
            <p className="text-sm text-slate-500 line-clamp-2">{m.intro}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
