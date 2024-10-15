import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { Table } from '../../../components/form-elements/table'
import {
  selectAllProducts,
  selectIsProductsLoading,
} from '../../../redux/products-management/selector'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { useEffect } from 'react'
import { listProductsAsync } from '../../../redux/products-management/thunks'
import { ProductsColumns } from './elements/table-settings'
import { Product } from '../../../api/types'
import { useNavigate } from 'react-router-dom'
import {
  DashboardRoutes,
  getFullDashboardRoute,
} from '../../../constants/routes'

export const Products = () => {
  const navigate = useNavigate()
  const products = useSelector(selectAllProducts)
  const isProductsLoading = useSelector(selectIsProductsLoading)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listProductsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRowClick = ({ row }: { row: Product }) => {
    navigate(`/dashboard/products/edit/${row.id}`)
  }

  const handleCreateNewProduct = () => {
    navigate(getFullDashboardRoute(DashboardRoutes.ProductCreate))
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
                  <Typography variant="h6">Available Products</Typography>
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
                  onClick={handleCreateNewProduct}
                  startIcon={<AddSharpIcon/>}
                  >
                    Create new product
                  </Button>
                </Grid>
              </Grid>
              {/* Table */}
              <Table
                rows={products}
                columns={ProductsColumns}
                autoHeight
                loading={isProductsLoading}
                // onRowClick={handleRowClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
