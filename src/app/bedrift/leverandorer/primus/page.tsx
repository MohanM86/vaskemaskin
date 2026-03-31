import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Primus (Alliance) | Industrielle vaskemaskiner | vaskemaskin.no',
  description: 'Alt om Primus vaskemaskiner fra Alliance Laundry Systems.',
  path: 'bedrift/leverandorer/primus',
})

const faqItems = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Primus' },
    { id: 's1', label: 'Styrker' },
    { id: 's2', label: 'Utvalg i Norge' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Primus', url: 'https://vaskemaskin.no/bedrift/leverandorer/primus/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Primus' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Primus (Alliance) | Industrielle vaskemaskiner</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Primus er et merke under Alliance Laundry Systems, verdens storste produsent av kommersielle vaskemaskiner.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Primus</h2>
              <p>Primus tilhorer Alliance Laundry Systems som er verdens storste produsent av kommersielle vaskemaskiner. Primus er spesielt sterkt paa myntvaskerier og fellesvaskerier med robuste maskiner og avanserte betalingssystemer.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Meget robuste maskiner beregnet for hoy bruksfrekvens. Gode betalingslosninger for myntvaskeri og selvbetjening. Konkurransedyktige priser i mellomsjiktet. Bred kapasitetsrekke fra 7 til 60 kg.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Utvalg i Norge</h2>
              <p>FX serien fra 7 til 32 kg for generell profesjonell bruk. RX serien fra 16 til 60 kg for storre installasjoner. Betalingslosninger med kort, brikke og app.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Serie</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Segment</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">FX 80</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Fellesvaskeri</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">35 000 til 50 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">FX 180</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">18 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Hotell/institusjon</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">70 000 til 100 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">RX 350</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">35 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Vaskeri</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">150 000 til 250 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/prisguide/", label: "Prisguide" }, { href: "/bedrift/vaskeri/", label: "Vaskeri" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
