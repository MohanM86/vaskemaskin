import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export const metadata = createMeta({ title: 'Personvern | Vaskemaskin.no', description: 'Les om hvordan Vaskemaskin.no behandler personopplysninger og bruker informasjonskapsler.', path: 'personvern' })

export default function PersonvernPage() {
  const sections = [
    { id: 'innledning', label: 'Innledning' },
    { id: 'cookies', label: 'Informasjonskapsler' },
    { id: 'analytics', label: 'Analyse og statistikk' },
    { id: 'rettigheter', label: 'Dine rettigheter' },
    { id: 'kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Personvern', url: 'https://vaskemaskin.no/personvern/' }])) }} />
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Personvernerklæring' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-8">Personvernerklæring</h1>

          <section data-section-id="innledning" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Innledning</h2>
            <div className="prose-article"><p>Vaskemaskin.no, driftet av IT-Firma.no, tar ditt personvern på alvor. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter informasjon når du besøker nettstedet vårt. Vi behandler personopplysninger i samsvar med personopplysningsloven og GDPR.</p></div>
          </section>

          <section data-section-id="cookies" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Informasjonskapsler</h2>
            <div className="prose-article"><p>Vi bruker informasjonskapsler for å forbedre brukeropplevelsen og samle anonymisert statistikk. Ved første besøk vil du bli bedt om å samtykke til bruk av informasjonskapsler. Du kan når som helst trekke tilbake samtykket ditt ved å slette informasjonskapslene i nettleseren din. Nettstedet fungerer uten informasjonskapsler, men noe funksjonalitet kan være begrenset.</p></div>
          </section>

          <section data-section-id="analytics" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Analyse og statistikk</h2>
            <div className="prose-article"><p>Vi bruker Google Analytics 4 med samtykkebasert innsamling (consent mode) for å forstå hvordan besøkende bruker nettstedet. Data som samles inn inkluderer sidevisninger, tid på siden, enhet og nettleser. IP adresser anonymiseres. Vi deler ikke data med tredjeparter utover Google Analytics. Du kan velge å ikke bli sporet ved å avvise informasjonskapsler i samtykkebanneret.</p></div>
          </section>

          <section data-section-id="rettigheter" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Dine rettigheter</h2>
            <div className="prose-article"><p>I henhold til GDPR har du rett til innsyn i, retting av og sletting av personopplysninger vi har om deg. Du har også rett til å begrense behandlingen og rett til dataportabilitet. For å utøve dine rettigheter, kontakt oss via informasjonen nedenfor.</p></div>
          </section>

          <section data-section-id="kontakt" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">Kontakt</h2>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-600">For spørsmål om personvern, kontakt IT-Firma.no via <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-aqua-600 hover:underline">it-firma.no</a>.</p>
            </div>
          </section>
        </div>
        <PageSidebar sections={sections} showQuiz={false} showEnergi={false} relatedLinks={[{ href: '/om-oss/', label: 'Om Vaskemaskin.no' }]} />
      </div>
    </div>
    </>
  )
}