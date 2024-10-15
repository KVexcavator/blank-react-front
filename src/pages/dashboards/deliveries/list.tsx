import { useContext, useEffect, useState } from 'react'
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { Table } from '../../../components/form-elements/table'
import { DeliveryColumns } from './elements/table-settings'
import { selectAllDeliveries } from '../../../redux/deliveries-management/select'
import { useDispatch, useSelector } from 'react-redux'
import { downloadDeliveriesReportPdfFileAsync, downloadDeliveriesReportXlsFileAsync, listDeliveriesAsync } from '../../../redux/deliveries-management/thunks'
import { AppDispatch } from '../../../redux/store'
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { AuthContext } from '../../../context/auth_context'
import { AuthContextType } from '../../../context/auth_type_context'


export const Deliveries = () => {

  // const deliveriesList = fetchAllDeliveries()
  const deliveriesList = useSelector(selectAllDeliveries)
  const dispatch = useDispatch<AppDispatch>()
  const { auth, changeAuth } = useContext(AuthContext) as AuthContextType

  useEffect(() => {
    dispatch(listDeliveriesAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [mobileNumber, setMobileNumber] = useState<string | null>(null)
  const [contractNumber, setContractNumber ] = useState<string | null>(null)
  const [idNumber, setIdNumber] = useState<string | null>(null)
  const [deliveries, setDeliveries] = useState<any>(deliveriesList)
  const sortedDeliveries = [...deliveries].sort(function(a, b) {return  Number(b.id) - Number(a.id) } )
  // console.log(deliveries)
  const handleDeliveriesSearchMobileNumberChange = (value: any) => {
    setMobileNumber(value)
    const filteredData = deliveriesList.filter((el) => {
      if (mobileNumber === null)  return el
      else {
        return el.cell_number.toString().toLowerCase().includes(value.toLowerCase().trim())
      }
    })
    setDeliveries(filteredData)
  }
  const handleDeliveriesSearchContractNumberChange = (value: any) => {
    setContractNumber(value)
    const filteredData = deliveriesList.filter((el) => {
      if (contractNumber === null)  return el
      else {
        return el.contract_number.toString().toLowerCase().includes(value.toLowerCase().trim())
      }
    })
    setDeliveries(filteredData)
  }
  const handleDeliveriesSearchIdChange = (value: any) => {
    setIdNumber(value)
    const filteredData = deliveriesList.filter((el) => {
      if (idNumber === null)  return el
      else {
        return el.id_number.toString().toLowerCase().includes(value.toLowerCase().trim())
      }
    })
    setDeliveries(filteredData)
  }

  const handleDeliveriesReportPdfFileDownload = () => {
    dispatch(downloadDeliveriesReportPdfFileAsync())
  }

  const handleDeliveriesReportXlsFileDownload = () => {
    dispatch(downloadDeliveriesReportXlsFileAsync(auth.id.toString()))
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
                  <Typography variant="h6">All Deliveries</Typography>
                </Grid>
                <Grid
                  item
                  xs={9}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  <TextField
                    sx={{ width: 300, m: 0.1 }}
                    label="Search by Mobile Number"
                    type='search'
                    value={mobileNumber}
                    onChange={(e) => handleDeliveriesSearchMobileNumberChange(e.target.value)}
                  />
                  <TextField
                    sx={{ width: 300, m: 0.1 }}
                    label="Search by Contract Number"
                    type='search'
                    value={contractNumber}
                    onChange={(e) => handleDeliveriesSearchContractNumberChange(e.target.value)}
                  />
                  <TextField
                    sx={{ width: 300, m: 0.1 }}
                    label="Search by ID Number"
                    type='search'
                    value={idNumber}
                    onChange={(e) => handleDeliveriesSearchIdChange(e.target.value)}
                  />
                  <Button
                    style={{marginLeft: "5px"}}
                    onClick={handleDeliveriesReportPdfFileDownload}
                    variant="contained"
                    component="label"
                    startIcon={<VerticalAlignBottomIcon />}
                  >
                    PDF
                  </Button>
                  <Button
                    style={{marginLeft: "5px"}}
                    onClick={handleDeliveriesReportXlsFileDownload}
                    variant="contained"
                    component="label"
                    startIcon={<VerticalAlignBottomIcon />}
                  >
                    XLS
                  </Button>
                </Grid>
              </Grid>
              {/* Table */}
              <Table
                rows={sortedDeliveries}
                columns={DeliveryColumns()}
                autoHeight
                // onRowClick={handleRowClick}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
