import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

const footerLinkSx = {
  color: '#8c8c8c',
  fontSize: '0.8rem',
  textDecoration: 'none',
  lineHeight: 2,
  transition: 'color 0.2s ease',
  '&:hover': { color: '#ffffff', textDecoration: 'underline' },
} as const

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <Box>
      <Typography sx={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {links.map((link) => (
          <Box
            key={link.label}
            component="a"
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            sx={footerLinkSx}
          >
            {link.label}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
