'use client'
import Link from 'next/link'

const contextMap: Record<string, { label: string; links: { text: string; href: string }[] }> = {
  'kjopsguide': {
    label: 'Relatert innhold',
    links: [
      { text: 'Energimerking forklart', href: '/artikkel/energimerking-forklart/' },
      { text: 'Sammenlign merker', href: '/sammenligning/bosch-vs-samsung/' },
      { text: 'Vaskemaskinvelger', href: '/verktoy/vaskemaskinvelger/' },
      { text: 'Energikalkulator', href: '/verktoy/energikalkulator/' },
    ]
  },
  'toppmatere': {
    label: 'Relatert innhold',
    links: [
      { text: 'Beste toppmatere 2026', href: '/artikkel/beste-toppmater-2026/' },
      { text: 'Kjøpsguide', href: '/artikkel/komplett-kjopsguide-2026/' },
      { text: 'Kapasitetskalkulator', href: '/verktoy/kapasitetskalkulator/' },
    ]
  },
  'frontmatere': {
    label: 'Relatert innhold',
    links: [
      { text: 'Velg riktig frontmater', href: '/artikkel/velge-frontmater/' },
      { text: 'Toppmater vs frontmater', href: '/artikkel/toppmatere-vs-frontmatere/' },
      { text: 'Bosch vaskemaskiner', href: '/merke/bosch/' },
      { text: 'Samsung vaskemaskiner', href: '/merke/samsung/' },
    ]
  },
  'vedlikehold': {
    label: 'Vedlikeholdsguider',
    links: [
      { text: 'Rengjøre vaskemaskinen', href: '/artikkel/rengjore-vaskemaskin/' },
      { text: 'Vanlige feilkoder', href: '/artikkel/vanlige-feilkoder/' },
      { text: 'Når bytte vaskemaskin', href: '/artikkel/naar-bytte-vaskemaskin/' },
      { text: 'Feilkodeoversikt', href: '/feilkode/' },
    ]
  },
  'energi-og-miljo': {
    label: 'Energi og økonomi',
    links: [
      { text: 'Energimerking forklart', href: '/artikkel/energimerking-forklart/' },
      { text: 'Spare strøm', href: '/artikkel/spare-strom-vaskemaskin/' },
      { text: 'Energikalkulator', href: '/verktoy/energikalkulator/' },
      { text: 'Hva er Eco program?', href: '/ordliste/eco-program/' },
    ]
  },
  'vasketorker': {
    label: 'Relatert innhold',
    links: [
      { text: 'Vasketørker verdt det?', href: '/artikkel/vasketorker-verdt-det/' },
      { text: 'Samsung vaskemaskiner', href: '/merke/samsung/' },
      { text: 'LG vaskemaskiner', href: '/merke/lg/' },
    ]
  },
  'vaskeguide': {
    label: 'Flere vaskeguider',
    links: [
      { text: 'Vaskesymboler forklart', href: '/artikkel/vaskesymboler-guide/' },
      { text: 'Vasketemperatur guide', href: '/artikkel/vasketemperatur-guide/' },
      { text: 'Vaskemiddel guide', href: '/artikkel/vaskemiddel-guide/' },
      { text: 'Flekkfjerning', href: '/artikkel/fjerne-flekker/' },
    ]
  },
  'allergi-og-hygiene': {
    label: 'Relatert innhold',
    links: [
      { text: 'Vaske babyklaer', href: '/artikkel/vaske-babyklaer/' },
      { text: 'Dampfunksjon forklart', href: '/ordliste/dampfunksjon/' },
      { text: 'Vasketemperatur guide', href: '/artikkel/vasketemperatur-guide/' },
    ]
  },
  'okonomi': {
    label: 'Spar penger',
    links: [
      { text: 'Energikalkulator', href: '/verktoy/energikalkulator/' },
      { text: 'Reparere eller bytte?', href: '/verktoy/reparere-eller-bytte/' },
      { text: 'Energimerking forklart', href: '/artikkel/energimerking-forklart/' },
      { text: 'Sammenlign pris per ar', href: '/verktoy/sammenlign-pris/' },
    ]
  },
}

export default function ContextualLinks({ category }: { category: string }) {
  const ctx = contextMap[category]
  if (!ctx) return null

  return (
    <div className="my-8 p-5 rounded-xl bg-slate-50 border border-slate-200">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{ctx.label}</h3>
      <div className="flex flex-wrap gap-2">
        {ctx.links.map(link => (
          <Link key={link.href} href={link.href} className="text-sm text-aqua-600 hover:text-aqua-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:border-aqua-300 transition-colors">
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
