import { createSlice } from '@reduxjs/toolkit'
import { StockReports } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  stockReports: StockReports[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  stockReports: [],
  status: RequestStatus.Idle
}


const stockReports = createSlice({
  name: 'stockReports',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listStockReportsAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listStockReportsAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.stockReports = action.payload
    })
    builder.addCase(thunks.listStockReportsAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const stockReportsSlice = stockReports.reducer
