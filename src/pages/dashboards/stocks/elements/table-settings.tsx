import { GridColDef } from '@mui/x-data-grid'
import { Stock, StockKeys, VoucherKeys } from '../../../../api/types'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence'
import { Chip, Tooltip } from '@mui/material'
import { StockListMenu } from './stock-list-menu'
import { TextWithIcon } from '../../../../components/form-elements/text-with-icon'
import DescriptionIcon from '@mui/icons-material/Description'

export enum StocksTableHeaders {
  FileName = 'File Name',
  Activated = 'Status',
  ProductName = 'Product Name'
}

export const VoucherTableHeaders = {
  [VoucherKeys.SerialNumber]: 'Serial Number',
  [VoucherKeys.VirtualId]: 'Virtual Id',
  [VoucherKeys.Description]: 'Description',
  [VoucherKeys.Active]: 'Active',
  [VoucherKeys.VoucherPin]: 'Voucher PIN',
  [VoucherKeys.ProductId]: 'Product Id',
  [VoucherKeys.Status]: 'Status',
  [VoucherKeys.VoucherExpiryDate]: 'Expiry Date',
  [VoucherKeys.VoucherExpiryTime]: 'Expiry Time',
  [VoucherKeys.VoucherGroupId]: 'Voucher Group Id',
}

const getStockStatus = (row: Stock) => row[StockKeys.Activated]
const calculateColor = (row: Stock) =>
  getStockStatus(row) ? 'primary' : 'error'

export const StockColumns = (): GridColDef[] => [
  {
    field: StockKeys.FileName,
    headerName: StocksTableHeaders.FileName,
    align: 'left',
    headerAlign: 'left',
    flex: 2.5,
    renderCell: (params: any) => {
      const stock = params.row as Stock
      return (
        <TextWithIcon
          textVariant="body1"
          textColor="default"
          Icon={DescriptionIcon}
          text={stock.filename}
          tooltips={stock.filename}
        />
      )
    },
  },
  {
    field: StockKeys.Activated,
    headerName: StocksTableHeaders.Activated,
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: (params: any) => {
      if (params.row[StockKeys.Activated]) {
        return (
          <Chip
            label="Activated"
            size="small"
            color={calculateColor(params.row)}
            icon={
              <TaskAltIcon
                color={calculateColor(params.row)}
                style={{ cursor: 'pointer' }}
              />
            }
          />
        )
      } else {
        return (
          <Chip
            label="Deactivated"
            size="small"
            color={calculateColor(params.row)}
            icon={
              <DoNotDisturbOnTotalSilenceIcon
                color={calculateColor(params.row)}
                style={{ cursor: 'pointer' }}
              />
            }
          />
        )
      }
    },
  },
  {
    field: StockKeys.ProductName,
    headerName: StocksTableHeaders.ProductName,
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
          <StockListMenu stock={params.row} />
        </Tooltip>
      )
    },
  },
]

export const VoucherColumns: GridColDef[] = [
  {
    field: VoucherKeys.SerialNumber,
    headerName: VoucherTableHeaders[VoucherKeys.SerialNumber],
    align: 'center',
    headerAlign: 'center',
    flex: 2,
  },
  {
    field: VoucherKeys.VoucherPin,
    headerName: VoucherTableHeaders[VoucherKeys.VoucherPin],
    align: 'center',
    headerAlign: 'center',
    flex: 2,
  },
  {
    field: VoucherKeys.Description,
    headerName: VoucherTableHeaders[VoucherKeys.Description],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: VoucherKeys.Status,
    headerName: VoucherTableHeaders[VoucherKeys.Status],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: VoucherKeys.Active,
    headerName: VoucherTableHeaders[VoucherKeys.Active],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: VoucherKeys.VoucherExpiryDate,
    headerName: VoucherTableHeaders[VoucherKeys.VoucherExpiryDate],
    align: 'center',
    headerAlign: 'center',
    flex: 1,
  },
]
