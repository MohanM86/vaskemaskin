import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getErrorBrand, getAllErrorBrandSlugs, errorBrands } from '@/data/feilkoder'
import { Breadcrumbs } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllErrorBrandSlugs().map(merke => ({ merke })) }
export function generateMetadata({ params }: { params: { merke: string } }) {
  const brand = getErrorBrand(params.merke)
  if (!brand) return {}
  return createMeta({ title: brand.name + ' vaskemaskin feilkoder | Alle koder forklart', description: 'Oversikt over alle feilkoder på ' + brand.name + ' vaskemaskiner. ' + brand.codes.length + ' koder med forklaring og løsninger.', path: 'feilkode/' + brand.slug })
}

export default function FeilkodeBrandPage({ params }: { params: { merke: string } }) {
  const brand = getErrorBrand(params.merke)
  if (!brand) notFound()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Feilkoder', url: 'https://vaskemaskin.no/feilkode/' }, { name: brand.name, url: 'https://vaskemaskin.no/feilkode/' + brand.slug + '/' }])) }} />
      <div className="container-site py-10">
        <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder', href: '/feilkode/' }, { label: brand.name }]} />
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Feilkoder på {brand.name} vaskemaskiner</h1>
        <p className="text-lg text-slate-600 mb-10">{brand.codes.length} feilkoder forklart med årsaker og løsninger du kan prøve selv.</p>
        <div className="space-y-4 max-w-3xl">
          {brand.codes.map(code => (
            <Link key={code.slug} href={'/feilkode/' + brand.slug + '/' + code.slug + '/'} className="block p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-sm transition-all">
              <div className="flex items-center gap-3 mb-2"><span className="font-mono text-lg font-bold text-aqua-600 bg-aqua-50 px-3 py-1 rounded-lg">{code.code}</span><span className="font-serif text-lg font-bold text-slate-900">{code.title}</span></div>
              <p className="text-sm text-slate-500">{code.description}</p>
            </Link>
          ))}
        </div>
        <section className="mt-12"><h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre merker</h2><div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">{errorBrands.filter(b => b.slug !== params.merke).map(b => (<Link key={b.slug} href={'/feilkode/' + b.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{b.name}</Link>))}</div></section>
      </div>
    </>
  )
}
