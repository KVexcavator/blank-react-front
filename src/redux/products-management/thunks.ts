import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createProduct,
  fetchAllProducts,
  updateProduct,
} from '../../api/products-management'
import { Product } from '../../api/types'
import { snackbarActions } from '../snack-bar/slice'
import { ProductSnackbarMessage } from './types'

/** Get request to fetch all products */
export const listProductsAsync = createAsyncThunk(
  'listProductsAsync',
  async () => {
    const result = await fetchAllProducts()
    return result
  }
)

/** Post request to create new product */
export const createProductAsync = createAsyncThunk(
  'createProductAsync',
  async (product: Partial<Product>, { dispatch }) => {
    try {
      await createProduct(product)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          ProductSnackbarMessage.CreateProductSuccess
        )
      )
      dispatch(listProductsAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          ProductSnackbarMessage.CreateProductFailed
        )
      )
    }
  }
)

/** Put request to update product */
export const updateProductAsync = createAsyncThunk(
  'createProductAsync',
  async (product: Partial<Product>, { dispatch }) => {
    try {
      await updateProduct(product)
      dispatch(
        snackbarActions.showSuccessSnackbar(
          ProductSnackbarMessage.UpdateProductSuccess
        )
      )
      dispatch(listProductsAsync())
    } catch (error) {
      dispatch(
        snackbarActions.showErrorSnackbar(
          ProductSnackbarMessage.UpdateProductFailed
        )
      )
    }
  }
)
