import { Box, Button, Card, CardActions, CardContent, Container, SelectChangeEvent, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { putOrderItemEditMobileNumber } from "../../../api/order-management"

export default function DeliveryNewMobileNumber() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const handleSetNumberChange = (event: any) => {
    const { target: { value },} = event;
    setNumber(value)
  }

  const handleClick = (number: string) => {
    if (/^081[\d]{7}$/.test(number)){
      setError(false)
      setErrorMessage('')
      putOrderItemEditMobileNumber(id, number)
      navigate(`/dashboard/delivery/${id}/reschedule`)
    } else {
      setError(true)
      setErrorMessage("Incorrect entry.")
    }
  }

  return(
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Card sx={{ width: 340, height: 420 }}>
          <CardContent>
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '90%' }}}
              noValidate
              autoComplete="off"
            >
              <TextField
                error={error}
                id="new-mobile-number"
                label="081XXXXXXX"
                helperText={errorMessage}
                onChange={handleSetNumberChange}
              />
            </Box>
          </CardContent>
          <CardActions>
            <Button
                type="button"
                onClick={() => handleClick(number)}
                sx={{ marginTop: 2 }}
                variant="contained"
                fullWidth
            >
              Send and Go to Reschedule
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  )
}
