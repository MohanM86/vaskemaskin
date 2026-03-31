import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Girbau | Spansk kvalitet for industrien | vaskemaskin.no',
  description: 'Alt om Girbau profesjonelle vaskemaskiner for industri og storkjoekken.',
  path: 'bedrift/leverandorer/girbau',
})

const faqItems = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Girbau' },
    { id: 's1', label: 'Styrker' },
    { id: 's2', label: 'Produkter' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Sporsmal og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Girbau', url: 'https://vaskemaskin.no/bedrift/leverandorer/girbau/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Girbau' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Girbau | Spansk kvalitet for industrien</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Girbau er en spansk produsent av profesjonelle vaskemaskiner med fokus paa store kapasiteter og industrielle losninger.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Girbau</h2>
              <p>Girbau ble grunnlagt i 1960 i Vic, Spania og er en av Europas storste produsenter av profesjonelle vaskemaskiner. Merket er spesielt sterkt paa store kapasiteter fra 20 til 120 kg og barrieremaskiner for helsevesenet.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>Bredt utvalg av store maskiner. Konkurransedyktige priser for industrielle losninger. Gode barrieremaskiner for sykehus. Tilgjengelig gjennom norske distributorer.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Produkter</h2>
              <p>HS serien med barrieremaskiner fra 11 til 120 kg. MS serien med softmount maskiner. HS serien brukes av flere norske sykehus og helseinstitusjoner.</p>
            </section>
            </div>

            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/sykehus/", label: "Sykehus" }, { href: "/bedrift/maskintyper/industrimaskin/", label: "Industrimaskin" }, { href: "/bedrift/prisguide/", label: "Prisguide" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftslosninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
