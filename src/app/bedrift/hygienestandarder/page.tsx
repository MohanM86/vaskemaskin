import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Hygienestandarder for profesjonell tekstilvask | vaskemaskin.no',
  description: 'Komplett oversikt over alle hygienestandarder og krav for profesjonell tekstilvask i Norge.',
  path: 'bedrift/hygienestandarder',
})

const faqItems = [{"question": "Er EN 14065 pakrevd?", "answer": "Ikke formelt pakrevd av norsk lov, men effektivt pakrevd for sykehusvaskerier og anbefalt for alle profesjonelle vaskerier."}, {"question": "Hvilken temperatur dreper bakterier?", "answer": "60 grader dreper de fleste bakterier. 85 grader er standard for helsetekstiler. 90 grader for kjent smittefare."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'EN 14065 RABC standarden' },
    { id: 's1', label: 'Termisk desinfeksjon' },
    { id: 's2', label: 'Norske forskrifter' },
    { id: 's3', label: 'NS INSTA 800 for renhold' },
    { id: 's4', label: 'Svanemerket og miljøkrav' },
    { id: 's5', label: 'Dokumentasjon og revisjon' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Ressurser', url: 'https://vaskemaskin.no/bedrift//' }, { name: 'Hygienestandarder', url: 'https://vaskemaskin.no/bedrift/hygienestandarder/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Hygienestandarder' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Hygienestandarder for profesjonell tekstilvask</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">EN 14065, RABC, termisk desinfeksjon og norske forskrifter. Alt du trenger aa vite om kravene til hygienisk tekstilvask for din bransje.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>EN 14065 RABC standarden</h2>
              <p>EN 14065 er den europeiske standarden for styring av bioforurensning i profesjonell tekstilvask. RABC står for Risk Analysis and Biocontamination Control og palegger vaskerier aa gjennomfore systematisk risikoanalyse av hele prosessen fra innsamling til levering av rene tekstiler. Standarden er frivillig men effektivt pakrevd for sykehusvaskerier og anbefalt for alle profesjonelle vaskerier.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Termisk desinfeksjon</h2>
              <p>Termisk desinfeksjon betyr aa bruke varme for aa drepe mikroorganismer. De vanligste kravene er: 60 grader i 10 minutter for generell hygienisk vask, 70 grader i 10 minutter for tydelig forurenset toy, 85 grader i 10 minutter for helsetekstiler (sykehuskrav), 90 grader i 10 minutter for kjent smittefare. Temperaturen maa dokumenteres og logges.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Norske forskrifter</h2>
              <p>Forskrift om smittevern i helsetjenesten stiller krav til barrierevasking i sykehus. Forskrift om miljorettet helsevern i barnehager og skoler stiller krav til hygienisk handtering av tekstiler. Mattilsynets veileder for innkvarteringssteder anbefaler 60 grader for sengetøy og håndklær.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>NS INSTA 800 for renhold</h2>
              <p>NS INSTA 800 er standarden for måling av renholdskvalitet og stiller krav til termisk desinfeksjon av mopper og rengjøringskluter. Standarden krever at mopper desinfiseres ved minimum 85 grader med dokumentert temperaturkurve.</p>
            </section>
            <section data-section-id="s4" className="scroll-mt-20 mb-10">
              <h2>Svanemerket og miljøkrav</h2>
              <p>Svanemerket for tekstilvaskerier stiller krav til vannforbruk under 8 liter per kilo, energiforbruk, bruk av miljøsertifiserte kjemikalier, og avfallshåndtering. Flere norske hotellkjeder krever at vaskeripartnere er Svanemerkede.</p>
            </section>
            <section data-section-id="s5" className="scroll-mt-20 mb-10">
              <h2>Dokumentasjon og revisjon</h2>
              <p>Profesjonelle vaskerier maa dokumentere temperaturlogger for hver vask, kjemikalieforbruk og dosering, mikrobiologiske kontroller, vedlikeholdsprotokoll for maskiner, og opplaering av personell. Revisjon gjennomfores årlig av sertifiseringsorgan.</p>
            </section>
            </div>

            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/sykehus/", label: "Sykehus" }, { href: "/bedrift/maskintyper/barrieremaskin/", label: "Barrieremaskin" }, { href: "/bedrift/maskintyper/moppemaskin/", label: "Moppemaskin" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
