import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { CatalogItem } from '../types'

interface DetailModalContextValue {
  item: CatalogItem | null
  open: (item: CatalogItem) => void
  close: () => void
}

const DetailModalContext = createContext<DetailModalContextValue | null>(null)

export function useDetailModal() {
  const value = useContext(DetailModalContext)
  if (!value) throw new Error('useDetailModal must be used inside DetailModalProvider')
  return value
}

export default function DetailModalProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<CatalogItem | null>(null)

  const open = useCallback((next: CatalogItem) => setItem(next), [])
  const close = useCallback(() => setItem(null), [])

  const value = useMemo(() => ({ item, open, close }), [item, open, close])

  return <DetailModalContext.Provider value={value}>{children}</DetailModalContext.Provider>
}
