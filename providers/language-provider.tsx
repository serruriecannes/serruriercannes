'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale, dictionary } from '@/i18n/config'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, nested?: boolean) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Locale
      return saved || defaultLocale
    }
    return defaultLocale
  })

  const t = (key: string, nested = false): string => {
    const keys = key.split('.')
    let value: any = dictionary[locale]
    
    for (const k of keys) {
      if (value[k] === undefined) return key
      value = value[k]
    }
    
    return value as string
  }

  useEffect(() => {
    localStorage.setItem('language', locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}