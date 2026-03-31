import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getErrorBrand, getAllErrorBrandSlugs, errorBrands } from '@/data/feilkoder'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllErrorBrandSlugs().map(merke => ({ merke })) }
export function generateMetadata({ params }: { params: { merke: string } }) {
  const brand = getErrorBrand(params.merke)
  if (!brand) return {}
  return createMeta({ title: brand.name + ' vaskemaskin feilkoder | Alle koder forklart', description: 'Oversikt over alle feilkoder på ' + brand.name + ' vaskemaskiner. ' + brand.codes.length + ' koder med årsaker og løsninger.', path: 'feilkode/' + brand.slug })
}

export default function FeilkodeBrandPage({ params }: { params: { merke: string } }) {
  const brand = getErrorBrand(params.merke)
  if (!brand) notFound()

  const sections = [
    { id: 'koder', label: 'Alle feilkoder (' + brand.codes.length + ')' },
    { id: 'andre', label: 'Andre merker' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Feilkoder', url: 'https://vaskemaskin.no/feilkode/' }, { name: brand.name, url: 'https://vaskemaskin.no/feilkode/' + brand.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder', href: '/feilkode/' }, { label: brand.name }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-3">Feilkoder på {brand.name} vaskemaskiner</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">{brand.codes.length} feilkoder forklart med årsaker og løsninger du kan prøve selv.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            <section data-section-id="koder" className="scroll-mt-20 mb-10">
              <div className="space-y-3">{brand.codes.map((code: any) => (
                <Link key={code.slug} href={'/feilkode/' + brand.slug + '/' + code.slug + '/'} className="block p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-2"><span className="font-mono text-lg font-bold text-aqua-600 bg-aqua-50 px-3 py-1 rounded-lg">{code.code}</span><span className="font-serif text-lg font-bold text-slate-900">{code.title}</span></div>
                  <p className="text-sm text-slate-500">{code.description}</p>
                </Link>
              ))}</div>
            </section>

            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre merker</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">{errorBrands.filter(b => b.slug !== params.merke).map(b => (<Link key={b.slug} href={'/feilkode/' + b.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{b.name} ({b.codes.length})</Link>))}</div>
            </section>
          </div>
          <PageSidebar sections={sections} relatedLinks={[
            { href: '/merke/' + params.merke + '/', label: 'Om ' + brand.name },
            { href: '/bruksanvisning/' + params.merke + '/', label: brand.name + ' bruksanvisning' },
            { href: '/artikkel/rengjore-vaskemaskin/', label: 'Rengjøre vaskemaskin' },
          ]} ctaTitle={'Trenger du ny ' + brand.name + '?'} ctaText="Prøv quizen for å finne riktig modell." />
        </div>
      </div>
    </>
  )
}
