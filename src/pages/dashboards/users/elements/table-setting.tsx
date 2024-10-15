import { GridColDef } from '@mui/x-data-grid'
import { UserKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { UserListMenuItem } from './user-list-menu'

export const UsersColumns: GridColDef[] = [

  {
    field: UserKeys.FirstName,
    headerName: 'First Name',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[UserKeys.FirstName]}</span>
        </Tooltip>
      )
    },
  },
  {
    field: UserKeys.LastName,
    headerName: 'Last Name',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[UserKeys.LastName]}</span>
        </Tooltip>
      )
    },
  },
  {
    field: UserKeys.Email,
    headerName: 'Email',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[UserKeys.Email]}</span>
        </Tooltip>
      )
    },
  },
  {
    field: UserKeys.Role,
    headerName: 'Role',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Tooltip title="Click to edit">
          <span>{params.row[UserKeys.Role]}</span>
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
          <UserListMenuItem user={params.row}/>
        </Tooltip>
      )
    },
  },
]
