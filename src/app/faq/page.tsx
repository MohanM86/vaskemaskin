import Link from 'next/link'
import { Breadcrumbs } from '@/components/UI'
import PageSidebar from '@/components/PageSidebar'
import { createMeta, jsonLdFaq } from '@/lib/seo'

const faqGroups = [
  { id: 'kop', title: 'Før kjøp', items: [
    { question: 'Hvilken vaskemaskin er best i 2026?', answer: 'For de fleste familier er en frontmater med åtte kilo kapasitet og energiklasse B eller C det beste valget. Bosch WGG244A0BY er vår totalanbefaling.' },
    { question: 'Hvor stor maskin trenger jeg?', answer: 'Én til to personer trenger seks til syv kilo. Tre til fire personer bør gå for åtte til ni kilo. Fem eller flere trenger ti kilo eller mer.' },
    { question: 'Er det verdt å kjøpe en dyr vaskemaskin?', answer: 'Ofte ja. En dyrere maskin har lavere energiforbruk, bedre holdbarhet og bedre vaskeresultat. Over maskinens levetid kan besparelsene utgjøre mer enn prisforskjellen.' },
    { question: 'Toppmater eller frontmater?', answer: 'Frontmatere er vanligst med større kapasitet. Toppmatere passer for trange rom med bare 40 cm bredde.' },
    { question: 'Hva er forskjellen på 1200 og 1400 omdreininger?', answer: 'Høyere turtall gir tørrere klær og kortere tørketid. 1400 er et godt kompromiss mellom resultat og støy.' },
  ]},
  { id: 'bruk', title: 'Bruk og vask', items: [
    { question: 'Hvilken temperatur bør jeg vaske på?', answer: 'Tretti grader for normalt hverdagstøy. Seksti grader for sengetøy og håndklær. Nitti grader kun for rengjøring av selve maskinen.' },
    { question: 'Kan jeg vaske ull i vaskemaskin?', answer: 'Ja, med ullprogram på 30 grader og spesialvaskemiddel for ull.' },
    { question: 'Pulver eller flytende vaskemiddel?', answer: 'Pulver er best på hvitt tøy. Flytende er best på farget tøy og lave temperaturer, og er påkrevd for automatisk dosering.' },
    { question: 'Hva betyr vaskesymbolene?', answer: 'Baljesymbolet er for vasking, trekanten for bleking, firkanten for tørking, strykejernet for stryking og sirkelen for rensing.' },
    { question: 'Kan jeg vaske sko i vaskemaskin?', answer: 'Tekstilsko kan vaskes på 30 grader med finvask. Bruk vaskenett. Aldri tørketrommel.' },
  ]},
  { id: 'vedlikehold', title: 'Vedlikehold og feil', items: [
    { question: 'Hvordan rengjøre vaskemaskinen?', answer: 'Kjør et tomt 90 graders program med eddik en gang i måneden. Tørk av lukepakningen. Rengjør pumpefilteret.' },
    { question: 'Hva betyr feilkoden på displayet?', answer: 'Feilkoder varierer mellom merker. De vanligste er dreneringsfeil og vanninntak feil. Sjekk vår feilkodeoversikt.' },
    { question: 'Vaskemaskin lukter vondt?', answer: 'Rengjør gummipakningen med eddik. Kjør et tomt 90 graders program. La luken stå på gløtt etter hver vask.' },
    { question: 'Når bør jeg bytte vaskemaskin?', answer: 'Tegn er gjentatte feil, lekkasje, unormal støy, og reparasjonskostnad over halvparten av ny maskin.' },
    { question: 'Hva koster det å reparere?', answer: 'Pumpebytte 1500 til 2500 kr. Kullbørster 1000 til 1500 kr. Styrekort 3000 til 5000 kr.' },
  ]},
  { id: 'okonomi', title: 'Økonomi og miljø', items: [
    { question: 'Hva koster strømmen per år?', answer: 'Energiklasse B bruker omtrent 50 kWh per år, rundt 100 kr med 2 kr/kWh. Bruk vår energikalkulator.' },
    { question: 'Hva betyr energiklasse A til G?', answer: 'Ny EU skala fra 2021. A er best, G dårligst. De fleste gode maskiner ligger på B eller C.' },
    { question: 'Hvor lenge varer en vaskemaskin?', answer: 'Gjennomsnittlig 10 til 12 år. Premium merker tester for 20 år. Riktig vedlikehold forlenger levetiden.' },
    { question: 'Har jeg 5 års reklamasjonsrett?', answer: 'Ja, forbrukerkjøpsloven gir reklamasjonsrett i opptil 5 år på vaskemaskiner.' },
  ]},
]

const allFaqs = faqGroups.flatMap(g => g.items)
const sections = faqGroups.map(g => ({ id: g.id, label: g.title + ' (' + g.items.length + ')' }))

export const metadata = createMeta({ title: 'Ofte stilte spørsmål | Vaskemaskin.no', description: 'Svar på ' + allFaqs.length + ' vanlige spørsmål om vaskemaskiner.', path: 'faq' })

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq(allFaqs)) }} />
      <div className="container-site py-10">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: 'Hjem', href: '/' }, { label: 'Ofte stilte spørsmål' }]} />
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Ofte stilte spørsmål om vaskemaskiner</h1>
            <p className="text-lg text-slate-600 mb-10">{allFaqs.length} spørsmål og svar gruppert etter tema.</p>
            {faqGroups.map(group => (
              <section key={group.id} data-section-id={group.id} className="scroll-mt-20 mb-10">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-5">{group.title}</h2>
                <div className="space-y-3">{group.items.map((item, i) => (
                  <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden bg-white">
                    <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <svg className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                    </summary>
                    <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">{item.answer}</div>
                  </details>
                ))}</div>
              </section>
            ))}
          </div>
          <PageSidebar sections={sections} relatedLinks={[
            { href: '/artikkel/komplett-kjopsguide-2026/', label: 'Kjøpsguide 2026' },
            { href: '/feilkode/', label: 'Feilkoder alle merker' },
            { href: '/verktoy/energikalkulator/', label: 'Energikalkulator' },
          ]} />
        </div>
      </div>
    </>
  )
}
