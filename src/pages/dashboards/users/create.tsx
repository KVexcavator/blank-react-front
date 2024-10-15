import { useDispatch } from 'react-redux'
import { UserForm, UserFormData } from './elements/user-form'
import { AppDispatch } from '../../../redux/store'
import { createUserAsync } from '../../../redux/users-management/thunks'

export const CreateUser = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (formData: UserFormData, reset:()=>void) => {
    try {
      await dispatch(createUserAsync(formData))
      reset()
    } catch (error) {}
  }

  return (
    <UserForm formTitle="Add user information" onSubmit={handleSubmit} />
  )
}
