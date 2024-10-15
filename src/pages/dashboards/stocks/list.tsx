import { Box, Button, Container, Grid, IconButton, Modal, Paper, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add'
import { Table } from '../../../components/form-elements/table'
import { StockColumns } from './elements/table-settings'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../../redux/store'
import { selectAllStocks } from '../../../redux/stock-management/selector'
import {
  fetchAllStocksAsync,
  uploadStockCsvFileAsync,
  // changeStockStatusAsync,
} from '../../../redux/stock-management/thunks'
import { StockStatus } from '../../../api/types'
import { FileUploader } from './elements/file_uploader'
import { StockProductSelect } from './elements/stock-product-select'
import { CheckboxActive } from './elements/checkbox-active'

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


export default function Stocks() {
  const stocks = useSelector(selectAllStocks)
  const dispatch = useDispatch<AppDispatch>()
  // modal state
  const [openModal, setOpenModal] = useState(false)
  const handleOpenCloseModal = () => setOpenModal(!openModal)
  // data form
  const [selectedFile, setSelectedFile] = useState<any>(null)
  const [product, setProduct] = useState('')
  const [active, setActive] = useState(true)

  useEffect(() => {
    dispatch(fetchAllStocksAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedFile?.size > 0 && product?.length){
      const formData = new FormData()
      formData.append('virtual[virtual_file]', selectedFile, selectedFile.name)
      formData.append('virtual[product_name]', product)
      formData.append('virtual[activated]', active.toString())

      try {
        await dispatch(uploadStockCsvFileAsync(formData))
      } catch (error) {}
    }
    cleanForm()
    handleOpenCloseModal()
  }

  const cleanForm = () => {
    setSelectedFile(null)
    setProduct('')
    setActive(true)
  }

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
                      <FileUploader
                        onFileSelect={(file: any) => setSelectedFile(file)}
                      />
                    </Box>
                    <Box>
                      <CheckboxActive
                        onActiveCheck={(item: any) => setActive(item)}
                      />
                    </Box>
                    <Box>
                      <StockProductSelect
                        onProductSelect={(string: string) => setProduct(string) }
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
                  <Typography variant="h6">All Stocks</Typography>
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
                    Upload Stock
                  </Button>
                </Grid>
              </Grid>
              {/* stocks list */}
              <Table
                rows={stocks}
                columns={StockColumns()}
                autoHeight
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
