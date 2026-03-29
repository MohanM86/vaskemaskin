import { notFound } from 'next/navigation'
import Link from 'next/link'
import { articles, getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/data/articles'
import { getCategoryBySlug } from '@/data/categories'
import { Breadcrumbs, FAQSection, ArticleCard } from '@/components/UI'
import { IconClock, IconArrow } from '@/components/Icons'
import { createMeta, jsonLdArticle, jsonLdFaq, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() {
  return getAllArticleSlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return createMeta({
    title: article.metaTitle,
    description: article.metaDescription,
    path: 'artikkel/' + article.slug,
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const category = getCategoryBySlug(article.category)
  const related = getRelatedArticles(article.relatedSlugs)

  const breadcrumbs = [
    { name: 'Hjem', url: 'https://vaskemaskin.no/' },
    ...(category ? [{ name: category.shortName, url: 'https://vaskemaskin.no/kategori/' + category.slug + '/' }] : []),
    { name: article.title, url: 'https://vaskemaskin.no/artikkel/' + article.slug + '/' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle({
          title: article.title,
          description: article.metaDescription,
          slug: article.slug,
          publishedDate: article.publishedDate,
          updatedDate: article.updatedDate,
        })) }}
      />
      {article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(article.faq)) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb(breadcrumbs)) }}
      />

      <article className="container-site py-10">
        <div className="max-w-3xl mx-auto">
          <Breadcrumbs items={[
            { label: 'Hjem', href: '/' },
            ...(category ? [{ label: category.shortName, href: '/kategori/' + category.slug + '/' }] : []),
            { label: article.title },
          ]} />

          {/* Article header */}
          <header className="mb-10">
            {category && (
              <Link
                href={'/kategori/' + category.slug + '/'}
                className="inline-block text-xs font-semibold text-aqua-600 bg-aqua-50 px-3 py-1.5 rounded-full mb-4 hover:bg-aqua-100 transition-colors"
              >
                {category.shortName}
              </Link>
            )}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <IconClock size={14} />
                {article.readingTime} lesetid
              </span>
              <span>Oppdatert {new Date(article.updatedDate).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </header>

          {/* Table of contents */}
          {article.sections.length > 2 && (
            <nav className="mb-10 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h2 className="text-sm font-bold text-slate-700 mb-3">Innhold</h2>
              <ol className="space-y-2">
                {article.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={'#section-' + i}
                      className="text-sm text-slate-600 hover:text-aqua-700 transition-colors flex items-start gap-2"
                    >
                      <span className="text-aqua-400 font-mono text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Article body */}
          <div className="prose-article">
            {article.sections.map((section, i) => (
              <section key={i} id={'section-' + i}>
                <h2>{section.heading}</h2>
                {section.content.split('\n').map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          {/* FAQ */}
          {article.faq.length > 0 && (
            <FAQSection items={article.faq} />
          )}

          {/* Related articles */}
          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Relaterte artikler</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.slice(0, 4).map(rel => (
                  <ArticleCard key={rel.slug} article={rel} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  )
}
