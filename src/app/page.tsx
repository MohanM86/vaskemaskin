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

      {/* ═══ 01: HERO — Dyp teal gradient ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-aqua-950 via-aqua-900 to-aqua-800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-site relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-aqua-100 text-xs font-semibold mb-6 backdrop-blur-sm">
              <IconWasher size={14} />
              Norges mest komplette vaskemaskinportal
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Norges guide til <span className="text-aqua-300">vaskemaskiner</span>
            </h1>
            <p className="text-lg sm:text-xl text-aqua-100 leading-relaxed mb-8 max-w-2xl">
              Sammenlign 18 merker, les dybdetester, finn feilkoder og bruksanvisninger. {stores.length} butikker i hele Norge.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white text-aqua-800 font-bold text-sm hover:bg-aqua-50 transition-all shadow-lg">Les kjøpsguiden<IconArrow size={16} color="#115E59" /></Link>
              <Link href="/feilkode/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20">Finn din feilkode</Link>
              <Link href="/verktoy/vaskemaskinvelger/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20">Finn din maskin</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 60" fill="none" className="w-full block" style={{ marginBottom: "-1px" }}><path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" /></svg></div>
      </section>

      {/* ═══ 02: STATS — Hvit ═══ */}
      <section className="bg-white py-8">
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 text-center">
            {[
              { n: brands.length, l: 'merker' },
              { n: articles.length + comparisons.length, l: 'artikler' },
              { n: errorBrands.reduce((s, b) => s + b.codes.length, 0), l: 'feilkoder' },
              { n: stores.length, l: 'butikker' },
              { n: fylker.length, l: 'fylker' },
              { n: articles.length, l: 'guider' },
            ].map((s, i) => (<div key={i}><div className="font-serif text-3xl font-bold text-aqua-600">{s.n}</div><div className="text-xs text-slate-500 mt-1">{s.l}</div></div>))}
          </div>
        </div>
      </section>

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
                  <div className="flex flex-wrap gap-1">{brand.codes.slice(0, 3).map(c => (<span key={c.slug} className="text-[10px] font-mono bg-aqua-100 text-aqua-700 px-1.5 py-0.5 rounded">{c.code}</span>))}<span className="text-[10px] text-slate-400">+{Math.max(0, brand.codes.length - 3)}</span></div>
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
