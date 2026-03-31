import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { IconWasher } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-site py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-aqua-400"><IconWasher size={24} /></div>
              <span className="font-serif text-lg font-bold text-white">Vaskemaskin<span className="text-aqua-400">.no</span></span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">Norges mest komplette vaskemaskinportal.</p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Kategorier</h3>
            <ul className="space-y-2">{categories.map(cat => (<li key={cat.slug}><Link href={'/kategori/' + cat.slug + '/'} className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">{cat.shortName}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Merker</h3>
            <ul className="space-y-2">{brands.slice(0, 10).map(b => (<li key={b.slug}><Link href={'/merke/' + b.slug + '/'} className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">{b.name}</Link></li>))}</ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Verktøy</h3>
            <ul className="space-y-2">
              <li><Link href="/feilkode/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Feilkoder</Link></li>
              <li><Link href="/bruksanvisning/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Bruksanvisninger</Link></li>
              <li><Link href="/ordliste/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Ordliste A til Å</Link></li>
              <li><Link href="/fylker/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Finn butikk</Link></li>
              <li><Link href="/butikker/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Alle butikker</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Bedrift</h3>
            <ul className="space-y-2">
              <li><Link href="/bedrift/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Bedriftsoversikt</Link></li>
              <li><Link href="/bedrift/prisguide/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Prisguide</Link></li>
              <li><Link href="/bedrift/hygienestandarder/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Hygienestandarder</Link></li>
              <li><Link href="/bedrift/verktoy/vaskeri-roi/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">ROI kalkulator</Link></li>
              <li><Link href="/bedrift/verktoy/maskinvelger/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Maskinvelger</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Informasjon</h3>
            <ul className="space-y-2">
              <li><Link href="/artikkel/komplett-kjopsguide-2026/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Kjøpsguide 2026</Link></li>
              <li><Link href="/sammenligning/bosch-vs-samsung/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Bosch vs Samsung</Link></li>
              <li><Link href="/artikkel/energimerking-forklart/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Energimerking</Link></li>
              <li><Link href="/om-oss/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Om oss</Link></li>
              <li><Link href="/personvern/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Personvern</Link></li>
              <li><a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">IT-Firma.no</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">Vaskemaskin.no er en tjeneste fra <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-aqua-400 transition-colors">IT-Firma.no</a></p>
          <p className="text-xs text-slate-500">Uavhengig informasjon om vaskemaskiner for norske forbrukere</p>
        </div>
      </div>
    </footer>
  )
}
