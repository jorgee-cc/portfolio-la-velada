import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { feature } from '../../../data/landing'

export default function HeroBadge() {
  return (
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
        <Box sx={{ px: 1.2, py: 0.35, fontSize: '0.9rem', fontWeight: 800 }}>{feature.rank}</Box>
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
  )
}
