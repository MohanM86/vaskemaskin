import Link from 'next/link'
import { errorBrands } from '@/data/feilkoder'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'


export const metadata = createMeta({ title: 'Feilkoder vaskemaskin | Alle merker 2026', description: 'Komplett oversikt over feilkoder på vaskemaskiner fra Samsung, Bosch, LG, Electrolux, Siemens, Miele, AEG, Whirlpool, ASKO og Grundig.', path: 'feilkode' })

export default function FeilkodeOverviewPage() {
  const totalCodes = errorBrands.reduce((sum, b) => sum + b.codes.length, 0)
  const sections = errorBrands.map(b => ({ id: b.slug, label: b.name + ' (' + b.codes.length + ')' }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Feilkoder', url: 'https://vaskemaskin.no/feilkode/' }])) }} />
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Feilkoder på vaskemaskiner</h1>
          <p className="text-lg text-slate-600 mb-4">{totalCodes} feilkoder fra {errorBrands.length} merker. Velg ditt merke for å finne ut hva koden betyr.</p>

          <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200 mb-10">
            <h2 className="text-sm font-bold text-aqua-800 mb-2">Slik bruker du feilkodeoversikten</h2>
            <p className="text-sm text-aqua-900">Finn merket ditt i listen nedenfor og klikk for å se alle feilkoder med forklaringer og løsninger. De fleste feil kan du fikse selv uten servicetekniker.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {errorBrands.map(brand => (
              <Link key={brand.slug} href={'/feilkode/' + brand.slug + '/'} data-section-id={brand.slug} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all scroll-mt-20">
                <h2 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-2">{brand.name}</h2>
                <p className="text-sm text-slate-500 mb-3">{brand.codes.length} feilkoder forklart</p>
                <div className="flex flex-wrap gap-1.5">{brand.codes.slice(0, 5).map((c: any) => (<span key={c.slug} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{c.code}</span>))}{brand.codes.length > 5 && <span className="text-xs text-slate-400">+{brand.codes.length - 5}</span>}</div>
              </Link>
            ))}
          </div>
        </div>
        <PageSidebar sections={sections} showQuiz={true} ctaTitle="Trenger du ny maskin?" ctaText="Kanskje det lønner seg å bytte?" ctaLink="/artikkel/naar-bytte-vaskemaskin/" ctaLinkText="Les mer" />
      </div>
    </div>
    </>
  )
}