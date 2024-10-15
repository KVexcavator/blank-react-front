import { HttpRequest } from './axios'
import { Stock, StockStatus, Voucher } from './types'

const StockManagementEndpoints = {
  getVirtuals: '/virtuals',
  getStockContents: (stockId: string) => `/${stockId}/vouchers`,
  updateVirtuals: (stockId: string) => `/virtuals/${stockId}`,
  getAvailableVoucherDelivery: (id: string ) => `/deliveries/${id}/available_vouchers`,
}

export async function listAllVirtuals(): Promise<Stock[]> {
  try {
    const url = StockManagementEndpoints.getVirtuals
    const result = await HttpRequest.get(url)
    return result.data as Stock[]
  } catch (error) {
    throw error
  }
}

export async function fetchStockContent(stockId: string): Promise<Voucher[]> {
  try {
    const url = StockManagementEndpoints.getStockContents(stockId)
    const result = await HttpRequest.get(url)
    return result.data as Voucher[]
  } catch (error) {
    throw error
  }
}


export async function getAvailableVouchersForDelivery(id: string ): Promise<Voucher[]> {
  try {
    const url = StockManagementEndpoints.getAvailableVoucherDelivery(id)
    const result = await HttpRequest.get(url)
    return result.data as Voucher[]
  } catch (error) {
    throw error
  }
}


export async function uploadStock(formData: FormData): Promise<void> {
  try {
    const url = StockManagementEndpoints.getVirtuals
    // const requestBody = new FormData()
    const requestBody = formData
    // requestBody.append('virtual[virtual_file]', form, file.name)
    await HttpRequest.post(url, requestBody)
  } catch (error) {
    throw error
  }
}

export async function updateStockStatus(
  stockId: string,
  status: StockStatus
): Promise<void> {
  try {
    const url = StockManagementEndpoints.updateVirtuals(stockId)
    const requestBody = new FormData()
    requestBody.append('virtual[activated]', status)
    await HttpRequest.put(url, requestBody)
  } catch (error) {
    throw error
  }
}
