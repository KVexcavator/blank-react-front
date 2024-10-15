import {
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../redux/products-management/selector'

interface ProductSelectProps extends SelectProps {
  helperText: string
  error: boolean
}

const ProductSelect = (props: ProductSelectProps) => {
  const products = useSelector(selectAllProducts)
  return (
    <>
      <InputLabel id="{props.labelId}">{props.label}</InputLabel>
      <Select {...props}>
        {products.map((product) => (
          <MenuItem
            selected={props.defaultValue === product.product_name}
            key={product.product_name}
            value={product.product_name}
          >
            {product.product_name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={props.error}>{props.helperText}</FormHelperText>
    </>
  )
}

export { ProductSelect }
