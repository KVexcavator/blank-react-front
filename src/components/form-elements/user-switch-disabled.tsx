import { FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material'

interface UserSelectDisabledProps extends SelectProps {
  label: string
  helperText: string
  error: boolean
}

export default function UserSelectDisabled (props: UserSelectDisabledProps) {
  let states = ['disabled', 'not disabled']
  return (
    <>
      <InputLabel id="{props.labelId}">{props.label}</InputLabel>
      <Select {...props}>
        {states.map((state) => (
          <MenuItem
            selected={props.defaultValue === states[1]}
            key={state}
            value={state}
          >
            {state}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
    </>
  );
}
