import { HttpRequest } from './axios'
import { User } from './types'

export const UserManagementEndpoint = {
  ListUsers: '/users',
  UpdateUser: (id: string | number) => `/users/${id}`,
}

function createUserRequestBody(user: Partial<User>) {
  const data = new FormData()
  data.append('user[first_name]', `${user?.first_name}`)
  data.append('user[last_name]', `${user?.last_name}`)
  data.append('user[email]', `${user?.email}`)
  data.append('user[role]', `${user?.role}`)
  data.append('user[disabled]', `${user?.disabled}`)
  data.append('user[password_set]', `${user?.password_set}`)
  data.append('user[organizations]', `${user?.organizations}`)
  return data
}

export async function fetchAllUsers(): Promise<User[] | []> {
  try {
    const url = UserManagementEndpoint.ListUsers
    const result = await HttpRequest.get(url)
    return result.data as User[]
  } catch (error) {
    throw error
  }
}

export async function createUser(user: Partial<User>) {
  console.log(user)
  try {
    if (!user.first_name || !user.last_name || !user.email ) {
      throw new Error('User first name or last name or email is missing')
    }
    const url = UserManagementEndpoint.ListUsers
    const requestBody = createUserRequestBody(user)
    const result = await HttpRequest.post(url, requestBody)
    return result.data
  } catch (error) {
    throw error
  }
}

export async function updateUser(user: Partial<User>) {
  try {
    if (!user.id) {
      throw new Error('User id is missing')
    }
    const url =  UserManagementEndpoint.UpdateUser(user.id)
    const requestBody =  createUserRequestBody(user)
    const result = await HttpRequest.put(url, requestBody)
    return result.data
  } catch (error) {
    throw error
  }
}
