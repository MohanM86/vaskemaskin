import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for sykehus og helsevesen | vaskemaskin.no',
  description: 'Komplett guide til vaskemaskiner for sykehus med barrierevasking, RABC, termisk desinfeksjon og NS INSTA 800.',
  path: 'bedrift/sykehus',
})

const faqItems = [{"question": "Må sykehus bruke barrieremaskin?", "answer": "Ja, barrieremaskin med ren og uren sone er lovpåkrevd for helseinstitusjoner i henhold til Forskrift om smittevern i helsetjenesten."}, {"question": "Hva er RABC?", "answer": "Europeisk standard EN 14065 for hygienisk håndtering av tekstiler med systematisk risikoanalyse, dokumenterte kontrollpunkter og mikrobiologisk kontroll."}, {"question": "Hva koster barrieremaskin for sykehus?", "answer": "En barrieremaskin på 36 kg koster 400 000 til 700 000 kr. Et komplett sykehusvaskerisystem med tunnel koster 3 til 10 millioner kr."}, {"question": "Hva er termisk desinfeksjon?", "answer": "Vask ved minimum 85 grader i 10 minutter. Temperaturen logges automatisk for å dokumentere at kravet er oppfylt."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Barrierevasking er lovpåkrevd' },
    { id: 's1', label: 'Termisk desinfeksjon' },
    { id: 's2', label: 'RABC standarden EN 14065' },
    { id: 's3', label: 'Sporbarhet med RFID' },
    { id: 's4', label: 'Kapasitet for sykehusvaskerier' },
    { id: 's5', label: 'Vaskemidler og kjemikalier' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Sykehus', url: 'https://vaskemaskin.no/bedrift/sykehus/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Sykehus' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for sykehus og helsevesen</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Helsevesenet har de strengeste kravene til tekstilvask i Norge. Feil vaskerutiner kan føre til smittespredning og alvorlige infeksjoner.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Barrierevasking er lovpåkrevd</h2>
              <p>I sykehusvaskerier er barrieremaskin standard. Maskinen har en uren side og en ren side med vegg mellom sonene for å hindre kryssmitte mellom skitten og ren tekstil. Dette er regulert i Forskrift om smittevern i helsetjenesten og er et absolutt krav for alle helseinstitusjoner.</p>
              <p>Barrieremaskinen fungerer slik: skitten tekstil lastes inn fra den urene sonen. Etter fullført vaskesyklus med termisk desinfeksjon åpnes luka på den rene siden der personalet tar ut de ferdige tekstilene uten kontakt med den urene sonen. Denne fysiske adskillelsen er avgjørende for smittevernet.</p>
              <p>Veggen mellom sonene må være tett og vanntett. Barrieremaskinen er boltet fast i veggen. Installasjon krever planlegging av røropplegg, avløp og ventilasjon på begge sider.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Termisk desinfeksjon</h2>
              <p>Alle tekstiler i kontakt med pasienter må gjennomgå termisk desinfeksjon: minimum 85 grader i 10 minutter. Noen programmer krever 90 grader i 5 minutter. Temperaturen må dokumenteres og logges for hver vask med automatisk registrering.</p>
              <p>Kjemotermisk desinfeksjon ved lavere temperaturer er et alternativ for varmefølsomme tekstiler, men krever godkjente desinfeksjonsmidler og validering. De fleste sykehus velger termisk desinfeksjon fordi det er enklere å dokumentere og ikke avhenger av kjemikaliekonsentrasjoner.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>RABC standarden EN 14065</h2>
              <p>Risk Analysis and Biocontamination Control er den europeiske standarden for hygienisk håndtering av tekstiler. Den krever systematisk risikoanalyse av hele vaskeprosessen fra innsamling til distribusjon, definerte kontrollpunkter, dokumentasjon av alle trinn, og regelmessige mikrobiologiske kontroller.</p>
              <p>RABC sertifisering er ikke lovpåkrevd, men de fleste helseforetakene i Norge krever det i sine anbudsutlysninger. Sertifiseringen gjennomføres av akkrediterte tredjeparter og fornyes årlig. Systemet er krevende å implementere, men gir full sporbarhet og kvalitetssikring.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Sporbarhet med RFID</h2>
              <p>Moderne sykehusvaskerier bruker RFID brikker i tekstilene for å spore hver gjenstand gjennom vaskeprosessen. Systemet dokumenterer automatisk at kravene er oppfylt: riktig temperatur, riktig tid, riktig program. Ved avvik genereres automatisk varsler.</p>
              <p>RFID gjør det også mulig å holde oversikt over tekstilenes alder og antall vaskeganger. Sengetøy og arbeidstøy har begrenset levetid, og RFID sikrer at utslitte tekstiler fases ut for de utgjør en smitterisiko. Investeringen i RFID er typisk 5 til 15 kr per tekstilenhet.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Kapasitet for sykehusvaskerier</h2>
              <p>Et sykehus genererer 3 til 5 kg tekstiler per seng per døgn. 200 senger betyr kapasitet for 600 til 1000 kg daglig. De fleste bruker sentralvaskeri med tunnelmaskiner for dette volumet. Mindre sykehjem og klinikker kan klare seg med 2 til 4 barrieremaskiner på 24 til 36 kg.</p>
              <p>Intensivavdelinger genererer 2 til 3 ganger mer tekstil per seng enn vanlige avdelinger. Operasjonsstuer krever spesiell håndtering av kirurgisk tekstil med strengere desinfeksjonskrav. Planlegg kapasitet med minst 30 prosent buffer for sesongvariasjoner og utbrudd.</p>
            </section>
            <section data-section-id="s5" className="scroll-mt-20 mb-10">
              <h2>Vaskemidler og kjemikalier</h2>
              <p>Sykehusvaskerier bruker spesialiserte systemer med automatisk dosering og desinfiserende tilsatsstoffer. Alle kjemikalier må være godkjent for helseinstitusjoner og dokumentert i henhold til RABC standarden.</p>
              <p>Doseringssystemet må integreres med vaskemaskinen og logge noyaktig forbruk per vask. Dette sikrer konsistent resultat og reduserer risikoen for under eller overdosering. Leverandørene tilbyr vanligvis fullserviceavtaler på kjemikalier med automatisk påfylling.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskintype</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Krav</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Barrieremaskin 16 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">16 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ren/uren sone</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">200 000 til 350 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Barrieremaskin 36 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">36 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ren/uren sone</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">400 000 til 700 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Barrieremaskin 60 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">60 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Ren/uren sone</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">600 000 til 1 mill. kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tunnelmaskin</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Kontinuerlig</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">RABC sertifisert</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">3 til 10 mill. kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/maskintyper/barrieremaskin/", label: "Barrieremaskin" }, { href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }, { href: "/bedrift/leverandorer/jensen-group/", label: "Jensen Group" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
        </div>
      </div>

      <section className="bg-gradient-to-r from-aqua-600 to-aqua-700 text-white">
        <div className="container-site py-12 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Trenger du hjelp til å velge?</h2>
          <p className="text-aqua-100 text-lg mb-8 max-w-2xl mx-auto">Se prisguiden eller utforsk leverandørene tilgjengelige i Norge.</p>
          <Link href="/bedrift/prisguide/" className="inline-block bg-white text-aqua-700 font-bold px-8 py-4 rounded-xl hover:bg-aqua-50 transition-colors shadow-lg">Se prisguide</Link>
        </div>
      </section>

      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container-site py-12">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">Relaterte sider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/bedrift/maskintyper/barrieremaskin/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Barrieremaskin</h3>
                <p className="text-sm text-slate-600">Detaljert om barrierevaskemaskiner.</p>
              </Link>
              <Link href="/bedrift/hygienestandarder/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder</h3>
                <p className="text-sm text-slate-600">EN 14065, RABC og norske forskrifter.</p>
              </Link>
              <Link href="/bedrift/leverandorer/jensen-group/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Jensen Group</h3>
                <p className="text-sm text-slate-600">Storleverandør til sykehus.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
