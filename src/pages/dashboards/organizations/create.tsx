import { useDispatch } from 'react-redux'
import { OrganizationForm, OrganizationFormData } from './elements/organization-form'
import { AppDispatch } from '../../../redux/store'
import { createOrganizationAsync } from '../../../redux/organizations-management/thunks'

export const CreateOrganization = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (formData: OrganizationFormData, reset:()=>void) => {
    try {
      await dispatch(createOrganizationAsync(formData))
      reset()
    } catch (error) {}
  }
  return (
    <OrganizationForm formTitle="Add organization information" onSubmit={handleSubmit} />
  )
}
