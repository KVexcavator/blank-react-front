import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlertDialog } from '../redux/alert-dialog/selector'
import { AppDispatch } from '../redux/store'
import { alertDialogActions } from '../redux/alert-dialog/slice'
import { dispatchDialogCloseEvent } from '../redux/alert-dialog/event'

export default function AlertDialog() {
  const { showModal, message, title, eventName, meta } = useSelector(selectAlertDialog)
  const dispatch = useDispatch<AppDispatch>()

  const closeDialog = () => {
    dispatch(alertDialogActions.hideAlertDialog())
  }

  const handleProceed = () => {
    dispatchDialogCloseEvent(eventName, {
      isApproved: true,
      meta
    })
    closeDialog()
  }

  const handleCancel = () => {
    dispatchDialogCloseEvent(eventName, {
      isApproved: false,
      meta
    })
    closeDialog()
  }

  if ((!title && !message) || !eventName) {
    dispatch(alertDialogActions.hideAlertDialog())
    return null
  }

  return (
    <Dialog
      open={showModal}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>handleCancel()}>Cancel</Button>
        <Button onClick={()=>handleProceed()}>Proceed</Button>
      </DialogActions>
    </Dialog>
  )
}
