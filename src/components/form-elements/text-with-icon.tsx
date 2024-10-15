import { Tooltip, Typography } from '@mui/material'

interface TextWithIconProps {
  Icon?: any
  textColor?: string
  textVariant?: any
  text: string
  tooltips?: string | null
}

export const TextWithIcon = ({ Icon, ...rest }: TextWithIconProps) => {
  return (
    <Tooltip title={rest.tooltips || null}>
    <div style={{display: 'flex', justifyContent:"flex-start"}}>
      {Icon && (
        <Icon
          color="primary"
          sx={{
            marginRight: 1,
            verticalAlign: 'end',
            fontSize: 24,
          }}
        />
      )}
      <Typography
        color={rest.textColor || 'primary'}
        variant={rest.textVariant || "body"}
        align="right"
        marginRight={5}
      >
        {rest.text}
      </Typography>
    </div>
    </Tooltip>
  )
}
