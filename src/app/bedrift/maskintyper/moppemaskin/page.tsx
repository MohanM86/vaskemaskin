import { Breadcrumbs, FAQSection } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb, jsonLdFaq } from '@/lib/seo'
import Link from 'next/link'

export const metadata = createMeta({
  title: 'Moppemaskin | Spesialmaskin for mopper og kluter | vaskemaskin.no',
  description: 'Alt om moppevaskemaskiner med termisk desinfeksjon for renholdsselskaper.',
  path: 'bedrift/maskintyper/moppemaskin',
})

const faqItems = [{"question": "Kan vanlige vaskemaskiner brukes til mopper?", "answer": "Teknisk ja, men de mangler termisk desinfeksjon og dokumentasjon som kreves etter NS INSTA 800."}]

export default function Page() {
  const sections = [
    { id: 's0', label: 'Hva er en moppemaskin' },
    { id: 's1', label: 'Termisk desinfeksjon' },
    { id: 's2', label: 'Forskjell fra vanlige maskiner' },
    { id: 's3', label: 'Anbefalte modeller' },
    ...(faqItems.length > 0 ? [{ id: 'faq', label: 'Spørsmål og svar' }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Bedrift', url: 'https://vaskemaskin.no/bedrift/' }, { name: 'Maskintyper', url: 'https://vaskemaskin.no/bedrift/maskintyper/' }, { name: 'Moppemaskin', url: 'https://vaskemaskin.no/bedrift/maskintyper/moppemaskin/' }])) }} />
      {faqItems.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(faqItems)) }} />}

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Bedrift', href: '/bedrift/' }, { label: 'Moppemaskin' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Moppemaskin | Spesialmaskin for mopper og kluter</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">En moppemaskin er en spesialvaskemaskin designet for vask og termisk desinfeksjon av mopper, kluter og andre rengjøringstekstiler.</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <div className="prose-article">
            <section data-section-id="s0" className="scroll-mt-20 mb-10">
              <h2>Hva er en moppemaskin</h2>
              <p>En moppemaskin er konstruert for å håndtere de spesielle utfordringene med vask av mopper og rengjøringskluter: grove tekstiler med mye skitt, behov for termisk desinfeksjon, og høye krav til dokumentasjon av vaskeprosessen.</p>
            </section>
            <section data-section-id="s1" className="scroll-mt-20 mb-10">
              <h2>Termisk desinfeksjon</h2>
              <p>Standarden NS INSTA 800 for renhold krever at mopper desinfiseres termisk ved minimum 85 grader. Moppemaskiner har programmer som sikrer at denne temperaturen holdes i minimum 10 minutter, med logging av temperaturkurven.</p>
            </section>
            <section data-section-id="s2" className="scroll-mt-20 mb-10">
              <h2>Forskjell fra vanlige maskiner</h2>
              <p>Moppemaskiner har større pumpefilter for å håndtere mye lo og smuss, automatisk kjemikaliedosering tilpasset rengjøringstekstiler, programmering for ulike moppe og kluttyper, og mulighet for å kjøre opptil 10 vask per dag uten overbelastning.</p>
            </section>
            <section data-section-id="s3" className="scroll-mt-20 mb-10">
              <h2>Anbefalte modeller</h2>
              <p>Miele Professional PWM 300 og Electrolux Professional WH6 6 er populære valg for renholdsfirmaer. Podab har også gode løsninger for mindre renholdsoperasjoner.</p>
            </section>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead><tr className="bg-slate-800 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Modell</th><th className="px-4 py-3 text-left font-semibold">Kapasitet</th><th className="px-4 py-3 text-left font-semibold">Desinfeksjon</th><th className="px-4 py-3 text-left font-semibold">Ca. pris</th>
                </tr></thead>
                <tbody>
                  <tr className="bg-white"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Miele PWM 300</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">3 kg mopper</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">85 grader/10 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">25 000 til 35 000 kr</td></tr><tr className="bg-slate-50"><td className="px-4 py-3 text-slate-700 border-t border-slate-100">Electrolux WH6 6</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">6 kg mopper</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">90 grader/10 min</td><td className="px-4 py-3 text-slate-700 border-t border-slate-100">35 000 til 50 000 kr</td></tr>
                </tbody>
              </table>
            </div>
            {faqItems.length > 0 && <section data-section-id="faq" className="scroll-mt-20 mb-10"><FAQSection items={faqItems} /></section>}
          </div>
          <PageSidebar sections={sections} relatedLinks={[{ href: "/bedrift/hygienestandarder/", label: "Hygienestandarder" }, { href: "/bedrift/prisguide/", label: "Prisguide" }, { href: "/bedrift/leverandorer/miele-professional/", label: "Miele Professional" }]} ctaTitle="Tilbake til oversikt" ctaText="Se alle bedriftsløsninger." ctaLink="/bedrift/" ctaLinkText="Bedriftsoversikt" />
        </div>
      </div>
    </>
  )
}
