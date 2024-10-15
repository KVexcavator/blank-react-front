import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.stocks

export const selectAllStocks = createSelector(
  selectSelf,
  (state) => state.stocks
)

export const selectAllVouchers = createSelector(
  selectSelf,
  (state) => state.vouchers
)

export const selectAvailableVouchersForDeliveryAsync = createSelector(
  selectSelf,
  (state) => state.vouchersDelivery
)

export const selectVoucherLoadingStatus = createSelector(
  selectSelf,
  state=> state.voucherRequest === RequestStatus.Pending? true : false
)
