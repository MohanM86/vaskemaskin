import { notFound } from 'next/navigation'
import Link from 'next/link'
import { brands, getBrandBySlug, getAllBrandSlugs } from '@/data/brands'
import { getErrorBrand } from '@/data/feilkoder'
import { getManualBySlug } from '@/data/bruksanvisning'
import { comparisons } from '@/data/sammenligninger'
import { IconArrow, IconCheckCircle, IconAlertTriangle, IconStar, IconZap, IconTarget, IconTrendingUp } from '@/components/Icons'
import { AnimatedBar, AnimatedCounter } from '@/components/BrandVisuals'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export function generateStaticParams() { return getAllBrandSlugs().map(slug => ({ slug })) }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) return {}
  return createMeta({ title: brand.metaTitle, description: brand.metaDescription, path: 'merke/' + brand.slug })
}

const brandStats: Record<string, { reliability: number; silence: number; innovation: number; value: number; lifespan: number; serviceNetwork: number }> = {
  samsung: { reliability: 7, silence: 7, innovation: 10, value: 9, lifespan: 11, serviceNetwork: 7 },
  bosch: { reliability: 9, silence: 10, innovation: 7, value: 8, lifespan: 13, serviceNetwork: 9 },
  miele: { reliability: 10, silence: 9, innovation: 7, value: 6, lifespan: 20, serviceNetwork: 10 },
  lg: { reliability: 7, silence: 7, innovation: 9, value: 8, lifespan: 11, serviceNetwork: 6 },
  electrolux: { reliability: 8, silence: 8, innovation: 7, value: 8, lifespan: 12, serviceNetwork: 9 },
  aeg: { reliability: 8, silence: 8, innovation: 8, value: 7, lifespan: 13, serviceNetwork: 8 },
  whirlpool: { reliability: 7, silence: 6, innovation: 6, value: 9, lifespan: 9, serviceNetwork: 6 },
  asko: { reliability: 10, silence: 9, innovation: 5, value: 6, lifespan: 20, serviceNetwork: 7 },
  siemens: { reliability: 9, silence: 10, innovation: 7, value: 7, lifespan: 13, serviceNetwork: 9 },
  grundig: { reliability: 6, silence: 6, innovation: 5, value: 7, lifespan: 8, serviceNetwork: 5 },
  beko: { reliability: 6, silence: 5, innovation: 5, value: 9, lifespan: 7, serviceNetwork: 5 },
  hisense: { reliability: 5, silence: 6, innovation: 6, value: 8, lifespan: 7, serviceNetwork: 4 },
  gorenje: { reliability: 6, silence: 6, innovation: 6, value: 7, lifespan: 8, serviceNetwork: 5 },
  candy: { reliability: 5, silence: 5, innovation: 5, value: 8, lifespan: 7, serviceNetwork: 4 },
  haier: { reliability: 6, silence: 6, innovation: 7, value: 8, lifespan: 8, serviceNetwork: 4 },
  hotpoint: { reliability: 5, silence: 5, innovation: 4, value: 8, lifespan: 6, serviceNetwork: 5 },
  indesit: { reliability: 5, silence: 5, innovation: 4, value: 9, lifespan: 6, serviceNetwork: 5 },
  bauknecht: { reliability: 7, silence: 6, innovation: 6, value: 7, lifespan: 9, serviceNetwork: 5 },
}

