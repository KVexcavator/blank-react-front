import ModeEditIcon from '@mui/icons-material/ModeEdit'
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TableMenu } from '../../../../components/wrapper/table-menu'
import { Organization } from '../../../../api/types'
import { useNavigate } from 'react-router-dom'

type OrganizationListMenuItemProps = {
  organization: Organization
}

export const OrganizationListMenuItem = (props: OrganizationListMenuItemProps) => {
  const navigate = useNavigate()

  const handleOrganizationEdit = (organization: any) => {
    const {id} = organization as Organization
    navigate(`/dashboard/admin/organizations/edit/${id}`)
  }

  return (
    <TableMenu
      menuItems={[
        {
          menuText: 'Edit',
          menuRightText: '',
          MenuIcon: ModeEditIcon,
          handleClick: handleOrganizationEdit,
          meta: props.organization
        }
      ]}
    />
  )
}
