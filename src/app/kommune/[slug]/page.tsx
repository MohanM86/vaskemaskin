import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getKommuneBySlug, getAllKommuneSlugs, getFylkeBySlug, getKommunerByFylke } from '@/data/geografi'
import { getStoresByKommune } from '@/lib/stores'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllKommuneSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const k = getKommuneBySlug(params.slug)
  if (!k) return {}
  const stores = getStoresByKommune(params.slug)
  return createMeta({ title: 'Hvitevarebutikker i ' + k.name + ' | ' + stores.length + ' butikker', description: 'Finn hvitevarebutikker i ' + k.name + '. ' + stores.length + ' butikker med adresser.', path: 'kommune/' + k.slug })
}

export default function KommunePage({ params }: { params: { slug: string } }) {
  const kommune = getKommuneBySlug(params.slug)
  if (!kommune) notFound()
  const stores = getStoresByKommune(params.slug)
  const fylke = getFylkeBySlug(kommune.fylkeSlug)
  const naboKommuner = getKommunerByFylke(kommune.fylkeSlug).filter(k => k.slug !== params.slug)

  const sections = [
    { id: 'butikker', label: 'Butikker (' + stores.length + ')' },
    { id: 'cta', label: 'Trenger du hjelp?' },
    ...(naboKommuner.length > 0 ? [{ id: 'nabo', label: 'Nabokommuner' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: fylke?.name || '', url: 'https://vaskemaskin.no/fylke/' + kommune.fylkeSlug + '/' }, { name: kommune.name, url: 'https://vaskemaskin.no/kommune/' + kommune.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: fylke?.name || '', href: '/fylke/' + kommune.fylkeSlug + '/' }, { label: kommune.name }]} />
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Hvitevarebutikker i {kommune.name}</h1>
            <p className="text-lg text-slate-600 mb-8">{stores.length} butikker som selger vaskemaskiner i {kommune.name}, {fylke?.name}.</p>

            <section data-section-id="butikker" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Butikker i {kommune.name}</h2>
              {stores.length > 0 ? (
                <div className="space-y-3">{stores.map(store => (
                  <Link key={store.slug} href={'/butikk/' + store.slug + '/'} className="block p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-sm transition-all">
                    <div className="text-base font-semibold text-slate-900">{store.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{store.address}</div>
                    <div className="text-sm text-slate-400 mt-0.5">{store.postnummer} {store.poststed}</div>
                    {store.ansatte > 0 && <div className="text-xs text-aqua-600 mt-2">{store.ansatte} ansatte</div>}
                  </Link>
                ))}</div>
              ) : (<p className="text-slate-500">Ingen registrerte hvitevarebutikker i {kommune.name} for øyeblikket.</p>)}
            </section>

            <section data-section-id="cta" className="scroll-mt-20 mb-10 p-6 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Trenger du ny vaskemaskin i {kommune.name}?</h3>
              <p className="text-sm text-slate-600 mb-4">Les vår komplette kjøpsguide for å finne den modellen som passer best.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary text-sm">Les kjøpsguiden</Link>
                <Link href="/verktoy/vaskemaskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Prøv vaskemaskinvelgeren</Link>
              </div>
            </section>

            {naboKommuner.length > 0 && (
              <section data-section-id="nabo" className="scroll-mt-20">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre kommuner i {fylke?.name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {naboKommuner.slice(0, 12).map(k => (<Link key={k.slug} href={'/kommune/' + k.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-slate-700 transition-colors">{k.name}</Link>))}
                </div>
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[
            { href: '/fylke/' + kommune.fylkeSlug + '/', label: 'Alle butikker i ' + (fylke?.name || '') },
            { href: '/butikker/', label: 'Alle butikker i Norge' },
            { href: '/fylker/', label: 'Alle fylker' },
          ]} />
        </div>
      </div>
    </>
  )
}
