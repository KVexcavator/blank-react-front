import { HttpRequest } from './axios'
import { Product } from './types'

export const ProductManagementEndpoint = {
  ListProduct: '/products',
  UpdateProduct: (id: string | number) => `/products/${id}`,
}

function createProductRequestBody(product: Partial<Product>) {
  const data = new FormData()
  data.append('product[product_name]', `${product?.product_name}`)
  data.append('product[product_price]', `${product?.product_price}`)
  data.append('product[validity]', `${product?.validity}`)
  return data
}

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const url = ProductManagementEndpoint.ListProduct
    const result = await HttpRequest.get(url)
    return result.data as Product[]
  } catch (error) {
    throw error
  }
}

export async function createProduct(product: Partial<Product>) {
  console.log(product)
  try {
    if (!product.product_name || !product.product_price) {
      throw new Error('Product name or product price is missing')
    }
    const url = ProductManagementEndpoint.ListProduct
    const requestBody = createProductRequestBody(product)
    const result = await HttpRequest.post(url, requestBody)      
    return result.data
  } catch (error) {
    throw error
  }
}

export async function updateProduct(product: Partial<Product>) {
  try {
    if (!product.id) {
      throw new Error('Product id is missing')
    }
    const url =  ProductManagementEndpoint.UpdateProduct(product.id)
    const requestBody =  createProductRequestBody(product)
    const result = await HttpRequest.put(url, requestBody)
    return result.data
  } catch (error) {
    throw error
  }
}
