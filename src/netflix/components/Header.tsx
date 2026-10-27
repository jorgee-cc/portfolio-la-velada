import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import useScrolled from '../hooks/useScrolled'
import { APP_BAR_HEIGHT } from '../constants'
import { headerNavItems, userMenuItems } from '../data/navigation'
import { GitHubIcon, LinkedInIcon } from '../icons'
import { site } from '../../data/site'
import HeaderNav from './header/HeaderNav'
import UserMenu from './header/UserMenu'

const socialActions = [
  { label: 'GitHub', href: site.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: site.linkedin, Icon: LinkedInIcon },
]

export default function Header() {
  const scrolled = useScrolled(24)

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
          component="img"
          src="/assets/netflix-logo.png"
          alt="Netflix"
          sx={{ width: { xs: 74, md: 92 }, height: 'auto', display: 'block', flexShrink: 0 }}
        />

        <HeaderNav items={headerNavItems} />
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
          {socialActions.map(({ label, href, Icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} de ${site.name}`}
              title={label}
              size="small"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                transition: 'color 0.2s ease',
                '&:hover': { color: '#f6c343' },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Box>
        <UserMenu items={userMenuItems} />
      </Toolbar>
    </AppBar>
  )
}
