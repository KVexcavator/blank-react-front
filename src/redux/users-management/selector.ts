import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.users

export const selectAllUsers = createSelector(
  selectSelf,
  (state) => state.users
)

export const selectIsUsersLoading = createSelector(
  selectSelf,
  (state)=>state.status === RequestStatus.Pending ? true : false
)
