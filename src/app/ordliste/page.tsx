import Link from 'next/link'
import { terms } from '@/data/ordliste'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'


export const metadata = createMeta({ title: 'Ordliste vaskemaskin | Alle begreper 2026', description: 'Komplett ordliste for vaskemaskiner. ' + terms.length + ' begreper forklart i et enkelt og forståelig språk.', path: 'ordliste' })

export default function OrdlistePage() {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, 'nb'))
  const letters = Array.from(new Set(sorted.map(t => t.term.charAt(0).toUpperCase())))
  const sections = letters.map(l => ({ id: l, label: l }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Ordliste', url: 'https://vaskemaskin.no/ordliste/' }])) }} />
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ordliste' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Ordliste: Vaskemaskintermer fra A til Å</h1>
          <p className="text-lg text-slate-600 mb-8">{terms.length} begreper forklart i et enkelt og forståelig språk.</p>

          <div className="flex flex-wrap gap-1.5 mb-8">{letters.map(l => (<a key={l} href={'#letter-' + l} className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-aqua-50 hover:text-aqua-700 transition-colors">{l}</a>))}</div>

          {letters.map(letter => {
            const letterTerms = sorted.filter(t => t.term.charAt(0).toUpperCase() === letter)
            return (
              <div key={letter} id={'letter-' + letter} data-section-id={letter} className="scroll-mt-20 mb-8">
                <h2 className="font-serif text-xl font-bold text-aqua-600 mb-3 border-b border-slate-200 pb-2">{letter}</h2>
                <div className="space-y-2">{letterTerms.map(term => (
                  <Link key={term.slug} href={'/ordliste/' + term.slug + '/'} className="block p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <div className="text-sm font-semibold text-slate-900">{term.term}</div>
                    <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{term.definition}</div>
                  </Link>
                ))}</div>
              </div>
            )
          })}
        </div>
        <PageSidebar sections={sections} relatedLinks={[{ href: '/artikkel/vaskesymboler-guide/', label: 'Vaskesymboler guide' }, { href: '/artikkel/vasketemperatur-guide/', label: 'Vasketemperatur guide' }]} />
      </div>
    </div>
    </>
  )
}