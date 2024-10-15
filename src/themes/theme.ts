import { createTheme, Theme } from '@mui/material/styles'

export enum Colors {
  Blue = '#1967d2',
  BlueVeryLight='#cee0f9',
  BlueLight = '#9dc1f3',
  CelestialBlue = '#33a1fd',
  GunMetal = '#119da4',
  LemonChiffon = '#faf0ca',
  NaplesYellow = '#f4d35e'
}

const theme:Theme = createTheme({
    typography: {
        fontFamily: "Lato, sans-serif"
      },
    palette: {
        primary: {
            main: Colors.Blue,
        },
        secondary: {
            main: Colors.GunMetal,
        },
    },
})

export { theme }
