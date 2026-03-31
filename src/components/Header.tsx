'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { articles } from '@/data/articles'
import { errorBrands } from '@/data/feilkoder'
import { comparisons } from '@/data/sammenligninger'
import { manuals } from '@/data/bruksanvisning'
import { CategoryIcon, IconWasher, IconMenu, IconClose, IconChevron } from './Icons'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function enter(menu: string) { if (timeoutRef.current) clearTimeout(timeoutRef.current); setActiveMenu(menu) }
  function leave() { timeoutRef.current = setTimeout(() => setActiveMenu(null), 150) }

  const navCls = (id: string) => 'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ' + (activeMenu === id ? 'text-aqua-700 bg-aqua-50' : 'text-slate-700 hover:text-aqua-700 hover:bg-slate-50')

  return (
    <header className={'sticky top-0 z-50 transition-all duration-300 ' + (scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white')}>
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-aqua-600 transition-transform group-hover:scale-105"><IconWasher size={28} /></div>
            <span className="font-serif text-xl font-bold text-slate-900">Vaskemaskin<span className="text-aqua-600">.no</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {/* Kategorier */}
            <div className="relative" onMouseEnter={() => enter('kat')} onMouseLeave={leave}>
              <button className={navCls('kat')}>Kategorier<IconChevron size={14} direction={activeMenu === 'kat' ? 'up' : 'down'} /></button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'kat' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[560px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <Link key={cat.slug} href={'/kategori/' + cat.slug + '/'} className="flex items-start gap-3 p-3 rounded-lg hover:bg-aqua-50 transition-colors group">
                      <div className="w-9 h-9 rounded-lg bg-aqua-50 flex items-center justify-center text-aqua-600 group-hover:bg-aqua-100 transition-colors flex-shrink-0"><CategoryIcon slug={cat.slug} size={18} /></div>
                      <div><div className="text-sm font-semibold text-slate-900">{cat.shortName}</div><div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{cat.description}</div></div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Merker */}
            <div className="relative" onMouseEnter={() => enter('merker')} onMouseLeave={leave}>
              <button className={navCls('merker')}>Merker<IconChevron size={14} direction={activeMenu === 'merker' ? 'up' : 'down'} /></button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'merker' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[520px] bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Premium og storselgere</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">{brands.slice(0, 8).map(b => (<Link key={b.slug} href={'/merke/' + b.slug + '/'} className="p-2 rounded-lg hover:bg-aqua-50 text-sm font-medium text-slate-700 text-center transition-colors">{b.name}</Link>))}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Flere merker</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">{brands.slice(8).map(b => (<Link key={b.slug} href={'/merke/' + b.slug + '/'} className="p-2 rounded-lg hover:bg-aqua-50 text-xs text-slate-500 text-center transition-colors">{b.name}</Link>))}</div>
                  <div className="border-t border-slate-100 pt-3"><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sammenlign</div><div className="flex flex-wrap gap-2">{comparisons.slice(0, 4).map(c => (<Link key={c.slug} href={'/sammenligning/' + c.slug + '/'} className="text-xs text-aqua-600 hover:text-aqua-700">{c.brand1} vs {c.brand2}</Link>))}</div></div>
                </div>
              )}
            </div>

            {/* Guider */}
            <div className="relative" onMouseEnter={() => enter('guider')} onMouseLeave={leave}>
              <button className={navCls('guider')}>Guider<IconChevron size={14} direction={activeMenu === 'guider' ? 'up' : 'down'} /></button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'guider' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Kjopsguider</div>{articles.filter(a => a.category === 'kjopsguide').slice(0, 3).map(a => (<Link key={a.slug} href={'/artikkel/' + a.slug + '/'} className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">{a.title}</Link>))}</div>
                    <div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Vedlikehold</div>{articles.filter(a => a.category === 'vedlikehold').slice(0, 3).map(a => (<Link key={a.slug} href={'/artikkel/' + a.slug + '/'} className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">{a.title}</Link>))}</div>
                  </div>
                  <div className="border-t border-slate-100 mt-3 pt-3 flex gap-4">
                    <Link href="/bruksanvisning/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Bruksanvisninger</Link>
                    <Link href="/ordliste/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Ordliste A til A</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Bedrift */}
            <div className="relative" onMouseEnter={() => enter('bedrift')} onMouseLeave={leave}>
              <button className={navCls('bedrift')}>Bedrift<IconChevron size={14} direction={activeMenu === 'bedrift' ? 'up' : 'down'} /></button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'bedrift' && (
                <div className="absolute top-[calc(100%+12px)] right-0 w-[480px] bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Bransjer</div>
                      <Link href="/bedrift/hotell/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Hotell</Link>
                      <Link href="/bedrift/sykehus/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Sykehus</Link>
                      <Link href="/bedrift/barnehage/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Barnehage</Link>
                      <Link href="/bedrift/borettslag/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Borettslag</Link>
                      <Link href="/bedrift/vaskeri/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Vaskeri</Link>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ressurser</div>
                      <Link href="/bedrift/prisguide/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Prisguide bedrift</Link>
                      <Link href="/bedrift/hygienestandarder/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Hygienestandarder</Link>
                      <Link href="/bedrift/verktoy/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Bedriftsverktoy</Link>
                      <Link href="/bedrift/verktoy/vaskeri-roi/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">ROI kalkulator</Link>
                      <Link href="/bedrift/verktoy/maskinvelger/" className="block py-1.5 text-sm text-slate-700 hover:text-aqua-700 transition-colors">Maskinvelger</Link>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 mt-3 pt-3">
                    <Link href="/bedrift/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se hele bedriftsseksjonen</Link>
                  </div>
                </div>
              )}
            </div>

            {/* Feilkoder */}
            <Link href="/feilkode/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-aqua-700 hover:bg-slate-50 rounded-lg transition-colors">Feilkoder</Link>

            {/* Finn butikk */}
            <Link href="/fylker/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-aqua-700 hover:bg-slate-50 rounded-lg transition-colors">Finn butikk</Link>
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-700" aria-label={mobileOpen ? 'Lukk meny' : 'Apne meny'}>
            {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="container-site py-4 space-y-4">
            <div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Kategorier</div><div className="grid grid-cols-2 gap-2">{categories.map(cat => (<Link key={cat.slug} href={'/kategori/' + cat.slug + '/'} className="flex items-center gap-2 p-2 rounded-lg hover:bg-aqua-50 text-sm text-slate-700" onClick={() => setMobileOpen(false)}><CategoryIcon slug={cat.slug} size={16} color="#0D9488" />{cat.shortName}</Link>))}</div></div>
            <div><div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Merker</div><div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{brands.slice(0, 12).map(b => (<Link key={b.slug} href={'/merke/' + b.slug + '/'} className="p-2 rounded-lg hover:bg-aqua-50 text-sm text-slate-700 text-center" onClick={() => setMobileOpen(false)}>{b.name}</Link>))}</div></div>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/feilkode/" className="p-3 rounded-lg bg-aqua-50 text-sm font-semibold text-aqua-700 text-center" onClick={() => setMobileOpen(false)}>Feilkoder</Link>
              <Link href="/bruksanvisning/" className="p-3 rounded-lg bg-aqua-50 text-sm font-semibold text-aqua-700 text-center" onClick={() => setMobileOpen(false)}>Bruksanvisning</Link>
              <Link href="/fylker/" className="p-3 rounded-lg bg-aqua-50 text-sm font-semibold text-aqua-700 text-center" onClick={() => setMobileOpen(false)}>Finn butikk</Link>
              <Link href="/ordliste/" className="p-3 rounded-lg bg-aqua-50 text-sm font-semibold text-aqua-700 text-center" onClick={() => setMobileOpen(false)}>Ordliste</Link>
              <Link href="/bedrift/" className="p-3 rounded-lg bg-aqua-50 text-sm font-semibold text-aqua-700 text-center col-span-2" onClick={() => setMobileOpen(false)}>Bedrift og industri</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
