import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Table } from '../../../components/form-elements/table'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { listProductMappingsAsync } from '../../../redux/product-mapping/thunks'
import { selectAllProductMappings } from '../../../redux/product-mapping/selector'
import { productMappingColumns } from './elements/table-settings'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import { useNavigate } from 'react-router-dom'
import { DashboardRoutes, getFullDashboardRoute } from '../../../constants/routes'

export default function ProductMappings() {
  const navigate = useNavigate()
  const productMappings = useSelector(selectAllProductMappings)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(listProductMappingsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleAddMappingClick = () => {
    navigate(getFullDashboardRoute(DashboardRoutes.MappingCreate))
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">All Product Mappings</Typography>
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
                  onClick={handleAddMappingClick}
                  startIcon={<AddSharpIcon/>}
                  >
                    Add new mapping
                  </Button>
                </Grid>
              </Grid>

              {/* product mapping list */}
              <Table
                rows={productMappings}
                columns={productMappingColumns}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
