import { Alert, Button, Card, CardActions, CardContent, Container } from "@mui/material"
import { useState } from "react"
import DtPicker from "react-calendar-datetime-picker"
import { useParams } from "react-router-dom"
import { putDeliveryMarkDelivered } from "../../../api/deliveries-management"

export default function DeliveryMarkDelivered() {

  // {year: 2023, month: 6, day: 30}
  const [date, setDate] = useState<any>()
  const { id } = useParams()
  const [alert, setAlert] = useState<boolean>(false)

  const handleClick = (date: any) => {
    if (date !== undefined){
      setAlert(false)
      const today = new Date()
      const newDate = new Date(date.year, date.month - 1, date.day)
      newDate.setDate(newDate.getDate() + 1)
      if(newDate < today) {
        setAlert(true)
      } else {
        setAlert(false)
        putDeliveryMarkDelivered(id, date)
      }
    } else {
      setAlert(true)
    }
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card sx={{ width: 340, height: 420 }}>
          <CardContent>
            <DtPicker
              onChange={setDate}
              type="single"
              placeholder='select date'
            />
          </CardContent>
          <CardActions>
            <Button
                type="button"
                onClick={() => handleClick(date)}
                sx={{ marginTop: 2 }}
                variant="contained"
                fullWidth
            >
              Mark as Delivered
            </Button>
          </CardActions>
          {alert === true && (
            <Alert severity="error">
              Date must be selected and not less than today!
            </Alert>
          )}
        </Card>
      </Container>
    </>
  )
}
