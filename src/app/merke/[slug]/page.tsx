import { notFound } from 'next/navigation'
import Link from 'next/link'
import { brands, getBrandBySlug, getAllBrandSlugs } from '@/data/brands'
import { Breadcrumbs } from '@/components/UI'
import { IconArrow } from '@/components/Icons'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllBrandSlugs().map(slug => ({ slug })) }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) return {}
  return createMeta({ title: brand.metaTitle, description: brand.metaDescription, path: 'merke/' + brand.slug })
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) notFound()
  const otherBrands = brands.filter(b => b.slug !== params.slug)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: brand.name, url: 'https://vaskemaskin.no/merke/' + brand.slug + '/' }])) }} />
      <div className="container-site py-10">
        <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Merker' }, { label: brand.name }]} />
        <div className="flex items-start gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-500 flex-shrink-0">{brand.name.charAt(0)}</div>
          <div><h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">{brand.name} vaskemaskiner</h1><div className="flex items-center gap-3 mt-2"><span className="text-sm text-slate-500">{brand.country}</span><span className="text-slate-300">|</span><span className="text-sm text-slate-500">Grunnlagt {brand.founded}</span><span className="text-slate-300">|</span><span className="text-sm text-aqua-600 font-medium">{brand.priceRange}</span></div></div>
        </div>
        <div className="prose-article max-w-3xl mb-10"><p>{brand.intro}</p></div>
        <div className="grid md:grid-cols-2 gap-5 mb-12 max-w-3xl">
          <div className="p-5 rounded-xl border border-green-200 bg-green-50/50"><h3 className="font-semibold text-green-800 mb-3">Fordeler</h3><ul className="space-y-2">{brand.pros.map((pro, i) => (<li key={i} className="flex items-start gap-2 text-sm text-green-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{pro}</li>))}</ul></div>
          <div className="p-5 rounded-xl border border-red-200 bg-red-50/50"><h3 className="font-semibold text-red-800 mb-3">Ulemper</h3><ul className="space-y-2">{brand.cons.map((con, i) => (<li key={i} className="flex items-start gap-2 text-sm text-red-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{con}</li>))}</ul></div>
        </div>
        <section className="mb-12 max-w-3xl"><h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Populære modeller</h2><div className="space-y-2">{brand.popularModels.map((model, i) => (<div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200"><div className="w-8 h-8 rounded-md bg-aqua-50 flex items-center justify-center text-xs font-bold text-aqua-600">{i + 1}</div><span className="text-sm font-medium text-slate-800">{model}</span></div>))}</div></section>
        <div className="max-w-3xl mb-12 p-6 rounded-xl bg-aqua-50 border border-aqua-200"><h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Vurderer du {brand.name}?</h3><p className="text-sm text-slate-600 mb-4">Les vår komplette kjøpsguide for å finne den modellen som passer best for dine behov og ditt budsjett.</p><Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary inline-flex items-center gap-2">Les kjøpsguiden<IconArrow size={14} color="white" /></Link></div>
        <section><h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre merker</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{otherBrands.map(b => (<Link key={b.slug} href={'/merke/' + b.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors"><div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{b.name.charAt(0)}</div><span className="text-sm font-medium text-slate-700">{b.name}</span></Link>))}</div></section>
      </div>
    </>
  )
}
