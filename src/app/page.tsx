import Link from "next/link"
import { articles } from "@/data/articles"
import { brands } from "@/data/brands"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vaskemaskin.no | Norges komplette vaskemaskin-guide",
  description:
    "Alt om vaskemaskiner samlet pa ett sted. Kjøpsguider, merkesammenligninger, vedlikeholdstips og forhandleroversikt for hele Norge. Finn riktig vaskemaskin for ditt behov.",
  openGraph: {
    title: "Vaskemaskin.no | Norges komplette vaskemaskin-guide",
    description:
      "Kjøpsguider, merkesammenligninger, vedlikeholdstips og forhandleroversikt. Finn riktig vaskemaskin for ditt behov.",
    url: "https://vaskemaskin.no",
    siteName: "Vaskemaskin.no",
    locale: "nb_NO",
    type: "website",
  },
}

const heroStats = [
  { value: "25+", label: "Merker analysert" },
  { value: "85+", label: "Guider og artikler" },
  { value: "147", label: "Forhandlere i Norge" },
  { value: "11", label: "Fylker dekket" },
]

const categoryLinks = [
  { href: "/artikler", label: "Alle artikler", desc: "Guider, tester og tips" },
  { href: "/merker", label: "Alle merker", desc: "25 vaskemaskinmerker" },
  { href: "/forhandlere", label: "Finn forhandler", desc: "147 butikker i Norge" },
  { href: "/fylke", label: "Fylkesoversikt", desc: "Forhandlere per fylke" },
]

function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  const categoryLabels: Record<string, string> = {
    guide: "Kjopsguide",
    test: "Test",
    vedlikehold: "Vedlikehold",
    tips: "Tips",
    teknologi: "Teknologi",
  }
  return (
    <Link href={"/artikler/" + article.slug} className="article-card group">
      <div className="article-card-category">
        {categoryLabels[article.category] || article.category}
      </div>
      <h3 className="article-card-title">{article.title}</h3>
      <p className="article-card-excerpt">{article.excerpt}</p>
      <div className="article-card-meta">
        <span>{article.readingTime} min lesetid</span>
        <span className="article-card-arrow group-hover:translate-x-1 transition-transform">
          Les mer
        </span>
      </div>
    </Link>
  )
}

function BrandPill({ brand }: { brand: (typeof brands)[0] }) {
  const rangeLabels: Record<string, string> = {
    budsjett: "Budsjett",
    mellomklasse: "Mellomklasse",
    premium: "Premium",
  }
  return (
    <Link href={"/merker/" + brand.slug} className="brand-pill group">
      <span className="brand-pill-name">{brand.name}</span>
      <span className="brand-pill-range">{rangeLabels[brand.priceRange]}</span>
    </Link>
  )
}

