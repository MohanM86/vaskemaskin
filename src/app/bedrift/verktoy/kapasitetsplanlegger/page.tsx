'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { IconArrow, IconTarget } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

type Bransje = 'hotell' | 'barnehage' | 'sykehus' | 'borettslag' | 'vaskeri' | 'ridesenter' | 'frisor' | 'offshore' | 'annet'

const bransjeData: Record<Bransje, { label: string; kgPerEnhet: number; enhetNavn: string; defaultEnheter: number; vaskerTimer: number; maskinKg: number; desc: string }> = {
  hotell: { label: 'Hotell', kgPerEnhet: 6, enhetNavn: 'rom', defaultEnheter: 80, vaskerTimer: 8, maskinKg: 20, desc: '6 kg tekstiler per rom per døgn' },
  barnehage: { label: 'Barnehage', kgPerEnhet: 5, enhetNavn: 'avdeling', defaultEnheter: 4, vaskerTimer: 6, maskinKg: 10, desc: '5 kg per avdeling per dag' },
  sykehus: { label: 'Sykehus', kgPerEnhet: 4, enhetNavn: 'seng', defaultEnheter: 100, vaskerTimer: 16, maskinKg: 36, desc: '4 kg per seng per døgn' },
  borettslag: { label: 'Borettslag', kgPerEnhet: 0.3, enhetNavn: 'leilighet', defaultEnheter: 60, vaskerTimer: 12, maskinKg: 8, desc: '1 maskin per 15 til 20 leiligheter' },
  vaskeri: { label: 'Vaskeri', kgPerEnhet: 1, enhetNavn: 'kg daglig volum', defaultEnheter: 500, vaskerTimer: 10, maskinKg: 32, desc: 'Direkte kg input' },
  ridesenter: { label: 'Ridesenter', kgPerEnhet: 3, enhetNavn: 'hest', defaultEnheter: 25, vaskerTimer: 4, maskinKg: 14, desc: '3 kg utstyr per hest per uke' },
  frisor: { label: 'Frisor', kgPerEnhet: 8, enhetNavn: 'stol', defaultEnheter: 4, vaskerTimer: 6, maskinKg: 8, desc: '8 kg håndklær per stol per dag' },
  offshore: { label: 'Offshore', kgPerEnhet: 2, enhetNavn: 'køy', defaultEnheter: 50, vaskerTimer: 8, maskinKg: 14, desc: '2 kg per køy per døgn' },
  annet: { label: 'Annet', kgPerEnhet: 1, enhetNavn: 'kg daglig volum', defaultEnheter: 100, vaskerTimer: 8, maskinKg: 14, desc: 'Legg inn daglig volum direkte' },
}

