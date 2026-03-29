'use client'

import { useState, useEffect } from 'react'
import { grantConsent } from './Analytics'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
    if (consent === 'granted') {
      grantConsent()
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'granted')
    grantConsent()
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="container-site">
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-2xl">
          <p className="text-sm text-slate-600 flex-1">
            Vi bruker informasjonskapsler for å forbedre opplevelsen din og analysere trafikk.
            Les mer i vår <a href="/personvern/" className="text-aqua-600 underline">personvernerklæring</a>.
          </p>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Avslå
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 text-sm font-medium text-white bg-aqua-600 rounded-lg hover:bg-aqua-700 transition-colors"
            >
              Godta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
