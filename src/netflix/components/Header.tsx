import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useScrolled from '../hooks/useScrolled'
import { APP_BAR_HEIGHT } from '../constants'
import { headerNavItems, userMenuItems } from '../data/navigation'
import HeaderNav from './header/HeaderNav'
import UserMenu from './header/UserMenu'

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
        <UserMenu items={userMenuItems} />
      </Toolbar>
    </AppBar>
  )
}
