import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.organizations

export const selectAllOrganizations = createSelector(
  selectSelf,
  (state) => state.organizations
)

export const selectIsOrganizationsLoading = createSelector(
  selectSelf,
  (state)=>state.status === RequestStatus.Pending ? true : false
)
