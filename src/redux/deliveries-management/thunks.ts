import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  downloadDeliveriesReportPdfFile,
  downloadDeliveriesReportXlsFile,
  fetchAllDeliveries, postDeliveryCancel
} from '../../api/deliveries-management'
import { sortBy } from 'lodash'
import { DeliveriesKeys } from '../../api/types'
import { CancelledDeliveryAsyncPayload } from './types'
import { snackbarActions } from '../snack-bar/slice'
import { AxiosError } from 'axios'

/** Get request to fetch all deliveries */
export const listDeliveriesAsync = createAsyncThunk(
  'listDeliveriesAsync',
  async () => {
    const deliveries = await fetchAllDeliveries()
    return sortBy(deliveries, DeliveriesKeys.Id)
  }
)

/** Post request to cancelled the delivery */
export const cancelledDeliveryAsync = createAsyncThunk(
  'cancelledDeliveryAsync',
  async (
    { id }: CancelledDeliveryAsyncPayload,
    { dispatch }
  ) => {
    try {
      await postDeliveryCancel(id)
      dispatch(listDeliveriesAsync())
    } catch (error) {
      dispatch(snackbarActions.showErrorSnackbar('Something went wrong!'))
    }
  }
)

export const downloadDeliveriesReportPdfFileAsync = createAsyncThunk(
  'downloadDeliveriesReportPdfFileAsync',
  async () => {
    try {
      await downloadDeliveriesReportPdfFile()
    } catch (error: unknown) {
      snackbarActions.showErrorSnackbar('Error downloading files')
    }
  }
)

export const downloadDeliveriesReportXlsFileAsync = createAsyncThunk(
  'downloadDeliveriesReportXlsFileAsync',
  async (
    user_id: string
  ) => {
    try {
      await downloadDeliveriesReportXlsFile(user_id)
    } catch (error: unknown) {
      snackbarActions.showErrorSnackbar('Error downloading files')
    }
  }
)
