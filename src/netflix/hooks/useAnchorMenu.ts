import { useCallback, useState, type MouseEvent } from 'react'

/**
 * Estado compartido para los menús anclados de MUI. Al pulsar dos veces el
 * mismo disparador se cierra el menú.
 */
export default function useAnchorMenu() {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)

  const open = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchor((current) => (current ? null : event.currentTarget))
  }, [])

  const close = useCallback(() => setAnchor(null), [])

  return { anchor, open, close }
}
