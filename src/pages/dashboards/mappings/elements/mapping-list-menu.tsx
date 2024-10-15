import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { ProductMapping } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'

type MappingListMenuItemProps = {
  mapping: ProductMapping
}

export const MappingListMenuItem = (props: MappingListMenuItemProps) => {
  const navigate = useNavigate()

  const handleMappingEdit = (mapping: any) => {
    const {id} = mapping as ProductMapping
    navigate(`/dashboard/admin/mappings/edit/${id}`)
  }
  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Edit',
          menuRightText: '',
          MenuIcon: ModeEditIcon,
          handleClick: handleMappingEdit,
          meta: props.mapping
        },
        {
          menuText: 'Delete',
          menuRightText: '',
          MenuIcon: DeleteForeverIcon,
          handleClick: () => console.log('click deleted'),
          disabled: true,
          meta: props.mapping
        },
      ]}
    />
  )
}
