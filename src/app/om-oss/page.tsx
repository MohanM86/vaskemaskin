import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import { IconWasher } from '@/components/Icons'
import PageSidebar from '@/components/PageSidebar'
import { stores } from '@/lib/stores'
import { articles } from '@/data/articles'
import { brands } from '@/data/brands'
import { errorBrands } from '@/data/feilkoder'
import { terms } from '@/data/ordliste'
import { createMeta, jsonLdBreadcrumb } from '@/lib/seo'

export const metadata = createMeta({ title: 'Om Vaskemaskin.no | Uavhengig informasjon', description: 'Vaskemaskin.no er Norges mest komplette ressurs om vaskemaskiner. Uavhengig informasjon uten bindinger til produsenter.', path: 'om-oss' })

export default function OmOssPage() {
  const totalCodes = errorBrands.reduce((sum, b) => sum + b.codes.length, 0)

  const sections = [
    { id: 'hvem', label: 'Hvem vi er' },
    { id: 'tall', label: 'Vaskemaskin.no i tall' },
    { id: 'uavhengig', label: 'Uavhengighet' },
    { id: 'metode', label: 'Vår metode' },
    { id: 'kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb([{ name: 'Hjem', url: 'https://vaskemaskin.no/' }, { name: 'Om oss', url: 'https://vaskemaskin.no/om-oss/' }])) }} />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-96 h-96 bg-aqua-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container-site py-16 md:py-24 relative z-10">
          <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Om oss' }]} />
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-8">Om Vaskemaskin.no</h1>
        </div>
      </section>

    <div className="container-site py-10">
      <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
        <div className="min-w-0">

          <section data-section-id="hvem" className="scroll-mt-20 mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Hvem vi er</h2>
            <div className="prose-article">
              <p>Vaskemaskin.no er Norges mest komplette ressurs om vaskemaskiner. Vi tilbyr uavhengig informasjon, kjøpsguider, feilkodeoversikter, bruksanvisninger og en komplett butikkoversikt for hele Norge. Vår misjon er å hjelpe norske forbrukere med å ta informerte valg når de skal kjøpe, bruke eller vedlikeholde vaskemaskinen sin.</p>
            </div>
          </section>

          <section data-section-id="tall" className="scroll-mt-20 mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">Vaskemaskin.no i tall</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{articles.length}</div><div className="text-xs text-slate-500 mt-1">artikler og guider</div></div>
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{brands.length}</div><div className="text-xs text-slate-500 mt-1">merker dekket</div></div>
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{totalCodes}</div><div className="text-xs text-slate-500 mt-1">feilkoder forklart</div></div>
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{stores.length}</div><div className="text-xs text-slate-500 mt-1">butikker kartlagt</div></div>
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">{terms.length}</div><div className="text-xs text-slate-500 mt-1">ordlistebegreper</div></div>
              <div className="p-4 rounded-xl bg-aqua-50 border border-aqua-200 text-center"><div className="font-serif text-2xl font-bold text-aqua-600">15</div><div className="text-xs text-slate-500 mt-1">fylker dekket</div></div>
            </div>
          </section>

          <section data-section-id="uavhengig" className="scroll-mt-20 mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Uavhengighet</h2>
            <div className="prose-article">
              <p>Vaskemaskin.no har ingen bindinger til produsenter, importører eller forhandlere. Vi mottar ingen betaling for å anbefale bestemte merker eller modeller. Våre anbefalinger er basert på uavhengig research, offentlig tilgjengelige testresultater og egne analyser. Vi kan i fremtiden bruke affiliate lenker til norske nettbutikker, men dette vil aldri påvirke våre anbefalinger eller vurderinger.</p>
            </div>
          </section>

          <section data-section-id="metode" className="scroll-mt-20 mb-10">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Vår metode</h2>
            <div className="prose-article">
              <p>Vi baserer vårt innhold på en kombinasjon av ekspertkilder, forbrukertester fra Forbrukerrådet og internasjonale testorganisasjoner, produsentinformasjon og brukererfaring. Feilkodeoversiktene er basert på offisielle servicebruksanvisninger og verifisert mot faktiske brukeropplevelser. Butikkoversikten er basert på offentlige registre og oppdateres regelmessig.</p>
            </div>
          </section>

          <section data-section-id="kontakt" className="scroll-mt-20">
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Kontakt</h2>
            <div className="p-5 rounded-xl border border-slate-200 bg-white">
              <p className="text-sm text-slate-600 mb-4">Vaskemaskin.no er en tjeneste fra IT-Firma.no.</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Nettsted</span><a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-aqua-600 hover:underline">it-firma.no</a></div>
              </div>
            </div>
          </section>
        </div>
        <PageSidebar sections={sections} relatedLinks={[
          { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
          { href: '/feilkode/', label: 'Alle feilkoder' },
          { href: '/fylker/', label: 'Finn butikk' },
        ]} ctaTitle="Utforsk innholdet" ctaText="Start med vår komplette kjøpsguide." ctaLink="/artikkel/komplett-kjopsguide-2026/" ctaLinkText="Les guiden" />
      </div>
    </div>
    </>
  )
}