import { HttpRequest } from './axios'
import { Organization } from './types'

export const OrganizationManagementEndpoint = {
  ListOrganizations: '/organizations',
  UpdateOrganization: (id: string | number) => `/organizations/${id}`,
}

function createOrganizationRequestBody(organization: Partial<Organization>) {
  const data = new FormData()
  data.append('organization[title]', `${organization?.title}`)
  return data
}

export async function fetchAllOrganizations(): Promise<Organization[] | []> {
  try {
    const url = OrganizationManagementEndpoint.ListOrganizations
    const result = await HttpRequest.get(url)
    return result.data as Organization[]
  } catch (error) {
    throw error
  }
}

export async function createOrganization(organization: Partial<Organization>) {
  try {
    if (!organization.title ) {
      throw new Error('Organization title is missing')
    }
    const url = OrganizationManagementEndpoint.ListOrganizations
    const requestBody = createOrganizationRequestBody(organization)
    const result = await HttpRequest.post(url, requestBody)
    return result.data
  } catch (error) {
    throw error
  }
}

export async function updateOrganization(organization: Partial<Organization>) {
  try {
    if (!organization.id) {
      throw new Error('Organization id is missing')
    }
    const url =  OrganizationManagementEndpoint.UpdateOrganization(organization.id)
    const requestBody =  createOrganizationRequestBody(organization)
    const result = await HttpRequest.put(url, requestBody)
    return result.data
  } catch (error) {
    throw error
  }
}
