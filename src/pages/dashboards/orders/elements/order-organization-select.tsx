import { useDispatch, useSelector } from "react-redux"
import { selectAllOrganizations } from "../../../../redux/organizations-management/selector"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { AppDispatch } from "../../../../redux/store"
import { useEffect } from "react"
import { listOrganizationsAsync } from "../../../../redux/organizations-management/thunks"


export const OrderOrganizationSelect = ({onOrganizationSelect}: any) => {

  const organizations = useSelector(selectAllOrganizations)
  const dispatch = useDispatch<AppDispatch>()

  const handleOrganizationChange = (e: any) => {
    onOrganizationSelect(e.target.value as string)
  }

  useEffect(() => {
    dispatch(listOrganizationsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="order-organization-select-label">Organization</InputLabel>
        <Select
          labelId="order-organization-select-label"
          id="order-organization-select"
          label="organization"
          onChange={handleOrganizationChange}
        >
          {organizations.map((organization) => (
            <MenuItem
              key={organization.title}
              value={organization.title}
            >
              {organization.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
