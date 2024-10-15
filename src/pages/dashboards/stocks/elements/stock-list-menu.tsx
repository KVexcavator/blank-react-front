import FileOpenIcon from '@mui/icons-material/FileOpen';
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import BlockIcon from '@mui/icons-material/Block';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { Stock, StockKeys, StockStatus } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import { changeStockStatusAsync } from '../../../../redux/stock-management/thunks'

type StockListMenuProps = {
  stock: Stock
}

export const StockListMenu = (props: StockListMenuProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleStockOpen = (stock: any) => {
    const {id} = stock as Stock
    navigate(`/dashboard/admin/stocks/lists/${id}`)
  }

  const handleActivateStock = (stock: any) => {
    const {id: stockId} = stock as Stock
    dispatch(changeStockStatusAsync({ stockId, stockStatus:StockStatus.Active }))
  }

  const handleDeactivateStock = (stock: any) => {
    const {id: stockId} = stock as Stock
    dispatch(changeStockStatusAsync({ stockId, stockStatus:StockStatus.Disabled }))
  }
  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Open',
          menuRightText: '',
          MenuIcon: FileOpenIcon,
          handleClick: handleStockOpen,
          meta: props.stock
        },
        {
          menuText: 'Activate',
          menuRightText: '',
          MenuIcon: TaskAltIcon,
          handleClick: handleActivateStock,
          meta: props.stock,
          disabled:props.stock[StockKeys.Activated]
        },
          {
            menuText: 'Deactivate',
            menuRightText: '',
            MenuIcon: BlockIcon,
            handleClick: handleDeactivateStock,
            disabled: !props.stock[StockKeys.Activated],
            meta: props.stock
          },
        {
          menuText: 'Delete',
          menuRightText: '',
          MenuIcon: DeleteForeverIcon,
          handleClick: () => console.log('click edit'),
          disabled: true,
          meta: props.stock
        },
      ]}
    />
  )
}
