import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createProductMapping,
  fetchProductMapping,
  updateProductMapping,
} from '../../api/product-mapping'
import { ProductMapping, ProductMappingKeys } from '../../api/types'
import { snackbarActions } from '../snack-bar/slice'
import { ProductMappingSnackbarMessage } from './types'
import { sortBy } from 'lodash'

/** get request to fetch all product mapping */
export const listProductMappingsAsync = createAsyncThunk(
  'listProductMappingsAsync',
  async () => {
    const result = await fetchProductMapping()
    return sortBy(result, ProductMappingKeys.Id)
  }
)

/** Post request to create new product mapping */
export const createProductMappingsAsync = createAsyncThunk(
  'createProductMappingsAsync',
  async (mapping: Partial<ProductMapping>, { dispatch }) => {
    try {
      await createProductMapping(mapping)
      dispatch(listProductMappingsAsync())
      dispatch(
        snackbarActions.showSuccessSnackbar(
          ProductMappingSnackbarMessage.MappingCreate
        )
      )
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          ProductMappingSnackbarMessage.WentWrong
        )
      )
    }
  }
)

/** Put request to update all product mapping */
export const updateProductMappingsAsync = createAsyncThunk(
  'createProductMappingsAsync',
  async (mapping: Partial<ProductMapping>, { dispatch }) => {
    try {
      await updateProductMapping(mapping)
      dispatch(listProductMappingsAsync())
      dispatch(
        snackbarActions.showSuccessSnackbar(
          ProductMappingSnackbarMessage.MappingUpdate
        )
      )
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          ProductMappingSnackbarMessage.WentWrong
        )
      )
    }
  }
)
