import "./globals.css"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://vaskemaskin.no"),
  title: {
    default: "Vaskemaskin.no | Norges komplette vaskemaskin-guide",
    template: "%s | Vaskemaskin.no",
  },
  description:
    "Alt om vaskemaskiner samlet pa ett sted. Kjopsguider, merkesammenligninger, vedlikeholdstips og forhandleroversikt for hele Norge.",
  openGraph: {
    siteName: "Vaskemaskin.no",
    locale: "nb_NO",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          vaskemaskin<span className="logo-dot">.no</span>
        </Link>
        <nav className="nav-desktop">
          <div className="mega-trigger">
            <Link href="/artikler" className="nav-link">
              Guider
            </Link>
            <div className="mega-bridge" />
            <div className="mega-panel">
              <div className="mega-columns">
                <div>
                  <div className="mega-col-title">Kjopsguider</div>
                  <Link href="/artikler/beste-vaskemaskin-2026" className="mega-item">
                    Beste vaskemaskin 2026
                  </Link>
                  <Link href="/artikler/vaskemaskin-storrelse-kapasitet" className="mega-item">
                    Storrelse og kapasitet
                  </Link>
                  <Link href="/artikler/vaskemaskin-test-sammenligning" className="mega-item">
                    Samsung vs Bosch vs LG vs Miele
                  </Link>
                  <Link href="/artikler/vaskemaskin-levetid" className="mega-item">
                    Levetid og holdbarhet
                  </Link>
                </div>
                <div>
                  <div className="mega-col-title">Tips og vedlikehold</div>
                  <Link href="/artikler/vaskemaskin-rengjoring-vedlikehold" className="mega-item">
                    Rengjoring og vedlikehold
                  </Link>
                  <Link href="/artikler/vaskemaskin-vond-lukt" className="mega-item">
                    Fjerne vond lukt
                  </Link>
                  <Link href="/artikler/vaskemaskin-temperatur-guide" className="mega-item">
                    Temperaturguide
                  </Link>
                  <Link href="/artikler/vaskemaskin-strom-forbruk" className="mega-item">
                    Spare strom
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mega-trigger">
            <Link href="/merker" className="nav-link">
              Merker
            </Link>
            <div className="mega-bridge" />
            <div className="mega-panel">
              <div className="mega-columns">
                <div>
                  <div className="mega-col-title">Premium</div>
                  <Link href="/merker/miele" className="mega-item">Miele</Link>
                  <Link href="/merker/bosch" className="mega-item">Bosch</Link>
                  <Link href="/merker/siemens" className="mega-item">Siemens</Link>
                  <Link href="/merker/aeg" className="mega-item">AEG</Link>
                  <Link href="/merker/asko" className="mega-item">ASKO</Link>
                  <Link href="/merker/v-zug" className="mega-item">V-ZUG</Link>
                </div>
                <div>
                  <div className="mega-col-title">Populare</div>
                  <Link href="/merker/samsung" className="mega-item">Samsung</Link>
                  <Link href="/merker/lg" className="mega-item">LG</Link>
                  <Link href="/merker/electrolux" className="mega-item">Electrolux</Link>
                  <Link href="/merker/whirlpool" className="mega-item">Whirlpool</Link>
                  <Link href="/merker/beko" className="mega-item">Beko</Link>
                  <Link href="/merker/candy" className="mega-item">Candy</Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/forhandlere" className="nav-link">
            Forhandlere
          </Link>
          <Link href="/fylke" className="nav-link">
            Fylker
          </Link>
        </nav>
        <button className="mobile-toggle" aria-label="Meny">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">
              vaskemaskin<span>.no</span>
            </div>
            <p className="footer-desc">
              Norges mest komplette ressurs om vaskemaskiner. Uavhengige
              kjopsguider, merkesammenligninger, vedlikeholdstips og
              forhandleroversikt.
            </p>
          </div>
          <div>
            <div className="footer-heading">Guider</div>
            <Link href="/artikler/beste-vaskemaskin-2026" className="footer-link">
              Beste vaskemaskin 2026
            </Link>
            <Link href="/artikler/vaskemaskin-test-sammenligning" className="footer-link">
              Merkesammenligning
            </Link>
            <Link href="/artikler/vaskemaskin-strom-forbruk" className="footer-link">
              Stromforbruk
            </Link>
            <Link href="/artikler/vaskemaskin-rengjoring-vedlikehold" className="footer-link">
              Vedlikehold
            </Link>
            <Link href="/artikler" className="footer-link">
              Alle artikler
            </Link>
          </div>
          <div>
            <div className="footer-heading">Merker</div>
            <Link href="/merker/samsung" className="footer-link">Samsung</Link>
            <Link href="/merker/bosch" className="footer-link">Bosch</Link>
            <Link href="/merker/lg" className="footer-link">LG</Link>
            <Link href="/merker/miele" className="footer-link">Miele</Link>
            <Link href="/merker/siemens" className="footer-link">Siemens</Link>
            <Link href="/merker" className="footer-link">Alle merker</Link>
          </div>
          <div>
            <div className="footer-heading">Finn forhandler</div>
            <Link href="/forhandlere" className="footer-link">Alle forhandlere</Link>
            <Link href="/fylke" className="footer-link">Fylkesoversikt</Link>
            <div className="footer-heading" style={{ marginTop: 20 }}>Om oss</div>
            <Link href="/om-oss" className="footer-link">Om vaskemaskin.no</Link>
            <Link href="/personvern" className="footer-link">Personvern</Link>
          </div>
        </div>
        <div className="footer-bar">
          <span className="footer-bar-text">
            Drevet av{" "}
            <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">
              IT-Firma.no
            </a>
          </span>
          <span className="footer-bar-text">
            Innholdet er kun veiledende og erstatter ikke profesjonell radgivning.
          </span>
        </div>
      </div>
      <div className="portfolio-bar">
        <div className="portfolio-links">
          <span className="portfolio-link active">vaskemaskin.no</span>
          <a href="https://komfyr.no" target="_blank" rel="noopener noreferrer" className="portfolio-link">
            komfyr.no
          </a>
          <a href="https://hvitevare.no" target="_blank" rel="noopener noreferrer" className="portfolio-link">
            hvitevare.no
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Replace G-XXXXXXXXXX with your GA4 ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', { analytics_storage: 'denied' });
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Vaskemaskin.no",
              url: "https://vaskemaskin.no",
              description: "Norges mest komplette ressurs om vaskemaskiner.",
              publisher: {
                "@type": "Organization",
                name: "Vaskemaskin.no",
                url: "https://vaskemaskin.no",
                parentOrganization: {
                  "@type": "Organization",
                  name: "IT-Firma.no",
                  url: "https://it-firma.no",
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vaskemaskin.no/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
