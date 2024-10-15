/** Organization types **/

export enum OrganizationKeys {
  Id = 'id',
  Title = 'title'
}

export interface Organization {
  [OrganizationKeys.Id]: number
  [OrganizationKeys.Title]: string
}

/** User types */

export enum UserKeys {
  Id = 'id',
  FirstName = 'first_name',
  LastName = 'last_name',
  Email = 'email',
  Organizations = 'organizations',
  PasswordSet = 'password_set',
  Disabled = 'disabled',
  Role = 'role',
  Authentication_token = 'authentication_token'
}

export interface CurrentUserRole {
  role: string
}

export interface User {
  [UserKeys.Id]: number
  [UserKeys.FirstName]: string
  [UserKeys.LastName]: string
  [UserKeys.Email]: string
  [UserKeys.Organizations]: Array<string>
  [UserKeys.PasswordSet]: string
  [UserKeys.Disabled]: string
  [UserKeys.Role]: string
  [UserKeys.Authentication_token]: string
}

export interface UserCredential {
  email: string | undefined
  password: string | undefined
}

/** Product Types */
export enum ProductKeys {
  Id = 'id',
  ProductName = 'product_name',
  ProductPrice = 'product_price',
  Validity = 'validity',
}

export interface Product {
  [ProductKeys.Id]: number
  [ProductKeys.ProductName]: string
  [ProductKeys.ProductPrice]: number
  [ProductKeys.Validity]: number
}

/** Product Mapping Types */

export enum ProductMappingKeys {
  Id = 'id',
  CustomerProduct = 'customer_product',
  CarrierProduct = 'carrier_product',
  Quantity = 'quantity',
}

export interface ProductMapping {
  [ProductMappingKeys.CarrierProduct]: string
  [ProductMappingKeys.CustomerProduct]: string
  [ProductMappingKeys.Quantity]: string
  [ProductMappingKeys.Id]: string
}

/** Stock management Types */

export enum StocksKeys {}

/** Order Management Types */

export enum OrderStatus {
  Pending = 'pending',
  Authorized = 'authorized',
  Cancelled = 'cancelled',
  NoSet = 'No Set',
}

export enum OrdersKeys {
  Id = 'id',
  OrderFile = 'order_file',
  FileName = 'file_name',
  FilePath = 'file_path',
  Uploader = 'uploader',
  Authorizer = 'authorizer',
  RecordCount = 'record_count',
  AmountTotal = 'amount_total',
  Status = 'status',
  OrganizationTitle = 'organization_title',
  OrganizationId = 'organizations_id'
}

export interface Order {
  [OrdersKeys.Id]: number
  [OrdersKeys.OrderFile]: { url: string }
  [OrdersKeys.FileName]: string
  [OrdersKeys.FilePath]: string | null
  [OrdersKeys.Uploader]: number | null
  [OrdersKeys.Authorizer]: number | null
  [OrdersKeys.RecordCount]: string | null
  [OrdersKeys.AmountTotal]: string | null
  [OrdersKeys.OrganizationTitle]: string | null
  [OrdersKeys.OrganizationId]: number | null
  [OrdersKeys.Status]: OrderStatus
}

export enum OrderItemsKeys {
  Id = 'id',
  MobileNumber = 'mobile_number',
  CustomerProductName = 'customer_product_name',
  Quantity = 'quantity',
  IdNumber = 'id_number',
  ContractNumber = 'contract_number',
  Surname = 'surname',
  Initials = 'initials',
  Amount = 'amount',
  OrderId = 'order_id',
  EntityName = 'entity_name',
  DeliveryProgress = 'delivery_progress'
}

export interface OrderItems {
  [OrderItemsKeys.Id] :number
  [OrderItemsKeys.MobileNumber] :string
  [OrderItemsKeys.CustomerProductName] :string
  [OrderItemsKeys.Quantity] :string
  [OrderItemsKeys.IdNumber] :string
  [OrderItemsKeys.ContractNumber] :string
  [OrderItemsKeys.Surname] :string
  [OrderItemsKeys.Initials] :string
  [OrderItemsKeys.Amount] :string
  [OrderItemsKeys.OrderId] :string
  [OrderItemsKeys.EntityName] :string
  [OrderItemsKeys.DeliveryProgress] :string
}

/** Stock Managements */
export enum StockKeys {
  Id = 'id',
  VirtualFile = 'virtual_file',
  FileName = 'filename',
  Activated = 'activated',
  ProductId = 'product_id',
  ProductName = 'product_name',
  URL = 'url',
}

export interface Stock {
  [StockKeys.Id]: string
  [StockKeys.VirtualFile]: { [StockKeys.URL]: string }
  [StockKeys.FileName]: string
  [StockKeys.Activated]: boolean
  [StockKeys.ProductId]: string
  [StockKeys.ProductName]: string
}