const brandTech: Record<string, string[]> = {
  samsung: ['EcoBubble', 'AddWash', 'Hygiene Steam', 'AI Energy', 'SmartThings'],
  bosch: ['i-DOS', 'EcoSilence Drive', 'SpeedPerfect', 'AntiVibration', 'Home Connect'],
  miele: ['TwinDos', 'CapDosing', 'PowerWash', 'SingleWash', 'SteamCare'],
  lg: ['AI Direct Drive', 'TurboWash', 'Steam', 'Allergy Care', 'ThinQ'],
  electrolux: ['SensiCare', 'UltraCare', 'SteamCare', 'AutoDose', 'DelayStart'],
  aeg: ['ProSteam', 'ProSense', 'OKOMix', 'AutoDose', 'Woolmark Blue'],
  whirlpool: ['6th Sense', 'FreshCare+', 'ZEN Motor', 'Steam Hygiene'],
  asko: ['Steel Seal', 'Quattro', 'Active Drum', 'Pro Wash'],
  siemens: ['iQdrive', 'iDos', 'speedPack', 'Home Connect', 'antiStain'],
  grundig: ['FiberCare', 'Steam', 'SteamCure'],
  beko: ['ProSmart', 'AquaFusion', 'SteamCure'],
  hisense: ['Steam', 'Inverter', 'ConnectLife'],
  gorenje: ['SteamTech', 'IonTech', 'WaveActive'],
  candy: ['simply-Fi', 'MixPower', 'Smart Touch'],
  haier: ['I-Pro', 'Smart hOn', 'Direct Motion'],
  hotpoint: ['Anti Stain', 'Steam Hygiene'],
  indesit: ['Push and Wash', 'Turn and Wash'],
  bauknecht: ['6th Sense', 'ProSilent', 'SteamCare'],
}

