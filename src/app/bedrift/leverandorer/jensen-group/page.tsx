import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Jensen Group | Verdensledende på tunnelsystemer | vaskemaskin.no',
  description: 'Alt om Jensen Group tunnelvaskemaskiner og storskala vaskeriløsninger.',
  path: 'bedrift/leverandorer/jensen-group',
})

const faqItems: { question: string; answer: string }[] = []

export default function Page() {
  const sections = [
    { id: 's0', label: 'Om Jensen Group' },
    { id: 's1', label: 'Tunnelsystemer' },
    { id: 's2', label: 'Tilleggsutstyr' },
    { id: 's3', label: 'I Norge' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Leverandorer', url: 'https://vaskemaskin.no/bedrift/leverandorer/' }, { name: 'Jensen Group', url: 'https://vaskemaskin.no/bedrift/leverandorer/jensen-group/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Jensen Group' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Jensen Group | Verdensledende på tunnelsystemer</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Jensen Group er verdensledende på tunnelvaskemaskiner og komplette vaskeriløsninger for de største vaskerioperasjonene.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Om Jensen Group</h2>
              <p>Jensen Group ble grunnlagt i 1937 i Danmark og er verdens ledende produsent av tunnelyaskemaskiner og automatiserte vaskeriløsninger. Selskapet leverer komplette systemer fra vask til folding for de største vaskerioperasjonene i verden.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Tunnelsystemer</h2>
              <p>Jensen Senking serien er bransjens referanse for tunnelvaskemaskiner med kapasiteter fra 500 til over 5000 kg per time. Systemene er modulære og kan skaleres etter behov.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Tilleggsutstyr</h2>
              <p>Jensen leverer også foldermaskiner, strykeruller, sorteringssystemer, transportbånd og komplett automasjon for vaskerier. Systemene kan integreres med RFID sporbarhet og sentralstyring.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>I Norge</h2>
              <p>Jensen har flere store installasjoner i Norge, blant annet hos Nor Tekstil og Berendsen. Service leveres gjennom Jensen sitt europeiske nettverk.</p>
            </section>
            </div>

            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/vaskeri/", label: "Vaskeri" }, { href: "/bedrift/maskintyper/tunnelmaskin/", label: "Tunnelmaskin" }, { href: "/bedrift/sykehus/", label: "Sykehus" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
