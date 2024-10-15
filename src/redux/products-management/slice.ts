import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  products: Product[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  products: [],
  status: RequestStatus.Idle
}


const products = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listProductsAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listProductsAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.products = action.payload
    })
    builder.addCase(thunks.listProductsAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const productsSlice = products.reducer
