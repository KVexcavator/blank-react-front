import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.stockReports

export const selectAllStockRecords = createSelector(
  selectSelf,
  (state) => state.stockReports
)

export const selectIsStockReportsLoading = createSelector(
  selectSelf,
  (state)=>state.status === RequestStatus.Pending ? true : false
)
