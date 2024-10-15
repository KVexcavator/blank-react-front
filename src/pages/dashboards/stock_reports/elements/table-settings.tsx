import { GridColDef } from '@mui/x-data-grid'
import DescriptionIcon from '@mui/icons-material/Description'
import { StockReports, StockReportsKeys } from '../../../../api/types'
import { Tooltip } from '@mui/material'
import { StockReportsMenuItem } from './stock-reports-menu'
import { TextWithIcon } from '../../../../components/form-elements/text-with-icon'

export enum StockReportsTableColumn {
  FileName = 'File Name'
}

export const StockReportsColumns = (): GridColDef[] => [
  {
    field: StockReportsKeys.FileName,
    headerName: StockReportsTableColumn.FileName,
    align: 'left',
    headerAlign: 'left',
    flex: 2,
    renderCell: (params: any) => {
      const stockReport = params.row as StockReports
      return (
        <TextWithIcon
          textVariant="body1"
          textColor="default"
          Icon={DescriptionIcon}
          text={stockReport.name}
          tooltips={stockReport.path}
        />
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
          <StockReportsMenuItem stockReports={params.row} />
        </Tooltip>
      )
    },
  },
]
