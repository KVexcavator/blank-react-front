import { useParams } from "react-router-dom"
// import { deliveriesList } from "./list"
import { Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material"
import { Delivery } from "../../../api/types"
import { DeliveriesTableColumn } from "./elements/table-settings"
import { selectAllDeliveries } from "../../../redux/deliveries-management/select"
import { useSelector } from "react-redux"


export default function DeliveryDetails() {
  const deliveriesList = useSelector(selectAllDeliveries)
  const { id } = useParams()
  const currentDelivery = deliveriesList.find((d) => `${d.id}` === id) as Delivery
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} >
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Grid item xs={6} justifyContent={'flex-start'}>
                <Typography variant="h6">Delivery details</Typography>
              </Grid>
              <Box
                sx={{
                  p: 1,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },
                  gap: 1,
                  borderTop: 1
                }}
              >
                <DetailsCard title={DeliveriesTableColumn.Id} value={currentDelivery?.id} />
                <DetailsCard title={DeliveriesTableColumn.CellNumber} value={currentDelivery?.cell_number} />
                <DetailsCard title={DeliveriesTableColumn.ContractNumber} value={currentDelivery?.contract_number} />
                <DetailsCard title={DeliveriesTableColumn.IdNumber} value={currentDelivery?.id_number} />
                <DetailsCard title={DeliveriesTableColumn.Date} value={currentDelivery?.delivery_date} />
                <DetailsCard title={DeliveriesTableColumn.Status} value={currentDelivery?.delivery_status} />
                <DetailsCard title={DeliveriesTableColumn.OrderItemId} value={currentDelivery?.order_item_id} />
                <DetailsCard title={DeliveriesTableColumn.Amount} value={currentDelivery?.amount} />
                <DetailsCard title={DeliveriesTableColumn.Retries} value={currentDelivery?.delivery_retries} />
                <DetailsCard title={DeliveriesTableColumn.UserId} value={currentDelivery?.user_id} />
                <DetailsCard title={DeliveriesTableColumn.UserName} value={currentDelivery?.user_name} />
                <DetailsCard title={DeliveriesTableColumn.OrderId} value={currentDelivery?.order_id} />
                <DetailsCard title={DeliveriesTableColumn.VoucherPin} value={currentDelivery?.voucher_pin} />
                <DetailsCard title={DeliveriesTableColumn.VoucherSerialNumber} value={currentDelivery?.voucher_serial_number} />
                <DetailsCard title={DeliveriesTableColumn.VoucherType} value={currentDelivery?.voucher_type} />
              </Box>
              <Box
                sx={{
                  p: 1,
                  bgcolor: 'background.default',
                  display: 'grid',
                  gridTemplateColumns: { md: '1fr' },
                  gap: 1,
                  borderTop: 1
                }}
              >
                <DetailsCard title={DeliveriesTableColumn.Results} value={currentDelivery?.results} />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}


const DetailsCard = ({title, value}: any) => {
  return (
    <>
      <Card >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
