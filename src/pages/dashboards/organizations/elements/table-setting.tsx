import { GridColDef } from '@mui/x-data-grid'
import { OrganizationKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { OrganizationListMenuItem } from './organization-list-menu'

export const OrganizationsColumns: GridColDef[] = [
  {
    field: OrganizationKeys.Title,
    headerName: 'Title',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[OrganizationKeys.Title]}</span>
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
          <OrganizationListMenuItem organization={params.row}/>
        </Tooltip>
      )
    },
  },
]
