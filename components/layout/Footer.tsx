import Link from 'next/link'
import { getOtherSites } from '@/data/portfolio'

export default function Footer() {
  var otherSites = getOtherSites()

  return (
    <footer className="bg-ink text-white/50">
      {/* Portfolio cross-link bar */}
      <div className="border-b border-white/10 px-5 lg:px-12 py-5">
        <div className="flex items-center gap-6 text-sm">
          <span className="text-white/30 text-xs uppercase tracking-widest font-bold">Hvitevareportaler fra IT-Firma.no</span>
          <span className="text-white/80 font-semibold">vaskemaskin.no</span>
          {otherSites.map(function(site) {
            return (
              <a
                key={site.domain}
                href={site.url}
                className="text-white/40 hover:text-white/80 transition-colors"
                rel="noopener"
              >
                {site.domain}
              </a>
            )
          })}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="px-5 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="text-white font-bold text-xl mb-4">vaskemaskin.no</div>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
              Norges mest komplette og uavhengige ressurs for vaskemaskiner. Ekspertskrevet, oppdatert og alltid gratis.
            </p>
          </div>

          <FooterCol title="Guider">
            <FooterLink href="/guide/vaskemaskin-best-i-test-2026/">Best i test 2026</FooterLink>
            <FooterLink href="/guide/velg-riktig-vaskemaskin/">Kjopsguide</FooterLink>
            <FooterLink href="/guide/rense-vaskemaskinen/">Vedlikehold</FooterLink>
            <FooterLink href="/guide/stromforbruk-vaskemaskin/">Stromforbruk</FooterLink>
            <FooterLink href="/guide/montere-vaskemaskin-selv/">Installasjon</FooterLink>
            <FooterLink href="/guide/">Alle guider</FooterLink>
          </FooterCol>

          <FooterCol title="Merker">
            <FooterLink href="/merke/miele/">Miele</FooterLink>
            <FooterLink href="/merke/samsung/">Samsung</FooterLink>
            <FooterLink href="/merke/bosch/">Bosch</FooterLink>
            <FooterLink href="/merke/aeg/">AEG</FooterLink>
            <FooterLink href="/merke/electrolux/">Electrolux</FooterLink>
            <FooterLink href="/merke/siemens/">Siemens</FooterLink>
            <FooterLink href="/merke/lg/">LG</FooterLink>
            <FooterLink href="/merke/">Alle merker</FooterLink>
          </FooterCol>

          <FooterCol title="Store byer">
            <FooterLink href="/forhandler/oslo/oslo/">Oslo</FooterLink>
            <FooterLink href="/forhandler/vestland/bergen/">Bergen</FooterLink>
            <FooterLink href="/forhandler/trondelag/trondheim/">Trondheim</FooterLink>
            <FooterLink href="/forhandler/rogaland/stavanger/">Stavanger</FooterLink>
            <FooterLink href="/forhandler/agder/kristiansand/">Kristiansand</FooterLink>
            <FooterLink href="/forhandler/viken/drammen/">Drammen</FooterLink>
            <FooterLink href="/forhandler/troms-og-finnmark/tromso/">Tromso</FooterLink>
          </FooterCol>

          <FooterCol title="Fylker">
            <FooterLink href="/forhandler/oslo/">Oslo</FooterLink>
            <FooterLink href="/forhandler/viken/">Viken</FooterLink>
            <FooterLink href="/forhandler/vestland/">Vestland</FooterLink>
            <FooterLink href="/forhandler/rogaland/">Rogaland</FooterLink>
            <FooterLink href="/forhandler/trondelag/">Trondelag</FooterLink>
            <FooterLink href="/forhandler/nordland/">Nordland</FooterLink>
            <FooterLink href="/forhandler/">Alle fylker</FooterLink>
          </FooterCol>

          <FooterCol title="Om oss">
            <FooterLink href="/om-oss/">Om vaskemaskin.no</FooterLink>
            <FooterLink href="/kontakt/">Kontakt</FooterLink>
            <FooterLink href="/personvern/">Personvern</FooterLink>
            <FooterLink href="/vilkar/">Vilkar</FooterLink>
          </FooterCol>
        </div>
      </div>

      {/* Popular searches */}
      <div className="border-t border-white/10 px-5 lg:px-12 py-8">
        <h6 className="text-[0.65rem] uppercase tracking-[0.18em] text-white/25 font-bold mb-5">Populare sok</h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-1">
          {[
            'Vaskemaskin best i test',
            'Miele vaskemaskin',
            'Samsung vaskemaskin',
            'Vaskemaskin med torketrommel',
            'Vaskemaskin tilbud',
            'AEG vaskemaskin',
            'Electrolux vaskemaskin',
            'Bosch vaskemaskin',
            'Siemens vaskemaskin',
            'LG vaskemaskin',
            'Vaskemaskin levetid',
            'Rense vaskemaskin',
            'Vaskemaskin stromforbruk',
            'Montere vaskemaskin selv',
            'Vaskemaskin omdreininger',
            'Vaskemaskin kg kapasitet',
            'Stillegaende vaskemaskin',
            'Billig vaskemaskin',
          ].map(function(term) {
            return (
              <a key={term} href="#" className="text-[0.82rem] text-white/35 hover:text-white/70 transition-colors py-1">
                {term}
              </a>
            )
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-5 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span className="text-xs text-white/20">
          &copy; 2026 vaskemaskin.no - En tjeneste fra IT-Firma.no
        </span>
        <div className="flex gap-6">
          <Link href="/personvern/" className="text-xs text-white/20 hover:text-white/50 transition-colors">Personvern</Link>
          <Link href="/vilkar/" className="text-xs text-white/20 hover:text-white/50 transition-colors">Vilkar</Link>
        </div>
      </div>
    </footer>
  )
}

function FooterCol(props: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h6 className="text-[0.65rem] uppercase tracking-[0.18em] text-white/25 font-bold mb-5">{props.title}</h6>
      <div className="flex flex-col gap-1">{props.children}</div>
    </div>
  )
}

function FooterLink(props: { href: string; children: React.ReactNode }) {
  return (
    <Link href={props.href} className="text-[0.85rem] text-white/45 hover:text-white transition-colors py-0.5">
      {props.children}
    </Link>
  )
}
