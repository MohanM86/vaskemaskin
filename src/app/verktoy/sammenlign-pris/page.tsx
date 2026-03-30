'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconArrow, IconTarget } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

export default function SammenlignPrisPage() {
  const [pris1, setPris1] = useState(5000)
  const [levetid1, setLevetid1] = useState(8)
  const [energi1, setEnergi1] = useState('D')
  const [pris2, setPris2] = useState(9000)
  const [levetid2, setLevetid2] = useState(13)
  const [energi2, setEnergi2] = useState('B')
  const [vaskPerUke, setVaskPerUke] = useState(4)
  const [stromPris, setStromPris] = useState(200)

  const kwh: Record<string, number> = { A: 47, B: 56, C: 67, D: 80, E: 100, F: 120, G: 150 }
  const kwhAar1 = (kwh[energi1] || 80) * (vaskPerUke / 4)
  const kwhAar2 = (kwh[energi2] || 56) * (vaskPerUke / 4)
  const stromAar1 = Math.round((kwhAar1 * stromPris) / 100)
  const stromAar2 = Math.round((kwhAar2 * stromPris) / 100)
  const totalAar1 = Math.round(pris1 / levetid1) + stromAar1
  const totalAar2 = Math.round(pris2 / levetid2) + stromAar2
  const total10aar1 = totalAar1 * 10
  const total10aar2 = totalAar2 * 10
  const billigst = totalAar1 < totalAar2 ? 1 : totalAar2 < totalAar1 ? 2 : 0
  const besparelse = Math.abs(totalAar1 - totalAar2)

  const sections = [
    { id: 'maskin', label: 'Legg inn maskiner' },
    { id: 'resultat', label: 'Sammenligning' },
  ]

  function MaskinInput({ nr, pris, setPrisF, levetid, setLevetidF, energi, setEnergiF }: any) {
    return (
      <div className="p-5 rounded-xl border border-slate-200 bg-white">
        <h3 className="text-sm font-bold text-slate-800 mb-4">Maskin {nr}</h3>
        <div className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Pris: <span className="text-aqua-600">{pris.toLocaleString()} kr</span></label>
            <input type="range" min="2000" max="20000" step="500" value={pris} onChange={e => setPrisF(Number(e.target.value))} className="w-full accent-aqua-600" />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-1 block">Forventet levetid: <span className="text-aqua-600">{levetid} år</span></label>
            <input type="range" min="3" max="25" value={levetid} onChange={e => setLevetidF(Number(e.target.value))} className="w-full accent-aqua-600" />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-600 mb-2 block">Energiklasse</label>
            <div className="flex gap-1.5">{Object.keys(kwh).map(k => (
              <button key={k} onClick={() => setEnergiF(k)} className={'w-9 h-9 rounded-lg text-xs font-bold transition-all ' + (energi === k ? 'bg-aqua-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200')}>{k}</button>
            ))}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-aqua-700">Hjem</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <Link href="/verktoy/" className="hover:text-aqua-700">Verktøy</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <span className="text-slate-700 font-medium">Sammenlign pris per år</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconTarget size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Sammenlign pris per år</h1>
              <p className="text-sm text-slate-500">Se hvilken maskin som er billigst over tid</p>
            </div>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">En dyrere maskin kan være billigere over tid fordi den varer lenger og bruker mindre strøm. Sammenlign to maskiner og se den reelle kostnaden per år.</p>

          <section data-section-id="maskin" className="scroll-mt-20 mb-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <MaskinInput nr={1} pris={pris1} setPrisF={setPris1} levetid={levetid1} setLevetidF={setLevetid1} energi={energi1} setEnergiF={setEnergi1} />
              <MaskinInput nr={2} pris={pris2} setPrisF={setPris2} levetid={levetid2} setLevetidF={setLevetid2} energi={energi2} setEnergiF={setEnergi2} />
            </div>
            <div className="p-4 rounded-xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">Vask per uke: <span className="text-aqua-600">{vaskPerUke}</span></label>
                  <input type="range" min="1" max="10" value={vaskPerUke} onChange={e => setVaskPerUke(Number(e.target.value))} className="w-full accent-aqua-600" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1 block">Strømpris: <span className="text-aqua-600">{stromPris} øre/kWh</span></label>
                  <input type="range" min="50" max="500" step="10" value={stromPris} onChange={e => setStromPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                </div>
              </div>
            </div>
          </section>

          <section data-section-id="resultat" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-5">Resultat</h2>

            {/* Side by side comparison */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={'p-5 rounded-xl border-2 text-center ' + (billigst === 1 ? 'border-aqua-400 bg-aqua-50' : 'border-slate-200')}>
                {billigst === 1 && <span className="inline-block text-[10px] font-bold text-white bg-aqua-600 px-2 py-0.5 rounded-full mb-2">BILLIGST</span>}
                <div className="text-xs text-slate-500 mb-1">Maskin 1</div>
                <div className="font-serif text-3xl font-bold text-slate-900">{totalAar1.toLocaleString()}</div>
                <div className="text-sm text-slate-500">kr per år</div>
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-slate-400">Innkjøp:</span><br/><span className="font-semibold">{Math.round(pris1/levetid1)} kr/år</span></div>
                  <div><span className="text-slate-400">Strøm:</span><br/><span className="font-semibold">{stromAar1} kr/år</span></div>
                </div>
              </div>
              <div className={'p-5 rounded-xl border-2 text-center ' + (billigst === 2 ? 'border-aqua-400 bg-aqua-50' : 'border-slate-200')}>
                {billigst === 2 && <span className="inline-block text-[10px] font-bold text-white bg-aqua-600 px-2 py-0.5 rounded-full mb-2">BILLIGST</span>}
                <div className="text-xs text-slate-500 mb-1">Maskin 2</div>
                <div className="font-serif text-3xl font-bold text-slate-900">{totalAar2.toLocaleString()}</div>
                <div className="text-sm text-slate-500">kr per år</div>
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
                  <div><span className="text-slate-400">Innkjøp:</span><br/><span className="font-semibold">{Math.round(pris2/levetid2)} kr/år</span></div>
                  <div><span className="text-slate-400">Strøm:</span><br/><span className="font-semibold">{stromAar2} kr/år</span></div>
                </div>
              </div>
            </div>

            {besparelse > 0 && (
              <div className="p-5 rounded-xl border border-aqua-200 bg-aqua-50">
                <p className="text-sm text-aqua-800">Maskin {billigst} sparer deg <strong>{besparelse} kroner per år</strong>, altså <strong>{(besparelse * 10).toLocaleString()} kroner over 10 år</strong>.</p>
              </div>
            )}
          </section>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/verktoy/energikalkulator/', label: 'Energikalkulator' },
          { href: '/verktoy/reparere-eller-bytte/', label: 'Reparere eller bytte' },
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
        ]} ctaTitle="Finn riktig maskin" ctaText="Quiz med personlig anbefaling." ctaLink="/verktoy/vaskemaskinvelger/" ctaLinkText="Ta quizen" />
      </div>
    </div>
  )
}
