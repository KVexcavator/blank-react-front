import { styled } from '@mui/material'
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import { FC } from 'react'

const StyledDataGrid = styled(DataGrid)`
  &.MuiDataGrid-root .MuiDataGrid-columnHeader:focus,
  &.MuiDataGrid-root .MuiDataGrid-cell:focus {
    outline: none!important;
  }
  &.MuiDataGrid-root .MuiDataGrid-cell:focus-within  {
    outline: none!important;
  }
  &.MuiDataGrid-root .MuiDataGrid-cell:hover {
    cursor: pointer;
  }
`;

const Table: FC<DataGridProps> = ({...rest }) => {
  return <StyledDataGrid {...rest}/>
}

export { Table }
