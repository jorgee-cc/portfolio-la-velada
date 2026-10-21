import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { feature } from '../../../data/landing'

export default function HeroTitle() {
  return (
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
      {feature.titleLines.map((line) => (
        <Box component="span" key={line} sx={{ display: 'block' }}>
          {line}
        </Box>
      ))}
    </Typography>
  )
}
