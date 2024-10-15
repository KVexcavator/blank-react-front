import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.billing

export const selectBilling = createSelector(
  selectSelf,
  (state) => state.billing
)
