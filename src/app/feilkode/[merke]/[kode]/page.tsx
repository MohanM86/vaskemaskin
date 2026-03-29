import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getErrorCode, getErrorBrand, getAllErrorCodeParams } from '@/data/feilkoder'
import { Breadcrumbs, FAQSection } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'

export function generateStaticParams() { return getAllErrorCodeParams() }
export function generateMetadata({ params }: { params: { merke: string; kode: string } }) {
  const code = getErrorCode(params.merke, params.kode)
  if (!code) return {}
  return createMeta({ title: code.brand + ' vaskemaskin feilkode ' + code.code + ' | ' + code.title, description: 'Feilkode ' + code.code + ' på ' + code.brand + ' vaskemaskin: ' + code.description + ' Les om årsaker og løsninger.', path: 'feilkode/' + params.merke + '/' + params.kode })
}

export default function ErrorCodePage({ params }: { params: { merke: string; kode: string } }) {
  const code = getErrorCode(params.merke, params.kode)
  if (!code) notFound()
  const brand = getErrorBrand(params.merke)
  const otherCodes = brand?.codes.filter(c => c.slug !== params.kode) || []
  const faqItems = [{ question: 'Hva betyr feilkode ' + code.code + ' på ' + code.brand + '?', answer: code.description }, { question: 'Kan jeg fikse feilkode ' + code.code + ' selv?', answer: code.solutions.join('. ') }, { question: 'Når bør jeg ringe servicetekniker?', answer: code.callService }]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Feilkoder', url: 'https://vaskemaskin.no/feilkode/' }, { name: code.brand, url: 'https://vaskemaskin.no/feilkode/' + params.merke + '/' }, { name: 'Kode ' + code.code, url: 'https://vaskemaskin.no/feilkode/' + params.merke + '/' + params.kode + '/' }])) }} />
      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Feilkoder', href: '/feilkode/' }, { label: code.brand, href: '/feilkode/' + params.merke + '/' }, { label: 'Kode ' + code.code }]} />
          <div className="flex items-center gap-4 mb-4"><span className="font-mono text-2xl font-bold text-aqua-600 bg-aqua-50 px-4 py-2 rounded-xl">{code.code}</span><div><h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{code.brand} feilkode {code.code}</h1><p className="text-base text-slate-500 mt-1">{code.title}</p></div></div>
          <div className="prose-article mb-8"><p>{code.description}</p></div>
          <section className="mb-8"><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Vanlige årsaker</h2><div className="space-y-2">{code.causes.map((c, i) => (<div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50"><span className="text-aqua-600 font-bold text-sm mt-0.5">{i + 1}</span><span className="text-sm text-slate-700">{c}</span></div>))}</div></section>
          <section className="mb-8"><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Slik løser du problemet</h2><div className="space-y-2">{code.solutions.map((s, i) => (<div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-aqua-50 border border-aqua-100"><span className="text-aqua-700 font-bold text-sm mt-0.5">{i + 1}</span><span className="text-sm text-aqua-900">{s}</span></div>))}</div></section>
          <section className="mb-8 p-5 rounded-xl border border-amber-200 bg-amber-50"><h3 className="font-serif text-lg font-bold text-amber-900 mb-2">Når bør du ringe servicetekniker?</h3><p className="text-sm text-amber-800">{code.callService}</p></section>
          <FAQSection items={faqItems} />
          {otherCodes.length > 0 && (<section className="mt-12"><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Andre {code.brand} feilkoder</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{otherCodes.map(c => (<Link key={c.slug} href={'/feilkode/' + params.merke + '/' + c.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors"><span className="font-mono text-sm font-bold text-aqua-600">{c.code}</span><span className="text-sm text-slate-700">{c.title}</span></Link>))}</div></section>)}
        </div>
      </div>
    </>
  )
}
