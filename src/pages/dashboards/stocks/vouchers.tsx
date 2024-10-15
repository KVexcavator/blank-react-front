import {Container, Grid, Paper, Typography } from '@mui/material'
import { Table } from '../../../components/form-elements/table'
import { VoucherColumns } from './elements/table-settings'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import {
  selectAllVouchers,
  selectVoucherLoadingStatus,
} from '../../../redux/stock-management/selector'
import { fetchStocksContentAsync } from '../../../redux/stock-management/thunks'
import { useParams } from 'react-router-dom'

export default function Vouchers() {
  const { stockId } = useParams()
  const vouchers = useSelector(selectAllVouchers)
  const isVoucherLoading = useSelector(selectVoucherLoadingStatus)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchStocksContentAsync(stockId as string))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">Vouchers</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  <div/>
                </Grid>
              </Grid>

              {/* vouchers list */}
              <Table
                rows={vouchers || []}
                columns={VoucherColumns}
                loading={isVoucherLoading}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
