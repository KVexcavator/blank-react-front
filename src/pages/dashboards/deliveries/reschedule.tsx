import { Alert, Button, Card, CardActions, CardContent, Container } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import DtPicker from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import { putDeliveryReschedule } from "../../../api/deliveries-management"

export default function DeliveryReschedule() {
  const [date, setDate] = useState<any | null>()
  const { id } = useParams()
  const [alert, setAlert] = useState<boolean>(false)

  const handleClick = (date: any) => {
    if (date !== undefined){
      setAlert(false)
      putDeliveryReschedule(id, date)
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
              Reschedule
            </Button>
          </CardActions>
          {alert === true && (
            <Alert severity="error">
              Date must be selected!
            </Alert>
          )}
        </Card>
      </Container>
    </>
  )
}
