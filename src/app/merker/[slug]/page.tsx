import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { brands, getBrandBySlug } from "@/data/brands"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const brand = getBrandBySlug(params.slug)
  if (!brand) return { title: "Merke ikke funnet" }
  return {
    title: brand.seoTitle,
    description: brand.seoDescription,
    openGraph: {
      title: brand.seoTitle,
      description: brand.seoDescription,
      url: "https://vaskemaskin.no/merker/" + brand.slug,
      type: "article",
    },
  }
}

const rangeLabels: Record<string, string> = {
  budsjett: "Budsjett",
  mellomklasse: "Mellomklasse",
  premium: "Premium",
}

export default function BrandPage({ params }: Props) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) notFound()

  const otherBrands = brands
    .filter((b) => b.slug !== brand.slug && b.priceRange === brand.priceRange)
    .slice(0, 4)

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const brandJsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: brand.description,
    url: "https://vaskemaskin.no/merker/" + brand.slug,
  }

  return (
    <>
      <div className="container container-narrow">
        <nav className="breadcrumbs">
          <Link href="/">Hjem</Link>
          <span className="breadcrumb-sep">/</span>
          <Link href="/merker">Merker</Link>
          <span className="breadcrumb-sep">/</span>
          <span>{brand.name}</span>
        </nav>

        <header className="brand-header">
          <div className="brand-header-top">
            <h1 className="brand-page-title">{brand.name} vaskemaskin</h1>
            <div className="brand-badges">
              <span className="brand-badge">{rangeLabels[brand.priceRange]}</span>
              <span className="brand-badge">{brand.country}</span>
              <span className="brand-badge">Grunnlagt {brand.founded}</span>
            </div>
          </div>
          <p className="brand-intro">{brand.description}</p>
        </header>

        <section className="brand-section">
          <h2>Om {brand.name}</h2>
          <p>{brand.longDescription}</p>
        </section>

        <section className="brand-section">
          <h2>Styrker</h2>
          <ul className="brand-strengths-list">
            {brand.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="brand-section">
          <h2>Energi og miljo</h2>
          <p>{brand.energyFocus}</p>
        </section>

        <section className="brand-section">
          <h2>Populare modeller</h2>
          <div className="brand-models">
            {brand.popularModels.map((m, i) => (
              <span key={i} className="brand-model">{m}</span>
            ))}
          </div>
        </section>

        <section className="brand-section">
          <h2>Garanti</h2>
          <p>{brand.warranty}</p>
        </section>

        {brand.faq.length > 0 && (
          <section className="brand-section">
            <h2>Ofte stilte sporsmal om {brand.name}</h2>
            <div className="faq-list">
              {brand.faq.map((item, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">{item.question}</summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {otherBrands.length > 0 && (
          <section className="brand-section">
            <h2>Andre {rangeLabels[brand.priceRange].toLowerCase()}merker</h2>
            <div className="related-grid">
              {otherBrands.map((b) => (
                <Link
                  key={b.slug}
                  href={"/merker/" + b.slug}
                  className="related-card"
                >
                  <h3 className="related-card-title">{b.name}</h3>
                  <span className="related-card-time">{b.country}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="brand-section">
          <h2>Relevante artikler</h2>
          <div className="related-grid">
            <Link href="/artikler/beste-vaskemaskin-2026" className="related-card">
              <h3 className="related-card-title">Beste vaskemaskin 2026</h3>
              <span className="related-card-time">Kjopsguide</span>
            </Link>
            <Link href="/artikler/vaskemaskin-test-sammenligning" className="related-card">
              <h3 className="related-card-title">Samsung vs Bosch vs LG vs Miele</h3>
              <span className="related-card-time">Test</span>
            </Link>
            <Link href="/artikler/vaskemaskin-levetid" className="related-card">
              <h3 className="related-card-title">Sa lenge varer merkene</h3>
              <span className="related-card-time">Guide</span>
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
