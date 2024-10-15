import { Button, Grid, TextField } from '@mui/material'
import { FormWrapper } from '../../../../components/wrapper/form-wrapper'
import { useForm } from 'react-hook-form'
import { getErrorMessage, hasError } from '../../../../shared/get-error-message'
import { Organization, OrganizationKeys } from '../../../../api/types';

interface OrganizationEditProps {
  formTitle: string,
  [OrganizationKeys.Title]?: string,
  onSubmit: (data: OrganizationFormData, reset:()=>void) => void
}

export type OrganizationFormData = Partial<Omit<Organization, 'id'>>

function OrganizationForm(props: OrganizationEditProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrganizationFormData>({
    defaultValues:{
      [OrganizationKeys.Title]: props[OrganizationKeys.Title],
    }
  })

  const onSubmit = (formData: OrganizationFormData) => {
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
              id="organizationTitle"
              label="Organization Title"
              fullWidth
              variant="standard"
              error={hasError(errors, OrganizationKeys.Title)}
              helperText={getErrorMessage(errors, OrganizationKeys.Title)}
              {...register(OrganizationKeys.Title, {
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

export { OrganizationForm }
