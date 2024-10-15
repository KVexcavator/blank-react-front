import { OrderStatus } from '../../api/types';
export enum OrderSnackbarMessages {
  UploadCSVSuccess = 'Your CSV file was successfully uploaded!',
  UploadCSVFailed = 'CSV Upload failed. Something went wrong!',
}

export type AuthorizeOrderAsyncPayload  = {
  orderId: string,
  orderStatus: OrderStatus
}

export type OrganizationOrderAsyncPayload  = {
  orderId: any,
  organizationsId: string
}
