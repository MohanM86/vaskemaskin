'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { articles } from '@/data/articles'
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

  function handleMouseEnter(menu: string) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveMenu(menu)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const latestArticles = articles.slice(0, 4)

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-white'}`}>
      <div className="container-site">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-aqua-600 transition-transform group-hover:scale-105">
              <IconWasher size={28} />
            </div>
            <span className="font-serif text-xl font-bold text-slate-900">
              Vaskemaskin<span className="text-aqua-600">.no</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Kategorier dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('kategorier')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeMenu === 'kategorier' ? 'text-aqua-700 bg-aqua-50' : 'text-slate-700 hover:text-aqua-700 hover:bg-slate-50'}`}>
                Kategorier
                <IconChevron size={14} direction={activeMenu === 'kategorier' ? 'up' : 'down'} />
              </button>
              {/* Bridge div */}
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'kategorier' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <Link
                      key={cat.slug}
                      href={'/kategori/' + cat.slug + '/'}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-aqua-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-aqua-50 flex items-center justify-center text-aqua-600 group-hover:bg-aqua-100 transition-colors flex-shrink-0">
                        <CategoryIcon slug={cat.slug} size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{cat.shortName}</div>
                        <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{cat.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Merker dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('merker')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeMenu === 'merker' ? 'text-aqua-700 bg-aqua-50' : 'text-slate-700 hover:text-aqua-700 hover:bg-slate-50'}`}>
                Merker
                <IconChevron size={14} direction={activeMenu === 'merker' ? 'up' : 'down'} />
              </button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'merker' && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[400px] bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                  <div className="grid grid-cols-2 gap-2">
                    {brands.map(brand => (
                      <Link
                        key={brand.slug}
                        href={'/merke/' + brand.slug + '/'}
                        className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-aqua-50 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                          {brand.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">{brand.name}</div>
                          <div className="text-[11px] text-slate-400">{brand.country}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Artikler dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('artikler')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${activeMenu === 'artikler' ? 'text-aqua-700 bg-aqua-50' : 'text-slate-700 hover:text-aqua-700 hover:bg-slate-50'}`}>
                Artikler
                <IconChevron size={14} direction={activeMenu === 'artikler' ? 'up' : 'down'} />
              </button>
              <div className="absolute left-0 right-0 h-3" />
              {activeMenu === 'artikler' && (
                <div className="absolute top-[calc(100%+12px)] right-0 w-[360px] bg-white rounded-xl shadow-xl border border-slate-200 p-5">
                  <div className="space-y-1">
                    {latestArticles.map(article => (
                      <Link
                        key={article.slug}
                        href={'/artikkel/' + article.slug + '/'}
                        className="block p-3 rounded-lg hover:bg-aqua-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-slate-900 line-clamp-1">{article.title}</div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-1">{article.excerpt}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <Link href="/artikkel/komplett-kjopsguide-2026/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">
                      Se alle artikler
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/om-oss/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-aqua-700 hover:bg-slate-50 rounded-lg transition-colors">
              Om oss
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
            aria-label={mobileOpen ? 'Lukk meny' : 'Aapne meny'}
          >
            {mobileOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="container-site py-4 space-y-4">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Kategorier</div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(cat => (
                  <Link
                    key={cat.slug}
                    href={'/kategori/' + cat.slug + '/'}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-aqua-50 text-sm text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    <CategoryIcon slug={cat.slug} size={16} color="#0D9488" />
                    {cat.shortName}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Merker</div>
              <div className="grid grid-cols-2 gap-2">
                {brands.slice(0, 8).map(brand => (
                  <Link
                    key={brand.slug}
                    href={'/merke/' + brand.slug + '/'}
                    className="p-2 rounded-lg hover:bg-aqua-50 text-sm text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <Link href="/om-oss/" className="block p-2 text-sm text-slate-700" onClick={() => setMobileOpen(false)}>
                Om oss
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
