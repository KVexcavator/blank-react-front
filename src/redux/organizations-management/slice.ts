import { createSlice } from '@reduxjs/toolkit'
import { Organization } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  organizations: Organization[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  organizations: [],
  status: RequestStatus.Idle
}


const organizations = createSlice({
  name: 'organizations',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listOrganizationsAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listOrganizationsAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.organizations = action.payload
    })
    builder.addCase(thunks.listOrganizationsAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const organizationsSlice = organizations.reducer
