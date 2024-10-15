import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.stockLevel

export const selectStockLevel = createSelector(
  selectSelf,
  (state) => state.stockLevel
)

export const selectIsStockLevelLoading = createSelector(
  selectSelf,
  (state)=>state.status === RequestStatus.Pending ? true : false
)
