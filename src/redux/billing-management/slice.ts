import { createSlice } from '@reduxjs/toolkit'
import { Billing} from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  billing: Billing[] | []
}

const initialState: InitialState = {
  billing: []
}


const billing = createSlice({
  name: 'billing',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.fetchBillingAsync.fulfilled, (state, action)=>{
      state.billing = [...action.payload]
      return state
    })
  }
})


export const billingSlice = billing.reducer
