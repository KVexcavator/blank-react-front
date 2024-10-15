import { Container, Grid, Paper, Typography, styled } from '@mui/material'
import { ReactNode } from 'react'

interface FormWrapperProps {
  children: ReactNode
  formTitle: string
}

const Spacer = styled('div')(()=>({
 marginTop: '50px'
}))

function FormWrapper(props: FormWrapperProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid item xs={12}>
        <Paper elevation={1} sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
          <Typography component="h1" variant="h5" align="left">
            {props.formTitle}
          </Typography>
          <Spacer/>
          {props.children}
        </Paper>
      </Grid>
    </Container>
  )
}

export { FormWrapper }
