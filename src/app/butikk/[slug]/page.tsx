import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getStoreBySlug, getAllStoreSlugs, getStoresByKommune } from '@/lib/stores'
import { getKommuneBySlug } from '@/data/geografi'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllStoreSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const store = getStoreBySlug(params.slug)
  if (!store) return {}
  return createMeta({ title: store.name + ' | Hvitevarebutikk i ' + store.kommune, description: store.name + ' i ' + store.kommune + '. Hvitevarebutikk med adresse ' + store.address + ', ' + store.postnummer + ' ' + store.poststed + '.', path: 'butikk/' + store.slug })
}

export default function ButikkPage({ params }: { params: { slug: string } }) {
  const store = getStoreBySlug(params.slug)
  if (!store) notFound()
  const otherStores = getStoresByKommune(store.kommuneSlug).filter(s => s.slug !== params.slug)

  const localBizSchema = { '@context': 'https://schema.org', '@type': 'Store', name: store.name, address: { '@type': 'PostalAddress', streetAddress: store.address, postalCode: store.postnummer, addressLocality: store.poststed, addressRegion: store.fylke, addressCountry: 'NO' }, ...(store.ansatte > 0 ? { numberOfEmployees: { '@type': 'QuantitativeValue', value: store.ansatte } } : {}) }

  const sections = [
    { id: 'info', label: 'Kontaktinformasjon' },
    { id: 'kart', label: 'Beliggenhet' },
    ...(otherStores.length > 0 ? [{ id: 'andre', label: 'Andre butikker' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBizSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: store.fylke, url: 'https://vaskemaskin.no/fylke/' + store.fylkeSlug + '/' }, { name: store.kommune, url: 'https://vaskemaskin.no/kommune/' + store.kommuneSlug + '/' }, { name: store.name, url: 'https://vaskemaskin.no/butikk/' + store.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: store.fylke, href: '/fylke/' + store.fylkeSlug + '/' }, { label: store.kommune, href: '/kommune/' + store.kommuneSlug + '/' }, { label: store.name }]} />

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{store.name}</h1>
            <p className="text-base text-slate-500 mb-8">Hvitevarebutikk i {store.kommune}, {store.fylke}</p>

            <section data-section-id="info" className="scroll-mt-20 mb-8">
              <div className="p-6 rounded-xl border border-slate-200 bg-white">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Kontaktinformasjon</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Adresse</span><span className="text-slate-800 font-medium">{store.address}</span></div>
                  <div className="flex justify-between border-t border-slate-100 pt-3"><span className="text-slate-500">Postnummer</span><span className="text-slate-800 font-medium">{store.postnummer} {store.poststed}</span></div>
                  <div className="flex justify-between border-t border-slate-100 pt-3"><span className="text-slate-500">Kommune</span><Link href={'/kommune/' + store.kommuneSlug + '/'} className="text-aqua-600 font-medium hover:underline">{store.kommune}</Link></div>
                  <div className="flex justify-between border-t border-slate-100 pt-3"><span className="text-slate-500">Fylke</span><Link href={'/fylke/' + store.fylkeSlug + '/'} className="text-aqua-600 font-medium hover:underline">{store.fylke}</Link></div>
                  {store.ansatte > 0 && <div className="flex justify-between border-t border-slate-100 pt-3"><span className="text-slate-500">Ansatte</span><span className="text-slate-800 font-medium">{store.ansatte}</span></div>}
                  <div className="flex justify-between border-t border-slate-100 pt-3"><span className="text-slate-500">Org.nr</span><span className="text-slate-800 font-medium">{store.orgnr}</span></div>
                </div>
              </div>
            </section>

            <section data-section-id="kart" className="scroll-mt-20 mb-8">
              <div className="p-6 rounded-xl bg-aqua-50 border border-aqua-200">
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Skal du kjøpe vaskemaskin?</h3>
                <p className="text-sm text-slate-600 mb-4">Les vår kjøpsguide for å være godt forberedt før du besøker butikken.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary text-sm">Les kjøpsguiden</Link>
                  <Link href="/verktoy/vaskemaskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Finn din maskin</Link>
                </div>
              </div>
            </section>

            {otherStores.length > 0 && (
              <section data-section-id="andre" className="scroll-mt-20">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Andre butikker i {store.kommune}</h2>
                <div className="space-y-2">{otherStores.map(s => (
                  <Link key={s.slug} href={'/butikk/' + s.slug + '/'} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <span className="text-sm font-medium text-slate-700">{s.name}</span>
                    <span className="text-xs text-slate-400">{s.poststed}</span>
                  </Link>
                ))}</div>
              </section>
            )}
          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/kommune/' + store.kommuneSlug + '/', label: 'Alle butikker i ' + store.kommune },
            { href: '/fylke/' + store.fylkeSlug + '/', label: 'Butikker i ' + store.fylke },
            { href: '/butikker/', label: 'Alle butikker i Norge' },
          ]} ctaTitle="Forbered deg før kjøp" ctaText="Les vår kjøpsguide med alt du trenger å vite." ctaLink="/artikkel/komplett-kjopsguide-2026/" ctaLinkText="Les guiden" />
        </div>
      </div>
    </>
  )
}
