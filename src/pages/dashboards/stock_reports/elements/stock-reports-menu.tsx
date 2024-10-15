import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { StockReports } from '../../../../api/types'
import { downloadStockReportFileAsync } from '../../../../redux/stock-reports-management/thunks'
import { AppDispatch } from '../../../../redux/store'
import { useDispatch } from 'react-redux'

type StockReportsMenuItemProps = {
  stockReports: StockReports
}

export const StockReportsMenuItem = (props: StockReportsMenuItemProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleStockReportFileDownload = (stockReport: any) => {
    const { name } = stockReport as StockReports
    dispatch(downloadStockReportFileAsync(name))
  }

  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Download File',
          menuRightText: '',
          MenuIcon: DownloadForOfflineIcon,
          handleClick: handleStockReportFileDownload,
          meta: props.stockReports,
        },
      ]}
    />
  )
}
