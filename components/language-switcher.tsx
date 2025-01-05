'use client'

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/providers/language-provider"
import { useEffect, useState } from "react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering anything until mounted
  if (!mounted) {
    return <Button variant="ghost" size="sm">EN</Button>
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
    >
      {locale === 'fr' ? 'EN' : 'FR'}
    </Button>
  )
}