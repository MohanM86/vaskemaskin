import Link from "next/link"

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="container container-narrow">
        <h1 style={{ fontSize: "4rem", fontWeight: 700, color: "var(--blue)", marginBottom: "1rem" }}>
          404
        </h1>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" }}>
          Siden finnes ikke
        </h2>
        <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
          Beklager, men siden du leter etter eksisterer ikke eller har blitt
          flyttet.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            Til forsiden
          </Link>
          <Link href="/artikler" className="btn-secondary">
            Se alle artikler
          </Link>
        </div>
      </div>
    </section>
  )
}
