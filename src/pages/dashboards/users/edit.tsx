import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { updateUserAsync } from '../../../redux/users-management/thunks'
import { useParams } from 'react-router-dom'
import { selectAllUsers } from '../../../redux/users-management/selector'
import { UserForm, UserFormData } from './elements/user-form'

export const EditUser = () => {
  const dispatch = useDispatch<AppDispatch>()
  const users = useSelector(selectAllUsers)
  const { id } = useParams()
  const currentUser = users.find((u) => `${u.id}` === id)

  const handleSubmit = async (formData: UserFormData) => {
    try {
      await dispatch(updateUserAsync({ ...formData, id: Number(id) }))
    } catch (error) {
      // do nothing
    }
  }
  return (
    <UserForm
      formTitle="Edit user information"
      onSubmit={handleSubmit}
      {...currentUser}
    />
  )
}
