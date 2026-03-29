import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Personvern | Vaskemaskin.no",
  description: "Personvernerklaering for vaskemaskin.no.",
  robots: { index: false, follow: false },
}

export default function PersonvernPage() {
  return (
    <section className="section">
      <div className="container container-narrow">
        <div className="pillar-content">
          <h1>Personvernerklaering</h1>
          <p><em>Sist oppdatert: mars 2026</em></p>

          <h2>Behandlingsansvarlig</h2>
          <p>
            IT-Firma.no er behandlingsansvarlig for personopplysninger som
            samles inn via vaskemaskin.no.
          </p>

          <h2>Informasjonskapsler</h2>
          <p>
            Vi bruker Google Analytics 4 (GA4) for a forstå hvordan besokende
            bruker nettsiden. GA4 samler inn anonymisert data om sidevisninger,
            enhetstype og geografisk omrade. Vi bruker consent mode slik at
            ingen personopplysninger lagres for du har gitt samtykke via
            cookie-banneret.
          </p>

          <h2>Hvilke data samles inn</h2>
          <p>
            Nar du godtar informasjonskapsler, samles følgende inn via GA4:
            sidevisninger, tid pa siden, enhetstype, nettleser, operativsystem
            og omtrentlig geografisk omrade. Ingen personlig identifiserbar
            informasjon som navn, e-post eller IP-adresse lagres.
          </p>

          <h2>Tredjepartstjenester</h2>
          <p>
            Nettsiden er hostet pa Vercel. Google Analytics brukes for
            trafikkanalyse. Ingen andre tredjepartstjenester har tilgang til
            dine data.
          </p>

          <h2>Dine rettigheter</h2>
          <p>
            Du har rett til innsyn, retting, sletting og dataportabilitet i
            henhold til GDPR og personopplysningsloven. Kontakt oss via
            it-firma.no for henvendelser om personvern.
          </p>

          <h2>Endringer</h2>
          <p>
            Vi kan oppdatere denne personvernerklaeringen ved behov. Siste
            oppdatering vises øverst pa siden.
          </p>
        </div>
      </div>
    </section>
  )
}
