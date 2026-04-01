import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { articles } from '@/data/articles'
import { fylker } from '@/data/geografi'
import { stores } from '@/lib/stores'
import { errorBrands } from '@/data/feilkoder'
import { terms } from '@/data/ordliste'
import { comparisons } from '@/data/sammenligninger'
import { manuals } from '@/data/bruksanvisning'
import { CategoryIcon, IconArrow, IconWasher, IconClock } from '@/components/Icons'
import { jsonLdWebSite, jsonLdOrganization, jsonLdFaq } from '@/lib/seo'

const heroFaq = [
  { question: 'Hvilken vaskemaskin er best i 2026?', answer: 'For de fleste familier er en frontmater med åtte kilo kapasitet og energiklasse B eller C det beste valget. Merker som Bosch, Samsung og Electrolux tilbyr solide modeller i alle prisklasser.' },
  { question: 'Hvor lenge varer en vaskemaskin?', answer: 'En vaskemaskin varer i gjennomsnitt 10 til 12 år ved normal bruk. Premiummerker som Miele og ASKO tester for 20 års levetid.' },
  { question: 'Hva koster en god vaskemaskin i Norge?', answer: 'En god vaskemaskin koster typisk mellom fem tusen og ti tusen kroner. For under fem tusen får du grunnleggende modeller. Over ti tusen får du premiumfunksjoner.' },
  { question: 'Toppmater eller frontmater?', answer: 'Frontmatere er vanligst i Norge med større kapasitet og mulighet for stabling. Toppmatere passer best for trange rom med bare 40 centimeter bredde.' },
  { question: 'Hva betyr energiklasse A til G?', answer: 'Den nye EU skalaen fra 2021 bruker bokstavene A til G der A er best. De fleste gode vaskemaskiner i dag ligger på klasse B eller C.' },
  { question: 'Hvordan rengjøre vaskemaskinen?', answer: 'Kjør et tomt 90 graders program med eddik eller sitronsyre en gang i måneden. Tørk av lukepakningen etter hver vask og la luken stå på gløtt.' },
  { question: 'Hva betyr feilkoden på displayet?', answer: 'Feilkoder varierer mellom merker. De vanligste er dreneringsfeil og vanninntak feil. Sjekk vår feilkodeoversikt for ditt merke.' },
  { question: 'Har jeg 5 års reklamasjonsrett?', answer: 'Ja, forbrukerkjøpsloven gir deg reklamasjonsrett i opptil 5 år på vaskemaskiner. Dette gjelder uavhengig av produsentgarantien.' },
]

