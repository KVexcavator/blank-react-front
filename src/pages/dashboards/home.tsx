import { Box, CardContent, Container, Grid, Typography } from '@mui/material'
import { CopyrightNote } from '../../components/navigation-bar/copyright-note'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth_context'
import { AuthContextType } from '../../context/auth_type_context'

export interface IDashboardHomeProps {}

export default function DashboardHome(props: IDashboardHomeProps) {
  const { auth } = useContext(AuthContext) as AuthContextType
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="body2">
              Current User:<br />
              id: {auth.id}<br />
              First Name: {auth.first_name}<br />
              Last Name: {auth.last_name}<br />
              email: {auth.email}<br />
              role: {auth.role}<br />
            </Typography>
          </CardContent>
        </Box>
        <CopyrightNote />
      </Container>
    </>
  )
}
