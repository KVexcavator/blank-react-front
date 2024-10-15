import { createSlice } from '@reduxjs/toolkit'
import { AlertDialogEventName } from './event'

interface InitialState {
  showModal: boolean
  title: string | null
  message: string | null
  eventName: AlertDialogEventName | null
  meta: any
}

const initialState: InitialState = {
  showModal: false,
  title: null,
  message: null,
  meta: null,
  eventName: null
}

const alertDialog = createSlice({
  name: 'alertDialog',
  initialState,
  reducers: {
    showAlertDialog: (state, action) => {
      state.showModal = true
      state.title = action.payload.title
      state.message = action.payload.message
      state.eventName = action.payload.eventName
      state.meta = action.payload.meta
    },
    hideAlertDialog: (state) => {
      state.showModal = false
      state.message = null
      state.title = null
      state.meta = null
      state.eventName = null
    },
  },
})

export const alertDialogSlice = alertDialog.reducer
export const alertDialogActions = alertDialog.actions
