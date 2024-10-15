import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Input, Button, Typography, Textarea } from '@material-tailwind/react'
import { useProducts } from '../../../context/Products/ProductsContext'

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({})
  const { addNewProduct } = useProducts()

  const submitHandler = e => {
    e.preventDefault()
    addNewProduct(newProduct)
  }
  return (
    <div className="flex flex-col gap-6 w-1/2 h-[90vh] py-10 px-16 ">
    <Typography variant="h4">Edit Product</Typography>
    <form onSubmit={submitHandler} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <span>Product Image</span>
        <Input
          className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          
          onChange={(e) =>
            setProductInfo((prev) => ({
              ...prev,
              image: e.target.value,
            }))
          }
          color="green"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Product Name</span>
        <Input
          size="md"
          onChange={(e) =>
            setProductInfo((prev) => ({ ...prev, title: e.target.value }))
          }
          className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span>Product Description</span>
        <Textarea
          
          onChange={(e) =>
            setProductInfo((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          className=" !border-t-blue-gray-200 rounded-sm focus:!border-gray-700"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <span>Product Category</span>
          <Input
            size="md"
           
            onChange={(e) =>
              setProductInfo((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span>Product Price</span>
          <Input
            size="md"
            
            onChange={(e) =>
              setProductInfo((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
            className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <span>Product Category</span>
          <Input
            size="md"
            
            onChange={(e) =>
              setProductInfo((prev) => ({
                ...prev,
                stock: e.target.value,
              }))
            }
            className=" !border-t-blue-gray-200 rounded-sm w-full focus:!border-gray-700"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
      </div>
      <Button
        size="md"
        type="submit"
        className="text-xs w-fit bg-black rounded-sm">
        Edit Product
      </Button>
    </form>
  </div>
  )
}

export default AddProduct
