import { Chip } from '@mui/material'
import { DeliveryStatus } from '../../../../api/types'
import { purple } from '@mui/material/colors'

export const DeliveryStatusChips = ({ deliveryStatus }: { deliveryStatus: string }) => {
  if (deliveryStatus === DeliveryStatus.Pending) {
    return (
      <Chip
        color="warning"
        label="Pending"
        size="small"
      />
    )
  } else if (deliveryStatus === DeliveryStatus.Delivered) {
    return (
      <Chip
        color="success"
        label="Delivered"
        size="small"
      />
    )
  } else if (deliveryStatus === DeliveryStatus.Cancelled) {
    return (
      <Chip
        color="error"
        label="Cancelled"
        size="small"
      />
    )
  } else if (deliveryStatus === DeliveryStatus.Failed) {
    return (
      <Chip
        style={{backgroundColor: purple[500], color: "#ffffff"}}
        label="Failed"
        size="small"
      />
    )
  } else if (deliveryStatus === DeliveryStatus.OutOfStock) {
    return (
      <Chip
        color="info"
        label="Out of Stock"
        size="small"
      />
    )
  } else if (deliveryStatus === DeliveryStatus.Processing) {
    return (
      <Chip
        style={{color: 'black', background: 'orange'}}
        label="Processing"
        size="small"
      />
    )
  } else {
    return <Chip color="default" label="Unexpected" size="small" />
  }
}
