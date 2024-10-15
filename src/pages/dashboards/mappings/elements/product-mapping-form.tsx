import { Button, Grid, TextField } from '@mui/material'
import { FormWrapper } from '../../../../components/wrapper/form-wrapper'
import { useForm } from 'react-hook-form'
import { getErrorMessage, hasError } from '../../../../shared/get-error-message'
import {ProductMappingKeys, ProductMapping } from '../../../../api/types';
import { ProductMappingTableHeader } from './table-settings'
import { ProductSelect } from '../../../../components/form-elements/product-select'

interface ProductMappingEditProps {
  formTitle: string,
  [ProductMappingKeys.CustomerProduct]?: string,
  [ProductMappingKeys.CarrierProduct]?: string,
  [ProductMappingKeys.Quantity]?: string,
  onSubmit: (data: ProductMappingFormData, reset:()=>void) => void
}

export type ProductMappingFormData = Partial<Omit<ProductMapping, 'id'>>

function ProductMappingForm(props: ProductMappingEditProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductMappingFormData>({
    defaultValues:{
      [ProductMappingKeys.CustomerProduct]: props[ProductMappingKeys.CustomerProduct],
      [ProductMappingKeys.CarrierProduct]: props[ProductMappingKeys.CarrierProduct],
      [ProductMappingKeys.Quantity]: props[ProductMappingKeys.Quantity]
    }
  })

  const onSubmit = (formData: ProductMappingFormData) => {
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
            <ProductSelect
              required
              id={ProductMappingKeys.CarrierProduct}
              label={ProductMappingTableHeader[ProductMappingKeys.CarrierProduct]}
              fullWidth
              variant="standard"
              defaultValue={props[ProductMappingKeys.CarrierProduct]}
              error={hasError(errors, ProductMappingKeys.CarrierProduct)}
              helperText={getErrorMessage(errors, ProductMappingKeys.CarrierProduct)}
              {...register(ProductMappingKeys.CarrierProduct, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id={ProductMappingKeys.CustomerProduct}
              label={ProductMappingTableHeader[ProductMappingKeys.CustomerProduct]}
              fullWidth
              variant="standard"
              error={hasError(errors, ProductMappingKeys.CustomerProduct)}
              helperText={getErrorMessage(errors, ProductMappingKeys.CustomerProduct)}
              {...register(ProductMappingKeys.CustomerProduct, {
                required: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} sm={6} marginTop={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id={ProductMappingKeys.Quantity}
              label={ProductMappingTableHeader[ProductMappingKeys.Quantity]}
              fullWidth
              type="number"
              variant="standard"
              error={hasError(errors, ProductMappingKeys.Quantity)}
              helperText={getErrorMessage(errors, ProductMappingKeys.Quantity)}
              {...register(ProductMappingKeys.Quantity, {
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

export { ProductMappingForm }
