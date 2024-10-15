import { Box, Button, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField } from '@mui/material'
import { FormWrapper } from '../../../../components/wrapper/form-wrapper'
import { useForm } from 'react-hook-form'
import { getErrorMessage, hasError } from '../../../../shared/get-error-message'
import { User, UserKeys } from '../../../../api/types'
import { RoleSelect } from '../../../../components/form-elements/role-select'
import UserSelectDisabled from '../../../../components/form-elements/user-switch-disabled'
import UserPasswordSet from '../../../../components/form-elements/user-password-set'
import { useSelector } from 'react-redux';
import { selectAllOrganizations } from '../../../../redux/organizations-management/selector';
import { useState } from 'react'

interface UserEditProps {
  formTitle: string,
  [UserKeys.FirstName]?: string,
  [UserKeys.LastName]?: string,
  [UserKeys.Email]?: string,
  [UserKeys.Role]?: string,
  [UserKeys.Disabled]?: string,
  [UserKeys.Organizations]?: Array<string>,
  [UserKeys.PasswordSet]?: string
  onSubmit: (data: UserFormData, reset:()=>void) => void
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    }
  }
}

export type UserFormData = Partial<Omit<User, 'id'>>

function UserForm(props: UserEditProps) {

  const organizations = useSelector(selectAllOrganizations)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues:{
      [UserKeys.FirstName]: props[UserKeys.FirstName],
      [UserKeys.LastName]: props[UserKeys.LastName],
      [UserKeys.Email]: props[UserKeys.Email],
      [UserKeys.Role]: props[UserKeys.Role],
      [UserKeys.Disabled]: props[UserKeys.Disabled],
      [UserKeys.Organizations]: props[UserKeys.Organizations],
      [UserKeys.PasswordSet]: props[UserKeys.PasswordSet]
    }
  })

  // const [orgs, setOrgs] = useState<any>(["SuperPuper","Ekibastyzugol"])
  const [orgs, setOrgs] = useState<any>(props[UserKeys.Organizations] || [])
  const handleOrgsChange = (event: SelectChangeEvent<typeof orgs>) => {
    const { target: { value },} = event;
    setOrgs(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const [currentRole, setCurrentRole] = useState<any>(props[UserKeys.Role] || 'user')
  const handleRoleChange = (event: SelectChangeEvent<typeof currentRole>) => {
    const { target: { value },} = event;
    setCurrentRole(value)
  }

  const onSubmit = (formData: UserFormData) => {
    props.onSubmit(formData, reset)
  }

  const onCancel = () => {
    window.history.back()
  }

  return (
    <FormWrapper formTitle={props.formTitle}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="userFirstName"
              label="User First Name"
              fullWidth
              variant="standard"
              error={hasError(errors, UserKeys.FirstName)}
              helperText={getErrorMessage(errors, UserKeys.FirstName)}
              {...register(UserKeys.FirstName, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="userLastName"
              label="User Last Name"
              fullWidth
              variant="standard"
              error={hasError(errors, UserKeys.LastName)}
              helperText={getErrorMessage(errors, UserKeys.LastName)}
              {...register(UserKeys.LastName, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="userEmail"
              label="User Email"
              fullWidth
              variant="standard"
              error={hasError(errors, UserKeys.Email)}
              helperText={getErrorMessage(errors, UserKeys.Email)}
              {...register(UserKeys.Email, {
                required: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} sm={6} marginTop={5}>
          <Grid item xs={12} sm={6}>
            <RoleSelect
              required
              label="User Role"
              fullWidth
              variant="standard"
              value={currentRole}
              error={hasError(errors, UserKeys.Role)}
              helperText={getErrorMessage(errors, UserKeys.Role)}
              {...register(UserKeys.Role, {
                required: true,
              })}
              onChange={handleRoleChange}
            />
          </Grid>
        </Grid>
        {currentRole === 'user' && (
          <Grid container xs={12} sm={6} marginTop={5}>
            <Grid item xs={12} sm={6}>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="{props.labelId}">User Organization</InputLabel>
                <Select
                  id="multiple-chip"
                  multiple
                  error={hasError(errors, UserKeys.Organizations)}
                  {...register(UserKeys.Organizations, {
                    required: currentRole=== 'admin' ? false : true
                  })}
                  value={orgs}
                  onChange={handleOrgsChange}
                  input={<OutlinedInput id="select-multiple-chip" label="User Organization" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value: any) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {organizations.map((organization) => (
                    <MenuItem
                      key={organization.id}
                      value={organization.title}
                    >
                      {organization.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <UserSelectDisabled
              required
              label="User Disabled"
              fullWidth
              variant="standard"
              defaultValue={props[UserKeys.Disabled]}
              error={hasError(errors, UserKeys.Disabled)}
              helperText={getErrorMessage(errors, UserKeys.Disabled)}
              {...register(UserKeys.Disabled, {
                required: true,
              })}
            />

          </Grid>
          <Grid item xs={12} sm={6}>
            <UserPasswordSet
              required
              label="Password Set"
              fullWidth
              variant="standard"
              defaultValue={props[UserKeys.PasswordSet]}
              error={hasError(errors, UserKeys.PasswordSet)}
              helperText={getErrorMessage(errors, UserKeys.PasswordSet)}
              {...register(UserKeys.PasswordSet, {
                required: true,
              })}
            />
          </Grid>
        </Grid>

        <Grid
          container
          sm={12}
          xs={12}
          marginTop={5}
          flexDirection="column"
          alignItems="flex-end"
        >
          <Grid item sm={12} xs={12} justifyContent="space-between">
            <Button
              type="button"
              onClick={onCancel}
              variant="outlined"
              sx={{ marginRight: 2 }}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  )
}

export { UserForm }
