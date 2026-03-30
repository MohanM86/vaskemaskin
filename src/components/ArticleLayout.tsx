'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconClock, IconChevron, IconArrow, IconWasher, IconCheckCircle, IconAlertTriangle, IconLightbulb, IconBookOpen, IconTarget, IconZap, IconStar } from './Icons'
import type { Article } from '@/data/articles'

interface Props {
  article: Article
  categoryName?: string
  categorySlug?: string
  relatedArticles: Article[]
  nextArticle?: Article
  prevArticle?: Article
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        let start = 0
        const duration = 1200
        const step = (timestamp: number) => {
          if (!start) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

function ProgressRing({ value, max, label, color = '#0D9488' }: { value: number; max: number; label: string; color?: string }) {
  const percentage = (value / max) * 100
  const circumference = 2 * Math.PI * 36
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg width="88" height="88" viewBox="0 0 88 88" className="transform -rotate-90">
        <circle cx="44" cy="44" r="36" fill="none" stroke="#E2E8F0" strokeWidth="6" />
        <circle cx="44" cy="44" r="36" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-1000" />
      </svg>
      <div className="text-center -mt-14 mb-4">
        <div className="font-serif text-xl font-bold text-slate-900">{value}/{max}</div>
      </div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )
}

export default function ArticleLayout({ article, categoryName, categorySlug, relatedArticles, nextArticle, prevArticle }: Props) {
  const [activeSection, setActiveSection] = useState(0)
  const [readProgress, setReadProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const articleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (articleRef.current) {
        const rect = articleRef.current.getBoundingClientRect()
        const totalHeight = articleRef.current.offsetHeight
        const scrolled = Math.max(0, -rect.top)
        const progress = Math.min(100, Math.round((scrolled / (totalHeight - window.innerHeight)) * 100))
        setReadProgress(Math.max(0, progress))
      }
      setShowScrollTop(window.scrollY > 600)

      const sections = document.querySelectorAll('[data-section-id]')
      let current = 0
      sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top < 150) current = i
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollToSection = (i: number) => {
    const el = document.querySelector(`[data-section-id="${i}"]`)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const updatedFormatted = new Date(article.updatedDate).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
  const publishedFormatted = new Date(article.publishedDate).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
  const wordCount = article.sections.reduce((sum, s) => sum + s.content.split(' ').length, 0)
  const readMin = Math.max(2, Math.round(wordCount / 200))

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <div className="h-1 bg-slate-100">
          <div className="h-full bg-gradient-to-r from-aqua-500 to-aqua-400 transition-all duration-150 ease-out" style={{ width: readProgress + '%' }} />
        </div>
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

              {/* Meta bar with visual indicators */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 border-b border-slate-200">
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <IconClock size={14} />
                  {readMin} min lesetid
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-500">
                  <IconBookOpen size={14} />
                  {article.sections.length} seksjoner
                </span>
                <span className="text-sm text-slate-500 font-medium">Oppdatert {updatedFormatted}</span>
              </div>
            </header>

            {/* ═══ KEY TAKEAWAYS with animated icons ═══ */}
            <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100/50 border border-aqua-200/60">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-aqua-600 flex items-center justify-center"><IconZap size={16} color="white" /></div>
                <h2 className="text-sm font-bold text-aqua-800 uppercase tracking-wider">Det viktigste i denne artikkelen</h2>
              </div>
              <div className="space-y-3">
                {article.sections.slice(0, 4).map((s, i) => (
                  <button key={i} onClick={() => scrollToSection(i)} className="flex items-start gap-3 text-sm text-aqua-900 hover:text-aqua-700 transition-colors text-left group w-full">
                    <span className="w-6 h-6 rounded-full bg-aqua-200/60 flex items-center justify-center text-xs font-bold text-aqua-700 flex-shrink-0 mt-0.5 group-hover:bg-aqua-300/60 transition-colors">{i + 1}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{s.heading}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile TOC */}
            {article.sections.length > 3 && (
              <details className="lg:hidden mb-8 rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-slate-700 list-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center gap-2"><IconBookOpen size={16} color="#0D9488" />Innhold ({article.sections.length} seksjoner)</span>
                  <IconChevron size={16} color="#94A3B8" />
                </summary>
                <div className="px-4 pb-4 space-y-1 border-t border-slate-100 pt-3">
                  {article.sections.map((s, i) => (
                    <button key={i} onClick={() => scrollToSection(i)} className="block w-full text-left text-sm text-slate-600 hover:text-aqua-700 py-1.5 transition-colors">
                      <span className="text-aqua-400 font-mono text-xs mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {s.heading}
                    </button>
                  ))}
                </div>
              </details>
            )}

            {/* ═══ ARTICLE BODY with visual sections ═══ */}
            <div className="prose-article">
              {article.sections.map((section, i) => (
                <section key={i} data-section-id={i} className="scroll-mt-20 mb-10">
                  {/* Section header with number badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-aqua-50 border border-aqua-200/60 flex items-center justify-center text-xs font-bold text-aqua-600">{String(i + 1).padStart(2, '0')}</span>
                    <h2 id={'section-' + i} className="!mt-0 !mb-0">{section.heading}</h2>
                  </div>
                  
                  {/* Content with left border accent */}
                  <div className="pl-11">
                    {section.content.split('\n').map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Section divider */}
                  {i < article.sections.length - 1 && (
                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-aqua-200 to-transparent" />
                      <div className="w-1.5 h-1.5 rounded-full bg-aqua-300" />
                      <div className="flex-1 h-px bg-gradient-to-l from-aqua-200 to-transparent" />
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* ═══ READING STATS BAR (animated) ═══ */}
            <div className="my-12 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-serif text-2xl font-bold text-aqua-600"><AnimatedCounter target={article.sections.length} /></div>
                  <div className="text-xs text-slate-500 mt-1">seksjoner</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-aqua-600"><AnimatedCounter target={readMin} suffix=" min" /></div>
                  <div className="text-xs text-slate-500 mt-1">lesetid</div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-aqua-600"><AnimatedCounter target={article.faq.length} /></div>
                  <div className="text-xs text-slate-500 mt-1">vanlige sporsmal</div>
                </div>
              </div>
            </div>

            {/* ═══ AUTHOR BOX — E-E-A-T ═══ */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-aqua-100 to-aqua-200 flex items-center justify-center flex-shrink-0">
                <IconWasher size={24} color="#0D9488" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-slate-900">Vaskemaskin.no redaksjonen</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-aqua-700 bg-aqua-50 px-2 py-0.5 rounded-full"><IconCheckCircle size={10} color="#0F766E" /> Verifisert</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">Skrevet og faktasjekket av redaksjonen pa Vaskemaskin.no. Vi er uavhengige og har ingen bindinger til produsenter eller forhandlere.</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                  <span>Publisert {publishedFormatted}</span>
                  <span>Oppdatert {updatedFormatted}</span>
                </div>
              </div>
            </div>

            {/* ═══ FAQ with smooth animations ═══ */}
            {article.faq.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconTarget size={20} color="#0D9488" /></div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">Ofte stilte sporsmal</h2>
                </div>
                <div className="space-y-3">
                  {article.faq.map((item, i) => (
                    <details key={i} className="group border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-aqua-200 transition-colors">
                      <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-slate-800 hover:bg-slate-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full bg-aqua-50 flex items-center justify-center text-xs font-bold text-aqua-600 flex-shrink-0">?</span>
                          {item.question}
                        </span>
                        <svg className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 pl-14">{item.answer}</div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* ═══ PREV / NEXT navigation ═══ */}
            <nav className="mt-12 grid grid-cols-2 gap-4">
              {prevArticle ? (
                <Link href={'/artikkel/' + prevArticle.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 mb-2"><IconArrow size={12} color="#94A3B8" />Forrige</span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2">{prevArticle.title}</span>
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link href={'/artikkel/' + nextArticle.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all text-right">
                  <span className="flex items-center justify-end gap-1.5 text-xs text-slate-400 mb-2">Neste<IconArrow size={12} color="#94A3B8" /></span>
                  <span className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2">{nextArticle.title}</span>
                </Link>
              ) : <div />}
            </nav>

            {/* ═══ RELATED ARTICLES ═══ */}
            {relatedArticles.length > 0 && (
              <section className="mt-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconBookOpen size={20} color="#0D9488" /></div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">Les ogsa</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {relatedArticles.map(rel => (
                    <Link key={rel.slug} href={'/artikkel/' + rel.slug + '/'} className="group p-5 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-aqua-700 bg-aqua-50 px-2.5 py-1 rounded-full">{rel.category.replace(/-/g, ' ')}</span>
                        <span className="flex items-center gap-1 text-xs text-slate-400"><IconClock size={12} />{rel.readingTime}</span>
                      </div>
                      <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2 mb-2">{rel.title}</h3>
                      <p className="text-sm text-slate-500 line-clamp-2">{rel.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ═══ SIDEBAR ═══ */}
          <aside className="hidden lg:block">
            <div className="sticky top-16 space-y-5">
              {/* Sticky TOC */}
              {article.sections.length > 2 && (
                <nav className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Innhold</h3>
                  <div className="space-y-0.5">
                    {article.sections.map((s, i) => (
                      <button key={i} onClick={() => scrollToSection(i)} className={`flex items-center gap-2 w-full text-left text-[13px] py-1.5 px-2 rounded transition-all leading-snug ${activeSection === i ? 'text-aqua-700 bg-aqua-50 font-medium' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>
                        <span className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center flex-shrink-0 transition-colors ${activeSection === i ? 'bg-aqua-600 text-white' : 'bg-slate-100 text-slate-400'}`}>{i + 1}</span>
                        <span className="line-clamp-1">{s.heading}</span>
                      </button>
                    ))}
                  </div>
                  
                  {/* Reading progress in sidebar */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                      <span>Lesefremgang</span>
                      <span className="font-mono">{readProgress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-aqua-500 to-aqua-400 transition-all duration-300" style={{ width: readProgress + '%' }} />
                    </div>
                  </div>
                </nav>
              )}

              {/* Quick links */}
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Nyttige lenker</h3>
                <div className="space-y-2">
                  <Link href="/artikkel/komplett-kjopsguide-2026/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-aqua-700 transition-colors"><IconTarget size={14} color="#94A3B8" />Kjopsguide 2026</Link>
                  <Link href="/feilkode/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-aqua-700 transition-colors"><IconAlertTriangle size={14} color="#94A3B8" />Feilkoder alle merker</Link>
                  <Link href="/bruksanvisning/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-aqua-700 transition-colors"><IconBookOpen size={14} color="#94A3B8" />Bruksanvisninger</Link>
                  <Link href="/verktoy/energikalkulator/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-aqua-700 transition-colors"><IconZap size={14} color="#94A3B8" />Energikalkulator</Link>
                  <Link href="/ordliste/" className="flex items-center gap-2 text-sm text-slate-600 hover:text-aqua-700 transition-colors"><IconLightbulb size={14} color="#94A3B8" />Ordliste A til A</Link>
                </div>
              </div>

              {/* CTA box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-aqua-50 to-aqua-100/50 border border-aqua-200/60">
                <div className="flex items-center gap-2 mb-2">
                  <IconWasher size={16} color="#0D9488" />
                  <h3 className="text-sm font-bold text-slate-900">Finn din vaskemaskin</h3>
                </div>
                <p className="text-xs text-slate-600 mb-3">Svar pa 3 sporsmal og fa personlig anbefaling.</p>
                <Link href="/verktoy/vaskemaskinvelger/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua-700 hover:text-aqua-800 transition-colors">
                  Start quizen
                  <IconArrow size={12} color="#0F766E" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Scroll to top */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-aqua-600 text-white shadow-xl hover:bg-aqua-700 hover:shadow-2xl transition-all flex items-center justify-center hover:scale-105" aria-label="Tilbake til toppen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15" /></svg>
        </button>
      )}
    </>
  )
}
