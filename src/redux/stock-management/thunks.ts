import { createAsyncThunk } from '@reduxjs/toolkit'
import { snackbarActions } from '../snack-bar/slice'
import { ChangeStockStatusAsyncPayload, StockSnackbarMessage } from './types'
import {
  listAllVirtuals,
  fetchStockContent,
  updateStockStatus,
  uploadStock,
  getAvailableVouchersForDelivery
} from '../../api/stock-management'
import { StockKeys, StockStatus, VoucherKeys } from '../../api/types'
import { sortBy } from 'lodash'

export const fetchAllStocksAsync = createAsyncThunk(
  'fetchAllStocksAsync',
  async () => {
    const stocks = await listAllVirtuals()
    return sortBy(stocks, StockKeys.Id)
  }
)

export const fetchStocksContentAsync = createAsyncThunk(
  'fetchStocksContentAsync',
  async (stockId: string) => {
    const vouchers = await fetchStockContent(stockId)
    return sortBy(vouchers, VoucherKeys.ID)
  }
)

export const fetchAvailableVouchersForDeliveryAsync = createAsyncThunk(
  'fetchAvailableVouchersForDeliveryAsync',
  async (deliveryId: string) => {
    const vouchers = await getAvailableVouchersForDelivery(deliveryId)
    return vouchers
  }
)


export const uploadStockCsvFileAsync = createAsyncThunk(
  'uploadStockCsvFileAsync',
  async (formData: FormData, { dispatch }) => {
    try {
      await uploadStock(formData)
      dispatch(fetchAllStocksAsync())
      dispatch(
        snackbarActions.showSuccessSnackbar(
          StockSnackbarMessage.StockUploadSuccess
        )
      )
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(StockSnackbarMessage.StockUploadError)
      )
    }
  }
)

export const changeStockStatusAsync = createAsyncThunk(
  'changeStockStatusAsync',
  async (
    { stockId, stockStatus }: ChangeStockStatusAsyncPayload,
    { dispatch }
  ) => {
    try {
      await updateStockStatus(stockId, stockStatus)
      dispatch(fetchAllStocksAsync())
      if (stockStatus === StockStatus.Active) {
        dispatch(
          snackbarActions.showSuccessSnackbar(
            StockSnackbarMessage.StockActivated
          )
        )
      } else {
        dispatch(
          snackbarActions.showErrorSnackbar(
            StockSnackbarMessage.StockDeactivated
          )
        )
      }
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(StockSnackbarMessage.WentWrong)
      )
    }
  }
)
