import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getFylkeBySlug, getAllFylkeSlugs, getKommunerByFylke, fylker } from '@/data/geografi'
import { getStoresByFylke } from '@/lib/stores'
import { Breadcrumbs } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllFylkeSlugs().map(slug => ({ slug })) }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const fylke = getFylkeBySlug(params.slug)
  if (!fylke) return {}
  const stores = getStoresByFylke(params.slug)
  return createMeta({
    title: 'Hvitevarebutikker i ' + fylke.name + ' | ' + stores.length + ' butikker',
    description: 'Finn hvitevarebutikker i ' + fylke.name + '. Oversikt over ' + stores.length + ' butikker som selger vaskemaskiner fordelt på ' + fylke.kommuner.length + ' kommuner.',
    path: 'fylke/' + fylke.slug,
  })
}

export default function FylkePage({ params }: { params: { slug: string } }) {
  const fylke = getFylkeBySlug(params.slug)
  if (!fylke) notFound()
  const kommuner = getKommunerByFylke(params.slug)
  const stores = getStoresByFylke(params.slug)
  const otherFylker = fylker.filter(f => f.slug !== params.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([
        { name: 'Hjem', url: 'https://vaskemaskin.no/' },
        { name: 'Fylker', url: 'https://vaskemaskin.no/fylker/' },
        { name: fylke.name, url: 'https://vaskemaskin.no/fylke/' + fylke.slug + '/' },
      ])) }} />
      <div className="container-site py-10">
        <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Fylker', href: '/fylker/' }, { label: fylke.name }]} />
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Hvitevarebutikker i {fylke.name}</h1>
        <p className="text-lg text-slate-600 mb-8">{stores.length} butikker som selger vaskemaskiner fordelt på {kommuner.length} kommuner i {fylke.name}.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-aqua-50 rounded-xl"><div className="font-serif text-2xl font-bold text-aqua-600">{stores.length}</div><div className="text-sm text-slate-500 mt-1">butikker</div></div>
          <div className="text-center p-4 bg-aqua-50 rounded-xl"><div className="font-serif text-2xl font-bold text-aqua-600">{kommuner.length}</div><div className="text-sm text-slate-500 mt-1">kommuner</div></div>
        </div>

        <section className="mb-12">
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

        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Alle butikker i {fylke.name}</h2>
          <div className="space-y-2">
            {stores.map(store => (
              <Link key={store.slug} href={'/butikk/' + store.slug + '/'} className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                <div>
                  <div className="text-sm font-semibold text-slate-900">{store.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{store.address}, {store.postnummer} {store.poststed}</div>
                </div>
                <span className="text-xs text-slate-400">{store.kommune}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre fylker</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherFylker.map(f => (
              <Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{f.name}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
