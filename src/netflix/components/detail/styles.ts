import type { SxProps, Theme } from '@mui/material/styles'
import { PANEL_BACKGROUND } from '../../constants'

export const modalPaperSx: SxProps<Theme> = {
  bgcolor: PANEL_BACKGROUND,
  backgroundImage: 'none',
  borderRadius: 1.5,
  overflow: 'hidden',
}

export const modalBodySx: SxProps<Theme> = {
  px: { xs: 2, sm: 3, md: 5 },
  py: { xs: 2.5, md: 3.5 },
}

export const overviewSx: SxProps<Theme> = {
  mt: 2.5,
  fontSize: { xs: '0.92rem', md: '1rem' },
  lineHeight: 1.65,
  color: 'rgba(255, 255, 255, 0.86)',
}

export const pitchSx: SxProps<Theme> = {
  ...overviewSx,
  '& strong': { color: '#f6c343', fontWeight: 700 },
}

export const tagsRowSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1,
  mt: 3,
}

export const tagSx: SxProps<Theme> = {
  px: 1.25,
  py: 0.55,
  borderRadius: 999,
  border: '1px solid rgba(255, 255, 255, 0.18)',
  bgcolor: 'rgba(255, 255, 255, 0.04)',
  fontSize: '0.72rem',
  letterSpacing: '0.06em',
  color: 'rgba(255, 255, 255, 0.8)',
}

export const detailGridSx: SxProps<Theme> = {
  mt: 3.5,
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
  columnGap: 4,
  rowGap: 0,
  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
}

export const detailRowSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: '7.5rem 1fr',
  gap: 1.5,
  py: 1.2,
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
}

export const detailLabelSx: SxProps<Theme> = {
  fontSize: '0.68rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.45)',
  pt: 0.35,
}

export const sectionLabelSx: SxProps<Theme> = {
  m: 0,
  mb: 1.2,
  fontSize: '0.68rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.45)',
}

export const chaptersRowSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 1,
}

export const chapterSx: SxProps<Theme> = {
  px: 1.6,
  py: 0.7,
  borderRadius: 999,
  border: '1px solid rgba(255, 255, 255, 0.18)',
  color: '#ffffff',
  fontSize: '0.78rem',
  fontWeight: 600,
  textDecoration: 'none',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    borderColor: '#f6c343',
    bgcolor: 'rgba(246, 195, 67, 0.08)',
  },
}

export const portfolioLinkSx: SxProps<Theme> = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  color: '#f6c343',
  fontWeight: 700,
  textDecoration: 'none',
  fontSize: '0.9rem',
  '&:hover': { textDecoration: 'underline' },
}

export const editionGridSx: SxProps<Theme> = {
  mt: 3,
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
  gap: 2,
}

export const editionLabelSx: SxProps<Theme> = {
  m: 0,
  fontSize: '0.68rem',
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'rgba(255, 255, 255, 0.45)',
}

export const editionValueSx: SxProps<Theme> = {
  m: 0,
  mt: 0.5,
  fontSize: '0.9rem',
}
