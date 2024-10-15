
export enum OrganizationSnackbarMessage {
  UpdateDeliveryFailed = 'An error occurred during the process.',
  UpdateDeliverySuccess = 'Deliveries was successfully updated.',
}

export type CancelledDeliveryAsyncPayload  = {
  id: string
}
