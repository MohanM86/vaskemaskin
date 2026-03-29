'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioSites } from '@/data/portfolio'

export default function Header() {
  var [openMenu, setOpenMenu] = useState<string | null>(null)
  var [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-grey-200">
        <nav className="flex items-center justify-between px-5 lg:px-12 h-[72px]">
          <Link href="/" className="font-bold text-[1.4rem] text-brand-blue tracking-tight">
            vaskemaskin.no
          </Link>

          <ul className="hidden lg:flex items-center h-full gap-0">
            <NavItem
              label="Guider"
              hasDropdown
              isOpen={openMenu === 'guider'}
              onEnter={function() { setOpenMenu('guider') }}
              onLeave={function() { setOpenMenu(null) }}
            >
              <MegaGuider />
            </NavItem>
            <NavItem
              label="Merker"
              hasDropdown
              isOpen={openMenu === 'merker'}
              onEnter={function() { setOpenMenu('merker') }}
              onLeave={function() { setOpenMenu(null) }}
            >
              <MegaMerker />
            </NavItem>
            <NavLink href="/best-i-test/" label="Best i test" />
            <NavLink href="/forhandler/" label="Forhandlere" />
            <NavLink href="/faq/" label="FAQ" />
          </ul>

          <button
            onClick={function() { setSearchOpen(true) }}
            className="flex items-center gap-2 text-grey-400 hover:text-brand-blue transition-colors text-sm"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="6.5" cy="6.5" r="5.5" />
              <line x1="10.5" y1="10.5" x2="15" y2="15" />
            </svg>
            <span className="hidden sm:inline">Sok</span>
          </button>
        </nav>
      </header>

      {searchOpen && <SearchOverlay onClose={function() { setSearchOpen(false) }} />}
    </>
  )
}

function NavItem(props: {
  label: string
  hasDropdown?: boolean
  isOpen?: boolean
  onEnter?: () => void
  onLeave?: () => void
  children?: React.ReactNode
}) {
  return (
    <li
      className="relative flex items-center h-full"
      onMouseEnter={props.onEnter}
      onMouseLeave={props.onLeave}
    >
      <span className="flex items-center gap-1 px-5 h-[72px] text-[0.88rem] font-semibold text-ink-muted hover:text-brand-blue transition-colors cursor-pointer leading-[72px]">
        {props.label}
        {props.hasDropdown && (
          <span className={'text-[0.55rem] transition-transform' + (props.isOpen ? ' rotate-180' : '')}>
            &#9660;
          </span>
        )}
      </span>
      {props.hasDropdown && props.isOpen && (
        <div className="absolute top-[72px] left-0 right-0 fixed w-screen bg-white border-b border-grey-200 shadow-[0_20px_60px_rgba(0,0,0,0.07)] z-50" style={{ left: '50%', transform: 'translateX(-50%)' }}>
          {props.children}
        </div>
      )}
    </li>
  )
}

function NavLink(props: { href: string; label: string }) {
  return (
    <li className="flex items-center h-full">
      <Link
        href={props.href}
        className="flex items-center px-5 h-[72px] text-[0.88rem] font-semibold text-ink-muted hover:text-brand-blue transition-colors leading-[72px]"
      >
        {props.label}
      </Link>
    </li>
  )
}

function MegaGuider() {
  return (
    <div className="grid grid-cols-4 gap-10 px-5 lg:px-12 py-10">
      <MegaCol title="Kjopsguider">
        <MegaLink href="/guide/vaskemaskin-best-i-test-2026/">Best i test 2026</MegaLink>
        <MegaLink href="/guide/velg-riktig-vaskemaskin/">Velg riktig vaskemaskin</MegaLink>
        <MegaLink href="/guide/hvor-mange-kg-trenger-du/">Hvor mange kg trenger du?</MegaLink>
        <MegaLink href="/guide/dyr-vs-billig-vaskemaskin/">Dyr vs billig vaskemaskin</MegaLink>
        <MegaLink href="/guide/vaskemaskin-for-studenter/">Vaskemaskin for studenter</MegaLink>
      </MegaCol>
      <MegaCol title="Vedlikehold">
        <MegaLink href="/guide/rense-vaskemaskinen/">Rense vaskemaskinen</MegaLink>
        <MegaLink href="/guide/fjerne-vond-lukt/">Fjerne vond lukt</MegaLink>
        <MegaLink href="/guide/avkalking-vaskemaskin/">Avkalking</MegaLink>
        <MegaLink href="/guide/bytte-filter/">Bytte filter</MegaLink>
        <MegaLink href="/guide/feilsoking-vaskemaskin/">Feilsoking</MegaLink>
      </MegaCol>
      <MegaCol title="Okonomi og strom">
        <MegaLink href="/guide/stromforbruk-vaskemaskin/">Stromforbruk per vask</MegaLink>
        <MegaLink href="/guide/40-vs-60-grader/">40 vs 60 grader</MegaLink>
        <MegaLink href="/guide/energimerking-forklart/">Energimerking forklart</MegaLink>
        <MegaLink href="/guide/vannforbruk-vaskemaskin/">Vannforbruk</MegaLink>
        <MegaLink href="/guide/spare-strom-vaskemaskin/">Spare strom</MegaLink>
      </MegaCol>
      <div className="bg-brand-blue rounded-lg p-8 text-white">
        <p className="text-[0.65rem] uppercase tracking-[0.14em] font-bold text-white/50 mb-3">Anbefalt lesing</p>
        <h3 className="text-lg font-medium mb-2">Vaskemaskin best i test 2026</h3>
        <p className="text-sm text-white/70 leading-relaxed">
          Vi har testet 18 vaskemaskiner og karet vinnerne i fire kategorier. Se hvilke modeller som er verdt pengene.
        </p>
        <Link href="/guide/vaskemaskin-best-i-test-2026/" className="inline-block mt-4 text-sm font-bold text-white/90 hover:text-white">
          Les guiden &#8594;
        </Link>
      </div>
    </div>
  )
}

