'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from "@/providers/language-provider"
import Link from 'next/link'
import { Button } from './ui/button'
import { X } from 'lucide-react'

export function ConsentBanner() {
  const { t, locale } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent')
    if (!hasConsented) {
      setShowBanner(true)
    } else {
      // If user has already consented, initialize GTM
      initializeGTM()
    }
  }, [])

  const initializeGTM = () => {
    // Push consent to dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'userConsent',
      'consent': true
    });
  }

  const acceptConsent = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
    initializeGTM()
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white p-4 z-50">
      <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm flex-1">
          <p>
            {locale === 'fr' 
              ? "En utilisant notre site, vous acceptez notre "
              : "By using our site, you agree to our "}
            <Link 
              href="/privacy-policy" 
              className="text-red-400 hover:text-red-300 underline"
            >
              {locale === 'fr' ? "politique de confidentialité" : "privacy policy"}
            </Link>
            {locale === 'fr' ? " et nos " : " and "}
            <Link 
              href="/terms" 
              className="text-red-400 hover:text-red-300 underline"
            >
              {locale === 'fr' ? "conditions d'utilisation" : "terms of service"}
            </Link>
            {locale === 'fr' 
              ? ". Nous utilisons des cookies pour améliorer votre expérience."
              : ". We use cookies to improve your experience."}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={acceptConsent}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {locale === 'fr' ? "J'accepte" : "I Accept"}
          </Button>
          <button
            onClick={acceptConsent}
            className="text-gray-400 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}