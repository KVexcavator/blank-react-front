import { Typography } from '@mui/material'
import InstallMobileIcon from '@mui/icons-material/InstallMobile'

export const HeaderLogo = () => {
  return (
    <>
      <InstallMobileIcon
        color="primary"
        sx={{
          marginRight: 1,
          verticalAlign: 'end',
          fontSize: 24,
        }}
      />
      <Typography color="primary" variant="h6" align="right" marginRight={5}>
        Recharge Pro
      </Typography>
    </>
  )
}
