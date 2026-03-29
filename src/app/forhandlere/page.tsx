import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Finn vaskemaskinforhandler nær deg | Vaskemaskin.no",
  description:
    "Oversikt over 147 hvitevareforhandlere i Norge fordelt pa 103 kommuner og 11 fylker. Finn butikken naermest deg.",
}

export default function ForhandlerePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Finn vaskemaskinforhandler</h1>
          <p className="page-hero-desc">
            147 hvitevareforhandlere i 103 kommuner over hele Norge. Finn
            butikken naermest deg, eller se oversikt per fylke.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Se forhandlere per fylke</h2>
          <p className="section-desc">
            Velg fylket ditt for a se alle hvitevareforhandlere i ditt omrade.
            Hver forhandlerside viser adresse, kontaktinformasjon og
            avstand til naermeste butikk.
          </p>
          <div className="category-grid">
            <Link href="/fylke" className="category-card">
              <h3 className="category-card-title">Alle fylker</h3>
              <p className="category-card-desc">Komplett fylkesoversikt med forhandlere</p>
            </Link>
          </div>
          <div className="pillar-content mt-8">
            <h2>Om forhandleroversikten</h2>
            <p>
              Vaskemaskin.no har kartlagt alle hvitevareforhandlere i Norge. Vi
              dekker bade store kjeder som Elkjop og Power, og lokale
              spesialistbutikker i hele landet. Oversikten oppdateres
              regelmessig for a sikre at informasjonen er korrekt.
            </p>
            <p>
              For kommuner uten fysisk forhandler viser vi naermeste butikk med
              avstandsberegning, samt nasjonale nettbutikker som leverer til
              hele Norge. Slik sikrer vi at alle norske forbrukere far hjelp til
              a finne riktig vaskemaskin.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
