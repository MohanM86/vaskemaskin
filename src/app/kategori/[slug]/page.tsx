import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories, getCategoryBySlug, getAllCategorySlugs } from '@/data/categories'
import { getArticlesByCategory } from '@/data/articles'
import { Breadcrumbs, ArticleCard } from '@/components/UI'
import { CategoryIcon } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllCategorySlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) return {}
  return createMeta({ title: cat.metaTitle, description: cat.metaDescription, path: 'kategori/' + cat.slug })
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategoryBySlug(params.slug)
  if (!cat) notFound()
  const catArticles = getArticlesByCategory(params.slug)
  const otherCategories = categories.filter(c => c.slug !== params.slug)

  const sections = [
    { id: 'intro', label: 'Om ' + cat.shortName.toLowerCase() },
    ...(catArticles.length > 0 ? [{ id: 'artikler', label: 'Artikler' }] : []),
    { id: 'andre', label: 'Andre kategorier' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: cat.name, url: 'https://vaskemaskin.no/kategori/' + cat.slug + '/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: cat.name }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">{cat.name}</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{cat.description}</p>
        </div>
      </section>

      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <section data-section-id="intro" className="scroll-mt-20 mb-12">
              <div className="prose-article"><p>{cat.intro}</p></div>
            </section>

            {catArticles.length > 0 && (
              <section data-section-id="artikler" className="scroll-mt-20 mb-14">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Artikler om {cat.shortName.toLowerCase()}</h2>
                <div className="grid sm:grid-cols-2 gap-5">{catArticles.map(article => (<ArticleCard key={article.slug} article={article} />))}</div>
              </section>
            )}

            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Andre kategorier</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">{otherCategories.map(c => (
                <Link key={c.slug} href={'/kategori/' + c.slug + '/'} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-aqua-50 flex items-center justify-center text-aqua-600"><CategoryIcon slug={c.slug} size={16} /></div>
                  <span className="text-sm font-medium text-slate-700">{c.shortName}</span>
                </Link>
              ))}</div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={catArticles.slice(0, 3).map(a => ({ href: '/artikkel/' + a.slug + '/', label: a.title }))} />
        </div>
      </div>
    </>
  )
}
