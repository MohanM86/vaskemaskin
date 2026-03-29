import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({ title: 'Personvernerklæring | Vaskemaskin.no', description: 'Les om hvordan Vaskemaskin.no behandler personopplysninger og bruker informasjonskapsler.', path: 'personvern' })

export default function PersonvernPage() {
  return (
    <div className="container-site py-10">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Personvern' }]} />
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Personvernerklæring</h1>
        <div className="prose-article">
          <p>Denne personvernerklæringen beskriver hvordan Vaskemaskin.no, en tjeneste fra IT-Firma.no, samler inn og bruker informasjon når du besøker nettstedet vårt.</p>
          <h2>Informasjonskapsler</h2>
          <p>Vi bruker Google Analytics 4 for å forstå hvordan besøkende bruker nettstedet vårt. Dette verktøyet bruker informasjonskapsler (cookies) for å samle anonymisert informasjon om besøksmønstre, som hvilke sider som besøkes og hvor lenge besøkende oppholder seg på nettstedet.</p>
          <p>Vi bruker Google Consent Mode v2, noe som betyr at analytiske data ikke samles inn før du har gitt ditt samtykke gjennom cookiebanneret på nettstedet.</p>
          <h2>Hvilke data samles inn</h2>
          <p>Når du godtar informasjonskapsler samler vi inn anonymisert informasjon om sidevisninger, varighet på besøk, omtrentlig geografisk plassering basert på IP adresse, enhetstype og nettlesertype. Vi samler ikke inn personlig identifiserbar informasjon som navn, epostadresse eller telefonnummer.</p>
          <h2>Tredjepartstjenester</h2>
          <p>Vi kan lenke til eksterne nettsteder og tjenester. Disse har egne personvernerklæringer som vi ikke er ansvarlige for. Vi anbefaler at du leser personvernerklæringen til alle tredjepartstjenester du besøker via lenker på våre sider.</p>
          <h2>Dine rettigheter</h2>
          <p>I henhold til GDPR har du rett til innsyn, retting og sletting av personopplysninger. Du kan når som helst trekke tilbake ditt samtykke for informasjonskapsler ved å slette cookies i nettleseren din.</p>
          <h2>Kontakt</h2>
          <p>For spørsmål om personvern, kontakt oss via <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">IT-Firma.no</a>.</p>
        </div>
      </div>
    </div>
  )
}
