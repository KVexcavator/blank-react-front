import { useDispatch } from 'react-redux'
import { ProductForm, ProductFormData } from './elements/product-form'
import { AppDispatch } from '../../../redux/store'
import { createProductAsync } from '../../../redux/products-management/thunks'

const CreateProduct = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (formData: ProductFormData, reset:()=>void) => {
    try {
      await dispatch(createProductAsync(formData))
      reset()
    } catch (error) {}
  }
  return (
    <ProductForm formTitle="Add product information" onSubmit={handleSubmit} />
  )
}

export { CreateProduct }
