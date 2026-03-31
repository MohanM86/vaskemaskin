import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Industrivaskemaskin | 20 til 120 kg kapasitet | vaskemaskin.no',
  description: 'Alt om store industrivaskemaskiner for vaskerier og institusjoner.',
  path: 'bedrift/maskintyper/industrimaskin',
})

const faqItems = [{"question": "Softmount eller hardmount?", "answer": "Under 32 kg: softmount er enklest. Over 32 kg: hardmount gir bedre ytelse men krever betongfundament."}, {"question": "Hva er G faktor?", "answer": "G faktor måleer sentrifugekraften. Høyere G faktor gir lavere restfuktighet og kortere tørketid."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Kapasitetsklasser' },
    { id: 's1', label: 'Softmount vs. hardmount' },
    { id: 's2', label: 'G faktor og restfuktighet' },
    { id: 's3', label: 'Automasjon og programmering' },
    { id: 's4', label: 'Leverandorer i Norge' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Maskintyper', url: 'https://vaskemaskin.no/bedrift/maskintyper/' }, { name: 'Industrimaskin', url: 'https://vaskemaskin.no/bedrift/maskintyper/industrimaskin/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Industrimaskin' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Industrivaskemaskin | 20 til 120 kg kapasitet</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Industrivaskemaskiner er storkapasitetsmaskiner fra 20 til 120 kg beregnet for vaskerier, hoteller, sykehus og andre institusjoner med stort vaskevolum.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Kapasitetsklasser</h2>
              <p>Industrivaskemaskiner deles inn i mellomstore (20 til 40 kg), store (40 til 80 kg) og ekstra store (80 til 120 kg). Valget avhenger av daglig volum, type tekstiler og tilgjengelig plass. Større maskiner gir lavere kostnad per kilo men krever mer plass og sterkere gulv.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Softmount vs. hardmount</h2>
              <p>Softmount maskiner står fritt på gulvet med innebygde stotdempere. De er enklere aa installere men vibrerer mer. Hardmount maskiner boltes fast i gulvet og krever betongfundament, men gir høyere sentrifugehastighet og lavere restfuktighet. Over 32 kg er hardmount standard.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>G faktor og restfuktighet</h2>
              <p>G faktoren angir sentrifugekraften og påvirker restfuktigheten direkte. G 200 til 300 er lavhastighet med 55 til 60 prosent restfuktighet. G 300 til 450 er standard med 48 til 52 prosent. G 450 til 600 er hoyhastighet med 42 til 48 prosent. Lavere restfuktighet betyr kortere tørketid og lavere energikostnader.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Automasjon og programmering</h2>
              <p>Moderne industrimaskiner har programmerbare styresystemer med 50 til 200 programmer, automatisk kjemikaliedosering, RFID sporbarhet, og tilkobling til sentralstyring for drift av flere maskiner fra en kontrollplass.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Leverandorer i Norge</h2>
              <p>Electrolux Professional, Miele Professional, Jensen Group, Girbau og Primus er de største leverandorene. Electrolux har det bredeste utvalget med modeller i alle kapasitetsklasser.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Type</th><th className="px-4 py-3 text-left font-semibold">G faktor</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Softmount</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">350</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">80 000 til 130 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">32 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Softmount</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">400</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">120 000 til 200 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">60 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Hardmount</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">450</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">250 000 til 400 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">100 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Hardmount</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">400 000 til 700 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/vaskeri/", label: "Vaskeri" }, { href: "/bedrift/maskintyper/tunnelmaskin/", label: "Tunnelvaskemaskin" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
