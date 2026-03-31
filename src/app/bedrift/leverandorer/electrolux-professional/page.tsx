import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Electrolux Professional | Bredeste utvalg i Norge | vaskemaskin.no',
  description: 'Alt om Electrolux Professional vaskemaskiner fra 6 til 110 kg kapasitet.',
  path: 'bedrift/leverandorer/electrolux-professional',
})

const faqItems = [{"question": "Hva er forskjellen på myPRO og Line 6000?", "answer": "myPRO er for små bedrifter med 1 til 3 vask per dag. Line 6000 er for mellomstore brukere med 3 til 10 vask daglig og har flere programmer og høyere holdbarhet."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Electrolux Professional' },
    { id: 's1', label: 'Produktserier' },
    { id: 's2', label: 'Styrker' },
    { id: 's3', label: 'Svakheter' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Electrolux Professional', url: 'https://vaskemaskin.no/bedrift/leverandorer/electrolux-professional/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Electrolux Professional' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Electrolux Professional | Bredeste utvalg i Norge</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Electrolux Professional er markedsleder i Norden med det bredeste utvalget av profesjonelle vaskemaskiner fra 6 til 110 kg.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Electrolux Professional</h2>
              <p>Electrolux Professional er den profesjonelle divisjonen av svenske Electrolux og den største leverandoren av profesjonelle vaskemaskiner i Norden. Sortimentet dekker alt fra små 6 kg maskiner for frisorer til 110 kg barrieremaskiner for sykehus. Eget servicenettverk i hele Norge.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Produktserier</h2>
              <p>myPRO (6 til 8 kg) for små bedrifter. Line 6000 (8 til 20 kg) for mellomstore brukere. Line 5000 (20 til 65 kg) for større vaskerier. Barrieremaskiner fra 16 til 110 kg for helsevesen. Marine serien for offshore og maritim.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Bredeste utvalget i Norden. Godt servicenettverk. Konkurransedyktige priser. Pay per Use betalingsløsning for borettslag. Marine sertifisering for offshore.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Svakheter</h2>
              <p>Byggekvaliteten noe under Miele på de minste modellene. Kjemikaliesystemet er mindre avansert enn Miele TwinDos.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Serie</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Segment</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">myPRO</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 til 8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Små bedrifter</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 000 til 40 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Line 6000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 til 20 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Mellomstore</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">40 000 til 120 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Line 5000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 til 65 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Vaskerier</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">100 000 til 400 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Barrier</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">16 til 110 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Helsevesen</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">200 000 til 1 mill. kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/hotell/", label: "Hotell" }, { href: "/bedrift/sykehus/", label: "Sykehus" }, { href: "/bedrift/offshore/", label: "Offshore" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
