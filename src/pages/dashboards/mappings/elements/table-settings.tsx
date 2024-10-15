import { GridColDef } from '@mui/x-data-grid'
import { ProductMappingKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { MappingListMenuItem } from './mapping-list-menu'

export const ProductMappingTableHeader = {
  [ProductMappingKeys.CarrierProduct]: 'Carrier Product',
  [ProductMappingKeys.CustomerProduct]: 'Customer Product',
  [ProductMappingKeys.Quantity]: 'Quantity',
}

export const productMappingColumns:GridColDef[] = [
  {
    field: ProductMappingKeys.CarrierProduct,
    headerName: ProductMappingTableHeader[ProductMappingKeys.CarrierProduct],
    align: 'center',
    headerAlign: 'center',
    flex: 2,
  },
  {
    field: ProductMappingKeys.CustomerProduct,
    headerName: ProductMappingTableHeader[ProductMappingKeys.CustomerProduct],
    align: 'center',
    headerAlign: 'center',
    flex: 2,
  },
  {
    field: ProductMappingKeys.Quantity,
    headerName: ProductMappingTableHeader[ProductMappingKeys.Quantity],
    align: 'center',
    headerAlign: 'center',
    flex: 2,
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
          <MappingListMenuItem mapping={params.row}/>
        </Tooltip>
      )
    },
  },
]