import { createAsyncThunk } from '@reduxjs/toolkit'
import { downloadBillingReportXlsFile, fetchBilling } from '../../api/billing-management'
import { BillingAsyncPayload } from './types'
import { snackbarActions } from '../snack-bar/slice'

/** Get request to fetch billing with params start-end dates and organization */
export const fetchBillingAsync = createAsyncThunk(
  'fetchBillingAsync',
  async (
    { start, end, organization }: BillingAsyncPayload
  ) => {
    const billing = await fetchBilling(start, end, organization)
    return billing
  }
)


export const downloadBillingReportXlsFileAsync = createAsyncThunk(
  'downloadBillingReportXlsFileAsync',
  async (
    { start, end, organization }: BillingAsyncPayload
  ) => {
    try {
      await downloadBillingReportXlsFile(start, end, organization)
    } catch (error: unknown) {
      snackbarActions.showErrorSnackbar('Error downloading files')
    }
  }
)
