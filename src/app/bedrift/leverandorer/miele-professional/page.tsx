import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Miele Professional | Profesjonelle vaskemaskiner | vaskemaskin.no',
  description: 'Alt om Miele Professional vaskemaskiner for bedrift. Modeller, priser og service i Norge.',
  path: 'bedrift/leverandorer/miele-professional',
})

const faqItems = [{"question": "Er Miele Professional verdt den hoye prisen?", "answer": "Ja, regnet per aar er Miele ofte billigere enn rimeligere alternativer fordi maskinene varer vesentlig lenger."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Miele Professional' },
    { id: 's1', label: 'Produktserier' },
    { id: 's2', label: 'Styrker' },
    { id: 's3', label: 'Svakheter' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Miele Professional', url: 'https://vaskemaskin.no/bedrift/leverandorer/miele-professional/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Miele Professional' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Miele Professional | Profesjonelle vaskemaskiner</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Miele Professional er premiumvalget for profesjonelle vaskemaskiner med maskiner testet for 30 000 sykluser og eget servicenettverk i Norge.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Miele Professional</h2>
              <p>Miele Professional er den profesjonelle divisjonen av tyske Miele og tilbyr vaskemaskiner fra 6,5 til 32 kg kapasitet. Alle maskiner testes for 30 000 sykluser som tilsvarer ca. 15 aar med 8 vask per dag. Miele Professional har egen serviceorganisasjon med teknikere i alle storbyene i Norge.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Produktserier</h2>
              <p>Little Giants (6,5 til 8 kg) for smaa lokaler som frisorer og klinikker. Performance (8 til 16 kg) for barnehager, hoteller og borettslag. Benchmark (20 til 32 kg) for storre vaskerier og institusjoner. Alle serier har automatisk dosering, programmering og nettverksoppkobling.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Bygd for aa vare. Hoyeste kvalitet paa materialer og komponenter. Eget servicenettverk i Norge med korte responstider. Bredt utvalg av programmer og tilbehor. Automatisk dosering som standard paa de fleste modeller.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Svakheter</h2>
              <p>Hoyeste priser i markedet. Krever Miele egne kjemikalier for optimal ytelse med TwinDos. Begrenset utvalg over 32 kg kapasitet der Electrolux og Jensen er sterkere.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Serie</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Sykluser</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Little Giants</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6,5 til 8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 55 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Performance</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 til 16 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">50 000 til 150 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Benchmark</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 til 32 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">130 000 til 250 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/barnehage/", label: "Barnehage" }, { href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
