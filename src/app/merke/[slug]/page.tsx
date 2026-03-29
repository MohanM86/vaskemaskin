import { notFound } from 'next/navigation'
import Link from 'next/link'
import { brands, getBrandBySlug, getAllBrandSlugs } from '@/data/brands'
import { getErrorBrand } from '@/data/feilkoder'
import { getManualBySlug } from '@/data/bruksanvisning'
import { comparisons } from '@/data/sammenligninger'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
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
  const errorBrand = getErrorBrand(params.slug)
  const manual = getManualBySlug(params.slug)
  const brandComparisons = comparisons.filter(c => c.brand1 === brand.name || c.brand2 === brand.name)

  const sections = [
    { id: 'intro', label: 'Om ' + brand.name },
    { id: 'pros-cons', label: 'Fordeler og ulemper' },
    { id: 'models', label: 'Populære modeller' },
    ...(errorBrand ? [{ id: 'feilkoder', label: 'Feilkoder' }] : []),
    ...(manual ? [{ id: 'bruksanvisning', label: 'Bruksanvisning' }] : []),
    ...(brandComparisons.length > 0 ? [{ id: 'sammenlign', label: 'Sammenligninger' }] : []),
    { id: 'andre', label: 'Andre merker' },
  ]

  const relatedLinks = [
    ...(errorBrand ? [{ href: '/feilkode/' + params.slug + '/', label: brand.name + ' feilkoder' }] : []),
    ...(manual ? [{ href: '/bruksanvisning/' + params.slug + '/', label: brand.name + ' bruksanvisning' }] : []),
    ...brandComparisons.slice(0, 2).map(c => ({ href: '/sammenligning/' + c.slug + '/', label: c.brand1 + ' vs ' + c.brand2 })),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: brand.name, url: 'https://vaskemaskin.no/merke/' + brand.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Merker' }, { label: brand.name }]} />

            <div className="flex items-start gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-500 flex-shrink-0">{brand.name.charAt(0)}</div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">{brand.name} vaskemaskiner</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
                  <span>{brand.country}</span><span className="text-slate-300">|</span>
                  <span>Grunnlagt {brand.founded}</span><span className="text-slate-300">|</span>
                  <span className="text-aqua-600 font-medium">{brand.priceRange}</span>
                </div>
              </div>
            </div>

            <section data-section-id="intro" className="scroll-mt-20 mb-10">
              <div className="prose-article"><p>{brand.intro}</p></div>
            </section>

            <section data-section-id="pros-cons" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Fordeler og ulemper</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-green-200 bg-green-50/50">
                  <h3 className="font-semibold text-green-800 mb-3">Fordeler</h3>
                  <ul className="space-y-2">{brand.pros.map((pro, i) => (<li key={i} className="flex items-start gap-2 text-sm text-green-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{pro}</li>))}</ul>
                </div>
                <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                  <h3 className="font-semibold text-red-800 mb-3">Ulemper</h3>
                  <ul className="space-y-2">{brand.cons.map((con, i) => (<li key={i} className="flex items-start gap-2 text-sm text-red-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{con}</li>))}</ul>
                </div>
              </div>
            </section>

            <section data-section-id="models" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Populære modeller</h2>
              <div className="space-y-2">{brand.popularModels.map((model, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-md bg-aqua-50 flex items-center justify-center text-xs font-bold text-aqua-600">{i + 1}</div>
                  <span className="text-sm font-medium text-slate-800">{model}</span>
                </div>
              ))}</div>
            </section>

            {errorBrand && (
              <section data-section-id="feilkoder" className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Feilkoder for {brand.name}</h2>
                <p className="text-sm text-slate-600 mb-4">{errorBrand.codes.length} feilkoder forklart med årsaker og løsninger.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {errorBrand.codes.slice(0, 6).map(c => (
                    <Link key={c.slug} href={'/feilkode/' + params.slug + '/' + c.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                      <span className="font-mono text-sm font-bold text-aqua-600">{c.code}</span>
                      <span className="text-xs text-slate-600 line-clamp-1">{c.title}</span>
                    </Link>
                  ))}
                </div>
                <Link href={'/feilkode/' + params.slug + '/'} className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se alle {brand.name} feilkoder</Link>
              </section>
            )}

            {manual && (
              <section data-section-id="bruksanvisning" className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Bruksanvisning {brand.name}</h2>
                <p className="text-sm text-slate-600 mb-4">Programmer, symboler, dosering og vedlikeholdstips.</p>
                <Link href={'/bruksanvisning/' + params.slug + '/'} className="btn-primary inline-flex items-center gap-2">Les bruksanvisningen<IconArrow size={14} color="white" /></Link>
              </section>
            )}

            {brandComparisons.length > 0 && (
              <section data-section-id="sammenlign" className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Sammenligninger med {brand.name}</h2>
                <div className="space-y-2">
                  {brandComparisons.map(c => (
                    <Link key={c.slug} href={'/sammenligning/' + c.slug + '/'} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-aqua-300 transition-all">
                      <span className="text-sm font-semibold text-slate-900">{c.brand1} vs {c.brand2}</span>
                      <IconArrow size={14} color="#94A3B8" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <div className="p-6 rounded-xl bg-aqua-50 border border-aqua-200 mb-10">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Vurderer du {brand.name}?</h3>
              <p className="text-sm text-slate-600 mb-4">Les vår komplette kjøpsguide for å finne den modellen som passer best for dine behov og ditt budsjett.</p>
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary inline-flex items-center gap-2">Les kjøpsguiden<IconArrow size={14} color="white" /></Link>
            </div>

            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre merker</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {otherBrands.slice(0, 8).map(b => (
                  <Link key={b.slug} href={'/merke/' + b.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{b.name.charAt(0)}</div>
                    <span className="text-sm font-medium text-slate-700">{b.name}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={relatedLinks} ctaTitle={'Usikker på ' + brand.name + '?'} ctaText="Prøv vår quiz for å finne riktig merke." />
        </div>
      </div>
    </>
  )
}
