import { createSlice } from '@reduxjs/toolkit'
import { ProductMapping } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  productMappings: ProductMapping[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  productMappings: [],
  status: RequestStatus.Idle
}


const productMapping = createSlice({
  name: 'productMappings',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listProductMappingsAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listProductMappingsAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.productMappings = action.payload
    })
    builder.addCase(thunks.listProductMappingsAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const productMappingSlice = productMapping.reducer