import { GridColDef } from '@mui/x-data-grid'
import DescriptionIcon from '@mui/icons-material/Description'
import { Order, OrderItemsKeys, OrdersKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { OrderListMenuItem } from './order-list-menu'
import { OrderStatusChips } from './order-status-chip'
import { TextWithIcon } from '../../../../components/form-elements/text-with-icon'
import { UserDetailsModal } from './user-details-modal'

export enum OrdersDialogsTexts {
  AuthorizationConfirmationTitle = 'Confirm Order',
  AuthorizationConfirmationBody = 'Once you confirm this order, it will be processed immediately. Please review the order details carefully as this action cannot be undone. Are you sure you want to proceed?',
}

export enum OrdersTableColumn {
  FileName = 'File Name',
  FilePath = 'File Path',
  Uploader = 'Uploader',
  Authorizer = 'Authorizer',
  RecordCount = 'Record Count',
  AmountTotal = 'Amount Total',
  Status = 'Status',
  Actions = 'Actions',
  OrganizationTitle = 'Organization'
}

export const OrderColumns = (): GridColDef[] => [
  {
    field: OrdersKeys.FileName,
    headerName: OrdersTableColumn.FileName,
    align: 'left',
    headerAlign: 'left',
    flex: 2,
    renderCell: (params: any) => {
      const order = params.row as Order
      return (
        <TextWithIcon
          textVariant="body1"
          textColor="default"
          Icon={DescriptionIcon}
          text={order.file_name}
          tooltips={order.file_path}
        />
      )
    },
  },
  {
    field: OrdersKeys.Uploader,
    headerName: OrdersTableColumn.Uploader,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params) => (
      <UserDetailsModal userId = {params.row[OrdersKeys.Uploader]} />
    ),
  },
  {
    field: OrdersKeys.Authorizer,
    headerName: OrdersTableColumn.Authorizer,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params) => (
      <UserDetailsModal userId = {params.row[OrdersKeys.Authorizer]} />
    ),
  },
  {
    field: OrdersKeys.RecordCount,
    headerName: OrdersTableColumn.RecordCount,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrdersKeys.AmountTotal,
    headerName: OrdersTableColumn.AmountTotal,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrdersKeys.Status,
    headerName: OrdersTableColumn.Status,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params) => (
      <OrderStatusChips orderStatus={params.row[OrdersKeys.Status]} />
    ),
  },
  {
    field: OrdersKeys.OrganizationTitle,
    headerName: OrdersTableColumn.OrganizationTitle,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    disableColumnMenu: true,
    sortable: false,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Menu">
          <OrderListMenuItem order={params.row} />
        </Tooltip>
      )
    },
  },
]

/** Order List table */

const OrderItemTableHeaders = {
  [OrderItemsKeys.Id]: 'Id',
  [OrderItemsKeys.MobileNumber]: 'Mobile Number',
  [OrderItemsKeys.CustomerProductName]: 'Customer Product',
  [OrderItemsKeys.Quantity]: 'Customer Quantity',
  [OrderItemsKeys.IdNumber]: 'Id Number',
  [OrderItemsKeys.ContractNumber]: 'Contact Number',
  [OrderItemsKeys.Surname]: 'Name',
  [OrderItemsKeys.Initials]: 'Initials',
  [OrderItemsKeys.Amount]: 'Amount',
  [OrderItemsKeys.OrderId]: 'Order Id',
  [OrderItemsKeys.EntityName]: 'Entity Name',
  [OrderItemsKeys.DeliveryProgress]: 'Delivery Progress %'
}

export const OrderItemsColumns = (): GridColDef[] => [
  {
    field: OrderItemsKeys.MobileNumber,
    headerName: OrderItemTableHeaders[OrderItemsKeys.MobileNumber],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.CustomerProductName,
    headerName: OrderItemTableHeaders[OrderItemsKeys.CustomerProductName],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.EntityName,
    headerName: OrderItemTableHeaders[OrderItemsKeys.EntityName],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.Quantity,
    headerName: OrderItemTableHeaders[OrderItemsKeys.Quantity],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.ContractNumber,
    headerName: OrderItemTableHeaders[OrderItemsKeys.ContractNumber],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.Amount,
    headerName: OrderItemTableHeaders[OrderItemsKeys.Amount],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.OrderId,
    headerName: OrderItemTableHeaders[OrderItemsKeys.OrderId],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: OrderItemsKeys.DeliveryProgress,
    headerName: OrderItemTableHeaders[OrderItemsKeys.DeliveryProgress],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
]
