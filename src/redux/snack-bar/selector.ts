import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const selectSelf = (state: RootState) => state.snackbar

export const isSnackBarOpen = createSelector(
  selectSelf,
  (state) => ({isOpen: state.isOpen, message: state.message, type: state.type})
)