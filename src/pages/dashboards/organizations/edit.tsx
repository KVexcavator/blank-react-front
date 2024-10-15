import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { updateOrganizationAsync } from '../../../redux/organizations-management/thunks'
import { useParams } from 'react-router-dom'
import { selectAllOrganizations } from '../../../redux/organizations-management/selector'
import { OrganizationForm, OrganizationFormData } from './elements/organization-form'

export const EditOrganization = () => {
  const dispatch = useDispatch<AppDispatch>()
  const organizations = useSelector(selectAllOrganizations)
  const { id } = useParams()
  const currentOrganization = organizations.find((org) => `${org.id}` === id)

  const handleSubmit = async (formData: OrganizationFormData) => {
    try {
      await dispatch(updateOrganizationAsync({ ...formData, id: Number(id) }))
    } catch (error) {
      // do nothing
    }
  }

  return (
    <OrganizationForm
      formTitle="Edit organization information"
      onSubmit={handleSubmit}
      {...currentOrganization}
    />
  )
}
