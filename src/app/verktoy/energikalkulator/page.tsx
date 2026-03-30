'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconEnergi, IconArrow } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

const energyData: Record<string, number> = { 'A': 35, 'B': 50, 'C': 65, 'D': 80, 'E': 100, 'F': 120, 'G': 150 }

export default function EnergiKalkulatorPage() {
  const [klasse, setKlasse] = useState('C')
  const [vaskPerUke, setVaskPerUke] = useState(4)
  const [stromPris, setStromPris] = useState(200)

  const kwhPerAar = energyData[klasse] * (vaskPerUke / 4)
  const kostnadPerAar = Math.round((kwhPerAar * stromPris) / 100)
  const kostnad10aar = kostnadPerAar * 10
  const besparelse = klasse !== 'B' ? Math.round(((energyData[klasse] - energyData['B']) * (vaskPerUke / 4) * stromPris) / 100) : 0

  const sections = [
    { id: 'kalkulator', label: 'Kalkulator' },
    { id: 'resultat', label: 'Ditt resultat' },
    { id: 'tips', label: 'Sparetips' },
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
            <span className="text-slate-700 font-medium">Energikalkulator</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconEnergi size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Energikalkulator vaskemaskin</h1>
              <p className="text-sm text-slate-500">Beregn hva vaskemaskinen din koster i strøm per år</p>
            </div>
          </div>

          <section data-section-id="kalkulator" className="scroll-mt-20">
            <div className="p-6 rounded-xl border border-slate-200 bg-white mb-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">Energiklasse</label>
                <div className="flex gap-2">{Object.keys(energyData).map(k => (
                  <button key={k} onClick={() => setKlasse(k)} className={'w-11 h-11 rounded-lg text-sm font-bold transition-all ' + (klasse === k ? 'bg-aqua-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>{k}</button>
                ))}</div>
                <p className="text-xs text-slate-400 mt-2">De fleste gode maskiner i 2026 ligger på B eller C</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Antall vask per uke: <span className="text-aqua-600 font-bold">{vaskPerUke}</span></label>
                <input type="range" min="1" max="10" step="1" value={vaskPerUke} onChange={e => setVaskPerUke(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1 vask</span><span>5 vask</span><span>10 vask</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Strømpris: <span className="text-aqua-600 font-bold">{stromPris} øre/kWh</span></label>
                <input type="range" min="50" max="500" step="10" value={stromPris} onChange={e => setStromPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>50 øre</span><span>250 øre</span><span>500 øre</span></div>
              </div>
            </div>
          </section>

          <section data-section-id="resultat" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Ditt resultat</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-aqua-50 border border-aqua-200 text-center">
                <div className="text-xs text-aqua-700 font-medium mb-1">Årlig strømkostnad</div>
                <div className="font-serif text-2xl font-bold text-aqua-600">{kostnadPerAar} kr</div>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 mb-1">Over 10 år</div>
                <div className="font-serif text-2xl font-bold text-slate-800">{kostnad10aar.toLocaleString()} kr</div>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 mb-1">kWh per år</div>
                <div className="font-serif text-2xl font-bold text-slate-800">{Math.round(kwhPerAar)}</div>
              </div>
            </div>

            {besparelse > 0 && (
              <div className="p-5 rounded-xl border border-green-200 bg-green-50 mb-6">
                <h3 className="text-sm font-bold text-green-800 mb-1">Du kan spare penger</h3>
                <p className="text-sm text-green-700">Med energiklasse <strong>B</strong> i stedet for <strong>{klasse}</strong> ville du spart <strong>{besparelse} kroner i året</strong>, altså <strong>{(besparelse * 10).toLocaleString()} kroner over 10 år</strong>.</p>
              </div>
            )}

            {klasse === 'A' || klasse === 'B' ? (
              <div className="p-5 rounded-xl border border-aqua-200 bg-aqua-50">
                <p className="text-sm text-aqua-800">Du har allerede en av de mest energieffektive klassene. Fokuser på å bruke eco programmet og vaske ved lavere temperaturer for ytterligere besparelse.</p>
              </div>
            ) : null}
          </section>

          <section data-section-id="tips" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Slik sparer du enda mer strøm</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Bruk eco programmet</div><p className="text-xs text-slate-500">Eco 40-60 bruker 40 til 60 prosent mindre strøm enn standard programmer.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Vask på 30 grader</div><p className="text-xs text-slate-500">Oppvarming utgjør 80 prosent av strømforbruket. Lavere temperatur gir drastisk besparelse.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Fyll trommelen</div><p className="text-xs text-slate-500">En halvfull trommel bruker nesten like mye strøm som en full. Vask sjeldnere med fulle lass.</p></div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100"><div className="text-sm font-semibold text-slate-800 mb-1">Avkalk regelmessig</div><p className="text-xs text-slate-500">Kalk på varmeelementet øker strømforbruket. Kjør avkalking hver tredje måned.</p></div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Lær mer om energieffektivitet</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/artikkel/energimerking-forklart/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Energimerking forklart <IconArrow size={12} color="#0F766E" /></Link>
                <Link href="/artikkel/spare-strom-vaskemaskin/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Spare strøm tips <IconArrow size={12} color="#0F766E" /></Link>
              </div>
            </div>
          </section>
        </div>

        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/energimerking-forklart/', label: 'Energimerking forklart' },
          { href: '/artikkel/spare-strom-vaskemaskin/', label: 'Spare strøm' },
          { href: '/artikkel/beste-vaskemaskin-2026/', label: 'Beste vaskemaskin 2026' },
        ]} ctaTitle="Finn energieffektiv maskin" ctaText="Vår quiz hjelper deg å velge riktig." />
      </div>
    </div>
  )
}
