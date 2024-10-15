import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { RequestStatus } from '../types'

const selectSelf = (state: RootState) => state.Orders

export const selectOrders = createSelector(
  selectSelf,
  (state) => state.orders
)

export const selectOrderItems = createSelector(
  selectSelf,
  (state) =>  state.orderItems // [] if compil wrong id | state.orderItems
)

export const isOrderItemLoaded = createSelector(
  selectSelf,
  (state) => state.orderItemRequestStatus === RequestStatus.Fulfilled
)
