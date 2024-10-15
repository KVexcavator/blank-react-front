import { Container, Grid, Paper, Typography } from "@mui/material"
import { useEffect } from 'react'
import { Table } from '../../../components/form-elements/table'
import { StockReportsColumns} from './elements/table-settings'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from "../../../redux/store"
import { selectAllStockRecords } from '../../../redux/stock-reports-management/selector'
import { listStockReportsAsync } from '../../../redux/stock-reports-management/thunks'

export const StockReports = () => {
  const stock_reports = useSelector(selectAllStockRecords)
  console.log("Stock Reports", stock_reports)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(listStockReportsAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return(
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">All Stock Reports</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                </Grid>
              </Grid>
              {/* Stock Reports list */}
              <Table
                rows={stock_reports}
                columns={StockReportsColumns()}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
