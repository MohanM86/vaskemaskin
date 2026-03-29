'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconArrow, IconWasher } from './Icons'

interface SidebarSection {
  id: string
  label: string
}

interface Props {
  sections?: SidebarSection[]
  showQuiz?: boolean
  showEnergi?: boolean
  relatedLinks?: { href: string; label: string }[]
  ctaTitle?: string
  ctaText?: string
  ctaLink?: string
  ctaLinkText?: string
}

export default function PageSidebar({ sections, showQuiz = true, showEnergi = true, relatedLinks, ctaTitle, ctaText, ctaLink, ctaLinkText }: Props) {
  const [activeSection, setActiveSection] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 600)
      if (sections && sections.length > 0) {
        const els = document.querySelectorAll('[data-section-id]')
        let current = 0
        els.forEach((el, i) => { if (el.getBoundingClientRect().top < 150) current = i })
        setActiveSection(current)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.querySelector(`[data-section-id="${id}"]`)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-16 space-y-5">
          {sections && sections.length > 2 && (
            <nav className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Innhold</h3>
              <div className="space-y-0.5">
                {sections.map((s, i) => (
                  <button key={s.id} onClick={() => scrollTo(s.id)} className={`block w-full text-left text-[13px] py-1.5 px-2 rounded transition-all leading-snug ${activeSection === i ? 'text-aqua-700 bg-aqua-50 font-medium' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}>{s.label}</button>
                ))}
              </div>
            </nav>
          )}

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Se også</h3>
              <div className="space-y-2">
                {relatedLinks.map((l, i) => (<Link key={i} href={l.href} className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">{l.label}</Link>))}
              </div>
            </div>
          )}

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Nyttige verktøy</h3>
            <div className="space-y-2">
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Kjøpsguide 2026</Link>
              <Link href="/feilkode/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Feilkoder alle merker</Link>
              <Link href="/bruksanvisning/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Bruksanvisninger</Link>
              {showEnergi && <Link href="/verktoy/energikalkulator/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Energikalkulator</Link>}
              <Link href="/ordliste/" className="block text-sm text-slate-600 hover:text-aqua-700 transition-colors">Ordliste A til Å</Link>
            </div>
          </div>

          {showQuiz && (
            <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="text-sm font-bold text-slate-900 mb-2">{ctaTitle || 'Finn din vaskemaskin'}</h3>
              <p className="text-xs text-slate-600 mb-3">{ctaText || 'Svar på 3 spørsmål og få personlig anbefaling.'}</p>
              <Link href={ctaLink || '/verktoy/vaskemaskinvelger/'} className="inline-flex items-center gap-1.5 text-xs font-semibold text-aqua-700 hover:text-aqua-800 transition-colors">
                {ctaLinkText || 'Start quizen'} <IconArrow size={12} color="#0F766E" />
              </Link>
            </div>
          )}
        </div>
      </aside>

      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-aqua-600 text-white shadow-lg hover:bg-aqua-700 transition-all flex items-center justify-center" aria-label="Tilbake til toppen">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15" /></svg>
        </button>
      )}
    </>
  )
}
