import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import { ScrollReveal } from '@/components/UI'

export const metadata: Metadata = {
  title: {
    default: 'Vaskemaskin.no | Kjøpsguide, priser og test',
    template: '%s | Vaskemaskin.no',
  },
  description: 'Komplett guide til kjøp av vaskemaskin. Sammenlign 18 merker, les tester, sjekk priser og finn riktig maskin for dine behov.',
  metadataBase: new URL('https://vaskemaskin.no'),
  alternates: { canonical: 'https://vaskemaskin.no' },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Vaskemaskin.no',
    title: 'Vaskemaskin.no | Kjøpsguide, priser og test',
    description: 'Kjøpsguider, merkesammenligninger, feilkoder, bruksanvisninger og 147 butikker.',
    url: 'https://vaskemaskin.no',
    images: [{ url: 'https://vaskemaskin.no/og-image.png', width: 1200, height: 630, alt: 'Vaskemaskin.no' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaskemaskin.no | Kjøpsguide, priser og test',
    description: 'Kjøpsguider, merkesammenligninger, feilkoder og bruksanvisninger.',
    images: ['https://vaskemaskin.no/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  other: { 'theme-color': '#0D9488' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Analytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <ScrollReveal />
      </body>
    </html>
  )
}
