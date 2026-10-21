import Button from '@mui/material/Button'
import { InfoOutlinedIcon, PlayArrowIcon } from '../../icons'

interface PlayButtonProps {
  href?: string
  label?: string
  onClick?: () => void
  compact?: boolean
}

export function PlayButton({
  href = '/?watch=1',
  label = 'Watch Now',
  onClick,
  compact = false,
}: PlayButtonProps) {
  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href || undefined}
      onClick={onClick}
      startIcon={<PlayArrowIcon />}
      sx={{
        bgcolor: '#ffffff',
        color: '#000000',
        px: compact ? 2 : 3,
        py: compact ? 0.6 : 1,
        borderRadius: 1,
        fontSize: compact ? '0.85rem' : '1rem',
        fontWeight: 700,
        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.78)' },
      }}
    >
      {label}
    </Button>
  )
}

interface MoreInfoButtonProps {
  onClick: () => void
  label?: string
  compact?: boolean
}

export function MoreInfoButton({
  onClick,
  label = 'Más información',
  compact = false,
}: MoreInfoButtonProps) {
  return (
    <Button
      onClick={onClick}
      startIcon={<InfoOutlinedIcon />}
      sx={{
        bgcolor: 'rgba(109, 109, 110, 0.7)',
        color: '#ffffff',
        px: compact ? 2 : 3,
        py: compact ? 0.6 : 1,
        borderRadius: 1,
        fontSize: compact ? '0.85rem' : '1rem',
        fontWeight: 700,
        '&:hover': { bgcolor: 'rgba(109, 109, 110, 0.45)' },
      }}
    >
      {label}
    </Button>
  )
}
