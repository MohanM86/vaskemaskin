import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTermBySlug, getAllTermSlugs, terms } from '@/data/ordliste'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllTermSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = getTermBySlug(params.slug)
  if (!t) return {}
  return createMeta({ title: 'Hva er ' + t.term + '? | Vaskemaskin ordliste', description: t.definition, path: 'ordliste/' + t.slug })
}

export default function TermPage({ params }: { params: { slug: string } }) {
  const term = getTermBySlug(params.slug)
  if (!term) notFound()
  const related = term.relatedTerms.map(s => terms.find(t => t.slug === s)).filter(Boolean)
  const otherTerms = terms.filter(t => t.slug !== params.slug).sort((a, b) => a.term.localeCompare(b.term, 'nb')).slice(0, 10)

  const definedTermSchema = { '@context': 'https://schema.org', '@type': 'DefinedTerm', name: term.term, description: term.definition, inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Vaskemaskin ordliste', url: 'https://vaskemaskin.no/ordliste/' } }

  const sections = [
    { id: 'definisjon', label: 'Definisjon' },
    { id: 'forklaring', label: 'Utdypende forklaring' },
    ...(related.length > 0 ? [{ id: 'relatert', label: 'Relaterte begreper' }] : []),
    { id: 'andre', label: 'Flere begreper' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Ordliste', url: 'https://vaskemaskin.no/ordliste/' }, { name: term.term, url: 'https://vaskemaskin.no/ordliste/' + term.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ordliste', href: '/ordliste/' }, { label: term.term }]} />
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Hva er {term.term}?</h1>

            <section data-section-id="definisjon" className="scroll-mt-20 mb-8">
              <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200">
                <p className="text-base text-aqua-900 font-medium leading-relaxed">{term.definition}</p>
              </div>
            </section>

            <section data-section-id="forklaring" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Utdypende forklaring</h2>
              <div className="prose-article"><p>{term.longDescription}</p></div>
            </section>

            {related.length > 0 && (
              <section data-section-id="relatert" className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Relaterte begreper</h2>
                <div className="flex flex-wrap gap-2">{related.map(r => r && (
                  <Link key={r.slug} href={'/ordliste/' + r.slug + '/'} className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-aqua-300 hover:text-aqua-700 transition-colors">{r.term}</Link>
                ))}</div>
              </section>
            )}

            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Flere begreper i ordlisten</h2>
              <div className="grid grid-cols-2 gap-2">{otherTerms.map(t => (
                <Link key={t.slug} href={'/ordliste/' + t.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-slate-700 transition-colors">{t.term}</Link>
              ))}</div>
              <div className="mt-4"><Link href="/ordliste/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se hele ordlisten A til Å</Link></div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={related.slice(0, 4).map(r => r ? { href: '/ordliste/' + r.slug + '/', label: r.term } : { href: '#', label: '' }).filter(l => l.label)} />
        </div>
      </div>
    </>
  )
}
