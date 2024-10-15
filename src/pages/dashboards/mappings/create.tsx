import { AppDispatch } from '../../../redux/store'
import { useDispatch } from 'react-redux'
import { ProductMappingForm, ProductMappingFormData } from './elements/product-mapping-form'
import { createProductMappingsAsync } from '../../../redux/product-mapping/thunks'

const CreateProductMapping = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSubmit = async (formData: ProductMappingFormData, reset:()=>void) => {
    try {
      await dispatch(createProductMappingsAsync(formData))
      reset()
    } catch (error) {}
  }
  return (
    <ProductMappingForm formTitle="Add product mapping information" onSubmit={handleSubmit} />
  )
}

export { CreateProductMapping }