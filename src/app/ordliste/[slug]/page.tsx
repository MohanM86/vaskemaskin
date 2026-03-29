import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTermBySlug, getAllTermSlugs, terms } from '@/data/ordliste'
import { Breadcrumbs } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllTermSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const term = getTermBySlug(params.slug)
  if (!term) return {}
  return createMeta({ title: 'Hva er ' + term.term + '? | Vaskemaskin ordliste', description: term.definition + ' Les den fullstendige forklaringen av ' + term.term + ' på Vaskemaskin.no.', path: 'ordliste/' + term.slug })
}

export default function TermPage({ params }: { params: { slug: string } }) {
  const term = getTermBySlug(params.slug)
  if (!term) notFound()
  const related = term.relatedTerms.map(s => terms.find(t => t.slug === s)).filter(Boolean)
  const otherTerms = terms.filter(t => t.slug !== params.slug).sort((a, b) => a.term.localeCompare(b.term, 'nb')).slice(0, 8)

  const definedTermSchema = { '@context': 'https://schema.org', '@type': 'DefinedTerm', name: term.term, description: term.definition, inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Vaskemaskin ordliste', url: 'https://vaskemaskin.no/ordliste/' } }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Ordliste', url: 'https://vaskemaskin.no/ordliste/' }, { name: term.term, url: 'https://vaskemaskin.no/ordliste/' + term.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ordliste', href: '/ordliste/' }, { label: term.term }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Hva er {term.term}?</h1>
          <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200 mb-8"><p className="text-base text-aqua-900 font-medium">{term.definition}</p></div>
          <div className="prose-article mb-10"><p>{term.longDescription}</p></div>
          {related.length > 0 && (<section className="mb-10"><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Relaterte begreper</h2><div className="flex flex-wrap gap-2">{related.map(r => r && (<Link key={r.slug} href={'/ordliste/' + r.slug + '/'} className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-aqua-300 hover:text-aqua-700 transition-colors">{r.term}</Link>))}</div></section>)}
          <section><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Flere begreper i ordlisten</h2><div className="grid grid-cols-2 gap-2">{otherTerms.map(t => (<Link key={t.slug} href={'/ordliste/' + t.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-slate-700 transition-colors">{t.term}</Link>))}</div></section>
        </div>
      </div>
    </>
  )
}
