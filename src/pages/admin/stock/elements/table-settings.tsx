import { GridColDef } from '@mui/x-data-grid'
import { AdminStock, AdminStockKeys } from '../../../../api/types'

export enum AdminStockTableColumn {
  ProductName = 'Product Name',
  Available = 'Available',
  Assigned = 'Assigned',
  Inactive = 'Inactive',
  Faulty = 'Faulty',
  Delivered = 'Delivered',
  Total = 'Total',
}

export const AdminStockColumns = (): GridColDef[] => [
  {
    field: AdminStockKeys.ProductName,
    headerName: AdminStockTableColumn.ProductName,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Available,
    headerName: AdminStockTableColumn.Available,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Assigned,
    headerName: AdminStockTableColumn.Assigned,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Inactive,
    headerName: AdminStockTableColumn.Inactive,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Faulty,
    headerName: AdminStockTableColumn.Faulty,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Delivered,
    headerName: AdminStockTableColumn.Delivered,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: AdminStockKeys.Total,
    headerName: AdminStockTableColumn.Total,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
]
