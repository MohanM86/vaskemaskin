import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Barrieremaskin | Tosidig vaskemaskin for smittevern | vaskemaskin.no',
  description: 'Alt om barrierevaskemaskiner med ren og uren sone for sykehus og helsevesen.',
  path: 'bedrift/maskintyper/barrieremaskin',
})

const faqItems = [{"question": "Maa alle helseinstitusjoner ha barrieremaskin?", "answer": "Sykehus ja. Sykehjem og andre helseinstitusjoner følger lokale krav, men barrierevasking anbefales sterkt."}, {"question": "Hva koster en barrieremaskin?", "answer": "Fra 200 000 kr for 14 kg til over 1 million kr for 100+ kg modeller."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hva er en barrieremaskin' },
    { id: 's1', label: 'Hvor er barrieremaskin pakrevd' },
    { id: 's2', label: 'Tekniske spesifikasjoner' },
    { id: 's3', label: 'Installasjonskrav' },
    { id: 's4', label: 'Leverandorer' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Maskintyper', url: 'https://vaskemaskin.no/bedrift/maskintyper/' }, { name: 'Barrieremaskin', url: 'https://vaskemaskin.no/bedrift/maskintyper/barrieremaskin/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Barrieremaskin' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Barrieremaskin | Tosidig vaskemaskin for smittevern</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">En barrieremaskin er en vaskemaskin med to sider separert av en vegg, der skittent toy lastes inn fra uren sone og rent toy tas ut på ren side.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hva er en barrieremaskin</h2>
              <p>En barrieremaskin er en spesialkonstruert vaskemaskin som er bygget inn i en vegg mellom to soner: en uren side der kontaminerte tekstiler lastes inn, og en ren side der ferdigvaskede tekstiler tas ut. Veggen mellom sonene eliminerer all risiko for kryssmitte mellom rent og urent. Maskinen har separate dorer på hver side som aldri kan åpnes samtidig.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Hvor er barrieremaskin pakrevd</h2>
              <p>Barrieremaskin er pakrevd i sykehus, sykehjem og de fleste helseinstitusjoner i Norge i henhold til Forskrift om smittevern i helsetjenesten. Noen kommuner krever det også i større barnehager og institusjoner for funksjonshemmede.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Tekniske spesifikasjoner</h2>
              <p>Barrieremaskiner finnes i kapasiteter fra 10 til 110 kg. De har automatisk dosering av kjemikalier, termisk desinfeksjon ved 85 til 93 grader, RFID sporbarhet og logging av alle kritiske parametere. Trommelhastighetene er høyere enn vanlige maskiner for lavere restfuktighet.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Installasjonskrav</h2>
              <p>Maskinen maa monteres i en vegg med riktig tykkelse og styrke. Roren for vann, avlop, damp og kjemikalier maa installeres på begge sider. Gulvet maa tåle vekten som kan være opptil 2000 kg for store modeller. Ventilasjon maa planlegges for begge soner.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Leverandorer</h2>
              <p>De ledende produsentene er Electrolux Professional, Miele Professional, Jensen Group og Girbau. Electrolux har det største utvalget i Norge med modeller fra 16 til 110 kg kapasitet.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Modell</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Leverandor</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">W5130H</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">14 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">200 000 til 300 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">PW 6241</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">24 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">350 000 til 500 000 kr</td></tr><tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">HS 6057</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">57 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Girbau</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">500 000 til 800 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/sykehus/", label: "Sykehus" }, { href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }, { href: "/bedrift/leverandorer/electrolux-professional/", label: "Electrolux Professional" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
