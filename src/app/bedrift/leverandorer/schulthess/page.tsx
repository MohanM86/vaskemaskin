import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Schulthess | Sveitsisk presisjon | vaskemaskin.no',
  description: 'Alt om Schulthess profesjonelle vaskemaskiner med sveitsisk kvalitet.',
  path: 'bedrift/leverandorer/schulthess',
})

const faqItems: { question: string; answer: string }[] = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Schulthess' },
    { id: 's1', label: 'Styrker' },
    { id: 's2', label: 'Tilgjengelighet i Norge' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandører', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Schulthess', url: 'https://vaskemaskin.no/bedrift/leverandorer/schulthess/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Schulthess' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Schulthess | Sveitsisk presisjon</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Schulthess er et sveitsisk premiummerke kjent for enestående byggekvalitet og innovative løsninger for profesjonell vask.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Schulthess</h2>
              <p>Schulthess ble grunnlagt i 1845 i Zürich og er et av de eldste navnene i vaskemaskinbransjen. Merket er kjent for sveitsisk presisjon og holdbarhet. Spesielt sterkt på borettslag, hotell og maritime løsninger.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Eksepsjonell byggekvalitet. Svært lavt støynivå. Gode løsninger for fellesvaskerier med SmartConnect systemet. Maritime serien for offshore og skipsfart.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Tilgjengelighet i Norge</h2>
              <p>Schulthess har begrenset distribusjon i Norge sammenlignet med Miele og Electrolux, men er tilgjengelig gjennom autoriserte forhandlere.</p>
            </section>
            </div>

            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/offshore/", label: "Offshore" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
