import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../api/types'
import * as thunks from "./thunks"
import { RequestStatus } from '../types'

interface InitialState {
  users: User[] | [],
  status: RequestStatus,
}

const initialState: InitialState = {
  users: [],
  status: RequestStatus.Idle
}


const users = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(thunks.listUsersAsync.pending, (state)=>{
      state.status = RequestStatus.Pending
    })
    builder.addCase(thunks.listUsersAsync.fulfilled, (state, action)=>{
      state.status = RequestStatus.Fulfilled
      state.users = action.payload
    })
    builder.addCase(thunks.listUsersAsync.rejected, (state, action)=>{
      state.status = RequestStatus.Error
    })
  }
})


export const usersSlice = users.reducer
