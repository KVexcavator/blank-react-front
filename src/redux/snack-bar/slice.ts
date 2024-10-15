import { createSlice } from '@reduxjs/toolkit'

enum SnackbarType  {
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
}

interface SnackbarState {
  isOpen: boolean
  message: string,
  type: SnackbarType
}

const initialState: SnackbarState = {
  isOpen: true,
  message: '',
  type: SnackbarType.Info
}

const snackbarSlice = createSlice({
  name: 'snackBar',
  initialState,
  reducers: {
    showSuccessSnackbar: (state, action)=> {
      state.isOpen = true
      state.type = 	SnackbarType.Success
      state.message = action.payload
    },
    showErrorSnackbar: (state, action)=> {
      state.isOpen = true
      state.type = 	SnackbarType.Error
      state.message = action.payload
    },
    showWarningSnackbar: (state, action)=> {
      state.isOpen = true
      state.type = 	SnackbarType.Warning
      state.message = action.payload
    },
    showInfoSnackbar: (state, action)=> {
      state.isOpen = true
      state.type = 	SnackbarType.Info
      state.message = action.payload
    },
    closeSuccessSnackbar: (state)=> {
      state.isOpen = false
      state.message = ''
    }
  },
})

export const snackbarReducer = snackbarSlice.reducer
export const snackbarActions = snackbarSlice.actions