import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { articles } from '@/data/articles'
import { CategoryIcon, IconArrow, IconWasher } from '@/components/Icons'
import { ArticleCard } from '@/components/UI'
import { jsonLdWebSite, jsonLdOrganization, jsonLdFaq } from '@/lib/seo'

const heroFaq = [
  { question: 'Hvilken vaskemaskin er best i 2026?', answer: 'Det avhenger av dine behov. For de fleste familier er en frontmater med åtte kilo kapasitet og energiklasse B eller C det beste valget. Merker som Bosch, Samsung og Electrolux tilbyr solide modeller i alle prisklasser.' },
  { question: 'Hvor lenge varer en vaskemaskin?', answer: 'En vaskemaskin varer i gjennomsnitt 10 til 12 år ved normal bruk. Premiummerker som Miele tester for 20 års levetid. Riktig vedlikehold kan forlenge levetiden betydelig.' },
  { question: 'Hva koster en god vaskemaskin i Norge?', answer: 'En god vaskemaskin koster typisk mellom fem tusen og ti tusen kroner. For under fem tusen får du grunnleggende modeller som vasker godt. Over ti tusen får du premiumfunksjoner som automatisk dosering og dampfunksjon.' },
]

export default function HomePage() {
  const featuredArticles = articles.slice(0, 6)
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(heroFaq)) }} />

      <section className="relative overflow-hidden bg-gradient-to-br from-aqua-50 via-white to-slate-50">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0D9488 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container-site relative py-16 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-aqua-100/60 text-aqua-700 text-xs font-semibold mb-6"><IconWasher size={14} />Uavhengig ressurs for norske forbrukere</div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-5">Alt du trenger å vite om <span className="text-aqua-600">vaskemaskiner</span></h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">Kjøpsguider, merkesammenligninger, vedlikeholdstips og ekspertanbefalinger. Vi hjelper deg å finne den perfekte vaskemaskinen for ditt hjem.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/artikkel/komplett-kjopsguide-2026/" className="btn-primary">Les kjøpsguiden<IconArrow size={16} color="white" /></Link>
              <Link href="/kategori/frontmatere/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold text-sm hover:border-aqua-300 hover:text-aqua-700 transition-all">Utforsk kategorier</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container-site py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div><div className="font-serif text-2xl font-bold text-aqua-600">8</div><div className="text-sm text-slate-500 mt-0.5">merker sammenlignet</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">10</div><div className="text-sm text-slate-500 mt-0.5">grundige artikler</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">6</div><div className="text-sm text-slate-500 mt-0.5">kategorier dekket</div></div>
            <div><div className="font-serif text-2xl font-bold text-aqua-600">100%</div><div className="text-sm text-slate-500 mt-0.5">uavhengig innhold</div></div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12"><h2 className="section-heading mb-3">Utforsk etter kategori</h2><p className="section-subheading mx-auto">Fra toppmatere og frontmatere til vedlikeholdstips og energiguider</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(cat => (
              <Link key={cat.slug} href={'/kategori/' + cat.slug + '/'} className="group flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-aqua-50 flex items-center justify-center text-aqua-600 group-hover:bg-aqua-100 transition-colors flex-shrink-0"><CategoryIcon slug={cat.slug} size={22} /></div>
                <div><h3 className="font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{cat.shortName}</h3><p className="text-sm text-slate-500 mt-1 line-clamp-2">{cat.description}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10"><div><h2 className="section-heading mb-2">Siste artikler</h2><p className="section-subheading">Grundige guider og oppdaterte anbefalinger</p></div></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{featuredArticles.map(article => (<div key={article.slug} className="reveal"><ArticleCard article={article} /></div>))}</div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12"><h2 className="section-heading mb-3">Merker vi dekker</h2><p className="section-subheading mx-auto">Uavhengige oversikter over de største vaskemaskinmerkene i Norge</p></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brands.map(brand => (
              <Link key={brand.slug} href={'/merke/' + brand.slug + '/'} className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-aqua-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500 group-hover:bg-aqua-50 group-hover:text-aqua-600 transition-colors">{brand.name.charAt(0)}</div>
                <div><div className="text-sm font-semibold text-slate-900 group-hover:text-aqua-700 transition-colors">{brand.name}</div><div className="text-xs text-slate-400">{brand.country}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-site max-w-3xl">
          <h2 className="section-heading text-center mb-10">Ofte stilte spørsmål</h2>
          <div className="space-y-3">
            {heroFaq.map((item, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden bg-white">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">{item.question}<svg className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg></summary>
                <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
