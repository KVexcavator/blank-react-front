
export enum DashboardItems {
  Home = 'Home',
  Stocks = 'Stocks',
  Orders = 'Orders',
  Deliveries = 'Deliveries',
  Users = 'Users',
  Products = 'Products',
  Mapping= "Mappings",
  // admin portal
  AdminHome = 'Hello Admin !',
  AdminStock = 'Stock Level',
  StockReports = 'Stock Reports',
  Organizations = 'Organizations',
  Billing = 'Billing'
}
// Mappings, Products to Super Admin Panel, Stock level to normal Admin panel please.

export enum DashboardSubItems {
  ListOrderItem = "Order authorized Items",
  OrderEditOrganization = "Order Edit Organization",
  // admin portal
  EditProduct = "Edit product",
  CreateProduct = "Create product",
  StockDetails = "Vouchers",
  CreateMapping = "Create mapping",
  EditMapping = "Edit mapping",
  EditUser = "Edit user",
  CreateUser = "Create User",
  DeliveryDetails = 'Delivery Details',
  DeliveryReschedule = 'Delivery Reschedule',
  DeliveryMarkDelivered = 'Delivery Mark as Delivered',
  DeliveryMarkFaulty = 'Delivery Mark as Faulty',
  DeliveryReassign = 'Delivery Reassign',
  DeliveryNewMobileNumber = 'Delivery New Mobile Number',
  EditOrganization = "Edit organization",
  CreateOrganization = "Create organization",
}


export enum DashboardRoutes {
  Home = '/home',
  Orders = '/orders',
  OrderItems= '/orders/view/:orderId',
  OrderEditOrganization = '/orders/edit_organization/:id',
  Deliveries = '/deliveries',
  DeliveryDetails = '/delivery/:id',
  DeliveryReschedule = '/delivery/:id/reschedule',
  DeliveryMarkDelivered = '/delivery/mark-delivered/:id',
  DeliveryMarkFaulty = '/delivery/mark-faulty/:id',
  DeliveryReassign = '/delivery/reassign/:id',
  DeliveryNewMobileNumber = '/delivery/new_mobile_number/:id',
  // admin portal
  Stocks = '/admin/stocks',
  Users = '/admin/users',
  UserCreate = '/admin/users/create',
  UserEdit = '/admin/users/edit/:id',
  Products = '/admin/products',
  Mappings = '/admin/mappings',
  MappingCreate = '/admin/mappings/create',
  MappingEdit = '/admin/mappings/edit/:mappingId',
  ProductEdit = '/admin/products/edit/:id',
  ProductCreate = '/admin/products/create',
  Vouchers = '/admin/stocks/lists/:stockId',
  Organizations = '/admin/organizations',
  OrganizationCreate = '/admin/organizations/create',
  OrganizationEdit = '/admin/organizations/edit/:id',
  AdminHome = '/admin/home',
  AdminStock = '/admin/stock',
  StockReports = '/admin/stock_reports',
  Billing = '/admin/billing'
}

export enum MainRoutes {
  Root = '/',
  Login = '/login',
  Dashboard = '/dashboard'
}

export const getFullDashboardRoute = (path:DashboardRoutes) => `/dashboard${path}`
