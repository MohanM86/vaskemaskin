import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om vaskemaskin.no | Norges vaskemaskin-ressurs",
  description:
    "Vaskemaskin.no er en uavhengig kunnskapsportal om vaskemaskiner, drevet av IT-Firma.no. Vi tilbyr guider, tester og forhandleroversikt for hele Norge.",
}

export default function OmOssPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Om vaskemaskin.no</h1>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow">
          <div className="pillar-content">
            <h2>Var misjon</h2>
            <p>
              Vaskemaskin.no er Norges mest komplette ressurs om vaskemaskiner.
              Vi gir norske forbrukere uavhengig og oppdatert informasjon slik
              at de kan ta gode kjopsbeslutninger. Alt innhold er skrevet med
              norske forbrukere i tankene, tilpasset norske forhold, priser og
              tilgjengelighet.
            </p>

            <h2>Hva vi dekker</h2>
            <p>
              Vi dekker over 25 vaskemaskinmerker fra premium til budsjett,
              publiserer kjopsguider og vedlikeholdsartikler, og har kartlagt
              147 hvitevareforhandlere i 103 kommuner over hele Norge. Innholdet
              oppdateres fortlopende for a reflektere nye modeller, priser og
              tester.
            </p>

            <h2>Uavhengighet</h2>
            <p>
              Vaskemaskin.no er en uavhengig kunnskapsportal. Vi mottar ikke
              betaling fra produsenter for a anbefale spesifikke modeller. Vare
              anbefalinger er basert pa offentlig tilgjengelige tester,
              spesifikasjoner og brukererfaringer.
            </p>

            <h2>Hvitevareportefoljen</h2>
            <p>
              Vaskemaskin.no er en del av hvitevareportefoljen til{" "}
              <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">
                IT-Firma.no
              </a>
              , som ogsa inkluderer{" "}
              <a href="https://komfyr.no" target="_blank" rel="noopener noreferrer">
                komfyr.no
              </a>{" "}
              og{" "}
              <a href="https://hvitevare.no" target="_blank" rel="noopener noreferrer">
                hvitevare.no
              </a>
              . Sammen dekker vi de viktigste hvitevarekategoriene for norske
              forbrukere.
            </p>

            <h2>Kontakt</h2>
            <p>
              Vaskemaskin.no drives av IT-Firma.no fra Oslo. For henvendelser om
              innhold, samarbeid eller forhandleroppforing, ta kontakt via{" "}
              <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">
                it-firma.no
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Om vaskemaskin.no",
            url: "https://vaskemaskin.no/om-oss",
            mainEntity: {
              "@type": "Organization",
              name: "Vaskemaskin.no",
              url: "https://vaskemaskin.no",
              parentOrganization: {
                "@type": "Organization",
                name: "IT-Firma.no",
                url: "https://it-firma.no",
              },
            },
          }),
        }}
      />
    </>
  )
}
