import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { contacts, navLinks, portfolioPath, site } from '../../data/site'

const linkSx = {
  color: '#8c8c8c',
  fontSize: '0.8rem',
  textDecoration: 'none',
  lineHeight: 2,
  transition: 'color 0.2s ease',
  '&:hover': { color: '#ffffff', textDecoration: 'underline' },
} as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        bgcolor: '#141414',
        px: { xs: 3, md: '60px' },
        py: { xs: 5, md: 7 },
      }}
    >
      <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
        <Typography sx={{ color: '#8c8c8c', fontSize: '0.85rem', mb: 3 }}>
          ¿Hablamos? · {site.email} · {site.phone}
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 4,
          }}
        >
          <Box>
            <Typography sx={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, mb: 1 }}>
              Portfolio
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {navLinks.map((link) => (
                <Box
                  key={link.href}
                  component="a"
                  href={`${portfolioPath}${link.href}`}
                  sx={linkSx}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, mb: 1 }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {contacts.map((contact) => (
                <Box
                  key={contact.label}
                  component="a"
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                  sx={linkSx}
                >
                  {contact.label}
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography sx={{ color: '#ffffff', fontSize: '0.78rem', fontWeight: 700, mb: 1 }}>
              La Velada del Código
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box component="a" href="/portfolio" sx={linkSx}>
                Portfolio completo
              </Box>
              <Box component="a" href="#inicio" sx={linkSx}>
                Volver arriba
              </Box>
              <Box component="a" href={site.github} target="_blank" rel="noreferrer" sx={linkSx}>
                Código en GitHub
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={{ color: '#5f5f5f', fontSize: '0.72rem', lineHeight: 1.7 }}>
          © {year} {site.name} · Candidatura {site.candidate} · Hecho con Astro, React y MUI.
          <br />
          Página de homenaje a Netflix. No afiliada a Netflix, Inc.
        </Typography>
      </Box>
    </Box>
  )
}
