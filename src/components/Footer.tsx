import Link from 'next/link'
import { categories } from '@/data/categories'
import { brands } from '@/data/brands'
import { IconWasher } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="text-aqua-400">
                <IconWasher size={24} />
              </div>
              <span className="font-serif text-lg font-bold text-white">
                Vaskemaskin<span className="text-aqua-400">.no</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Norges mest komplette ressurs om vaskemaskiner. Uavhengig informasjon, grundige guider og ekspertanbefalinger.
            </p>
          </div>

          {/* Kategorier */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Kategorier</h3>
            <ul className="space-y-2.5">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={'/kategori/' + cat.slug + '/'} className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">
                    {cat.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Merker */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Merker</h3>
            <ul className="space-y-2.5">
              {brands.slice(0, 8).map(brand => (
                <li key={brand.slug}>
                  <Link href={'/merke/' + brand.slug + '/'} className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Populaere artikler */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Populaert</h3>
            <ul className="space-y-2.5">
              <li><Link href="/artikkel/komplett-kjopsguide-2026/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Kjopsguide 2026</Link></li>
              <li><Link href="/artikkel/toppmatere-vs-frontmatere/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Toppmater vs frontmater</Link></li>
              <li><Link href="/artikkel/energimerking-forklart/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Energimerking forklart</Link></li>
              <li><Link href="/artikkel/rengjore-vaskemaskin/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Rengjore vaskemaskin</Link></li>
              <li><Link href="/artikkel/vaskemaskin-under-5000/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Under 5000 kr</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">Informasjon</h3>
            <ul className="space-y-2.5">
              <li><Link href="/om-oss/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Om oss</Link></li>
              <li><Link href="/personvern/" className="text-sm text-slate-400 hover:text-aqua-400 transition-colors">Personvern</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Vaskemaskin.no er en tjeneste fra{' '}
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-aqua-400 transition-colors">
              IT-Firma.no
            </a>
          </p>
          <p className="text-xs text-slate-500">
            Uavhengig informasjon om vaskemaskiner for norske forbrukere
          </p>
        </div>
      </div>
    </footer>
  )
}
