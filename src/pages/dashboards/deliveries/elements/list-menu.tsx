import FileOpenIcon from '@mui/icons-material/FileOpen'
import BlockIcon from '@mui/icons-material/Block'
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { DeliveriesKeys, Delivery, DeliveryStatus } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { cancelledDeliveryAsync } from '../../../../redux/deliveries-management/thunks'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../../context/auth_context'
import { AuthContextType } from '../../../../context/auth_type_context'

type DeliveryListMenuItemProps = {
  delivery: Delivery
}

export const DeliveryListMenuItem = (props: DeliveryListMenuItemProps) => {
  const { auth, changeAuth } = useContext(AuthContext) as AuthContextType
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const [cancelText, setCanсelText] = useState<string>("Cancel")

  const handleDeliveryView = (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/${id}`)
  }

  const handleDeliveryCancel = (delivery: any) => {
    const { id, delivery_date } = delivery as Delivery
    var startToday = new Date().setUTCHours(0,0,0,0)
    const tomorrowDate =new Date(startToday + (3600*1000*24))
    const arrDate = delivery_date.split("-")
    const deliveryDate = new Date(Number(arrDate[0]), Number(arrDate[1]) - 1, Number(arrDate[2]))
    if (deliveryDate > tomorrowDate){
      dispatch(
        cancelledDeliveryAsync({
          id: id as unknown as string
        })
      )
    } else {
      setCanсelText("Must reschedule!")
      setTimeout(() => { setCanсelText("Cancel") }, 10000)
    }
  }

  const handleDeliveryReschedule= (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/${id}/reschedule`)
  }

  const handleDeliveryMarkDelivered = (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/mark-delivered/${id}`)
  }

  const handleDeliveryMarkFaulty = (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/mark-faulty/${id}`)
  }

  const handleDeliveryReassign = (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/reassign/${id}`)
  }

  const handleDeliveryNewMobileNumber = (delivery: any) => {
    const { id } = delivery as Delivery
    navigate(`/dashboard/delivery/new_mobile_number/${id}`)
  }

  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Open',
          menuRightText: '',
          MenuIcon: FileOpenIcon,
          handleClick: handleDeliveryView,
          disabled: [DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
        {
          menuText: cancelText,
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryCancel,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
        {
          menuText: 'Reschedule',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryReschedule,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]),
          meta: props.delivery,
        },
        {
          menuText: 'New mobile number',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryNewMobileNumber,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
        {
          menuText: 'Mark as Delivered',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryMarkDelivered,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
        {
          menuText: 'Mark as Faulty',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryMarkFaulty,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
        {
          menuText: 'Reassign',
          menuRightText: '',
          MenuIcon: BlockIcon,
          handleClick: handleDeliveryReassign,
          disabled: [DeliveryStatus.Delivered, DeliveryStatus.Cancelled].includes(props.delivery[DeliveriesKeys.Status]) || ['user'].includes(auth.role),
          meta: props.delivery,
        },
      ]}
    />
  )
}
