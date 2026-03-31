import { ko } from './ko'
import { en } from './en'

export type Locale = 'ko' | 'en'

interface TranslationStrings {
  nav: { home: string; work: string; log: string; playground: string }
  hero: { label: string; title: string; tagline: string; techStack: string; contact: string }
  games: { title: string; viewAll: string; downloads: string; storeLink: string }
  projects: { title: string; viewAll: string }
  log: { title: string; viewAll: string }
  footer: { copy: string }
}

export type Translations = TranslationStrings

export const translations: Record<Locale, Translations> = { ko, en }
