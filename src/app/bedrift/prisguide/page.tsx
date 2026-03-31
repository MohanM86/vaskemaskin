import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Prisguide for profesjonelle vaskemaskiner | vaskemaskin.no',
  description: 'Komplett prisoversikt for profesjonelle vaskemaskiner. Fra smaa 6 kg maskiner til industrielle tunnelsystemer.',
  path: 'bedrift/prisguide',
})

const faqItems = [{"question": "Hva koster en profesjonell vaskemaskin?", "answer": "Fra 20 000 kr for en liten 6 kg modell til over 10 millioner kr for en tunnelvaskemaskin. De fleste bedrifter trenger maskiner i sjiktet 30 000 til 150 000 kr."}, {"question": "Loenner det seg aa lease?", "answer": "For de fleste bedrifter ja. Leasing gir forutsigbare kostnader, inkluderer ofte service, og eliminerer store engangsinvesteringer."}, {"question": "Hva er driftskostnaden per vask?", "answer": "Typisk 3 til 8 kr per vask for smaa maskiner (strom, vann, vaskemiddel) og 10 til 25 kr for store industrimaskiner."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Priser for smaa profesjonelle maskiner (6 til 10 kg)' },
    { id: 's1', label: 'Priser for mellomstore maskiner (10 til 20 kg)' },
    { id: 's2', label: 'Priser for store industrimaskiner (20 til 60 kg)' },
    { id: 's3', label: 'Priser for barrieremaskiner' },
    { id: 's4', label: 'Priser for tunnelvaskemaskiner' },
    { id: 's5', label: 'Priser for torkeskap' },
    { id: 's6', label: 'Leasing og finansiering' },
    { id: 's7', label: 'Driftskostnader' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Ressurser', url: 'https://vaskemaskin.no/bedrift//' }, { name: 'Prisguide', url: 'https://vaskemaskin.no/bedrift/prisguide/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Prisguide' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Prisguide for profesjonelle vaskemaskiner</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Hva koster profesjonelle vaskemaskiner? Komplett prisoversikt for alle maskintyper og kapasiteter i det norske markedet.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Priser for smaa profesjonelle maskiner (6 til 10 kg)</h2>
              <p>Smaa profesjonelle maskiner fra 6 til 10 kg kapasitet koster typisk 20 000 til 65 000 kr avhengig av merke og funksjoner. Electrolux myPRO starter rundt 20 000 kr og er det rimeligste alternativet. Miele Little Giants ligger paa 30 000 til 55 000 kr. Podab StreamLine er et godt mellomvalg paa 30 000 til 40 000 kr. Disse maskinene passer for frisorer, smaa barnehager, klinikker og borettslag med faerre enn 20 leiligheter.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Priser for mellomstore maskiner (10 til 20 kg)</h2>
              <p>Mellomstore profesjonelle maskiner koster 50 000 til 150 000 kr. Electrolux Line 6000 serien ligger paa 45 000 til 120 000 kr og har det bredeste utvalget. Miele Performance serien koster 70 000 til 150 000 kr. Primus FX serien er et godt prisalternativ paa 50 000 til 100 000 kr. Disse passer for hoteller, storre barnehager og institusjoner.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Priser for store industrimaskiner (20 til 60 kg)</h2>
              <p>Store industrimaskiner koster 100 000 til 400 000 kr. Softmount maskiner er billigere men krever mer gulvplass for vibrasjoner. Hardmount maskiner er dyrere men gir bedre ytelse. Electrolux og Girbau dominerer dette segmentet i Norge.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Priser for barrieremaskiner</h2>
              <p>Barrieremaskiner koster fra 200 000 kr for 14 kg modeller til over 1 million kr for 100+ kg modeller. Electrolux, Miele og Girbau er de storste leverandorene. Installasjonskostnaden kommer i tillegg og kan utgjore 20 til 40 prosent av maskinprisen for veggtilpasning og rorarbeid.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Priser for tunnelvaskemaskiner</h2>
              <p>Tunnelvaskemaskiner starter paa ca. 1,5 millioner kr for smaa systemer og kan koste over 10 millioner kr for store installasjoner. Jensen Group og Girbau er de ledende leverandorene. Totalinvesteringen inkludert torker, folder og automasjon kan vaere 5 til 20 millioner kr.</p>
            </section>
            <section data-section-id="s5" className="scroll-mt-20 mb-10">
              <h2>Priser for torkeskap</h2>
              <p>Torkeskap koster 20 000 til 50 000 kr avhengig av kapasitet og produsent. Podab FlexDry er det mest populaere valget i Skandinavia. Nimo ECO Dryer med varmepumpe er noe dyrere men mer energieffektivt.</p>
            </section>
            <section data-section-id="s6" className="scroll-mt-20 mb-10">
              <h2>Leasing og finansiering</h2>
              <p>De fleste leverandorer tilbyr leasing over 3 til 7 aar. Maanedlige kostnader for en 8 kg profesjonell maskin ligger paa 700 til 1200 kr per maaned med service inkludert. For et komplett fellesvaskeri med 4 maskiner og 4 tromler kan maanedskostnaden vaere 5 000 til 10 000 kr.</p>
            </section>
            <section data-section-id="s7" className="scroll-mt-20 mb-10">
              <h2>Driftskostnader</h2>
              <p>Strom, vann og vaskemiddel koster typisk 3 til 8 kr per vask for smaa maskiner og 10 til 25 kr per vask for store industrimaskiner. Serviceavtale koster 3 000 til 15 000 kr per maskin per aar avhengig av storrelse og avtale. Total driftskostnad per kilo vasket tekstil: 2 til 5 kr for eget vaskeri mot 12 til 25 kr for outsourcing.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskintype</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Prisrange</th><th className="px-4 py-3 text-left font-semibold">Typisk leasing/mnd</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Kompakt profesjonell</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 til 10 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 000 til 65 000 kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500 til 1 200 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Mellomstor</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">10 til 20 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">50 000 til 150 000 kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1 000 til 2 500 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Industri</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 til 60 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">100 000 til 400 000 kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">2 000 til 6 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Barrieremaskin</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">14 til 110 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">200 000 til 1 mill. kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">3 000 til 15 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tunnelmaskin</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500+ kg/t</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1,5 til 10 mill. kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Prosjektbasert</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Torkeskap</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 til 20 plagg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 000 til 50 000 kr</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500 til 1 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/hotell/", label: "Hotell" }, { href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/", label: "Leverandorer" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
