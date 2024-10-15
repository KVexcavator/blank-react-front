import fileDownload from 'js-file-download'
import { BaseURL, HttpRequest } from './axios'
import { Order, OrderItems, OrderStatus } from './types'
import axios from 'axios'

export const OrderEndpoints ={
  listOrder: '/orders',
  listOrderItem: (orderId: string)=>`orders/${orderId}/order_items`,
  downloadFiles: '/download/',
  putOrderCancel: (orderId:string)=> `/orders/${orderId}/cancel`,
  putOrderAuthorize: (orderId:string)=> `/orders/${orderId}/authorize`,
  putOrderOrganization: (orderId:string)=> `/orders/${orderId}/edit_organization`,
  orderItemEditMobileNumber: (deliveryId: string | number) => `order_item/${deliveryId}/edit`
}

export const putOrderItemEditMobileNumber = async (id: any, newMobileNumber: string) => {
  try {
    const url = OrderEndpoints.orderItemEditMobileNumber(id)
    const result = await HttpRequest.put(url, { mobile_number: newMobileNumber } )
    return result
  } catch (error) {
    return error
  }
}

export const fetchAllOrders = async (): Promise<Order[]> => {
  try {
    const result = await HttpRequest.get(OrderEndpoints.listOrder)
    return result.data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const uploadOrderCsvFile = async (formData: FormData): Promise<void> => {
  try {
    const url = OrderEndpoints.listOrder
    const requestBody = formData
    await HttpRequest.post(url, requestBody)
  } catch (error) {
    throw error
  }
}

export const putOrderCancel = async (status: OrderStatus, orderId: string) => {
  try {
    const url = OrderEndpoints.putOrderCancel(orderId)
    const result = await HttpRequest.put(url, { status })
    return result
  } catch (error) {
    return error
  }
}

export const putOrderAuthorize = async (status: OrderStatus, orderId: string) => {
  try {
    const url = OrderEndpoints.putOrderAuthorize(orderId)
    const result = await HttpRequest.put(url, { status })
    return result
  } catch (error) {
    return error
  }
}

export const listOrderItems = async (orderId: string):Promise<OrderItems[]> => {
  try {
    const url = OrderEndpoints.listOrderItem(orderId)
    const result = await HttpRequest.get(url)
    return result.data as OrderItems[]
  } catch(error) {
    throw error
  }
}

export const downloadOrderFile = async(filename:string) => {
  try {
    const url = `download/${filename}`
    const result = await HttpRequest.get(url).then(response=>{
      fileDownload(response.data, filename);
    })
    return result
  } catch(error) {
    throw error
  }
}

export const downloadOrderReportPdfFile = async(filename: string) => {
  try {
    const url = `download/report_pdf/${filename}`
    const result = await HttpRequest.get(url).then(response=>{
      fileDownload(response.data, `${filename.split(".")[0]}_report.pdf`);
    })
    return result
  } catch(error) {
    throw error
  }
}

export const downloadOrderReportXlsFile = async(filename: string) => {
  try {
    const url = `${BaseURL}/download/report_xls/${filename}`
    const result = await axios({
      url: url,
      method: 'GET',
      responseType: 'blob', // Important
    }).then(response=>{
      fileDownload(response.data, `${filename.split(".")[0]}_report.xls`);
    })
    return result
  } catch(error) {
    throw error
  }
}


export const putOrderOrganization = async (organizationsId: string, orderId: string) => {
  try {
    const url = OrderEndpoints.putOrderOrganization(orderId)
    const result = await HttpRequest.put(url, { organizationsId })
    return result
  } catch (error) {
    return error
  }
}
