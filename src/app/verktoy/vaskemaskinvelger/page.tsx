'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import { IconWasher, IconArrow } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

type Step = 'husstand' | 'plass' | 'budsjett' | 'resultat'

export default function VaskemaskinvelgerPage() {
  const [step, setStep] = useState<Step>('husstand')
  const [husstand, setHusstand] = useState('')
  const [plass, setPlass] = useState('')
  const [budsjett, setBudsjett] = useState('')

  function getAnbefaling() {
    const isSmall = husstand === '1-2'
    const isTight = plass === 'trangt'
    const isLow = budsjett === 'lav'
    const isMed = budsjett === 'middels'

    if (isTight) return { type: 'Toppmater', kapasitet: '6-7 kg', merker: 'Electrolux, Whirlpool eller Miele', grunn: 'Med bare 40 cm bredde passer en toppmater perfekt i trange rom. De beste toppmaterne i 2026 kommer fra Electrolux og Whirlpool.', link: '/artikkel/komplett-kjopsguide-2026/', linkText: 'Les kjøpsguiden', prisrange: '4 000 til 8 000 kr', energi: 'C til A' }
    if (isLow) return { type: 'Budsjett frontmater', kapasitet: isSmall ? '7 kg' : '8 kg', merker: 'Whirlpool, Grundig eller Beko', grunn: 'Du får en solid maskin med de viktigste funksjonene. Whirlpool sin 6th Sense teknologi gir overraskende mye for pengene.', link: '/sammenligning/whirlpool-vs-beko/', linkText: 'Whirlpool vs Beko', prisrange: '3 000 til 5 000 kr', energi: 'D til C' }
    if (isMed && isSmall) return { type: 'Mellomklasse frontmater', kapasitet: '7-8 kg', merker: 'Electrolux, Samsung eller LG', grunn: 'For én til to personer gir mellomklassen perfekt balanse mellom funksjoner og pris. SensiCare og EcoBubble gjør hverdagen enklere.', link: '/sammenligning/samsung-vs-electrolux/', linkText: 'Samsung vs Electrolux', prisrange: '5 000 til 8 000 kr', energi: 'C til B' }
    if (isMed) return { type: 'Mellomklasse frontmater', kapasitet: '8-9 kg', merker: 'Bosch, Samsung eller Electrolux', grunn: 'Bosch i-DOS og Samsung EcoBubble gir deg smarte funksjoner. Bosch er det tryggeste valget for de fleste norske familier.', link: '/sammenligning/bosch-vs-samsung/', linkText: 'Bosch vs Samsung', prisrange: '6 000 til 10 000 kr', energi: 'B til C' }
    return { type: 'Premium frontmater', kapasitet: isSmall ? '8 kg' : '9-10 kg', merker: 'Miele, Bosch eller ASKO', grunn: 'Med høyt budsjett får du maskiner som varer i 20 år. Miele TwinDos og ASKO sin skandinaviske enkelhet er begge fremragende valg.', link: '/sammenligning/miele-vs-asko/', linkText: 'Miele vs ASKO', prisrange: '10 000 til 20 000 kr', energi: 'A til B' }
  }

  const result = getAnbefaling()

  const optBtn = (value: string, label: string, sub: string, setter: (v: string) => void, current: string) => (
    <button onClick={() => setter(value)} className={'p-5 rounded-xl border text-left transition-all ' + (current === value ? 'border-aqua-400 bg-aqua-50 shadow-sm ring-1 ring-aqua-200' : 'border-slate-200 hover:border-aqua-300 hover:shadow-sm')}>
      <div className="text-sm font-semibold text-slate-900">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </button>
  )

  const sections = [
    { id: 'quiz', label: step === 'resultat' ? 'Din anbefaling' : 'Steg ' + (['husstand','plass','budsjett','resultat'].indexOf(step) + 1) + ' av 3' },
  ]

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Verktøy', href: '/verktoy/' }, { label: 'Vaskemaskinvelger' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">Finn din perfekte vaskemaskin</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">Svar på tre spørsmål og få personlig anbefaling</p>
        </div>
      </section>

    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">
          {/* Progress bar */}
          <div className="flex gap-2 mb-8" data-section-id="quiz">
            {['husstand','plass','budsjett','resultat'].map((s, i) => (
              <div key={s} className={'h-2 flex-1 rounded-full transition-all ' + (i <= ['husstand','plass','budsjett','resultat'].indexOf(step) ? 'bg-aqua-500' : 'bg-slate-200')} />
            ))}
          </div>

          {step === 'husstand' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hvor mange bor i husstanden?</h2>
              <p className="text-sm text-slate-500 mb-6">Dette avgjør hvilken kapasitet du trenger</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {optBtn('1-2', '1 til 2', 'Par eller singel', setHusstand, husstand)}
                {optBtn('3-4', '3 til 4', 'Liten familie', setHusstand, husstand)}
                {optBtn('5+', '5 eller flere', 'Stor familie', setHusstand, husstand)}
              </div>
              {husstand && <button onClick={() => setStep('plass')} className="btn-primary mt-6 inline-flex items-center gap-2">Neste <IconArrow size={14} color="white" /></button>}
            </div>
          )}

          {step === 'plass' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hvor mye plass har du?</h2>
              <p className="text-sm text-slate-500 mb-6">Avgjør om du trenger frontmater eller toppmater</p>
              <div className="grid grid-cols-2 gap-3">
                {optBtn('standard', 'Standard (60 cm)', 'Vanlig vaskerom eller bad', setPlass, plass)}
                {optBtn('trangt', 'Trangt (40 cm)', 'Smalt skap eller trang plass', setPlass, plass)}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button onClick={() => setStep('husstand')} className="text-sm text-slate-500 hover:text-slate-700">Tilbake</button>
                {plass && <button onClick={() => setStep('budsjett')} className="btn-primary inline-flex items-center gap-2">Neste <IconArrow size={14} color="white" /></button>}
              </div>
            </div>
          )}

          {step === 'budsjett' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hva er budsjettet ditt?</h2>
              <p className="text-sm text-slate-500 mb-6">Høyere pris gir bedre holdbarhet og funksjoner</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {optBtn('lav', 'Under 5 000 kr', 'Grunnleggende', setBudsjett, budsjett)}
                {optBtn('middels', '5-10 000 kr', 'Gode funksjoner', setBudsjett, budsjett)}
                {optBtn('hoy', 'Over 10 000 kr', 'Premium kvalitet', setBudsjett, budsjett)}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button onClick={() => setStep('plass')} className="text-sm text-slate-500 hover:text-slate-700">Tilbake</button>
                {budsjett && <button onClick={() => setStep('resultat')} className="btn-primary inline-flex items-center gap-2">Se anbefaling <IconArrow size={14} color="white" /></button>}
              </div>
            </div>
          )}

          {step === 'resultat' && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Vår anbefaling til deg</h2>

              <div className="p-6 rounded-xl border-2 border-aqua-300 bg-aqua-50 mb-6">
                <div className="text-xs font-bold text-aqua-600 uppercase tracking-wider mb-2">Anbefalt type</div>
                <div className="font-serif text-2xl font-bold text-slate-900 mb-5">{result.type}</div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Kapasitet</div><div className="text-sm font-bold text-slate-800">{result.kapasitet}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Prisrange</div><div className="text-sm font-bold text-slate-800">{result.prisrange}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Energiklasse</div><div className="text-sm font-bold text-slate-800">{result.energi}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Merker</div><div className="text-sm font-bold text-slate-800">{result.merker.split(',')[0]}</div></div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-4">{result.grunn}</p>

                <div className="flex flex-wrap gap-3">
                  <Link href={result.link} className="btn-primary inline-flex items-center gap-2 text-sm">{result.linkText} <IconArrow size={12} color="white" /></Link>
                  <Link href="/artikkel/beste-vaskemaskin-2026/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Se topp 5 lister</Link>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white mb-6">
                <h3 className="text-sm font-bold text-slate-700 mb-3">Dine valg</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div><span className="text-slate-400">Husstand:</span> <span className="font-medium text-slate-800">{husstand} personer</span></div>
                  <div><span className="text-slate-400">Plass:</span> <span className="font-medium text-slate-800">{plass === 'standard' ? '60 cm' : '40 cm'}</span></div>
                  <div><span className="text-slate-400">Budsjett:</span> <span className="font-medium text-slate-800">{budsjett === 'lav' ? 'Under 5K' : budsjett === 'middels' ? '5-10K' : 'Over 10K'}</span></div>
                </div>
              </div>

              <button onClick={() => { setStep('husstand'); setHusstand(''); setPlass(''); setBudsjett('') }} className="text-sm text-slate-500 hover:text-slate-700">Start på nytt</button>
            </div>
          )}
        </div>

        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Komplett kjøpsguide' },
          { href: '/artikkel/beste-vaskemaskin-2026/', label: 'Beste vaskemaskin 2026' },
          { href: '/verktoy/energikalkulator/', label: 'Energikalkulator' },
          { href: '/sammenligning/bosch-vs-samsung/', label: 'Bosch vs Samsung' },
        ]} showQuiz={false} ctaTitle="Beregn strømkostnaden" ctaText="Se hva maskinen koster i strøm per år." ctaLink="/verktoy/energikalkulator/" ctaLinkText="Energikalkulator" />
      </div>
    </div>
    </>
  )
}
