import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { portfolioItem } from '../data/catalog'
import { TRAILER_PATH, TRAILER_POSTER } from '../constants'
import { PlayArrowIcon, VolumeOffIcon } from '../icons'
import { useDetailModal } from '../providers/DetailModalProvider'
import { MoreInfoButton, PlayButton } from './ui/ActionButtons'
import HeroBadge from './hero/HeroBadge'
import HeroMeta from './hero/HeroMeta'
import HeroTitle from './hero/HeroTitle'

export default function Hero() {
  const { open } = useDetailModal()
  const trailerRef = useRef<HTMLVideoElement>(null)
  const autoplayed = useRef(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [muted, setMuted] = useState(true)
  const [trailerEnded, setTrailerEnded] = useState(false)
  const [needsInteraction, setNeedsInteraction] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches)

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const trailer = trailerRef.current
    if (!trailer) return

    if (reducedMotion) {
      trailer.pause()
      setNeedsInteraction(true)
      return
    }

    // Autoplay silenciado: es el único que el navegador permite sin un gesto
    // del usuario. El vídeo se reproduce una sola vez; después solo se repite
    // si el usuario pulsa el botón.
    const autoplay = () => {
      if (autoplayed.current) return
      autoplayed.current = true
      trailer.muted = true
      setMuted(true)

      void trailer.play().catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'NotAllowedError') {
          setNeedsInteraction(true)
          return
        }

        console.error('No se pudo reproducir el tráiler.', error)
      })
    }

    // Durante el ident de entrada no se decodifica el vídeo: competiría por la
    // GPU con la animación del logo y la haría perder frames.
    const root = document.documentElement
    const introPending =
      !root.classList.contains('intro-done') && !root.classList.contains('intro-skip')

    if (!introPending) {
      autoplay()
      return
    }

    window.addEventListener('intro:done', autoplay, { once: true })
    return () => window.removeEventListener('intro:done', autoplay)
  }, [reducedMotion])

  const enableSound = () => {
    const trailer = trailerRef.current
    if (!trailer) return

    trailer.muted = false
    setMuted(false)

    if (trailer.paused) {
      void trailer.play().catch(() => setNeedsInteraction(true))
    }
  }

  const replayTrailer = () => {
    const trailer = trailerRef.current
    if (!trailer) return

    setTrailerEnded(false)
    setNeedsInteraction(false)
    trailer.currentTime = 0
    trailer.muted = false
    setMuted(false)

    void trailer.play().catch((error: unknown) => {
      setNeedsInteraction(true)
      console.error('No se pudo reproducir el tráiler.', error)
    })
  }

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
        pb: { xs: 29, md: 14 },
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

      <Box className="netflix-hero__trailer">
        <Box component="span" className="netflix-hero__trailer-label">
          Tráiler
        </Box>
        <Box
          component="video"
          src={TRAILER_PATH}
          poster={TRAILER_POSTER}
          muted
          playsInline
          preload="none"
          aria-label="Tráiler de La Velada del Código"
          ref={trailerRef}
          onPlay={() => setNeedsInteraction(false)}
          onEnded={() => setTrailerEnded(true)}
          onVolumeChange={() => setMuted(trailerRef.current?.muted ?? true)}
        />

        {muted && !trailerEnded && !needsInteraction && (
          <Button
            className="netflix-hero__trailer-sound"
            onClick={enableSound}
            startIcon={<VolumeOffIcon />}
            size="small"
            aria-label="Activar el sonido del tráiler"
          >
            Activar sonido
          </Button>
        )}

        {(trailerEnded || needsInteraction) && (
          <Button
            className="netflix-hero__trailer-replay"
            onClick={replayTrailer}
            startIcon={<PlayArrowIcon />}
            aria-label={
              trailerEnded
                ? 'Volver a reproducir el tráiler'
                : 'Activar el sonido y reproducir el tráiler'
            }
          >
            Reproducir tráiler
          </Button>
        )}
      </Box>

      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          right: { md: '60px' },
          bottom: { md: '7%' },
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
