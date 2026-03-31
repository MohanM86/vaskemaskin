import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTermBySlug, getAllTermSlugs, terms } from '@/data/ordliste'
import { Breadcrumbs } from '@/components/UI'
import { IconArrow, IconBookOpen, IconZap } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllTermSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = getTermBySlug(params.slug)
  if (!t) return {}
  return createMeta({ title: t.term + ' - Hva betyr det? | Vaskemaskin ordliste', description: t.definition + ' Les utdypende forklaring med praktiske tips.', path: 'ordliste/' + t.slug })
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.split('. ').filter(s => s.trim().length > 0)
  const paragraphs: string[] = []
  let current = ''
  for (const sentence of sentences) {
    const s = sentence.endsWith('.') ? sentence : sentence + '.'
    if (current.length + s.length > 350 && current.length > 100) {
      paragraphs.push(current.trim())
      current = s + ' '
    } else {
      current += s + ' '
    }
  }
  if (current.trim()) paragraphs.push(current.trim())
  return paragraphs
}

export default function TermPage({ params }: { params: { slug: string } }) {
  const term = getTermBySlug(params.slug)
  if (!term) notFound()
  const related = term.relatedTerms.map(s => terms.find(t => t.slug === s)).filter(Boolean)
  const otherTerms = terms.filter(t => t.slug !== params.slug).sort((a, b) => a.term.localeCompare(b.term, 'nb')).slice(0, 8)
  const paragraphs = splitIntoParagraphs(term.longDescription)

  const sections = [
    { id: 'definisjon', label: 'Kort forklart' },
    { id: 'forklaring', label: 'Utdypende' },
    ...(related.length > 0 ? [{ id: 'relatert', label: 'Relaterte begreper' }] : []),
    { id: 'andre', label: 'Flere begreper' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'DefinedTerm', name: term.term, description: term.definition, inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Vaskemaskin ordliste', url: 'https://vaskemaskin.no/ordliste/' } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Ordliste', url: 'https://vaskemaskin.no/ordliste/' }, { name: term.term, url: 'https://vaskemaskin.no/ordliste/' + term.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ordliste', href: '/ordliste/' }, { label: term.term }]} />
          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">{term.term}</h1>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconBookOpen size={24} /></div>
              <div>
                <p className="text-sm text-slate-500">Ordliste for vaskemaskiner</p>
              </div>
            </div>

            {/* Definisjon - highlighted box */}
            <section data-section-id="definisjon" className="scroll-mt-20 mb-8">
              <div className="p-6 rounded-2xl bg-aqua-50 border border-aqua-200/60">
                <div className="flex items-center gap-2 mb-3">
                  <IconZap size={16} color="#0D9488" />
                  <span className="text-xs font-bold text-aqua-700 uppercase tracking-wider">Kort forklart</span>
                </div>
                <p className="text-lg text-aqua-900 font-medium leading-relaxed">{term.definition}</p>
              </div>
            </section>

            {/* Utdypende forklaring - split into paragraphs */}
            <section data-section-id="forklaring" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-5">Utdypende forklaring</h2>
              <div className="prose-article space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Relaterte begreper */}
            {related.length > 0 && (
              <section data-section-id="relatert" className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Relaterte begreper</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {related.map(r => r && (
                    <Link key={r.slug} href={'/ordliste/' + r.slug + '/'} className="group p-4 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-sm transition-all">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-aqua-700 transition-colors mb-1">{r.term}</div>
                      <div className="text-xs text-slate-500 line-clamp-2">{r.definition}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100/50 border border-aqua-200/60 mb-10">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Vil du lære mer?</h3>
              <p className="text-sm text-slate-600 mb-4">Les våre dybdeartikler for praktiske tips og råd om vaskemaskiner.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary inline-flex items-center gap-2 text-sm">Kjøpsguide<IconArrow size={12} color="white" /></Link>
                <Link href="/ordliste/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Se hele ordlisten <IconArrow size={12} color="#0F766E" /></Link>
              </div>
            </div>

            {/* Andre begreper */}
            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Flere begreper</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {otherTerms.map(t => (
                  <Link key={t.slug} href={'/ordliste/' + t.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-center text-sm text-slate-600 hover:text-aqua-700 transition-colors">{t.term}</Link>
                ))}
              </div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/ordliste/', label: 'Alle begreper A til Å' },
            { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
            { href: '/artikkel/energimerking-forklart/', label: 'Energimerking forklart' },
          ]} ctaTitle="Forstå alt" ctaText="Les vår komplette kjøpsguide." ctaLink="/artikkel/komplett-kjopsguide-2026/" ctaLinkText="Les guiden" />
        </div>
      </div>
    </>
  )
}
