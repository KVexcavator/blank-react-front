import { createSlice } from '@reduxjs/toolkit'
import { uploadStockCsvFileAsync, fetchAllStocksAsync, fetchStocksContentAsync, fetchAvailableVouchersForDeliveryAsync} from './thunks'
import { Stock, Voucher } from '../../api/types'
import { RequestStatus } from '../types';

interface StockState {
  stocks: Stock[] | [],
  vouchers: Voucher[] | [],
  vouchersDelivery: Voucher [] | [],
  voucherRequest: RequestStatus,
  voucherDeliveryRequest: RequestStatus
}

const initialState: StockState = {
  stocks: [],
  vouchers: [],
  vouchersDelivery: [],
  voucherRequest: RequestStatus.Idle,
  voucherDeliveryRequest: RequestStatus.Idle
}

const stocksSlice = createSlice({
  name: 'Stocks',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchAllStocksAsync.fulfilled, (state, action)=>{
      state.stocks = [...action.payload]
      return state
    })
    builder.addCase(uploadStockCsvFileAsync.fulfilled, (state, action)=>{
      return state
    })
    builder.addCase(fetchStocksContentAsync.pending, (state)=>{
      state.voucherRequest = RequestStatus.Pending
      return state
    })
    builder.addCase(fetchStocksContentAsync.fulfilled, (state, action)=>{
      state.vouchers = [...action.payload]
      state.voucherRequest = RequestStatus.Fulfilled
      return state
    })
    builder.addCase(fetchAvailableVouchersForDeliveryAsync.pending, (state)=>{
      state.voucherDeliveryRequest = RequestStatus.Pending
      return state
    })
    builder.addCase(fetchAvailableVouchersForDeliveryAsync.fulfilled, (state, action)=>{
      state.vouchersDelivery = [...action.payload]
      state.voucherDeliveryRequest = RequestStatus.Fulfilled
      return state
    })
  }
})

export const stockReducer = stocksSlice.reducer
export const stockStateName = stocksSlice.name
