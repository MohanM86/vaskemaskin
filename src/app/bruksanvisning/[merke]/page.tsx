import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getManualBySlug, getAllManualSlugs, manuals } from '@/data/bruksanvisning'
import { getErrorBrand } from '@/data/feilkoder'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllManualSlugs().map(merke => ({ merke })) }
export function generateMetadata({ params }: { params: { merke: string } }) {
  const m = getManualBySlug(params.merke)
  if (!m) return {}
  return createMeta({ title: m.metaTitle, description: m.metaDescription, path: 'bruksanvisning/' + m.slug })
}

export default function ManualPage({ params }: { params: { merke: string } }) {
  const manual = getManualBySlug(params.merke)
  if (!manual) notFound()
  const errorBrand = getErrorBrand(params.merke)

  const sections = manual.sections.map((s, i) => ({ id: String(i), label: s.heading }))
  sections.push({ id: 'tips', label: 'Tips for ' + manual.name })
  if (errorBrand) sections.push({ id: 'feilkoder', label: 'Feilkoder' })
  sections.push({ id: 'andre', label: 'Andre merker' })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bruksanvisning', url: 'https://vaskemaskin.no/bruksanvisning/' }, { name: manual.name, url: 'https://vaskemaskin.no/bruksanvisning/' + manual.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bruksanvisning', href: '/bruksanvisning/' }, { label: manual.name }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">Bruksanvisning {manual.name} vaskemaskin</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">{manual.intro}</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            {/* Key info box */}
            <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200 mb-8">
              <h2 className="text-sm font-bold text-aqua-800 mb-3">Innhold i denne guiden</h2>
              <div className="space-y-1">{manual.sections.map((s, i) => (
                <a key={i} href={'#section-' + i} className="flex items-start gap-2 text-sm text-aqua-900 hover:text-aqua-700 text-left">
                  <span className="text-aqua-500 font-bold">{i + 1}.</span>{s.heading}
                </a>
              ))}</div>
            </div>

            <div className="prose-article">
              {manual.sections.map((s, i) => (
                <section key={i} data-section-id={String(i)} className="scroll-mt-20" id={'section-' + i}>
                  <h2>{s.heading}</h2>
                  <p>{s.content}</p>
                </section>
              ))}
            </div>

            <section data-section-id="tips" className="scroll-mt-20 mt-10 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">Tips for {manual.name} eiere</h3>
              <div className="space-y-2">{manual.tips.map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-aqua-900"><span className="text-aqua-600 font-bold mt-0.5">{i + 1}</span><span>{tip}</span></div>
              ))}</div>
            </section>

            {errorBrand && (
              <section data-section-id="feilkoder" className="scroll-mt-20 mt-10">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Feilkoder for {manual.name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">{errorBrand.codes.slice(0, 6).map((c: any) => (
                  <Link key={c.slug} href={'/feilkode/' + params.merke + '/' + c.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                    <span className="font-mono text-sm font-bold text-aqua-600">{c.code}</span>
                    <span className="text-xs text-slate-600 line-clamp-1">{c.title}</span>
                  </Link>
                ))}</div>
                <Link href={'/feilkode/' + params.merke + '/'} className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se alle feilkoder</Link>
              </section>
            )}

            <section data-section-id="andre" className="scroll-mt-20 mt-10">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Bruksanvisning for andre merker</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{manuals.filter(m => m.slug !== params.merke).map(m => (
                <Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{m.name}</Link>
              ))}</div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/merke/' + params.merke + '/', label: 'Om ' + manual.name },
            ...(errorBrand ? [{ href: '/feilkode/' + params.merke + '/', label: manual.name + ' feilkoder' }] : []),
            { href: '/artikkel/rengjore-vaskemaskin/', label: 'Rengjøre vaskemaskin' },
            { href: '/artikkel/vaskemiddel-guide/', label: 'Vaskemiddelguide' },
          ]} />
        </div>
      </div>
    </>
  )
}
