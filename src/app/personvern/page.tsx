import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Personvernerklaering | Vaskemaskin.no',
  description: 'Les om hvordan Vaskemaskin.no behandler personopplysninger og bruker informasjonskapsler.',
  path: 'personvern',
})

export default function PersonvernPage() {
  return (
    <div className="container-site py-10">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Hjem', href: '/' },
          { label: 'Personvern' },
        ]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Personvernerklaering</h1>

        <div className="prose-article">
          <p>
            Denne personvernerklaering beskriver hvordan Vaskemaskin.no, en tjeneste fra IT-Firma.no,
            samler inn og bruker informasjon naar du besoker nettstedet vaart.
          </p>

          <h2>Informasjonskapsler</h2>
          <p>
            Vi bruker Google Analytics 4 for aa forstaa hvordan besokende bruker nettstedet vaart.
            Dette verktoeyet bruker informasjonskapsler (cookies) for aa samle anonymisert informasjon
            om besoksmonstre, som hvilke sider som besokes og hvor lenge besokende oppholder seg paa
            nettstedet.
          </p>
          <p>
            Vi bruker Google Consent Mode v2, noe som betyr at analytiske data ikke samles inn foer
            du har gitt ditt samtykke gjennom cookiebanneret paa nettstedet.
          </p>

          <h2>Hvilke data samles inn</h2>
          <p>
            Naar du godtar informasjonskapsler samler vi inn anonymisert informasjon om sidevisninger,
            varighet paa besoek, omtrentlig geografisk plassering basert paa IP-adresse, enhetstype
            og nettlesertype. Vi samler ikke inn personlig identifiserbar informasjon som navn,
            epostadresse eller telefonnummer.
          </p>

          <h2>Tredjepartstjenester</h2>
          <p>
            Vi kan lenke til eksterne nettsteder og tjenester. Disse har egne personvernerkleringer
            som vi ikke er ansvarlige for. Vi anbefaler at du leser personvernerkleringen til alle
            tredjepartstjenester du besoker via lenker paa vaare sider.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            I henhold til GDPR har du rett til innsyn, retting og sletting av personopplysninger.
            Du kan naar som helst trekke tilbake ditt samtykke for informasjonskapsler ved aa slette
            cookies i nettleseren din.
          </p>

          <h2>Kontakt</h2>
          <p>
            For spoersmaal om personvern, kontakt oss via{' '}
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">IT-Firma.no</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