function splitIntoParagraphs(text: string): string[] {
  // Split long intro text into readable paragraphs
  const sentences = text.split('. ').filter(s => s.trim().length > 0)
  const paragraphs: string[] = []
  let current = ''
  
  for (const sentence of sentences) {
    const s = sentence.endsWith('.') ? sentence : sentence + '.'
    if (current.length + s.length > 350 && current.length > 100) {
      paragraphs.push(current.trim())
      current = s + ' '
    } else {
      current += s + ' '
    }
  }
  if (current.trim()) paragraphs.push(current.trim())
  return paragraphs
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) notFound()
  const otherBrands = brands.filter(b => b.slug !== params.slug)
  const errorBrand = getErrorBrand(params.slug)
  const manual = getManualBySlug(params.slug)
  const brandComparisons = comparisons.filter(c => c.brand1 === brand.name || c.brand2 === brand.name)
  const stats = brandStats[params.slug] || { reliability: 5, silence: 5, innovation: 5, value: 5, lifespan: 8, serviceNetwork: 5 }
  const tech = brandTech[params.slug] || []
  const overallScore = Math.round(((stats.reliability + stats.silence + stats.innovation + stats.value) / 4) * 10) / 10
  const introParagraphs = splitIntoParagraphs(brand.intro)

  const sections = [
    { id: 'intro', label: 'Om ' + brand.name },
    { id: 'score', label: 'Vurdering' },
    { id: 'teknologi', label: 'Teknologi' },
    { id: 'pros-cons', label: 'Fordeler og ulemper' },
    { id: 'models', label: 'Modeller' },
    ...(errorBrand ? [{ id: 'feilkoder', label: 'Feilkoder' }] : []),
    ...(manual ? [{ id: 'bruksanvisning', label: 'Bruksanvisning' }] : []),
    ...(brandComparisons.length > 0 ? [{ id: 'sammenlign', label: 'Sammenligninger' }] : []),
    { id: 'andre', label: 'Andre merker' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: brand.name, url: 'https://vaskemaskin.no/merke/' + brand.slug + '/' }])) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-aqua-700">Hjem</Link>
              <span className="text-slate-300 mx-1.5">/</span>
              <span className="text-slate-700 font-medium">{brand.name}</span>
            </nav>

            {/* Header */}
            <div className="flex items-start gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100 flex items-center justify-center text-2xl font-bold text-aqua-700 flex-shrink-0 border border-aqua-200/50">{brand.name.charAt(0)}</div>
              <div className="flex-1">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">{brand.name} vaskemaskiner</h1>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
                  <span>{brand.country}</span><span className="text-slate-300">|</span>
                  <span>Grunnlagt {brand.founded}</span><span className="text-slate-300">|</span>
                  <span className="text-aqua-600 font-medium">{brand.priceRange}</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-center p-3 rounded-xl bg-aqua-50 border border-aqua-200/50">
                <div className="font-serif text-2xl font-bold text-aqua-600">{overallScore}</div>
                <div className="text-[10px] text-aqua-700 font-medium">/10</div>
              </div>
            </div>

            {/* INTRO — split into readable paragraphs */}
            <section data-section-id="intro" className="scroll-mt-20 mb-10">
              <div className="prose-article space-y-4">
                {introParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* ANIMATED SCORES */}
            <section data-section-id="score" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconTrendingUp size={20} color="#0D9488" /></div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Vår vurdering</h2>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <AnimatedBar value={stats.reliability} max={10} label="Pålitelighet" color="#0D9488" suffix="/10" />
                <AnimatedBar value={stats.silence} max={10} label="Støynivå" color="#14B8A6" suffix="/10" />
                <AnimatedBar value={stats.innovation} max={10} label="Innovasjon" color="#2DD4BF" suffix="/10" />
                <AnimatedBar value={stats.value} max={10} label="Verdi for pengene" color="#5EEAD4" suffix="/10" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-100">
                  <div className="text-center"><div className="font-serif text-2xl font-bold text-aqua-600"><AnimatedCounter target={stats.lifespan} suffix=" år" /></div><div className="text-xs text-slate-500 mt-1">Forventet levetid</div></div>
                  <div className="text-center"><div className="font-serif text-2xl font-bold text-aqua-600"><AnimatedCounter target={stats.serviceNetwork} suffix="/10" /></div><div className="text-xs text-slate-500 mt-1">Service i Norge</div></div>
                  <div className="text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{overallScore}</div><div className="text-xs text-slate-500 mt-1">Totalvurdering</div></div>
                </div>
              </div>
            </section>

            {/* TECH CARDS */}
            {tech.length > 0 && (
              <section data-section-id="teknologi" className="scroll-mt-20 mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconZap size={20} color="#0D9488" /></div>
                  <h2 className="font-serif text-2xl font-bold text-slate-900">Teknologi</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tech.map((t, i) => (
                    <div key={i} className="group p-4 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-md transition-all bg-white">
                      <div className="w-8 h-8 rounded-lg bg-aqua-50 flex items-center justify-center mb-3 group-hover:bg-aqua-100 transition-colors"><IconZap size={14} color="#0D9488" /></div>
                      <div className="text-sm font-bold text-slate-900">{t}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PROS & CONS */}
            <section data-section-id="pros-cons" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconTarget size={20} color="#0D9488" /></div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Fordeler og ulemper</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-green-200 bg-green-50/50">
                  <h3 className="flex items-center gap-2 font-semibold text-green-800 mb-3"><IconCheckCircle size={16} color="#166534" />Fordeler</h3>
                  <ul className="space-y-2">{brand.pros.map((pro, i) => (<li key={i} className="flex items-start gap-2 text-sm text-green-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>{pro}</li>))}</ul>
                </div>
                <div className="p-5 rounded-xl border border-red-200 bg-red-50/50">
                  <h3 className="flex items-center gap-2 font-semibold text-red-800 mb-3"><IconAlertTriangle size={16} color="#991B1B" />Ulemper</h3>
                  <ul className="space-y-2">{brand.cons.map((con, i) => (<li key={i} className="flex items-start gap-2 text-sm text-red-700"><svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>{con}</li>))}</ul>
                </div>
              </div>
            </section>

            {/* MODELS */}
            <section data-section-id="models" className="scroll-mt-20 mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-aqua-50 flex items-center justify-center"><IconStar size={20} color="#0D9488" /></div>
                <h2 className="font-serif text-2xl font-bold text-slate-900">Populære modeller</h2>
              </div>
              <div className="space-y-2">{brand.popularModels.map((model, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-aqua-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-aqua-50 to-aqua-100 flex items-center justify-center text-xs font-bold text-aqua-700 border border-aqua-200/50">{i + 1}</div>
                  <span className="text-sm font-semibold text-slate-800">{model}</span>
                </div>
              ))}</div>
            </section>

            {/* FEILKODER */}
            {errorBrand && (<section data-section-id="feilkoder" className="scroll-mt-20 mb-10"><h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Feilkoder for {brand.name}</h2><p className="text-sm text-slate-600 mb-4">{errorBrand.codes.length} feilkoder forklart med årsaker og løsninger.</p><div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">{errorBrand.codes.slice(0, 6).map((c: any) => (<Link key={c.slug} href={'/feilkode/' + params.slug + '/' + c.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors"><span className="font-mono text-sm font-bold text-aqua-600">{c.code}</span><span className="text-xs text-slate-600 line-clamp-1">{c.title}</span></Link>))}</div><Link href={'/feilkode/' + params.slug + '/'} className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Se alle {brand.name} feilkoder <IconArrow size={12} color="#0F766E" /></Link></section>)}

            {/* BRUKSANVISNING */}
            {manual && (<section data-section-id="bruksanvisning" className="scroll-mt-20 mb-10"><h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Bruksanvisning {brand.name}</h2><p className="text-sm text-slate-600 mb-4">Programmer, symboler, dosering og vedlikeholdstips.</p><Link href={'/bruksanvisning/' + params.slug + '/'} className="btn-primary inline-flex items-center gap-2">Les bruksanvisningen<IconArrow size={14} color="white" /></Link></section>)}

            {/* SAMMENLIGNINGER */}
            {brandComparisons.length > 0 && (<section data-section-id="sammenlign" className="scroll-mt-20 mb-10"><h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Sammenligninger</h2><div className="space-y-2">{brandComparisons.map((c: any) => (<Link key={c.slug} href={'/sammenligning/' + c.slug + '/'} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-aqua-300 hover:shadow-sm transition-all"><div className="flex items-center gap-3"><span className="font-serif font-bold text-slate-900">{c.brand1}</span><span className="text-xs font-bold text-aqua-600 bg-aqua-50 px-2 py-0.5 rounded">VS</span><span className="font-serif font-bold text-slate-900">{c.brand2}</span></div><IconArrow size={14} color="#94A3B8" /></Link>))}</div></section>)}

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-aqua-50 to-aqua-100/50 border border-aqua-200/60 mb-10">
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Vurderer du {brand.name}?</h3>
              <p className="text-sm text-slate-600 mb-4">Les vår komplette kjøpsguide for å finne modellen som passer best.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary inline-flex items-center gap-2 text-sm">Les kjøpsguiden<IconArrow size={14} color="white" /></Link>
                <Link href="/verktoy/vaskemaskinvelger/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700 flex items-center gap-1">Ta vår quiz <IconArrow size={12} color="#0F766E" /></Link>
              </div>
            </div>

            {/* ANDRE MERKER */}
            <section data-section-id="andre" className="scroll-mt-20">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Andre merker</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{otherBrands.slice(0, 8).map(b => (<Link key={b.slug} href={'/merke/' + b.slug + '/'} className="flex items-center gap-2 p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-all"><div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{b.name.charAt(0)}</div><span className="text-sm font-medium text-slate-700">{b.name}</span></Link>))}</div>
            </section>
          </div>

          <PageSidebar sections={sections} relatedLinks={[...(errorBrand ? [{ href: '/feilkode/' + params.slug + '/', label: brand.name + ' feilkoder' }] : []), ...(manual ? [{ href: '/bruksanvisning/' + params.slug + '/', label: brand.name + ' bruksanvisning' }] : []), ...brandComparisons.slice(0, 2).map((c: any) => ({ href: '/sammenligning/' + c.slug + '/', label: c.brand1 + ' vs ' + c.brand2 }))]} ctaTitle={'Usikker på ' + brand.name + '?'} ctaText="Prøv vår quiz for å finne riktig merke." />
        </div>
      </div>
    </>
  )
}