export default function KapasitetsplanleggerPage() {
  const [bransje, setBransje] = useState<Bransje>('hotell')
  const [enheter, setEnheter] = useState(80)
  const [buffer, setBuffer] = useState(25) // prosent

  const bd = bransjeData[bransje]

  const calc = useMemo(() => {
    const dagligKg = bransje === 'borettslag'
      ? enheter * bd.kgPerEnhet * 7 / 5 // spredt over uken
      : bransje === 'ridesenter'
      ? enheter * bd.kgPerEnhet / 5 // ukentlig fordelt på 5 dager
      : enheter * bd.kgPerEnhet

    const dagligMedBuffer = dagligKg * (1 + buffer / 100)
    const syklusTid = 55 // minutter gjennomsnitt
    const sykluserPerTime = 60 / syklusTid
    const sykluserPerDag = sykluserPerTime * bd.vaskerTimer
    const kapasitetPerMaskin = sykluserPerDag * bd.maskinKg
    const antallMaskiner = Math.ceil(dagligMedBuffer / kapasitetPerMaskin)
    const antallTørketromler = Math.ceil(antallMaskiner * 0.8)

    // Estimert investering
    const prisPerMaskin = bd.maskinKg <= 10 ? 40000 : bd.maskinKg <= 20 ? 90000 : bd.maskinKg <= 40 ? 180000 : 350000
    const prisPerTørker = bd.maskinKg <= 10 ? 30000 : bd.maskinKg <= 20 ? 70000 : bd.maskinKg <= 40 ? 140000 : 250000
    const totalInvestering = antallMaskiner * prisPerMaskin + antallTørketromler * prisPerTørker

    // Anbefalt maskintype
    let maskintype = ''
    if (dagligMedBuffer > 2000) maskintype = 'Tunnelvaskemaskin anbefales for dette volumet'
    else if (dagligMedBuffer > 500) maskintype = 'Industrimaskiner 32 til 60 kg'
    else if (dagligMedBuffer > 100) maskintype = 'Profesjonelle maskiner 14 til 32 kg'
    else maskintype = 'Kompakte profesjonelle maskiner 8 til 14 kg'

    return {
      dagligKg: Math.round(dagligKg),
      dagligMedBuffer: Math.round(dagligMedBuffer),
      antallMaskiner,
      antallTørketromler,
      anbefaltKg: bd.maskinKg,
      maskintype,
      totalInvestering,
      kapasitetPerMaskin: Math.round(kapasitetPerMaskin),
    }
  }, [bransje, enheter, buffer, bd])

  const fmt = (n: number) => n.toLocaleString('nb-NO')

  const sections = [
    { id: 'bransje', label: 'Velg bransje' },
    { id: 'resultat', label: 'Anbefaling' },
    { id: 'spesifikasjoner', label: 'Spesifikasjoner' },
  ]

  return (
    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-aqua-700">Hjem</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <Link href="/bedrift/" className="hover:text-aqua-700">Bedrift</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <Link href="/bedrift/verktøy/" className="hover:text-aqua-700">Verktøy</Link>
            <span className="text-slate-300 mx-1.5">/</span>
            <span className="text-slate-700 font-medium">Kapasitetsplanlegger</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconTarget size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Kapasitetsplanlegger</h1>
              <p className="text-sm text-slate-500">Finn riktig antall maskiner for din virksomhet</p>
            </div>
          </div>
          <p className="text-slate-600 mb-8 leading-relaxed">Velg bransje og legg inn antall enheter. Kalkulatoren beregner daglig vaskevolum, anbefalt antall maskiner og estimert investering.</p>

          {/* ═══ BRANSJE SELECTOR ═══ */}
          <section data-section-id="bransje" className="scroll-mt-20">
            <div className="p-6 rounded-xl border border-slate-200 bg-white mb-6 space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-3 block">Velg bransje</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {(Object.entries(bransjeData) as [Bransje, typeof bransjeData['hotell']][]).map(([key, val]) => (
                    <button key={key} onClick={() => { setBransje(key); setEnheter(val.defaultEnheter) }} className={'py-2.5 px-3 rounded-lg text-xs font-semibold transition-all ' + (bransje === key ? 'bg-aqua-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200')}>
                      {val.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-2">{bd.desc}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Antall {bd.enhetNavn}: <span className="text-aqua-600 font-bold">{enheter}</span>
                </label>
                <input type="range" min="1" max={bransje === 'vaskeri' ? 5000 : bransje === 'sykehus' ? 500 : bransje === 'borettslag' ? 200 : 200} step="1" value={enheter} onChange={e => setEnheter(Number(e.target.value))} className="w-full accent-aqua-600" />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Buffer for topper: <span className="text-aqua-600 font-bold">{buffer}%</span>
                </label>
                <input type="range" min="0" max="50" step="5" value={buffer} onChange={e => setBuffer(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>0% (ingen buffer)</span><span>25%</span><span>50% (hoy buffer)</span></div>
              </div>
            </div>
          </section>

          {/* ═══ RESULT ═══ */}
          <section data-section-id="resultat" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-5">Anbefaling</h2>

            <div className="p-6 rounded-xl border-2 border-aqua-300 bg-aqua-50 mb-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-aqua-600">{calc.antallMaskiner}</div>
                  <div className="text-xs text-slate-600 mt-1">vaskemaskiner</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-aqua-600">{calc.antallTørketromler}</div>
                  <div className="text-xs text-slate-600 mt-1">tørketromler</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl font-bold text-aqua-600">{calc.anbefaltKg}</div>
                  <div className="text-xs text-slate-600 mt-1">kg per maskin</div>
                </div>
                <div className="text-center">
                  <div className="font-serif text-2xl font-bold text-aqua-600">{fmt(calc.dagligMedBuffer)}</div>
                  <div className="text-xs text-slate-600 mt-1">kg/dag med buffer</div>
                </div>
              </div>
              <p className="text-sm text-aqua-800">{calc.maskintype}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">Daglig vaskevolum (uten buffer)</div>
                <div className="font-serif text-2xl font-bold text-slate-900">{fmt(calc.dagligKg)} kg</div>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200">
                <div className="text-xs text-slate-500 mb-1">Estimert totalinvestering</div>
                <div className="font-serif text-2xl font-bold text-slate-900">{fmt(calc.totalInvestering)} kr</div>
                <div className="text-xs text-slate-400 mt-1">Maskiner og tørketromler</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/bedrift/verktøy/vaskeri-roi/" className="btn-primary inline-flex items-center gap-2 text-sm">Beregn ROI <IconArrow size={12} color="white" /></Link>
              <Link href="/bedrift/verktøy/maskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Finn riktig maskin <IconArrow size={12} color="#0F766E" /></Link>
            </div>
          </section>

          {/* ═══ SPECS ═══ */}
          <section data-section-id="spesifikasjoner" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Beregningsgrunnlag</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Syklustid: 55 minutter gjennomsnitt</div>
                <p className="text-xs text-slate-500">Profesjonelle maskiner kjorer typisk 45 til 65 minutter per syklus avhengig av program og temperatur.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Vaskeritid: {bd.vaskerTimer} timer per dag</div>
                <p className="text-xs text-slate-500">Basert på typisk drift for {bd.label.toLowerCase()}. Juster med bufferen for aa kompensere for kortere eller lengre driftstid.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Kapasitet per maskin per dag: {fmt(calc.kapasitetPerMaskin)} kg</div>
                <p className="text-xs text-slate-500">{calc.anbefaltKg} kg maskin med {bd.vaskerTimer} timers drift og 55 minutters syklustid.</p>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Les bransjeguiden</h3>
              <p className="text-xs text-slate-600 mb-3">Få detaljerte anbefalinger for din bransje.</p>
              <Link href={'/bedrift/' + bransje + '/'} className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">
                {bd.label} bransjeguide <IconArrow size={12} color="#0F766E" />
              </Link>
            </div>
          </section>
        </div>

        <PageSidebar sections={sections} relatedLinks={[
          { href: '/bedrift/verktøy/vaskeri-roi/', label: 'ROI kalkulator' },
          { href: '/bedrift/verktøy/maskinvelger/', label: 'Maskinvelger' },
          { href: '/bedrift/prisguide/', label: 'Prisguide' },
          { href: '/bedrift/' + bransje + '/', label: bd.label + ' guide' },
        ]} ctaTitle="Beregn lønnsomhet" ctaText="Lønner eget vaskeri seg?" ctaLink="/bedrift/verktøy/vaskeri-roi/" ctaLinkText="ROI kalkulator" />
      </div>
    </div>
  )
}
