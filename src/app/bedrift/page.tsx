import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Vaskemaskin for bedrift og industri | Komplett guide',
  description: 'Alt om profesjonelle vaskemaskiner for bedrifter. Bransjeguider for hotell, sykehus, barnehage, borettslag og mer. Maskintyper, leverandorer, hygienekrav og priser.',
  path: 'bedrift',
})

const bransjer = [
  { title: 'Hotell og overnatting', href: '/bedrift/hotell/', desc: 'Sengetoy, handklær og uniformer. Hoykapasitetslosninger for hotellvaskerier med 24/7 drift.', tag: 'Populær' },
  { title: 'Barnehage', href: '/bedrift/barnehage/', desc: 'Hygienisk vask av sengetoy, klær og tekstiler for barn. Allergivennlige programmer og lav temperatur.', tag: null },
  { title: 'Sykehus og helsevesen', href: '/bedrift/sykehus/', desc: 'Smittevern, termisk desinfeksjon og barrierevasking. Strenge krav til hygiene og sporbarhet.', tag: 'Strengeste krav' },
  { title: 'Borettslag og sameie', href: '/bedrift/borettslag/', desc: 'Fellesvaskerier med betalingslosninger, slitesterke maskiner og lavt vedlikehold.', tag: null },
  { title: 'Profesjonelt vaskeri', href: '/bedrift/vaskeri/', desc: 'Kommersielle vaskerier med hoy gjennomstromning, tunnelvaskemaskiner og automatiserte systemer.', tag: 'Hoy kapasitet' },
  { title: 'Ridesenter og stall', href: '/bedrift/ridesenter/', desc: 'Vask av dekken, saler og annet rideutstyr. Robuste maskiner som handterer hestehaar og gjorme.', tag: null },
  { title: 'Frisor og skonnshetssalong', href: '/bedrift/frisor/', desc: 'Handklær, kapper og tekstiler med hoy vaskefrekvens. Kompakte maskiner for begrensede lokaler.', tag: null },
  { title: 'Offshore og maritim', href: '/bedrift/offshore/', desc: 'Spesialmaskiner for plattformer og skip. Vibrasjonsdempet, sjovannsresistent og kompakt design.', tag: 'Spesialist' },
]

const maskintyper = [
  { title: 'Barrieremaskin', href: '/bedrift/maskintyper/barrieremaskin/', desc: 'Tosidig maskin med ren og uren sone. Pakrevd i helsevesenet for smittevern.' },
  { title: 'Moppemaskin', href: '/bedrift/maskintyper/moppemaskin/', desc: 'Spesialmaskin for vask av mopper og kluter. Termisk desinfeksjon for renholdsselskaper.' },
  { title: 'Torkeskap', href: '/bedrift/maskintyper/torkeskap/', desc: 'Skaansom torking av uniformer, arbeidstoy og dresser. Alternativ til torketrommel.' },
  { title: 'Industrivaskemaskin', href: '/bedrift/maskintyper/industrimaskin/', desc: 'Storkapasitetsmaskiner fra 20 til 120 kg. For vaskerier og institusjoner med stort volum.' },
  { title: 'Tunnelvaskemaskin', href: '/bedrift/maskintyper/tunnelmaskin/', desc: 'Kontinuerlig gjennomstrommingsmaskin for storvaskerier. Opptil 5000 kg per time.' },
]

const leverandorer = [
  { name: 'Miele Professional', href: '/bedrift/leverandorer/miele-professional/' },
  { name: 'Electrolux Professional', href: '/bedrift/leverandorer/electrolux-professional/' },
  { name: 'Primus (Alliance)', href: '/bedrift/leverandorer/primus/' },
  { name: 'LG Commercial', href: '/bedrift/leverandorer/lg-commercial/' },
  { name: 'Schulthess', href: '/bedrift/leverandorer/schulthess/' },
  { name: 'Girbau', href: '/bedrift/leverandorer/girbau/' },
  { name: 'Jensen Group', href: '/bedrift/leverandorer/jensen-group/' },
  { name: 'Podab', href: '/bedrift/leverandorer/podab/' },
]

