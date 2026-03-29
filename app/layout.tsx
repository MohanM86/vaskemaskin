import './globals.css'
import { Metadata } from 'next'
import { SITE_NAME, SITE_DESC, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME + ' - Norges vaskemaskinekspert',
    template: '%s | ' + SITE_NAME,
  },
  description: SITE_DESC,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              'window.dataLayer = window.dataLayer || [];',
              'function gtag(){dataLayer.push(arguments);}',
              'gtag("js", new Date());',
              'gtag("config", "G-XXXXXXXXXX");',
            ].join('\n'),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}

function CookieConsent() {
  return (
    <div id="cookie-bar" className="cookie-bar">
      <p>
        Vi bruker informasjonskapsler for a forbedre din opplevelse og analysere trafikk.
        Ved a fortsette godtar du var bruk av cookies.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button
          onClick={() => {
            var el = document.getElementById('cookie-bar')
            if (el) el.classList.add('hidden')
            if (typeof window !== 'undefined') {
              localStorage.setItem('cookie-consent', 'true')
            }
          }}
        >
          Godta
        </button>
        <button
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.3)' }}
          onClick={() => {
            var el = document.getElementById('cookie-bar')
            if (el) el.classList.add('hidden')
          }}
        >
          Avvis
        </button>
      </div>
    </div>
  )
}
