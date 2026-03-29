import { Breadcrumbs } from '@/components/UI'
import { createMeta } from '@/lib/seo'

export const metadata = createMeta({
  title: 'Om oss | Vaskemaskin.no',
  description: 'Vaskemaskin.no er Norges mest komplette ressurs om vaskemaskiner. Uavhengig informasjon fra IT-Firma.no.',
  path: 'om-oss',
})

export default function OmOssPage() {
  return (
    <div className="container-site py-10">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs items={[
          { label: 'Hjem', href: '/' },
          { label: 'Om oss' },
        ]} />

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Om Vaskemaskin.no</h1>

        <div className="prose-article">
          <p>
            Vaskemaskin.no er Norges mest komplette kunnskapsressurs om vaskemaskiner. Vi gir deg
            uavhengig informasjon, grundige kjopsguider, merkesammenligninger og vedlikeholdstips
            slik at du kan ta et informert valg naar du skal kjope ny vaskemaskin.
          </p>

          <h2>Vaar misjon</h2>
          <p>
            Vi tror at alle fortjener tilgang til god og uavhengig informasjon naar de skal gjore
            store kjop. En vaskemaskin er en investering som varer i mange aar, og riktig valg kan
            spare deg for baade penger og frustrasjon. Derfor lager vi innhold som er grundig,
            oppdatert og lett aa forstaa.
          </p>

          <h2>Hvem staar bak</h2>
          <p>
            Vaskemaskin.no drives av IT-Firma.no, et norsk teknologiselskap som utvikler og drifter
            en portefolje av spesialiserte kunnskapsportaler for norske forbrukere. Alle vare sider
            har det samme maalet: aa gi deg den informasjonen du trenger for aa ta gode beslutninger.
          </p>

          <h2>Redaksjonell uavhengighet</h2>
          <p>
            Innholdet paa Vaskemaskin.no er redaksjonelt uavhengig. Vi har ingen bindinger til
            produsenter eller forhandlere som paavirker vare anbefalinger. Naar vi anbefaler et
            produkt er det fordi vi mener det representerer et godt valg for forbrukeren, ikke
            fordi noen har betalt oss for aa si det.
          </p>

          <h2>Kontakt</h2>
          <p>
            Vaskemaskin.no er en tjeneste fra{' '}
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">IT-Firma.no</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
