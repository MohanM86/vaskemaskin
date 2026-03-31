'use client'

import { useState } from 'react'
import Link from 'next/link'
import { IconWasher, IconArrow } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'

type Step = 'bransje' | 'volum' | 'hygiene' | 'budsjett' | 'resultat'

interface Anbefaling {
  maskintype: string
  kapasitet: string
  leverandorer: string
  antall: string
  prisrange: string
  hygienekrav: string
  grunn: string
  maskinLink: string
  bransjeLink: string
}

export default function MaskinvelgerPage() {
  const [step, setStep] = useState<Step>('bransje')
  const [bransje, setBransje] = useState('')
  const [volum, setVolum] = useState('')
  const [hygiene, setHygiene] = useState('')
  const [budsjett, setBudsjett] = useState('')

  function getAnbefaling(): Anbefaling {
    const isHelse = bransje === 'sykehus'
    const isHotel = bransje === 'hotell'
    const isBorettslag = bransje === 'borettslag'
    const isSmå = volum === 'lav'
    const isMedium = volum === 'middels'
    const isHøy = volum === 'hoy'
    const isMegetHøy = volum === 'meget-hoy'
    const strengtKrav = hygiene === 'streng'
    const lavBudsjett = budsjett === 'lav'

    if (isHelse || strengtKrav) {
      return {
        maskintype: 'Barrieremaskin',
        kapasitet: isMegetHøy ? '36 til 60 kg' : isHøy ? '24 til 36 kg' : '16 til 24 kg',
        leverandorer: 'Electrolux Professional, Miele Professional, Girbau',
        antall: isMegetHøy ? '4 til 8 maskiner eller tunnelsystem' : isHøy ? '2 til 4 maskiner' : '1 til 2 maskiner',
        prisrange: '200 000 til 700 000 kr per maskin',
        hygienekrav: 'RABC/EN 14065, termisk desinfeksjon 85 grader, full sporbarhet',
        grunn: 'Helsevesenet krever barrieremaskin med ren og uren sone for aa forhindre kryssmitte. Termisk desinfeksjon på minimum 85 grader er påkrevd.',
        maskinLink: '/bedrift/maskintyper/barrieremaskin/',
        bransjeLink: '/bedrift/sykehus/',
      }
    }

    if (isMegetHoy) {
      return {
        maskintype: 'Tunnelvaskemaskin',
        kapasitet: '500 til 3000+ kg per time',
        leverandorer: 'Jensen Group, Girbau, Electrolux Professional',
        antall: '1 tunnelsystem med tilhørende utstyr',
        prisrange: '1,5 til 10 mill. kr komplett',
        hygienekrav: isHotel ? 'Svanemerket, 60 grader sengetøy' : 'EN 14065 anbefalt',
        grunn: 'Med over 2000 kg daglig volum gir tunnelmaskin dramatisk lavere kostnad per kilo og høyere gjennomstromning enn enkeltstående maskiner.',
        maskinLink: '/bedrift/maskintyper/tunnelmaskin/',
        bransjeLink: '/bedrift/vaskeri/',
      }
    }

    if (isBorettslag) {
      return {
        maskintype: 'Kompakt profesjonell med betalingsløsning',
        kapasitet: '8 til 10 kg',
        leverandorer: lavBudsjett ? 'Podab, Primus' : 'Miele Professional (AppWash), Electrolux Professional (Pay per Use)',
        antall: '1 per 15 til 20 leiligheter',
        prisrange: lavBudsjett ? '30 000 til 45 000 kr per maskin' : '40 000 til 65 000 kr per maskin',
        hygienekrav: 'Standard 60 grader program tilstrekkelig',
        grunn: 'Borettslag trenger robuste maskiner med betalingsløsning og lavt vedlikehold. AppWash og Pay per Use gjor administrasjonen enkel.',
        maskinLink: '/bedrift/maskintyper/industrimaskin/',
        bransjeLink: '/bedrift/borettslag/',
      }
    }

    if (isSmå) {
      return {
        maskintype: 'Kompakt profesjonell vaskemaskin',
        kapasitet: '6,5 til 10 kg',
        leverandorer: lavBudsjett ? 'Electrolux myPRO, Podab BaseLine' : 'Miele Little Giants, Electrolux myPRO',
        antall: '1 til 2 maskiner',
        prisrange: lavBudsjett ? '20 000 til 35 000 kr' : '30 000 til 55 000 kr',
        hygienekrav: strengtKrav ? '85 grader desinfeksjon' : '60 grader standard',
        grunn: 'Med lavt volum er kompakte profesjonelle maskiner det rette valget. De gir profesjonell kvalitet uten unødvendig stor investering.',
        maskinLink: '/bedrift/leverandorer/miele-professional/',
        bransjeLink: bransje ? '/bedrift/' + bransje + '/' : '/bedrift/',
      }
    }

    if (isHoy) {
      return {
        maskintype: 'Industrivaskemaskin',
        kapasitet: '20 til 40 kg',
        leverandorer: lavBudsjett ? 'Primus, Girbau' : 'Electrolux Professional Line 5000, Miele Benchmark',
        antall: '2 til 4 maskiner',
        prisrange: lavBudsjett ? '80 000 til 180 000 kr per maskin' : '130 000 til 250 000 kr per maskin',
        hygienekrav: isHotel ? 'Svanemerket, 60 grader' : strengtKrav ? 'EN 14065, 85 grader' : '60 grader standard',
        grunn: 'Hoyt daglig volum krever industrimaskiner med 20 til 40 kg kapasitet for effektiv drift. Hardmount anbefales over 32 kg for lavere restfuktighet.',
        maskinLink: '/bedrift/maskintyper/industrimaskin/',
        bransjeLink: bransje ? '/bedrift/' + bransje + '/' : '/bedrift/',
      }
    }

    // Medium volume default
    return {
      maskintype: 'Profesjonell vaskemaskin',
      kapasitet: '10 til 20 kg',
      leverandorer: lavBudsjett ? 'Electrolux Line 6000, Primus FX' : 'Miele Performance, Electrolux Line 6000',
      antall: '1 til 3 maskiner',
      prisrange: lavBudsjett ? '45 000 til 90 000 kr per maskin' : '70 000 til 150 000 kr per maskin',
      hygienekrav: strengtKrav ? '85 grader desinfeksjon, sporbarhet' : '60 grader standard',
      grunn: 'Middels volum dekkes best av profesjonelle maskiner i 10 til 20 kg klassen. De gir en god balanse mellom kapasitet, pris og driftskostnad.',
      maskinLink: '/bedrift/leverandorer/electrolux-professional/',
      bransjeLink: bransje ? '/bedrift/' + bransje + '/' : '/bedrift/',
    }
  }

  const result = getAnbefaling()

  const optBtn = (value: string, label: string, sub: string, setter: (v: string) => void, current: string) => (
    <button onClick={() => setter(value)} className={'p-4 rounded-xl border text-left transition-all w-full ' + (current === value ? 'border-aqua-400 bg-aqua-50 shadow-sm ring-1 ring-aqua-200' : 'border-slate-200 hover:border-aqua-300')}>
      <div className="text-sm font-semibold text-slate-900">{label}</div>
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </button>
  )

  const stepIndex = ['bransje', 'volum', 'hygiene', 'budsjett', 'resultat'].indexOf(step)
  const sections = [{ id: 'quiz', label: step === 'resultat' ? 'Din anbefaling' : 'Steg ' + (stepIndex + 1) + ' av 4' }]

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
            <span className="text-slate-700 font-medium">Maskinvelger</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600"><IconWasher size={24} /></div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Finn riktig bedriftsmaskin</h1>
              <p className="text-sm text-slate-500">Svar på 4 spørsmål for skreddersydd anbefaling</p>
            </div>
          </div>

          {/* Progress */}
          <div className="flex gap-2 mb-8" data-section-id="quiz">
            {['bransje','volum','hygiene','budsjett','resultat'].map((s, i) => (
              <div key={s} className={'h-2 flex-1 rounded-full transition-all ' + (i <= stepIndex ? 'bg-aqua-500' : 'bg-slate-200')} />
            ))}
          </div>

          {step === 'bransje' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hvilken bransje er du i?</h2>
              <p className="text-sm text-slate-500 mb-6">Dette påvirker maskintype og hygienekrav</p>
              <div className="grid grid-cols-2 gap-3">
                {optBtn('hotell', 'Hotell og overnatting', 'Sengetøy, håndklær, uniformer', setBransje, bransje)}
                {optBtn('barnehage', 'Barnehage', 'Sengetøy, barneklær, kluter', setBransje, bransje)}
                {optBtn('sykehus', 'Sykehus/helse', 'Barrieremaskin pakrevd', setBransje, bransje)}
                {optBtn('borettslag', 'Borettslag/sameie', 'Fellesvaskeri', setBransje, bransje)}
                {optBtn('vaskeri', 'Profesjonelt vaskeri', 'Kommersielt vaskeri', setBransje, bransje)}
                {optBtn('frisor', 'Frisor/salong', 'Håndklær, kapper', setBransje, bransje)}
                {optBtn('ridesenter', 'Ridesenter/stall', 'Dekken, rideutstyr', setBransje, bransje)}
                {optBtn('annet', 'Annet', 'Industri, offshore, osv.', setBransje, bransje)}
              </div>
              {bransje && <button onClick={() => setStep('volum')} className="btn-primary mt-6 inline-flex items-center gap-2">Neste <IconArrow size={14} color="white" /></button>}
            </div>
          )}

          {step === 'volum' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hvor stort er det daglige vaskevolumet?</h2>
              <p className="text-sm text-slate-500 mb-6">Avgjor maskinkapasitet og antall</p>
              <div className="grid grid-cols-2 gap-3">
                {optBtn('lav', 'Under 50 kg/dag', 'Liten bedrift, få ansatte', setVolum, volum)}
                {optBtn('middels', '50 til 300 kg/dag', 'Mellomstort behov', setVolum, volum)}
                {optBtn('hoy', '300 til 1000 kg/dag', 'Stort daglig volum', setVolum, volum)}
                {optBtn('meget-hoy', 'Over 1000 kg/dag', 'Industrielt volum', setVolum, volum)}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button onClick={() => setStep('bransje')} className="text-sm text-slate-500 hover:text-slate-700">Tilbake</button>
                {volum && <button onClick={() => setStep('hygiene')} className="btn-primary inline-flex items-center gap-2">Neste <IconArrow size={14} color="white" /></button>}
              </div>
            </div>
          )}

          {step === 'hygiene' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hvilke hygienekrav gjelder?</h2>
              <p className="text-sm text-slate-500 mb-6">Avgjor om du trenger barrieremaskin eller termisk desinfeksjon</p>
              <div className="grid grid-cols-1 gap-3">
                {optBtn('standard', 'Standard (60 grader)', 'Hotell, barnehage, borettslag, frisor', setHygiene, hygiene)}
                {optBtn('streng', 'Streng (85 grader, sporbarhet)', 'Sykehus, sykehjem, renhold med NS INSTA 800', setHygiene, hygiene)}
                {optBtn('usikker', 'Usikker', 'Jeg trenger hjelp til aa vurdere', setHygiene, hygiene)}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button onClick={() => setStep('volum')} className="text-sm text-slate-500 hover:text-slate-700">Tilbake</button>
                {hygiene && <button onClick={() => setStep('budsjett')} className="btn-primary inline-flex items-center gap-2">Neste <IconArrow size={14} color="white" /></button>}
              </div>
            </div>
          )}

          {step === 'budsjett' && (
            <div className="max-w-lg">
              <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">Hva er budsjettrammene?</h2>
              <p className="text-sm text-slate-500 mb-6">Pavirker leverandorvalg og maskinklasse</p>
              <div className="grid grid-cols-1 gap-3">
                {optBtn('lav', 'Budsjettbevisst', 'Lavest mulig investering, god nok kvalitet', setBudsjett, budsjett)}
                {optBtn('middels', 'Balansert', 'God kvalitet til fornuftig pris', setBudsjett, budsjett)}
                {optBtn('hoy', 'Premium', 'Lengst holdbarhet og lavest driftskostnad', setBudsjett, budsjett)}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button onClick={() => setStep('hygiene')} className="text-sm text-slate-500 hover:text-slate-700">Tilbake</button>
                {budsjett && <button onClick={() => setStep('resultat')} className="btn-primary inline-flex items-center gap-2">Se anbefaling <IconArrow size={14} color="white" /></button>}
              </div>
            </div>
          )}

          {step === 'resultat' && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Vår anbefaling</h2>

              <div className="p-6 rounded-xl border-2 border-aqua-300 bg-aqua-50 mb-6">
                <div className="text-xs font-bold text-aqua-600 uppercase tracking-wider mb-2">Anbefalt løsning</div>
                <div className="font-serif text-2xl font-bold text-slate-900 mb-5">{result.maskintype}</div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Kapasitet</div><div className="text-sm font-bold text-slate-800">{result.kapasitet}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Antall</div><div className="text-sm font-bold text-slate-800">{result.antall}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Prisrange</div><div className="text-sm font-bold text-slate-800">{result.prisrange}</div></div>
                  <div className="p-3 rounded-lg bg-white"><div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Hygiene</div><div className="text-sm font-bold text-slate-800">{result.hygienekrav}</div></div>
                </div>

                <div className="p-3 rounded-lg bg-white mb-5">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Anbefalte leverandorer</div>
                  <div className="text-sm font-bold text-slate-800">{result.leverandorer}</div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-5">{result.grunn}</p>

                <div className="flex flex-wrap gap-3">
                  <Link href={result.maskinLink} className="btn-primary inline-flex items-center gap-2 text-sm">Les mer om maskintypen <IconArrow size={12} color="white" /></Link>
                  <Link href={result.bransjeLink} className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Bransjeguide <IconArrow size={12} color="#0F766E" /></Link>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-white mb-6">
                <h3 className="text-sm font-bold text-slate-700 mb-3">Dine valg</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div><span className="text-slate-400">Bransje:</span> <span className="font-medium text-slate-800 capitalize">{bransje}</span></div>
                  <div><span className="text-slate-400">Volum:</span> <span className="font-medium text-slate-800">{volum === 'lav' ? 'Under 50 kg' : volum === 'middels' ? '50 til 300 kg' : volum === 'hoy' ? '300 til 1000 kg' : 'Over 1000 kg'}</span></div>
                  <div><span className="text-slate-400">Hygiene:</span> <span className="font-medium text-slate-800 capitalize">{hygiene}</span></div>
                  <div><span className="text-slate-400">Budsjett:</span> <span className="font-medium text-slate-800 capitalize">{budsjett}</span></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/bedrift/verktøy/vaskeri-roi/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Beregn ROI <IconArrow size={12} color="#0F766E" /></Link>
                <Link href="/bedrift/verktøy/kapasitetsplanlegger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Planlegg kapasitet <IconArrow size={12} color="#0F766E" /></Link>
                <Link href="/bedrift/prisguide/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Se prisguide <IconArrow size={12} color="#0F766E" /></Link>
              </div>

              <div className="mt-6">
                <button onClick={() => { setStep('bransje'); setBransje(''); setVolum(''); setHygiene(''); setBudsjett('') }} className="text-sm text-slate-500 hover:text-slate-700">Start på nytt</button>
              </div>
            </div>
          )}
        </div>

        <PageSidebar sections={sections} relatedLinks={[
          { href: '/bedrift/verktøy/vaskeri-roi/', label: 'ROI kalkulator' },
          { href: '/bedrift/verktøy/kapasitetsplanlegger/', label: 'Kapasitetsplanlegger' },
          { href: '/bedrift/prisguide/', label: 'Prisguide bedrift' },
          { href: '/bedrift/hygienestandarder/', label: 'Hygienestandarder' },
        ]} showQuiz={false} ctaTitle="Beregn lønnsomhet" ctaText="Lønner eget vaskeri seg for deg?" ctaLink="/bedrift/verktøy/vaskeri-roi/" ctaLinkText="ROI kalkulator" />
      </div>
    </div>
  )
}
