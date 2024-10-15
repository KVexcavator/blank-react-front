import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createOrganization,
  fetchAllOrganizations,
  updateOrganization,
} from '../../api/organizations-management'
import { Organization } from '../../api/types'
import { snackbarActions } from '../snack-bar/slice'
import { OrganizationSnackbarMessage } from './types'

/** Get request to fetch all organizations */
export const listOrganizationsAsync = createAsyncThunk(
  'listOrganizationsAsync',
  async () => {
    const result = await fetchAllOrganizations()
    return result
  }
)

/** Post request to create new organization */
export const createOrganizationAsync = createAsyncThunk(
  'createOrganizationAsync',
  async (organization: Partial<Organization>, { dispatch }) => {
    try {
      await createOrganization(organization)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          OrganizationSnackbarMessage.CreateOrganizationSuccess
        )
      )
      dispatch(listOrganizationsAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          OrganizationSnackbarMessage.CreateOrganizationFailed
        )
      )
    }
  }
)

/** Put request to update organization */
export const updateOrganizationAsync = createAsyncThunk(
  'createOrganizationAsync',
  async (organization: Partial<Organization>, { dispatch }) => {
    try {
      await updateOrganization(organization)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          OrganizationSnackbarMessage.UpdateOrganizationSuccess
        )
      )
      dispatch(listOrganizationsAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          OrganizationSnackbarMessage.UpdateOrganizationFailed
        )
      )
    }
  }
)
