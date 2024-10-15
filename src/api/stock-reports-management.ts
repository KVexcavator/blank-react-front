import fileDownload from 'js-file-download'
import { BaseURL, HttpRequest } from './axios'
import { StockReports } from './types'
import axios from 'axios'

export const StockReportsManagementEndpoint = {
  ListStockReports: '/stock_reports'
}
// /api/v1/stock_reports   /api/v1/stock_reports/download/:file_name
export async function fetchAllStockReports(): Promise<StockReports[]> {
  try {
    const url = StockReportsManagementEndpoint.ListStockReports
    const result = await HttpRequest.get(url)
    return result.data as StockReports[]
  } catch (error) {
    throw error
  }
}

export const downloadStockReportFile = async(filename: string) => {
  try {
    const url = `${BaseURL}/stock_reports/download/${filename}`
    const result = await axios({
      url: url,
      method: 'GET',
      responseType: 'blob', // Important
    }).then(response=>{
      fileDownload(response.data, `${filename}.xls`)
    })
    return result
  } catch(error) {
    throw error
  }
}
