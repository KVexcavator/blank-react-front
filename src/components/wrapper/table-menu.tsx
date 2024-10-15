import MenuList from '@mui/material/MenuList'
import { useState, MouseEvent } from 'react'
import { IconButton, Menu, Tooltip } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Colors } from '../../themes/theme'
import { MenuItemBase, MenuItemProps } from './menu-items'

interface TableMenuProps {
  menuItems: Omit<MenuItemProps, 'handleClose'>[]
}

export function TableMenu(props: TableMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Tooltip title="Open Menu">
        <IconButton
          aria-label="more"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          autoFocus={false}
          sx={{
            outline: 'none',
            ':hover': {
              color: Colors.Blue,
              backgroundColor: Colors.BlueVeryLight,
            },
          }}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: 200 } }}
      >
        <MenuList>
          {props.menuItems.map((item) => (
            <MenuItemBase
              key={item.menuText}
              handleClose={handleClose}
              menuText={item.menuText}
              MenuIcon={item.MenuIcon}
              menuRightText={item.menuRightText}
              handleClick={item.handleClick}
              disabled={item.disabled}
              meta={item.meta}
            />
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}