export enum StockStatus {
  Active = 'true',
  Disabled = 'false',
}

/** AdminStock Managements */
export enum AdminStockKeys {
  Id = 'id',
  ProductName = 'product_name',
  Available = 'available',
  Assigned = 'assigned',
  Inactive = 'inactive',
  Faulty = 'faulty',
  Delivered = 'delivered',
  Total = 'total',
}

export interface AdminStock {
  [AdminStockKeys.Id]: number
  [AdminStockKeys.ProductName]: string
  [AdminStockKeys.Available]: number
  [AdminStockKeys.Assigned]: number
  [AdminStockKeys.Inactive]: number
  [AdminStockKeys.Faulty]: number
  [AdminStockKeys.Delivered]: number
  [AdminStockKeys.Total]: number
}



/** Voucher Managements */
export enum VoucherKeys {
  ID = 'id',
  VoucherPin = 'voucher_pin',
  SerialNumber = 'serial_number',
  Denomination = 'denomination',
  VoucherGroupId = 'voucher_group_id',
  VoucherExpiryDate = 'voucher_expiry_date',
  VoucherExpiryTime = 'voucher_expiry_time',
  DelearsName = 'delears_name',
  Description = 'description',
  VirtualId = 'virtual_id',
  Active = 'active',
  Status = 'status',
  ProductId = 'product_id',
  DeliveryId = 'delivery_id',
}

export interface Voucher {
  [VoucherKeys.ID]: string
  [VoucherKeys.VoucherPin]: string
  [VoucherKeys.SerialNumber]: string
  [VoucherKeys.Denomination]: string
  [VoucherKeys.VoucherGroupId]: string
  [VoucherKeys.VoucherExpiryDate]: string
  [VoucherKeys.VoucherExpiryTime]: string
  [VoucherKeys.DelearsName]: string
  [VoucherKeys.Description]: string
  [VoucherKeys.VirtualId]: string
  [VoucherKeys.Active]: boolean
  [VoucherKeys.Status]: string
  [VoucherKeys.ProductId]: string
  [VoucherKeys.DeliveryId]: string
}

/** Delivery Management Types */

export enum DeliveryStatus {
  Pending = 'pending',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
  Failed = 'failed',
  OutOfStock = 'out of stock',
  Processing = 'processing'
}

export enum DeliveriesKeys {
  Id = 'id',
  CellNumber = 'cell_number',
  ContractNumber = 'contract_number',
  VoucherType = 'voucher_type',
  Date = 'delivery_date',
  Status = 'delivery_status',
  OrderItemId = 'order_item_id',
  Amount = 'amount',
  Retries = 'delivery_retries',
  Results = 'results',
  UserId = 'user_id',
  UserName = 'user_name',
  VoucherPin = 'voucher_pin',
  VoucherSerialNumber = 'voucher_serial_number',
  OrderId = 'order_id',
  IdNumber = 'id_number'
}

export interface Delivery {
  [DeliveriesKeys.Id]: string
  [DeliveriesKeys.CellNumber]: string
  [DeliveriesKeys.ContractNumber]: string
  [DeliveriesKeys.VoucherType]: string
  [DeliveriesKeys.Date]: string
  [DeliveriesKeys.Status]: DeliveryStatus
  [DeliveriesKeys.OrderItemId]: number
  [DeliveriesKeys.Amount]: string
  [DeliveriesKeys.Retries]: number
  [DeliveriesKeys.Results]: string[] | []
  [DeliveriesKeys.UserId]: number
  [DeliveriesKeys.UserName]: string
  [DeliveriesKeys.VoucherPin]: string
  [DeliveriesKeys.VoucherSerialNumber]: string
  [DeliveriesKeys.OrderId]: number
  [DeliveriesKeys.IdNumber]: string
}

export enum BillingKeys {
  Id = 'id',
  MobileNumber = 'mobile_number',
  IdNumber = 'id_number',
  ContractNumber = 'contract_number',
  Surname = 'surname',
  Initials = 'initials',
  ProductName = 'product_name',
  Amount = 'amount',
  Date = 'date',
  Entity = 'entity'
}

export interface Billing {
  [BillingKeys.Id]: string
  [BillingKeys.MobileNumber]: string
  [BillingKeys.IdNumber]: string
  [BillingKeys.ContractNumber]: string
  [BillingKeys.Surname]: string
  [BillingKeys.Initials]: string
  [BillingKeys.ProductName]: string
  [BillingKeys.Amount]: string
  [BillingKeys.Date]: string
  [BillingKeys.Entity]: string
}

// Stock Reports

export enum StockReportsKeys {
  Id = 'id',
  FileName = 'name',
  FilePath = 'path'
}

export interface StockReports {
  [StockReportsKeys.Id]: number
  [StockReportsKeys.FileName]: string
  [StockReportsKeys.FilePath]: string | null
}
