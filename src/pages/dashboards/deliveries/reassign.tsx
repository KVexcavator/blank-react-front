import { Button, Card, CardActions, CardContent, Container, MenuItem, Select, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAvailableVouchersForDeliveryAsync } from "../../../redux/stock-management/selector"
import { AppDispatch } from "../../../redux/store"
import { fetchAvailableVouchersForDeliveryAsync } from "../../../redux/stock-management/thunks"
import { putDeliveryReassign } from "../../../api/deliveries-management"

export default function DeliveryReassign() {
  // delivery id
  const { id } = useParams()
  const vouchers = useSelector(selectAvailableVouchersForDeliveryAsync) || []
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAvailableVouchersForDeliveryAsync(id as string))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [voucherId, setVoucherId] = useState<any | null>(null)
  const handleVoucherChange = (event: any) => {
    setVoucherId(event.target.value)
  }

  const handleClick = async (voucherId: string) => {
    if(voucherId !== null){
      const deliveryId = id
      putDeliveryReassign(deliveryId, voucherId)
    }
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Card sx={{ width: 450, height: 220 }}>
        <CardContent>
          <Typography component="h1" variant="h5" align="left">
            Select New Voucher
          </Typography>
          <Select
            sx={{ width: 420 }}
            value={voucherId}
            onChange={handleVoucherChange}
          >
            {vouchers.map((v: any) => (
              <MenuItem
                key={v.id}
                value={v.id}
              >
                {`${v.delears_name}, expiry: ${v.voucher_expiry_date}`}
              </MenuItem>
            ))}
          </Select>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            type="button"
            onClick={() => handleClick(voucherId)}
            sx={{ marginTop: 2 }}
            variant="contained"
            disabled={voucherId === null ? true : false}
          >
            Reassign with new Voucher
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
