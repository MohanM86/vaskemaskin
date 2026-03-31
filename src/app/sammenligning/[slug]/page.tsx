import { notFound } from 'next/navigation'
import Link from 'next/link'
import { comparisons, getComparisonBySlug, getAllComparisonSlugs } from '@/data/sammenligninger'
import { getBrandBySlug } from '@/data/brands'
import { Breadcrumbs } from '@/components/UI'
import { AnimatedBar } from '@/components/BrandVisuals'
import PageSidebar from '@/components/PageSidebar'
import { IconArrow, IconCheckCircle, IconTarget } from '@/components/Icons'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllComparisonSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const comp = getComparisonBySlug(params.slug)
  if (!comp) return {}
  return createMeta({ title: comp.brand1 + ' vs ' + comp.brand2 + ' vaskemaskin | Sammenligning 2026', description: comp.intro, path: 'sammenligning/' + comp.slug })
}

const brandScores: Record<string, Record<string, number>> = {
  Samsung: { Pris: 8, Vaskeresultat: 8, Støy: 7, Holdbarhet: 7, Innovasjon: 10, Service: 7 },
  Bosch: { Pris: 7, Vaskeresultat: 9, Støy: 10, Holdbarhet: 9, Innovasjon: 7, Service: 9 },
  Miele: { Pris: 4, Vaskeresultat: 10, Støy: 9, Holdbarhet: 10, Innovasjon: 7, Service: 10 },
  LG: { Pris: 8, Vaskeresultat: 8, Støy: 7, Holdbarhet: 7, Innovasjon: 9, Service: 6 },
  Electrolux: { Pris: 7, Vaskeresultat: 8, Støy: 8, Holdbarhet: 8, Innovasjon: 7, Service: 9 },
  AEG: { Pris: 6, Vaskeresultat: 9, Støy: 8, Holdbarhet: 8, Innovasjon: 8, Service: 8 },
  Whirlpool: { Pris: 9, Vaskeresultat: 7, Støy: 6, Holdbarhet: 7, Innovasjon: 6, Service: 6 },
  Beko: { Pris: 10, Vaskeresultat: 6, Støy: 5, Holdbarhet: 6, Innovasjon: 5, Service: 5 },
  ASKO: { Pris: 4, Vaskeresultat: 9, Støy: 9, Holdbarhet: 10, Innovasjon: 5, Service: 7 },
  Siemens: { Pris: 6, Vaskeresultat: 9, Støy: 10, Holdbarhet: 9, Innovasjon: 7, Service: 9 },
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const comp = getComparisonBySlug(params.slug)
  if (!comp) notFound()

  const brand1 = getBrandBySlug(comp.brand1.toLowerCase())
  const brand2 = getBrandBySlug(comp.brand2.toLowerCase())
  const scores1 = brandScores[comp.brand1] || {}
  const scores2 = brandScores[comp.brand2] || {}
  const categories = ['Pris', 'Vaskeresultat', 'Støy', 'Holdbarhet', 'Innovasjon', 'Service']

  const sections = [
    { id: 'intro', label: 'Oversikt' },
    { id: 'score', label: 'Poengsammenligning' },
    { id: 'kategorier', label: 'Kategori for kategori' },
    { id: 'verdict', label: 'Vår anbefaling' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: comp.brand1 + ' vs ' + comp.brand2, url: 'https://vaskemaskin.no/sammenligning/' + comp.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
<h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">{comp.brand1} vs {comp.brand2}: Hvilken er best?</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Detaljert sammenligning av {comp.brand1} og {comp.brand2} vaskemaskiner for norske hjem.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Sammenligninger' }, { label: comp.brand1 + ' vs ' + comp.brand2 }]} />

            {/* VS Header */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 py-8 mb-6">
              <div className="text-center">
                <Link href={'/merke/' + comp.brand1.toLowerCase() + '/'} className="block w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100 flex items-center justify-center text-2xl sm:text-3xl font-bold text-aqua-700 border border-aqua-200/50 mx-auto hover:shadow-lg transition-shadow">{comp.brand1.charAt(0)}</Link>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3">{comp.brand1}</h2>
                {brand1 && <p className="text-xs text-slate-400 mt-1">{brand1.priceRange}</p>}
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aqua-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">VS</div>
              <div className="text-center">
                <Link href={"/merke/" + comp.brand2.toLowerCase() + "/"} className="block w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-2xl sm:text-3xl font-bold text-slate-600 border border-slate-200/50 mx-auto hover:shadow-lg transition-shadow">{comp.brand2.charAt(0)}</Link>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-3">{comp.brand2}</h2>
                {brand2 && <p className="text-xs text-slate-400 mt-1">{brand2.priceRange}</p>}
              </div>
            </div>

            <section data-section-id="intro" className="scroll-mt-20 mb-10">
              <div className="prose-article"><p>{comp.intro}</p></div>
            </section>

            {/* Animated score comparison */}
            <section data-section-id="score" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Poengsammenligning</h2>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-5">
                {categories.map(cat => {
                  const s1 = scores1[cat] || 5
                  const s2 = scores2[cat] || 5
                  const winner = s1 > s2 ? 1 : s2 > s1 ? 2 : 0
                  return (
                    <div key={cat}>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">{cat}</div>
                      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center">
                        <div>
                          <AnimatedBar value={s1} max={10} label={comp.brand1} color={winner === 1 ? '#0D9488' : '#94A3B8'} suffix="/10" />
                        </div>
                        <div className={'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ' + (winner === 1 ? 'bg-aqua-100 text-aqua-700' : winner === 2 ? 'bg-slate-100 text-slate-500' : 'bg-slate-50 text-slate-400')}>{winner === 0 ? '=' : winner === 1 ? '>' : '<'}</div>
                        <div>
                          <AnimatedBar value={s2} max={10} label={comp.brand2} color={winner === 2 ? '#0D9488' : '#94A3B8'} suffix="/10" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Category details */}
            <section data-section-id="kategorier" className="scroll-mt-20 mb-10">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Kategori for kategori</h2>
              <div className="space-y-4">
                {comp.categories.map((cat, i) => {
                  const winner = cat.winner
                  return (
                    <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                        <span className={'text-xs font-bold px-2.5 py-1 rounded-full ' + (winner === comp.brand1 ? 'bg-aqua-100 text-aqua-700' : winner === comp.brand2 ? 'bg-aqua-100 text-aqua-700' : 'bg-slate-100 text-slate-500')}>
                          {winner === 'Uavgjort' ? 'Likt' : winner + ' vinner'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{cat.explanation}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            <section data-section-id="verdict" className="scroll-mt-20 mb-10">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100/50 border border-aqua-200/60">
                <div className="flex items-center gap-2 mb-3">
                  <IconTarget size={20} color="#0D9488" />
                  <h2 className="font-serif text-xl font-bold text-slate-900">Vår anbefaling</h2>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{comp.verdict}</p>
              </div>
            </section>

            <div className="grid grid-cols-2 gap-4">
              <Link href={'/merke/' + comp.brand1.toLowerCase() + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all text-center">
                <span className="text-sm font-semibold text-aqua-600">Les mer om {comp.brand1}</span>
              </Link>
              <Link href={'/merke/' + comp.brand2.toLowerCase() + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all text-center">
                <span className="text-sm font-semibold text-aqua-600">Les mer om {comp.brand2}</span>
              </Link>
            </div>
          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/merke/' + comp.brand1.toLowerCase() + '/', label: comp.brand1 + ' oversikt' },
            { href: '/merke/' + comp.brand2.toLowerCase() + '/', label: comp.brand2 + ' oversikt' },
            { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
            { href: '/artikkel/beste-vaskemaskin-2026/', label: 'Beste vaskemaskin 2026' },
          ]} ctaTitle="Usikker på merke?" ctaText="Prøv vår quiz for personlig anbefaling." />
        </div>
      </div>
    </>
  )
}
