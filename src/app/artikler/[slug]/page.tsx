import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return { title: "Artikkel ikke funnet" }
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: "https://vaskemaskin.no/artikler/" + article.slug,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
    },
  }
}

const categoryLabels: Record<string, string> = {
  guide: "Kjopsguide",
  test: "Test",
  vedlikehold: "Vedlikehold",
  tips: "Tips",
  teknologi: "Teknologi",
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(params.slug)
  const paragraphs = article.content.split("\n\n").filter((p) => p.trim())

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    url: "https://vaskemaskin.no/artikler/" + article.slug,
    publisher: {
      "@type": "Organization",
      name: "Vaskemaskin.no",
      url: "https://vaskemaskin.no",
    },
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  return (
    <>
      <article className="article-page">
        <div className="container container-narrow">
          <nav className="breadcrumbs">
            <Link href="/">Hjem</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/artikler">Artikler</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{article.title}</span>
          </nav>

          <header className="article-header">
            <span className="article-category-badge">
              {categoryLabels[article.category]}
            </span>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-meta">
              <span>Oppdatert {article.updatedDate}</span>
              <span>{article.readingTime} min lesetid</span>
            </div>
          </header>

          <div className="article-body">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {article.faq.length > 0 && (
            <section className="article-faq">
              <h2>Ofte stilte sporsmal</h2>
              <div className="faq-list">
                {article.faq.map((item, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">{item.question}</summary>
                    <p className="faq-answer">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="article-related">
              <h2>Relaterte artikler</h2>
              <div className="related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={"/artikler/" + r.slug}
                    className="related-card"
                  >
                    <span className="related-card-category">
                      {categoryLabels[r.category]}
                    </span>
                    <h3 className="related-card-title">{r.title}</h3>
                    <span className="related-card-time">
                      {r.readingTime} min
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
