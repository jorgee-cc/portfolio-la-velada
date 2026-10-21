import { createPortal } from 'react-dom'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { AddIcon, InfoOutlinedIcon, PlayArrowIcon, ThumbUpOffAltIcon } from '../icons'
import MaxLineTypography from './ui/MaxLineTypography'
import MetaRow from './ui/MetaRow'
import { usePreview } from '../providers/PreviewProvider'
import { useDetailModal } from '../providers/DetailModalProvider'

const iconSx = {
  border: '1px solid rgba(255, 255, 255, 0.45)',
  bgcolor: 'rgba(42, 42, 42, 0.72)',
  color: '#ffffff',
  width: 34,
  height: 34,
  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.16)', borderColor: '#ffffff' },
}

export default function PreviewPortal() {
  const { preview, hide, cancelHide } = usePreview()
  const { open } = useDetailModal()

  if (!preview || typeof document === 'undefined') return null

  const { item, rect } = preview
  const width = Math.min(Math.max(rect.width * 1.5, 276), 430)
  const left = Math.min(
    Math.max(rect.left - (width - rect.width) / 2, 12),
    window.innerWidth - width - 12,
  )
  const top = Math.max(12, Math.min(rect.top - 26, window.innerHeight - 360))

  return createPortal(
    <div
      className="netflix-preview"
      style={{ width, left, top }}
      onMouseEnter={cancelHide}
      onMouseLeave={hide}
      role="dialog"
      aria-label={`Vista rápida de ${item.title}`}
    >
      <div className="netflix-preview__media">
        <img src={item.backdrop} alt="" />
        <div className="netflix-preview__fade" />
        <MaxLineTypography
          maxLine={2}
          sx={{
            position: 'absolute',
            left: 14,
            right: 14,
            bottom: 10,
            fontSize: '1.05rem',
            fontWeight: 800,
            lineHeight: 1.15,
            textShadow: '0 2px 12px rgba(0, 0, 0, 0.8)',
          }}
        >
          {item.title}
        </MaxLineTypography>
      </div>

      <Box sx={{ p: 1.5, pt: 1.25 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1.25 }}>
          <IconButton
            component="a"
            href="/?watch=1"
            aria-label="Ir al portfolio"
            sx={{
              ...iconSx,
              bgcolor: '#ffffff',
              color: '#000000',
              '&:hover': { bgcolor: '#e6e6e6' },
            }}
          >
            <PlayArrowIcon fontSize="small" />
          </IconButton>
          <IconButton
            aria-label="Más información"
            onClick={() => {
              hide()
              open(item)
            }}
            sx={iconSx}
          >
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Añadir a mi lista" sx={iconSx}>
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Me gusta" sx={iconSx}>
            <ThumbUpOffAltIcon fontSize="small" />
          </IconButton>
        </Box>

        <MetaRow match={item.match} year={item.year} age={item.age} duration={item.duration} />

        <MaxLineTypography
          maxLine={2}
          variant="body2"
          sx={{ mt: 1.25, color: 'text.secondary', fontSize: '0.78rem', lineHeight: 1.5 }}
        >
          {item.tags.join(' · ')}
        </MaxLineTypography>
      </Box>
    </div>,
    document.body,
  )
}
