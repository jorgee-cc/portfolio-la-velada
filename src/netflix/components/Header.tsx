import { useState, type MouseEvent } from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { MenuIcon } from '../icons'
import useScrolled from '../hooks/useScrolled'
import { site } from '../../data/site'

const APP_BAR_HEIGHT = 70

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Proyectos', href: '/portfolio#cartelera' },
  { label: 'Contacto', href: '/portfolio#rueda' },
]

export default function Header() {
  const scrolled = useScrolled(24)
  const [navAnchor, setNavAnchor] = useState<HTMLElement | null>(null)
  const [userAnchor, setUserAnchor] = useState<HTMLElement | null>(null)

  const openNav = (event: MouseEvent<HTMLElement>) => {
    setNavAnchor((current) => (current ? null : event.currentTarget))
  }
  const openUser = (event: MouseEvent<HTMLElement>) => {
    setUserAnchor((current) => (current ? null : event.currentTarget))
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: APP_BAR_HEIGHT,
        justifyContent: 'center',
        px: { xs: 2, md: '60px' },
        backgroundImage: scrolled
          ? 'none'
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.32) 55%, transparent 100%)',
        backgroundColor: scrolled ? 'rgba(20, 20, 20, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      <Toolbar
        disableGutters
        sx={{ minHeight: `${APP_BAR_HEIGHT}px !important`, gap: { xs: 1, md: 3 } }}
      >
        <Box
          component="a"
          href="#inicio"
          aria-label="Inicio"
          sx={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
        >
          <Box
            component="img"
            src="/assets/netflix-logo.png"
            alt="Netflix"
            sx={{ width: { xs: 74, md: 92 }, height: 'auto', display: 'block' }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={2.5}
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                color: 'rgba(255, 255, 255, 0.78)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#ffffff' },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

        <IconButton
          aria-label="Abrir menú"
          onClick={openNav}
          sx={{ display: { md: 'none' }, color: '#ffffff' }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={navAnchor}
          open={Boolean(navAnchor)}
          onClose={() => setNavAnchor(null)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.label}
              component="a"
              href={item.href}
              onClick={() => setNavAnchor(null)}
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>

        <IconButton onClick={openUser} sx={{ p: 0, ml: 1 }} aria-label="Abrir perfil">
          <Avatar
            alt={site.name}
            src="/images/LogoPersonal.jpg"
            variant="rounded"
            sx={{ width: 34, height: 34, border: '1px solid rgba(255, 255, 255, 0.25)' }}
          />
        </IconButton>
        <Menu
          anchorEl={userAnchor}
          open={Boolean(userAnchor)}
          onClose={() => setUserAnchor(null)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          sx={{ mt: '45px' }}
        >
          <MenuItem component="a" href="/portfolio" onClick={() => setUserAnchor(null)}>
            Portfolio
          </MenuItem>
          <MenuItem
            component="a"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setUserAnchor(null)}
          >
            GitHub
          </MenuItem>
          <MenuItem
            component="a"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => setUserAnchor(null)}
          >
            LinkedIn
          </MenuItem>
          <MenuItem component="a" href={`mailto:${site.email}`} onClick={() => setUserAnchor(null)}>
            Contacto
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
