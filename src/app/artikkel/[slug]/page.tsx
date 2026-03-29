import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/data/articles'
import { getCategoryBySlug } from '@/data/categories'
import ArticleLayout from '@/components/ArticleLayout'
import { createMeta, jsonLdArticle, jsonLdFaq, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllArticleSlugs().map(slug => ({ slug })) }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return createMeta({ title: article.metaTitle, description: article.metaDescription, path: 'artikkel/' + article.slug })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const category = getCategoryBySlug(article.category)
  const related = getRelatedArticles(article.relatedSlugs)

  // Find prev/next articles in same category
  const sameCategory = articles.filter(a => a.category === article.category)
  const currentIndex = sameCategory.findIndex(a => a.slug === article.slug)
  const prevArticle = currentIndex > 0 ? sameCategory[currentIndex - 1] : undefined
  const nextArticle = currentIndex < sameCategory.length - 1 ? sameCategory[currentIndex + 1] : undefined

  const breadcrumbs = [
    { name: 'Hjem', url: 'https://vaskemaskin.no/' },
    ...(category ? [{ name: category.shortName, url: 'https://vaskemaskin.no/kategori/' + category.slug + '/' }] : []),
    { name: article.title, url: 'https://vaskemaskin.no/artikkel/' + article.slug + '/' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle({ title: article.title, description: article.metaDescription, slug: article.slug, publishedDate: article.publishedDate, updatedDate: article.updatedDate })) }} />
      {article.faq.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(article.faq)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb(breadcrumbs)) }} />

      <ArticleLayout
        article={article}
        categoryName={category?.shortName}
        categorySlug={category?.slug}
        relatedArticles={related}
        nextArticle={nextArticle}
        prevArticle={prevArticle}
      />
    </>
  )
}
