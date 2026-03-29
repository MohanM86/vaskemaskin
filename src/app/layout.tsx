import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import { ScrollReveal } from '@/components/UI'

export const metadata: Metadata = {
  title: {
    default: 'Vaskemaskin.no | Norges komplette vaskemaskinressurs',
    template: '%s | Vaskemaskin.no',
  },
  description: 'Norges mest komplette ressurs om vaskemaskiner. Kjopsguider, merkesammenligninger, vedlikeholdstips og alt du trenger for aa velge riktig vaskemaskin.',
  metadataBase: new URL('https://vaskemaskin.no'),
  alternates: { canonical: 'https://vaskemaskin.no' },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    siteName: 'Vaskemaskin.no',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
