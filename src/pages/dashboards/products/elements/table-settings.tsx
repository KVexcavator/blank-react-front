import { GridColDef } from '@mui/x-data-grid'
import { ProductKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { ProductListMenuItem } from './product-list-menu'

export const ProductsColumns: GridColDef[] = [
  {
    field: ProductKeys.ProductName,
    headerName: 'Product Name',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[ProductKeys.ProductName]}</span>
        </Tooltip>
      )
    },
  },
  {
    field: ProductKeys.ProductPrice,
    headerName: 'Product Price',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[ProductKeys.ProductPrice]}</span>
        </Tooltip>
      )
    },
  },
  {
    field: ProductKeys.Validity,
    headerName: 'Product Validity',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[ProductKeys.Validity]}</span>
        </Tooltip>
      )
    },
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
          <ProductListMenuItem product={params.row}/>
        </Tooltip>
      )
    },
  },
]
