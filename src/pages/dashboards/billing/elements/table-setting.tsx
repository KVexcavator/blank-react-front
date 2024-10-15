import { GridColDef } from '@mui/x-data-grid'
import { BillingKeys } from '../../../../api/types'

export enum BillingTableColumn {
  Id = 'ID',
  MobileNumber = 'Mobile Number',
  IdNumber = 'ID Number',
  ContractNumber = 'Contract Number',
  Surname = 'Surname',
  Initials = 'Initials',
  ProductName = 'Product Name',
  Amount = 'Amount',
  Date = 'Date',
  Entity = 'Entity'
}

export const BillingColumns = (): GridColDef[] => [
  {
    field: BillingKeys.Id,
    headerName: BillingTableColumn.Id,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.MobileNumber,
    headerName: BillingTableColumn.MobileNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.IdNumber,
    headerName: BillingTableColumn.IdNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.ContractNumber,
    headerName: BillingTableColumn.ContractNumber,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.Surname,
    headerName: BillingTableColumn.Surname,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.Initials,
    headerName: BillingTableColumn.Initials,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.ProductName,
    headerName: BillingTableColumn.ProductName,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.Amount,
    headerName: BillingTableColumn.Amount,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.Date,
    headerName: BillingTableColumn.Date,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: BillingKeys.Entity,
    headerName: BillingTableColumn.Entity,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
]
