import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Torkeskap | Skaansom torking av uniformer og arbeidstoy | vaskemaskin.no',
  description: 'Alt om torkeskap for uniformer, dresser og arbeidstoy som alternativ til torketrommel.',
  path: 'bedrift/maskintyper/torkeskap',
})

const faqItems = [{"question": "Er torkeskap bedre enn torketrommel?", "answer": "For uniformer og finere arbeidstoy ja, fordi klærne beholder formen og faar minimalt med kroeller. For vanlig toy er torketrommel raskere."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hva er et torkeskap' },
    { id: 's1', label: 'Fordeler fremfor torketrommel' },
    { id: 's2', label: 'Bruksomraader' },
    { id: 's3', label: 'Leverandorer' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Maskintyper', url: 'https://vaskemaskin.no/bedrift/maskintyper/' }, { name: 'Torkeskap', url: 'https://vaskemaskin.no/bedrift/maskintyper/torkeskap/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Torkeskap' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Torkeskap | Skaansom torking av uniformer og arbeidstoy</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Et torkeskap torker klær hengende paa boeyle, noe som eliminerer kroell og er skaansommere enn torketrommel for uniformer og finere arbeidstoy.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hva er et torkeskap</h2>
              <p>Et torkeskap er et frittstaaende skap med oppvarmet luft som torker klær hengende paa boeyler. Klærne beholder formen og faar minimalt med kroeller, noe som gjor torkeskap ideelt for uniformer, dresser, skjorter og arbeidstoy som maa se presentabelt ut.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Fordeler fremfor torketrommel</h2>
              <p>Ingen mekanisk paavirkning betyr null krymping og slitasje. Klærne henger fritt og torker jevnt. Mange plagg trenger ikke strykes etterpaa. Spesielt egnet for flammeresistente klær der torketrommel kan oedselegge brannsikkerheten.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Bruksomraader</h2>
              <p>Hoteller for uniformer, sykehus for arbeidstoy, brannvesen for flammeresistente klær, forsvar, politi, cruise og maritim sektor, og bedrifter med strenge krav til arbeidstoyets utseende.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Leverandorer</h2>
              <p>Podab er markedsleder i Skandinavia med sin FlexDry serie. Electrolux Professional og Miele Professional har ogsaa torkeskap i sortimentet. Nimo er et annet nordisk alternativ.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Modell</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Torkemetode</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Podab FlexDry</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 til 16 plagg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Varmluft</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 45 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Nimo ECO Dryer</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">10 til 20 plagg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Varmepumpe</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 50 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/hotell/", label: "Hotell" }, { href: "/bedrift/leverandorer/podab/", label: "Podab" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
