import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'LG Commercial | Profesjonelle vaskemaskiner | vaskemaskin.no',
  description: 'Alt om LG Commercial vaskemaskiner for bedrift med AI Direct Drive.',
  path: 'bedrift/leverandorer/lg-commercial',
})

const faqItems: { question: string; answer: string }[] = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om LG Commercial' },
    { id: 's1', label: 'Styrker' },
    { id: 's2', label: 'Begrenset utvalg' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'LG Commercial', url: 'https://vaskemaskin.no/bedrift/leverandorer/lg-commercial/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'LG Commercial' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">LG Commercial | Profesjonelle vaskemaskiner</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">LG Commercial tilbyr profesjonelle vaskemaskiner med AI Direct Drive motor og 10 års motorgaranti.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om LG Commercial</h2>
              <p>LG Commercial er den profesjonelle divisjonen av sørkoreanske LG. Merket er spesielt sterkt på myntvaskerier og fellesvaskerier med robuste maskiner og smart teknologi. AI Direct Drive motoren gjenkjenner stofftype automatisk.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Styrker</h2>
              <p>10 års motorgaranti på Direct Drive. AI stoffgjenkjenning. Konkurransedyktige priser. Godt egnet for myntvaskeri og selvbetjening.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Begrenset utvalg</h2>
              <p>LG har et smalere sortiment enn Miele og Electrolux i det profesjonelle segmentet. Servicenettverket i Norge er også mer begrenset for profesjonelle modeller.</p>
            </section>
            </div>

            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/borettslag/", label: "Borettslag" }, { href: "/bedrift/prisguide/", label: "Prisguide" }, { href: "/bedrift/maskintyper/industrimaskin/", label: "Industrimaskin" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
