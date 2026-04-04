import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Locale, type Translations } from '../i18n'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ko')

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'ko' ? 'en' : 'ko'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
