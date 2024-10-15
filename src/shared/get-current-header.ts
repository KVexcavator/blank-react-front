import { Organizations } from './../pages/dashboards/organizations/list';
import { useLocation } from 'react-router-dom'
import {
  DashboardItems,
  DashboardRoutes,
  DashboardSubItems,
  getFullDashboardRoute,
} from '../constants/routes'

export function useCurrentHeading(): {
  headingName: DashboardItems | DashboardSubItems
  showBackButton: boolean
} {
  const { pathname } = useLocation()

  let headingName: DashboardItems | DashboardSubItems = DashboardItems.Home
  let showBackButton: boolean = false
  switch (pathname) {

    case getFullDashboardRoute(DashboardRoutes.AdminHome): {
      headingName = DashboardItems.AdminHome
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.AdminStock): {
      headingName = DashboardItems.AdminStock
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.StockReports): {
      headingName = DashboardItems.StockReports
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Home): {
      headingName = DashboardItems.Home
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Deliveries): {
      headingName = DashboardItems.Deliveries
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Orders): {
      headingName = DashboardItems.Orders
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Products): {
      headingName = DashboardItems.Products
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Stocks): {
      headingName = DashboardItems.Stocks
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Users): {
      headingName = DashboardItems.Users
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Organizations): {
      headingName = DashboardItems.Organizations
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Billing): {
      headingName = DashboardItems.Billing
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.ProductCreate): {
      headingName = DashboardSubItems.CreateProduct
      showBackButton = true
      break
    }

    case getFullDashboardRoute(DashboardRoutes.Mappings): {
      headingName = DashboardItems.Mapping
      showBackButton = false
      break
    }

    case getFullDashboardRoute(DashboardRoutes.MappingCreate): {
      headingName = DashboardSubItems.CreateMapping
      showBackButton = true
      break
    }

    default: break
  }

  if (pathname.includes('/products/edit')) {
    headingName = DashboardSubItems.EditProduct
    showBackButton = true
  }

  if (pathname.includes('/stocks/list')) {
    headingName = DashboardSubItems.StockDetails
    showBackButton = true
  }

  if (pathname.includes('/mappings/edit')) {
    headingName = DashboardSubItems.EditMapping
    showBackButton = true
  }

  if (pathname.includes('/orders/view')) {
    headingName = DashboardSubItems.ListOrderItem
    showBackButton = true
  }

  if (pathname.includes('/orders/edit_organization')) {
    headingName = DashboardSubItems.OrderEditOrganization
    showBackButton = true
  }

  if (pathname.includes('/delivery/')) {
    headingName = DashboardSubItems.DeliveryDetails
    showBackButton = true
  }

  if (pathname.includes('/delivery/mark-delivered/')) {
    headingName = DashboardSubItems.DeliveryMarkDelivered
    showBackButton = true
  }

  if (pathname.includes('/delivery/mark-faulty/')) {
    headingName = DashboardSubItems.DeliveryMarkFaulty
    showBackButton = true
  }

  if (pathname.includes('/delivery/reassign/')) {
    headingName = DashboardSubItems.DeliveryReassign
    showBackButton = true
  }

  if (pathname.includes('/delivery/new_mobile_number/')) {
    headingName = DashboardSubItems.DeliveryNewMobileNumber
    showBackButton = true
  }

  return { headingName, showBackButton }
}
