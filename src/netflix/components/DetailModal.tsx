import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CloseIcon, OpenInNewIcon } from '../icons'
import { featureChapters, featureDetails } from '../../data/landing'
import { pitchHtml, portfolioPath } from '../../data/site'
import { useDetailModal } from '../providers/DetailModalProvider'
import { PlayButton } from './ui/ActionButtons'
import MetaRow from './ui/MetaRow'

const OFFICIAL_URL = 'https://www.infolavelada.com/'

export default function DetailModal() {
  const { item, close } = useDetailModal()
  const isPortfolio = item?.kind === 'portfolio'

  return (
    <Dialog
      open={Boolean(item)}
      onClose={close}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-label={item ? `Ficha de ${item.title}` : 'Ficha'}
      PaperProps={{
        sx: {
          bgcolor: '#181818',
          backgroundImage: 'none',
          borderRadius: 1.5,
          overflow: 'hidden',
        },
      }}
    >
      {item && (
        <DialogContent sx={{ p: 0, bgcolor: '#181818' }}>
          <Box sx={{ position: 'relative', aspectRatio: '16 / 9', minHeight: { xs: 260, sm: 0 } }}>
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
              onClick={close}
              aria-label="Cerrar"
              sx={{
                position: 'absolute',
                top: 14,
                right: 14,
                bgcolor: '#181818',
                color: '#ffffff',
                '&:hover': { bgcolor: '#e50914' },
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
                <PlayButton compact label={isPortfolio ? 'Watch Now' : 'Ver portfolio'} />
                {!isPortfolio && (
                  <Button
                    component="a"
                    href={OFFICIAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    startIcon={<OpenInNewIcon />}
                    sx={{
                      bgcolor: 'rgba(109, 109, 110, 0.7)',
                      color: '#ffffff',
                      px: 2,
                      py: 0.6,
                      borderRadius: 1,
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      '&:hover': { bgcolor: 'rgba(109, 109, 110, 0.45)' },
                    }}
                  >
                    Sitio oficial
                  </Button>
                )}
              </Stack>
            </Box>
          </Box>

          <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 2.5, md: 3.5 } }}>
            <MetaRow match={item.match} year={item.year} age={item.age} duration={item.duration} />

            {isPortfolio ? (
              <Box
                sx={{
                  mt: 2.5,
                  fontSize: { xs: '0.92rem', md: '1rem' },
                  lineHeight: 1.65,
                  color: 'rgba(255, 255, 255, 0.86)',
                  '& strong': { color: '#f6c343', fontWeight: 700 },
                }}
                dangerouslySetInnerHTML={{ __html: pitchHtml }}
              />
            ) : (
              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: { xs: '0.92rem', md: '1rem' },
                  lineHeight: 1.65,
                  color: 'rgba(255, 255, 255, 0.86)',
                }}
              >
                {item.overview}
              </Typography>
            )}

            {isPortfolio ? (
              <>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>
                  {item.tags.map((tag) => (
                    <Box
                      key={tag}
                      component="span"
                      sx={{
                        px: 1.25,
                        py: 0.55,
                        borderRadius: 999,
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        bgcolor: 'rgba(255, 255, 255, 0.04)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.06em',
                        color: 'rgba(255, 255, 255, 0.8)',
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 3.5,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    columnGap: 4,
                    rowGap: 0,
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  }}
                >
                  {featureDetails.map((detail) => (
                    <Box
                      key={detail.label}
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: '7.5rem 1fr',
                        gap: 1.5,
                        py: 1.2,
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: 'rgba(255, 255, 255, 0.45)',
                          pt: 0.35,
                        }}
                      >
                        {detail.label}
                      </Typography>
                      <Typography component="span" sx={{ fontSize: '0.88rem' }}>
                        {detail.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography
                    component="p"
                    sx={{
                      m: 0,
                      mb: 1.2,
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.45)',
                    }}
                  >
                    Capítulos del portfolio
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {featureChapters.map((chapter) => (
                      <Box
                        key={chapter.href}
                        component="a"
                        href={chapter.href}
                        sx={{
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
                        }}
                      >
                        {chapter.label}
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Box
                    component="a"
                    href={portfolioPath}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      color: '#f6c343',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    Ver el portfolio completo
                    <OpenInNewIcon sx={{ fontSize: 16 }} />
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    mt: 3,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    gap: 2,
                  }}
                >
                  {[
                    { label: 'Fecha', value: item.date },
                    { label: 'Recinto', value: item.venue },
                    { label: 'Ciudad', value: item.city },
                    { label: 'Categorías', value: item.tags.join(' · ') },
                  ].map((detail) => (
                    <Box key={detail.label}>
                      <Typography
                        component="p"
                        sx={{
                          m: 0,
                          fontSize: '0.68rem',
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: 'rgba(255, 255, 255, 0.45)',
                        }}
                      >
                        {detail.label}
                      </Typography>
                      <Typography component="p" sx={{ m: 0, mt: 0.5, fontSize: '0.9rem' }}>
                        {detail.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  component="a"
                  href={portfolioPath}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    mt: 4,
                    color: '#f6c343',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Ver el portfolio de Jorge
                  <OpenInNewIcon sx={{ fontSize: 16 }} />
                </Box>
              </>
            )}
          </Box>
        </DialogContent>
      )}
    </Dialog>
  )
}
