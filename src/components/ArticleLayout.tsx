'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconClock, IconChevron, IconArrow, IconWasher } from './Icons'
import type { Article } from '@/data/articles'

interface Props {
  article: Article
  categoryName?: string
  categorySlug?: string
  relatedArticles: Article[]
  nextArticle?: Article
  prevArticle?: Article
}

export default function ArticleLayout({ article, categoryName, categorySlug, relatedArticles, nextArticle, prevArticle }: Props) {
  const [activeSection, setActiveSection] = useState(0)
  const [readProgress, setReadProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      // Read progress
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect()
        const totalHeight = articleRef.current.offsetHeight
        const scrolled = Math.max(0, -rect.top)
        const progress = Math.min(100, Math.round((scrolled / (totalHeight - window.innerHeight)) * 100))
        setReadProgress(Math.max(0, progress))
      }

      setShowScrollTop(window.scrollY > 600)

      // Active section tracking
      const sections = document.querySelectorAll('[data-section-id]')
      let current = 0
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < 150) current = i
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToSection = (i: number) => {
    const el = document.querySelector(`[data-section-id="${i}"]`)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const updatedFormatted = new Date(article.updatedDate).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
  const publishedFormatted = new Date(article.publishedDate).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-slate-100">
        <div className="h-full bg-aqua-500 transition-all duration-150" style={{ width: readProgress + '%' }} />
      </div>

      <article className="container-site py-8 lg:py-12" ref={articleRef}>
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">

          {/* Main content */}
          <div className="min-w-0">
            {/* Breadcrumbs */}
            <nav className="mb-6 text-sm text-slate-500">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li className="flex items-center gap-1.5"><Link href="/" className="hover:text-aqua-700 transition-colors">Hjem</Link></li>
                {categoryName && categorySlug && <li className="flex items-center gap-1.5"><span className="text-slate-300">/</span><Link href={'/kategori/' + categorySlug + '/'} className="hover:text-aqua-700 transition-colors">{categoryName}</Link></li>}
                <li className="flex items-center gap-1.5"><span className="text-slate-300">/</span><span className="text-slate-700 font-medium line-clamp-1">{article.title}</span></li>
              </ol>
            </nav>

            {/* Article header */}
            <header className="mb-10">
              {categoryName && categorySlug && (
                <Link href={'/kategori/' + categorySlug + '/'} className="inline-block text-xs font-semibold text-aqua-600 bg-aqua-50 px-3 py-1.5 rounded-full mb-4 hover:bg-aqua-100 transition-colors">{categoryName}</Link>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight mb-5">{article.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">{article.excerpt}</p>

              {/* Meta bar */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <IconClock size={14} />
                  {article.readingTime} lesetid
                </span>
                <span className="text-sm text-slate-400">Publisert {publishedFormatted}</span>
                <span className="text-sm text-slate-500 font-medium">Oppdatert {updatedFormatted}</span>
              </div>
            </header>

            {/* Mobile TOC (collapsible) */}
            {article.sections.length > 2 && (
              <details className="lg:hidden mb-8 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-slate-700 list-none [&::-webkit-details-marker]:hidden">
                  Innhold ({article.sections.length} seksjoner)
                  <IconChevron size={16} color="#94A3B8" />
                </summary>
                <div className="px-4 pb-4 space-y-1">
                  {article.sections.map((s, i) => (
                    <button key={i} onClick={() => scrollToSection(i)} className="block w-full text-left text-sm text-slate-600 hover:text-aqua-700 py-1.5 transition-colors">
                      <span className="text-aqua-400 font-mono text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {s.heading}
                    </button>
                  ))}
                </div>
              </details>
            )}

            {/* Key takeaways box */}
            <div className="mb-10 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
              <h2 className="text-sm font-bold text-aqua-800 mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-aqua-600"><path d="M9 18l6-6-6-6"/></svg>
                Det viktigste i denne artikkelen
              </h2>
              <div className="space-y-2">
                {article.sections.slice(0, 3).map((s, i) => (
                  <button key={i} onClick={() => scrollToSection(i)} className="flex items-start gap-2 text-sm text-aqua-900 hover:text-aqua-700 transition-colors text-left">
                    <span className="text-aqua-500 font-bold mt-0.5">{i + 1}.</span>
                    <span>{s.heading}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Article body */}
            <div className="prose-article">
              {article.sections.map((section, i) => (
                <section key={i} data-section-id={i} className="scroll-mt-20">
                  <h2 id={'section-' + i}>{section.heading}</h2>
                  {section.content.split('\n').map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>

            {/* Author/source box */}
            <div className="mt-12 p-5 rounded-xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-aqua-50 flex items-center justify-center flex-shrink-0">
                <IconWasher size={20} color="#0D9488" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900 mb-1">Vaskemaskin.no redaksjonen</div>
                <p className="text-sm text-slate-500 leading-relaxed">Denne artikkelen er skrevet og faktasjekket av redaksjonen på Vaskemaskin.no. Vi er uavhengige og har ingen bindinger til produsenter eller forhandlere. Innholdet er basert på ekspertkilder, brukertester og egne analyser.</p>
                <p className="text-xs text-slate-400 mt-2">Sist oppdatert {updatedFormatted}</p>
              </div>
            </div>

            {/* FAQ section */}
            {article.faq.length > 0 && (
              <section className="mt-12">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Ofte stilte spørsmål</h2>
                <div className="space-y-3">
                  {article.faq.map((item, i) => (
                    <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden bg-white">
                      <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        {item.question}
                        <span className="ml-3 flex-shrink-0 transition-transform group-open:rotate-180"><IconChevron size={16} color="#94A3B8" /></span>
                      </summary>
                      <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{item.answer}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Prev/Next navigation */}
            <nav className="mt-12 grid grid-cols-2 gap-4">
              {prevArticle ? (
                <Link href={'/artikkel/' + prevArticle.slug + '/'} className="group p-4 rounded-xl border border-slate-200 hover:border-aqua-300 transition-all">
                  <span className="text-xs text-slate-400 mb-1 block">Forrige artikkel</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2">{prevArticle.title}</span>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link href={'/artikkel/' + nextArticle.slug + '/'} className="group p-4 rounded-xl border border-slate-200 hover:border-aqua-300 transition-all text-right">
                  <span className="text-xs text-slate-400 mb-1 block">Neste artikkel</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2">{nextArticle.title}</span>
                </Link>
              ) : <div />}
            </nav>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-14">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Relaterte artikler</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedArticles.map(rel => (
                    <Link key={rel.slug} href={'/artikkel/' + rel.slug + '/'} className="card group block">
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-aqua-600 bg-aqua-50 px-2.5 py-1 rounded-full">{rel.category.replace(/-/g, ' ')}</span>
                          <span className="flex items-center gap-1 text-xs text-slate-400"><IconClock size={12} />{rel.readingTime}</span>
                        </div>
                        <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2 mb-2">{rel.title}</h3>
                        <p className="text-sm text-slate-500 line-clamp-2">{rel.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-16 space-y-6">
              {/* Sticky TOC */}
              {article.sections.length > 2 && (
                <nav className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Innhold</h3>
                  <div className="space-y-0.5">
                    {article.sections.map((s, i) => (
                      <button key={i} onClick={() => scrollToSection(i)} className={`block w-full text-left text-[13px] py-1.5 px-2 rounded transition-all leading-snug ${activeSection === i ? 'text-aqua-700 bg-aqua-50 font-medium' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>
                        {s.heading}
                      </button>
                    ))}
                  </div>
                </nav>
              )}

              {/* Quick links */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Nyttige lenker</h3>
                <div className="space-y-2">
                  <Link href="/artikkel/komplett-kjopsguide-2026/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Kjøpsguide 2026</Link>
                  <Link href="/feilkode/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Feilkoder alle merker</Link>
                  <Link href="/bruksanvisning/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Bruksanvisninger</Link>
                  <Link href="/ordliste/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Ordliste A til Å</Link>
                  <Link href="/verktoy/energikalkulator/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Energikalkulator</Link>
                </div>
              </div>

              {/* CTA box */}
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200">
                <h3 className="text-sm font-bold text-slate-900 mb-2">Finn din vaskemaskin</h3>
                <p className="text-xs text-slate-600 mb-3">Svar på 3 spørsmål og få personlig anbefaling.</p>
                <Link href="/verktoy/vaskemaskinvelger/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua-700 hover:text-aqua-800 transition-colors">
                  Start quizen
                  <IconArrow size={12} color="#0F766E" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-aqua-600 text-white shadow-lg hover:bg-aqua-700 transition-all flex items-center justify-center" aria-label="Tilbake til toppen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15" /></svg>
        </button>
      )}
    </>
  )
}
