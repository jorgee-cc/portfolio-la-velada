import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { feature } from '../../../data/landing'

export default function HeroMeta() {
  return (
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
  )
}
