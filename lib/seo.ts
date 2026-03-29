import { Metadata } from 'next'

var SITE_URL = 'https://vaskemaskin.no'
var SITE_NAME = 'vaskemaskin.no'
var SITE_DESC = 'Norges mest komplette ressurs for vaskemaskiner. Guider, tester, merker og forhandlere i hele Norge.'
var OG_IMAGE = SITE_URL + '/og-image.svg'
var GA_ID = 'G-XXXXXXXXXX'

export function createMetadata(options: {
  title: string
  description: string
  path: string
  type?: string
  image?: string
}): Metadata {
  var fullTitle = options.title + ' | ' + SITE_NAME
  var url = SITE_URL + options.path
  var image = options.image || OG_IMAGE

  return {
    title: fullTitle,
    description: options.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: options.description,
      url: url,
      siteName: SITE_NAME,
      type: (options.type || 'website') as any,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'nb_NO',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: options.description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

export function articleJsonLd(options: {
  title: string
  description: string
  path: string
  datePublished: string
  dateModified: string
}): string {
  var data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: SITE_URL + options.path,
    datePublished: options.datePublished,
    dateModified: options.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE_URL + options.path,
    },
  }
  return JSON.stringify(data)
}

export function faqJsonLd(questions: Array<{ q: string; a: string }>): string {
  var data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(function(item) {
      return {
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      }
    }),
  }
  return JSON.stringify(data)
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>): string {
  var data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(function(item, index) {
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: SITE_URL + item.path,
      }
    }),
  }
  return JSON.stringify(data)
}

export function organizationJsonLd(): string {
  var data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESC,
    parentOrganization: {
      '@type': 'Organization',
      name: 'IT-Firma.no',
      url: 'https://it-firma.no',
    },
    sameAs: [
      'https://komfyr.no',
      'https://hvitevare.no',
    ],
  }
  return JSON.stringify(data)
}

export function localBusinessJsonLd(options: {
  name: string
  address: string
  postalCode: string
  city: string
  kommune: string
}): string {
  var data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: options.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: options.address,
      postalCode: options.postalCode,
      addressLocality: options.city,
      addressRegion: options.kommune,
      addressCountry: 'NO',
    },
  }
  return JSON.stringify(data)
}

export { SITE_URL, SITE_NAME, SITE_DESC, GA_ID }