function MegaMerker() {
  return (
    <div className="grid grid-cols-4 gap-10 px-5 lg:px-12 py-10">
      <MegaCol title="Premium">
        <MegaLink href="/merke/miele/">Miele <MegaScore>4.8</MegaScore></MegaLink>
        <MegaLink href="/merke/bosch/">Bosch <MegaScore>4.5</MegaScore></MegaLink>
        <MegaLink href="/merke/aeg/">AEG <MegaScore>4.4</MegaScore></MegaLink>
        <MegaLink href="/merke/siemens/">Siemens <MegaScore>4.4</MegaScore></MegaLink>
        <MegaLink href="/merke/asko/">ASKO <MegaScore>4.3</MegaScore></MegaLink>
      </MegaCol>
      <MegaCol title="Mellom-segment">
        <MegaLink href="/merke/samsung/">Samsung <MegaScore>4.3</MegaScore></MegaLink>
        <MegaLink href="/merke/electrolux/">Electrolux <MegaScore>4.2</MegaScore></MegaLink>
        <MegaLink href="/merke/lg/">LG <MegaScore>4.2</MegaScore></MegaLink>
        <MegaLink href="/merke/whirlpool/">Whirlpool <MegaScore>3.9</MegaScore></MegaLink>
        <MegaLink href="/merke/gram/">Gram <MegaScore>3.8</MegaScore></MegaLink>
      </MegaCol>
      <MegaCol title="Budsjett">
        <MegaLink href="/merke/beko/">Beko <MegaScore>3.7</MegaScore></MegaLink>
        <MegaLink href="/merke/haier/">Haier <MegaScore>3.6</MegaScore></MegaLink>
        <MegaLink href="/merke/candy/">Candy <MegaScore>3.5</MegaScore></MegaLink>
        <MegaLink href="/merke/gorenje/">Gorenje <MegaScore>3.4</MegaScore></MegaLink>
        <MegaLink href="/merke/hisense/">Hisense <MegaScore>3.5</MegaScore></MegaLink>
      </MegaCol>
      <MegaCol title="Sammenligninger">
        <MegaLink href="/merke/sammenligning/miele-vs-bosch/">Miele vs Bosch</MegaLink>
        <MegaLink href="/merke/sammenligning/samsung-vs-lg/">Samsung vs LG</MegaLink>
        <MegaLink href="/merke/sammenligning/aeg-vs-electrolux/">AEG vs Electrolux</MegaLink>
        <MegaLink href="/merke/">Alle merker A-A</MegaLink>
      </MegaCol>
    </div>
  )
}

function MegaCol(props: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[0.68rem] uppercase tracking-[0.16em] text-grey-400 font-bold mb-5 pb-3 border-b border-grey-100">
        {props.title}
      </h4>
      <div className="flex flex-col">{props.children}</div>
    </div>
  )
}

function MegaLink(props: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={props.href}
      className="text-[0.9rem] font-medium text-ink-soft py-[0.45rem] hover:text-brand-blue hover:pl-2 transition-all"
    >
      {props.children}
    </Link>
  )
}

function MegaScore(props: { children: React.ReactNode }) {
  return (
    <span className="text-[0.72rem] text-grey-300 font-normal ml-1.5">{props.children}</span>
  )
}

function SearchOverlay(props: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-start justify-center pt-24" onClick={props.onClose}>
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4"
        onClick={function(e) { e.stopPropagation() }}
      >
        <div className="flex items-center border-b border-grey-100">
          <svg className="ml-5" width="20" height="20" fill="none" stroke="#7E8691" strokeWidth="2">
            <circle cx="8" cy="8" r="7" />
            <line x1="13" y1="13" x2="19" y2="19" />
          </svg>
          <input
            type="text"
            placeholder="Sok blant guider, merker, kommuner og sporsmal..."
            className="flex-1 px-4 py-5 text-lg outline-none"
            autoFocus
          />
          <button onClick={props.onClose} className="px-5 text-grey-400 hover:text-ink text-xl">
            &#10005;
          </button>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-widest text-grey-400 font-bold mb-3">Populare sok</p>
          <div className="flex flex-wrap gap-2">
            {['Vaskemaskin best i test', 'Miele', 'Rense vaskemaskin', 'Stromforbruk', 'Samsung vs LG'].map(function(term) {
              return (
                <span key={term} className="px-3 py-1.5 bg-grey-50 border border-grey-100 rounded text-sm text-ink-muted hover:border-brand-blue hover:text-brand-blue cursor-pointer transition-colors">
                  {term}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
