import Box from '@mui/material/Box'
import type { CatalogItem } from '../types'
import { useDetailModal } from '../providers/DetailModalProvider'
import { usePreview } from '../providers/PreviewProvider'

export default function Card({ item }: { item: CatalogItem }) {
  const { show, hide } = usePreview()
  const { open } = useDetailModal()

  return (
    <Box
      component="button"
      type="button"
      className="netflix-card"
      aria-label={`Más información sobre ${item.title}`}
      onMouseEnter={(event) => show(item, event.currentTarget)}
      onMouseLeave={hide}
      onFocus={(event) => show(item, event.currentTarget)}
      onBlur={hide}
      onClick={() => open(item)}
    >
      <Box component="img" src={item.backdrop} alt="" loading="lazy" />
      {item.badge && (
        <Box component="span" className="netflix-card__badge">
          {item.badge}
        </Box>
      )}
    </Box>
  )
}
