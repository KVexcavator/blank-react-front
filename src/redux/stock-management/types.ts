import { StockStatus } from "../../api/types"

export enum StockSnackbarMessage {
  StockUploadSuccess = 'Stock successfully updated.',
  StockUploadError = 'Stock upload failed. Something went wrong!',
  StockActivated='Stock activated!',
  StockDeactivated='Stock deactivated!',
  WentWrong='Something went wrong!',
}

export type ChangeStockStatusAsyncPayload = {
  stockId: string
  stockStatus: StockStatus
}