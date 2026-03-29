import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getComparisonBySlug, getAllComparisonSlugs, comparisons } from '@/data/sammenligninger'
import { Breadcrumbs } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllComparisonSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const c = getComparisonBySlug(params.slug)
  if (!c) return {}
  return createMeta({ title: c.metaTitle, description: c.metaDescription, path: 'sammenligning/' + c.slug })
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comp = getComparisonBySlug(params.slug)
  if (!comp) notFound()
  const others = comparisons.filter(c => c.slug !== params.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Sammenligninger', url: 'https://vaskemaskin.no/' }, { name: comp.brand1 + ' vs ' + comp.brand2, url: 'https://vaskemaskin.no/sammenligning/' + comp.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: comp.brand1 + ' vs ' + comp.brand2 }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{comp.title}</h1>
          <p className="text-lg text-slate-600 mb-8">{comp.intro}</p>

          <div className="space-y-4 mb-10">
            {comp.categories.map((cat, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-base font-bold text-slate-900">{cat.name}</h3>
                  <span className={'text-xs font-semibold px-3 py-1 rounded-full ' + (cat.winner === comp.brand1 ? 'bg-aqua-50 text-aqua-700' : cat.winner === comp.brand2 ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-500')}>{cat.winner === 'Likt' ? 'Likt' : cat.winner + ' vinner'}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center p-3 rounded-lg bg-aqua-50"><div className="text-xs text-slate-500 mb-1">{comp.brand1}</div><div className="font-serif text-lg font-bold text-aqua-600">{cat.brand1Score}</div></div>
                  <div className="text-center p-3 rounded-lg bg-amber-50"><div className="text-xs text-slate-500 mb-1">{comp.brand2}</div><div className="font-serif text-lg font-bold text-amber-600">{cat.brand2Score}</div></div>
                </div>
                <p className="text-sm text-slate-600">{cat.explanation}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-xl bg-aqua-50 border border-aqua-200 mb-10">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Vår konklusjon</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{comp.verdict}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <Link href={'/merke/' + comp.brand1.toLowerCase().replace(/ /g, '-') + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-300 text-center transition-colors"><div className="text-sm font-semibold text-slate-900">Les mer om {comp.brand1}</div></Link>
            <Link href={'/merke/' + comp.brand2.toLowerCase().replace(/ /g, '-') + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-300 text-center transition-colors"><div className="text-sm font-semibold text-slate-900">Les mer om {comp.brand2}</div></Link>
          </div>

          {others.length > 0 && (
            <section><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Flere sammenligninger</h2><div className="space-y-2">{others.map(c => (<Link key={c.slug} href={'/sammenligning/' + c.slug + '/'} className="block p-4 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors"><span className="text-sm font-semibold text-slate-900">{c.brand1} vs {c.brand2}</span></Link>))}</div></section>
          )}
        </div>
      </div>
    </>
  )
}
