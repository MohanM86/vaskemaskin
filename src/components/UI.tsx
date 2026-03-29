'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { IconClock, IconChevron } from './Icons'
import type { Article } from '@/data/articles'

/* ───── Breadcrumbs ───── */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Broedsmuler" className="mb-6 text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-slate-300">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-aqua-700 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ───── FAQ Accordion ───── */
export function FAQSection({ items, heading }: { items: { question: string; answer: string }[]; heading?: string }) {
  return (
    <section className="mt-12">
      <h2 className="section-heading text-2xl mb-6">{heading || 'Ofte stilte spoersmaal'}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <FAQItem key={i} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  return (
    <details ref={detailsRef} className="group border border-slate-200 rounded-lg overflow-hidden bg-white">
      <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-3 flex-shrink-0 transition-transform group-open:rotate-180">
          <IconChevron size={16} color="#94A3B8" />
        </span>
      </summary>
      <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
        {answer}
      </div>
    </details>
  )
}

/* ───── Article Card ───── */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={'/artikkel/' + article.slug + '/'}
      className="card group block"
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-aqua-600 bg-aqua-50 px-2.5 py-1 rounded-full">
            {article.category.replace(/-/g, ' ')}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <IconClock size={12} />
            {article.readingTime}
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
      </div>
    </Link>
  )
}

/* ───── Scroll Reveal Observer ───── */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
