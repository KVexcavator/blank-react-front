import { Button, Grid, TextField } from '@mui/material'
import { FormWrapper } from '../../../../components/wrapper/form-wrapper'
import { useForm } from 'react-hook-form'
import { getErrorMessage, hasError } from '../../../../shared/get-error-message'
import { Product, ProductKeys } from '../../../../api/types';

interface ProductEditProps {
  formTitle: string,
  [ProductKeys.ProductName]?: string,
  [ProductKeys.ProductPrice]?: number,
  [ProductKeys.Validity]?: number,
  onSubmit: (data: ProductFormData, reset:()=>void) => void
}

export type ProductFormData = Partial<Omit<Product, 'id'>>

function ProductForm(props: ProductEditProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues:{
      [ProductKeys.ProductName]: props[ProductKeys.ProductName],
      [ProductKeys.ProductPrice]: props[ProductKeys.ProductPrice],
      [ProductKeys.Validity]: props[ProductKeys.Validity]
    }
  })

  const onSubmit = (formData: ProductFormData) => {
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
              id="productName"
              label="Product Name"
              fullWidth
              variant="standard"
              error={hasError(errors, ProductKeys.ProductName)}
              helperText={getErrorMessage(errors, ProductKeys.ProductName)}
              {...register(ProductKeys.ProductName, {
                required: true,
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="productPrice"
              label="Product Price"
              fullWidth
              type="number"
              variant="standard"
              error={hasError(errors, ProductKeys.ProductPrice)}
              helperText={getErrorMessage(errors, ProductKeys.ProductPrice)}
              {...register(ProductKeys.ProductPrice, {
                required: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid container xs={12} sm={6} marginTop={5}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="productValidity"
              label="Product Validity"
              fullWidth
              type="number"
              variant="standard"
              error={hasError(errors, ProductKeys.Validity)}
              helperText={getErrorMessage(errors, ProductKeys.Validity)}
              {...register(ProductKeys.Validity, {
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

export { ProductForm }
