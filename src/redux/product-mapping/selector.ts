import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

const selectSelf = (state: RootState) => state.mapping

export const selectAllProductMappings = createSelector(
  selectSelf,
  (state) => state.productMappings
)

export const selectProductMappingsLoadingStatus = createSelector(
  selectSelf,
  (state)=>state.status
)