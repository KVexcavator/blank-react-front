import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.deliveries

export const selectAllDeliveries = createSelector(
  selectSelf,
  (state) => state.deliveries
)
