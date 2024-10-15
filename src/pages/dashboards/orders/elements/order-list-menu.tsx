import FileOpenIcon from '@mui/icons-material/FileOpen'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import BlockIcon from '@mui/icons-material/Block'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { Order, OrderStatus, OrdersKeys } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'
import {
  authorizeOrderAsync,
  cancelOrderAsync,
  downloadOrderFileAsync,
  downloadOrderReportPdfFileAsync,
  downloadOrderReportXlsFileAsync
} from '../../../../redux/order-management/thunks'
import { AppDispatch } from '../../../../redux/store'
import { useDispatch } from 'react-redux'

type OrderListMenuItemProps = {
  order: Order
}

export const OrderListMenuItem = (props: OrderListMenuItemProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()



  const handleOrderView = (order: any) => {
    const { id } = order as Order
    navigate(`/dashboard/orders/view/${id}`)
  }

  const handleOrderApproval = (order: any) => {
    const { id: orderId } = order as Order
    dispatch(
      authorizeOrderAsync({
        orderId: orderId as unknown as string,
        orderStatus: OrderStatus.Authorized,
      })
    )
  }

  const handleOrderCancel = (order: any) => {
    const { id: orderId } = order as Order
    dispatch(
      cancelOrderAsync({
        orderId: orderId as unknown as string,
        orderStatus: OrderStatus.Cancelled,
      })
    )
  }

  const handleOrderFileDownload = (order: any) => {
    const { file_name } = order as Order
    dispatch(downloadOrderFileAsync(file_name))
  }

  const handleOrderReportPdfFileDownload = (order: any) => {
    const { file_name } = order as Order
    dispatch(downloadOrderReportPdfFileAsync(file_name))
  }

  const handleOrderReportXlsFileDownload = (order: any) => {
    const { file_name } = order as Order
    dispatch(downloadOrderReportXlsFileAsync(file_name))
  }

  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Open',
          menuRightText: '',
          MenuIcon: FileOpenIcon,
          handleClick: handleOrderView,
          disabled: [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
        {
          menuText: 'Approve',
          menuRightText: '',
          MenuIcon: TaskAltIcon,
          handleClick: handleOrderApproval,
          disabled: props.order[OrdersKeys.Status] !== OrderStatus.Pending || [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
        {
          menuText: 'Cancel',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleOrderCancel,
          disabled: props.order[OrdersKeys.Status] !== OrderStatus.Pending || [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
        {
          menuText: 'Download File',
          menuRightText: '',
          MenuIcon: DownloadForOfflineIcon,
          handleClick: handleOrderFileDownload,
          disabled: [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
        {
          menuText: 'Report PDF',
          menuRightText: '',
          MenuIcon: DownloadForOfflineIcon,
          handleClick: handleOrderReportPdfFileDownload,
          disabled: [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
        {
          menuText: 'Report XLS',
          menuRightText: '',
          MenuIcon: DownloadForOfflineIcon,
          handleClick: handleOrderReportXlsFileDownload,
          disabled: [OrderStatus.Cancelled].includes(props.order[OrdersKeys.Status]),
          meta: props.order,
        },
      ]}
    />
  )
}
