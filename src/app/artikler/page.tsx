import Link from "next/link"
import { articles } from "@/data/articles"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artikler og guider om vaskemaskin | Vaskemaskin.no",
  description:
    "Alle artikler, kjopsguider, tester og vedlikeholdstips for vaskemaskiner. Oppdatert innhold fra Norges mest komplette vaskemaskin-ressurs.",
}

const categoryLabels: Record<string, string> = {
  guide: "Kjopsguide",
  test: "Test",
  vedlikehold: "Vedlikehold",
  tips: "Tips",
  teknologi: "Teknologi",
}

const categories = ["guide", "test", "vedlikehold", "tips", "teknologi"] as const

export default function ArticlesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Artikler og guider</h1>
          <p className="page-hero-desc">
            {articles.length} artikler om alt fra kjopsguider og tester til
            vedlikehold og stromsparing. Alt du trenger for a ta gode valg.
          </p>
        </div>
      </section>

      {categories.map((cat) => {
        const catArticles = articles.filter((a) => a.category === cat)
        if (catArticles.length === 0) return null
        return (
          <section key={cat} className="section">
            <div className="container">
              <h2 className="section-title">{categoryLabels[cat]}</h2>
              <div className="articles-grid">
                {catArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={"/artikler/" + article.slug}
                    className="article-card group"
                  >
                    <div className="article-card-category">
                      {categoryLabels[article.category]}
                    </div>
                    <h3 className="article-card-title">{article.title}</h3>
                    <p className="article-card-excerpt">{article.excerpt}</p>
                    <div className="article-card-meta">
                      <span>{article.readingTime} min lesetid</span>
                      <span className="article-card-arrow group-hover:translate-x-1 transition-transform">
                        Les mer
                      </span>
                    </div>
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
            name: "Artikler og guider om vaskemaskin",
            description:
              "Alle artikler og guider pa vaskemaskin.no",
            url: "https://vaskemaskin.no/artikler",
          }),
        }}
      />
    </>
  )
}
