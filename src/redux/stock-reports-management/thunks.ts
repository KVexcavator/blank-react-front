import { createAsyncThunk } from '@reduxjs/toolkit'
import { snackbarActions } from '../snack-bar/slice'
import { fetchAllStockReports, downloadStockReportFile } from '../../api/stock-reports-management'
import { AxiosError } from 'axios'


export const listStockReportsAsync = createAsyncThunk(
  'listStockReportsAsync',
  async () => {
    const result = await fetchAllStockReports()
    return result
  }
)

export const downloadStockReportFileAsync = createAsyncThunk(
  'downloadStockReportFileAsync',
  async (filename: string, { dispatch }) => {
    try {
      await downloadStockReportFile(filename)
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
