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
import { CategoryIcon, IconArrow, IconWasher, IconSearch, IconEnergi, IconVedlikehold, IconKjopsguide } from '@/components/Icons'
import { ArticleCard } from '@/components/UI'
import { jsonLdWebSite, jsonLdOrganization, jsonLdFaq } from '@/lib/seo'

const heroFaq = [
  { question: 'Hvilken vaskemaskin er best i 2026?', answer: 'Det avhenger av dine behov. For de fleste familier er en frontmater med åtte kilo kapasitet og energiklasse B eller C det beste valget. Merker som Bosch, Samsung og Electrolux tilbyr solide modeller i alle prisklasser.' },
  { question: 'Hvor lenge varer en vaskemaskin?', answer: 'En vaskemaskin varer i gjennomsnitt 10 til 12 år ved normal bruk. Premiummerker som Miele og ASKO tester for 20 års levetid. Riktig vedlikehold kan forlenge levetiden betydelig.' },
  { question: 'Hva koster en god vaskemaskin i Norge?', answer: 'En god vaskemaskin koster typisk mellom fem tusen og ti tusen kroner. For under fem tusen får du grunnleggende modeller som vasker godt. Over ti tusen får du premiumfunksjoner som automatisk dosering og dampfunksjon.' },
  { question: 'Er det verdt å kjøpe en dyr vaskemaskin?', answer: 'Ofte ja. En dyrere maskin har lavere energiforbruk, bedre holdbarhet og bedre vaskeresultat. Over maskinens levetid kan besparelsene på strøm og vaskemiddel utgjøre mer enn prisforskjellen.' },
  { question: 'Toppmater eller frontmater?', answer: 'Frontmatere er vanligst i Norge med større kapasitet og mulighet for stabling. Toppmatere passer best for trange rom med bare 40 centimeter bredde. Les vår komplette sammenligning for å finne ut hva som passer deg.' },
  { question: 'Hva betyr energiklasse A til G?', answer: 'Den nye EU skalaen fra 2021 bruker bokstavene A til G der A er best. De fleste gode vaskemaskiner i dag ligger på klasse B eller C. En maskin merket B på den nye skalaen tilsvarer omtrent gammel A+++ merking.' },
  { question: 'Hvordan rengjøre vaskemaskinen?', answer: 'Kjør et tomt 90 graders program med eddik eller sitronsyre én gang i måneden. Tørk av lukepakningen etter hver vask og la luken stå på gløtt. Rengjør pumpefilteret hver tredje måned.' },
  { question: 'Hva betyr feilkoden på displayet?', answer: 'Feilkoder varierer mellom merker. De vanligste er dreneringsfeil (5E på Samsung, E18 på Bosch) og vanninntak feil (4E på Samsung, E17 på Bosch). Sjekk vår feilkodeoversikt for ditt merke.' },
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

      {/* 01: Hero med søkefelt */}
      <section className="relative overflow-hidden bg-gradient-to-br from-aqua-50 via-white to-slate-50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0D9488 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aqua-100/60 text-aqua-700 text-xs font-semibold mb-6">
              <IconWasher size={14} />
              Uavhengig ressurs for norske forbrukere
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">
              Alt du trenger å vite om <span className="text-aqua-600">vaskemaskiner</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Kjøpsguider, merkesammenligninger, feilkoder, bruksanvisninger og {stores.length} butikker over hele Norge. Vi hjelper deg å finne den perfekte vaskemaskinen.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary">
                Les kjøpsguiden
                <IconArrow size={16} color="white" />
              </Link>
              <Link href="/feilkode/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:border-aqua-300 hover:text-aqua-700 transition-all">
                Finn din feilkode
              </Link>
              <Link href="/fylker/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:border-aqua-300 hover:text-aqua-700 transition-all">
                Finn butikk nær deg
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <Link href="/sammenligning/bosch-vs-samsung/" className="hover:text-aqua-600 transition-colors">Bosch vs Samsung</Link>
              <span>|</span>
              <Link href="/artikkel/energimerking-forklart/" className="hover:text-aqua-600 transition-colors">Energimerking forklart</Link>
              <span>|</span>
              <Link href="/artikkel/rengjore-vaskemaskin/" className="hover:text-aqua-600 transition-colors">Rengjøre vaskemaskin</Link>
              <span>|</span>
              <Link href="/bruksanvisning/" className="hover:text-aqua-600 transition-colors">Bruksanvisninger</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Stats bar */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container-site py-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{brands.length}</div><div className="text-xs text-slate-500 mt-0.5">merker dekket</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{articles.length + comparisons.length}</div><div className="text-xs text-slate-500 mt-0.5">artikler og guider</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{errorBrands.reduce((sum, b) => sum + b.codes.length, 0)}</div><div className="text-xs text-slate-500 mt-0.5">feilkoder forklart</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{stores.length}</div><div className="text-xs text-slate-500 mt-0.5">butikker</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{fylker.length}</div><div className="text-xs text-slate-500 mt-0.5">fylker</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">{terms.length}</div><div className="text-xs text-slate-500 mt-0.5">begreper i ordlisten</div></div>
          </div>
        </div>
      </section>

      {/* 03: Kategorier */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Utforsk etter kategori</h2>
            <p className="section-subheading mx-auto">Fra toppmatere og frontmatere til vedlikeholdstips og energiguider</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={'/kategori/' + cat.slug + '/'} className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600 group-hover:bg-aqua-100 transition-colors flex-shrink-0">
                  <CategoryIcon slug={cat.slug} size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{cat.shortName}</h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 04: Merke vs merke sammenligninger */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Sammenlign merker</h2>
            <p className="section-subheading mx-auto">Side om side sammenligninger av de mest populære merkene</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons.map(comp => (
              <Link key={comp.slug} href={'/sammenligning/' + comp.slug + '/'} className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="font-serif text-lg font-bold text-slate-900">{comp.brand1}</span>
                  <span className="text-xs font-bold text-aqua-600 bg-aqua-50 px-2 py-1 rounded">VS</span>
                  <span className="font-serif text-lg font-bold text-slate-900">{comp.brand2}</span>
                </div>
                <p className="text-sm text-slate-500 text-center line-clamp-2">{comp.verdict.slice(0, 100)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 05: Feilkoder CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-heading mb-4">Viser maskinen en feilkode?</h2>
              <p className="text-lg text-slate-600 mb-6">Vi har forklart {errorBrands.reduce((sum, b) => sum + b.codes.length, 0)} feilkoder fra {errorBrands.length} merker. Finn ut hva koden betyr og hva du kan gjøre selv før du ringer servicetekniker.</p>
              <Link href="/feilkode/" className="btn-primary">Finn din feilkode</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {errorBrands.slice(0, 6).map(brand => (
                <Link key={brand.slug} href={'/feilkode/' + brand.slug + '/'} className="p-4 rounded-xl border border-slate-200 hover:border-aqua-300 transition-colors">
                  <div className="text-sm font-semibold text-slate-900 mb-2">{brand.name}</div>
                  <div className="flex flex-wrap gap-1">{brand.codes.slice(0, 3).map(c => (<span key={c.slug} className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">{c.code}</span>))}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06: Bruksanvisninger */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Bruksanvisninger</h2>
            <p className="section-subheading mx-auto">Programmer, symboler, dosering og vedlikeholdstips for ditt merke</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {manuals.map(m => (
              <Link key={m.slug} href={'/bruksanvisning/' + m.slug + '/'} className="group p-4 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 transition-all text-center">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-aqua-50 group-hover:text-aqua-600 transition-colors mx-auto mb-2">{m.name.charAt(0)}</div>
                <div className="text-sm font-medium text-slate-900 group-hover:text-aqua-700 transition-colors">{m.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 07: Finn butikk nær deg */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <h2 className="section-heading mb-3">Finn hvitevarebutikk nær deg</h2>
          <p className="section-subheading mb-8">{stores.length} butikker fordelt på {fylker.length} fylker over hele Norge</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {sortedFylker.slice(0, 10).map(f => {
              const count = stores.filter(s => s.fylkeSlug === f.slug).length
              return (
                <Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="group p-4 rounded-xl border border-slate-200 hover:border-aqua-300 transition-all text-center">
                  <div className="font-serif text-xl font-bold text-aqua-600">{count}</div>
                  <div className="text-sm text-slate-700 mt-1">{f.name}</div>
                </Link>
              )
            })}
          </div>
          <div className="text-center">
            <Link href="/fylker/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se alle {fylker.length} fylker</Link>
          </div>
        </div>
      </section>

      {/* 08: Merker */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Merker vi dekker</h2>
            <p className="section-subheading mx-auto">{brands.length} vaskemaskinmerker med anmeldelser, priser og anbefalinger</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Premiummerker og storselgere</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {topBrands.map(brand => (
                <Link key={brand.slug} href={'/merke/' + brand.slug + '/'} className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-aqua-50 group-hover:text-aqua-600 transition-colors">{brand.name.charAt(0)}</div>
                  <div><div className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{brand.name}</div><div className="text-xs text-slate-400">{brand.country}</div></div>
                </Link>
              ))}
            </div>
          </div>
          {tier2Brands.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Flere merker</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {tier2Brands.map(brand => (
                  <Link key={brand.slug} href={'/merke/' + brand.slug + '/'} className="p-3 rounded-lg border border-slate-200 bg-white hover:border-aqua-300 text-center text-sm text-slate-700 transition-colors">{brand.name}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 09: Siste artikler */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-heading mb-2">Siste artikler</h2>
              <p className="section-subheading">Grundige guider og oppdaterte anbefalinger</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredArticles.map(article => (
              <div key={article.slug} className="reveal">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10: Ordliste preview */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Ordliste: Vaskemaskintermer</h2>
            <p className="section-subheading mx-auto">{terms.length} begreper forklart i et enkelt og forståelig språk</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {terms.slice(0, 8).map(term => (
              <Link key={term.slug} href={'/ordliste/' + term.slug + '/'} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 transition-colors">
                <div className="text-sm font-semibold text-slate-900 mb-1">{term.term}</div>
                <div className="text-xs text-slate-500 line-clamp-2">{term.definition}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/ordliste/" className="text-sm font-semibold text-aqua-600 hover:text-aqua-700">Se hele ordlisten A til Å</Link>
          </div>
        </div>
      </section>

      {/* 11: Fylker oversikt */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <h2 className="section-heading mb-3 text-center">Hvitevarebutikker over hele Norge</h2>
          <p className="section-subheading mx-auto text-center mb-10">Alle {fylker.length} fylker med butikker som selger vaskemaskiner</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {sortedFylker.map(f => {
              const count = stores.filter(s => s.fylkeSlug === f.slug).length
              return (
                <Link key={f.slug} href={'/fylke/' + f.slug + '/'} className="group p-3 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors text-center">
                  <div className="font-serif text-lg font-bold text-aqua-600 group-hover:text-aqua-700">{count}</div>
                  <div className="text-xs text-slate-600 mt-0.5">{f.name}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 12: FAQ */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-center mb-10">Ofte stilte spørsmål</h2>
          <div className="space-y-3">
            {heroFaq.map((item, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13: Økosystem */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container-site">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Del av IT-Firma.no nettverket</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://hvitevare.no" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-aqua-300 hover:text-aqua-700 transition-colors">hvitevare.no</a>
            <a href="https://komfyr.no" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-aqua-300 hover:text-aqua-700 transition-colors">komfyr.no</a>
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-aqua-300 hover:text-aqua-700 transition-colors">it-firma.no</a>
          </div>
        </div>
      </section>
    </>
  )
}
