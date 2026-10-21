import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import type { CatalogItem } from '../types'

export interface PreviewState {
  item: CatalogItem
  rect: DOMRect
}

interface PreviewContextValue {
  preview: PreviewState | null
  show: (item: CatalogItem, element: HTMLElement) => void
  hide: () => void
  cancelHide: () => void
}

const PreviewContext = createContext<PreviewContextValue | null>(null)

export function usePreview() {
  const value = useContext(PreviewContext)
  if (!value) throw new Error('usePreview must be used inside PreviewProvider')
  return value
}

export default function PreviewProvider({ children }: { children: ReactNode }) {
  const [preview, setPreview] = useState<PreviewState | null>(null)
  const showTimer = useRef<number | null>(null)
  const hideTimer = useRef<number | null>(null)

  const clearTimers = useCallback(() => {
    if (showTimer.current) window.clearTimeout(showTimer.current)
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
    showTimer.current = null
    hideTimer.current = null
  }, [])

  const show = useCallback(
    (item: CatalogItem, element: HTMLElement) => {
      if (typeof window === 'undefined') return
      if (window.matchMedia('(pointer: coarse)').matches) return

      clearTimers()
      showTimer.current = window.setTimeout(() => {
        setPreview({ item, rect: element.getBoundingClientRect() })
      }, 260)
    },
    [clearTimers],
  )

  const hide = useCallback(() => {
    if (showTimer.current) {
      window.clearTimeout(showTimer.current)
      showTimer.current = null
    }
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => setPreview(null), 140)
  }, [])

  const cancelHide = useCallback(() => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      clearTimers()
      setPreview(null)
    }

    window.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleScroll)
      clearTimers()
    }
  }, [clearTimers])

  const value = useMemo(
    () => ({ preview, show, hide, cancelHide }),
    [preview, show, hide, cancelHide],
  )

  return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
}
