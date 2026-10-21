export type CatalogKind = 'portfolio' | 'edition'

export interface CatalogItem {
  id: string
  kind: CatalogKind
  title: string
  roman?: string
  year: string
  date?: string
  venue?: string
  city?: string
  overview: string
  tagline?: string
  tags: string[]
  backdrop: string
  match: number
  age: string
  duration: string
  badge?: string
  externalUrl?: string
}

export interface CatalogRow {
  id: string
  title: string
  items: CatalogItem[]
}
