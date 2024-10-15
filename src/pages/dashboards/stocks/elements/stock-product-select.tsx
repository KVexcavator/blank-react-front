import { useSelector } from "react-redux"
import { selectAllProducts } from "../../../../redux/products-management/selector"
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"


export const StockProductSelect = ({onProductSelect}: any) => {

  const products = useSelector(selectAllProducts)

  const handleProductChange = (e: any) => {
    onProductSelect(e.target.value as string)
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="stock-product-select-label">Product</InputLabel>
        <Select
          labelId="stock-product-select-label"
          id="stock-product-select"
          label="product"
          onChange={handleProductChange}
        >
          {products.map((product) => (
            <MenuItem
              key={product.product_name}
              value={product.product_name}
            >
              {product.product_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
