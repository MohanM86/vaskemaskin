'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconArrow, IconTrendingUp, IconTarget } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

export default function ReparereEllerByttePage() {
  const [maskinAlder, setMaskinAlder] = useState(7)
  const [reparasjonPris, setReparasjonPris] = useState(2500)
  const [nyMaskinPris, setNyMaskinPris] = useState(7000)
  const [merke, setMerke] = useState('mellomklasse')

  const forventetLevetid: Record<string, number> = { budsjett: 7, mellomklasse: 12, premium: 20 }
  const levetid = forventetLevetid[merke]
  const restLevetid = Math.max(0, levetid - maskinAlder)
  const restEtterRep = Math.min(restLevetid + 2, levetid - maskinAlder + 3)

  const kostnadRepPerAar = restEtterRep > 0 ? Math.round(reparasjonPris / restEtterRep) : 99999
  const nyLevetid = merke === 'budsjett' ? 7 : merke === 'mellomklasse' ? 12 : 18
  const kostnadNyPerAar = Math.round(nyMaskinPris / nyLevetid)

  const besparelseStrom = maskinAlder > 8 ? Math.round((maskinAlder - 5) * 50) : 0
  const effektivNyKostnad = kostnadNyPerAar - Math.round(besparelseStrom / nyLevetid * 10) / 10

  const anbefaling = kostnadRepPerAar < effektivNyKostnad * 1.2 && restLevetid > 2
    ? 'reparer'
    : 'bytt'

  const sections = [
    { id: 'kalkulator', label: 'Kalkulator' },
    { id: 'resultat', label: 'Resultat' },
    { id: 'tips', label: 'Når bør du bytte' },
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
            <span className="text-slate-700 font-medium">Reparere eller bytte</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconTrendingUp size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Reparere eller bytte vaskemaskin?</h1>
              <p className="text-sm text-slate-500">Finn ut hva som lønner seg for deg</p>
            </div>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">Når vaskemaskinen feiler står du overfor et vanskelig valg. Denne kalkulatoren hjelper deg å ta riktig beslutning basert på maskinens alder, reparasjonskostnad og prisen på en ny maskin.</p>

          <section data-section-id="kalkulator" className="scroll-mt-20">
            <div className="p-6 rounded-xl border border-slate-200 bg-white mb-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Maskinens alder: <span className="text-aqua-600 font-bold">{maskinAlder} år</span></label>
                <input type="range" min="1" max="20" value={maskinAlder} onChange={e => setMaskinAlder(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 år</span><span>10 år</span><span>20 år</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Reparasjonskostnad: <span className="text-aqua-600 font-bold">{reparasjonPris.toLocaleString()} kr</span></label>
                <input type="range" min="500" max="8000" step="250" value={reparasjonPris} onChange={e => setReparasjonPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>500 kr</span><span>4 000 kr</span><span>8 000 kr</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Pris ny maskin: <span className="text-aqua-600 font-bold">{nyMaskinPris.toLocaleString()} kr</span></label>
                <input type="range" min="3000" max="20000" step="500" value={nyMaskinPris} onChange={e => setNyMaskinPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>3 000 kr</span><span>10 000 kr</span><span>20 000 kr</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">Maskinens klasse</label>
                <div className="flex gap-2">
                  {(['budsjett', 'mellomklasse', 'premium'] as const).map(k => (
                    <button key={k} onClick={() => setMerke(k)} className={'flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ' + (merke === k ? 'bg-aqua-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{k === 'budsjett' ? 'Budsjett' : k === 'mellomklasse' ? 'Mellomklasse' : 'Premium'}</button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-2">Forventet levetid: {levetid} år for {merke}</p>
              </div>
            </div>
          </section>

          <section data-section-id="resultat" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Resultat</h2>

            {/* Animated comparison bars */}
            <div className="p-6 rounded-xl border-2 bg-white mb-4" style={{ borderColor: anbefaling === 'reparer' ? '#0D9488' : '#94A3B8' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Reparere</span>
                <span className="text-sm font-bold text-slate-900">{kostnadRepPerAar.toLocaleString()} kr/år</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-1">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: Math.min(100, (kostnadRepPerAar / Math.max(kostnadRepPerAar, kostnadNyPerAar)) * 100) + '%', backgroundColor: anbefaling === 'reparer' ? '#0D9488' : '#94A3B8' }} />
              </div>
              <p className="text-xs text-slate-400">{reparasjonPris.toLocaleString()} kr fordelt på anslagsvis {restEtterRep} år restlevetid</p>
            </div>

            <div className="p-6 rounded-xl border-2 bg-white mb-6" style={{ borderColor: anbefaling === 'bytt' ? '#0D9488' : '#94A3B8' }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Kjøpe ny</span>
                <span className="text-sm font-bold text-slate-900">{kostnadNyPerAar.toLocaleString()} kr/år</span>
              </div>
              <div className="h-3 rounded-full bg-slate-100 overflow-hidden mb-1">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: Math.min(100, (kostnadNyPerAar / Math.max(kostnadRepPerAar, kostnadNyPerAar)) * 100) + '%', backgroundColor: anbefaling === 'bytt' ? '#0D9488' : '#94A3B8' }} />
              </div>
              <p className="text-xs text-slate-400">{nyMaskinPris.toLocaleString()} kr fordelt på {nyLevetid} år{besparelseStrom > 0 ? ' (inkl. strømbesparelse)' : ''}</p>
            </div>

            <div className={'p-5 rounded-xl border-2 ' + (anbefaling === 'reparer' ? 'border-aqua-300 bg-aqua-50' : 'border-aqua-300 bg-aqua-50')}>
              <h3 className="text-sm font-bold text-aqua-800 mb-2">Vår anbefaling: {anbefaling === 'reparer' ? 'Reparer maskinen' : 'Kjøp ny maskin'}</h3>
              <p className="text-sm text-aqua-700">
                {anbefaling === 'reparer'
                  ? 'Reparasjon lønner seg fordi kostnaden per år (' + kostnadRepPerAar.toLocaleString() + ' kr) er lavere enn en ny maskin (' + kostnadNyPerAar.toLocaleString() + ' kr/år), og maskinen har anslagsvis ' + restEtterRep + ' år igjen.'
                  : 'En ny maskin lønner seg fordi kostnaden per år (' + kostnadNyPerAar.toLocaleString() + ' kr) er lavere enn å reparere (' + kostnadRepPerAar.toLocaleString() + ' kr/år). ' + (besparelseStrom > 0 ? 'Du sparer også ca ' + besparelseStrom + ' kr/år i strøm med ny maskin.' : '')
                }
              </p>
            </div>
          </section>

          <section data-section-id="tips" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Tommelfingerregler</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Reparasjon over halve nypris? Kjøp ny</div><p className="text-xs text-slate-500">Hvis reparasjonen koster mer enn halvparten av en ny maskin, er det nesten alltid billigere å kjøpe nytt.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Over 10 år? Vurder nytt uansett</div><p className="text-xs text-slate-500">Maskiner over ti år bruker merkbart mer strøm og vann enn nye modeller. Energibesparelsen alene kan rettferdiggjøre ny maskin.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Gjentatte reparasjoner? Kjøp ny</div><p className="text-xs text-slate-500">Hvis du har reparert maskinen to eller flere ganger det siste året, er den i en nedadgående spiral.</p></div>
            </div>
          </section>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/naar-bytte-vaskemaskin/', label: 'Når bytte vaskemaskin' },
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
          { href: '/verktoy/energikalkulator/', label: 'Energikalkulator' },
        ]} ctaTitle="Klar for ny maskin?" ctaText="Finn den perfekte maskinen med vår quiz." ctaLink="/verktoy/vaskemaskinvelger/" ctaLinkText="Ta quizen" />
      </div>
    </div>
  )
}
