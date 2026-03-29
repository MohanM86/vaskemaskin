import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vaskemaskinforhandlere per fylke | Vaskemaskin.no",
  description:
    "Finn hvitevareforhandlere i ditt fylke. Oversikt over 147 forhandlere fordelt pa 11 fylker i Norge.",
}

export default function FylkePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Forhandlere per fylke</h1>
          <p className="page-hero-desc">
            Vi dekker 11 fylker med til sammen 147 hvitevareforhandlere. Velg
            ditt fylke for a se alle butikker i ditt omrade.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-desc">
            Fylkesidene med fullstendig forhandlerliste, kommuneoversikt og
            lokaltilpasset innhold bygges ut fortlopende. Se{" "}
            <Link href="/forhandlere">forhandleroversikten</Link> for komplett
            informasjon i mellomtiden.
          </p>
        </div>
      </section>
    </>
  )
}
