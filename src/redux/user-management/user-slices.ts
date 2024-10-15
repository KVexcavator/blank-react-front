import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../api/types'
import { RequestStatus } from '../types'
import { getAuthCookies } from '../../api/axios'
// import {checkAccountNeedSetPasswordAsync, createUserAsync, getReadableUserAsync, userLoginAsync, userLoginWithPasswordAsync} from "./user-thunks"
import { userLoginAsync, userLoginWithPasswordAsync} from "./user-thunks"

interface UserState {
  userToken: string | null
  needSetPassword: boolean | null
  currentUser: User | null
  readableUsers: User[] | []
  readableUsersLoading: RequestStatus
  userLoginStatus: RequestStatus
  status: RequestStatus
}

const initialState: UserState = {
  userToken: getAuthCookies() || null,
  needSetPassword: null,
  currentUser: null,
  readableUsers: [],
  readableUsersLoading: RequestStatus.Idle,
  userLoginStatus: RequestStatus.Idle,
  status: RequestStatus.Idle,
}

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // /** Check if user need to set password */
    // builder.addCase(checkAccountNeedSetPasswordAsync.fulfilled, (state)=>{
    //   state.needSetPassword = true
    // })
    // builder.addCase(checkAccountNeedSetPasswordAsync.rejected, (state)=>{
    //   state.needSetPassword = false
    // })

    // /** Create New User */
    // builder.addCase(createUserAsync.pending, (state) => {
    //   state.status = RequestStatus.Pending
    //   return state
    // })
    // builder.addCase(createUserAsync.fulfilled, (state, action) => {
    //   state.status = RequestStatus.Fulfilled
    //   state.readableUsers = [...state.readableUsers, { ...action.payload }]
    //   return state
    // })
    // builder.addCase(createUserAsync.rejected, (state, action) => {
    //   state.status = RequestStatus.Error
    //   return state
    // })

    // /** Load readable user */
    // builder.addCase(getReadableUserAsync.pending, (state) => {
    //   state.readableUsersLoading = RequestStatus.Pending
    // })

    // builder.addCase(getReadableUserAsync.fulfilled, (state, actions) => {
    //   state.readableUsersLoading = RequestStatus.Fulfilled
    //   state.readableUsers = actions.payload
    // })

    // builder.addCase(getReadableUserAsync.rejected, (state) => {
    //   state.readableUsersLoading = RequestStatus.Error
    // })

    /** Login users */
    builder.addCase(userLoginAsync.pending, (state) => {
      state.userLoginStatus = RequestStatus.Pending
    })
    builder.addCase(userLoginAsync.fulfilled, (state) => {
      state.userLoginStatus = RequestStatus.Fulfilled
    })
    builder.addCase(userLoginAsync.rejected, (state) => {
      state.userLoginStatus = RequestStatus.Error
    })

    /** Login user with new password */
    builder.addCase(userLoginWithPasswordAsync.pending, (state) => {
      state.userLoginStatus = RequestStatus.Pending
    })
    builder.addCase(userLoginWithPasswordAsync.fulfilled, (state) => {
      state.userLoginStatus = RequestStatus.Fulfilled
    })
    builder.addCase(userLoginWithPasswordAsync.rejected, (state) => {
      state.userLoginStatus = RequestStatus.Error
    })
  },
})

export const userActions = UserSlice.actions
export const userReducer = UserSlice.reducer
