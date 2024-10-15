import { Chip } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel'
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { OrderStatus } from '../../../../api/types'

export const OrderStatusChips = ({ orderStatus }: { orderStatus: string }) => {
  if (orderStatus === OrderStatus.Authorized) {
    return (
      <Chip
        icon={<CheckCircleIcon />}
        color="success"
        label="Authorize"
        size="small"
      />
    )
  } else if (orderStatus === OrderStatus.Cancelled) {
    return (
      <Chip
        icon={<CancelIcon />}
        color="default"
        label="Cancelled"
        size="small"
      />
    )
  } else if (orderStatus === OrderStatus.Pending) {
    return (
      <Chip
        icon={<PauseCircleFilledIcon />}
        color="warning"
        label="Pending"
        size="small"
      />
    )
  } else {
    return <Chip color="default" label="Unexpected" size="small" />
  }
}
