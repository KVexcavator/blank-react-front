import * as React from 'react'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CategoryIcon from '@mui/icons-material/Category'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import WorkIcon from '@mui/icons-material/Work'
import RouteIcon from '@mui/icons-material/Route'
import ViewSidebarRoundedIcon from '@mui/icons-material/ViewSidebarRounded'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  DashboardItems,
  DashboardRoutes,
  getFullDashboardRoute
} from '../../constants/routes'
import { Colors } from '../../themes/theme'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth_context'
import { AuthContextType } from '../../context/auth_type_context'

interface IMainMenuListItems {
  path: string
  IconComponent: React.ReactElement
  text: string
  visible: boolean
  roles: any
}

const MainMenuItemsData: IMainMenuListItems[] = [
  {
    path: getFullDashboardRoute(DashboardRoutes.Home),
    visible: true,
    IconComponent: <DashboardIcon />,
    text: DashboardItems.Home,
    roles: ['super', 'admin', 'user', 'accountant']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Orders),
    visible: true,
    IconComponent: <AddShoppingCartIcon />,
    text: DashboardItems.Orders,
    roles: ['super', 'admin', 'user']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Deliveries),
    visible: true,
    IconComponent: <LocalShippingIcon />,
    text: DashboardItems.Deliveries,
    roles: ['super', 'admin', 'user']
  },
]

const AdminMenuItemsData: IMainMenuListItems[] = [
  {
    path: getFullDashboardRoute(DashboardRoutes.AdminHome),
    visible: true,
    IconComponent: <AccountBalanceIcon />,
    text: DashboardItems.AdminHome,
    roles: ['super', 'admin', 'accountant']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Users),
    visible: true,
    IconComponent: <ContactPageIcon />,
    text: DashboardItems.Users,
    roles: ['super', 'admin']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Stocks),
    visible: true,
    IconComponent: <InventoryIcon />,
    text: DashboardItems.Stocks,
    roles: ['super', 'admin']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.AdminStock),
    visible: true,
    IconComponent: <AccountBalanceWalletIcon />,
    text: DashboardItems.AdminStock,
    roles: ['super', 'admin', 'accountant']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.StockReports),
    visible: true,
    IconComponent: <AccountTreeIcon />,
    text: DashboardItems.StockReports,
    roles: ['super', 'admin', 'accountant']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Organizations),
    visible: true,
    IconComponent: <WorkIcon />,
    text: DashboardItems.Organizations,
    roles: ['super']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Billing),
    visible: true,
    IconComponent: <ViewSidebarRoundedIcon />,
    text: DashboardItems.Billing,
    roles: ['super', 'admin', 'accountant']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Mappings),
    visible: true,
    IconComponent: <RouteIcon />,
    text: DashboardItems.Mapping,
    roles: ['super']
  },
  {
    path: getFullDashboardRoute(DashboardRoutes.Products),
    visible: true,
    IconComponent: <CategoryIcon />,
    text: DashboardItems.Products,
    roles: ['super']
  },
]

export const MainListItems = () => {

  const { auth } = useContext(AuthContext) as AuthContextType
  const navigate = useNavigate()
  const isActive = (path: string) => pathname.includes(path)

  const { pathname } = useLocation()
  const itemsData = pathname.includes('/admin/') ? AdminMenuItemsData : MainMenuItemsData

  const Lists = React.useMemo(() => {
    return itemsData.filter((item) => item.visible && item.roles.includes(auth.role)).map((item) => {
      return (
        <ListItemButton
          selected={isActive(item.path)}
          key={item.path}
          onClick={() => navigate(item.path)}
        >
          <ListItemIcon
            sx={{
              color: isActive(item.path) ? Colors.Blue : undefined,
            }}
          >
            {item.IconComponent}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: isActive(item.path) ? Colors.Blue : undefined,
            }}
            primary={item.text}
          />
        </ListItemButton>
      )
    })
  }, [navigate])
  return <React.Fragment>{Lists}</React.Fragment>
}
