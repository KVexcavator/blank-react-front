import fileDownload from 'js-file-download'
import { BaseURL, HttpRequest } from './axios'
import { Delivery, Voucher } from './types'
import axios from 'axios'

export const DeliveryManagementEndpoint = {
  ListDeliveries: '/deliveries',
  CancelDelivery: (id: string | number) => `/deliveries/${id}/cancel`,
  RescheduleDelivery:  (id: string | number) => `/deliveries/${id}/reschedule`,
  MarkDeliveredDelivery: (id: string | number) => `/deliveries/${id}/mark_as_delivered`,
  MarkFaultyVoucherDelivery: (id: string | number, voucher_id: string | number) => `/deliveries/${id}/${voucher_id}/mark_as_faulty`,
  DeliveryReassign: (id: string | number, voucher_id: string | number) => `/deliveries/${id}/${voucher_id}/reassign`,
}


export async function fetchAllDeliveries(): Promise<Delivery[] | []> {
  try {
    const url = DeliveryManagementEndpoint.ListDeliveries
    const result = await HttpRequest.get(url)
    return result.data as Delivery[]
  } catch (error) {
    throw error
  }
}

export async function postDeliveryCancel(id: string) {
  try {
    const url = DeliveryManagementEndpoint.CancelDelivery(id)
    const result = await HttpRequest.post(url)
    return result.data
  } catch (error) {
    throw error
  }
}


export const putDeliveryReschedule = async (id: any, date: any) => {
  try {
    const url = DeliveryManagementEndpoint.RescheduleDelivery(id)
    const result = await HttpRequest.put(url, date )
    return result
  } catch (error) {
    return error
  }
}

export const putDeliveryMarkDelivered = async (id: any, date: any) => {
  try {
    const url = DeliveryManagementEndpoint.MarkDeliveredDelivery(id)
    const result = await HttpRequest.put(url, date )
    return result
  } catch (error) {
    return error
  }
}

export const putDeliveryMarkVoucherFaulty = async (id: any, voucher_id: any) => {
  try {
    const url = DeliveryManagementEndpoint.MarkFaultyVoucherDelivery(id, voucher_id)
    const result = await HttpRequest.put(url)
    return result
  } catch (error) {
    return error
  }
}

export const putDeliveryReassign = async (id: any, voucher_id: any) => {
  try {
    const url = DeliveryManagementEndpoint.DeliveryReassign(id, voucher_id)
    const result = await HttpRequest.put(url)
    return result
  } catch (error) {
    return error
  }
}

export const downloadDeliveriesReportPdfFile = async() => {
  try {
    const url = `deliveries/download/list_pdf`
    const result = await HttpRequest.get(url).then(response=>{
      fileDownload(response.data, `deliveries_list.pdf`);
    })
    return result
  } catch(error) {
    throw error
  }
}
// role: "user"
export const downloadDeliveriesReportXlsFile = async(user_id: string) => {
  try {
    const url = `${BaseURL}/deliveries/download/${user_id}/list_xls`
    const result = await axios({
      url: url,
      method: 'GET',
      responseType: 'blob', // Important
    }).then(response=>{
      fileDownload(response.data, `deliveries_list.xls`);
    })
    return result
  } catch(error) {
    throw error
  }
}
