import { Container, Grid } from '@mui/material'
import { CopyrightNote } from '../../components/navigation-bar/copyright-note'

export interface AdminHomeProps {}

export default function AdminHome(props: AdminHomeProps) {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
         <span>There may be notes here or ToDo ...</span>
        </Grid>
        <CopyrightNote />
      </Container>
    </>
  )
}
