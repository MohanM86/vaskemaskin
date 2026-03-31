import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for ridesenter og stall | vaskemaskin.no',
  description: 'Guide til vaskemaskiner for ridesentre med tunge, skitne tekstiler fulle av hestehaar og gjorme.',
  path: 'bedrift/ridesenter',
})

const faqItems = [{"question": "Kan man vaske saldekken i vanlig vaskemaskin?", "answer": "Det anbefales ikke. Hestehaar og gjorme oedelegger pumpe og pakninger paa husholdningsmaskiner raskt. Bruk profesjonell maskin med minimum 10 kg kapasitet og forsterket filter."}, {"question": "Hvordan haandtere hestehaar i vasken?", "answer": "Ryst grundig for vask, bruk vaskenett for smaaplagg, rengjor filter etter hver vask, og installer haarfanger i avlopet."}, {"question": "Hvor ofte bor maskinen rengjores?", "answer": "Filter etter hver vask, trommel og pakninger maanedlig, dyprens med maskinrens hver 3. maaned."}, {"question": "Hvilken temperatur for hesteutstyr?", "answer": "Dekken vaskes ved 30 til 40 grader for aa unngaa krymping. Bandager og haandklær kan vaskes ved 60 grader."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hva vasker et ridesenter' },
    { id: 's1', label: 'Krav til vaskemaskinen' },
    { id: 's2', label: 'Hestehaar er den storste utfordringen' },
    { id: 's3', label: 'Anbefalte maskiner for ridesentre' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Ridesenter', url: 'https://vaskemaskin.no/bedrift/ridesenter/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Ridesenter' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for ridesenter og stall</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Ridesentre har spesielle vaskebehov med tunge, skitne tekstiler fulle av hestehaar og gjorme.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hva vasker et ridesenter</h2>
              <p>Saldekken, treningsdekken, bandager, rideklær, haandklær og stallkluter. Et ridesenter med 30 hester genererer typisk 100 til 200 kg vasketoy per uke. Om vinteren oeker volumet fordi hestene bruker dekken daglig og tekstilene blir skitne raskere.</p>
              <p>Vekten paa dekkene varierer kraftig: et lett treningsdekken veier 1 til 2 kg, mens et vintertermodekken kan veie 3 til 5 kg. Bandager, gamasjer og sadelunderlag legger til ytterligere vekt. Det er viktig aa sortere etter tekstiltype og skittenhetsgrad.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Krav til vaskemaskinen</h2>
              <p>Vaskemaskinen maa ha forsterket pumpefilter for hestehaar, stor dreneringskapasitet for gjorme og sand, robust trommel som taaler ubalanserte laster fra store dekken, og forblotleggingsprogram for aa lose opp inngrodd skitt for selve vasken starter. Minimum 10 kg kapasitet er nodvendig, og 14 til 18 kg anbefales for effektiv drift.</p>
              <p>Hoy sentrifugalhastighet er mindre viktig enn robust konstruksjon. Dekken taaler godt en lavere sentrifugehastighet, og dette reduserer slitasje paa baade tekstil og maskin. Velg maskiner med manuell programmering slik at du kan tilpasse vasketid og temperatur etter behov.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Hestehaar er den storste utfordringen</h2>
              <p>Haarene tetter pumpefilter, setter seg i pakninger og blokkerer avlop. Ryst dekken og klær grundig for vask. Bruk vaskenett for smaaplagg som bandager. Rengjor filter etter hver vask, og planlegg maanedlig dyprens av trommel og pakninger.</p>
              <p>Noen ridesentre installerer en haarfanger i avlopet mellom maskin og sluk. Dette er en enkel og billig losning som forlenger maskinens levetid betydelig. Industriell lofilt foran torkeroeret er ogsaa viktig for aa forhindre tilstopping.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Anbefalte maskiner for ridesentre</h2>
              <p>Miele PW 6080 (8 kg) er et godt valg for smaadekken og daglig vask. Electrolux Line 6000 14 kg haandterer store saddeldekken og vinterdekkener effektivt. Primus FX 180 (18 kg) er det beste valget for ridesentre med mange hester og hoyt volum.</p>
              <p>Unngaa husholdningsmaskiner selv for smaa staller. Hestehaar og gjorme oedeledgger pumpe og pakninger paa forbrukermaskiner i lopet av noen maaneder. Profesjonelle maskiner med forsterket filter og drenering haandterer dette uten problemer i 15 til 20 aar.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskin</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Egnet for</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele PW 6080</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Smaadekken, bandager</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">40 000 til 55 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux Line 6000</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">14 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Store dekken, rideklær</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">55 000 til 80 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Primus FX 180</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">18 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Alle typer, hoyt volum</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">80 000 til 120 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/maskintyper/industrimaskin/", label: "Industrivaskemaskin" }, { href: "/bedrift/prisguide/", label: "Prisguide" }, { href: "/bedrift/leverandorer/miele-professional/", label: "Miele Professional" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
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
                <p className="text-sm text-slate-600">Storkapasitetsmaskiner for krevende bruk.</p>
              </Link>
              <Link href="/bedrift/prisguide/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Prisguide</h3>
                <p className="text-sm text-slate-600">Prisoversikt alle maskintyper.</p>
              </Link>
              <Link href="/bedrift/leverandorer/miele-professional/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Miele Professional</h3>
                <p className="text-sm text-slate-600">Populaert valg for ridesentre.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
