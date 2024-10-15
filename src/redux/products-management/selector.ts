import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.products

export const selectAllProducts = createSelector(
  selectSelf,
  (state) => state.products
)

export const selectIsProductsLoading = createSelector(
  selectSelf,
  (state)=>state.status === RequestStatus.Pending ? true : false
)