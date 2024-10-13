import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Input, Button, Typography } from '@material-tailwind/react'
import { useProducts } from '../../../context/Products/ProductsContext'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({})
  const { addNewProduct } = useProducts()

  const submitHandler = e => {
    e.preventDefault()
    addNewProduct(newProduct)
  }
  return (
    <Card
      color='gray'
      shadow={true}
      className='flex items-center mt-4 text-white'
    >
      <Typography variant='h4'>Add New Product</Typography>

      <form className='mt-8 mb-2 w-full px-8' onSubmit={submitHandler}>
        <div className='flex flex-col items-center justify-evenly gap-8'>
          <div className='w-full gap-8 flex items-center'>
            <Input
              label='ProductName'
              value={newProduct?.title || ''}
              onChange={e =>
                setNewProduct(prev => ({ ...prev, title: e.target.value }))
              }
              color='teal'
            />
            <Input
              label='ProductDescription'
              value={newProduct?.description || ''}
              onChange={e =>
                setNewProduct(prev => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              color='teal'
            />
          </div>
          <div className='w-full gap-8 flex items-center'>
            <Input
              label='ProductPrice'
              value={newProduct.price || ''}
              onChange={e =>
                setNewProduct(prev => ({ ...prev, price: e.target.value }))
              }
              color='teal'
            />
            <Input
              label='Stock'
              value={newProduct?.stock || ''}
              onChange={e =>
                setNewProduct(prev => ({ ...prev, stock: e.target.value }))
              }
              color='teal'
            />
          </div>
          <div className='w-full gap-8 flex items-center'>
            <Input
              label='ProductThumbnail'
              value={newProduct?.image || ''}
              onChange={e =>
                setNewProduct(prev => ({ ...prev, image: e.target.value }))
              }
              color='teal'
            />
          </div>
        </div>
        <Button
          className='mt-4 text-lg font-normal'
          fullWidth
          type='submit'
          color={'teal'}
          disabled={newProduct?.title ? false : true}
        >
          Add Product
        </Button>
      </form>
    </Card>
  )
}

export default AddProduct
