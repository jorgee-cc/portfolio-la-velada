import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { feature } from '../../data/landing'
import { portfolioItem } from '../data/catalog'
import { useDetailModal } from '../providers/DetailModalProvider'
import { MoreInfoButton, PlayButton } from './ui/ActionButtons'

const titleParts = feature.title.split(' del ')

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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'stretch',
                bgcolor: '#e50914',
                borderRadius: 0.5,
                overflow: 'hidden',
                boxShadow: '0 6px 20px -8px rgba(229, 9, 20, 0.9)',
              }}
            >
              <Box
                sx={{
                  px: 1,
                  py: 0.45,
                  display: 'flex',
                  alignItems: 'center',
                  borderRight: '1px solid rgba(255, 255, 255, 0.45)',
                  fontSize: '0.55rem',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                }}
              >
                TOP
              </Box>
              <Box sx={{ px: 1.2, py: 0.35, fontSize: '0.9rem', fontWeight: 800 }}>
                {feature.rank}
              </Box>
            </Box>
            <Typography
              component="p"
              sx={{
                m: 0,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.62)',
              }}
            >
              {feature.kicker}
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              m: 0,
              fontSize: { xs: 'clamp(2.7rem, 12vw, 4rem)', md: 'clamp(4rem, 5.4vw, 5.6rem)' },
              fontWeight: 900,
              lineHeight: 0.94,
              letterSpacing: '-0.035em',
              color: '#ffffff',
              textShadow: '0 3px 30px rgba(0, 0, 0, 0.75)',
            }}
          >
            {titleParts.map((part, index) => (
              <Box component="span" key={part} sx={{ display: 'block' }}>
                {index === 0 ? `${part} ` : `del ${part}`}
              </Box>
            ))}
          </Typography>

          <Typography
            component="p"
            sx={{
              m: 0,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              fontSize: { xs: '0.72rem', sm: '0.82rem' },
              letterSpacing: '0.06em',
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            <Box component="span" sx={{ color: '#f6c343', fontWeight: 700 }}>
              {feature.year}
            </Box>
            <Box component="span" aria-hidden="true">
              ·
            </Box>
            <Box component="span">Candidatura {feature.candidate}</Box>
            <Box component="span" aria-hidden="true">
              ·
            </Box>
            <Box component="span">{feature.genres.join(' · ')}</Box>
          </Typography>

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
