import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Vaskemaskin for profesjonelt vaskeri | vaskemaskin.no',
  description: 'Alt om vaskemaskiner for kommersielle vaskerier. Tunnelmaskiner, enkeltstående, automasjon og lønnsomhet.',
  path: 'bedrift/vaskeri',
})

const faqItems = [{"question": "Når lønner tunnelmaskin seg?", "answer": "Typisk ved volumer over 2000 kg per dag. Mellom 1000 og 2000 kg avhenger det av tekstiltyper og kundeportefølje."}, {"question": "Hva koster det å starte et vaskeri?", "answer": "1 til 3 millioner kr for et lite vaskeri med enkeltstående maskiner, 5 til 15 millioner for fullautomatisert vaskeri med tunnel."}, {"question": "Hva er typisk margin for et vaskeri?", "answer": "10 til 20 prosent på faste avtaler med hoteller og helseinstitusjoner. Privatmarkedet gir høyere margin per kilo men lavere volum."}, {"question": "Trenger vaskeri utslippstillatelse?", "answer": "Vaskerier over en viss størrelse trenger utslippstillatelse fra kommunen i henhold til Forurensingsforskriften."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Maskinpark for kommersielle vaskerier' },
    { id: 's1', label: 'Tunnelvaskemaskiner i storvaskeri' },
    { id: 's2', label: 'Vannbehandling og gjenvinning' },
    { id: 's3', label: 'Automasjon og effektivisering' },
    { id: 's4', label: 'Lønnsomhet og forretningsmodell' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Vaskeri', url: 'https://vaskemaskin.no/bedrift/vaskeri/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Vaskeri' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Vaskemaskin for profesjonelt vaskeri</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Profesjonelle vaskerier krever maskiner med høy gjennomstrømning og lav driftskostnad per kilo.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Maskinpark for kommersielle vaskerier</h2>
              <p>Valg av maskinpark avhenger av daglig volum og tekstiltyper. Under 1000 kg per dag: enkeltstående maskiner på 20 til 60 kg gir fleksibilitet til å kjøre ulike programmer parallelt. Over 2000 kg per dag: tunnelvaskemaskin er eneste økonomiske løsning. Mellom 1000 og 2000 kg er det en glidende overgang der kombinasjoner av enkeltstående og batch washers ofte er optimalt.</p>
              <p>Hardmount maskiner med bunnforankring gir høyere G faktor og lavere restfuktighet enn softmount. For vaskerier over 500 kg per dag er hardmount standard. På grunn av vibrasjonene krever de sterkere gulv og fundamentering.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Tunnelvaskemaskiner i storvaskeri</h2>
              <p>Tunnelmaskin er et kontinuerlig system med flere kammere der tekstilene beveger seg fremover gjennom forbehandling, vask, skylling og sluttbehandling. Gjennomstrømning kan nå opptil 5000 kg per time. Investering fra 1,5 til 10 millioner kr, men dramatisk lavere kostnad per kilo: 2 til 4 kr mot 5 til 8 kr for enkeltstående maskiner.</p>
              <p>Tunnelmaskinen kobles til sentralpresse og tørkelinje for helautomatisk drift. Arbeidskostnaden per kilo reduseres med 60 til 80 prosent sammenlignet med manuell drift av enkeltstående maskiner.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Vannbehandling og gjenvinning</h2>
              <p>Vanngjenvinning reduserer forbruket med 30 til 50 prosent. Brukt skyllevann filtreres og gjenbrukes i forvask på neste batch. Varmegjenvinning via varmevekslere sparer ytterligere 20 til 30 prosent på energi ved å forvarme innkommende kaldt vann med varmen fra avløpsvannet.</p>
              <p>Norske krav til avløpsvann fra vaskerier reguleres av Forurensingsforskriften. Vaskerier over en viss størrelse trenger utslippstillatelse fra kommunen. Vanngjenvinning reduserer både kostnader og miljøfotavtrykk.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Automasjon og effektivisering</h2>
              <p>Automatisk sortering via RFID skanner tekstilene ved ankomst og sender dem til riktig vaskeprogram. Robotisert folding håndterer flattøy og håndklær med minimal manuell innsats. Transportbånd mellom stasjonene eliminerer lofting og bæring.</p>
              <p>Kjemikaliedosering styres av sensorer som måler vannets hardhet, temperatur og pH verdier i sanntid. Dette sikrer optimalt resultat med minimal kjemikaliebruk og reduserer slitasje på tekstilene.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Lønnsomhet og forretningsmodell</h2>
              <p>Et vaskeri med 2000 kg daglig kapasitet kan oppnå omsetning på 3 til 5 millioner kr per år med marginer på 10 til 20 prosent. De viktigste inntektskildene er faste avtaler med hoteller, helseinstitusjoner, restauranter og industribedrifter.</p>
              <p>Oppstartkostnader varierer fra 1 til 3 millioner kr for et lite vaskeri med enkeltstående maskiner til 5 til 15 millioner kr for et fullautomatisert vaskeri med tunnelmaskin. Breakeven ligger typisk på 2 til 4 år for godt drevne vaskerier med solide kundeavtaler.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">System</th>
                  <th className="px-4 py-3 text-left font-semibold">Kapasitet</th>
                  <th className="px-4 py-3 text-left font-semibold">Vann per kg</th>
                  <th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Enkeltstående 20 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">20 kg/syklus</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">12 til 15 L/kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">80 000 til 130 000 kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Enkeltstående 60 kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">60 kg/syklus</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">10 til 13 L/kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">250 000 til 400 000 kr</td></tr>
<tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tunnelmaskin mellomstor</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1000 kg/time</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">7 til 9 L/kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">1,5 til 3 mill. kr</td></tr>
<tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Tunnelmaskin stor</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">2000+ kg/time</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 til 8 L/kg</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">5 til 10 mill. kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && (
              <section data-section-id="faq" className="scroll-mt-20 mb-10">
                <FAQSection items={faqItems} />
              </section>
            )}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/maskintyper/tunnelmaskin/", label: "Tunnelvaskemaskin" }, { href: "/bedrift/leverandorer/jensen-group/", label: "Jensen Group" }, { href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }]} ctaTitle="Se prisguide" ctaText="Komplett prisoversikt for profesjonelle maskiner." ctaLink="/bedrift/prisguide/" ctaLinkText="Prisguide" />
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
              <Link href="/bedrift/maskintyper/tunnelmaskin/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Tunnelvaskemaskin</h3>
                <p className="text-sm text-slate-600">Detaljert om tunnelvaskesystemer.</p>
              </Link>
              <Link href="/bedrift/leverandorer/jensen-group/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Jensen Group</h3>
                <p className="text-sm text-slate-600">Storleverandør av vaskerisystemer.</p>
              </Link>
              <Link href="/bedrift/hygienestandarder/" className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md hover:border-aqua-300 transition-all group">
                <h3 className="font-serif font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder</h3>
                <p className="text-sm text-slate-600">Krav til kommersielle vaskerier.</p>
              </Link>
          </div>
        </div>
      </div>
    </>
  )
}
