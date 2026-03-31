import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Podab | Nordisk spesialist paa fellesvaskerier | vaskemaskin.no',
  description: 'Alt om Podab vaskemaskiner og torkesystemer for borettslag og institusjoner.',
  path: 'bedrift/leverandorer/podab',
})

const faqItems: { question: string; answer: string }[] = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Podab' },
    { id: 's1', label: 'Produkter' },
    { id: 's2', label: 'Styrker' },
    { id: 's3', label: 'Torkeskap' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Podab', url: 'https://vaskemaskin.no/bedrift/leverandorer/podab/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Podab' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Podab | Nordisk spesialist paa fellesvaskerier</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Podab er en nordisk produsent spesialisert paa fellesvaskerier, torkeskap og betalingslosninger for borettslag.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Podab</h2>
              <p>Podab er et svensk selskap grunnlagt i 1950 som spesialiserer seg paa losninger for fellesvaskerier. Merket er markedsleder i Skandinavia paa torkeskap og har en sterk posisjon i borettslagmarkedet med sin SmartWash betalingslosning.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Produkter</h2>
              <p>StreamLine vaskemaskiner fra 6 til 14 kg for fellesvaskerier. FlexDry torkeskap for skaansom torking av uniformer og arbeidstoy. SmartWash betalingssystem med app, kort og brikke.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Skandinavisk design og forstaaelse for nordiske behov. Markedsleder paa torkeskap. God betalingslosning for borettslag. Lokalt servicenettverk i Norge og Sverige.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Torkeskap</h2>
              <p>Podab FlexDry er det mest populaere torkeskapet i Skandinavia. Det torker klær hengende paa boeyler med varmluft, noe som eliminerer kroeller og er skaansommere enn torketrommel.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Produkt</th><th className="px-4 py-3 text-left font-semibold">Type</th><th className="px-4 py-3 text-left font-semibold">Segment</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">StreamLine 8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Vaskemaskin</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Fellesvaskeri</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 40 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">FlexDry 8</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Torkeskap</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Uniform</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 35 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">SmartWash</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Betaling</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Borettslag</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">5 000 til 10 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/maskintyper/torkeskap/", label: "Torkeskap" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
