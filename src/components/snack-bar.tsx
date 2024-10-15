import { Alert, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { snackbarActions } from '../redux/snack-bar/slice'
import { isSnackBarOpen } from '../redux/snack-bar/selector'

export const SnackBarDialog = () => {
  const { isOpen, message, type } = useSelector(isSnackBarOpen)
  const dispatch = useDispatch<AppDispatch>()

  const handleClose = () => {
    dispatch(snackbarActions.closeSuccessSnackbar())
  }

  if (!isOpen || !message || !type) {
    return null
  }
  
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      message="Note archived"
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
    >
      <Alert onClick={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
