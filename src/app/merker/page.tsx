import Link from "next/link"
import { brands } from "@/data/brands"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vaskemaskinmerker | Alle 25 merker sammenlignet | Vaskemaskin.no",
  description:
    "Komplett oversikt over alle vaskemaskinmerker i Norge. Fra premium Miele og Bosch til budsjett Beko og Candy. Se styrker, priser og anbefalinger.",
}

const rangeLabels: Record<string, string> = {
  budsjett: "Budsjett",
  mellomklasse: "Mellomklasse",
  premium: "Premium",
}

const rangeOrder = ["premium", "mellomklasse", "budsjett"] as const

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Vaskemaskinmerker</h1>
          <p className="page-hero-desc">
            {brands.length} merker analysert og sammenlignet. Finn merket som
            passer ditt behov, fra premium til budsjett.
          </p>
        </div>
      </section>

      {rangeOrder.map((range) => {
        const rangeBrands = brands.filter((b) => b.priceRange === range)
        return (
          <section key={range} className="section">
            <div className="container">
              <h2 className="section-title">{rangeLabels[range]}</h2>
              <div className="brands-grid">
                {rangeBrands.map((brand) => (
                  <Link
                    key={brand.slug}
                    href={"/merker/" + brand.slug}
                    className="brand-card group"
                  >
                    <div className="brand-card-header">
                      <h3 className="brand-card-name">{brand.name}</h3>
                      <span className="brand-card-country">{brand.country}</span>
                    </div>
                    <p className="brand-card-desc">{brand.description}</p>
                    <div className="brand-card-strengths">
                      {brand.strengths.slice(0, 3).map((s, i) => (
                        <span key={i} className="brand-card-strength">{s}</span>
                      ))}
                    </div>
                    <span className="brand-card-link group-hover:text-[var(--blue)]">
                      Les mer om {brand.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Vaskemaskinmerker",
            description: "Alle vaskemaskinmerker i Norge sammenlignet",
            url: "https://vaskemaskin.no/merker",
          }),
        }}
      />
    </>
  )
}
