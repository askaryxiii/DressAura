import { Card, Typography, Button, Avatar } from '@material-tailwind/react'
import { useProducts } from '../../../context/Products/ProductsContext'
import { Link } from 'react-router-dom'
import BounceLoader from 'react-spinners/BounceLoader'

import { useEffect } from 'react'

const TABLE_HEAD = ['Product', 'Price', 'Operations']

const ProductDashboard = () => {
  const { products, getAllProducts, deleteProduct, productInfoLoading } =
    useProducts()

  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <>
      {productInfoLoading ? (
        <div className='h-[90vh] flex items-center justify-center '>
          <BounceLoader color='#2d5335' />
        </div>
      ) : (
        <div className='w-full flex flex-col  gap-4 '>
          <h1 className='text-center text-4xl text-gray-900 dark:text-gray-200 font-bold mt-4'>
            Products
          </h1>
          <Link to={`/admin/products/add`}>
            <Button color='green' className='w-fit'>
              Add New Product
            </Button>
          </Link>
          <section className='w-full '>
            <Card className='h-full w-full bg-blue-gray-700  border border-gray-500 dark:border-none px-6 '>
              <table className='w-full min-w-max table-auto text-center'>
                <thead>
                  <tr>
                    {TABLE_HEAD.map(head => (
                      <th key={head} className=' pb-4 pt-10 '>
                        <Typography
                          variant='small'
                          color='black'
                          className='font-bold leading-none text-xl'
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {products?.map(({ image, price, _id }, index) => (
                    <tr key={index} className='border border-teal-900'>
                      <td>
                        <Avatar
                          src={image}
                          alt='avatar'
                          size='lg'
                          className='my-0.5'
                        />
                      </td>
                      <td>
                        <Typography
                          variant='small'
                          className='font-normal text-white text-lg'
                        >
                          {price}

                          <span className='text-green-400 text-xl'> $</span>
                        </Typography>
                      </td>
                      <td className='w-1/3'>
                        <Typography
                          variant='small'
                          as={'div'}
                          className='font-normal text-white flex items-center justify-center gap-8 '
                        >
                          <Link to={`/admin/products/${_id}`}>
                            <Button color='blue'>View </Button>
                          </Link>
                          <Link to={`/admin/products/edit/${_id}`}>
                            <Button color='amber'>Edit</Button>
                          </Link>
                          <Button
                            color='red'
                            onClick={() => {
                              deleteProduct(image, _id)
                            }}
                          >
                            Delete
                          </Button>
                        </Typography>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>
        </div>
      )}
    </>
  )
}

export default ProductDashboard
