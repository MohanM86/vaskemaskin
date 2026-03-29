import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getManualBySlug, getAllManualSlugs, manuals } from '@/data/bruksanvisning'
import { Breadcrumbs, FAQSection } from '@/components/UI'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllManualSlugs().map(merke => ({ merke })) }
export function generateMetadata({ params }: { params: { merke: string } }) {
  const manual = getManualBySlug(params.merke)
  if (!manual) return {}
  return createMeta({ title: manual.metaTitle, description: manual.metaDescription, path: 'bruksanvisning/' + manual.slug })
}

export default function ManualPage({ params }: { params: { merke: string } }) {
  const manual = getManualBySlug(params.merke)
  if (!manual) notFound()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bruksanvisning', url: 'https://vaskemaskin.no/bruksanvisning/' }, { name: manual.name, url: 'https://vaskemaskin.no/bruksanvisning/' + manual.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bruksanvisning', href: '/bruksanvisning/' }, { label: manual.name }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Bruksanvisning {manual.name} vaskemaskin</h1>
          <p className="text-lg text-slate-600 mb-8">{manual.intro}</p>
          <div className="prose-article">
            {manual.sections.map((s, i) => (<section key={i}><h2>{s.heading}</h2><p>{s.content}</p></section>))}
          </div>
          <section className="mt-10 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
            <h3 className="font-serif text-lg font-bold text-slate-900 mb-3">Tips for {manual.name} eiere</h3>
            <div className="space-y-2">{manual.tips.map((tip, i) => (<div key={i} className="flex items-start gap-2 text-sm text-aqua-900"><span className="text-aqua-600 font-bold mt-0.5">{i + 1}</span><span>{tip}</span></div>))}</div>
          </section>
          <section className="mt-10">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Feilkoder for {manual.name}</h2>
            <Link href={'/feilkode/' + manual.slug + '/'} className="btn-primary inline-flex items-center gap-2">Se alle {manual.name} feilkoder</Link>
          </section>
          <section className="mt-10"><h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Bruksanvisning for andre merker</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{manuals.filter(m => m.slug !== params.merke).map(m => (<Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-sm text-center text-slate-700 transition-colors">{m.name}</Link>))}</div></section>
        </div>
      </div>
    </>
  )
}
