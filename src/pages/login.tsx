import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { CopyrightNote } from '../components/navigation-bar/copyright-note'
import { Box, TextField, Alert } from '@mui/material'
import { postUserApproved, postLoginUser, loginUserWithNewPassword } from '../api/user-management'
import { HttpRequest } from '../api/axios'
import { AuthContextType } from '../context/auth_type_context'
import { AuthContext } from '../context/auth_context'


const status = {
  start: {
    name: "start",
    text: "Enter your email address if you have received an account creation confirmation from the Administrator."
  },
  passportized: {
    name: "passportized",
    text: "Enter your email and password. If you have forgotten your password, please contact the Administrator."
  },
  unpassportized: {
    name: "unpassportized",
    text: "Enter your email address and create a password."
  },
}



function Login() {
  const { auth ,changeAuth } = useContext(AuthContext) as AuthContextType
  const [approved, setApproved] = useState<boolean | null>(null)
  const [isStatusLogin, setStatusLogin] = useState<string | null>(null)
  const [login, setLogin] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isStatusLogin === status.start.name) {
      const data = new FormData(event.currentTarget)
      const email = data.get("email")?.toString()
      postUserApproved(email)
        .then((v) => {
          setApproved(v.approved)
          if(approved === true){
            if(v.has_password === true){
              setStatusLogin(status.passportized.name)
            } else {
              setStatusLogin(status.unpassportized.name)
            }
          } else {
            setStatusLogin(status.start.name)
          }})
    } else if (isStatusLogin === status.passportized.name) {
      const data = new FormData(event.currentTarget)
      const email = data.get("email")?.toString()
      const password = data.get("password")?.toString()
      const result = await postLoginUser({email, password})
      changeAuth({
        id: result.id,
        first_name: result.first_name,
        last_name: result.last_name,
        email: result.email,
        role: result.role,
        authentication_token: result.authentication_token
      })
      setLogin(true)
    } else if (isStatusLogin === status.unpassportized.name) {
      const data = new FormData(event.currentTarget)
      const email = data.get("email")?.toString()
      const password = data.get("password")?.toString()
      const confirm_password = data.get("confirm-password")?.toString()
      if( password === confirm_password ){
        const result = await loginUserWithNewPassword({email, password})
        changeAuth({
          id: result.id,
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email,
          role: result.role,
          authentication_token: result.authentication_token
        })
        setLogin(true)
      }
    }
  }

  useEffect(() => {
    setStatusLogin(status.start.name)
    if(login === true){
      HttpRequest.defaults.headers.common['Auth-token'] = auth.authentication_token
      navigate('/dashboard/home')
    }
  }, [login, auth, navigate])

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Alert
          variant="outlined"
          severity="info"
          sx={{ ml: 5, mr: 5, mt: 2, mb: 2 }}
        >
          {isStatusLogin === status.start.name && (
            status.start.text
          )}
          {isStatusLogin === status.passportized.name && (
            status.passportized.text
          )}
          {isStatusLogin === status.unpassportized.name && (
            status.unpassportized.text
          )}
        </Alert>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {isStatusLogin === status.passportized.name && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          )}
          {isStatusLogin === status.unpassportized.name &&  (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm password"
                type="password"
                id="confirm-password"
                autoFocus = {false}
              />
            </>
          )}
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
      <CopyrightNote sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}

export { Login }
