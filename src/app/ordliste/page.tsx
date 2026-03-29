import Link from 'next/link'
import { terms } from '@/data/ordliste'
import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Ordliste vaskemaskin | Alle begreper fra A til Å', description: 'Komplett ordliste for vaskemaskiner. Forstå alle fagbegreper, funksjoner og teknologier fra sentrifugering til EcoBubble.', path: 'ordliste' })

export default function OrdlistePage() {
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, 'nb'))
  return (
    <div className="container-site py-10">
      <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ordliste' }]} />
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Ordliste: Vaskemaskintermer fra A til Å</h1>
      <p className="text-lg text-slate-600 mb-10">{terms.length} begreper forklart i et enkelt og forståelig språk.</p>
      <div className="space-y-3 max-w-3xl">
        {sorted.map(term => (
          <Link key={term.slug} href={'/ordliste/' + term.slug + '/'} className="block p-4 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
            <h2 className="text-base font-semibold text-slate-900">{term.term}</h2>
            <p className="text-sm text-slate-500 mt-1">{term.definition}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
