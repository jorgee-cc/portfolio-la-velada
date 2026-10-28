import type { ReactNode } from 'react'
import Button from '@mui/material/Button'
import { InfoOutlinedIcon, PlayArrowIcon } from '../../icons'
import { WATCH_PATH } from '../../constants'

const sizeSx = (compact: boolean) => ({
  px: compact ? 2 : 3,
  py: compact ? 0.6 : 1,
  fontSize: compact ? '0.85rem' : '1rem',
})

const playButtonSx = (compact: boolean) => ({
  ...sizeSx(compact),
  bgcolor: '#ffffff',
  color: '#000000',
  borderRadius: 1,
  fontWeight: 700,
  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.78)' },
})

const secondaryButtonSx = (compact: boolean) => ({
  ...sizeSx(compact),
  bgcolor: 'rgba(109, 109, 110, 0.7)',
  color: '#ffffff',
  borderRadius: 1,
  fontWeight: 700,
  '&:hover': { bgcolor: 'rgba(109, 109, 110, 0.45)' },
})

interface PlayButtonProps {
  href?: string
  label?: string
  onClick?: () => void
  compact?: boolean
  external?: boolean
}

export function PlayButton({
  href = WATCH_PATH,
  label = 'Watch Now',
  onClick,
  compact = false,
  external = false,
}: PlayButtonProps) {
  return (
    <Button
      component={href ? 'a' : 'button'}
      href={href || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onClick={onClick}
      startIcon={<PlayArrowIcon />}
      sx={playButtonSx(compact)}
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
    <Button onClick={onClick} startIcon={<InfoOutlinedIcon />} sx={secondaryButtonSx(compact)}>
      {label}
    </Button>
  )
}

interface SecondaryLinkButtonProps {
  href: string
  label: string
  icon?: ReactNode
  compact?: boolean
  external?: boolean
}

export function SecondaryLinkButton({
  href,
  label,
  icon,
  compact = false,
  external = false,
}: SecondaryLinkButtonProps) {
  return (
    <Button
      component="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      startIcon={icon}
      sx={secondaryButtonSx(compact)}
    >
      {label}
    </Button>
  )
}