export default function BedriftPage() {
  const sections = [
    { id: 'bransjer', label: 'Bransjeguider (8)' },
    { id: 'maskintyper', label: 'Maskintyper (5)' },
    { id: 'leverandorer', label: 'Leverandorer (8)' },
    { id: 'ressurser', label: 'Hygiene og pris' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([
        { name: 'Hjem', url: 'https://vaskemaskin.no/' },
        { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' },
      ])) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-aqua-600 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="container-site py-16 md:py-28 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift' }]} />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl text-white">Profesjonelle vaskemaskiner for bedrift og industri</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Fra hotellvaskerier til offshore plattformer. Finn riktig vaskemaskin for din bransje, forsta hygienekravene, sammenlign leverandorer og faa oversikt over hva det koster.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#bransjer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-aqua-500 text-white font-bold text-sm hover:bg-aqua-400 transition-colors">Velg din bransje</a>
            <Link href="/bedrift/prisguide/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors">Se prisguide</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-aqua-600 text-white">
        <div className="container-site py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="font-serif text-3xl font-bold">8</div><div className="text-sm text-aqua-100">Bransjeguider</div></div>
            <div><div className="font-serif text-3xl font-bold">5</div><div className="text-sm text-aqua-100">Maskintyper</div></div>
            <div><div className="font-serif text-3xl font-bold">8</div><div className="text-sm text-aqua-100">Leverandorer</div></div>
            <div><div className="font-serif text-3xl font-bold">100+</div><div className="text-sm text-aqua-100">Modeller dekket</div></div>
          </div>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">

            {/* BRANSJER */}
            <section data-section-id="bransjer" className="scroll-mt-20 mb-16" id="bransjer">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Bransjeguider</h2>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">Hver bransje har unike krav til vaskemaskiner. Velg din bransje for skreddersydde anbefalinger.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {bransjer.map(b => (
                  <Link key={b.href} href={b.href} className="group relative bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-lg hover:border-aqua-300 transition-all">
                    {b.tag && <span className="absolute top-4 right-4 bg-aqua-50 text-aqua-700 text-xs font-bold px-3 py-1 rounded-full">{b.tag}</span>}
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">{b.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* MASKINTYPER */}
            <section data-section-id="maskintyper" className="scroll-mt-20 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Maskintyper for profesjonell bruk</h2>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">Profesjonelle vaskemaskiner finnes i mange varianter tilpasset ulike behov.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {maskintyper.map(m => (
                  <Link key={m.href} href={m.href} className="group bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md hover:border-aqua-300 transition-all">
                    <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">{m.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* LEVERANDORER */}
            <section data-section-id="leverandorer" className="scroll-mt-20 mb-16">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-3">Leverandorer i Norge</h2>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">Sammenlign de storste leverandorene av profesjonelle vaskemaskiner.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {leverandorer.map(l => (
                  <Link key={l.href} href={l.href} className="group bg-white rounded-xl border border-slate-200 p-4 text-center hover:shadow-md hover:border-aqua-300 transition-all">
                    <span className="font-bold text-slate-900 group-hover:text-aqua-600 transition-colors text-sm">{l.name}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* HYGIENE + PRIS */}
            <section data-section-id="ressurser" className="scroll-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href="/bedrift/hygienestandarder/" className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-md transition-all">
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Hygienestandarder og krav</h3>
                  <p className="text-sm text-slate-600">EN 14065, RABC, termisk desinfeksjon og norske forskrifter. Komplett oversikt over alle relevante standarder.</p>
                </Link>
                <Link href="/bedrift/prisguide/" className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-md transition-all">
                  <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-aqua-600 transition-colors mb-2">Prisguide for bedriftsmaskiner</h3>
                  <p className="text-sm text-slate-600">Hva koster profesjonelle vaskemaskiner? Prisoversikt for alle maskintyper fra 6 kg til tunnelsystemer.</p>
                </Link>
              </div>
            </section>

          </div>

          <PageSidebar sections={sections} relatedLinks={[
            { href: '/bedrift/hygienestandarder/', label: 'Hygienestandarder' },
            { href: '/bedrift/prisguide/', label: 'Prisguide bedrift' },
            { href: '/bedrift/maskintyper/barrieremaskin/', label: 'Barrieremaskin forklart' },
            { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjopsguide forbruker' },
          ]} ctaTitle="Trenger du hjelp?" ctaText="Bruk bransjeguidene for skreddersydde anbefalinger." ctaLink="/bedrift/prisguide/" ctaLinkText="Se prisguide" />
        </div>
      </div>
    </>
  )
}
