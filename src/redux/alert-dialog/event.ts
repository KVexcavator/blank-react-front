export enum AlertDialogEventName {
  AuthorizationConfirmation = 'alertDialog/AuthorizationConfirm',
}

export interface AlertDialogPayload {
  isApproved: boolean,
  meta: any
}

export const AlertDialogEvent = new EventTarget()

export function dispatchDialogCloseEvent(
  dialogName: AlertDialogEventName | null,
  meta: AlertDialogPayload
) {
  if(!dialogName) { throw new Error('Alert dialog event name is missing!')}
  AlertDialogEvent.dispatchEvent(new CustomEvent(dialogName, { detail: meta }))
}

export function addAlertDialogEventListener(
  dialogName: AlertDialogEventName,
  listener: (event:any) => void
) {
  AlertDialogEvent.addEventListener(dialogName, listener)
}

export function removeAlertDialogEventListener(
  dialogName: AlertDialogEventName,
  listener: (event: any) => void
) {
  return AlertDialogEvent.removeEventListener(dialogName, listener)
}
