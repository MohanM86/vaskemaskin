import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFylkeBySlug, getAllFylkeSlugs, getKommunerByFylke, fylker } from '@/data/geografi'
import { getStoresByFylke } from '@/lib/stores'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllFylkeSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const f = getFylkeBySlug(params.slug)
  if (!f) return {}
  const stores = getStoresByFylke(params.slug)
  return createMeta({ title: 'Hvitevarebutikker i ' + f.name + ' | ' + stores.length + ' butikker', description: 'Finn hvitevarebutikker i ' + f.name + '. ' + stores.length + ' butikker fordelt på ' + f.kommuner.length + ' kommuner.', path: 'fylke/' + f.slug })
}

export default function FylkePage({ params }: { params: { slug: string } }) {
  const fylke = getFylkeBySlug(params.slug)
  if (!fylke) notFound()
  const kommuner = getKommunerByFylke(params.slug)
  const stores = getStoresByFylke(params.slug)
  const otherFylker = fylker.filter(f => f.slug !== params.slug)

  const sections = [
    { id: 'stats', label: 'Oversikt' },
    { id: 'kommuner', label: 'Kommuner (' + kommuner.length + ')' },
    { id: 'butikker', label: 'Alle butikker (' + stores.length + ')' },
    { id: 'andre', label: 'Andre fylker' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Fylker', url: 'https://vaskemaskin.no/fylker/' }, { name: fylke.name, url: 'https://vaskemaskin.no/fylke/' + fylke.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Fylker', href: '/fylker/' }, { label: fylke.name }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">Hvitevarebutikker i {fylke.name}</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">{stores.length} butikker som selger vaskemaskiner fordelt på {kommuner.length} kommuner i {fylke.name}.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            <section data-section-id="stats" className="scroll-mt-20 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-5 rounded-xl bg-aqua-50 border border-aqua-200"><div className="font-serif text-3xl font-bold text-aqua-600">{stores.length}</div><div className="text-sm text-slate-500 mt-1">butikker</div></div>
                <div className="text-center p-5 rounded-xl bg-aqua-50 border border-aqua-200"><div className="font-serif text-3xl font-bold text-aqua-600">{kommuner.length}</div><div className="text-sm text-slate-500 mt-1">kommuner</div></div>
              </div>
            </section>

            <section data-section-id="kommuner" className="scroll-mt-20 mb-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Kommuner i {fylke.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {kommuner.map(k => {
                  const count = stores.filter(s => s.kommuneSlug === k.slug).length
                  return (
                    <Link key={k.slug} href={'/kommune/' + k.slug + '/'} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                      <span className="text-sm font-medium text-slate-700">{k.name}</span>
                      <span className="text-xs text-aqua-600 font-semibold bg-aqua-50 px-2 py-0.5 rounded-full">{count}</span>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section data-section-id="butikker" className="scroll-mt-20 mb-12">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Alle butikker i {fylke.name}</h2>
              <div className="space-y-2">
                {stores.map(store => (
                  <Link key={store.slug} href={'/butikk/' + store.slug + '/'} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <div><div className="text-sm font-semibold text-slate-900">{store.name}</div><div className="text-xs text-slate-500 mt-0.5">{store.address}, {store.postnummer} {store.poststed}</div></div>
                    <span className="text-xs text-slate-400">{store.kommune}</span>
                  </Link>
                ))}
              </div>
            </section>

            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre fylker</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {otherFylker.map(f => (<Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{f.name}</Link>))}
              </div>
            </section>
          </div>
          <PageSidebar sections={sections} relatedLinks={kommuner.slice(0, 5).map(k => ({ href: '/kommune/' + k.slug + '/', label: k.name }))} ctaTitle="Forbered deg" ctaText="Les kjøpsguiden før du besøker butikken." ctaLink="/artikkel/komplett-kjopsguide-2026/" ctaLinkText="Les guiden" />
        </div>
      </div>
    </>
  )
}
