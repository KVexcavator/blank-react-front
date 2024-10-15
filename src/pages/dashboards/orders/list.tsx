import { Box, Button, Container, Grid, IconButton, Modal, Paper, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Table } from '../../../components/form-elements/table'
import { OrderColumns, OrdersDialogsTexts } from './elements/table-settings'
import { ChangeEvent, useEffect, useState } from 'react'
import {
  authorizeOrderAsync,
  fetchAllOrdersAsync,
  uploadOrderCsvFileAsync,
} from '../../../redux/order-management/thunks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectOrders } from '../../../redux/order-management/selector'
import { alertDialogActions } from '../../../redux/alert-dialog/slice'
import {
  AlertDialogEventName,
  AlertDialogPayload,
  addAlertDialogEventListener,
} from '../../../redux/alert-dialog/event'
import { listUsersAsync } from '../../../redux/users-management/thunks'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import { OrderFileUploader } from './elements/order_file_uploader'
import { OrderOrganizationSelect } from './elements/order-organization-select'

const style = {
  position: 'absolute' as 'absolute',
  top: '35%',
  left: '85%',
  transform: 'translate(-50%, -50%)',
  maxWidth: "25ch",
  margin: "auto",
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function Orders() {
  const orders = useSelector(selectOrders)
  const sortedOrders = [...orders].sort(function(a, b) {return b.id - a.id } )
  const dispatch = useDispatch<AppDispatch>()
  // modal state
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)
  // data form
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [organization, setOrganization] = useState('')

  useEffect(() => {
    dispatch(fetchAllOrdersAsync())
    dispatch(listUsersAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFile?.size > 0 && organization?.length){
      const formData = new FormData()
      formData.append('order[order_file]', selectedFile, selectedFile.name)
      formData.append('order[organization]', organization)

      try {
        await dispatch(uploadOrderCsvFileAsync(formData))
      } catch (error) {}
    }
    cleanForm()
    handleOpenCloseModal()
  }

  const cleanForm = () => {
    setSelectedFile(null)
    setOrganization('')
  }

  // const handleCsvUpload = (event: ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files
  //   if (files?.length && files?.length > 0) {
  //     dispatch(uploadOrderCsvFileAsync(files[0]))
  //   }
  // }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              {/* modal */}
              <Modal
                open={openModal}
                hideBackdrop ={true}
              >
                <Box component="form" onSubmit={submitForm}>
                  <Box sx={style}>
                    <IconButton
                      aria-label="close"
                      size="small"
                      onClick={() => setOpenModal(false)}
                      style={{float: 'right'}}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Box>
                      <OrderFileUploader
                        onFileSelect={(file: any) => setSelectedFile(file)}
                      />
                    </Box>
                    <Box style={{marginTop: "10px"}}>
                      <OrderOrganizationSelect
                        onOrganizationSelect={(string: string) => setOrganization(string) }
                      />
                    </Box>
                    <Box>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Continue
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Modal>
              {/* Header */}
              <Grid container xs={12} margin={2} flex={'row'}>
                <Grid item xs={6} justifyContent={'flex-start'}>
                  <Typography variant="h6">All Orders</Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={'flex'}
                  justifyContent={'flex-end'}
                  paddingRight={5}
                >
                  <Button
                    onClick={handleOpenCloseModal}
                    variant="contained"
                    component="label"
                    startIcon={<AddIcon />}
                  >
                    Upload Order
                  </Button>
                </Grid>
              </Grid>

              {/* Order list */}
              <Table
                rows={sortedOrders}
                columns={OrderColumns()}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