export default function HomePage() {
  const featuredArticles = articles.slice(0, 6)
  const premiumBrands = brands.filter((b) => b.priceRange === "premium")
  const midBrands = brands.filter((b) => b.priceRange === "mellomklasse")
  const budgetBrands = brands.filter((b) => b.priceRange === "budsjett")

  const homeFaq = [
    {
      q: "Hvilken vaskemaskin er best i 2026?",
      a: "De best testede vaskemaskinene i 2026 er Miele WSD663 (premium), Bosch WGG244A (mellomklasse) og Samsung WW90T (best verdi). Valget avhenger av budsjett og prioriteringer.",
    },
    {
      q: "Hvor mye koster en god vaskemaskin?",
      a: "En god vaskemaskin for de fleste koster mellom 6000 og 10000 kroner. Under 5000 far du enkle budsjettmodeller. Over 12000 far du premiummodeller fra Miele og Siemens.",
    },
    {
      q: "Hvor lenge varer en vaskemaskin?",
      a: "Levetiden varierer fra 7 til 20 ar avhengig av merke og vedlikehold. Miele designer for 20 ar, Bosch for 15 ar, Samsung og LG for 10 til 12 ar, og budsjettmerker for 7 til 10 ar.",
    },
    {
      q: "Er det verdt a kjope dyr vaskemaskin?",
      a: "Over maskinens levetid kan en dyrere maskin lonne seg. En Miele til 15000 kroner som varer 20 ar koster 750 kroner per ar. En budsjettmaskin til 4000 kroner som varer 8 ar koster 500 kroner per ar, men med darligere vaskeresultat og hoyere stromforbruk.",
    },
    {
      q: "Hvilken storrelse vaskemaskin trenger jeg?",
      a: "For single eller par: 7 til 8 kg. For familier med barn: 9 til 10 kg. For store familier: 10 til 12 kg. Velg kapasitet basert pa hvor mye du vasker per uke.",
    },
    {
      q: "Hva er vaskemaskin.no?",
      a: "Vaskemaskin.no er Norges mest komplette ressurs om vaskemaskiner. Vi tilbyr uavhengige kjopsguider, merkesammenligninger, vedlikeholdstips og en oversikt over forhandlere i hele Norge.",
    },
  ]

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Alt om vaskemaskiner, samlet pa ett sted
            </h1>
            <p className="hero-subtitle">
              Uavhengige kjopsguider, merkesammenligninger, vedlikeholdstips og
              forhandleroversikt for hele Norge. Vi hjelper deg a finne riktig
              vaskemaskin for ditt behov og budsjett.
            </p>
            <div className="hero-actions">
              <Link href="/artikler/beste-vaskemaskin-2026" className="btn-primary">
                Se beste vaskemaskin 2026
              </Link>
              <Link href="/merker" className="btn-secondary">
                Sammenlign merker
              </Link>
            </div>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Siste artikler og guider</h2>
            <Link href="/artikler" className="section-link">
              Se alle artikler
            </Link>
          </div>
          <div className="articles-grid">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Vaskemaskinmerker i Norge</h2>
          <p className="section-desc">
            Vi dekker 25 merker fra budsjett til premium. Finn det merket som
            passer ditt behov og din lommebok.
          </p>
          <div className="brands-section">
            <div className="brands-group">
              <h3 className="brands-group-label">Premium</h3>
              <div className="brands-pills">
                {premiumBrands.map((b) => (
                  <BrandPill key={b.slug} brand={b} />
                ))}
              </div>
            </div>
            <div className="brands-group">
              <h3 className="brands-group-label">Mellomklasse</h3>
              <div className="brands-pills">
                {midBrands.map((b) => (
                  <BrandPill key={b.slug} brand={b} />
                ))}
              </div>
            </div>
            <div className="brands-group">
              <h3 className="brands-group-label">Budsjett</h3>
              <div className="brands-pills">
                {budgetBrands.map((b) => (
                  <BrandPill key={b.slug} brand={b} />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/merker" className="btn-secondary">
              Se alle 25 merker
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Utforsk vaskemaskin.no</h2>
          <div className="category-grid">
            {categoryLinks.map((cat) => (
              <Link key={cat.href} href={cat.href} className="category-card group">
                <h3 className="category-card-title group-hover:text-[var(--blue)]">
                  {cat.label}
                </h3>
                <p className="category-card-desc">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container container-narrow">
          <h2 className="section-title">Ofte stilte sporsmal</h2>
          <div className="faq-list">
            {homeFaq.map((item, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{item.q}</summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pillar-content">
            <h2>Vaskemaskin.no: Din komplette vaskemaskin-ressurs</h2>
            <p>
              Vaskemaskin.no er bygget for a gi norske forbrukere den beste og
              mest komplette informasjonen om vaskemaskiner. Enten du skal kjope
              din forste vaskemaskin, oppgradere en gammel modell, eller bare
              trenger hjelp med vedlikehold, finner du svarene her.
            </p>
            <p>
              Vi dekker over 25 merker fra <Link href="/merker/miele">Miele</Link> og{" "}
              <Link href="/merker/bosch">Bosch</Link> i premiumsegmentet, via{" "}
              <Link href="/merker/samsung">Samsung</Link>,{" "}
              <Link href="/merker/lg">LG</Link> og{" "}
              <Link href="/merker/electrolux">Electrolux</Link> i mellomklassen,
              til <Link href="/merker/beko">Beko</Link> og{" "}
              <Link href="/merker/candy">Candy</Link> for de som ser etter
              budsjettaltternativer. Hver merkeside inneholder detaljert
              informasjon om teknologi, populare modeller, priser og
              brukererfaringer.
            </p>
            <p>
              Vare <Link href="/artikler">guider og artikler</Link> dekker alt
              fra{" "}
              <Link href="/artikler/beste-vaskemaskin-2026">
                kjopsguide for beste vaskemaskin
              </Link>{" "}
              til praktiske emner som{" "}
              <Link href="/artikler/vaskemaskin-rengjoring-vedlikehold">
                rengjoring og vedlikehold
              </Link>
              ,{" "}
              <Link href="/artikler/vaskemaskin-strom-forbruk">
                stromforbruk og sparing
              </Link>{" "}
              og{" "}
              <Link href="/artikler/vaskemaskin-temperatur-guide">
                riktig vasketemperatur
              </Link>
              .
            </p>
            <p>
              Med var <Link href="/forhandlere">forhandleroversikt</Link> kan du
              finne hvitevarebutikker i nerheten, fordelt pa{" "}
              <Link href="/fylke">alle fylker</Link> og kommuner i Norge. Vi
              dekker 147 forhandlere pa tvers av 103 kommuner.
            </p>
            <p>
              Vaskemaskin.no er en del av hvitevareportefoljen til{" "}
              <a href="https://it-firma.no" target="_blank" rel="noopener noreferrer">
                IT-Firma.no
              </a>
              , som ogsa inkluderer{" "}
              <a href="https://komfyr.no" target="_blank" rel="noopener noreferrer">
                komfyr.no
              </a>{" "}
              og{" "}
              <a href="https://hvitevare.no" target="_blank" rel="noopener noreferrer">
                hvitevare.no
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  )
}
