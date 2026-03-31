import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getErrorCode, getErrorBrand, getAllErrorCodeParams } from '@/data/feilkoder'
import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'

export function generateStaticParams() { return getAllErrorCodeParams() }
export function generateMetadata({ params }: { params: { merke: string; kode: string } }) {
  const code = getErrorCode(params.merke, params.kode)
  if (!code) return {}
  return createMeta({ title: code.brand + ' vaskemaskin feilkode ' + code.code + ' | ' + code.title, description: 'Feilkode ' + code.code + ' på ' + code.brand + ' vaskemaskin: ' + code.description, path: 'feilkode/' + params.merke + '/' + params.kode })
}

export default function ErrorCodePage({ params }: { params: { merke: string; kode: string } }) {
  const code = getErrorCode(params.merke, params.kode)
  if (!code) notFound()
  const brand = getErrorBrand(params.merke)
  const otherCodes = brand?.codes.filter((c: any) => c.slug !== params.kode) || []
  const faqItems = [
    { question: 'Hva betyr feilkode ' + code.code + ' på ' + code.brand + '?', answer: code.description },
    { question: 'Kan jeg fikse feilkode ' + code.code + ' selv?', answer: code.solutions.join('. ') },
    { question: 'Når bør jeg ringe servicetekniker?', answer: code.callService },
  ]

  const sections = [
    { id: 'aarsaker', label: 'Vanlige årsaker' },
    { id: 'losninger', label: 'Slik løser du det' },
    { id: 'service', label: 'Når ringe service' },
    { id: 'faq', label: 'Spørsmål og svar' },
    ...(otherCodes.length > 0 ? [{ id: 'andre', label: 'Andre ' + code.brand + ' koder' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Feilkoder', url: 'https://vaskemaskin.no/feilkode/' }, { name: code.brand, url: 'https://vaskemaskin.no/feilkode/' + params.merke + '/' }, { name: 'Kode ' + code.code, url: 'https://vaskemaskin.no/feilkode/' + params.merke + '/' + params.kode + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder', href: '/feilkode/' }, { label: code.brand, href: '/feilkode/' + params.merke + '/' }, { label: 'Kode ' + code.code }]} />
          <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-white">{code.brand} feilkode {code.code}</h1>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-2xl font-bold text-aqua-600 bg-aqua-50 px-4 py-2 rounded-xl">{code.code}</span>
              <div>
                <p className="text-base text-slate-500 mt-1">{code.title}</p>
              </div>
            </div>

            {/* Quick answer box */}
            <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200 mb-8">
              <h2 className="text-sm font-bold text-aqua-800 mb-2">Kort forklart</h2>
              <p className="text-sm text-aqua-900">{code.description}</p>
            </div>

            <section data-section-id="aarsaker" className="scroll-mt-20 mb-8">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Vanlige årsaker</h2>
              <div className="space-y-2">{code.causes.map((c: string, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-slate-700">{c}</span>
                </div>
              ))}</div>
            </section>

            <section data-section-id="losninger" className="scroll-mt-20 mb-8">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Slik løser du problemet</h2>
              <div className="space-y-2">{code.solutions.map((s: string, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-aqua-50 border border-aqua-100">
                  <span className="w-6 h-6 rounded-full bg-aqua-200 flex items-center justify-center text-xs font-bold text-aqua-700 flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-aqua-900">{s}</span>
                </div>
              ))}</div>
            </section>

            <section data-section-id="service" className="scroll-mt-20 mb-8">
              <div className="p-5 rounded-xl border border-amber-200 bg-amber-50">
                <h2 className="font-serif text-lg font-bold text-amber-900 mb-2">Når bør du ringe servicetekniker?</h2>
                <p className="text-sm text-amber-800">{code.callService}</p>
              </div>
            </section>

            <section data-section-id="faq" className="scroll-mt-20 mb-8">
              <FAQSection items={faqItems} />
            </section>

            {otherCodes.length > 0 && (
              <section data-section-id="andre" className="scroll-mt-20">
                <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Andre {code.brand} feilkoder</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {otherCodes.map((c: any) => (
                    <Link key={c.slug} href={'/feilkode/' + params.merke + '/' + c.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                      <span className="font-mono text-sm font-bold text-aqua-600">{c.code}</span>
                      <span className="text-xs text-slate-600 line-clamp-1">{c.title}</span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/feilkode/' + params.merke + '/', label: 'Alle ' + code.brand + ' feilkoder' },
            { href: '/bruksanvisning/' + params.merke + '/', label: code.brand + ' bruksanvisning' },
            { href: '/merke/' + params.merke + '/', label: 'Om ' + code.brand },
            { href: '/artikkel/rengjore-vaskemaskin/', label: 'Rengjøre vaskemaskin' },
          ]} ctaTitle="Trenger du ny maskin?" ctaText={'Kanskje det er billigere å bytte enn å reparere.'} ctaLink="/artikkel/naar-bytte-vaskemaskin/" ctaLinkText="Les mer" />
        </div>
      </div>
    </>
  )
}
