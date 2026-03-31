import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Tunnelvaskemaskin | Kontinuerlig vask for storvaskerier | vaskemaskin.no',
  description: 'Alt om tunnelvaskemaskiner med kapasitet på opptil 5000 kg per time.',
  path: 'bedrift/maskintyper/tunnelmaskin',
})

const faqItems = [{"question": "Når lønner tunnelmaskin seg?", "answer": "Ved daglig volum over 2000 til 3000 kg er tunnelmaskin mer lønnsomt enn enkeltstående maskiner."}, {"question": "Hvor mye plass kreves?", "answer": "Et tunnelsystem med tilhørende utstyr krever typisk 200 til 500 kvadratmeter gulvplass."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hvordan fungerer en tunnelmaskin' },
    { id: 's1', label: 'Kapasitet og gjennomstrømning' },
    { id: 's2', label: 'Vannforbruk og energi' },
    { id: 's3', label: 'Investering og lønnsomhet' },
    { id: 's4', label: 'Leverandører' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Maskintyper', url: 'https://vaskemaskin.no/bedrift/maskintyper/' }, { name: 'Tunnelmaskin', url: 'https://vaskemaskin.no/bedrift/maskintyper/tunnelmaskin/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Tunnelmaskin' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Tunnelvaskemaskin | Kontinuerlig vask for storvaskerier</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">En tunnelvaskemaskin er et kontinuerlig vaskesystem der tekstilene flyttes gjennom flere kammere med ulike behandlingstrinn.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hvordan fungerer en tunnelmaskin</h2>
              <p>Tekstilene lastes inn i den ene enden og flyttes automatisk gjennom 8 til 16 kammere: forbløtlegging, alkalisk vask, hovedvask med kjemikalier, flere skyllerunder og oppvridning. Hver batch bruker 2 til 4 minutter per kammer. Systemet er kontinuerlig slik at ny batch lastes mens de andre behandles.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Kapasitet og gjennomstrømning</h2>
              <p>Små tunnelmaskiner håndterer 500 til 1000 kg per time. Mellomstore systemer 1000 til 3000 kg per time. Store installasjoner kan håndtere over 5000 kg per time med flere parallelle linjer. Gjennomstrømningen er dramatisk høyere enn enkeltstående maskiner.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Vannforbruk og energi</h2>
              <p>Tunnelmaskiner er ekstremt vanneffektive med 5 til 8 liter per kilo mot 10 til 15 liter for enkeltstående maskiner. Motstroms skylling resirkulerer vann fra rene til urene kammere. Varmegjenvinning kan spare 30 til 50 prosent energi.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Investering og lønnsomhet</h2>
              <p>Investeringen spenner fra 1,5 millioner for små systemer til over 10 millioner for store installasjoner. Kostnaden per kilo vasket tekstil er 40 til 60 prosent lavere enn med enkeltstående maskiner. Breakeven mot enkeltstående maskiner nås typisk ved 2000 til 3000 kg daglig volum.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Leverandører</h2>
              <p>Jensen Group er verdensledende på tunnelsystemer. Girbau, Electrolux Professional og Kannegiesser er også store aktører. I Norge er Jensen og Electrolux mest brukt.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">System</th><th className="px-4 py-3 text-left font-semibold">Gjennomstrømning</th><th className="px-4 py-3 text-left font-semibold">Kammere</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Jensen Senking 720</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500 kg/t</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1,5 til 3 mill. kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Jensen Senking 1100</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1500 kg/t</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">12</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">3 til 6 mill. kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Jensen Senking 1600</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">3000+ kg/t</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">16</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 til 12 mill. kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/vaskeri/", label: "Vaskeri" }, { href: "/bedrift/hotell/", label: "Hotell" }, { href: "/bedrift/leverandorer/jensen-group/", label: "Jensen Group" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