const topBrands = brands.slice(0, 8)
const tier2Brands = brands.slice(8)
const featuredArticles = articles.slice(0, 6)
const sortedFylker = [...fylker].sort((a, b) => {
  const aCount = stores.filter(s => s.fylkeSlug === a.slug).length
  const bCount = stores.filter(s => s.fylkeSlug === b.slug).length
  return bCount - aCount
})

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(heroFaq)) }} />

      {/* ═══ 01: HERO — Slate gradient med animert vaskemaskin ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-site relative py-20 sm:py-28 lg:py-32">
          <div className="flex items-center gap-8 lg:gap-12">
            <div className="max-w-2xl flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] text-white/70 text-xs font-semibold mb-6">
                <IconWasher size={14} />
                Norges mest komplette vaskemaskinportal
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                Norges guide til <span className="text-aqua-400">vaskemaskiner</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
                Sammenlign {brands.length} merker, les dybdetester, finn feilkoder og bruksanvisninger. {stores.length} butikker i hele Norge.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/artikkel/komplett-kjopsguide-2026/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-aqua-600 text-white font-bold text-sm hover:bg-aqua-500 transition-all shadow-lg">Les kjøpsguiden<IconArrow size={16} color="white" /></Link>
                <Link href="/feilkode/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/[0.06] text-white/80 font-semibold text-sm hover:bg-white/[0.12] transition-all border border-white/[0.12]">Finn din feilkode</Link>
                <Link href="/verktoy/vaskemaskinvelger/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/[0.06] text-white/80 font-semibold text-sm hover:bg-white/[0.12] transition-all border border-white/[0.12]">Finn din maskin</Link>
              </div>
              <div className="flex gap-8 pt-8 mt-2">
                {[
                  { n: '500+', l: 'sider' },
                  { n: String(brands.length), l: 'merker' },
                  { n: String(errorBrands.reduce((s, b) => s + b.codes.length, 0)), l: 'feilkoder' },
                  { n: String(stores.length), l: 'butikker' },
                ].map((s, i) => (<div key={i} className="text-center"><div className="font-serif text-2xl font-bold text-aqua-400">{s.n}</div><div className="text-xs text-white/35 mt-1">{s.l}</div></div>))}
              </div>
            </div>
            <div className="hidden lg:block w-[400px] h-[440px] flex-shrink-0">
              <svg viewBox="0 0 320 360" width="400" height="440" fill="none" className="animate-fade-in">
                <rect x="40" y="10" width="240" height="340" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <rect x="54" y="24" width="212" height="48" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                <circle cx="80" cy="48" r="7" fill="rgba(45,212,191,0.25)" stroke="rgba(45,212,191,0.4)" strokeWidth="0.5"/>
                <circle cx="80" cy="48" r="2.5" fill="rgba(45,212,191,0.6)"/>
                <circle cx="100" cy="48" r="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <circle cx="116" cy="48" r="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                <rect x="168" y="39" width="88" height="18" rx="4" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                <text x="212" y="52" textAnchor="middle" fill="rgba(45,212,191,0.6)" fontSize="9" fontWeight="500" fontFamily="monospace">1400 RPM</text>
                <rect x="54" y="24" width="50" height="10" rx="3" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.25)" strokeWidth="0.5"/>
                <text x="79" y="32" textAnchor="middle" fill="rgba(45,212,191,0.5)" fontSize="7" fontFamily="monospace">ECO 40</text>
                <line x1="40" y1="80" x2="280" y2="80" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                <circle cx="160" cy="205" r="112" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"/>
                <circle cx="160" cy="205" r="102" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
                <g className="animate-spin-slow origin-center" style={{ transformOrigin: '160px 205px' }}>
                  <circle cx="160" cy="205" r="92" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
                  <circle cx="160" cy="205" r="72" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5"/>
                  <circle cx="160" cy="205" r="52" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                  <line x1="160" y1="113" x2="160" y2="297" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                  <line x1="68" y1="205" x2="252" y2="205" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                  <line x1="95" y1="140" x2="225" y2="270" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                  <line x1="225" y1="140" x2="95" y2="270" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5"/>
                  <rect x="138" y="128" width="28" height="20" rx="5" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.18)" strokeWidth="0.5" transform="rotate(15,152,138)"/>
                  <rect x="210" y="165" width="22" height="30" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" transform="rotate(-25,221,180)"/>
                  <rect x="220" y="225" width="26" height="18" rx="4" fill="rgba(45,212,191,0.08)" stroke="rgba(45,212,191,0.14)" strokeWidth="0.5" transform="rotate(40,233,234)"/>
                  <rect x="185" y="268" width="18" height="24" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" transform="rotate(-10,194,280)"/>
                  <rect x="108" y="262" width="30" height="16" rx="4" fill="rgba(45,212,191,0.07)" stroke="rgba(45,212,191,0.12)" strokeWidth="0.5" transform="rotate(55,123,270)"/>
                  <rect x="80" y="210" width="20" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" transform="rotate(-35,90,223)"/>
                  <rect x="88" y="155" width="24" height="18" rx="4" fill="rgba(45,212,191,0.06)" stroke="rgba(45,212,191,0.1)" strokeWidth="0.5" transform="rotate(20,100,164)"/>
                  <rect x="150" y="245" width="16" height="22" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" transform="rotate(-50,158,256)"/>
                </g>
                <g className="animate-spin-reverse origin-center" style={{ transformOrigin: '160px 205px' }}>
                  <circle cx="160" cy="125" r="4" fill="rgba(45,212,191,0.2)"/>
                  <circle cx="230" cy="180" r="3" fill="rgba(45,212,191,0.15)"/>
                  <circle cx="215" cy="265" r="5" fill="rgba(45,212,191,0.18)"/>
                  <circle cx="105" cy="255" r="3.5" fill="rgba(45,212,191,0.12)"/>
                  <circle cx="95" cy="175" r="4.5" fill="rgba(45,212,191,0.16)"/>
                </g>
                <circle cx="160" cy="205" r="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <circle cx="160" cy="205" r="6" fill="rgba(45,212,191,0.3)" stroke="rgba(45,212,191,0.5)" strokeWidth="0.5"/>
                <rect x="56" y="320" width="28" height="14" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
                <rect x="236" y="320" width="28" height="14" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>
        </div>
        
      </section>

      {/* Stats now integrated in hero above */}

      {/* ═══ 03: KATEGORIER — Lys aqua ═══ */}
      <section className="py-16 sm:py-20 bg-aqua-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Utforsk</span>
            <h2 className="section-heading mt-2 mb-3">Kategorier</h2>
            <p className="section-subheading mx-auto">Fra toppmatere og frontmatere til vedlikeholdstips og energiguider</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={'/kategori/' + cat.slug + '/'} className="group flex items-start gap-4 p-5 rounded-xl border border-aqua-200/60 bg-white hover:border-aqua-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-aqua-100 flex items-center justify-center text-aqua-700 group-hover:bg-aqua-200 transition-colors flex-shrink-0"><CategoryIcon slug={cat.slug} size={24} /></div>
                <div className="min-w-0"><h3 className="font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{cat.shortName}</h3><p className="text-sm text-slate-500 mt-1 line-clamp-2">{cat.description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04: SAMMENLIGNINGER — Mørk navy ═══ */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-aqua-400 uppercase tracking-wider">Merke vs merke</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">Sammenligninger</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Side om side sammenligninger av de mest populære merkene</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map(comp => (
              <Link key={comp.slug} href={'/sammenligning/' + comp.slug + '/'} className="group p-5 rounded-xl border border-slate-700 bg-white/5 hover:border-aqua-500 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="font-serif text-lg font-bold text-white">{comp.brand1}</span>
                  <span className="text-xs font-bold text-aqua-400 bg-aqua-900/60 px-2.5 py-1 rounded">VS</span>
                  <span className="font-serif text-lg font-bold text-white">{comp.brand2}</span>
                </div>
                <p className="text-sm text-slate-400 text-center line-clamp-2">{comp.verdict.slice(0, 90)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 05: FEILKODER — Hvit med aqua aksent ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Feilsøking</span>
              <h2 className="section-heading mt-2 mb-4">Viser maskinen en feilkode?</h2>
              <p className="text-lg text-slate-600 mb-6">{errorBrands.reduce((s, b) => s + b.codes.length, 0)} feilkoder fra {errorBrands.length} merker forklart. Finn ut hva koden betyr og hva du kan gjøre selv.</p>
              <Link href="/feilkode/" className="btn-primary inline-flex items-center gap-2">Finn din feilkode<IconArrow size={14} color="white" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {errorBrands.slice(0, 6).map(brand => (
                <Link key={brand.slug} href={'/feilkode/' + brand.slug + '/'} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-aqua-400 hover:shadow-md hover:bg-white transition-all">
                  <div className="text-sm font-bold text-slate-900 mb-2">{brand.name}</div>
                  <div className="flex flex-wrap gap-1">{brand.codes.slice(0, 3).map((c: any) => (<span key={c.slug} className="text-[10px] font-mono bg-aqua-100 text-aqua-700 px-1.5 py-0.5 rounded">{c.code}</span>))}<span className="text-[10px] text-slate-400">+{Math.max(0, brand.codes.length - 3)}</span></div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 06: BRUKSANVISNING — Lys aqua ═══ */}
      <section className="py-16 sm:py-20 bg-aqua-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Guider</span>
            <h2 className="section-heading mt-2 mb-3">Bruksanvisninger</h2>
            <p className="section-subheading mx-auto">Programmer, symboler, dosering og vedlikeholdstips for ditt merke</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {manuals.map(m => (
              <Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} className="group p-4 rounded-xl border border-aqua-200/60 bg-white hover:border-aqua-400 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 rounded-xl bg-aqua-100 flex items-center justify-center text-base font-bold text-aqua-700 group-hover:bg-aqua-200 transition-colors mx-auto mb-3">{m.name.charAt(0)}</div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{m.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 07: FINN BUTIKK — Dyp teal ═══ */}
      <section className="py-16 sm:py-20 bg-aqua-800">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua-300 uppercase tracking-wider">Lokal</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">Finn hvitevarebutikk nær deg</h2>
            <p className="text-lg text-aqua-200">{stores.length} butikker fordelt på {fylker.length} fylker</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {sortedFylker.slice(0, 10).map(f => {
              const count = stores.filter(s => s.fylkeSlug === f.slug).length
              return (
                <Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="group p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 hover:border-white/20 transition-all text-center">
                  <div className="font-serif text-2xl font-bold text-white">{count}</div>
                  <div className="text-sm text-aqua-200 mt-1">{f.name}</div>
                </Link>
              )
            })}
          </div>
          <div className="text-center"><Link href="/fylker/" className="text-sm font-semibold text-aqua-200 hover:text-white transition-colors">Se alle {fylker.length} fylker</Link></div>
        </div>
      </section>

      {/* ═══ 08: MERKER — Hvit ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Merker</span>
            <h2 className="section-heading mt-2 mb-3">{brands.length} merker dekket</h2>
            <p className="section-subheading mx-auto">Anmeldelser, priser og anbefalinger for alle de store merkene</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Premium og storselgere</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{topBrands.map(b => (
              <Link key={b.slug} href={'/merke/' + b.slug + '/'} className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-aqua-400 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-aqua-50 flex items-center justify-center text-sm font-bold text-aqua-700 group-hover:bg-aqua-100 transition-colors">{b.name.charAt(0)}</div>
                <div><div className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{b.name}</div><div className="text-xs text-slate-400">{b.country}</div></div>
              </Link>
            ))}</div>
          </div>
          {tier2Brands.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Flere merker</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">{tier2Brands.map(b => (
                <Link key={b.slug} href={'/merke/' + b.slug + '/'} className="p-3 rounded-lg border border-slate-200 hover:border-aqua-300 text-center text-sm text-slate-600 hover:text-aqua-700 transition-colors">{b.name}</Link>
              ))}</div>
            </div>
          )}
        </div>
      </section>

      {/* ═══ 09: ARTIKLER — Lys slate ═══ */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Kunnskap</span>
            <h2 className="section-heading mt-2 mb-3">Populære guider</h2>
            <p className="section-subheading mx-auto">Dybdeartikler med praktiske råd og anbefalinger</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredArticles.map(article => (
              <Link key={article.slug} href={'/artikkel/' + article.slug + '/'} className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-aqua-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-aqua-600 bg-aqua-50 px-2.5 py-1 rounded-full">{article.category.replace(/-/g, ' ')}</span>
                  <span className="flex items-center gap-1 text-xs text-slate-400"><IconClock size={12} />{article.readingTime}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-aqua-700 transition-colors line-clamp-2 mb-2">{article.title}</h3>
                <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10: ORDLISTE — Hvit ═══ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Leksikon</span>
            <h2 className="section-heading mt-2 mb-3">Ordliste</h2>
            <p className="section-subheading mx-auto">{terms.length} begreper forklart i et enkelt språk</p>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {terms.slice(0, 4).map(term => (
              <Link key={term.slug} href={'/ordliste/' + term.slug + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-400 hover:shadow-md transition-all">
                <div className="text-sm font-bold text-slate-900 mb-1">{term.term}</div>
                <div className="text-xs text-slate-500 line-clamp-2">{term.definition}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/ordliste/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se hele ordlisten A til Å</Link></div>
        </div>
      </section>

      {/* ═══ 11: VERKTØY — Mørk teal gradient ═══ */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-aqua-900 to-aqua-950">
        <div className="container-site">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua-400 uppercase tracking-wider">Interaktivt</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 mb-3">Verktøy</h2>
            <p className="text-lg text-aqua-200/70 max-w-2xl mx-auto">Kalkulatorer og verktøy som hjelper deg å ta riktig beslutning</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Link href="/verktoy/energikalkulator/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all">
              <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-aqua-300 transition-colors">Energikalkulator</h3>
              <p className="text-sm text-aqua-200/60">Beregn strømkostnaden per år</p>
            </Link>
            <Link href="/verktoy/vaskemaskinvelger/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all">
              <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-aqua-300 transition-colors">Vaskemaskinvelger</h3>
              <p className="text-sm text-aqua-200/60">3 spørsmål, personlig anbefaling</p>
            </Link>
            <Link href="/verktoy/kapasitetskalkulator/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all">
              <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-aqua-300 transition-colors">Kapasitetskalkulator</h3>
              <p className="text-sm text-aqua-200/60">Finn riktig trommelstørrelse</p>
            </Link>
            <Link href="/verktoy/sammenlign-pris/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all">
              <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-aqua-300 transition-colors">Sammenlign pris per år</h3>
              <p className="text-sm text-aqua-200/60">Sammenlign to maskiner over tid</p>
            </Link>
            <Link href="/verktoy/reparere-eller-bytte/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all">
              <h3 className="font-serif text-base font-bold text-white mb-1.5 group-hover:text-aqua-300 transition-colors">Reparere eller bytte?</h3>
              <p className="text-sm text-aqua-200/60">Finn ut hva som lønner seg</p>
            </Link>
            <Link href="/verktoy/" className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-aqua-400/50 transition-all flex items-center justify-center">
              <span className="text-sm font-semibold text-aqua-300 group-hover:text-aqua-200 transition-colors">Se alle verktøy</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 12: FAQ — Lys aqua ═══ */}
      <section className="py-16 sm:py-20 bg-aqua-50">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Spørsmål og svar</span>
            <h2 className="section-heading mt-2">Ofte stilte spørsmål</h2>
          </div>
          <div className="space-y-3">
            {heroFaq.map((item, i) => (
              <details key={i} className="group border border-aqua-200/60 rounded-xl overflow-hidden bg-white shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-slate-800 hover:bg-aqua-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg className="w-5 h-5 text-aqua-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-aqua-100 pt-4">{item.answer}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/faq/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se alle spørsmål og svar</Link></div>
        </div>
      </section>

      {/* ═══ 13: HVITEVARE ØKOSYSTEM ═══ */}
      <section className="py-12 bg-aqua-950">
        <div className="container-site">
          <div className="text-center mb-6">
            <p className="text-xs font-bold text-aqua-600 uppercase tracking-wider">Del av hvitevare.no</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <a href="https://hvitevare.no" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-aqua-500/40 text-base font-semibold text-aqua-300 hover:border-aqua-400 hover:text-aqua-200 transition-colors">hvitevare.no</a>
            <div className="flex items-center gap-3 text-xs text-aqua-700">
              <div className="w-8 h-px bg-aqua-800"></div>
              <span>portaler</span>
              <div className="w-8 h-px bg-aqua-800"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-5 py-2.5 rounded-lg border border-aqua-600/30 text-sm font-medium text-aqua-400">vaskemaskin.no</span>
              <a href="https://komfyr.no" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-aqua-800/50 text-sm text-aqua-500 hover:border-aqua-600/40 hover:text-aqua-400 transition-colors">komfyr.no</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
