import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { yellow } from '@mui/material/colors';
import { MainListItems } from '../components/navigation-bar/navbar'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import DashboardHome from './dashboards/home'
import Orders from './dashboards/orders/list'
import { AppBar } from '../components/navigation-bar/app-bar'
import { Drawer } from '../components/navigation-bar/drawer'
import { Products } from './dashboards/products/list'
import { useCurrentHeading } from '../shared/get-current-header'
import { DashboardRoutes } from '../constants/routes'
import { EditProduct } from './dashboards/products/edit'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { CreateProduct } from './dashboards/products/create'
import Stocks from './dashboards/stocks/list'
import Vouchers from './dashboards/stocks/vouchers'
import ProductMappings from './dashboards/mappings/mappings-list'
import { CreateProductMapping } from './dashboards/mappings/create'
import { EditProductMapping } from './dashboards/mappings/edit'
import { HeaderLogo } from '../components/navigation-bar/header-logo';
import OrderItems from './dashboards/orders/order-item'
import { Users } from './dashboards/users/list'
import { Organizations } from './dashboards/organizations/list'
import { CreateUser } from './dashboards/users/create'
import { CreateOrganization } from './dashboards/organizations/create'
import { EditUser } from './dashboards/users/edit'
import { EditOrganization } from './dashboards/organizations/edit'
import Auth from '../pages/auth'
import Link from '@mui/material/Link'
import { AuthContext } from '../context/auth_context'
import { useContext, useState } from 'react'
import { AuthContextType } from '../context/auth_type_context'
import AdminHome from './admin/home'
import { AdminStock } from './admin/stock/list'
import { StockReports } from './dashboards/stock_reports/list'
import { Deliveries } from './dashboards/deliveries/list'
import DeliveryDetails from './dashboards/deliveries/details'
import DeliveryReschedule from './dashboards/deliveries/reschedule'
import DeliveryMarkDelivered from './dashboards/deliveries/mark-delivered'
import DeliveryMarkFaulty from './dashboards/deliveries/mark-faulty'
import DeliveryReassign from './dashboards/deliveries/reassign'
import DeliveryNewMobileNumber from './dashboards/deliveries/new-mobile-number'
import { Button } from '@mui/material'
import { postUserLogout } from '../api/user-management'
import { Billing } from './dashboards/billing/list'

function DashboardContent() {
  const [open, setOpen] = useState(true)
  const { headingName, showBackButton } = useCurrentHeading()

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const { auth, changeAuth } = useContext(AuthContext) as AuthContextType
  const navigate = useNavigate()

  const { pathname } = useLocation()
  const textLink = pathname.includes('/admin/') ? 'Leave the admin panel' : 'Go to admin panel'
  const urlLink = pathname.includes('/admin/') ? '/dashboard/home' : '/dashboard/admin/home'

  const handleLogout = () => {
    postUserLogout()
    window.location.reload()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {showBackButton && (<div
            onClick={() => window.history.back()}
            style={{ marginRight: '20px', marginTop: '5px', verticalAlign: 'end' }}
          >
            <ArrowBackIcon style={{ fontSize: '24px' }} />
          </div>
          )}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              verticalAlign: 'middle',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            {headingName}
            {['super', 'admin', 'accountant'].includes(auth.role) && (
              <span
                style={{ marginLeft: '20px', marginTop: '5px', verticalAlign: 'top' }}
              >
                <Link
                  underline='none'
                  component="button"
                  color="inherit"
                  variant="button"
                  onClick={() => {navigate(urlLink)}}
                >
                  {textLink}
                </Link>
              </span>
            )}
          </Typography>
          <IconButton color="inherit">
            {/* <Badge badgeContent={4} color="secondary"> */}
            {/* Remove the notifications icons */}
            {/* <NotificationsIcon /> */}
            {/* </Badge> */}
          </IconButton>
          <Button
            style={{color: 'black', backgroundColor: yellow[400]}}
            size="small"
            variant="outlined"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <HeaderLogo/>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Routes>
          <Route element={<Auth allowedRoles={['user', 'super', 'admin', 'accountant']}/>}>
            <Route path="/" element={<Navigate to={DashboardRoutes.Home} />} />
            <Route path={DashboardRoutes.Home} element={<DashboardHome />} />
            <Route path={DashboardRoutes.Stocks} element={<Stocks />} />
            <Route path={DashboardRoutes.Vouchers} element={<Vouchers />} />
            <Route path={DashboardRoutes.Orders} element={<Orders />} />
            <Route path={DashboardRoutes.OrderItems} element={<OrderItems />} />
            <Route path={DashboardRoutes.Products} element={<Products />} />
            <Route path={DashboardRoutes.ProductEdit} element={<EditProduct />} />
            <Route path={DashboardRoutes.ProductCreate} element={<CreateProduct />} />
            <Route path={DashboardRoutes.Mappings} element={<ProductMappings />} />
            <Route path={DashboardRoutes.MappingCreate} element={<CreateProductMapping />} />
            <Route path={DashboardRoutes.MappingEdit} element={<EditProductMapping />} />
            <Route path={DashboardRoutes.Deliveries} element={<Deliveries />} />
            <Route path={DashboardRoutes.DeliveryDetails} element={<DeliveryDetails />} />
            <Route path={DashboardRoutes.DeliveryReschedule} element={<DeliveryReschedule />} />
            <Route path={DashboardRoutes.DeliveryMarkDelivered} element={<DeliveryMarkDelivered />} />
            <Route path={DashboardRoutes.DeliveryMarkFaulty} element={<DeliveryMarkFaulty />} />
            <Route path={DashboardRoutes.DeliveryReassign} element={<DeliveryReassign />} />
            <Route path={DashboardRoutes.DeliveryNewMobileNumber} element={<DeliveryNewMobileNumber />} />
          </Route>
          <Route element={<Auth allowedRoles={['super', 'admin', 'accountant']}/>}>
            <Route path={DashboardRoutes.Users} element={<Users />} />
            <Route path={DashboardRoutes.UserEdit} element={<EditUser />} />
            <Route path={DashboardRoutes.UserCreate} element={<CreateUser />} />
            <Route path={DashboardRoutes.Organizations} element={<Organizations />} />
            <Route path={DashboardRoutes.OrganizationEdit} element={<EditOrganization />} />
            <Route path={DashboardRoutes.OrganizationCreate} element={<CreateOrganization />} />
            <Route path={DashboardRoutes.AdminHome} element={<AdminHome />} />
            <Route path={DashboardRoutes.AdminStock} element={<AdminStock />} />
            <Route path={DashboardRoutes.StockReports} element={<StockReports />} />
            <Route path={DashboardRoutes.Billing} element={<Billing />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}

// here
