import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const selectSelf = (state: RootState) => state.alertDialog

export const selectAlertDialog = createSelector(
  selectSelf,
  (state) => state
)