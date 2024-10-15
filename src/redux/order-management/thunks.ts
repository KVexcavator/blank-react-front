import { createAsyncThunk } from '@reduxjs/toolkit'
import { snackbarActions } from '../snack-bar/slice'
import { OrderItemsKeys, OrdersKeys } from '../../api/types'
import { AuthorizeOrderAsyncPayload, OrderSnackbarMessages, OrganizationOrderAsyncPayload } from './types'
import { downloadOrderFile,
  downloadOrderReportPdfFile,
  downloadOrderReportXlsFile } from '../../api/order-management'
import {
  uploadOrderCsvFile,
  fetchAllOrders,
  putOrderCancel,
  putOrderAuthorize,
  listOrderItems,
  putOrderOrganization
} from '../../api/order-management'
import { AxiosError } from 'axios'
import { sortBy } from 'lodash'

/** Fetch all orders */
export const fetchAllOrdersAsync = createAsyncThunk(
  'fetchAllOrdersAsync',
  async () => {
    const orders = await fetchAllOrders()
    return sortBy(orders, OrdersKeys.Id)
  }
)

/** Post request to upload order csv file */
export const uploadOrderCsvFileAsync = createAsyncThunk(
  'uploadOrderCsvFileAsync',
  async (formData: FormData, { dispatch }) => {
    try {
      await uploadOrderCsvFile(formData)
      dispatch(fetchAllOrdersAsync())
      dispatch(
        snackbarActions.showSuccessSnackbar(
          OrderSnackbarMessages.UploadCSVSuccess
        )
      )
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(OrderSnackbarMessages.UploadCSVFailed)
      )
    }
  }
)

export const cancelOrderAsync = createAsyncThunk(
  'cancelOrderAsync',
  async (
    { orderId, orderStatus }: AuthorizeOrderAsyncPayload,
    { dispatch }
  ) => {
    try {
      await putOrderCancel(orderStatus, orderId)
      dispatch(fetchAllOrdersAsync())
    } catch (error) {
      dispatch(snackbarActions.showErrorSnackbar('Something went wrong!'))
    }
  }
)

/** Put request to authorize the order */
export const authorizeOrderAsync = createAsyncThunk(
  'authorizeOrderAsync',
  async (
    { orderId, orderStatus }: AuthorizeOrderAsyncPayload,
    { dispatch }
  ) => {
    try {
      await putOrderAuthorize(orderStatus, orderId)
      dispatch(fetchAllOrdersAsync())
    } catch (error) {
      dispatch(snackbarActions.showErrorSnackbar('Something went wrong!'))
    }
  }
)

/** Put request to add organization the order */
export const organizationOrderAsync = createAsyncThunk(
  'organizationOrderAsync',
  async (
    { orderId, organizationsId }: OrganizationOrderAsyncPayload,
    { dispatch }
  ) => {
    try {
      await putOrderOrganization(organizationsId, orderId)
      dispatch(fetchAllOrdersAsync())
    } catch (error) {
      dispatch(snackbarActions.showErrorSnackbar('Something went wrong!'))
    }
  }
)

/** List Order Items for order */
export const listOrderItemsAsync = createAsyncThunk(
  'listOrderItemsAsync',
  async (orderId: string) => {
    const orderItems = await listOrderItems(orderId)
    return sortBy(orderItems, OrderItemsKeys.Id)
  }
)

export const downloadOrderReportPdfFileAsync = createAsyncThunk(
  'downloadOrderReportPdfFileAsync',
  async (filename: string, { dispatch }) => {
    try {
      await downloadOrderReportPdfFile(filename)
    } catch (error: unknown) {
      const err = error as AxiosError
      if (err.response?.status === 404) {
        dispatch(snackbarActions.showErrorSnackbar('File not found'))
        return
      }
      dispatch(snackbarActions.showErrorSnackbar('Error downloading files'))
    }
  }
)

export const downloadOrderReportXlsFileAsync = createAsyncThunk(
  'downloadOrderReportXlsFileAsync',
  async (filename: string, { dispatch }) => {
    try {
      await downloadOrderReportXlsFile(filename)
    } catch (error: unknown) {
      const err = error as AxiosError
      if (err.response?.status === 404) {
        dispatch(snackbarActions.showErrorSnackbar('File not found'))
        return
      }
      dispatch(snackbarActions.showErrorSnackbar('Error downloading files'))
    }
  }
)

export const downloadOrderFileAsync = createAsyncThunk(
  'downloadOrderFileAsync',
  async (filename: string, { dispatch }) => {
    try {
      await downloadOrderFile(filename)
    } catch (error: unknown) {
      const err = error as AxiosError
      if (err.response?.status === 404) {
        dispatch(snackbarActions.showErrorSnackbar('File not found'))
        return
      }
      dispatch(snackbarActions.showErrorSnackbar('Error downloading files'))
    }
  }
)
