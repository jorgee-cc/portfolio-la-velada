import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import useAnchorMenu from '../../hooks/useAnchorMenu'
import type { NavigationItem } from '../../data/navigation'
import { site } from '../../../data/site'

interface UserMenuProps {
  items: NavigationItem[]
}

export default function UserMenu({ items }: UserMenuProps) {
  const { anchor, open, close } = useAnchorMenu()

  return (
    <>
      <IconButton onClick={open} sx={{ p: 0, ml: 1 }} aria-label="Abrir perfil">
        <Avatar
          alt={site.name}
          src="/images/LogoPersonal.jpg"
          variant="rounded"
          sx={{ width: 34, height: 34, border: '1px solid rgba(255, 255, 255, 0.25)' }}
        />
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={close}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: '45px' }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.label}
            component="a"
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            onClick={close}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
