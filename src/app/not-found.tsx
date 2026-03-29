import Link from 'next/link'
import { IconWasher } from '@/components/Icons'

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <div className="text-aqua-300 mb-6">
        <IconWasher size={64} />
      </div>
      <h1 className="font-serif text-4xl font-bold text-slate-900 mb-3">Siden ble ikke funnet</h1>
      <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
        Beklager, men siden du leter etter finnes ikke. Den kan ha blitt flyttet eller slettet.
      </p>
      <Link href="/" className="btn-primary">
        Tilbake til forsiden
      </Link>
    </div>
  )
}
