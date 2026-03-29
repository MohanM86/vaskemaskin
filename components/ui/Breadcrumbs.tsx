import Link from 'next/link'
import { breadcrumbJsonLd } from '@/lib/seo'

interface BreadcrumbItem {
  name: string
  path: string
}

export default function Breadcrumbs(props: { items: BreadcrumbItem[] }) {
  var allItems = [{ name: 'Hjem', path: '/' }].concat(props.items)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(allItems) }}
      />
      <nav className="text-sm text-grey-400 mb-6 flex items-center gap-1.5 flex-wrap">
        {allItems.map(function(item, index) {
          var isLast = index === allItems.length - 1
          return (
            <span key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <span className="text-grey-300">/</span>}
              {isLast ? (
                <span className="text-ink-muted font-medium">{item.name}</span>
              ) : (
                <Link href={item.path} className="hover:text-brand-blue transition-colors">
                  {item.name}
                </Link>
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
