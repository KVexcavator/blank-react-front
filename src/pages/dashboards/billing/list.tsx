import { Table } from '../../../components/form-elements/table'
import { BillingColumns } from './elements/table-setting'
import { Box, Button, Container, Grid, Paper, Tooltip, Typography } from "@mui/material"
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom'
import { useEffect, useState } from "react"
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import { BillingOrganizationSelect } from './elements/billing-organization-select'
import { downloadBillingReportXlsFileAsync, fetchBillingAsync } from '../../../redux/billing-management/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectBilling } from '../../../redux/billing-management/select'

export const Billing = () => {
  const res = useSelector(selectBilling)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const d = new Date()
    const todayDate = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    setStartDate('2020-10-1')
    setEndDate(todayDate)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const [billing, setBilling] = useState<any>({})
  const [showTable, setShowTable] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [organization, setOrganization] = useState<string>('all')

  const handleBillingShowReport = () => {
    dispatch(fetchBillingAsync({start: startDate, end: endDate, organization: organization}))
    setBilling(res)
    setShowTable(true)
  }

  const handleBillingReportXlsFileDownload = () => {
    dispatch(downloadBillingReportXlsFileAsync({start: startDate, end: endDate, organization: organization}))
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={3} justifyContent={'flex-start'}>
                  <Typography variant="h6">Billing Report</Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  {/* datepiker date start */}
                  <Box sx={{paddingRight: 1}}>
                    <DtPicker
                      onChange={(obj) => {
                        setShowTable(false);
                        setStartDate(`${obj?.year}-${obj?.month}-${obj?.day}`);
                      }}
                      type="single"
                      placeholder='select start date'
                    />
                  {/* datepiker date end */}
                    <Box sx={{height: 0.05}}></Box>
                    <DtPicker
                      onChange={(obj) => {
                        setShowTable(false);
                        setEndDate(`${obj?.year}-${obj?.month}-${obj?.day}`);
                      }}
                      type="single"
                      placeholder='select end date'
                    />
                  </Box>
                  {/* selector organization */}
                  <Box sx={{width: 200 , height: 28}}>
                    <BillingOrganizationSelect
                      onOrganizationSelect={(string: string) => setOrganization(string) }
                    />
                  </Box>
                  <Tooltip title="You must double click to show !">
                    <Button
                      style={{marginLeft: "5px"}}
                      onClick={handleBillingShowReport}
                      variant="contained"
                      component="label"
                    >
                      Show
                    </Button>
                  </Tooltip>
                  <Button
                    style={{marginLeft: "5px"}}
                    onClick={handleBillingReportXlsFileDownload}
                    variant="contained"
                    component="label"
                    startIcon={<VerticalAlignBottomIcon />}
                  >
                    XLS
                  </Button>
                </Grid>
              </Grid>
              {/* Table */}
              {showTable && (
                <Table
                rows={billing}
                columns={BillingColumns()}
                autoHeight
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
