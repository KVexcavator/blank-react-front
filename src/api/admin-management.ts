import { HttpRequest } from './axios'
import { AdminStock } from './types'

const AdminManagementEndpoints = {
  getStockLevel: '/admin/stock_level'
}

export async function listAdminStockLevel(): Promise<AdminStock[]> {
  try {
    const url = AdminManagementEndpoints.getStockLevel
    const result = await HttpRequest.get(url)
    return result.data as AdminStock[]
  } catch (error) {
    throw error
  }
}
