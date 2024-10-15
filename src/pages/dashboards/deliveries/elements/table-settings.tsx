import { GridColDef } from '@mui/x-data-grid'
import { DeliveriesKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { DeliveryStatusChips } from './status-chip'
import { DeliveryListMenuItem } from './list-menu'

export enum DeliveriesTableColumn {
  Id = 'Delivery ID',
  CellNumber = 'Mobile Number',
  ContractNumber = 'Contract Number',
  VoucherType = 'Voucher Type',
  Date = 'Delivery Date',
  Status = 'Status',
  OrderItemId = 'Order Item Id',
  Amount = 'Amount',
  Retries = 'Retries',
  Results = 'Results',
  UserId = 'User ID',
  UserName = 'User Name',
  VoucherPin = 'Voucher Pin',
  VoucherSerialNumber = 'Voucher Serial Number',
  OrderId = 'Order ID',
  IdNumber = 'ID Number'
}

export const DeliveryColumns = (): GridColDef[] => [
  {
    field: DeliveriesKeys.Id,
    headerName: DeliveriesTableColumn.Id,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.IdNumber,
    headerName: DeliveriesTableColumn.IdNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.CellNumber,
    headerName: DeliveriesTableColumn.CellNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.ContractNumber,
    headerName: DeliveriesTableColumn.ContractNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.VoucherType,
    headerName: DeliveriesTableColumn.VoucherType,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.Date,
    headerName: DeliveriesTableColumn.Date,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: DeliveriesKeys.Status,
    headerName: DeliveriesTableColumn.Status,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params) => (
      <DeliveryStatusChips deliveryStatus={params.row[DeliveriesKeys.Status]} />
    ),
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
          <DeliveryListMenuItem delivery={params.row} />
        </Tooltip>
      )
    },
  },
]
