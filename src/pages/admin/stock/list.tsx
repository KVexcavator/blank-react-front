import { Container, Grid, Paper, Typography } from '@mui/material'
import { useEffect } from 'react'
import { AdminStockColumns } from './elements/table-settings'
import { Table } from '../../../components/form-elements/table'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectStockLevel,
  selectIsStockLevelLoading,
} from '../../../redux/admin-management/selector'
import { AppDispatch } from '../../../redux/store'
import { listAdminStockLevelAsync } from '../../../redux/admin-management/thunks'

// const stockLevel = [
//   {
//     id: 0,
//     product_name: 'AWEH PRIME',
//     available: 70,
//     scheduled: 609,
//     assigned: 18348,
//     inactive: 0,
//     faulty: 63,
//     total: 19090
//   },
//   {
//     id: 1,
//     product_name: 'AWEH GIG',
//     available: 47,
//     scheduled: 0,
//     assigned: 1068,
//     inactive: 20,
//     faulty: 1,
//     total: 1136
//   },
// ]
// Stock Level
export const AdminStock = () => {
  const stockLevel = useSelector(selectStockLevel)
  const isStockLevelLoading = useSelector(selectIsStockLevelLoading)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listAdminStockLevelAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">Current Stock Level</Typography>
                </Grid>
              </Grid>
              {/* Table */}
              <Table
                rows={stockLevel}
                columns={AdminStockColumns()}
                autoHeight
                loading={isStockLevelLoading}
                // onRowClick={handleRowClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
