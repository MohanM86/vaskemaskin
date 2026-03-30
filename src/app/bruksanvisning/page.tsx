import Link from 'next/link'
import { manuals } from '@/data/bruksanvisning'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'


export const metadata = createMeta({ title: 'Bruksanvisning vaskemaskin | Alle merker', description: 'Bruksanvisninger for vaskemaskiner fra Samsung, Bosch, LG, Electrolux, Miele og flere. Programmer, symboler og dosering.', path: 'bruksanvisning' })

export default function BruksanvisningPage() {
  const sections = manuals.map(m => ({ id: m.slug, label: m.name }))
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bruksanvisning', url: 'https://vaskemaskin.no/bruksanvisning/' }])) }} />
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bruksanvisning' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Bruksanvisning for vaskemaskiner</h1>
          <p className="text-lg text-slate-600 mb-10">Velg merket ditt for å finne programmer, symboler, dosering og vedlikeholdstips.</p>
          <div className="grid sm:grid-cols-2 gap-4">{manuals.map(m => (
            <Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} data-section-id={m.slug} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all scroll-mt-20">
              <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">{m.name}</h2>
              <p className="text-sm text-slate-500 line-clamp-2">{m.intro}</p>
            </Link>
          ))}</div>
        </div>
        <PageSidebar sections={sections} relatedLinks={[{ href: '/feilkode/', label: 'Alle feilkoder' }, { href: '/artikkel/vaskemiddel-guide/', label: 'Vaskemiddelguide' }]} />
      </div>
    </div>
    </>
  )
}