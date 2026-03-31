import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for borettslag og sameie | vaskemaskin.no',
  description: 'Komplett guide til fellesvaskerier med betalingsløsninger, maskinvalg og vedlikehold.',
  path: 'bedrift/borettslag',
})

const faqItems = [{"question": "Hvor mange maskiner trenger borettslaget?", "answer": "En maskin per 15 til 20 leiligheter er tommelregelen. Et borettslag med 60 leiligheter trenger 3 til 4 maskiner pluss tørketromler."}, {"question": "Leie eller kjope vaskemaskiner?", "answer": "Leasing over 5 til 7 år med service inkludert er oftest mest lønnsomt for borettslag. Månedlig kostnad er 5 000 til 10 000 kr for et komplett vaskeri."}, {"question": "Hva er en god vaskepris for beboerne?", "answer": "20 til 40 kr per vask dekker strom, vann, vaskemiddel og service. Med digital betaling administreres dette automatisk."}, {"question": "Hvordan velge leverandor til fellesvaskeri?", "answer": "Innhent 3 tilbud, sammenlign totalkostnad over 10 år, og sjekk referanser fra andre borettslag."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Krav til fellesvaskerimaskiner' },
    { id: 's1', label: 'Betalingsløsninger for fellesvaskeri' },
    { id: 's2', label: 'Kapasitetsplanlegging' },
    { id: 's3', label: 'Vedlikehold og service' },
    { id: 's4', label: 'Investering og finansiering' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Borettslag', url: 'https://vaskemaskin.no/bedrift/borettslag/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Borettslag' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for borettslag og sameie</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Fellesvaskeriet er en av de viktigste fellestjenestene i norske borettslag. Riktig maskinvalg reduserer konflikter og vedlikeholdskostnader.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Krav til fellesvaskerimaskiner</h2>
              <p>Maskiner i fellesvaskerier utsettes for langt hardere bruk enn husholdningsmaskiner. Beboerne har ulik erfaring og vaner, og maskinene kjores mange ganger daglig av forskjellige brukere. Profesjonelle maskiner fra Miele, Electrolux eller Podab er bygget for denne bruken med førsterket konstruksjon, enkle betjeningspaneler og lang levetid.</p>
              <p>Husholdningsmaskiner i fellesvaskerier varer typisk 2 til 4 år, mens profesjonelle maskiner holder 15 til 20 år med riktig vedlikehold. Den høyere innkjopsprisen betaler seg mange ganger tilbake i form av lavere utskiftningskostnader og faerre driftsstopp.</p>
              <p>Velg maskiner med vanskeliggjort misbruk: låsbare vaskemiddelskuffer, automatisk dosering, og programmer som ikke kan endres av brukeren. Dette forhindrer skader og sikrer at maskinene brukes riktig.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Betalingsløsninger for fellesvaskeri</h2>
              <p>Moderne fellesvaskerier bruker digitale betalingsløsninger som gjor administrasjonen enkel: Miele AppWash lar beboerne betale og booke via mobilappen. Electrolux Pay per Use gir automatisk avregning. Podab SmartWash tilbyr kort og appbetaling. Priser settes typisk til 20 til 40 kr per vask.</p>
              <p>Digitale løsninger eliminerer behovet for myntsystemer og fysiske nøkkeler. Styret får oversikt over bruk, inntekter og maskinenes status i sanntid. Eventuelle feil rapporteres automatisk til serviceleverandoren.</p>
              <p>Inntektene fra vaskeribetaling dekker vanligvis strom, vann, vaskemiddel og serviceavtale. Med riktig prissetting kan fellesvaskeriet gå i null eller generere et lite overskudd til vedlikeholdsfondet.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Kapasitetsplanlegging</h2>
              <p>En maskin per 15 til 20 leiligheter er tommelregelen. Et borettslag med 60 leiligheter trenger 3 til 4 maskiner pluss tilsvarende antall tørketromler. Planlegg med buffer for service slik at minst en maskin alltid er tilgjengelig.</p>
              <p>Vurder også tørkeskap for ømfintlige klær og arbeidstøy. Et tørkeskap tar liten plass og er svært populaert blant beboerne. Strykejernstasjon og bretteflate er andre fasiliteter som oker beboertilfredsheten.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Vedlikehold og service</h2>
              <p>Serviceavtale koster 3 000 til 8 000 kr per maskin per år og inkluderer forebyggende vedlikehold 2 til 4 ganger per år. Ved driftsstopp gir avtalen prioritert utrykning, vanligvis innen 24 til 48 timer.</p>
              <p>Renhold er beboernes ansvar. Heng opp klare instruksjoner for bruk og rengjøring av lofilt og vaskemiddelskuff. Maskiner med selvrengjørende programmer gjor vedlikeholdet enklere.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Investering og finansiering</h2>
              <p>Komplett vaskeri med 4 maskiner og 4 tromler koster 400 000 til 800 000 kr. Leasing over 5 til 7 år med service inkludert er den vanligste finansieringsmodellen for borettslag. Månedlig kostnad blir typisk 5 000 til 10 000 kr.</p>
              <p>Styret bor innhente minst 3 tilbud og sammenligne totalkostnad over 10 år inkludert service, reservedeler og eventuelle oppgraderinger. Referanser fra andre borettslag er verdifulle for aa vurdere leverandorens palitelighet og responstid.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Løsning</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Betaling</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele PW 6080</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">AppWash</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">40 000 til 55 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux Line 6000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">10 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Pay per Use</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">45 000 til 65 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Podab StreamLine</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">SmartWash</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">35 000 til 45 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tørkeskap Podab FlexDry</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 plagg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Inkludert</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 40 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/prisguide/", label: "Prisguide" }, { href: "/bedrift/leverandorer/podab/", label: "Podab" }, { href: "/bedrift/leverandorer/electrolux-professional/", label: "Electrolux Professional" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
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
              <Link href="/bedrift/prisguide/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Prisguide</h3>
                <p className="text-sm text-slate-600">Prisoversikt for alle maskintyper.</p>
              </Link>
              <Link href="/bedrift/leverandorer/podab/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Podab</h3>
                <p className="text-sm text-slate-600">Spesialist på fellesvaskerier.</p>
              </Link>
              <Link href="/bedrift/leverandorer/electrolux-professional/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Electrolux Professional</h3>
                <p className="text-sm text-slate-600">Stor leverandor til borettslag.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
