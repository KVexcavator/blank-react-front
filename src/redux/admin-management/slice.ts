import { createSlice } from '@reduxjs/toolkit'
import { AdminStock} from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  stockLevel: AdminStock[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  stockLevel: [],
  status: RequestStatus.Idle
}


const stockLevel = createSlice({
  name: 'stockLevel',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listAdminStockLevelAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listAdminStockLevelAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.stockLevel = action.payload
    })
    builder.addCase(thunks.listAdminStockLevelAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const stockLevelSlice = stockLevel.reducer
