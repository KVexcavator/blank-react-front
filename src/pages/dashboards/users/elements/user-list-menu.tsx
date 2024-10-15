import ModeEditIcon from '@mui/icons-material/ModeEdit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { User } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'

type UserListMenuItemProps = {
  user: User
}

export const UserListMenuItem = (props: UserListMenuItemProps) => {
  const navigate = useNavigate()

  const handleUserEdit = (user: any) => {
    const {id} = user as User
    navigate(`/dashboard/admin/users/edit/${id}`)
  }

  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Edit',
          menuRightText: '',
          MenuIcon: ModeEditIcon,
          handleClick: handleUserEdit,
          meta: props.user
        }
      ]}
    />
  )
}
