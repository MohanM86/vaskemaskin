import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for offshore og maritim | vaskemaskin.no',
  description: 'Spesialmaskiner for plattformer og skip med DNV sertifisering og korrosjonsbeskyttelse.',
  path: 'bedrift/offshore',
})

const faqItems = [{"question": "Kan vanlige maskiner brukes offshore?", "answer": "Nei, de ruster og tåler ikke vibrasjonene. Spesialsertifiserte maskiner med DNV godkjenning er pakrevd for alle plattformer og skip."}, {"question": "Hva koster offshore vaskemaskiner?", "answer": "50 til 100 prosent mer enn landbaserte modeller, typisk 70 000 til 150 000 kr per maskin."}, {"question": "Hvilke leverandorer leverer offshore maskiner?", "answer": "Electrolux Marine, Miele Marine, Schulthess og Podab har egne maritime serier med DNV sertifisering."}, {"question": "Hvor lang er leveringstiden?", "answer": "8 til 16 uker for maritime modeller på grunn av begrenset produksjon og spesialtilpasninger."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Spesielle krav til offshore maskiner' },
    { id: 's1', label: 'Vibrasjonsdempet konstruksjon' },
    { id: 's2', label: 'Korrosjonsbeskyttelse' },
    { id: 's3', label: 'Leverandorer og priser for offshore' },
    { id: 's4', label: 'Vannforsyning og avlop' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Offshore', url: 'https://vaskemaskin.no/bedrift/offshore/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Offshore' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for offshore og maritim</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Offshore plattformer stiller ekstreme krav til vaskemaskiner: vibrasjoner, saltluft, begrenset plass og 24/7 drift uten enkel tilgang til service.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Spesielle krav til offshore maskiner</h2>
              <p>Konstante vibrasjoner fra motorer og bolger, saltholdig luft som korroderer alle metalloverflater, begrenset plass i vaskerommet, ujevn sjøgang som forskyveer tyngdepunktet, og 24/7 tilgjengelighet uten enkel tilgang til servicepersonell. Disse forholdene gjor at standard landbaserte maskiner havarerer i lopet av måneder.</p>
              <p>Offshore maskiner maa sertifiseres etter DNV (Det Norske Veritas) standarder for aa godkjennes for bruk på plattformer og skip. Sertifiseringen dekker vibrasjon, brannfare, elektrisk sikkerhet og stabilitet. Maskiner uten DNV godkjenning er ikke tillatt.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Vibrasjonsdempet konstruksjon</h2>
              <p>Ekstra kraftige stotdempere, førsterkede lagre og spesielle festesystemer absorberer vibrasjonene fra plattformen slik at de ikke påvirker maskinens funksjon. Maskinen boltes fast i dekket med marine grade festemidler i rustfritt stål.</p>
              <p>Sentrifugehastigheten reduseres noe sammenlignet med landbaserte modeller for aa kompensere for sjøgang. Dette gir høyere restfuktighet, men er nødvendig for stabil drift. Balansekontrollsystemer avbryter syklusen automatisk dersom vibrasjonen overskrider grenseverdier.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Korrosjonsbeskyttelse</h2>
              <p>Alle utvendige overflater er i rustfritt stål minimum AISI 304, og eksponerte komponenter bruker AISI 316 marine grade. Indre komponenter forsegles mot saltluft med spesielle pakninger og overflatebehandlinger. Elektronikken beskyttes med hermetisk forseglede kretskort og kontakter.</p>
              <p>Standardmaskiner med pulverlakkerte overflater ruster i lopet av 6 til 12 måneder i marine miljo. Selv maskiner i vanlig rustfritt stål kan få korrosjonsskader på bølter og lagre dersom de ikke er spesifikt designet for maritimt bruk.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Leverandorer og priser for offshore</h2>
              <p>Electrolux Professional Marine serien er den mest utbredte på norske plattformer. Miele Professional Marine tilbyr kompakte løsninger med lav støy. Podab og Schulthess har egne maritime serier. Priser er 50 til 100 prosent over landbaserte modeller, typisk 70 000 til 150 000 kr per maskin.</p>
              <p>Leveringstid for offshore maskiner er ofte 8 til 16 uker på grunn av begrenset produksjon og spesialtilpasninger. Bestill i god tid for offshore plattformer og planlegg service i forbindelse med planlagte vedlikeholdsstopp.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Vannforsyning og avlop</h2>
              <p>Begrenset ferskvannstilgang krever maskiner med lavt vannforbruk. Noen installasjoner bruker avsaltet sjovann som supplementerer ferskvannstanken. Avlop maa handteres etter MARPOL reglene som regulerer utslipp fra skip og plattformer.</p>
              <p>Grovfiltrering av avlopsvann er pakrevd for aa fjerne fiberrester og partikler for utslipp. På noen plattformer ledes avlopsvannet til et behandlingsanlegg om bord for vann og oljesepareres for utslipp.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskin</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Sertifisering</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux Marine W5130H</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">14 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">DNV GL</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">100 000 til 150 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele Marine PW 6080</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">DNV GL</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">80 000 til 120 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Schulthess Spirit 530</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">7 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">DNV GL</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">70 000 til 100 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/maskintyper/industrimaskin/", label: "Industrivaskemaskin" }, { href: "/bedrift/leverandorer/electrolux-professional/", label: "Electrolux Professional" }, { href: "/bedrift/leverandorer/schulthess/", label: "Schulthess" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
        </div>
      </div>

      <section className="bg-gradient-to-r from-aqua-600 to-aqua-700 text-white">
        <div className="container-site py-12 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Trenger du hjelp til aa velge?</h2>
          <p className="text-aqua-100 text-lg mb-8 max-w-2xl mx-auto">Se prisguiden eller utforsk leverandorene tilgjengelige i Norge.</p>
          <Link href="/bedrift/prisguide/" className="inline-block bg-white text-aqua-700 font-bold px-8 py-4 rounded-xl hover:bg-aqua-50 transition-colors shadow-lg">Se prisguide</Link>
        </div>
      </section>

      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container-site py-12">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">Relaterte sider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/bedrift/maskintyper/industrimaskin/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Industrivaskemaskin</h3>
                <p className="text-sm text-slate-600">Storkapasitetsmaskiner.</p>
              </Link>
              <Link href="/bedrift/leverandorer/electrolux-professional/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Electrolux Professional</h3>
                <p className="text-sm text-slate-600">Marine serien.</p>
              </Link>
              <Link href="/bedrift/leverandorer/schulthess/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Schulthess</h3>
                <p className="text-sm text-slate-600">Sveitsisk kvalitet.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
