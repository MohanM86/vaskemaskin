import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for barnehage | vaskemaskin.no',
  description: 'Guide til profesjonelle vaskemaskiner for barnehager med allergivennlige programmer og smittevern.',
  path: 'bedrift/barnehage',
})

const faqItems = [{"question": "Maa barnehager ha profesjonelle maskiner?", "answer": "Kommunale barnehager har krav om profesjonelle maskiner i driftsavtalene. Private barnehager bor følge samme retningslinjer for aa sikre hygienisk vask og lang levetid."}, {"question": "Hvor ofte vaskes sengetøy i barnehagen?", "answer": "Ukentlig på minimum 60 grader. Ved sykdomsutbrudd vaskes alt umiddelbart på 85 grader eller med desinfiserende vaskemiddel."}, {"question": "Hva koster det aa kjope vaskemaskin til barnehage?", "answer": "En profesjonell maskin på 8 kg koster 25 000 til 55 000 kr. Leasing med service er tilgjengelig fra 800 til 1 500 kr per måned."}, {"question": "Hvilken maskin er best for barnehage?", "answer": "Miele PW 5082 og Electrolux myPRO er de mest populære valgene. Begge har allergiprogrammer og kompakte mål som passer små vaskerom."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hvorfor profesjonelle maskiner i barnehager' },
    { id: 's1', label: 'Allergivennlig vask i barnehager' },
    { id: 's2', label: 'Smittevern og hygiene' },
    { id: 's3', label: 'Kapasitet og plassering' },
    { id: 's4', label: 'Driftskostnader og budsjett' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Barnehage', url: 'https://vaskemaskin.no/bedrift/barnehage/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Barnehage' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for barnehage</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Barnehager vasker alt fra sengetøy til skitne klær. Gode vaskemaskiner er en forutsetning for god hygiene og redusert sykefravaer.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hvorfor profesjonelle maskiner i barnehager</h2>
              <p>Husholdningsmaskiner sliter med vaskevolumet i en barnehage og mangler programmer for hygienisk vask. En profesjonell maskin tåler 5 til 10 vask per dag og leverer dokumenterbart hygienisk resultat. Kommunale barnehager har som regel krav om profesjonelle maskiner i sine driftsavtaler.</p>
              <p>En typisk barnehage med 4 avdelinger vasker 15 til 30 kg tekstiler per dag: sengetøy fra soveavdelingene, kluter og håndklær fra kjokken og bad, samt skiftetoy og laken. I perioder med mye sykdom kan volumet oke betydelig.</p>
              <p>Profesjonelle maskiner har dessuten kortere syklustider og lavere driftskostnader per vask enn husholdningsmaskiner. En profesjonell maskin varer typisk 15 til 20 år mot 8 til 10 år for en forbrukermodell, noe som gjor totaløkonomien bedre.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Allergivennlig vask i barnehager</h2>
              <p>Opptil 20 prosent av norske barn har allergi eller overfølsom hud. Profesjonelle maskiner har ekstra skylleprogrammer som fjerner opptil 99 prosent av vaskemiddelrestene fra tekstilene. Dette er spesielt viktig for sengetøy og klær som er i direkte kontakt med barnas hud.</p>
              <p>Bruk alltid parfymefrie og allergimerkede vaskemidler. Autonatisk doseringssystem sikrer riktig mengde og forhindrer overdosering som kan irritere sensitiv hud. Miele og Electrolux tilbyr begge spesialprogrammer for allergivennlig vask som er testet og sertifisert.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Smittevern og hygiene</h2>
              <p>Sengetøy vaskes ved minimum 60 grader ukentlig. Ved utbrudd av omgangssyke, hånd, fot og munn eller andre smittsomme sykdommer anbefaler FHI vask ved 85 grader eller bruk av desinfiserende vaskemiddel. Kluter fra stell og kjokken bor vaskes daglig ved 60 grader.</p>
              <p>Husk at vask ved 40 grader ikke dreper bakterier effektivt. Selv om lavtemperaturvask sparer energi, er det ikke egnet for barnehager der smittevern er avgjørende. Profesjonelle maskiner med dokumenterte vaskeprogrammer gjor det enkelt aa bevise at hygienekravene er oppfylt.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Kapasitet og plassering</h2>
              <p>De fleste barnehager klarer seg med 1 til 2 maskiner på 8 til 14 kg. Kompakte stableløsninger er ideelt for små vaskerom. En stabel med vaskemaskin og tørketrommel tar bare 60 x 70 cm gulvplass og håndterer behovet til en barnehage med opptil 6 avdelinger.</p>
              <p>Plasser maskinen nær avdelingene for aa minimere transport av skittentoy. Sorg for god ventilasjon i vaskerommet for aa unngå fukt og muggproblemer. Gulvet bor ha sluk og være vanntett.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Driftskostnader og budsjett</h2>
              <p>Strom og vann koster 3 til 6 kr per vask. Årskostnad inkludert vaskemiddel og service ligger på 15 000 til 25 000 kr for en typisk barnehage. En profesjonell maskin på 8 kg koster 25 000 til 55 000 kr avhengig av merke og funksjoner.</p>
              <p>Serviceavtale anbefales og koster typisk 2 000 til 5 000 kr per år. Denne dekker forebyggende vedlikehold og gir prioritert respons ved feil. De fleste leverandorer tilbyr leasing med service inkludert fra 800 til 1 500 kr per måned.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskin</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Allergiprogram</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele PW 5082</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ja</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">35 000 til 45 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux myPRO WE170P</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ja</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 35 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Podab StreamLine</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ja</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 40 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele Little Giant</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6,5 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ja</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 40 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }, { href: "/bedrift/leverandorer/miele-professional/", label: "Miele Professional" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
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
              <Link href="/bedrift/hygienestandarder/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder</h3>
                <p className="text-sm text-slate-600">Krav til hygienisk tekstilvask.</p>
              </Link>
              <Link href="/bedrift/leverandorer/miele-professional/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Miele Professional</h3>
                <p className="text-sm text-slate-600">Mest brukt i norske barnehager.</p>
              </Link>
              <Link href="/bedrift/prisguide/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Prisguide</h3>
                <p className="text-sm text-slate-600">Prisoversikt for profesjonelle maskiner.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
