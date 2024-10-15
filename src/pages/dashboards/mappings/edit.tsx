import { AppDispatch } from '../../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  ProductMappingForm,
  ProductMappingFormData,
} from './elements/product-mapping-form'
import { updateProductMappingsAsync } from '../../../redux/product-mapping/thunks'
import { useParams } from 'react-router-dom'
import { selectAllProductMappings } from '../../../redux/product-mapping/selector'

const EditProductMapping = () => {
  const dispatch = useDispatch<AppDispatch>()
  const mappings  = useSelector(selectAllProductMappings)
  const { mappingId } = useParams()
  const currentMapping = mappings.find((p) => `${p.id}` === mappingId)

  const handleSubmit = async (
    formData: ProductMappingFormData,
    reset: () => void
  ) => {
    try {
      await dispatch(updateProductMappingsAsync({ ...formData, id: mappingId }))
      reset()
    } catch (error) {}
  }
  return (
    <ProductMappingForm
      formTitle="Edit product mapping information"
      onSubmit={handleSubmit}
      {...currentMapping}
    />
  )
}

export { EditProductMapping }
