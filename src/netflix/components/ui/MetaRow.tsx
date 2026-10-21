import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface MetaRowProps {
  match: number
  year: string
  age: string
  duration: string
}

export default function MetaRow({ match, year, age, duration }: MetaRowProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1.25,
        fontSize: '0.85rem',
      }}
    >
      <Typography component="span" sx={{ color: 'success.main', fontWeight: 700 }}>
        {match}% para ti
      </Typography>
      <Typography component="span" sx={{ color: 'text.secondary' }}>
        {year}
      </Typography>
      <Box
        component="span"
        sx={{
          border: '1px solid rgba(255, 255, 255, 0.4)',
          color: 'text.secondary',
          px: 0.6,
          fontSize: '0.7rem',
          lineHeight: 1.6,
          borderRadius: 0.5,
        }}
      >
        {age}
      </Box>
      <Typography component="span" sx={{ color: 'text.secondary' }}>
        {duration}
      </Typography>
      <Box
        component="span"
        sx={{
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: 0.5,
          px: 0.5,
          fontSize: '0.65rem',
          lineHeight: 1.6,
          color: 'text.secondary',
        }}
      >
        HD
      </Box>
    </Box>
  )
}
