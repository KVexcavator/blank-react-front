import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { listOrganizationsAsync } from '../../../redux/organizations-management/thunks'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import {
  DashboardRoutes,
  getFullDashboardRoute,
} from '../../../constants/routes'
import { Table } from '../../../components/form-elements/table'
import { OrganizationsColumns } from './elements/table-setting'
import { Organization } from '../../../api/types'
import {
  selectAllOrganizations,
  selectIsOrganizationsLoading,
} from '../../../redux/organizations-management/selector'
import { fetchAllOrganizations } from '../../../api/organizations-management'


export const Organizations = () => {
  const navigate = useNavigate()
  const organizations = useSelector(selectAllOrganizations)
  const isOrganizationsLoading = useSelector(selectIsOrganizationsLoading)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listOrganizationsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRowClick = ({ row }: { row: Organization }) => {
    // navigate(`/dashboard/users/edit/${row.id}`)
  }

  const handleCreateNewOrganization = () => {
    navigate(getFullDashboardRoute(DashboardRoutes.OrganizationCreate))
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">Available Organizations</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  <Button
                  variant="outlined"
                  onClick={handleCreateNewOrganization}
                  startIcon={<AddIcon />}
                  >
                    Create new Organization
                  </Button>
                </Grid>
              </Grid>
              {/* Table */}
              <Table
                rows={organizations}
                columns={OrganizationsColumns}
                autoHeight
                loading={isOrganizationsLoading}
                onRowClick={handleRowClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
