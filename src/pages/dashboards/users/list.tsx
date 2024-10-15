import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { listUsersAsync } from '../../../redux/users-management/thunks'
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import {
  DashboardRoutes,
  getFullDashboardRoute,
} from '../../../constants/routes'
import { Table } from '../../../components/form-elements/table'
import { UsersColumns } from './elements/table-setting'
import { User } from '../../../api/types'
import {
  selectAllUsers,
  selectIsUsersLoading,
} from '../../../redux/users-management/selector'
import { fetchAllUsers } from '../../../api/users-management'


export const Users = () => {
  const navigate = useNavigate()
  const users = useSelector(selectAllUsers)
  const isUsersLoading = useSelector(selectIsUsersLoading)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listUsersAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRowClick = ({ row }: { row: User }) => {
    // navigate(`/dashboard/users/edit/${row.id}`)
  }

  const handleCreateNewUser = () => {
    navigate(getFullDashboardRoute(DashboardRoutes.UserCreate))
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
                  <Typography variant="h6">All Users</Typography>
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
                  onClick={handleCreateNewUser}
                  startIcon={<AddIcon />}
                  >
                    Create new User
                  </Button>
                </Grid>
              </Grid>
              {/* Table */}
              <Table
                rows={users}
                columns={UsersColumns}
                autoHeight
                loading={isUsersLoading}
                onRowClick={handleRowClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
