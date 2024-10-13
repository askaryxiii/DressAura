import { useEffect, useState } from 'react'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProducts } from '../../../context/Products/ProductsContext'

const EditProduct = () => {
  const navigate = useNavigate()
  const { productId } = useParams()
  const { getProductById, product, updateProduct } = useProducts()
  const [productInfo, setProductInfo] = useState({
    title: '',
    description: '',
    price: '',
    stock: '',
    image: '',
  })
  useEffect(() => {
    getProductById(productId)
  }, [productId])
  useEffect(() => {
    if (product) {
      setProductInfo(prev => ({
        ...prev,
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
      }))
    }
  }, [product])

  const submitHandler = e => {
    e.preventDefault()
    updateProduct(productId, productInfo)
    navigate(`/admin/products/${productId}`)
  }

  return (
    <Card
      shadow={true}
      className='flex items-center text-white h-[90vh] bg-[#021526] mx-8 gap-8'
    >
      <Typography variant='h4' className='mt-4'>
        Edit Product
      </Typography>

      <form
        className='w-full flex flex-col items-center justify-evenly gap-8 px-8'
        onSubmit={submitHandler}
      >
        <div className='gap-8 flex items-center w-full '>
          <Input
            label='ProductName'
            value={productInfo?.title || ''}
            onChange={e =>
              setProductInfo(prev => ({ ...prev, title: e.target.value }))
            }
            color='green'
            className='text-gray-400 text-lg'
          />
          <Input
            label='ProductDescription'
            value={productInfo?.description || ''}
            onChange={e =>
              setProductInfo(prev => ({
                ...prev,
                description: e.target.value,
              }))
            }
            color='green'
            className='text-gray-400 text-lg'
          />
        </div>
        <div className='w-full gap-8 flex items-center'>
          <Input
            label='ProductPrice'
            value={productInfo?.price || 0}
            onChange={e =>
              setProductInfo(prev => ({
                ...prev,
                price: e.target.value,
              }))
            }
            color='green'
            className='text-gray-400 text-lg'
          />
          <Input
            label='Stock'
            value={productInfo?.stock || 0}
            onChange={e =>
              setProductInfo(prev => ({
                ...prev,
                stock: e.target.value,
              }))
            }
            color='green'
            className='text-gray-400 text-lg'
          />
        </div>
        <div className='w-full gap-8 flex items-center'>
          <Input
            label='ProductThumbnail'
            value={productInfo?.image || ''}
            onChange={e =>
              setProductInfo(prev => ({
                ...prev,
                image: e.target.value,
              }))
            }
            color='green'
            className='text-gray-400 text-lg'
          />
        </div>

        <Button
          className='text-lg font-normal'
          type='submit'
          color={'green'}
          fullWidth
        >
          Edit Product
        </Button>
      </form>
    </Card>
  )
}

export default EditProduct
