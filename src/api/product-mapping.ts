import { HttpRequest } from './axios'
import { ProductMapping, ProductMappingKeys } from './types'

const ProductMappingEndpoint =  {
  fetchProductMappings: '/product_mappings',
  updateProductMapping: (id: string | number) => `/product_mappings/${id}`,
}

export async function fetchProductMapping(): Promise<ProductMapping[]> {
  try {
    const url = ProductMappingEndpoint.fetchProductMappings
    const result = await HttpRequest.get(url)
    return result.data as ProductMapping[]
  } catch (error) {
    throw error
  }
}

export async function createProductMapping(
  productMapping: Partial<ProductMapping>
) {
  try {
    const url =ProductMappingEndpoint.fetchProductMappings
    const result = await HttpRequest.post(url,
      {
        product_mapping: {
          [ProductMappingKeys.CarrierProduct]: productMapping?.carrier_product,
          [ProductMappingKeys.CustomerProduct]:
            productMapping?.customer_product,
          [ProductMappingKeys.Quantity]: productMapping?.quantity,
        },
      }
    )
    return result.data
  } catch (error) {
    throw error
  }
}

export async function updateProductMapping(
  productMapping: Partial<ProductMapping>
) {
  try {
    if (!productMapping.id) {
      throw new Error('Product mapping id is missing')
    }
    const url = ProductMappingEndpoint.updateProductMapping(productMapping.id)
    const result = await HttpRequest.put(
      url,
      {
        product_mapping: {
          [ProductMappingKeys.CarrierProduct]: productMapping?.carrier_product,
          [ProductMappingKeys.CustomerProduct]:
            productMapping?.customer_product,
          [ProductMappingKeys.Quantity]: productMapping?.quantity,
        },
      }
    )
    return result.data
  } catch (error) {
    throw error
  }
}
