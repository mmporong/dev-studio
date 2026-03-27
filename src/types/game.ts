export interface PublishedGame {
  id: string
  name: string
  description: string
  genre: string
  rating?: number
  reviewCount?: number
  downloads: string
  playStoreUrl: string
  icon: string
  screenshots: string[]
  accent: string
}
