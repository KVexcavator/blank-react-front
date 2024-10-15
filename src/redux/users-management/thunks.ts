import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createUser,
  fetchAllUsers,
  updateUser,
} from '../../api/users-management'
import { User } from '../../api/types'
import { snackbarActions } from '../snack-bar/slice'
import { UserSnackbarMessage } from './types'

/** Get request to fetch all users */
export const listUsersAsync = createAsyncThunk(
  'listUsersAsync',
  async () => {
    const result = await fetchAllUsers()
    return result
  }
)

/** Post request to create new user */
export const createUserAsync = createAsyncThunk(
  'createUserAsync',
  async (user: Partial<User>, { dispatch }) => {
    try {
      await createUser(user)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          UserSnackbarMessage.CreateUserSuccess
        )
      )
      dispatch(listUsersAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          UserSnackbarMessage.CreateUserFailed
        )
      )
    }
  }
)

/** Put request to update user */
export const updateUserAsync = createAsyncThunk(
  'createUserAsync',
  async (user: Partial<User>, { dispatch }) => {
    try {
      await updateUser(user)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          UserSnackbarMessage.UpdateUserSuccess
        )
      )
      dispatch(listUsersAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          UserSnackbarMessage.UpdateUserFailed
        )
      )
    }
  }
)
