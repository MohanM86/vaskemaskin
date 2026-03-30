'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconArrow, IconWasher } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

export default function KapasitetskalkulatorPage() {
  const [personer, setPersoner] = useState(3)
  const [vaskPerUke, setVaskPerUke] = useState(4)
  const [vaskerDyner, setVaskerDyner] = useState(false)
  const [harBarn, setHarBarn] = useState(false)
  const [harKjaledyr, setHarKjaledyr] = useState(false)

  let anbefalKg = 7
  if (personer <= 2) anbefalKg = 7
  else if (personer <= 4) anbefalKg = 8
  else anbefalKg = 10

  if (vaskPerUke >= 6) anbefalKg = Math.max(anbefalKg, 9)
  if (harBarn) anbefalKg = Math.max(anbefalKg, 8)
  if (harKjaledyr) anbefalKg = Math.max(anbefalKg, 9)

  let anbefalLiter = anbefalKg * 7.5
  if (vaskerDyner) anbefalLiter = Math.max(anbefalLiter, 65)

  const trommelNote = vaskerDyner
    ? 'Du trenger minimum 60 liter trommelvolum for å vaske enkeltdyne, og 70 liter for dobbeltdyne.'
    : ''

  const typeAnbefaling = anbefalKg <= 7
    ? 'En kompakt maskin på 7 kg passer godt. Både frontmater og toppmater fungerer for deg.'
    : anbefalKg <= 9
    ? 'En standard frontmater på ' + anbefalKg + ' kg er det beste valget. Dette er det vanligste segmentet med flest modeller å velge mellom.'
    : 'En stor frontmater på ' + anbefalKg + ' kg eller mer dekker behovene til en stor husstand. Se etter modeller med sensor som tilpasser vannmengden til tøymengden.'

  const sections = [
    { id: 'kalkulator', label: 'Dine behov' },
    { id: 'resultat', label: 'Anbefaling' },
    { id: 'guide', label: 'Kapasitetsguide' },
  ]

  return (
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-aqua-700">Hjem</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <Link href="/verktoy/" className="hover:text-aqua-700">Verktøy</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <span className="text-slate-700 font-medium">Kapasitetskalkulator</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconWasher size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Kapasitetskalkulator</h1>
              <p className="text-sm text-slate-500">Finn riktig trommelstørrelse for din husstand</p>
            </div>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">For stor maskin sløser strøm og vann. For liten maskin gir dårlig vaskeresultat og hyppigere vask. Denne kalkulatoren hjelper deg å finne den perfekte størrelsen.</p>

          <section data-section-id="kalkulator" className="scroll-mt-20">
            <div className="p-6 rounded-xl border border-slate-200 bg-white mb-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Antall personer i husstanden: <span className="text-aqua-600 font-bold">{personer}</span></label>
                <input type="range" min="1" max="8" value={personer} onChange={e => setPersoner(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>4</span><span>8</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Antall vask per uke: <span className="text-aqua-600 font-bold">{vaskPerUke}</span></label>
                <input type="range" min="1" max="10" value={vaskPerUke} onChange={e => setVaskPerUke(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>5</span><span>10</span></div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-700 block">Spesielle behov</label>
                {[
                  { checked: vaskerDyner, set: setVaskerDyner, label: 'Jeg vasker dyner og store plagg selv', desc: 'Krever minimum 60 liter trommel' },
                  { checked: harBarn, set: setHarBarn, label: 'Jeg har barn under 10 år', desc: 'Mer tøy, hyppigere vask, flekkete klær' },
                  { checked: harKjaledyr, set: setHarKjaledyr, label: 'Jeg har kjæledyr', desc: 'Dyrehår krever større kapasitet' },
                ].map((opt, i) => (
                  <button key={i} onClick={() => opt.set(!opt.checked)} className={'flex items-start gap-3 p-3 rounded-lg border text-left w-full transition-all ' + (opt.checked ? 'border-aqua-400 bg-aqua-50' : 'border-slate-200 hover:border-aqua-300')}>
                    <div className={'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ' + (opt.checked ? 'border-aqua-600 bg-aqua-600' : 'border-slate-300')}>
                      {opt.checked && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">{opt.label}</div>
                      <div className="text-xs text-slate-500">{opt.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section data-section-id="resultat" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Vår anbefaling</h2>

            <div className="p-6 rounded-xl border-2 border-aqua-300 bg-aqua-50 mb-6">
              <div className="grid grid-cols-2 gap-6 mb-5">
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-aqua-600">{anbefalKg}</div>
                  <div className="text-sm text-slate-600 mt-1">kilo kapasitet</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-4xl font-bold text-aqua-600">{Math.round(anbefalLiter)}</div>
                  <div className="text-sm text-slate-600 mt-1">liter trommelvolum</div>
                </div>
              </div>
              <p className="text-sm text-aqua-800 leading-relaxed">{typeAnbefaling}</p>
              {trommelNote && <p className="text-sm text-aqua-700 mt-2">{trommelNote}</p>}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary inline-flex items-center gap-2 text-sm">Les kjøpsguiden <IconArrow size={12} color="white" /></Link>
              <Link href="/verktoy/vaskemaskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Finn riktig maskin <IconArrow size={12} color="#0F766E" /></Link>
            </div>
          </section>

          <section data-section-id="guide" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Kapasitetsguide</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">6 til 7 kg: Singel eller par</div><p className="text-xs text-slate-500">Passer for en til to personer som vasker tre til fire ganger i uken. Kompakt og rimelig. Finnes som både frontmater og toppmater.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">8 til 9 kg: Liten til middels familie</div><p className="text-xs text-slate-500">Det vanligste segmentet i Norge. Passer for tre til fire personer. Stor nok til å vaske sengetøy og håndklær effektivt. Flest modeller å velge mellom.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">10 til 12 kg: Stor familie</div><p className="text-xs text-slate-500">For fem eller flere personer eller husstander med mye tøy. Stor nok til å vaske dyner. Velg en modell med vektsensor for å spare strøm på små lass.</p></div>
            </div>
          </section>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
          { href: '/verktoy/energikalkulator/', label: 'Energikalkulator' },
          { href: '/verktoy/sammenlign-pris/', label: 'Sammenlign pris per år' },
          { href: '/artikkel/vaske-dyne-i-vaskemaskin/', label: 'Vaske dyne i maskin' },
        ]} ctaTitle="Finn din maskin" ctaText="Quiz med personlig anbefaling." ctaLink="/verktoy/vaskemaskinvelger/" ctaLinkText="Ta quizen" />
      </div>
    </div>
  )
}
