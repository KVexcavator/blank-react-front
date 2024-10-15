import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectSelf = (state: RootState) => state.user

// export const selectNeedSetPassword = createSelector(
//   selectSelf,
//   (state) => state.needSetPassword
// )

export const selectCurrentUser = createSelector(
  selectSelf,
  (state) => state.currentUser
)

// export const selectReadableUsers = createSelector(
//   selectSelf,
//   (state) => state.readableUsers
// )

export const selectUserToken = createSelector(
  selectSelf,
  (state) => state.userToken
)
