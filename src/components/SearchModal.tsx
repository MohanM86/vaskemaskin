'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { IconSearch } from './Icons'
import { buildSearchIndex, searchItems, SearchItem } from '@/data/searchIndex'

const typeLabels: Record<string, { label: string; color: string }> = {
  kategori:       { label: 'Kategori',       color: 'bg-aqua-100 text-aqua-700' },
  merke:          { label: 'Merke',          color: 'bg-blue-100 text-blue-700' },
  artikkel:       { label: 'Artikkel',       color: 'bg-amber-100 text-amber-700' },
  feilkode:       { label: 'Feilkode',       color: 'bg-red-100 text-red-700' },
  ordliste:       { label: 'Ordliste',       color: 'bg-purple-100 text-purple-700' },
  bruksanvisning: { label: 'Bruksanvisning', color: 'bg-emerald-100 text-emerald-700' },
  sammenligning:  { label: 'Sammenligning',  color: 'bg-sky-100 text-sky-700' },
  bedrift:        { label: 'Bedrift',        color: 'bg-slate-100 text-slate-700' },
  verktoy:        { label: 'Verktøy',        color: 'bg-teal-100 text-teal-700' },
}

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const allItems = useMemo(() => buildSearchIndex(), [])
  const results = useMemo(() => searchItems(query, allItems), [query, allItems])

  const close = useCallback(() => { setOpen(false); setQuery(''); setActive(0) }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(true) }
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => { setActive(0) }, [query])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)) }
    if (e.key === 'Enter' && results[active]) { close() }
  }

  useEffect(() => {
    if (listRef.current && results.length > 0) {
      const el = listRef.current.children[active] as HTMLElement | undefined
      if (el) el.scrollIntoView({ block: 'nearest' })
    }
  }, [active, results.length])

  const popular: SearchItem[] = useMemo(() => [
    ...allItems.filter(i => i.type === 'artikkel').slice(0, 3),
    ...allItems.filter(i => i.type === 'verktoy').slice(0, 2),
  ], [allItems])

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-aqua-300 hover:bg-aqua-50 transition-all text-sm text-slate-500 group" aria-label="Søk">
        <IconSearch size={16} />
        <span className="hidden sm:inline">Søk...</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-400 border border-slate-200 ml-2 group-hover:bg-aqua-50 group-hover:border-aqua-200">
          <span className="text-xs">&#8984;</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh]" onClick={close}>
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />

          <div className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
              <IconSearch size={20} color="#94a3b8" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Søk etter artikler, merker, feilkoder..."
                className="flex-1 text-base text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                autoComplete="off"
                spellCheck={false}
              />
              <button onClick={close} className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors font-medium">ESC</button>
            </div>

            <div ref={listRef} className="max-h-[50vh] overflow-y-auto overscroll-contain">
              {query.length < 2 ? (
                <div className="p-4">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Populære sider</div>
                  {popular.map((item, i) => (
                    <ResultRow key={item.href} item={item} isActive={false} onClose={close} />
                  ))}
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-3">Hurtiglenker</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Alle merker', href: '/merker/' },
                      { label: 'Feilkoder', href: '/feilkode/' },
                      { label: 'Ordliste', href: '/ordliste/' },
                      { label: 'Bruksanvisninger', href: '/bruksanvisning/' },
                      { label: 'Bedrift', href: '/bedrift/' },
                      { label: 'Finn butikk', href: '/fylker/' },
                    ].map(l => (
                      <Link key={l.href} href={l.href} onClick={close} className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600 hover:bg-aqua-50 hover:text-aqua-700 transition-colors">{l.label}</Link>
                    ))}
                  </div>
                </div>
              ) : results.length > 0 ? (
                <div className="py-2">
                  {results.map((item, i) => (
                    <ResultRow key={item.href} item={item} isActive={i === active} onClose={close} />
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-slate-500 text-sm">Ingen resultater for &laquo;{query}&raquo;</p>
                  <p className="text-slate-400 text-xs mt-2">Prøv et annet søkeord, f.eks. &laquo;Samsung feilkode&raquo; eller &laquo;energimerking&raquo;</p>
                </div>
              )}
            </div>

            <div className="px-4 py-2.5 border-t border-slate-100 flex items-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">&uarr;</kbd><kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">&darr;</kbd> naviger</span>
              <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">Enter</kbd> apne</span>
              <span className="flex items-center gap-1"><kbd className="px-1 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-[10px]">Esc</kbd> lukk</span>
              <span className="ml-auto">{allItems.length} sider indeksert</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ResultRow({ item, isActive, onClose }: { item: SearchItem; isActive: boolean; onClose: () => void }) {
  const t = typeLabels[item.type] || { label: item.type, color: 'bg-slate-100 text-slate-600' }
  return (
    <Link
      href={item.href}
      onClick={onClose}
      className={'flex items-start gap-3 px-4 py-2.5 transition-colors ' + (isActive ? 'bg-aqua-50' : 'hover:bg-slate-50')}
    >
      <span className={'mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide whitespace-nowrap ' + t.color}>{t.label}</span>
      <div className="min-w-0 flex-1">
        <div className={'text-sm font-medium truncate ' + (isActive ? 'text-aqua-700' : 'text-slate-900')}>{item.title}</div>
        <div className="text-xs text-slate-500 truncate mt-0.5">{item.desc}</div>
      </div>
      {isActive && <span className="text-aqua-500 mt-1 text-xs flex-shrink-0">&rarr;</span>}
    </Link>
  )
}
