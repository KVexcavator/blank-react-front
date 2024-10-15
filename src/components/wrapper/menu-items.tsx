import { noop } from 'lodash'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import { Colors } from '../../themes/theme'

export interface MenuItemProps {
  menuText: string
  MenuIcon: any
  menuRightText?: string
  handleClick?: (meta: any) => void
  handleClose: () => void
  meta?: any
  disabled?: boolean
}

export const MenuItemBase = ({
  MenuIcon,
  handleClick,
  ...rest
}: MenuItemProps) => {
  const handleMenuItemClose = () => {
    if (handleClick) {
      handleClick(rest.meta)
    }
    rest.handleClose()
  }
  return (
    <MenuItem onClick={handleMenuItemClose} disabled={rest.disabled || false}>
      <ListItemIcon>
        <MenuIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>{rest.menuText}</ListItemText>
      <Typography variant="body2" color="text.secondary">
        {rest.menuRightText || null}
      </Typography>
    </MenuItem>
  )
}
