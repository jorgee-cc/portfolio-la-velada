import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CloseIcon, OpenInNewIcon } from '../../icons'
import { NETFLIX_RED, OFFICIAL_VELADA_URL, PANEL_BACKGROUND } from '../../constants'
import type { CatalogItem } from '../../types'
import { PlayButton, SecondaryLinkButton } from '../ui/ActionButtons'

interface DetailHeroProps {
  item: CatalogItem
  isPortfolio: boolean
  onClose: () => void
}

export default function DetailHero({ item, isPortfolio, onClose }: DetailHeroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        aspectRatio: '16 / 9',
        minHeight: { xs: 260, sm: 0 },
      }}
    >
      {isPortfolio ? (
        <Box className="netflix-modal__mark-wrap" aria-hidden="true">
          <Box className="netflix-modal__mark logo-mark" />
        </Box>
      ) : (
        <Box
          component="img"
          src={item.backdrop}
          alt=""
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      )}
      <Box className="netflix-modal__scrim" aria-hidden="true" />

      <IconButton
        onClick={onClose}
        aria-label="Cerrar"
        sx={{
          position: 'absolute',
          top: 14,
          right: 14,
          bgcolor: PANEL_BACKGROUND,
          color: '#ffffff',
          '&:hover': { bgcolor: NETFLIX_RED },
        }}
      >
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          px: { xs: 2, sm: 3, md: 5 },
          pb: { xs: 2.5, md: 3 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.7rem', sm: '2.2rem', md: '2.7rem' },
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            mb: 2,
            textShadow: '0 3px 18px rgba(0, 0, 0, 0.6)',
          }}
        >
          {item.title}
        </Typography>

        <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
          <PlayButton
            compact
            href={isPortfolio ? undefined : item.watchUrl}
            label={
              isPortfolio ? 'Watch Now' : item.watchUrl ? 'Ver en YouTube' : 'Ver portfolio'
            }
            external={!isPortfolio && Boolean(item.watchUrl)}
          />
          {!isPortfolio && (
            <SecondaryLinkButton
              href={OFFICIAL_VELADA_URL}
              label="Sitio oficial"
              icon={<OpenInNewIcon />}
              compact
              external
            />
          )}
        </Stack>
      </Box>
    </Box>
  )
}
