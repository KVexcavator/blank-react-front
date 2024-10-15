import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { Product } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'

type ProductListMenuItemProps = {
  product: Product
}

export const ProductListMenuItem = (props: ProductListMenuItemProps) => {
  const navigate = useNavigate()

  const handleProductEdit = (product: any) => {
    const {id} = product as Product
    navigate(`/dashboard/admin/products/edit/${id}`)
  }
  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Edit',
          menuRightText: '',
          MenuIcon: ModeEditIcon,
          handleClick: handleProductEdit,
          meta: props.product
        },
        {
          menuText: 'Delete',
          menuRightText: '',
          MenuIcon: DeleteForeverIcon,
          handleClick: () => console.log('click edit'),
          disabled: true,
          meta: props.product
        },
      ]}
    />
  )
}
