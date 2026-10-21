import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { portfolioItem } from '../data/catalog'
import { useDetailModal } from '../providers/DetailModalProvider'
import { MoreInfoButton, PlayButton } from './ui/ActionButtons'
import HeroBadge from './hero/HeroBadge'
import HeroMeta from './hero/HeroMeta'
import HeroTitle from './hero/HeroTitle'

export default function Hero() {
  const { open } = useDetailModal()

  return (
    <Box
      component="section"
      id="inicio"
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        minHeight: { xs: '86vh', md: '92vh' },
        overflow: 'hidden',
        bgcolor: '#141414',
        pb: { xs: 8, md: 14 },
      }}
    >
      <Box className="netflix-hero__backdrop" aria-hidden="true">
        <Box className="netflix-hero__mark logo-mark" />
        <Box className="netflix-hero__glow" />
      </Box>
      <Box className="netflix-hero__scrim" aria-hidden="true" />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: 820,
          px: { xs: 2.5, sm: 4, md: '60px' },
        }}
      >
        <Stack spacing={2.4}>
          <HeroBadge />
          <HeroTitle />
          <HeroMeta />

          <Typography
            component="p"
            sx={{
              m: 0,
              maxWidth: 600,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.86)',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.6)',
            }}
          >
            {portfolioItem.overview}
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ pt: 0.5 }}>
            <PlayButton />
            <MoreInfoButton onClick={() => open(portfolioItem)} />
          </Stack>
        </Stack>
      </Box>

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          right: { md: '60px' },
          bottom: { md: '15%' },
          zIndex: 2,
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <Box
          sx={{
            borderLeft: '3px solid #dcdcdc',
            bgcolor: 'rgba(51, 51, 51, 0.6)',
            px: 1.4,
            py: 0.6,
            fontSize: '0.9rem',
            color: '#ffffff',
          }}
        >
          16+
        </Box>
      </Box>
    </Box>
  )
}
