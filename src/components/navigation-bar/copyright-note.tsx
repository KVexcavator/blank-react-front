import { Link, Typography } from "@mui/material"

function CopyrightNote(props: any) {
  return (
      <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          {...props}
      >
          {'Copyright © '}
          <Link color="inherit" href="https://digitaltraverse.com/">
              Digital Traverse Technologies
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
          <br />
          {'All Rights Reserved. '}
      </Typography>
  )
}

export {CopyrightNote}