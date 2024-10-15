import { Container, Grid, Paper, Typography } from '@mui/material'
import { Table } from '../../../components/form-elements/table'
import { OrderItemsColumns } from './elements/table-settings'
import { useEffect } from 'react'
import {
  listOrderItemsAsync,
} from '../../../redux/order-management/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectOrderItems } from '../../../redux/order-management/selector';
import { useParams } from 'react-router-dom'

export default function OrderItems() {
  const { orderId } = useParams()
  const orderItems = useSelector(selectOrderItems)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listOrderItemsAsync(orderId as string ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('orderItems', orderItems)

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">Order authorized items</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  {/* Left content if need */}
                </Grid>
              </Grid>

              {/* Order list */}
              <Table
                rows={orderItems}
                columns={OrderItemsColumns()}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
