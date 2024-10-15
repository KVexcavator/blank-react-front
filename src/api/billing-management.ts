import fileDownload from 'js-file-download'
import { BaseURL, HttpRequest } from './axios'
import { Billing } from './types'
import axios from 'axios'

export const BillingEndpoints ={
  listBilling: (start: string, end: string, organization: string)=>`/billing/${start}/${end}/${organization}`,
}

export const fetchBilling = async (start: string, end: string, organization: string): Promise<Billing[]> => {
  try {
    const url = BillingEndpoints.listBilling(start, end, organization)
    const result = await HttpRequest.get(url)
    return result.data as Billing[]
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const downloadBillingReportXlsFile = async(start: string, end: string, organization: string) => {
  try {
    const url = `${BaseURL}/billing/download/${start}/${end}/${organization}/report_xls`
    const result = await axios({
      url: url,
      method: 'GET',
      responseType: 'blob', // Important
    }).then(response=>{
      fileDownload(response.data, `billing_report.xls`);
    })
    return result
  } catch(error) {
    throw error
  }
}
