import { createSlice } from '@reduxjs/toolkit'
import { Delivery } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  deliveries: Delivery[] | []
}

const initialState: InitialState = {
  deliveries: []
}


const deliveries = createSlice({
  name: 'deliveries',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listDeliveriesAsync.fulfilled, (state, action)=>{
      state.deliveries = [...action.payload]
      return state
    })
  }
})


export const deliveriesSlice = deliveries.reducer
