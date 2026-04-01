import { ko } from './ko'
import { en } from './en'

export type Locale = 'ko' | 'en'

interface GameItem { name: string; description: string; genre: string }
interface ProjectItem { name: string; tagline: string; platform: string; phase: string }

interface TranslationStrings {
  nav: { home: string; work: string; log: string; insights: string; playground: string }
  hero: { label: string; title: string; tagline: string; techStack: string; contact: string }
  games: { title: string; viewAll: string; downloads: string; storeLink: string; items: Record<string, GameItem> }
  projects: { title: string; viewAll: string; items: Record<string, ProjectItem> }
  log: { title: string; viewAll: string }
  footer: { copy: string }
}

export type Translations = TranslationStrings

export const translations: Record<Locale, Translations> = { ko, en }
