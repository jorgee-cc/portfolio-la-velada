import Box from '@mui/material/Box'
import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from '../../icons'

interface RowArrowProps {
  direction: 'previous' | 'next'
  rowTitle: string
  onClick: () => void
}

const arrowSx = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  zIndex: 5,
  display: { xs: 'none', sm: 'flex' },
  alignItems: 'center',
  justifyContent: 'center',
  width: { sm: 44, md: 60 },
  border: 0,
  p: 0,
  color: '#ffffff',
  cursor: 'pointer',
  opacity: 0,
  transition: 'opacity 0.2s ease, background-color 0.2s ease',
  '&:hover': { bgcolor: 'rgba(20, 20, 20, 0.55)' },
  '&:focus-visible': { opacity: 1, outline: '2px solid #ffffff', outlineOffset: -4 },
} as const

export default function RowArrow({ direction, rowTitle, onClick }: RowArrowProps) {
  const isPrevious = direction === 'previous'

  return (
    <Box
      component="button"
      type="button"
      aria-label={`${isPrevious ? 'Anterior' : 'Siguiente'} en ${rowTitle}`}
      className="netflix-row__arrow"
      onClick={onClick}
      sx={{
        ...arrowSx,
        [isPrevious ? 'left' : 'right']: 0,
        backgroundImage: `linear-gradient(to ${isPrevious ? 'right' : 'left'}, rgba(20, 20, 20, 0.9), transparent)`,
      }}
    >
      {isPrevious ? (
        <ArrowBackIosNewIcon fontSize="small" />
      ) : (
        <ArrowForwardIosIcon fontSize="small" />
      )}
    </Box>
  )
}
