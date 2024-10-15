import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  listAdminStockLevel
} from '../../api/admin-management'

/** Get request to fetch all products */
export const listAdminStockLevelAsync = createAsyncThunk(
  'listProductsAsync',
  async () => {
    const result = await listAdminStockLevel()
    return result
  }
)
