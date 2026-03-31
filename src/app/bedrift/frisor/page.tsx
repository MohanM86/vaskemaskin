import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for frisør og skjønnhetssalong | vaskemaskin.no',
  description: 'Guide til kompakte vaskemaskiner for frisørsalonger med korte syklustider og høyt volum.',
  path: 'bedrift/frisor',
})

const faqItems = [{"question": "Trenger frisører profesjonelle maskiner?", "answer": "Med 30 til 60 håndklær daglig pluss kapper og kluter trenger salonger maskiner med kort syklustid og høy kapasitet. Husholdningsmaskiner holder ikke tritt med volumet."}, {"question": "Hvilken temperatur for frisørsalonger?", "answer": "Minimum 60 grader for håndklær som brukes på kunder. Kapper vaskes ved 40 til 60 grader avhengig av materiale."}, {"question": "Hva koster vaskemaskin for salong?", "answer": "20 000 til 40 000 kr for en kompakt profesjonell maskin. Leasing fra 500 til 1 000 kr per måned."}, {"question": "Passer stableløsning i min salong?", "answer": "Stableløsninger tar 60 x 70 cm gulvplass og passer de fleste salonger. Sjekk takhøyden: du trenger minimum 190 cm for standard stabel."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Vaskebehov i frisørsalonger' },
    { id: 's1', label: 'Kompakte løsninger for små lokaler' },
    { id: 's2', label: 'Hygienekrav for frisørsalonger' },
    { id: 's3', label: 'Raske sykluser og effektiv drift' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Frisør', url: 'https://vaskemaskin.no/bedrift/frisor/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Frisør' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for frisør og skjønnhetssalong</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">En travel frisørsalong vasker 30 til 60 håndklær per dag. Kompakte maskiner med korte syklustider er nødvendig for smidig drift.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Vaskebehov i frisørsalonger</h2>
              <p>En salong med 4 stoler bruker typisk 30 til 60 håndklær per dag pluss kapper, peleriner og vaskekluter. Ukentlig volum er 50 til 100 kg, noe som krever høy vaskefrekvens og korte syklustider for å sikre at det alltid er rene håndklær tilgjengelig.</p>
              <p>Håndklærne utsettes for fargestoffer, blekemidler og stylingprodukter som setter krevende flekker. Profesjonelle maskiner med forbehandlingsprogram og høy temperatur fjerner disse flekkene bedre enn husholdningsmaskiner, og forlenger håndklærnes levetid.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Kompakte løsninger for små lokaler</h2>
              <p>De fleste salonger har begrenset plass til vaskerom. Stableløsninger med vaskemaskin og tørketrommel tar bare 60 x 70 cm gulvplass. Miele Little Giants og Electrolux myPRO er designet spesielt for små lokaler med høy ytelse.</p>
              <p>Plasser maskinen så nær arbeidsplassene som mulig for å minimere tid brukt på transport av håndklær. God ventilasjon i vaskerommet er viktig for å unngå fuktproblemer, spesielt i eldre bygårder med begrenset luftsirkulasjon.</p>
              <p>Lydnivå er viktig i salonger. Profesjonelle maskiner er typisk noe støyere enn husholdningsmaskiner, men modeller som Miele Little Giant holder seg under 55 dB under vask, noe som er akseptabelt selv i åpne lokaler.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Hygienekrav for frisørsalonger</h2>
              <p>Håndklær som brukes på kunder vaskes ved minimum 60 grader for å sikre hygienisk resultat. Kapper vaskes ved 40 til 60 grader avhengig av materiale. Bruk hvite håndklær så du kan kontrollere renhet visuelt og vaske ved høy temperatur uten at fargene falmer.</p>
              <p>Miljøkravene forsterkes. Flere kommuner stiller krav til avløpshåndtering fra salonger på grunn av kjemikalier i hårfarge og behandlingsprodukter. Profesjonelle maskiner med optimalt vannforbruk bidrar til å overholde disse kravene.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Raske sykluser og effektiv drift</h2>
              <p>Med 3 til 6 vask daglig er korte syklustider på 45 til 50 minutter avgjørende for å holde håndklærforsyningen gående. Hurtigprogram på 30 minutter er spesielt nyttig i perioder med høyt trykk. Tørketrommel med sensorstyrt torking gjør at du slipper å overvåke tørkeprosessen.</p>
              <p>Automatisk dosering av vaskemiddel gir riktig mengde hver gang og forhindrer overdosering som fører til rester i håndklærne. Med flytende vaskemiddel og mykner i egne beholdere slipper personalet å måle og håndtere kjemikalier.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Maskin</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Syklustid</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele Little Giant</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6,5 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">49 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">30 000 til 40 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux myPRO</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">8 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">49 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 35 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Podab BaseLine</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">45 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 000 til 30 000 kr</td></tr>
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
          <h2 className="font-serif text-3xl font-bold mb-4">Trenger du hjelp til å velge?</h2>
          <p className="text-aqua-100 text-lg mb-8 max-w-2xl mx-auto">Se prisguiden eller utforsk leverandørene tilgjengelige i Norge.</p>
          <Link href="/bedrift/prisguide/" className="inline-block bg-white text-aqua-700 font-bold px-8 py-4 rounded-xl hover:bg-aqua-50 transition-colors shadow-lg">Se prisguide</Link>
        </div>
      </section>

      <div className="bg-slate-50 border-t border-slate-200">
        <div className="container-site py-12">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8">Relaterte sider</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/bedrift/hygienestandarder/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder</h3>
                <p className="text-sm text-slate-600">Krav til hygienisk vask.</p>
              </Link>
              <Link href="/bedrift/leverandorer/miele-professional/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Miele Professional</h3>
                <p className="text-sm text-slate-600">Little Giants for små lokaler.</p>
              </Link>
              <Link href="/bedrift/prisguide/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Prisguide</h3>
                <p className="text-sm text-slate-600">Prisoversikt.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
