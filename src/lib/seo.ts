import type { Metadata } from 'next'

const SITE_NAME = 'Vaskemaskin.no'
const SITE_URL = 'https://vaskemaskin.no'
const SITE_DESCRIPTION = 'Norges mest komplette ressurs om vaskemaskiner. Kjøpsguider, merkesammenligninger, vedlikeholdstips og alt du trenger for å velge riktig vaskemaskin.'

export function createMeta(opts: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = opts.path ? SITE_URL + '/' + opts.path.replace(/^\//, '') : SITE_URL
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'nb_NO',
      images: [{ url: 'https://vaskemaskin.no/og-image.png', width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
  }
}

export function jsonLdWebSite() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'nb',
    publisher: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: SITE_URL + '/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

export function jsonLdOrganization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    parentOrganization: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
  }
}

export function jsonLdArticle(opts: {
  title: string
  description: string
  slug: string
  publishedDate: string
  updatedDate: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: SITE_URL + '/artikkel/' + opts.slug + '/',
    datePublished: opts.publishedDate,
    dateModified: opts.updatedDate,
    inLanguage: 'nb',
    publisher: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL + '/artikkel/' + opts.slug + '/',
    },
  }
}

export function jsonLdFaq(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function jsonLdBreadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export { SITE_NAME, SITE_URL, SITE_DESCRIPTION }
