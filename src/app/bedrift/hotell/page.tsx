import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for hotell og overnatting | vaskemaskin.no',
  description: 'Komplett guide til profesjonelle vaskemaskiner for hoteller. Kapasitetsberegning, maskintyper, hygienekrav og lønnsomhetsanalyse.',
  path: 'bedrift/hotell',
})

const faqItems = [{"question": "Hvor mange maskiner trenger et hotell med 100 rom?", "answer": "Et hotell med 100 rom genererer ca. 600 kg tekstiler per dag. Med 8 timers drift trenger du typisk 3 til 5 maskiner på 20 til 32 kg, eller en tunnelmaskin for større volumer."}, {"question": "Lønner eget vaskeri seg for hoteller?", "answer": "For hoteller med mer enn 50 rom lønner eget vaskeri seg vanligvis innen 2 til 4 år. Kostnaden per kilo reduseres fra 12 til 25 kr ved outsourcing til 4 til 8 kr med eget vaskeri."}, {"question": "Hvilken temperatur må hotellsengetøy vaskes på?", "answer": "Sengetøy og håndklær skal vaskes ved minimum 60 grader. Svanemerket hoteller har tilleggskrav til energi og vaskemidler."}, {"question": "Hva koster det å etablere hotellvaskeri?", "answer": "Et komplett vaskeri for et mellomstort hotell koster 500 000 til 2 millioner kr inkludert maskiner, tørketromler og installasjon."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hvorfor er maskinvalg viktig for hoteller' },
    { id: 's1', label: 'Kapasitetsberegning for hotellvaskeri' },
    { id: 's2', label: 'Anbefalte maskintyper for hoteller' },
    { id: 's3', label: 'Eget vaskeri vs. outsourcing for hoteller' },
    { id: 's4', label: 'Hygienekrav for hotellvaskeri' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Hotell', url: 'https://vaskemaskin.no/bedrift/hotell/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Hotell' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for hotell og overnatting</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Et hotell med 100 rom genererer mellom 200 og 400 kg tekstiler per dag. Riktig maskinvalg er avgjørende for effektiv drift og bunnlinjen.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hvorfor er maskinvalg viktig for hoteller</h2>
              <p>Tekstilvask er en av de største driftskostnadene for et hotell etter personal og energi. Et gjennomtenkt vaskerisystem reduserer vannforbruk, energikostnader og slitasje på tekstilene, samtidig som det sikrer at gjestene alltid møter friskt og rent sengetøy. Mange norske hoteller outsourcer vasken til eksterne vaskerier, men trenden går mot eget vaskeri fordi det gir bedre kontroll over kvalitet, leveringstider og kostnader per kilo vasket tekstil.</p>
              <p>Feil maskinvalg kan koste dyrt. En underkapasitert maskinpark fører til flaskehalser, overtidsarbeid og forsinkelser som påvirker gjestopplevelsen. Overkapasitet betyr unødvendig høy investering og maskiner som står ubrukt store deler av dagen. Den optimale løsningen tar hensyn til sesongvariasjoner, romtyper, restaurant og spa, samt fremtidig vekst.</p>
              <p>Moderne hotellvaskemaskiner har innebygd dosering av vaskemiddel, automatisk veiing og tilkobling til driftssystemer. Dette gir full kontroll over forbruk og kvalitet, og reduserer risikoen for menneskelige feil i vaskeprosessen.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Kapasitetsberegning for hotellvaskeri</h2>
              <p>Tommelregelen er enkel: ta antall rom, multipliser med 6 kg per rom per døgn, og del på antall vasketimer tilgjengelig. Et hotell med 80 rom som opererer vaskeriet 8 timer per dag trenger maskiner som samlet kan håndtere ca. 480 kg fordelt på arbeidsdagen. Legg til 20 til 30 prosent buffer for sesongtopper, helger og uforutsette behov.</p>
              <p>Restaurant og spa genererer også betydelige mengder duker, uniformer og håndklær. Et hotell med restaurant kan legge til 1 til 2 kg per couvert. Spa med basseng og behandlingsrom genererer ytterligere 50 til 150 kg per dag avhengig av størrelse.</p>
              <p>For hotellkjeder med flere eiendommer i samme by kan det lønner seg å etablere et sentralvaskeri. Et sentralvaskeri med tunnelmaskin kan betjene 3 til 5 hoteller og redusere kostnad per kilo med 30 til 50 prosent sammenlignet med individuelle vaskerier.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Anbefalte maskintyper for hoteller</h2>
              <p>For de fleste hoteller er softmount vaskemaskiner med G faktor på 350 til 450 det beste valget. Disse gir høy sentrifugaleffekt som reduserer restfuktighet og dermed tørketid og energiforbruk. Maskiner på 14 til 32 kg er mest vanlig for mellomstore hoteller.</p>
              <p>Hoteller med mer enn 150 rom bør vurdere tunnelvaskemaskin. En tunnelmaskin kan håndtere opptil 5000 kg per time med kontinuerlig drift. Investeringen er høy, typisk 1,5 til 5 millioner kroner, men kostnaden per kilo faller dramatisk til 3 til 5 kroner.</p>
              <p>Tørketromler bør dimensjoneres med 20 til 30 prosent større kapasitet enn vaskemaskinene fordi torking tar lengre tid enn vask. Flatwork ironers for sengetøy og duker er en lønnsom investering for hoteller med mer enn 50 rom.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Eget vaskeri vs. outsourcing for hoteller</h2>
              <p>Outsourcing koster typisk 12 til 25 kr per kilo i Norge, avhengig av volum, avtaleperiode og geografisk plassering. Prisene er høyest i Nord Norge og lavest i storbyområdene. Outsourcing inkluderer vanligvis henting og levering, men gir begrenset kontroll over kvalitet og leveringstider.</p>
              <p>Eget vaskeri kan redusere kostnaden til 4 til 8 kr per kilo. Breakeven for et mellomstort hotell ligger på 2 til 4 år avhengig av investering, personalutgifter og volum. Fordelene utover kostnadsbesparelse inkluderer full kontroll over kvalitet, umiddelbar tilgang til rene tekstiler og bedre sporbarhet.</p>
              <p>En mellomløsning er å vaske hverdagstekstiler som håndklær og sengetøy internt, mens spesialprodukter som uniformer, gardiner og tepper outsources. Dette gir lavere investering og reduserer personalbehov.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Hygienekrav for hotellvaskeri</h2>
              <p>Mattilsynets veileder krever at sengetøy og håndklær vaskes ved minimum 60 grader for å sikre hygienisk rent resultat. For Svanemerket hoteller stilles tilleggskrav til vannforbruk per kilo, energieffektivitet og bruk av miljømerkede vaskemidler.</p>
              <p>Allergikere utgjør en voksende gjestesegment. Maskiner med ekstra skylleprogram og bruk av parfymefrie vaskemidler på allergirom er et konkurransefortrinn. NS INSTA 800 standarden definerer renhetsnivåer og kan brukes som kvalitetsmål.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskintype</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Syklustid</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Softmount 14 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">14 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">45 til 55 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">60 000 til 90 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Softmount 32 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">32 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">50 til 60 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">120 000 til 200 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tunnelmaskin</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Kontinuerlig</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Batch 3 til 4 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1,5 til 5 mill. kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Flatwork ironer</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">N/A</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Kontinuerlig</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">150 000 til 500 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/vaskeri/", label: "Vaskeri" }, { href: "/bedrift/maskintyper/tunnelmaskin/", label: "Tunnelvaskemaskin" }, { href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
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
              <Link href="/bedrift/vaskeri/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Vaskeri</h3>
                <p className="text-sm text-slate-600">For hoteller med storskalaløsninger.</p>
              </Link>
              <Link href="/bedrift/maskintyper/tunnelmaskin/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Tunnelvaskemaskin</h3>
                <p className="text-sm text-slate-600">Kontinuerlig vask for store kjeder.</p>
              </Link>
              <Link href="/bedrift/hygienestandarder/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder</h3>
                <p className="text-sm text-slate-600">Krav til tekstilvask i overnattingsbransjen.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
