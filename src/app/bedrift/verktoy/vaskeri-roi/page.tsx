'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { IconArrow, IconTrendingUp } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

// Cost model constants
const STROM_PER_KG = 0.35 // kr per kg (blended)
const VANN_PER_KG = 0.15 // kr per kg
const VASKEMIDDEL_PER_KG = 0.40 // kr per kg
const VEDLIKEHOLD_PROSENT = 0.05 // 5% av investering per aar

export default function VaskeriROIPage() {
  // Inputs
  const [kgPerDag, setKgPerDag] = useState(200)
  const [dagerPerUke, setDagerPerUke] = useState(5)
  const [outsourcingPris, setOutsourcingPris] = useState(18)
  const [investering, setInvestering] = useState(500000)
  const [antallAnsatte, setAntallAnsatte] = useState(1)
  const [lonnskostnad, setLonnskostnad] = useState(450000)
  const [levetidAar, setLevetidAar] = useState(12)
  const [stromPris, setStromPris] = useState(200) // øre/kWh

  // Calculations
  const calc = useMemo(() => {
    const kgPerÅr = kgPerDag * dagerPerUke * 50 // 50 uker (ferie)
    const stromFaktor = stromPris / 200 // relativ til 2 kr/kWh

    // Outsourcing
    const outsourcingÅr = kgPerÅr * outsourcingPris

    // Eget vaskeri
    const avskrivningÅr = investering / levetidAar
    const personalÅr = antallAnsatte * lonnskostnad
    const stromÅr = kgPerÅr * STROM_PER_KG * stromFaktor
    const vannÅr = kgPerÅr * VANN_PER_KG
    const kjemikalierÅr = kgPerÅr * VASKEMIDDEL_PER_KG
    const vedlikeholdÅr = investering * VEDLIKEHOLD_PROSENT
    const driftÅr = stromÅr + vannÅr + kjemikalierAar
    const egetTotaltÅr = avskrivningÅr + personalÅr + driftÅr + vedlikeholdAar

    // Per kilo
    const egetPerKg = egetTotaltÅr / kgPerAar

    // Besparelse
    const besparelseÅr = outsourcingÅr - egetTotaltAar
    const besparelseProsent = Math.round((besparelseÅr / outsourcingAar) * 100)

    // Breakeven
    const nettoPerÅr = outsourcingÅr - (personalÅr + driftÅr + vedlikeholdAar)
    const breakevenÅr = nettoPerÅr > 0 ? investering / nettoPerÅr : 99

    // 10 year total
    const outsourcing10 = outsourcingÅr * 10
    const eget10 = (personalÅr + driftÅr + vedlikeholdAar) * 10 + investering

    return {
      kgPerAar,
      outsourcingAar: Math.round(outsourcingAar),
      egetTotaltAar: Math.round(egetTotaltAar),
      avskrivningAar: Math.round(avskrivningAar),
      personalAar: Math.round(personalAar),
      driftAar: Math.round(driftAar),
      vedlikeholdAar: Math.round(vedlikeholdAar),
      egetPerKg: Math.round(egetPerKg * 100) / 100,
      besparelseAar: Math.round(besparelseAar),
      besparelseProsent,
      breakevenAar: Math.round(breakevenÅr * 10) / 10,
      outsourcing10: Math.round(outsourcing10),
      eget10: Math.round(eget10),
      lønner: besparelseÅr > 0,
    }
  }, [kgPerDag, dagerPerUke, outsourcingPris, investering, antallAnsatte, lonnskostnad, levetidAar, stromPris])

  const sections = [
    { id: 'input', label: 'Dine tall' },
    { id: 'resultat', label: 'Resultat' },
    { id: 'detaljer', label: 'Kostnadsfordeling' },
    { id: 'tidslinje', label: '10 år fremover' },
    { id: 'tips', label: 'Viktige forutsetninger' },
  ]

  const fmt = (n: number) => n.toLocaleString('nb-NO')

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
            <span className="text-slate-700 font-medium">Vaskeri ROI</span>
          </nav>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconTrendingUp size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Vaskeri ROI kalkulator</h1>
              <p className="text-sm text-slate-500">Eget vaskeri vs. outsourcing: hva lønner seg?</p>
            </div>
          </div>
          <p className="text-slate-600 mb-8 leading-relaxed">Beregn om det lønner seg aa investere i eget vaskeri eller fortsette med ekstern vaskerileverandor. Juster tallene til din situasjon og se resultatet umiddelbart.</p>

          {/* ═══ INPUTS ═══ */}
          <section data-section-id="input" className="scroll-mt-20">
            <div className="p-6 rounded-xl border border-slate-200 bg-white mb-6 space-y-6">
              <h2 className="font-serif text-lg font-bold text-slate-900 mb-1">Ditt vaskebehov</h2>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Tekstilvolum per dag: <span className="text-aqua-600 font-bold">{fmt(kgPerDag)} kg</span></label>
                <input type="range" min="20" max="2000" step="10" value={kgPerDag} onChange={e => setKgPerDag(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>20 kg</span><span>500 kg</span><span>2 000 kg</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Vaskedager per uke: <span className="text-aqua-600 font-bold">{dagerPerUke}</span></label>
                <input type="range" min="3" max="7" value={dagerPerUke} onChange={e => setDagerPerUke(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>3 dager</span><span>5 dager</span><span>7 dager</span></div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Pris outsourcing per kg: <span className="text-aqua-600 font-bold">{outsourcingPris} kr</span></label>
                <input type="range" min="8" max="35" step="1" value={outsourcingPris} onChange={e => setOutsourcingPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                <div className="flex justify-between text-xs text-slate-400 mt-1"><span>8 kr</span><span>18 kr</span><span>35 kr</span></div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h2 className="font-serif text-lg font-bold text-slate-900 mb-4">Investering i eget vaskeri</h2>

                <div className="mb-5">
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Maskin og utstyrsinvestering: <span className="text-aqua-600 font-bold">{fmt(investering)} kr</span></label>
                  <input type="range" min="100000" max="5000000" step="50000" value={investering} onChange={e => setInvestering(Number(e.target.value))} className="w-full accent-aqua-600" />
                  <div className="flex justify-between text-xs text-slate-400 mt-1"><span>100 000</span><span>1 mill.</span><span>5 mill.</span></div>
                </div>

                <div className="mb-5">
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Ansatte i vaskeriet: <span className="text-aqua-600 font-bold">{antallAnsatte}</span></label>
                  <input type="range" min="0" max="10" value={antallAnsatte} onChange={e => setAntallAnsatte(Number(e.target.value))} className="w-full accent-aqua-600" />
                  <div className="flex justify-between text-xs text-slate-400 mt-1"><span>0 (selvbetjent)</span><span>5</span><span>10</span></div>
                </div>

                <div className="mb-5">
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Årlig lonnskostnad per ansatt: <span className="text-aqua-600 font-bold">{fmt(lonnskostnad)} kr</span></label>
                  <input type="range" min="300000" max="700000" step="25000" value={lonnskostnad} onChange={e => setLonnskostnad(Number(e.target.value))} className="w-full accent-aqua-600" />
                  <div className="flex justify-between text-xs text-slate-400 mt-1"><span>300 000</span><span>500 000</span><span>700 000</span></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Maskinens levetid: <span className="text-aqua-600 font-bold">{levetidAar} aar</span></label>
                    <input type="range" min="5" max="20" value={levetidAar} onChange={e => setLevetidAar(Number(e.target.value))} className="w-full accent-aqua-600" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Strompris: <span className="text-aqua-600 font-bold">{stromPris} ore/kWh</span></label>
                    <input type="range" min="50" max="500" step="10" value={stromPris} onChange={e => setStromPris(Number(e.target.value))} className="w-full accent-aqua-600" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══ RESULT ═══ */}
          <section data-section-id="resultat" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-5">Resultat</h2>

            {/* Main comparison */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={'p-5 rounded-xl border-2 text-center ' + (!calc.lønner ? 'border-aqua-400 bg-aqua-50' : 'border-slate-200')}>
                <div className="text-xs text-slate-500 mb-1">Outsourcing per aar</div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{fmt(calc.outsourcingAar)}</div>
                <div className="text-sm text-slate-500">kr per aar</div>
                <div className="text-xs text-slate-400 mt-2">{outsourcingPris} kr/kg</div>
              </div>
              <div className={'p-5 rounded-xl border-2 text-center ' + (calc.lønner ? 'border-aqua-400 bg-aqua-50' : 'border-slate-200')}>
                {calc.lønner && <span className="inline-block text-[10px] font-bold text-white bg-aqua-600 px-2 py-0.5 rounded-full mb-2">BILLIGST</span>}
                <div className="text-xs text-slate-500 mb-1">Eget vaskeri per aar</div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">{fmt(calc.egetTotaltAar)}</div>
                <div className="text-sm text-slate-500">kr per aar</div>
                <div className="text-xs text-slate-400 mt-2">{calc.egetPerKg} kr/kg</div>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center">
                <div className="text-xs text-aqua-700 font-medium mb-1">Årlig besparelse</div>
                <div className={'font-serif text-2xl font-bold ' + (calc.besparelseÅr > 0 ? 'text-aqua-600' : 'text-red-500')}>
                  {calc.besparelseÅr > 0 ? '+' : ''}{fmt(calc.besparelseAar)} kr
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 mb-1">Breakeven</div>
                <div className="font-serif text-2xl font-bold text-slate-800">
                  {calc.breakevenÅr < 20 ? calc.breakevenÅr + ' aar' : 'Aldri'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-xs text-slate-500 mb-1">Årsvolum</div>
                <div className="font-serif text-2xl font-bold text-slate-800">{fmt(calc.kgPerAar)} kg</div>
              </div>
            </div>

            {/* Verdict */}
            <div className={'p-5 rounded-xl border-2 ' + (calc.lønner ? 'border-aqua-300 bg-aqua-50' : 'border-amber-300 bg-amber-50')}>
              <h3 className={'text-sm font-bold mb-2 ' + (calc.lønner ? 'text-aqua-800' : 'text-amber-800')}>
                {calc.lønner ? 'Eget vaskeri lønner seg' : 'Outsourcing er billigst med disse tallene'}
              </h3>
              <p className={'text-sm ' + (calc.lønner ? 'text-aqua-700' : 'text-amber-700')}>
                {calc.lønner
                  ? 'Med ditt volum på ' + fmt(calc.kgPerAar) + ' kg per år sparer du ' + fmt(calc.besparelseAar) + ' kr årlig (' + calc.besparelseProsent + ' prosent) med eget vaskeri. Investeringen er tilbakebetalt etter ' + calc.breakevenÅr + ' år.'
                  : 'Med gjeldende volum og priser er outsourcing rimeligere. Prøv aa øke volumet, redusere investeringen eller forhandle på outsourcingprisen for aa se om regnestykket endrer seg.'
                }
              </p>
            </div>
          </section>

          {/* ═══ COST BREAKDOWN ═══ */}
          <section data-section-id="detaljer" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Kostnadsfordeling eget vaskeri</h2>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              {[
                { label: 'Personal', value: calc.personalAar, color: '#0D9488' },
                { label: 'Avskrivning maskiner', value: calc.avskrivningAar, color: '#14B8A6' },
                { label: 'Drift (strom, vann, kjemikalier)', value: calc.driftAar, color: '#2DD4BF' },
                { label: 'Vedlikehold og service', value: calc.vedlikeholdAar, color: '#5EEAD4' },
              ].map((item, i) => {
                const pct = Math.round((item.value / calc.egetTotaltAar) * 100)
                return (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                      <span className="text-sm text-slate-500">{fmt(item.value)} kr ({pct}%)</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: pct + '%', backgroundColor: item.color }} />
                    </div>
                  </div>
                )
              })}
              <div className="border-t border-slate-100 pt-3 mt-4 flex justify-between text-sm font-bold text-slate-900">
                <span>Totalt per aar</span>
                <span>{fmt(calc.egetTotaltAar)} kr</span>
              </div>
            </div>
          </section>

          {/* ═══ 10 YEAR VIEW ═══ */}
          <section data-section-id="tidslinje" className="scroll-mt-20 mb-8">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Kostnad over 10 aar</h2>
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <div className="space-y-4">
                {[1,2,3,4,5,6,7,8,9,10].map(aar => {
                  const outCum = calc.outsourcingÅr * aar
                  const egetCum = investering + (calc.egetTotaltÅr - calc.avskrivningAar) * aar
                  const maxVal = Math.max(outCum, egetCum)
                  const outPct = (outCum / maxVal) * 100
                  const egetPct = (egetCum / maxVal) * 100
                  const egetBilligst = egetCum < outCum

                  return (
                    <div key={aar} className="grid grid-cols-[40px_1fr] gap-3 items-center">
                      <span className="text-xs font-bold text-slate-500 text-right">År {aar}</span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="h-2 rounded-full bg-slate-300 transition-all duration-500" style={{ width: outPct + '%' }} />
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{fmt(outCum)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={'h-2 rounded-full transition-all duration-500 ' + (egetBilligst ? 'bg-aqua-500' : 'bg-aqua-300')} style={{ width: egetPct + '%' }} />
                          <span className={'text-[10px] whitespace-nowrap ' + (egetBilligst ? 'text-aqua-600 font-bold' : 'text-slate-400')}>{fmt(egetCum)}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-6 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2"><div className="w-3 h-2 rounded bg-slate-300" /><span>Outsourcing</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-2 rounded bg-aqua-500" /><span>Eget vaskeri</span></div>
              </div>
            </div>
          </section>

          {/* ═══ TIPS ═══ */}
          <section data-section-id="tips" className="scroll-mt-20">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-4">Viktige forutsetninger</h2>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Lokalkostnader er ikke inkludert</div>
                <p className="text-xs text-slate-500">Kalkulatoren inkluderer ikke husleie eller ombygging av lokaler for vaskeri. Dette kan utgjore 50 000 til 300 000 kr avhengig av behovet.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Outsourcing inkluderer transport</div>
                <p className="text-xs text-slate-500">Prisen per kilo ved outsourcing inkluderer vanligvis henting og levering. Med eget vaskeri sparer du transporttid og får bedre kontroll over leveringstider.</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-sm font-semibold text-slate-800 mb-1">Volumet er avgjørende</div>
                <p className="text-xs text-slate-500">Eget vaskeri lønner seg nesten alltid over 500 kg per dag. Under 100 kg per dag er outsourcing oftest billigst. Mellom 100 og 500 kg avhenger det av prisene du får.</p>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-xl bg-aqua-50 border border-aqua-200">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Neste steg</h3>
              <div className="flex flex-wrap gap-3">
                <Link href="/bedrift/verktøy/kapasitetsplanlegger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Planlegg maskinpark <IconArrow size={12} color="#0F766E" /></Link>
                <Link href="/bedrift/prisguide/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Se prisguide <IconArrow size={12} color="#0F766E" /></Link>
                <Link href="/bedrift/verktøy/maskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Finn riktig maskin <IconArrow size={12} color="#0F766E" /></Link>
              </div>
            </div>
          </section>
        </div>

        <PageSidebar sections={sections} relatedLinks={[
          { href: '/bedrift/hotell/', label: 'Hotellvaskeri guide' },
          { href: '/bedrift/vaskeri/', label: 'Profesjonelt vaskeri' },
          { href: '/bedrift/prisguide/', label: 'Prisguide bedrift' },
          { href: '/bedrift/verktøy/kapasitetsplanlegger/', label: 'Kapasitetsplanlegger' },
        ]} ctaTitle="Finn riktig maskin" ctaText="Svar på 5 spørsmål for skreddersydd anbefaling." ctaLink="/bedrift/verktøy/maskinvelger/" ctaLinkText="Start velgeren" />
      </div>
    </div>
  )
}
