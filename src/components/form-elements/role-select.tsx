import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth_context'
import { AuthContextType } from '../../context/auth_type_context'

interface RoleSelectProps extends SelectProps {
  helperText: string
  error: boolean
}

const RoleSelect = (props: RoleSelectProps) => {
  const { auth } = useContext(AuthContext) as AuthContextType
  let roles = auth.role === 'admin' || 'super' ? ['user', 'admin', 'accountant'] : ['user']
  // in dev mode can help
  // let roles = ['admin', 'user', 'accountant']

  return (
    <>
      <InputLabel id="{props.labelId}">{props.label}</InputLabel>
      <Select {...props}>
        {roles.map((role) => (
          <MenuItem
            selected={props.defaultValue === roles[0]}
            key={role}
            value={role}
          >
            {role}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
    </>
  )
}

export { RoleSelect }
