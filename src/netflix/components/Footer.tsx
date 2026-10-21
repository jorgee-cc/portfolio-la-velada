import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { contacts, navLinks, portfolioPath, site } from '../../data/site'
import { DARK_BACKGROUND } from '../constants'
import FooterColumn, { type FooterLink } from './footer/FooterColumn'

export default function Footer() {
  const year = new Date().getFullYear()

  const columns: Array<{ title: string; links: FooterLink[] }> = [
    {
      title: 'Portfolio',
      links: navLinks.map((link) => ({
        label: link.label,
        href: `${portfolioPath}${link.href}`,
      })),
    },
    {
      title: 'Contacto',
      links: contacts.map((contact) => ({
        label: contact.label,
        href: contact.href,
        external: contact.href.startsWith('http'),
      })),
    },
    {
      title: 'La Velada del Código',
      links: [
        { label: 'Portfolio completo', href: portfolioPath },
        { label: 'Volver arriba', href: '#inicio' },
        { label: 'Código en GitHub', href: site.github, external: true },
      ],
    },
  ]

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        bgcolor: DARK_BACKGROUND,
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
          {columns.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
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
