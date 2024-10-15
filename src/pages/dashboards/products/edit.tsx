import { useDispatch, useSelector } from 'react-redux'
import { ProductForm, ProductFormData } from './elements/product-form'
import { AppDispatch } from '../../../redux/store'
import { updateProductAsync } from '../../../redux/products-management/thunks'
import { useParams } from 'react-router-dom'
import { selectAllProducts } from '../../../redux/products-management/selector'

const EditProduct = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector(selectAllProducts)
  const { id } = useParams()
  const currentProduct = products.find((p) => `${p.id}` === id)

  const handleSubmit = async (formData: ProductFormData) => {
    try {
      await dispatch(updateProductAsync({ ...formData, id: Number(id) }))
    } catch (error) {
      // do nothing
    }
  }
  return (
    <ProductForm
      formTitle="Edit product information"
      onSubmit={handleSubmit}
      {...currentProduct}
    />
  )
}

export { EditProduct }
