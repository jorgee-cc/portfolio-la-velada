import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MenuIcon } from '../../icons'
import useAnchorMenu from '../../hooks/useAnchorMenu'
import type { NavigationItem } from '../../data/navigation'

interface HeaderNavProps {
  items: NavigationItem[]
}

export default function HeaderNav({ items }: HeaderNavProps) {
  const { anchor, open, close } = useAnchorMenu()

  return (
    <>
      <Stack
        direction="row"
        spacing={2.5}
        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}
      >
        {items.map((item) => (
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
        onClick={open}
        sx={{ display: { md: 'none' }, color: '#ffffff' }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {items.map((item) => (
          <MenuItem key={item.label} component="a" href={item.href} onClick={close}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
